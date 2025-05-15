import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, Sparkles, ArrowRight } from "lucide-react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Feature from "@/components/Feature";
import Testimonial from "@/components/Testimonial";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white antialiased">
      <Header />

      <section className="relative h-[calc(100vh-80px)] min-h-[600px] max-h-[800px] flex items-center bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="absolute inset-0 opacity-10 [background:radial-gradient(125%_125%_at_50%_10%,#6366f1_40%,transparent_100%)]"></div>
        <div className="container px-6 mx-auto">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative z-10">
              <Badge variant="secondary" className="mb-4 font-medium group">
                <Sparkles className="w-3.5 h-3.5 mr-1.5 transition-transform group-hover:rotate-12" />
                <span className="tracking-wide">
                  Premium Custom Phone Cases
                </span>
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-5xl xl:text-6xl font-display leading-tight">
                Elevate Your Device <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                  With Premium Protection
                </span>
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-gray-600 max-w-[36rem]">
                Transform your favorite memories into museum-quality phone cases
                with our professional-grade printing technology and durable
                materials.
              </p>
              <div className="flex flex-col mt-8 gap-y-3 sm:flex-row sm:gap-x-4">
                <Link href="/design/create-design">
                  <Button size="lg" className="group">
                    Start Designing
                    <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-300 hover:bg-gray-50"
                >
                  Browse Gallery
                </Button>
              </div>

              <div className="flex items-center mt-10 space-x-6">
                {["4.9/5 Stars", "10K+ Reviews", "Free Shipping"].map(
                  (item) => (
                    <div key={item} className="flex items-center">
                      <div className="flex-shrink-0 w-2 h-2 bg-indigo-600 rounded-full"></div>
                      <span className="ml-2 text-sm font-medium text-gray-600">
                        {item}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>
            <div className="relative z-10 flex justify-center">
              <div className="relative aspect-[9/16] w-full max-w-[280px] sm:max-w-[320px]">
                <Image
                  src="/images/phone case.png"
                  alt="Premium custom phone case example"
                  width={320}
                  height={569}
                  className="object-contain object-center"
                  priority
                />
                <div className="absolute bottom-0 left-0 translate-y-2">
                  <Badge variant="default" className="px-4 py-2 shadow-md">
                    Starting at <span className="ml-1 font-bold">$24.99</span>
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Feature />

      <Testimonial />

      <section className="py-24 bg-white">
        <div className="container px-6 mx-auto">
          <div className="max-w-6xl p-12 mx-auto bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-xl relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

            <div className="grid items-center gap-12 lg:grid-cols-2 relative z-10">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-display leading-tight">
                  Ready for Professional-Grade Protection?
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-indigo-100 max-w-[32rem]">
                  Create your custom case today with our premium design tools
                  and materials.
                </p>
              </div>
              <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-4 sm:justify-end">
                <Button size="lg" variant="cta" className="shadow-lg">
                  Start Designing Now
                  <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button size="lg" variant="outline-white">
                  See How It Works
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
