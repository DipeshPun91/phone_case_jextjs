"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload } from "lucide-react";

interface ImageUploadStepProps {
  onImageUpload: (image: string) => void;
}

export function ImageUploadStep({ onImageUpload }: ImageUploadStepProps) {
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        onImageUpload(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="max-w-2xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6">Upload Your Design</h2>
      <p className="text-gray-600 mb-8">
        Select an image to customize your phone case. We support JPG, PNG files
        up to 10MB.
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
            <p className="text-sm text-gray-500">or drag and drop files here</p>
          </Label>
        </div>
      </div>
    </div>
  );
}
