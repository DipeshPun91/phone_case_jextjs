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
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="container mx-auto px-4 py-12">
        <ProgressSteps currentStep={step} totalSteps={3} />

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

        <NavigationButtons
          currentStep={step}
          totalSteps={3}
          onNext={handleNext}
          onBack={handleBack}
          nextDisabled={step === 2 && !design.model}
        />
      </div>

      <Footer />
    </div>
  );
}
