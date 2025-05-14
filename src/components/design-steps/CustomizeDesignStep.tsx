"use client";
import { useState, useRef } from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Move, ZoomIn, ZoomOut } from "lucide-react";
import Image from "next/image";

interface Design {
  model: string;
  material: string;
  finish: string;
  imagePosition: { x: number; y: number };
  imageScale: number;
}

interface CustomizeDesignStepProps {
  image: string;
  design: Design;
  onDesignChange: (newDesign: Design) => void;
}

export function CustomizeDesignStep({
  image,
  design,
  onDesignChange,
}: CustomizeDesignStepProps) {
  const canvasRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({
    pos: { x: 0, y: 0 },
    offset: { x: 0, y: 0 },
  });

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!canvasRef.current) return;

    const rect = canvasRef.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;

    setIsDragging(true);
    setDragStart({
      pos: { x: design.imagePosition.x, y: design.imagePosition.y },
      offset: { x: offsetX, y: offsetY },
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !canvasRef.current) return;

    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newX = dragStart.pos.x + (x - dragStart.offset.x);
    const newY = dragStart.pos.y + (y - dragStart.offset.y);

    onDesignChange({
      ...design,
      imagePosition: {
        x: newX,
        y: newY,
      },
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleZoom = (e: React.ChangeEvent<HTMLInputElement>) => {
    onDesignChange({
      ...design,
      imageScale: parseInt(e.target.value),
    });
  };

  const handleModelChange = (value: string) => {
    onDesignChange({
      ...design,
      model: value,
    });
  };

  const handleMaterialChange = (value: string) => {
    onDesignChange({
      ...design,
      material: value,
    });
  };

  const handleFinishChange = (value: string) => {
    onDesignChange({
      ...design,
      finish: value,
    });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12">
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Design Preview
          </h2>
          <p className="text-gray-600">
            Adjust your image to fit perfectly on the case
          </p>
        </div>

        <div
          ref={canvasRef}
          className="relative mx-auto w-full h-[500px] rounded-3xl overflow-hidden bg-gray-50"
        >
          <div
            className="absolute inset-0 bg-no-repeat"
            style={{
              backgroundImage: `url(${image})`,
              backgroundPosition: `${design.imagePosition.x}px ${design.imagePosition.y}px`,
              backgroundSize: `${design.imageScale}%`,
              cursor: isDragging ? "grabbing" : "grab",
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          />

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 p-4">
            <div className="relative w-full h-full max-w-[280px] max-h-[500px]">
              <Image
                src="/images/phone-template.png"
                alt="Phone template"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <div className="space-y-4">
            <div>
              <Label className="block text-sm font-medium text-gray-700 mb-2">
                Image Position
              </Label>
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <Move className="w-5 h-5 text-gray-500 flex-shrink-0" />
                <p className="text-sm text-gray-600">
                  Drag the image to adjust its position
                </p>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <Label className="text-sm font-medium text-gray-700">
                  Zoom Level
                </Label>
                <span className="text-sm font-medium text-indigo-600">
                  {design.imageScale}%
                </span>
              </div>
              <div className="flex items-center gap-3">
                <ZoomOut className="w-5 h-5 text-gray-400" />
                <Input
                  type="range"
                  min="50"
                  max="150"
                  value={design.imageScale}
                  onChange={handleZoom}
                  className="flex-1"
                />
                <ZoomIn className="w-5 h-5 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Configuration Section */}
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Case Specifications
          </h2>
          <p className="text-gray-600">Select your preferred case options</p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-6">
          {/* Phone Model Selection */}
          <div className="space-y-2">
            <Label className="text-sm font-medium text-gray-700">
              Phone Model
            </Label>
            <Select value={design.model} onValueChange={handleModelChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select your phone model" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem
                  value="iphone-15"
                  className="flex items-center gap-2"
                >
                  <Image
                    src="/icons/iphone.svg"
                    alt="iPhone"
                    width={16}
                    height={16}
                    className="opacity-70"
                  />
                  iPhone 15
                </SelectItem>
                <SelectItem
                  value="iphone-15-pro"
                  className="flex items-center gap-2"
                >
                  <Image
                    src="/icons/iphone.svg"
                    alt="iPhone Pro"
                    width={16}
                    height={16}
                    className="opacity-70"
                  />
                  iPhone 15 Pro
                </SelectItem>
                <SelectItem
                  value="samsung-s23"
                  className="flex items-center gap-2"
                >
                  <Image
                    src="/icons/samsung.svg"
                    alt="Samsung"
                    width={16}
                    height={16}
                    className="opacity-70"
                  />
                  Samsung S23
                </SelectItem>
                <SelectItem
                  value="google-pixel-7"
                  className="flex items-center gap-2"
                >
                  <Image
                    src="/icons/pixel.svg"
                    alt="Google Pixel"
                    width={16}
                    height={16}
                    className="opacity-70"
                  />
                  Google Pixel 7
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Material Selection */}
          <div className="space-y-2">
            <Label className="text-sm font-medium text-gray-700">
              Case Material
            </Label>
            <RadioGroup
              value={design.material}
              onValueChange={handleMaterialChange}
              className="grid grid-cols-3 gap-3"
            >
              <div>
                <RadioGroupItem
                  value="glossy"
                  id="glossy"
                  className="peer hidden"
                />
                <Label
                  htmlFor="glossy"
                  className="flex flex-col items-center justify-center p-3 border-2 border-gray-200 rounded-lg cursor-pointer peer-data-[state=checked]:border-indigo-500 peer-data-[state=checked]:bg-indigo-50 hover:bg-gray-50 transition-colors"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-gray-100 to-gray-300 rounded-full mb-2 shadow-inner" />
                  <span className="text-sm">Glossy</span>
                </Label>
              </div>
              <div>
                <RadioGroupItem
                  value="matte"
                  id="matte"
                  className="peer hidden"
                />
                <Label
                  htmlFor="matte"
                  className="flex flex-col items-center justify-center p-3 border-2 border-gray-200 rounded-lg cursor-pointer peer-data-[state=checked]:border-indigo-500 peer-data-[state=checked]:bg-indigo-50 hover:bg-gray-50 transition-colors"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-gray-200 to-gray-400 rounded-full mb-2 shadow-inner" />
                  <span className="text-sm">Matte</span>
                </Label>
              </div>
              <div>
                <RadioGroupItem
                  value="clear"
                  id="clear"
                  className="peer hidden"
                />
                <Label
                  htmlFor="clear"
                  className="flex flex-col items-center justify-center p-3 border-2 border-gray-200 rounded-lg cursor-pointer peer-data-[state=checked]:border-indigo-500 peer-data-[state=checked]:bg-indigo-50 hover:bg-gray-50 transition-colors"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-full mb-2 shadow-inner border border-gray-300" />
                  <span className="text-sm">Clear</span>
                </Label>
              </div>
            </RadioGroup>
          </div>

          {/* Finishing Selection */}
          <div className="space-y-2">
            <Label className="text-sm font-medium text-gray-700">
              Finishing
            </Label>
            <RadioGroup
              value={design.finish}
              onValueChange={handleFinishChange}
              className="grid grid-cols-2 gap-3"
            >
              <div>
                <RadioGroupItem
                  value="standard"
                  id="standard"
                  className="peer hidden"
                />
                <Label
                  htmlFor="standard"
                  className="flex flex-col items-center justify-center p-3 border-2 border-gray-200 rounded-lg cursor-pointer peer-data-[state=checked]:border-indigo-500 peer-data-[state=checked]:bg-indigo-50 hover:bg-gray-50 transition-colors"
                >
                  <span className="text-sm">Standard</span>
                  <span className="text-xs text-gray-500 mt-1">
                    Basic protection
                  </span>
                </Label>
              </div>
              <div>
                <RadioGroupItem
                  value="premium"
                  id="premium"
                  className="peer hidden"
                />
                <Label
                  htmlFor="premium"
                  className="flex flex-col items-center justify-center p-3 border-2 border-gray-200 rounded-lg cursor-pointer peer-data-[state=checked]:border-indigo-500 peer-data-[state=checked]:bg-indigo-50 hover:bg-gray-50 transition-colors"
                >
                  <span className="text-sm">Premium</span>
                  <span className="text-xs text-gray-500 mt-1">
                    Scratch resistant
                  </span>
                </Label>
              </div>
            </RadioGroup>
          </div>
        </div>
      </div>
    </div>
  );
}
