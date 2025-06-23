"use client";
import React from "react";
import { ArrowsRightLeftIcon, PlusIcon, MinusIcon } from "@heroicons/react/24/outline";

interface Tension {
  concept: string;
  subtitle: string;
  positive: string;
  negative: string;
  color: string;
}

const tensions: Tension[] = [
  {
    concept: "Experience",
    subtitle: "The knowledge you accumulate over time",
    positive: "Teaches you what works and helps you avoid past mistakes",
    negative: "Can make you risk-averse and resistant to trying new approaches",
    color: "from-blue-500 to-indigo-500"
  },
  {
    concept: "Efficiency",
    subtitle: "Your ability to work quickly and effectively",
    positive: "Helps you produce more output and meet deadlines consistently",
    negative: "Can lead to formulaic, predictable work that lacks originality",
    color: "from-green-500 to-emerald-500"
  },
  {
    concept: "Constraints",
    subtitle: "The limitations and rules that guide your work",
    positive: "Can spark creativity by forcing you to think within boundaries",
    negative: "Can also limit exploration and prevent breakthrough innovations",
    color: "from-purple-500 to-pink-500"
  }
];

const CreativeTensions: React.FC = () => {
  return (
    <div className="my-8">
      <div className="grid gap-6">
        {tensions.map((tension, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden">
            {/* Header */}
            <div className="text-center py-6 border-b border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mt-0 mb-2">
                {tension.concept}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 m-0">
                {tension.subtitle}
              </p>
            </div>

            {/* Tension Visualization */}
            <div className="p-6">
              <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6">
                {/* Positive Side */}
                <div className="flex-1">
                  <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border-l-4 border-green-500">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <PlusIcon className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-800 dark:text-gray-200 font-medium leading-relaxed m-0">
                        {tension.positive}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Arrow - horizontal on desktop, vertical on mobile */}
                <div className="flex-shrink-0 flex justify-center md:block">
                  <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center transform md:transform-none rotate-90 md:rotate-0">
                    <ArrowsRightLeftIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                  </div>
                </div>

                {/* Negative Side */}
                <div className="flex-1">
                  <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4 border-l-4 border-red-500">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <MinusIcon className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-800 dark:text-gray-200 font-medium leading-relaxed m-0">
                        {tension.negative}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreativeTensions;