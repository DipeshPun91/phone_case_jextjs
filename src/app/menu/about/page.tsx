import { Button } from "@/components/ui/button";
import { ChevronRight, Users, Shield, Heart } from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white antialiased">
      <Header />

      <section className="py-20 bg-gradient-to-b from-indigo-50 to-white">
        <div className="container px-6 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl font-display">
              Our Story
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              Turning your memories into premium protection since 2018
            </p>
          </div>

          <div className="grid gap-12 mt-16 lg:grid-cols-2">
            <div>
              <div className="relative aspect-video rounded-xl overflow-hidden">
                <Image
                  src="/images/team.jpg"
                  alt="CaseCraft team"
                  fill
                  className="object-contain object-center"
                />
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Who We Are</h2>
              <p className="mt-4 text-gray-600">
                CaseCraft was founded by a group of designers and engineers who
                were frustrated with the low-quality custom phone cases on the
                market. We set out to create a product that combines
                professional-grade protection with museum-quality printing.
              </p>
              <p className="mt-4 text-gray-600">
                Today, we&apos;re proud to serve thousands of customers
                worldwide with our premium custom cases. Every case is made to
                order in our California facility using state-of-the-art printing
                technology and the highest quality materials.
              </p>
              <div className="mt-8">
                <Link href="/design/create-design">
                  <Button size="lg" className="group">
                    Create Your Case
                    <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="grid gap-8 mt-24 sm:grid-cols-3">
            {[
              {
                title: "Customer Focused",
                description:
                  "We obsess over customer satisfaction with a 4.9/5 average rating.",
                icon: <Users className="w-8 h-8 text-indigo-600" />,
              },
              {
                title: "Premium Protection",
                description: "Military-grade drop protection without the bulk.",
                icon: <Shield className="w-8 h-8 text-indigo-600" />,
              },
              {
                title: "Ethically Made",
                description: "Sustainable materials and fair labor practices.",
                icon: <Heart className="w-8 h-8 text-indigo-600" />,
              },
            ].map((value, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl border border-gray-200"
              >
                <div className="flex items-center justify-center w-12 h-12 mb-4 bg-indigo-50 rounded-lg">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {value.title}
                </h3>
                <p className="mt-2 text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>

          <div className="p-8 mt-24 bg-white rounded-xl border border-gray-200">
            <h2 className="text-2xl font-bold text-center text-gray-900">
              Join Our Team
            </h2>
            <p className="max-w-2xl mx-auto mt-4 text-center text-gray-600">
              We&apos;re always looking for talented designers, engineers, and
              customer service professionals to join our growing team.
            </p>
            <div className="flex justify-center mt-8">
              <Button variant="outline">View Open Positions</Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
