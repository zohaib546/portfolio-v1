import { useState, useEffect } from "react";

export function useTypewriter(targetText: string, speed = 12, enabled = true) {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    // Reset if feature is disabled
    if (!enabled) {
      setDisplayText(targetText);
      return;
    }

    // If text hasn't grown yet, do nothing
    if (displayText.length >= targetText.length) return;

    const timer = setTimeout(() => {
      setDisplayText(targetText.slice(0, displayText.length + 1));
    }, speed);

    return () => clearTimeout(timer);
  }, [targetText, displayText, speed, enabled]);

  return enabled ? displayText : targetText;
}
