import { useEffect, useState } from "react";
import type { MouseEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { cn } from "@/lib/utils";
import type { GalleryImage } from "@/types";

type ImageGalleryProps = {
  images: readonly GalleryImage[];
  columns?: 2 | 3;
};

const OVERLAY_FADE = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
} as const;

const IMAGE_ZOOM = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
  transition: { duration: 0.2 },
} as const;

const NAV_BUTTON_CLASS = "absolute text-white/80 hover:text-white z-10 bg-black/40 rounded-full p-2";

const ImageGallery = ({ images, columns = 2 }: ImageGalleryProps): JSX.Element => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const isOpen = activeIndex !== null;

  const handleOpen = (index: number): void => {
    setActiveIndex(index);
  };

  const handleClose = (): void => {
    setActiveIndex(null);
  };

  const handleNext = (event: MouseEvent): void => {
    event.stopPropagation();
    setActiveIndex((index) => (index === null ? null : (index + 1) % images.length));
  };

  const handlePrev = (event: MouseEvent): void => {
    event.stopPropagation();
    setActiveIndex((index) => (index === null ? null : (index - 1 + images.length) % images.length));
  };

  const handleContentClick = (event: MouseEvent): void => {
    event.stopPropagation();
  };

  useEffect(() => {
    if (!isOpen) {
      return;
    }
    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const activeImage = activeIndex === null ? null : images[activeIndex];

  return (
    <>
      <div className={cn("grid gap-6", columns === 3 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2")}>
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => handleOpen(index)}
            className="group text-right bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-shadow overflow-hidden"
          >
            <div className="aspect-4/3 bg-white p-2">
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <p className="px-4 py-3 text-sm font-medium text-brand-dark border-t border-gray-100" dir="auto">
              {image.caption}
            </p>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {activeImage && (
          <motion.div
            {...OVERLAY_FADE}
            className="fixed inset-0 z-modal bg-black/80 flex items-center justify-center p-4"
            onClick={handleClose}
            role="dialog"
            aria-modal="true"
            aria-label={activeImage.alt}
          >
            <button type="button" onClick={handleClose} className={cn(NAV_BUTTON_CLASS, "top-4 left-4")} aria-label="סגירה">
              <X className="w-7 h-7" />
            </button>

            {images.length > 1 && (
              <>
                <button type="button" onClick={handlePrev} className={cn(NAV_BUTTON_CLASS, "right-4 md:right-8")} aria-label="התמונה הקודמת">
                  <ChevronRight className="w-8 h-8" />
                </button>
                <button type="button" onClick={handleNext} className={cn(NAV_BUTTON_CLASS, "left-4 md:left-8")} aria-label="התמונה הבאה">
                  <ChevronLeft className="w-8 h-8" />
                </button>
              </>
            )}

            <motion.div
              key={activeImage.src}
              {...IMAGE_ZOOM}
              className="max-w-5xl max-h-modal flex flex-col items-center"
              onClick={handleContentClick}
            >
              <img src={activeImage.src} alt={activeImage.alt} className="max-h-modal-image w-auto rounded-lg object-contain bg-white" />
              <p className="text-white/80 text-sm mt-4 text-center" dir="auto">
                {activeImage.caption}
              </p>
              {images.length > 1 && activeIndex !== null && (
                <p className="text-white/40 text-xs mt-1" dir="ltr">
                  {activeIndex + 1} / {images.length}
                </p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ImageGallery;
