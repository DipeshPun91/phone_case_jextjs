import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Phone,
  Image as LucideImage,
  ShieldCheck,
  Truck,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
                <Button size="lg" className="group">
                  Start Designing
                  <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                </Button>
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

      {/* Features Section */}
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

      {/* Testimonial Section */}
      <section className="py-24 bg-gray-50">
        <div className="container px-6 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 font-medium">
              Client Testimonials
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl font-display leading-tight">
              Trusted by Professionals
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-600 max-w-3xl mx-auto">
              What our discerning clients say about our premium cases.
            </p>
          </div>
          <div className="grid max-w-6xl grid-cols-1 gap-8 mx-auto mt-16 lg:grid-cols-2">
            {[
              {
                quote:
                  "The print quality rivals my professional photography prints. I use these cases to showcase my work to clients.",
                author: "Sarah K., Photographer",
                role: "Commercial Photographer",
              },
              {
                quote:
                  "As a designer, I appreciate the attention to detail. The colors match my Pantone selections perfectly.",
                author: "Michael T.",
                role: "Creative Director",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="p-8 text-left border-gray-100">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4 text-indigo-600">
                    <svg
                      className="w-8 h-8"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div>
                    <blockquote className="text-lg font-medium text-gray-900 leading-relaxed">
                      &quot;{testimonial.quote}&quot;
                    </blockquote>
                    <footer className="mt-4">
                      <div className="text-base font-semibold text-indigo-600">
                        {testimonial.author}
                      </div>
                      <div className="text-sm text-gray-500">
                        {testimonial.role}
                      </div>
                    </footer>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container px-6 mx-auto">
          <div className="max-w-6xl p-12 mx-auto bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-xl">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-display leading-tight">
                  Ready for Professional-Grade Protection?
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-indigo-100 max-w-[32rem]">
                  Create your custom case today with our premium design tools
                  and materials.
                </p>
              </div>
              <div className="flex flex-col space-y-4">
                <Button
                  size="lg"
                  className="bg-white text-indigo-600 hover:bg-gray-50 font-medium"
                >
                  Start Designing Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-white border-white hover:bg-white/10 font-medium"
                >
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
