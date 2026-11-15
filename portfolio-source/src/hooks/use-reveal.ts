import { useEffect } from "react";

/** Reveals elements in either scroll direction while they are in view. */
export function useReveal() {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));

    if (!("IntersectionObserver" in window)) {
      nodes.forEach((n) => n.setAttribute("data-visible", "true"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          (entry.target as HTMLElement).setAttribute(
            "data-visible",
            entry.isIntersecting ? "true" : "false",
          );
        });
      },
      { threshold: 0.1, rootMargin: "-5% 0px -8% 0px" },
    );

    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, []);
}
