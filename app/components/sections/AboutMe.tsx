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
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-center lg:justify-items-end py-8 sm:py-12 md:py-16 lg:py-24 sm:mx-8 ">
      <div className="order-2 lg:order-1 p-2 sm:p-4 justify-self-center lg:justify-self-end space-y-6">
        <div className="space-y-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl dark:text-gray-200 leading-normal">
            <span className="fade-in delay-1">{`Hi! `}</span>
            <span className="fade-in delay-2">{`I'm `}</span>
            <span className="fade-in delay-2 text-[var(--theme-1)] font-bold start-bouncing">
              {`Joshua Tuddenham`}
            </span>
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl dark:text-gray-200 leading-normal fade-in delay-3">
            A <span className="font-semibold">full-stack engineer</span> with
            enterprise SaaS expertise
          </p>
        </div>

        <div className="prose dark:prose-invert max-w-none space-y-4 fade-in delay-4">
          <p className="text-lg text-gray-700 dark:text-gray-300">
            I combine deep technical expertise with hands-on experience driving
            enterprise software adoption. I recently led the frontend
            development of an award-winning DEI platform, and I'm passionate
            about creating applications that make a real difference.
          </p>

          <div className="flex gap-4 pt-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-[var(--theme-1)] rounded-md hover:opacity-90 transition-opacity"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-[var(--theme-1)] border border-[var(--theme-1)] rounded-md hover:bg-[var(--theme-1)]/10 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      <div className="order-1 lg:order-2 flex justify-center fade-in delay-1">
        <Image
          src="/media/profile-picture.jpg"
          alt="picture of Josh Tuddenham"
          width={400}
          height={400}
          className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px]
                 rounded-full border-4 border-[var(--theme-1)] cursor-pointer
                 start-bouncing dark:brightness-90"
          onClick={cycleColor}
          priority
        />
      </div>
    </section>
  );
}

export default AboutMe;
