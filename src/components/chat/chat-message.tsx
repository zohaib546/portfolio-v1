"use client";

import { useTypewriter } from "@/hooks/useTypewriter";

type Props = {
  text: string;
  sender: "user" | "assistant";
  isLatest: boolean;
  isLoading: boolean;
};

export default function ChatMessage({
  text,
  sender,
  isLatest,
  isLoading,
}: Props) {
  const isAssistant = sender === "assistant";
  const shouldAnimate = isAssistant && isLatest;

  // 1. Call hook
  const animatedText = useTypewriter(text, 12, shouldAnimate);

  // 2. Cursor logic
  const showCursor =
    isAssistant && isLatest && (isLoading || animatedText.length < text.length);

  return (
    <div
      className={`max-w-[80%] rounded-lg p-3 text-sm ${
        sender === "user"
          ? "self-end bg-blue-600 text-white"
          : "self-start bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-100"
      }`}
    >
      <span>{animatedText}</span>
      {showCursor && (
        <span className="animate-cursor ml-1 inline-block h-4 w-1.5 rounded-sm bg-blue-500 align-middle" />
      )}
    </div>
  );
}
