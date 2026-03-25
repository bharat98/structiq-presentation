import { useState, useEffect, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import "@/App.css";

// Step components
import TitleCard from "@/steps/TitleCard";
import RawInput from "@/steps/RawInput";
import FrameSelection from "@/steps/FrameSelection";
import SpatialProblem from "@/steps/SpatialProblem";
import QRZoneDetection from "@/steps/QRZoneDetection";
import VLMAnalysis from "@/steps/VLMAnalysis";
import EvidenceNotTrust from "@/steps/EvidenceNotTrust";

const TOTAL_STEPS = 7;

function App() {
  const [currentStep, setCurrentStep] = useState(0);

  const goToNextStep = useCallback(() => {
    setCurrentStep((prev) => Math.min(prev + 1, TOTAL_STEPS - 1));
  }, []);

  const goToPrevStep = useCallback(() => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        goToNextStep();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        goToPrevStep();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNextStep, goToPrevStep]);

  // Click to advance
  const handleClick = (e) => {
    // Don't advance if clicking on interactive elements
    if (e.target.tagName === "BUTTON" || e.target.tagName === "A") return;
    goToNextStep();
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <TitleCard key="title" />;
      case 1:
        return <RawInput key="raw-input" />;
      case 2:
        return <FrameSelection key="frame-selection" />;
      case 3:
        return <SpatialProblem key="spatial-problem" />;
      case 4:
        return <QRZoneDetection key="qr-zone" />;
      case 5:
        return <VLMAnalysis key="vlm-analysis" />;
      case 6:
        return <EvidenceNotTrust key="evidence" />;
      default:
        return <TitleCard key="title" />;
    }
  };

  return (
    <div
      className="bg-blueprint w-screen h-screen overflow-hidden relative cursor-pointer select-none"
      onClick={handleClick}
      data-testid="presentation-container"
    >
      {/* Main Content */}
      <AnimatePresence mode="wait">
        {renderStep()}
      </AnimatePresence>

      {/* Step Counter - Bottom Left */}
      <div
        className="fixed bottom-6 left-8 font-mono text-sm text-blueprint-ink/60 z-50"
        data-testid="step-counter"
      >
        {currentStep} / {TOTAL_STEPS - 1}
      </div>

      {/* Watermark - Bottom Right */}
      <div
        className="fixed bottom-6 right-8 font-mono text-sm text-blueprint-ink/40 z-50"
        data-testid="watermark"
      >
        StructIQ
      </div>
    </div>
  );
}

export default App;
