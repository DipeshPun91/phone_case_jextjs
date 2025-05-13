"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { CheckCircle, ChevronRight } from "lucide-react";

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
    <div className="max-w-5xl mx-auto px-4 sm:px-6">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">Order Summary</h1>
        <p className="text-gray-600 max-w-lg mx-auto">
          Review your custom phone case design before completing your order
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12">
        {/* Design Preview Card */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Your Design</h2>
            <div className="flex items-center text-sm text-green-600">
              <CheckCircle className="w-5 h-5 mr-1.5" />
              Ready to print
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[280px] aspect-[9/16] bg-gray-50 rounded-3xl border-8 border-gray-900 overflow-hidden shadow-inner">
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

          <div className="mt-6 flex justify-center">
            <button className="text-sm font-medium text-indigo-600 hover:text-indigo-700 flex items-center">
              View full design details <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>

        {/* Order Details Card */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            Order Details
          </h2>

          <div className="space-y-5">
            <div className="flex justify-between">
              <span className="text-gray-600">Product:</span>
              <span className="font-medium text-gray-900">
                Custom Phone Case
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-600">Phone Model:</span>
              <span className="font-medium text-gray-900">
                {design.model || "Not selected"}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-600">Material:</span>
              <span className="font-medium text-gray-900 capitalize">
                {design.material}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-600">Finishing:</span>
              <span className="font-medium text-gray-900 capitalize">
                {design.finish}
              </span>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Subtotal:</span>
                <span className="font-medium text-gray-900">$29.99</span>
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="text-gray-600">Shipping:</span>
                <span className="font-medium text-green-600">Free</span>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-gray-900">
                  Total:
                </span>
                <span className="text-xl font-bold text-indigo-600">
                  $29.99
                </span>
              </div>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            <Button
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 h-12 text-lg"
              onClick={onCompleteOrder}
            >
              Complete Order
            </Button>

            <p className="text-xs text-gray-500 text-center">
              By placing your order, you agree to our{" "}
              <a href="#" className="text-indigo-600 hover:underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-indigo-600 hover:underline">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Additional Assurance */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-indigo-50 p-5 rounded-lg text-center">
          <div className="flex justify-center mb-3">
            <Image
              src="/icons/quality-badge.svg"
              alt="Quality"
              width={48}
              height={48}
            />
          </div>
          <h3 className="font-medium text-gray-900 mb-1">Premium Quality</h3>
          <p className="text-sm text-gray-600">Museum-grade printing</p>
        </div>

        <div className="bg-indigo-50 p-5 rounded-lg text-center">
          <div className="flex justify-center mb-3">
            <Image
              src="/icons/shipping.svg"
              alt="Shipping"
              width={48}
              height={48}
            />
          </div>
          <h3 className="font-medium text-gray-900 mb-1">Fast Shipping</h3>
          <p className="text-sm text-gray-600">
            Delivered in 3-5 business days
          </p>
        </div>

        <div className="bg-indigo-50 p-5 rounded-lg text-center">
          <div className="flex justify-center mb-3">
            <Image
              src="/icons/guarantee.svg"
              alt="Guarantee"
              width={48}
              height={48}
            />
          </div>
          <h3 className="font-medium text-gray-900 mb-1">
            Satisfaction Guarantee
          </h3>
          <p className="text-sm text-gray-600">30-day money back guarantee</p>
        </div>
      </div>
    </div>
  );
}
