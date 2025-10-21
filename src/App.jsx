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
import WhereAgenciesGetStuck from "./components/WhereAgenciesGetStuck";
import OfficialPartner from "./components/OfficialPartner";

export default function App() {
  useFadeInOnScroll();
  return (
    <div className="relative z-10 text-gray-200 font-sans overflow-x-hidden bg-transparent min-h-screen">
      <AnimatedBackground />
      <Navbar />
      <main>
        <HeroSection />
        <SliderSection />
        <OfficialPartner />
        <WhereAgenciesGetStuck />
        <WhyPlnitude />
        <CaseStudies />
        <HowWeWork />
        <AboutSection />
        <FAQSection />
        <CTABookCall />
      </main>
      <Footer />
    </div>
  );
}
