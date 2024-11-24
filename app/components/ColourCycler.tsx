"use client";

import { useRef } from "react";
import { THEME_COLORS } from "@/lib/constants/themeConstants";
import Image from "next/image";

export function ColorCycler() {
  const colorIndexRef = useRef(0);

  const cycleColor = () => {
    colorIndexRef.current = (colorIndexRef.current + 1) % THEME_COLORS.length;
    document.documentElement.style.setProperty(
      "--theme-1",
      THEME_COLORS[colorIndexRef.current],
    );
  };

  return (
    <Image
      src="/media/profile-picture.jpg"
      alt="picture of Josh Tuddenham"
      width={400}
      height={400}
      className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] rounded-full border-4 border-[var(--theme-1)] cursor-pointer dark:brightness-90"
      onClick={cycleColor}
      priority={false}
    />
  );
}
