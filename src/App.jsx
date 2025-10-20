import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import SliderSection from "./components/SliderSection";
import WhyPlnitude from "./components/WhyPlnitude";
import FAQSection from "./components/FAQSection";
import HowWeWork from "./components/HowWeWork.jsx";
import CaseStudies from "./components/CaseStudies";
import AboutSection from "./components/AboutSection";
import CTABookCall from "./components/CTABookCall";


function App() {
  return (
    <div className="bg-white text-gray-800 font-sans overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <SliderSection />
        <WhyPlnitude />
        <HowWeWork />
        <CaseStudies />
        <AboutSection />
        <FAQSection />
        <CTABookCall />
      </main>
      <Footer />
    </div>
  );
}

export default App;