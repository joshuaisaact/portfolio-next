"use client";

import Image from "next/image";
import { useState } from "react";

const THEME_COLORS = [
  "#e07a14",
  "#723e5a",
  "#9c852a",
  "#C589A3",
  "#42d499",
  "#5459de",
  "#481682",
  "#3e7256",
] as const;

export function AboutMe() {
  const [colorIndex, setColorIndex] = useState(0);

  const cycleColor = () => {
    const nextIndex = (colorIndex + 1) % THEME_COLORS.length;
    setColorIndex(nextIndex);
    // Update the CSS variable
    document.documentElement.style.setProperty(
      "--theme-1",
      THEME_COLORS[nextIndex],
    );
  };

  return (
    <section className="grid grid-cols-2 justify-center justify-items-end py-60 mx-12">
      <p className="p-4 text-4xl dark:text-gray-200 leading-normal">
        {`Hi! I'm `}
        <span className="text-[var(--theme-1)] font-bold start-bouncing">
          Joshua Tuddenham
        </span>
        {`. I'm a `}
        <b>full-stack engineer</b>
        {`. Explore my latest projects and check out what I'm currently working on.`}
      </p>

      <Image
        src="/media/profile-picture.jpg"
        alt="picture of Josh Tuddenham"
        width={400}
        height={400}
        className="rounded-full border-4 border-[var(--theme-1)] cursor-pointer start-bouncing dark:brightness-90"
        onClick={cycleColor}
        priority
      />
    </section>
  );
}
