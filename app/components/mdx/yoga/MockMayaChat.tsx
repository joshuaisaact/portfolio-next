"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";
import MockSessionSuggestion from "./MockSession";
import MockRelatedSequences from "./MockRelatedSequences";
import LotusIcon from "./LotusIcon";

interface MockMessage {
  id: string;
  type: "user" | "maya";
  content: string;
  timestamp: Date;
  suggestions?: string[];
  shouldGenerateSession?: boolean;
  sessionParams?: {
    durationMinutes: number;
    difficulty: string;
    focusArea?: string;
    intensity?: string;
    personalizedNotes?: string;
  };
  foundSequences?: {
    id: string;
    name: string;
    description: string;
    difficulty: string;
    targetDurationMinutes: number;
    intensity: string;
  }[];
  delay?: number; // Delay before showing this message
}

interface MockMayaChatProps {
  scenario: "working-well" | "too-good";
}

const scenarios = {
  "working-well": [
    {
      id: "1",
      type: "maya" as const,
      content: 'Hi there! I\'m <span class="maya-name">Maya</span>, your AI yoga companion 🧘‍♀️ How are you feeling today?',
      timestamp: new Date(),
      suggestions: ["I'm feeling stressed", "I want to energize", "Something gentle please"],
      delay: 0,
    },
    {
      id: "2",
      type: "user" as const,
      content: "I'm feeling stressed",
      timestamp: new Date(),
      delay: 1500,
    },
    {
      id: "3",
      type: "maya" as const,
      content: "I understand that feeling ✨ Let me create a perfect session to help you release that stress and find some calm...",
      timestamp: new Date(),
      delay: 2500,
    },
    {
      id: "4",
      type: "maya" as const,
      content: "Perfect! I've designed a 25-minute gentle session focused on stress relief. It combines calming poses with deep breathing to help you unwind from your day 🌙",
      timestamp: new Date(),
      shouldGenerateSession: true,
      sessionParams: {
        durationMinutes: 25,
        difficulty: "beginner",
        focusArea: "stress relief",
        intensity: "gentle",
        personalizedNotes: "Focus on slow, flowing movements and deep breathing to calm your nervous system",
      },
      suggestions: ["Create this session", "Tell me about the poses", "Make it shorter"],
      delay: 4000,
    },
  ],
  "too-good": [
    {
      id: "1",
      type: "maya" as const,
      content: 'Hi! I\'m <span class="maya-name">Maya</span> 🧘‍♀️ What kind of practice are you looking for today?',
      timestamp: new Date(),
      suggestions: ["Something for bedtime", "Morning energy", "Quick lunch break flow"],
      delay: 0,
    },
    {
      id: "2",
      type: "user" as const,
      content: "Something for bedtime",
      timestamp: new Date(),
      delay: 1000,
    },
    {
      id: "3",
      type: "maya" as const,
      content: "Perfect! I found several bedtime sequences that would work beautifully:",
      timestamp: new Date(),
      foundSequences: [
        {
          id: "1",
          name: "Evening Wind-Down Flow",
          description: "Gentle poses to release tension and prepare for sleep",
          difficulty: "beginner",
          targetDurationMinutes: 15,
          intensity: "gentle",
        },
        {
          id: "2",
          name: "Bedtime Relaxation Sequence",
          description: "Calming poses to help you unwind and relax",
          difficulty: "beginner",
          targetDurationMinutes: 18,
          intensity: "gentle",
        },
        {
          id: "3",
          name: "Gentle Night Flow",
          description: "Soothing movements for evening relaxation",
          difficulty: "beginner",
          targetDurationMinutes: 12,
          intensity: "gentle",
        }
      ],
      suggestions: ["These all look the same...", "I want something different", "Start Evening Wind-Down Flow"],
      delay: 2500,
    },
    {
      id: "4",
      type: "user" as const,
      content: "These all look the same...",
      timestamp: new Date(),
      delay: 4000,
    },
    {
      id: "5",
      type: "maya" as const,
      content: "Let me find some different options for you:",
      timestamp: new Date(),
      foundSequences: [
        {
          id: "4",
          name: "Sleepy Time Stretch",
          description: "Gentle stretches to release tension before bed",
          difficulty: "beginner",
          targetDurationMinutes: 16,
          intensity: "gentle",
        },
        {
          id: "5",
          name: "Peaceful Evening Flow",
          description: "Calming movements to help you wind down",
          difficulty: "beginner",
          targetDurationMinutes: 14,
          intensity: "gentle",
        },
        {
          id: "6",
          name: "Restful Night Sequence",
          description: "Soothing poses for bedtime relaxation",
          difficulty: "beginner",
          targetDurationMinutes: 20,
          intensity: "gentle",
        }
      ],
      suggestions: ["Still too similar", "Can you create something new?", "Start Peaceful Evening Flow"],
      delay: 5500,
    },
    {
      id: "6",
      type: "user" as const,
      content: "Still too similar",
      timestamp: new Date(),
      delay: 7000,
    },
    {
      id: "7",
      type: "maya" as const,
      content: "Here are some more bedtime options:",
      timestamp: new Date(),
      foundSequences: [
        {
          id: "7",
          name: "Nighttime Relaxation Flow",
          description: "Gentle poses to prepare your body for rest",
          difficulty: "beginner",
          targetDurationMinutes: 17,
          intensity: "gentle",
        },
        {
          id: "8",
          name: "Evening Calm Sequence",
          description: "Soothing movements for bedtime preparation",
          difficulty: "beginner",
          targetDurationMinutes: 13,
          intensity: "gentle",
        }
      ],
      suggestions: ["These are basically identical!", "Can you think outside the box?", "I give up"],
      delay: 8500,
    },
  ],
};

const MockMayaChat: React.FC<MockMayaChatProps> = ({ scenario }) => {
  const [messages, setMessages] = useState<MockMessage[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [streamingMessage, setStreamingMessage] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const scenarioMessages = scenarios[scenario];

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      const chatContainer = messagesEndRef.current.closest('.overflow-y-auto');
      if (chatContainer) {
        chatContainer.scrollTop = chatContainer.scrollHeight;
      }
    }
  };

  useEffect(() => {
    // Only scroll if the demo is playing to avoid interfering with page scroll
    if (isPlaying || isStreaming) {
      scrollToBottom();
    }
  }, [messages, streamingMessage, isPlaying, isStreaming]);

  const streamText = (text: string, callback?: () => void) => {
    setIsStreaming(true);
    setStreamingMessage("");

    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setStreamingMessage(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
        setIsStreaming(false);
        setStreamingMessage("");
        callback?.();
      }
    }, 15);
  };

  const playScenario = () => {
    setMessages([]);
    setCurrentIndex(0);
    setIsPlaying(true);

    const playNextMessage = (index: number) => {
      if (index >= scenarioMessages.length) {
        setIsPlaying(false);
        return;
      }

      const message = scenarioMessages[index];

      timeoutRef.current = setTimeout(() => {
        if (message.type === "maya") {
          streamText(message.content, () => {
            setMessages(prev => [...prev, message]);
            setCurrentIndex(index + 1);
            playNextMessage(index + 1);
          });
        } else {
          setMessages(prev => [...prev, message]);
          setCurrentIndex(index + 1);
          playNextMessage(index + 1);
        }
      }, message.delay || 0);
    };

    playNextMessage(0);
  };

  const resetDemo = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setMessages([]);
    setCurrentIndex(0);
    setIsPlaying(false);
    setIsStreaming(false);
    setStreamingMessage("");
  };

  const handleSuggestionClick = (suggestion: string) => {
    // Find the next user message that matches this suggestion
    const nextUserMessage = scenarioMessages.find((msg, index) =>
      index > currentIndex && msg.type === "user" && msg.content === suggestion
    );

    if (nextUserMessage) {
      // Jump to that message and continue
      const messageIndex = scenarioMessages.findIndex((msg, index) =>
        index > currentIndex && msg.type === "user" && msg.content === suggestion
      );
      setCurrentIndex(messageIndex);

      // Add the user message immediately
      setMessages(prev => [...prev, nextUserMessage]);

      // Continue playing from the next message
      setTimeout(() => {
        const playNextMessage = (index: number) => {
          if (index >= scenarioMessages.length) {
            setIsPlaying(false);
            return;
          }

          const message = scenarioMessages[index];

          setTimeout(() => {
            if (message.type === "maya") {
              streamText(message.content, () => {
                setMessages(prev => [...prev, message]);
                setCurrentIndex(index + 1);
                playNextMessage(index + 1);
              });
            } else {
              setMessages(prev => [...prev, message]);
              setCurrentIndex(index + 1);
              playNextMessage(index + 1);
            }
          }, 1000);
        };

        playNextMessage(messageIndex + 1);
      }, 500);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto my-8 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden maya-chat">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 p-4 flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3 bg-gradient-to-r from-purple-500 to-pink-500">
            <LotusIcon className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-gray-900">
              <span className="maya-name">Maya</span>
            </h3>
            <p className="text-xs text-gray-600">
              <span className="maya-name">AI</span> yoga companion (Demo)
            </p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="h-96 overflow-y-auto p-4 space-y-4 bg-gray-50">
        {messages.length === 0 && !isPlaying && (
          <div className="flex items-center justify-center h-full">
            <button
              onClick={playScenario}
              className="px-8 py-4 text-lg rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center space-x-3"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
              <span>Play Demo</span>
            </button>
          </div>
        )}

        {isPlaying && messages.length === 0 && (
          <div className="flex items-center justify-center h-full">
            <button
              onClick={resetDemo}
              className="px-6 py-3 text-base rounded-xl bg-red-100 text-red-700 hover:bg-red-200 transition-colors flex items-center space-x-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
              </svg>
              <span>Reset Demo</span>
            </button>
          </div>
        )}

        {messages.map((message) => {

          return (
            <div
              key={message.id}
              className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`${message.type === "user"
                  ? "max-w-xs lg:max-w-sm"
                  : "max-w-md lg:max-w-lg xl:max-w-xl"
                  } px-4 py-3 rounded-2xl ${message.type === "user"
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                    : "bg-white text-gray-900 border border-gray-200 shadow-sm"
                  }`}
              >
                <div>
                  {message.type === "maya" && (
                    <p className="text-xs mb-2 maya-name">Maya</p>
                  )}
                  <p
                    className="text-sm leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: message.content }}
                  />
                </div>

                {/* Found Sequences */}
                {message.foundSequences && message.foundSequences.length > 0 && (
                  <MockRelatedSequences
                    sequences={message.foundSequences}
                    className="mt-3"
                  />
                )}

                {/* Session Generation */}
                {message.shouldGenerateSession && message.sessionParams && (
                  <MockSessionSuggestion
                    sessionParams={message.sessionParams}
                    onGenerateSession={(params) => {
                      console.log('Demo: Would create session with params:', params);
                    }}
                  />
                )}
              </div>
            </div>
          );
        })}

        {/* Streaming message */}
        {isStreaming && streamingMessage && (
          <div className="flex justify-start">
            <div className="max-w-md lg:max-w-lg xl:max-w-xl px-4 py-3 rounded-2xl bg-white text-gray-900 border border-gray-200 shadow-sm">
              <p className="text-xs mb-2 maya-name">Maya</p>
              <p
                className="text-sm leading-relaxed"
                dangerouslySetInnerHTML={{ __html: streamingMessage }}
              />
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Quick Replies at bottom like real Maya chat */}
      {(() => {
        const latestMayaMessage = messages.filter(m => m.type === "maya").pop();
        return latestMayaMessage?.suggestions && !isStreaming && (
          <div className="border-t border-gray-200 p-3 bg-white">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
              {latestMayaMessage.suggestions.map((suggestion, suggestionIndex) => (
                <button
                  key={suggestionIndex}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="text-left px-3 py-2 text-xs rounded-lg transition-all duration-200 ease-in-out bg-gradient-to-r from-gray-50 to-white border border-gray-200 text-gray-800 cursor-pointer shadow-sm hover:shadow-md hover:-translate-y-0.5"
                  disabled={!isPlaying}
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        );
      })()}

      {/* Footer */}
      <div className="border-t border-gray-200 p-3 bg-white">
        <div className="flex items-center space-x-2 opacity-60">
          <input
            type="text"
            placeholder="This is a demo - click 'Play Demo' to see Maya in action"
            className="flex-1 px-3 py-2 border border-gray-200 rounded-md text-sm bg-gray-50 text-gray-600 placeholder-gray-500"
            disabled
          />
          <button
            disabled
            className="px-3 py-2 bg-gray-200 text-gray-500 rounded-md"
          >
            <PaperAirplaneIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MockMayaChat;