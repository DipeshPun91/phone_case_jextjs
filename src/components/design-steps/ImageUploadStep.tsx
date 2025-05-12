"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Upload, Image as ImageIcon, X } from "lucide-react";
import Image from "next/image";
import { useState, useCallback, useRef } from "react";

interface ImageUploadStepProps {
  onImageUpload: (image: string) => void;
}

export function ImageUploadStep({ onImageUpload }: ImageUploadStepProps) {
  const [preview, setPreview] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [isDragActive, setIsDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = useCallback(
    (file: File) => {
      if (!file.type.match("image.*")) {
        alert("Please select an image file (JPG or PNG)");
        return;
      }

      if (file.size > 10 * 1024 * 1024) {
        alert("File size exceeds 10MB limit");
        return;
      }

      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        setPreview(result);
        setFileName(file.name);
        onImageUpload(result);
      };
      reader.onerror = () => {
        alert("Error reading file. Please try another image.");
      };
      reader.readAsDataURL(file);
    },
    [onImageUpload]
  );

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleImageUpload(file);
      // Reset the input to allow selecting the same file again
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragActive(true);
  };

  const handleDragLeave = () => {
    setIsDragActive(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragActive(false);
    const file = e.dataTransfer.files?.[0];
    if (file) handleImageUpload(file);
  };

  const handleRemoveImage = () => {
    setPreview(null);
    setFileName(null);
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">
          Upload Your Design
        </h2>
        <p className="text-gray-600 max-w-lg mx-auto">
          Select an image to customize your phone case. We support JPG, PNG
          files up to 10MB.
        </p>
      </div>

      <div
        className={`border-2 border-dashed rounded-xl transition-all duration-200 ${
          preview
            ? "border-indigo-200 bg-white"
            : isDragActive
            ? "border-indigo-400 bg-indigo-50"
            : "border-gray-300 bg-gray-50 hover:border-indigo-300"
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {preview ? (
          <div className="p-6">
            <div className="flex flex-col items-center">
              <div className="relative mb-6 w-full max-w-xs aspect-square">
                <Image
                  src={preview}
                  alt="Preview"
                  className="w-full h-full object-contain rounded-lg shadow-sm"
                  width={400}
                  height={400}
                />
                <button
                  onClick={handleRemoveImage}
                  className="absolute -top-3 -right-3 bg-white rounded-full p-1.5 shadow-md border border-gray-200 hover:bg-gray-50 transition-colors"
                  aria-label="Remove image"
                >
                  <X className="w-4 h-4 text-gray-500" />
                </button>
              </div>
              <div className="text-center">
                <p className="text-sm font-medium text-gray-900 mb-1 truncate max-w-xs">
                  {fileName}
                </p>
                <p className="text-xs text-gray-500 mb-4">Upload successful</p>
                <Button variant="outline" size="sm" onClick={triggerFileInput}>
                  Change Image
                </Button>
                <Input
                  id="design-upload"
                  type="file"
                  accept="image/jpeg,image/png"
                  className="hidden"
                  onChange={handleFileInputChange}
                  ref={fileInputRef}
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="p-12">
            <div className="flex flex-col items-center justify-center space-y-6">
              <div
                className={`p-4 rounded-full ${
                  isDragActive ? "bg-indigo-100" : "bg-indigo-50"
                }`}
              >
                <Upload
                  className={`w-8 h-8 ${
                    isDragActive ? "text-indigo-700" : "text-indigo-600"
                  }`}
                />
              </div>
              <div className="text-center space-y-2">
                <h3 className="text-lg font-medium text-gray-900">
                  {isDragActive
                    ? "Drop your image here"
                    : "Drag and drop your file here"}
                </h3>
                <p className="text-sm text-gray-500">or</p>
              </div>
              <Button
                className="bg-indigo-600 hover:bg-indigo-700"
                onClick={triggerFileInput}
              >
                Browse Files
              </Button>
              <Input
                id="design-upload"
                type="file"
                accept="image/jpeg,image/png"
                className="hidden"
                onChange={handleFileInputChange}
                ref={fileInputRef}
              />
              <p className="text-xs text-gray-500">JPG, PNG up to 10MB</p>
            </div>
          </div>
        )}
      </div>

      <div className="mt-6 flex items-center justify-center gap-4">
        <div className="flex items-center text-sm text-gray-500">
          <ImageIcon className="w-4 h-4 mr-2 text-gray-400" />
          High resolution (300dpi+) recommended for best quality
        </div>
      </div>
    </div>
  );
}
