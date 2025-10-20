import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import WhyPlnitude from "./components/WhyPlnitude";
import HowWeWork from "./components/HowWeWork";
import CaseStudies from "./components/CaseStudies";
import AboutSection from "./components/AboutSection";
import FAQSection from "./components/FAQSection";
import CTABookCall from "./components/CTABookCall";
import Footer from "./components/Footer";
import AnimatedBackground from "./components/AnimatedBackground";
import useFadeInOnScroll from "./hooks/useFadeInOnScroll";
import SliderSection from "./components/SliderSection";

export default function App() {
  useFadeInOnScroll();
  return (
    <div className="relative text-gray-800 font-sans overflow-x-hidden">
      <AnimatedBackground />
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
