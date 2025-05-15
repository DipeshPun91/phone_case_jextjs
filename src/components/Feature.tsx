import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Image as LucideImage, ShieldCheck, Truck } from "lucide-react";

const Feature = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container px-6 mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4 font-medium">
            Superior Quality
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl font-display leading-tight">
            Professional-Grade Phone Cases
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-600 max-w-2xl mx-auto">
            Engineered for those who demand the best in both protection and
            presentation.
          </p>
        </div>
        <div className="grid max-w-6xl grid-cols-1 gap-8 mx-auto mt-16 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: <LucideImage className="w-8 h-8 text-indigo-600" />,
              title: "Vibrant Prints",
              description:
                "Professional-grade printing with 2400 DPI resolution for photorealistic quality.",
            },
            {
              icon: <ShieldCheck className="w-8 h-8 text-indigo-600" />,
              title: "Military Protection",
              description:
                "MIL-STD-810G certified with shock-absorbent TPU and polycarbonate.",
            },
            {
              icon: <Truck className="w-8 h-8 text-indigo-600" />,
              title: "Express Shipping",
              description:
                "Priority processing with 24-hour turnaround and worldwide delivery.",
            },
            {
              icon: <Phone className="w-8 h-8 text-indigo-600" />,
              title: "Precision Fit",
              description:
                "Laser-measured compatibility for perfect fit with all device models.",
            },
          ].map((feature, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-shadow border-gray-100"
            >
              <CardHeader>
                <div className="flex items-center justify-center w-12 h-12 mx-auto bg-indigo-50 rounded-xl">
                  {feature.icon}
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="mt-2 text-lg font-semibold">
                  {feature.title}
                </CardTitle>
                <CardDescription className="mt-2 text-gray-600 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
