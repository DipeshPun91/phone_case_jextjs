"use client";
import { Button } from "@/components/ui/button";

interface Design {
  model: string;
  material: string;
  finish: string;
  imagePosition: { x: number; y: number };
  imageScale: number;
}

interface OrderSummaryStepProps {
  image: string;
  design: Design;
  onCompleteOrder: () => void;
}

export function OrderSummaryStep({
  image,
  design,
  onCompleteOrder,
}: OrderSummaryStepProps) {
  return (
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
              <span className="font-medium capitalize">{design.material}</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span className="text-gray-600">Finishing:</span>
              <span className="font-medium capitalize">{design.finish}</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span className="text-gray-600">Price:</span>
              <span className="font-bold text-indigo-600">$29.99</span>
            </div>
          </div>

          <Button
            className="w-full mt-8 bg-gradient-to-r from-indigo-600 to-purple-600"
            onClick={onCompleteOrder}
          >
            Complete Order
          </Button>
        </div>
      </div>
    </div>
  );
}
