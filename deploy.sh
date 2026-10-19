#!/bin/bash

BUCKET_NAME="dr-baki-harash-site"
REGION="us-east-1"
LOCAL_DIR="./dist"
AWS_PROFILE="default"

echo "=== Dr. Baki Harash Site - Deployment Script ==="
echo "Deploying to S3 bucket: $BUCKET_NAME (profile: $AWS_PROFILE)"
echo ""

# Build the project
echo "Building project..."
npm run build
if [ $? -ne 0 ]; then
  echo "Build failed. Aborting deployment."
  exit 1
fi

# Create bucket (ignore if exists)
echo "Creating S3 bucket..."
aws s3 mb s3://$BUCKET_NAME --region $REGION --profile $AWS_PROFILE 2>/dev/null || echo "Bucket already exists"

# Configure static website hosting with redirect on error
echo "Configuring static website hosting..."
aws s3api put-bucket-website --bucket $BUCKET_NAME --profile $AWS_PROFILE --website-configuration '{
  "IndexDocument": { "Suffix": "index.html" },
  "ErrorDocument": { "Key": "index.html" },
  "RoutingRules": [
    {
      "Condition": { "HttpErrorCodeReturnedEquals": "404" },
      "Redirect": { "ReplaceKeyWith": "", "HttpRedirectCode": "302" }
    },
    {
      "Condition": { "HttpErrorCodeReturnedEquals": "403" },
      "Redirect": { "ReplaceKeyWith": "", "HttpRedirectCode": "302" }
    }
  ]
}'

# Disable block public access
echo "Configuring public access..."
aws s3api put-public-access-block --bucket $BUCKET_NAME --profile $AWS_PROFILE \
  --public-access-block-configuration "BlockPublicAcls=false,IgnorePublicAcls=false,BlockPublicPolicy=false,RestrictPublicBuckets=false"

# Create and apply public read policy
echo "Setting bucket policy..."
cat > /tmp/baki-harash-bucket-policy.json << EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::$BUCKET_NAME/*"
    }
  ]
}
EOF

aws s3api put-bucket-policy --bucket $BUCKET_NAME --policy file:///tmp/baki-harash-bucket-policy.json --profile $AWS_PROFILE

# Sync static assets with long cache
echo "Uploading static assets to S3..."
aws s3 sync $LOCAL_DIR s3://$BUCKET_NAME --delete --profile $AWS_PROFILE \
  --cache-control "public, max-age=31536000" \
  --exclude "*.html" \
  --exclude "*.json"

# Upload HTML and JSON files with no cache (for SPA routing)
echo "Uploading HTML/JSON files to S3..."
aws s3 sync $LOCAL_DIR s3://$BUCKET_NAME --profile $AWS_PROFILE \
  --cache-control "public, max-age=0, must-revalidate" \
  --exclude "*" \
  --include "*.html" \
  --include "*.json"

# Check if CloudFront distribution already exists
DISTRIBUTION_ID=$(aws cloudfront list-distributions --profile $AWS_PROFILE \
  --query "DistributionList.Items[?Comment=='Dr Baki Harash Site'].Id | [0]" --output text 2>/dev/null)

if [ "$DISTRIBUTION_ID" = "None" ] || [ -z "$DISTRIBUTION_ID" ]; then
  echo ""
  echo "Creating CloudFront distribution..."
  cat > /tmp/baki-harash-cf-config.json << EOF
{
  "CallerReference": "baki-harash-$(date +%s)",
  "DefaultRootObject": "index.html",
  "Comment": "Dr Baki Harash Site",
  "Enabled": true,
  "Origins": {
    "Quantity": 1,
    "Items": [
      {
        "Id": "S3-$BUCKET_NAME",
        "DomainName": "$BUCKET_NAME.s3-website-$REGION.amazonaws.com",
        "CustomOriginConfig": {
          "HTTPPort": 80,
          "HTTPSPort": 443,
          "OriginProtocolPolicy": "http-only"
        }
      }
    ]
  },
  "DefaultCacheBehavior": {
    "TargetOriginId": "S3-$BUCKET_NAME",
    "ViewerProtocolPolicy": "redirect-to-https",
    "TrustedSigners": {
      "Enabled": false,
      "Quantity": 0
    },
    "ForwardedValues": {
      "QueryString": false,
      "Cookies": {
        "Forward": "none"
      }
    },
    "MinTTL": 0,
    "DefaultTTL": 86400,
    "MaxTTL": 31536000,
    "Compress": true
  },
  "CustomErrorResponses": {
    "Quantity": 2,
    "Items": [
      {
        "ErrorCode": 404,
        "ResponsePagePath": "/index.html",
        "ResponseCode": "200",
        "ErrorCachingMinTTL": 0
      },
      {
        "ErrorCode": 403,
        "ResponsePagePath": "/index.html",
        "ResponseCode": "200",
        "ErrorCachingMinTTL": 0
      }
    ]
  },
  "PriceClass": "PriceClass_100"
}
EOF

  DISTRIBUTION_RESULT=$(aws cloudfront create-distribution --distribution-config file:///tmp/baki-harash-cf-config.json --profile $AWS_PROFILE)
  DISTRIBUTION_ID=$(echo $DISTRIBUTION_RESULT | python3 -c "import sys,json; print(json.load(sys.stdin)['Distribution']['Id'])")
  CLOUDFRONT_DOMAIN=$(echo $DISTRIBUTION_RESULT | python3 -c "import sys,json; print(json.load(sys.stdin)['Distribution']['DomainName'])")
  echo "Created CloudFront distribution: $DISTRIBUTION_ID"
else
  echo "Invalidating CloudFront cache..."
  aws cloudfront create-invalidation --distribution-id $DISTRIBUTION_ID --paths "/*" --profile $AWS_PROFILE > /dev/null
  CLOUDFRONT_DOMAIN=$(aws cloudfront get-distribution --id $DISTRIBUTION_ID --profile $AWS_PROFILE --query 'Distribution.DomainName' --output text)
  echo "Invalidation created for distribution: $DISTRIBUTION_ID"
fi

# Clean up temp files
rm -f /tmp/baki-harash-bucket-policy.json /tmp/baki-harash-cf-config.json

echo ""
echo "=== Deployment Complete ==="
echo "S3 Website URL:       http://$BUCKET_NAME.s3-website-$REGION.amazonaws.com"
echo "CloudFront HTTPS URL: https://$CLOUDFRONT_DOMAIN"
echo ""
echo "Deployment finished!"
