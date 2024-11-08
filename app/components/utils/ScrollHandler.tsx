"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export function ScrollHandler() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const section = searchParams.get("section");

    if (section) {
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          const headerHeight = 64; // This should match your header height (h-16)
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.pageYOffset - headerHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 100);
    }
  }, [searchParams]);

  return null;
}
