import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  Upload,
  Image as ImageIcon,
  Smartphone,
  Palette,
  ShieldCheck,
  Truck,
} from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function DesignPage() {
  return (
    <div className="min-h-screen bg-white antialiased">
      <Header />

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-indigo-50 via-white to-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] bg-repeat bg-[length:300px_300px]" />
        </div>
        <div className="container px-6 mx-auto relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl font-display">
              Create Your Perfect Phone Case
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-600">
              Transform your memories into premium protection with our easy
              design tools and professional-grade materials.
            </p>
          </div>
        </div>
      </section>

      {/* Design Options Section */}
      <section className="py-20 bg-white">
        <div className="container px-6 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-3 py-1 mb-4 text-sm font-medium text-indigo-600 bg-indigo-100 rounded-full">
              Three Simple Ways
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Design Your Custom Case
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Whether you&apos;re an artist or just getting started, we have
              options for every creator.
            </p>
          </div>

          <div className="grid gap-8 mt-16 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Upload Your Design",
                description:
                  "Upload your own image, artwork, or photo to create a one-of-a-kind case.",
                icon: <Upload className="w-8 h-8 text-indigo-600" />,
                image: "/images/upload-example.jpg",
              },
              {
                title: "Explore Templates",
                description:
                  "Choose from hundreds of professionally designed templates.",
                icon: <Palette className="w-8 h-8 text-indigo-600" />,
                image: "/images/templates-example.jpg",
              },
              {
                title: "Select Your Device",
                description:
                  "We support all major phone models with perfect-fit cases.",
                icon: <Smartphone className="w-8 h-8 text-indigo-600" />,
                image: "/images/devices-example.jpg",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="overflow-hidden transition-all bg-white rounded-xl border border-gray-200 hover:shadow-lg hover:border-indigo-100"
              >
                <div className="relative aspect-[4/3] bg-gray-50">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-center w-12 h-12 mb-4 bg-indigo-50 rounded-lg">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-6 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/design-preview.jpg"
                  alt="Design preview on phone case"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Premium Quality, No Compromises
                </h2>
                <div className="mt-6 space-y-6">
                  {[
                    {
                      icon: <ShieldCheck className="w-6 h-6 text-indigo-600" />,
                      text: "Military-grade protection with scratch-resistant coating",
                    },
                    {
                      icon: <ImageIcon className="w-6 h-6 text-indigo-600" />,
                      text: "Vibrant, high-resolution printing that lasts",
                    },
                    {
                      icon: <Truck className="w-6 h-6 text-indigo-600" />,
                      text: "Fast 3-5 day turnaround with free shipping over $50",
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start">
                      <div className="flex-shrink-0 mt-1 mr-4">{item.icon}</div>
                      <p className="text-gray-600">{item.text}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <Link href="/menu/create-design">
                    <Button size="lg" className="group">
                      Start Designing Now
                      <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-indigo-600">
        <div className="container px-6 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Create Something Unique?
            </h2>
            <p className="mt-4 text-lg leading-8 text-indigo-100">
              Join 50,000+ customers who&apos;ve turned their memories into
              premium protection.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link href="/menu/create-design">
                <Button size="lg" variant="cta">
                  Design Your Case Now
                </Button>
              </Link>
              <Link href="/gallery">
                <Button size="lg" variant="outline-white">
                  View Design Gallery
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
