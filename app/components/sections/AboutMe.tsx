"use client";

import Image from "next/image";
import { useRef } from "react";
import { THEME_COLORS } from "@/lib/constants/themeConstants";

export function AboutMe() {
  const colorIndexRef = useRef(0);

  const cycleColor = () => {
    colorIndexRef.current = (colorIndexRef.current + 1) % THEME_COLORS.length;
    document.documentElement.style.setProperty(
      "--theme-1",
      THEME_COLORS[colorIndexRef.current],
    );
  };

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 justify-center justify-items-end py-60 mx-12">
      <div className="order-2 lg:order-1 p-4">
        <p className="p-4 text-4xl dark:text-gray-200 leading-normal">
          <span className={`fade-in delay-1`}>{`Hi! `}</span>
          <span className={`fade-in delay-2`}>{`I'm `}</span>
          <span
            className={`fade-in delay-2 text-[var(--theme-1)] font-bold start-bouncing`}
          >
            {`Joshua Tuddenham.`}
          </span>
          <span className={`fade-in delay-3`}>{` I'm a `}</span>
          <span className={`fade-in delay-3`}>
            <b>{`full-stack engineer.`}</b>
          </span>
          <span
            className={`fade-in delay-4`}
          >{` Explore my latest projects and check out what I'm currently working on.`}</span>
        </p>
      </div>
      <div className="order-1 lg:order-2 flex justify-center">
        <Image
          src="/media/profile-picture.jpg"
          alt="picture of Josh Tuddenham"
          width={400}
          height={400}
          className="rounded-full border-4 border-[var(--theme-1)] cursor-pointer start-bouncing dark:brightness-90"
          onClick={cycleColor}
          priority
        />
      </div>
    </section>
  );
}
