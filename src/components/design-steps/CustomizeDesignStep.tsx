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
import { Move } from "lucide-react";

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
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartPos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !canvasRef.current) return;

    const deltaX = e.clientX - startPos.x;
    const deltaY = e.clientY - startPos.y;

    const newDesign = {
      ...design,
      imagePosition: {
        x: Math.max(0, Math.min(100, design.imagePosition.x + deltaX / 5)),
        y: Math.max(0, Math.min(100, design.imagePosition.y + deltaY / 5)),
      },
    };

    onDesignChange(newDesign);
    setStartPos({ x: e.clientX, y: e.clientY });
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
            <Select value={design.model} onValueChange={handleModelChange}>
              <SelectTrigger className="w-full mt-2">
                <SelectValue placeholder="Select your phone model" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="iphone-15">iPhone 15</SelectItem>
                <SelectItem value="iphone-15-pro">iPhone 15 Pro</SelectItem>
                <SelectItem value="samsung-s23">Samsung S23</SelectItem>
                <SelectItem value="google-pixel-7">Google Pixel 7</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label>Material</Label>
            <RadioGroup
              value={design.material}
              onValueChange={handleMaterialChange}
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
              onValueChange={handleFinishChange}
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
  );
}
