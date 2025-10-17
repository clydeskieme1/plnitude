import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import SliderSection from "./components/SliderSection";
import WhyPlnitude from "./components/WhyPlnitude";
import FAQSection from "./components/FAQSection";
import HowWeWork from "./components/HowWeWork.jsx";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="bg-white text-gray-800 font-sans overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <SliderSection />
        <WhyPlnitude />
        <HowWeWork />
        <Testimonials />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;