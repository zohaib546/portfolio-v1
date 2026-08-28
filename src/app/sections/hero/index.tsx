"use client";

import ErrorFallback from "@/components/error-fallback";
import HeroComponent from "./hero";
import { ErrorBoundary } from "react-error-boundary";

export default function Hero() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <HeroComponent />
    </ErrorBoundary>
  );
}
