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
    <div className="mt-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-200 overflow-hidden mock-session">
      <style jsx>{`
        .mock-session p {
          margin-top: 0 !important;
          margin-bottom: 0 !important;
        }
        .mock-session h1,
        .mock-session h2,
        .mock-session h3,
        .mock-session h4,
        .mock-session h5,
        .mock-session h6 {
          margin-top: 0 !important;
          margin-bottom: 0 !important;
        }
      `}</style>
      {/* Header */}
      <div className="p-3 border-b border-gray-100">
        <div className="flex items-start">
          <div className="flex-1 min-w-0">
            <h3 className="text-base font-semibold mb-1 transition-colors duration-200 text-purple-600">
              Your Personalized Flow
            </h3>
            <p className="text-xs text-gray-600">
              Designed just for you by <span className="maya-name">Maya</span>
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-3">
        {/* Main session info */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-3">
          <div className="text-center">
            <div className="flex items-center space-x-1 mb-1 justify-center">
              <ClockIcon className="w-3 h-3 text-purple-600" />
              <span className="text-xs text-gray-600">Duration</span>
            </div>
            <div className="text-sm font-medium text-purple-700">
              {sessionParams.durationMinutes} minutes
            </div>
          </div>

          <div className="text-center">
            <div className="flex items-center space-x-1 mb-1 justify-center">
              <ChartBarIcon className="w-3 h-3 text-purple-600" />
              <span className="text-xs text-gray-600">Level</span>
            </div>
            <div className="text-sm font-medium text-purple-700">
              {sessionParams.difficulty.charAt(0).toUpperCase() +
                sessionParams.difficulty.slice(1)}
            </div>
          </div>

          {sessionParams.intensity && (
            <div className="text-center md:col-span-1 col-span-2">
              <div className="flex items-center space-x-1 mb-1 justify-center">
                <FireIcon className="w-3 h-3 text-purple-600" />
                <span className="text-xs text-gray-600">
                  Intensity
                </span>
              </div>
              <div className="text-sm font-medium capitalize text-purple-700">
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
            <div className="mb-3">
              <div className="text-xs text-gray-700 mb-2">Session Focus</div>
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
          <div className="mb-3 border-l-4 border-purple-200 pl-3">
            <h4 className="text-xs text-gray-700 mb-1">💭 Personal Touch</h4>
            <p className="text-xs text-gray-600">
              {formatDisplay(sessionParams.personalizedNotes)}
            </p>
          </div>
        )}

        {/* CTA Button */}
        <button
          onClick={() => onGenerateSession(sessionParams)}
          className="w-full py-2.5 px-4 rounded-lg text-sm font-medium shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 flex items-center justify-center space-x-2 text-white cursor-pointer bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-1px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = '';
          }}
        >
          <SparklesIcon className="w-4 h-4" />
          <span>Create This Flow</span>
        </button>
      </div>
    </div>
  );
};

export default MockSessionSuggestion;