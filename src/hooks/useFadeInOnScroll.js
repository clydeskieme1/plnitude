import { useEffect } from "react";

export default function useFadeInOnScroll() {
  useEffect(() => {
    const sections = document.querySelectorAll(".fade-section, .fade-slide-in");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);
}
