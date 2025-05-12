"use client";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface NavigationButtonsProps {
  currentStep: number;
  totalSteps: number;
  onNext: () => void;
  onBack: () => void;
  nextDisabled?: boolean;
}

export function NavigationButtons({
  currentStep,
  totalSteps,
  onNext,
  onBack,
  nextDisabled = false,
}: NavigationButtonsProps) {
  return (
    <div className="flex justify-between mt-12">
      {currentStep > 1 && (
        <Button
          variant="outline"
          onClick={onBack}
          className="flex items-center"
        >
          <ChevronLeft className="w-4 h-4 mr-1" /> Back
        </Button>
      )}

      {currentStep < totalSteps ? (
        <Button
          onClick={onNext}
          disabled={nextDisabled}
          className="ml-auto flex items-center"
        >
          Next <ChevronRight className="w-4 h-4 ml-1" />
        </Button>
      ) : (
        <div className="ml-auto"></div>
      )}
    </div>
  );
}
