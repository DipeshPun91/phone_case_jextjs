import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  Upload,
  Image as ImageIcon,
  Smartphone,
} from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function DesignPage() {
  return (
    <div className="min-h-screen bg-white antialiased">
      <Header />

      <section className="py-20 bg-gradient-to-b from-indigo-50 to-white">
        <div className="container px-6 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl font-display">
              Design Your Custom Phone Case
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              Upload your design or start from scratch with our easy-to-use
              design tool.
            </p>
          </div>

          <div className="grid gap-8 mt-16 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Upload Your Design",
                description:
                  "Upload your own image or artwork to create a truly unique case.",
                icon: <Upload className="w-8 h-8 text-indigo-600" />,
              },
              {
                title: "Choose From Templates",
                description:
                  "Select from our professionally designed templates.",
                icon: <ImageIcon className="w-8 h-8 text-indigo-600" />,
              },
              {
                title: "Select Your Device",
                description: "We support all major phone models and sizes.",
                icon: <Smartphone className="w-8 h-8 text-indigo-600" />,
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-8 bg-white rounded-xl shadow-sm border border-gray-100"
              >
                <div className="flex items-center justify-center w-12 h-12 mb-4 bg-indigo-50 rounded-lg">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link href="/menu/create-design">
              <Button size="lg" className="group">
                Start Designing Now
                <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
