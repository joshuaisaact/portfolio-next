"use client";
import React from "react";
import {
  SparklesIcon,
  ClockIcon,
  ChartBarIcon,
  FireIcon,
} from "@heroicons/react/24/outline";

interface SessionParams {
  durationMinutes: number;
  difficulty: string;
  focusArea?: string;
  anatomicalFocus?: string;
  intensity?: string;
  poseType?: string;
  personalizedNotes?: string;
  sequenceStyle?: string;
  breathworkFocus?: boolean;
}

interface MockSessionSuggestionProps {
  sessionParams: SessionParams;
  onGenerateSession?: (params: SessionParams) => void;
}

const MockSessionSuggestion: React.FC<MockSessionSuggestionProps> = ({
  sessionParams,
  onGenerateSession = () => { },
}) => {
  const formatDisplay = (str: string) => {
    return str.replace(/([A-Z])/g, ' $1').replace(/^./, (s) => s.toUpperCase()).trim();
  };

  return (
    <div className="mt-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-200 overflow-hidden">
      {/* Header */}
      <div className="p-4 md:p-6 border-b border-gray-100">
        <div className="flex items-start">
          <div className="flex-1 min-w-0">
            <h3 className="text-lg md:text-xl mb-1 transition-colors duration-200 text-purple-600">
              Your Personalized Flow
            </h3>
            <p className="text-sm text-gray-600">
              Designed just for you by <span className="maya-name">Maya</span>
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 md:p-6">
        {/* Main session info */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-4 md:mb-6">
          <div className="text-center">
            <div className="flex items-center space-x-1 mb-2 justify-center">
              <ClockIcon className="hidden md:block w-4 h-4 text-purple-600" />
              <span className="text-xs md:text-sm text-gray-600">Duration</span>
            </div>
            <div className="text-base md:text-lg text-purple-700">
              {sessionParams.durationMinutes} minutes
            </div>
          </div>

          <div className="text-center">
            <div className="flex items-center space-x-1 mb-2 justify-center">
              <ChartBarIcon className="hidden md:block w-4 h-4 text-purple-600" />
              <span className="text-xs md:text-sm text-gray-600">Level</span>
            </div>
            <div className="text-base md:text-lg text-purple-700">
              {sessionParams.difficulty.charAt(0).toUpperCase() +
                sessionParams.difficulty.slice(1)}
            </div>
          </div>

          {sessionParams.intensity && (
            <div className="text-center md:col-span-1 col-span-2">
              <div className="flex items-center space-x-1 mb-2 justify-center">
                <FireIcon className="hidden md:block w-4 h-4 text-purple-600" />
                <span className="text-xs md:text-sm text-gray-600">
                  Intensity
                </span>
              </div>
              <div className="text-base md:text-lg capitalize text-purple-700">
                {sessionParams.intensity}
              </div>
            </div>
          )}
        </div>

        {/* Session Focus */}
        {(sessionParams.focusArea ||
          sessionParams.anatomicalFocus ||
          sessionParams.poseType ||
          sessionParams.sequenceStyle ||
          sessionParams.breathworkFocus) && (
            <div className="mb-6">
              <div className="text-sm text-gray-700 mb-3">Session Focus</div>
              <div className="flex flex-wrap gap-x-3 gap-y-1">
                {sessionParams.focusArea && (
                  <span className="text-sm text-purple-600">
                    {formatDisplay(sessionParams.focusArea)}
                  </span>
                )}
                {sessionParams.anatomicalFocus && (
                  <>
                    {sessionParams.focusArea && (
                      <span className="text-gray-400">•</span>
                    )}
                    <span className="text-sm text-blue-600">
                      {formatDisplay(sessionParams.anatomicalFocus)}
                    </span>
                  </>
                )}
                {sessionParams.poseType && (
                  <>
                    {(sessionParams.focusArea ||
                      sessionParams.anatomicalFocus) && (
                        <span className="text-gray-400">•</span>
                      )}
                    <span className="text-sm text-green-600">
                      {formatDisplay(sessionParams.poseType)}
                    </span>
                  </>
                )}
                {sessionParams.sequenceStyle && (
                  <>
                    {(sessionParams.focusArea ||
                      sessionParams.anatomicalFocus ||
                      sessionParams.poseType) && (
                        <span className="text-gray-400">•</span>
                      )}
                    <span className="text-sm text-orange-600">
                      {formatDisplay(sessionParams.sequenceStyle)}
                    </span>
                  </>
                )}
                {sessionParams.breathworkFocus && (
                  <>
                    {(sessionParams.focusArea ||
                      sessionParams.anatomicalFocus ||
                      sessionParams.poseType ||
                      sessionParams.sequenceStyle) && (
                        <span className="text-gray-400">•</span>
                      )}
                    <span className="text-sm text-teal-600">
                      🌬️ Breathwork Focus
                    </span>
                  </>
                )}
              </div>
            </div>
          )}

        {/* Personal notes */}
        {sessionParams.personalizedNotes && (
          <div className="mb-6 border-l-4 border-purple-200 pl-4">
            <h4 className="text-sm text-gray-700 mb-2">💭 Personal Touch</h4>
            <p className="text-sm text-gray-600">
              {formatDisplay(sessionParams.personalizedNotes)}
            </p>
          </div>
        )}

        {/* CTA Button */}
        <button
          onClick={() => onGenerateSession(sessionParams)}
          className="w-full py-4 px-6 rounded-xl text-lg shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 flex items-center justify-center space-x-2 text-white cursor-pointer bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = '';
          }}
        >
          <SparklesIcon className="w-5 h-5" />
          <span>Create This Flow</span>
        </button>
      </div>
    </div>
  );
};

export default MockSessionSuggestion;