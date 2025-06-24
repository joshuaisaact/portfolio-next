"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  PaperAirplaneIcon,
  ChatBubbleLeftRightIcon,
  ClockIcon,
  ChartBarIcon,
  FireIcon,
  CheckIcon,
} from "@heroicons/react/24/outline";
import { FaBalanceScale } from "react-icons/fa";
import { LuBicepsFlexed } from "react-icons/lu";
import { GrYoga } from "react-icons/gr";
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
  shouldShowGenerationUI?: boolean;
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

// Mock Generation UI Component
function MockGenerationUI() {
  const [currentStep, setCurrentStep] = useState(0);
  const [conversationalMessages, setConversationalMessages] = useState<Array<{
    id: string;
    text: string;
    type: "maya" | "system" | "success";
    timestamp: number;
  }>>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [currentIconIndex, setCurrentIconIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const yogaIcons = [
    { icon: LotusIcon, colorScheme: "primary" },
    { icon: GrYoga, colorScheme: "subtle" },
    { icon: LuBicepsFlexed, colorScheme: "rich" },
    { icon: FaBalanceScale, colorScheme: "zen" },
  ];

  const generationSteps = [
    "25 minutes of beginner level - got it!",
    "Focusing on stress relief today 🧘‍♀️",
    "Found 47 poses in the database matching your criteria",
    "AI is analyzing pose combinations...",
    "Building flow sequences with proper transitions",
    "Adding personalized modifications for stress relief",
    "Finalizing your practice with deep relaxation",
    "Perfect! Your session is ready ✨"
  ];

  const scrollToBottom = () => {
    // Only scroll within the generation UI, not the whole page
    if (messagesEndRef.current) {
      const chatContainer = messagesEndRef.current.closest('.max-h-48');
      if (chatContainer) {
        chatContainer.scrollTop = chatContainer.scrollHeight;
      }
    }
  };

  useEffect(() => {
    // Only scroll if there are messages to avoid initial scroll
    if (conversationalMessages.length > 0) {
      scrollToBottom();
    }
  }, [conversationalMessages, isTyping]);

  // Icon rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIconIndex((idx) => (idx + 1) % yogaIcons.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [yogaIcons.length]);

  // Message display system
  useEffect(() => {
    let isMounted = true;

    const displayMessages = async () => {
      for (let i = 0; i < generationSteps.length; i++) {
        if (!isMounted) return;

        await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 500));
        if (!isMounted) return;

        setIsTyping(true);
        await new Promise(resolve => setTimeout(resolve, 600 + Math.random() * 300));
        if (!isMounted) return;

        const newMessage = {
          id: Date.now().toString() + i,
          text: generationSteps[i],
          type: (i === generationSteps.length - 1 ? "success" : "maya") as "maya" | "system" | "success",
          timestamp: Date.now(),
        };

        setConversationalMessages(prev => [...prev, newMessage]);
        setIsTyping(false);
        setCurrentStep(i + 1);

        if (i === generationSteps.length - 1) {
          if (!isMounted) return;
          await new Promise(resolve => setTimeout(resolve, 1000));
          if (!isMounted) return;
          setIsComplete(true);
        }
      }
    };

    displayMessages();

    return () => {
      isMounted = false;
    };
  }, [generationSteps]);

  const CurrentIcon = yogaIcons[currentIconIndex].icon;

  return (
    <div className="mt-4 bg-gray-50 rounded-xl border border-gray-200 overflow-hidden mock-generation-ui">
      <style jsx>{`
        .mock-generation-ui p {
          margin-top: 0 !important;
          margin-bottom: 0 !important;
        }
        .mock-generation-ui h1,
        .mock-generation-ui h2,
        .mock-generation-ui h3,
        .mock-generation-ui h4,
        .mock-generation-ui h5,
        .mock-generation-ui h6 {
          margin-top: 0 !important;
          margin-bottom: 0 !important;
        }
      `}</style>
      {/* Maya Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4">
        <div className="flex items-center space-x-3 text-white">
          <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
            <ChatBubbleLeftRightIcon className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-semibold text-sm">Maya&apos;s Personal Touch</h3>
            <p className="text-xs text-purple-100">
              Crafting your perfect practice
            </p>
          </div>
        </div>
      </div>

      {/* Session Parameters Preview */}
      <div className="p-4 border-b border-gray-200">
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="flex items-center space-x-1 mb-1 justify-center">
              <ClockIcon className="w-3 h-3 text-purple-600" />
              <span className="text-xs text-gray-600">Duration</span>
            </div>
            <div className="text-sm text-purple-700 font-medium">25 minutes</div>
          </div>
          <div className="text-center">
            <div className="flex items-center space-x-1 mb-1 justify-center">
              <ChartBarIcon className="w-3 h-3 text-purple-600" />
              <span className="text-xs text-gray-600">Level</span>
            </div>
            <div className="text-sm text-purple-700 font-medium">Beginner</div>
          </div>
          <div className="text-center">
            <div className="flex items-center space-x-1 mb-1 justify-center">
              <FireIcon className="w-3 h-3 text-purple-600" />
              <span className="text-xs text-gray-600">Focus</span>
            </div>
            <div className="text-sm text-purple-700 font-medium">Stress Relief</div>
          </div>
        </div>
      </div>

      {/* Main Creation Section */}
      <div className="p-4">
        {/* Header with animated icon */}
        <div className="text-center mb-4">
          <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-1000">
            <CurrentIcon className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-lg font-semibold text-purple-700 mb-1">
            Maya is creating your session...
          </h3>
          <p className="text-gray-600 text-xs">
            Your AI yoga companion is designing something beautiful
          </p>
        </div>

        {/* Conversation Area */}
        <div className="space-y-3 mb-4 max-h-48 overflow-y-auto">
          {conversationalMessages.map((message) => (
            <div key={message.id} className="flex justify-start">
              <div className="max-w-xs text-left">
                <div className={`inline-block px-3 py-2 rounded-xl text-xs border ${message.type === "success"
                  ? "bg-green-50 border-green-100 text-green-800 font-medium"
                  : "bg-white border-gray-200 text-gray-900 shadow-sm"
                  }`}>
                  <p className="text-xs font-medium mb-1 text-purple-600">Maya</p>
                  <p className="leading-relaxed">{message.text}</p>
                </div>
              </div>
            </div>
          ))}

          {/* Typing indicator */}
          {isTyping && (
            <div className="flex justify-start">
              <div className="max-w-xs text-left">
                <div className="bg-white border border-gray-200 rounded-xl px-3 py-2 shadow-sm">
                  <p className="text-xs font-medium mb-1 text-purple-600">Maya</p>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-gray-500">is thinking...</span>
                    <div className="flex space-x-1">
                      <div className="w-1 h-1 bg-purple-400 rounded-full animate-bounce"></div>
                      <div className="w-1 h-1 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                      <div className="w-1 h-1 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Progress Indicator */}
        <div className="bg-white rounded-lg p-3 border border-gray-100 mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-gray-700">Generation Progress</span>
            <span className="text-xs text-gray-500">{Math.min(currentStep, 8)}/8 steps</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1 overflow-hidden">
            <div
              className="h-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-1000 ease-out"
              style={{ width: `${Math.min((currentStep / 8) * 100, 100)}%` }}
            ></div>
          </div>
        </div>

        {/* Success State */}
        {isComplete && (
          <div className="text-center bg-green-50 rounded-lg p-3 border border-green-200">
            <div className="w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2 bg-gradient-to-r from-purple-500 to-pink-500">
              <CheckIcon className="w-4 h-4 text-white" />
            </div>
            <h4 className="text-sm font-semibold text-purple-700 mb-1">Your Session is Ready!</h4>
            <p className="text-gray-600 text-xs mb-2">
              Maya has crafted something beautiful for you.
            </p>
            <div className="flex items-center justify-center space-x-2 text-gray-500">
              <div className="animate-spin w-2 h-2 border border-gray-300 rounded-full border-t-purple-600"></div>
              <span className="text-xs">Taking you to your session...</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
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
    {
      id: "5",
      type: "user" as const,
      content: "Create this session",
      timestamp: new Date(),
      delay: 5500,
    },
    {
      id: "6",
      type: "maya" as const,
      content: "Perfect! Let me create your practice...",
      timestamp: new Date(),
      shouldShowGenerationUI: true,
      delay: 6500,
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
      <style jsx>{`
        .maya-chat p {
          margin-top: 0 !important;
          margin-bottom: 0 !important;
        }
        .maya-chat h1,
        .maya-chat h2,
        .maya-chat h3,
        .maya-chat h4,
        .maya-chat h5,
        .maya-chat h6 {
          margin-top: 0 !important;
          margin-bottom: 0 !important;
        }
      `}</style>
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

        {/* Reset Demo Button */}
        {(isPlaying || messages.length > 0) && (
          <button
            onClick={resetDemo}
            className="px-3 py-1.5 text-xs rounded-md bg-red-100 text-red-700 hover:bg-red-200 transition-colors flex items-center space-x-1"
          >
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
            </svg>
            <span>Reset</span>
          </button>
        )}
      </div>

      {/* Messages */}
      <div className="h-96 overflow-y-auto p-4 space-y-4 bg-gray-50">
        {!isPlaying && messages.length === 0 && (
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

                {/* Generation UI */}
                {message.shouldShowGenerationUI && (
                  <MockGenerationUI />
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