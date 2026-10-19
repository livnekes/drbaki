import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import PainTreatment from "./components/PainTreatment";
import MusclePain from "./components/MusclePain";
import Testimonials from "./components/Testimonials";
import Clinic from "./components/Clinic";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App(): JSX.Element {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <Hero />
      <About />
      <PainTreatment />
      <MusclePain />
      <Testimonials />
      <Clinic />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
