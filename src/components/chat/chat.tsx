//

"use client";

import { useState } from "react";
import ChatMessage from "./chat-message";

type Message = {
  sender: "user" | "assistant";
  text: string;
};

export default function ChatAssistant() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "assistant",
      text: "Hi! Ask me anything about my experience, skills, or projects.",
    },
  ]);
  const [loading, setLoading] = useState(false);

  console.log({ messages });

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMessage = input.trim();
    setInput("");

    // Append user message AND an empty assistant slot for incoming stream deltas
    setMessages((prev) => [
      ...prev,
      { sender: "user", text: userMessage },
      { sender: "assistant", text: "" },
    ]);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: userMessage }),
      });

      if (!res.ok || !res.body) {
        throw new Error("Failed to read stream");
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunkText = decoder.decode(value, { stream: true });

        // Append decoded deltas incrementally to the latest message
        setMessages((prev) => {
          const updated = [...prev];
          const lastIndex = updated.length - 1;
          updated[lastIndex] = {
            ...updated[lastIndex],
            text: updated[lastIndex].text + chunkText,
          };
          return updated;
        });
      }
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { sender: "assistant", text: "Something went wrong." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md rounded-xl border border-gray-200 bg-white p-4 shadow-md dark:border-gray-800 dark:bg-gray-900">
      <div className="mb-4 flex h-64 flex-col gap-2 overflow-y-auto border-b p-2">
        {messages.map((msg, index) => (
          <ChatMessage
            key={index}
            text={msg.text}
            sender={msg.sender}
            isLatest={index === messages.length - 1}
            isLoading={loading}
          />
        ))}
        {loading && (
          <div className="text-xs text-gray-500 italic">Thinking...</div>
        )}
      </div>

      <form onSubmit={sendMessage} className="flex gap-2">
        <input
          type="text"
          placeholder="Ask about my skills..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-white"
        />
        <button
          type="submit"
          disabled={loading}
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 disabled:opacity-50"
        >
          Send
        </button>
      </form>
    </div>
  );
}
