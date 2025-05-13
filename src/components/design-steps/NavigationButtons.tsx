"use client";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface NavigationButtonsProps {
  currentStep: number;
  totalSteps: number;
  onNext: () => void;
  onBack: () => void;
  nextDisabled?: boolean;
  nextLabel?: string;
  backLabel?: string;
}

export function NavigationButtons({
  currentStep,
  totalSteps,
  onNext,
  onBack,
  nextDisabled = false,
  nextLabel = "Next",
  backLabel = "Back",
}: NavigationButtonsProps) {
  return (
    <div className="flex items-center justify-between mt-12 pt-6 border-t border-gray-200">
      {currentStep > 1 && (
        <Button
          variant="outline"
          onClick={onBack}
          className="flex items-center gap-2 px-6 py-3 rounded-lg border-gray-300 hover:bg-gray-50 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
          <span className="font-medium text-gray-700">{backLabel}</span>
        </Button>
      )}

      <Button
        onClick={onNext}
        disabled={nextDisabled}
        className={`flex items-center gap-2 px-6 py-3 rounded-lg ml-auto ${
          currentStep === totalSteps
            ? "bg-green-600 hover:bg-green-700"
            : "bg-indigo-600 hover:bg-indigo-700"
        } text-white shadow-sm transition-colors`}
      >
        <span className="font-medium">
          {currentStep === totalSteps ? "Complete Order" : nextLabel}
        </span>
        {currentStep < totalSteps && <ChevronRight className="w-5 h-5" />}
      </Button>
    </div>
  );
}
