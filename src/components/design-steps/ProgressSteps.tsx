"use client";
import { Check, Upload, Sliders, ClipboardCheck } from "lucide-react";

interface ProgressStepsProps {
  currentStep: number;
  totalSteps: number;
}

export function ProgressSteps({ currentStep, totalSteps }: ProgressStepsProps) {
  const steps = [
    {
      title: "Step 1: Upload Design",
      subtitle: "Select your image file",
      icon: Upload,
      completed: currentStep > 1,
      active: currentStep === 1,
    },
    {
      title: "Step 2: Customize",
      subtitle: "Adjust position and options",
      icon: Sliders,
      completed: currentStep > 2,
      active: currentStep === 2,
    },
    {
      title: "Step 3: Review & Confirm",
      subtitle: "Verify your design",
      icon: ClipboardCheck,
      completed: currentStep > 3,
      active: currentStep === 3,
    },
  ];

  return (
    <div className="mb-12">
      <div className="relative h-1 bg-gray-200 mb-8 md:hidden">
        <div
          className="absolute top-0 left-0 h-1 bg-indigo-600 transition-all duration-300"
          style={{
            width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%`,
          }}
        ></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {steps.slice(0, totalSteps).map((step, index) => (
          <div
            key={index}
            className={`flex items-start p-4 rounded-lg border transition-all ${
              step.active
                ? "border-indigo-300 bg-indigo-50 shadow-sm"
                : step.completed
                ? "border-green-100 bg-green-50"
                : "border-gray-200 bg-gray-50"
            }`}
          >
            <div
              className={`flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full mr-4 ${
                step.active
                  ? "bg-indigo-100 text-indigo-600"
                  : step.completed
                  ? "bg-green-100 text-green-600"
                  : "bg-gray-100 text-gray-400"
              }`}
            >
              {step.completed ? (
                <Check className="w-5 h-5" />
              ) : (
                <step.icon className="w-5 h-5" />
              )}
            </div>

            <div>
              <h3
                className={`text-sm font-medium ${
                  step.active
                    ? "text-indigo-800"
                    : step.completed
                    ? "text-green-800"
                    : "text-gray-600"
                }`}
              >
                {step.title}
              </h3>
              <p
                className={`text-xs ${
                  step.active
                    ? "text-indigo-600"
                    : step.completed
                    ? "text-green-600"
                    : "text-gray-500"
                }`}
              >
                {step.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
