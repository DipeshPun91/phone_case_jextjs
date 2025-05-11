"use client";
import React from "react";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronLeft, ChevronRight, Upload, Move, Check } from "lucide-react";

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
  const canvasRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });

  // Handle image upload
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target?.result as string);
        setStep(2);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle image positioning
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartPos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !canvasRef.current) return;

    const deltaX = e.clientX - startPos.x;
    const deltaY = e.clientY - startPos.y;

    setDesign((prev) => ({
      ...prev,
      imagePosition: {
        x: Math.max(0, Math.min(100, prev.imagePosition.x + deltaX / 5)),
        y: Math.max(0, Math.min(100, prev.imagePosition.y + deltaY / 5)),
      },
    }));

    setStartPos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Handle zoom
  const handleZoom = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDesign((prev) => ({
      ...prev,
      imageScale: parseInt(e.target.value),
    }));
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Progress Steps */}
      <div className="flex items-center justify-center mb-12">
        {[1, 2, 3].map((stepNumber) => (
          <div key={stepNumber} className="flex items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center 
                ${
                  step === stepNumber
                    ? "bg-indigo-600 text-white"
                    : step > stepNumber
                    ? "bg-green-500 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
            >
              {step > stepNumber ? <Check className="w-5 h-5" /> : stepNumber}
            </div>
            {stepNumber < 3 && (
              <div
                className={`w-16 h-1 ${
                  step > stepNumber ? "bg-green-500" : "bg-gray-200"
                }`}
              ></div>
            )}
          </div>
        ))}
      </div>

      {/* Step 1: Image Upload */}
      {step === 1 && (
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Upload Your Design</h2>
          <p className="text-gray-600 mb-8">
            Select an image to customize your phone case. We support JPG, PNG
            files up to 10MB.
          </p>

          <div className="border-2 border-dashed border-gray-300 rounded-xl p-12 mb-8">
            <div className="flex flex-col items-center justify-center">
              <Upload className="w-12 h-12 text-indigo-500 mb-4" />
              <Label htmlFor="design-upload" className="cursor-pointer">
                <Button variant="outline" className="mb-2">
                  Select Image
                </Button>
                <Input
                  id="design-upload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageUpload}
                />
                <p className="text-sm text-gray-500">
                  or drag and drop files here
                </p>
              </Label>
            </div>
          </div>
        </div>
      )}

      {/* Step 2: Customize Design */}
      {step === 2 && image && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="relative">
            <h2 className="text-2xl font-bold mb-6">Customize Your Design</h2>

            {/* Phone Case Preview */}
            <div
              ref={canvasRef}
              className="relative mx-auto w-full max-w-[300px] aspect-[9/16] bg-gray-100 rounded-3xl border-8 border-gray-800 overflow-hidden shadow-lg"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              <div
                className="absolute inset-0 bg-contain bg-no-repeat bg-center"
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundPosition: `${design.imagePosition.x}% ${design.imagePosition.y}%`,
                  backgroundSize: `${design.imageScale}%`,
                  cursor: isDragging ? "grabbing" : "grab",
                }}
              />
              <div
                className="absolute inset-0 pointer-events-none border-[12px] border-transparent"
                style={{
                  boxShadow: "inset 0 0 0 2px rgba(0,0,0,0.1)",
                }}
              />
            </div>

            {/* Image Controls */}
            <div className="mt-6">
              <Label className="block mb-2">Adjust Image Position</Label>
              <div className="flex items-center gap-2 mb-4">
                <Move className="w-5 h-5 text-gray-500" />
                <span className="text-sm text-gray-500">
                  Drag image to reposition
                </span>
              </div>

              <Label className="block mb-2">Zoom ({design.imageScale}%)</Label>
              <Input
                type="range"
                min="50"
                max="150"
                value={design.imageScale}
                onChange={handleZoom}
              />
            </div>
          </div>

          {/* Configuration Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Case Specifications</h2>

            <div className="space-y-6">
              <div>
                <Label htmlFor="model">Phone Model</Label>
                <Select
                  value={design.model}
                  onValueChange={(value) =>
                    setDesign({ ...design, model: value })
                  }
                >
                  <SelectTrigger className="w-full mt-2">
                    <SelectValue placeholder="Select your phone model" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="iphone-15">iPhone 15</SelectItem>
                    <SelectItem value="iphone-15-pro">iPhone 15 Pro</SelectItem>
                    <SelectItem value="samsung-s23">Samsung S23</SelectItem>
                    <SelectItem value="google-pixel-7">
                      Google Pixel 7
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Material</Label>
                <RadioGroup
                  value={design.material}
                  onValueChange={(value) =>
                    setDesign({ ...design, material: value })
                  }
                  className="mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="glossy" id="glossy" />
                    <Label htmlFor="glossy">Glossy</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="matte" id="matte" />
                    <Label htmlFor="matte">Matte</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="clear" id="clear" />
                    <Label htmlFor="clear">Clear</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label>Finishing</Label>
                <RadioGroup
                  value={design.finish}
                  onValueChange={(value) =>
                    setDesign({ ...design, finish: value })
                  }
                  className="mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="standard" id="standard" />
                    <Label htmlFor="standard">Standard</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="premium" id="premium" />
                    <Label htmlFor="premium">Premium (Scratch Resistant)</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Step 3: Order Summary */}
      {step === 3 && (
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Review Your Design</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Design Preview */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Design Preview</h3>
              <div className="relative mx-auto w-full max-w-[250px] aspect-[9/16] bg-gray-100 rounded-3xl border-8 border-gray-800 overflow-hidden shadow-lg">
                {image && (
                  <div
                    className="absolute inset-0 bg-contain bg-no-repeat bg-center"
                    style={{
                      backgroundImage: `url(${image})`,
                      backgroundPosition: `${design.imagePosition.x}% ${design.imagePosition.y}%`,
                      backgroundSize: `${design.imageScale}%`,
                    }}
                  />
                )}
              </div>
            </div>

            {/* Order Details */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Order Details</h3>
              <div className="space-y-4">
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">Phone Model:</span>
                  <span className="font-medium">
                    {design.model || "Not selected"}
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">Material:</span>
                  <span className="font-medium capitalize">
                    {design.material}
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">Finishing:</span>
                  <span className="font-medium capitalize">
                    {design.finish}
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">Price:</span>
                  <span className="font-bold text-indigo-600">$29.99</span>
                </div>
              </div>

              <Button className="w-full mt-8 bg-gradient-to-r from-indigo-600 to-purple-600">
                Complete Order
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-12">
        {step > 1 && (
          <Button
            variant="outline"
            onClick={() => setStep((prev) => (prev - 1) as 1 | 2 | 3)}
            className="flex items-center"
          >
            <ChevronLeft className="w-4 h-4 mr-1" /> Back
          </Button>
        )}

        {step < 3 ? (
          <Button
            onClick={() => setStep((prev) => (prev + 1) as 1 | 2 | 3)}
            disabled={step === 2 && !design.model}
            className="ml-auto flex items-center"
          >
            Next <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
        ) : (
          <div className="ml-auto"></div>
        )}
      </div>
    </div>
  );
}
