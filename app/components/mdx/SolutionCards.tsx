"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  MagnifyingGlassIcon,
  PuzzlePieceIcon,
  LightBulbIcon,
  ClockIcon,
  HeartIcon,
  ExclamationTriangleIcon
} from "@heroicons/react/24/outline";

interface Solution {
  id: number;
  title: string;
  description: string;
  approach: string;
  problem: string;
  icon: React.ComponentType<{ className?: string }>;
  gradient: string;
}

const solutions: Solution[] = [
  {
    id: 1,
    title: "Smart Reuse Logic",
    description: "Be selective about when to reuse content",
    approach: "Only reuse existing sequences if they match 80%+ of what the user is asking for—duration, difficulty, focus area, etc. Otherwise, create something fresh.",
    problem: "Defining '80% match' is surprisingly complex, and AI tends to be generous with its matching criteria. Who watches the watchers?",
    icon: MagnifyingGlassIcon,
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    title: "Templated Customization",
    description: "Start with structure, add personal touches",
    approach: "Use existing sequences as templates and modify them for individual users—adjusting duration, swapping poses, or changing the focus area while keeping the core structure intact.",
    problem: "This could create endless minor variations of the same content, cluttering the database with sequences that are 95% identical but not meaningfully different.",
    icon: PuzzlePieceIcon,
    gradient: "from-purple-500 to-pink-500"
  },
  {
    id: 3,
    title: "Forced Creativity Rules",
    description: "Build innovation into the system requirements",
    approach: "Set hard rules that require creativity, such as only reusing content for exact matches, or always customizing at least 3 elements of any existing sequence.",
    problem: "Artificial constraints often produce artificial-feeling results. When creativity is mandated rather than inspired, the output tends to feel mechanical and inauthentic.",
    icon: LightBulbIcon,
    gradient: "from-amber-500 to-orange-500"
  },
  {
    id: 4,
    title: "Time-Based Freshness",
    description: "Ensure content doesn't get stale over time",
    approach: "Force novelty by creating new content regularly, or only allowing reuse of sequences that are older than a set timeframe (for example, more than 30 days old).",
    problem: "Arbitrary time limits don't guarantee quality or relevance. Just because something is new doesn't mean it's better. Fresh doesn't equal good.",
    icon: ClockIcon,
    gradient: "from-green-500 to-emerald-500"
  },
  {
    id: 5,
    title: "Contextual Creativity",
    description: "Match the solution to the emotional need",
    approach: "Leverage existing sequences for standard requests like 'morning flow' or 'hip openers', but create custom content when users share emotional context or highly specific needs.",
    problem: "Defining these boundaries is complex, and edge cases abound. Where exactly do you draw the line between 'standard' and 'specific'?",
    icon: HeartIcon,
    gradient: "from-rose-500 to-red-500"
  }
];

const SolutionCard: React.FC<{ solution: Solution; index: number }> = ({ solution, index }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!cardRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate when animation should start and end
      const animationStart = windowHeight; // Start when top of card hits bottom of viewport
      const animationEnd = windowHeight * 0.3; // End when top of card is 30% up the viewport

      // Current position of card top relative to viewport bottom
      const currentPosition = rect.top;

      // Calculate progress (0 to 1)
      let progress = 0;
      if (currentPosition <= animationStart && currentPosition >= animationEnd) {
        progress = (animationStart - currentPosition) / (animationStart - animationEnd);
      } else if (currentPosition < animationEnd) {
        progress = 1; // Fully animated in
      }

      // Clamp between 0 and 1
      progress = Math.max(0, Math.min(1, progress));
      setScrollProgress(progress);
    };

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Initial calculation
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const Icon = solution.icon;

  // Alternate left/right animation based on index
  const isEven = index % 2 === 0;

  // Calculate transform values based on scroll progress
  const translateX = isEven
    ? -48 * (1 - scrollProgress) // Slide from left (-48px to 0)
    : 48 * (1 - scrollProgress);  // Slide from right (48px to 0)

  const opacity = scrollProgress;

  return (
    <div
      ref={cardRef}
      className="transform transition-none" // Remove CSS transitions to use scroll-driven animation
      style={{
        transform: `translateX(${translateX}px)`,
        opacity: opacity,
      }}
    >
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
        {/* Header */}
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-start space-x-4">
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${solution.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
              <Icon className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-0">
                {solution.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed m-0">
                {solution.description}
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Approach */}
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-2 flex items-center mt-0">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              The Approach
            </h4>
            <p className="text-gray-700 leading-relaxed m-0">
              {solution.approach}
            </p>
          </div>

          {/* Problem */}
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-2 flex items-center mt-0">
              <ExclamationTriangleIcon className="w-4 h-4 text-amber-500 mr-2" />
              The Problem
            </h4>
            <p className="text-gray-600 leading-relaxed m-0">
              {solution.problem}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const SolutionCards: React.FC = () => {
  return (
    <div className="my-12">
      <div className="grid gap-8 md:gap-6">
        {solutions.map((solution, index) => (
          <SolutionCard
            key={solution.id}
            solution={solution}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default SolutionCards;