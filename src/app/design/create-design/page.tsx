"use client";
import { useState } from "react";
import { ProgressSteps } from "@/components/design-steps/ProgressSteps";
import { ImageUploadStep } from "@/components/design-steps/ImageUploadStep";
import { CustomizeDesignStep } from "@/components/design-steps/CustomizeDesignStep";
import { OrderSummaryStep } from "@/components/design-steps/OrderSummaryStep";
import { NavigationButtons } from "@/components/design-steps/NavigationButtons";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CreateDesign() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [image, setImage] = useState<string | null>(null);
  const [design, setDesign] = useState({
    model: "",
    material: "glossy",
    finish: "matte",
    imagePosition: { x: 50, y: 50 },
    imageScale: 100,
  });

  const handleNext = () => {
    if (step < 3) {
      setStep((prev) => (prev + 1) as 1 | 2 | 3);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep((prev) => (prev - 1) as 1 | 2 | 3);
    }
  };

  const handleCompleteOrder = () => {
    // Handle order completion logic here
    console.log("Order completed:", { image, design });
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8 mb-8">
            <ProgressSteps currentStep={step} totalSteps={3} />
          </div>

          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            {step === 1 && (
              <ImageUploadStep
                onImageUpload={(img) => {
                  setImage(img);
                  setStep(2);
                }}
              />
            )}

            {step === 2 && image && (
              <CustomizeDesignStep
                image={image}
                design={design}
                onDesignChange={setDesign}
              />
            )}

            {step === 3 && image && (
              <OrderSummaryStep
                image={image}
                design={design}
                onCompleteOrder={handleCompleteOrder}
              />
            )}
          </div>

          <div className="mt-8 bg-white rounded-xl shadow-sm p-6">
            <NavigationButtons
              currentStep={step}
              totalSteps={3}
              onNext={handleNext}
              onBack={handleBack}
              nextDisabled={step === 2 && !design.model}
              nextLabel={step === 2 ? "Review Design" : undefined}
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
