"use client";

import ErrorFallback from "@/components/error-fallback";
import HeroComponent from "./hero";
import { ErrorBoundary } from "react-error-boundary";
import { Dispatch, SetStateAction } from "react";

export default function Hero({
  onClick,
  isAssistantVisisble,
}: {
  isAssistantVisisble: boolean;
  onClick: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <HeroComponent
        onClick={onClick}
        isAssistantVisisble={isAssistantVisisble}
      />
    </ErrorBoundary>
  );
}
