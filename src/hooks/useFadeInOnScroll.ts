import { useEffect } from "react";

export function useFadeInOnScroll(elementId: string, threshold = 0.2) {
  useEffect(() => {
    const el = document.getElementById(elementId);
    if (!el) return;

    el.classList.add("opacity-0");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("animate-fade-in");
          el.classList.remove("opacity-0");
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [elementId, threshold]);
}
