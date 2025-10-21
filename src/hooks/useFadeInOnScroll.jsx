import { useEffect } from "react";

export default function useFadeInOnScroll() {
  useEffect(() => {
    const els = document.querySelectorAll(".fade-slide-in, .animate-fadeUp, .fade-section");
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
        }
      });
    }, {threshold: 0.15});
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}
