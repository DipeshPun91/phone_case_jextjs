"use client";
import { Check } from "lucide-react";

interface ProgressStepsProps {
  currentStep: number;
  totalSteps: number;
}

export function ProgressSteps({ currentStep, totalSteps }: ProgressStepsProps) {
  return (
    <div className="flex items-center justify-center mb-12">
      {Array.from({ length: totalSteps }).map((_, index) => (
        <div key={index + 1} className="flex items-center">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center 
              ${
                currentStep === index + 1
                  ? "bg-indigo-600 text-white"
                  : currentStep > index + 1
                  ? "bg-green-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
          >
            {currentStep > index + 1 ? (
              <Check className="w-5 h-5" />
            ) : (
              index + 1
            )}
          </div>
          {index + 1 < totalSteps && (
            <div
              className={`w-16 h-1 ${
                currentStep > index + 1 ? "bg-green-500" : "bg-gray-200"
              }`}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
}
