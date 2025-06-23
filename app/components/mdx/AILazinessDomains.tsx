"use client";
import React from "react";
import {
  RectangleStackIcon,
  WrenchScrewdriverIcon,
  CodeBracketIcon,
  AcademicCapIcon
} from "@heroicons/react/24/outline";

interface Domain {
  name: string;
  challenge: string;
  icon: React.ComponentType<{ className?: string }>;
  gradient: string;
}

const domains: Domain[] = [
  {
    name: "Content Platforms",
    challenge: "How do recommendation systems balance familiar vs. novel content?",
    icon: RectangleStackIcon,
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    name: "Creative Tools",
    challenge: "How do AI assistants balance efficiency vs. exploration?",
    icon: WrenchScrewdriverIcon,
    gradient: "from-purple-500 to-pink-500"
  },
  {
    name: "Code Generation",
    challenge: "How do AI developers balance proven patterns vs. innovative approaches?",
    icon: CodeBracketIcon,
    gradient: "from-green-500 to-emerald-500"
  },
  {
    name: "Educational Systems",
    challenge: "How do AI tutors balance teaching fundamentals vs. encouraging creative thinking?",
    icon: AcademicCapIcon,
    gradient: "from-amber-500 to-orange-500"
  }
];

const AILazinessDomains: React.FC = () => {
  return (
    <div className="my-8">
      <div className="grid gap-4 md:grid-cols-2">
        {domains.map((domain, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm p-6 hover:shadow-md transition-shadow duration-200">
            <div className="flex items-start space-x-4">
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${domain.gradient} flex items-center justify-center flex-shrink-0`}>
                <domain.icon className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mt-0 mb-2">
                  {domain.name}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed m-0">
                  {domain.challenge}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AILazinessDomains;