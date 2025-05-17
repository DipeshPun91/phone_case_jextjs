import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  Users,
  Shield,
  Heart,
  Factory,
  Award,
  Globe,
} from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white antialiased">
      <Header />

      <section className="relative py-24 bg-gradient-to-br from-indigo-50 via-white to-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/images/pattern.svg')] bg-repeat bg-[length:300px_300px]" />
        </div>
        <div className="container px-6 mx-auto relative">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-3 py-1 mb-4 text-sm font-medium text-indigo-600 bg-indigo-100 rounded-full">
              Since 2018
            </span>
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl font-display">
              Crafting Protection, Preserving Memories
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-600">
              At CaseCraft, we blend cutting-edge technology with artisanal
              craftsmanship to create phone cases that tell your story.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container px-6 mx-auto">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div className="relative aspect-[5/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/team.jpg"
                alt="CaseCraft team working in the studio"
                fill
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <p className="text-sm font-medium">
                  Our design team in San Francisco, CA
                </p>
              </div>
            </div>
            <div>
              <span className="text-sm font-semibold tracking-wide text-indigo-600 uppercase">
                Our Journey
              </span>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                From Frustration to Innovation
              </h2>
              <div className="mt-6 space-y-6 text-gray-600">
                <p>
                  Founded in 2018 by a team of industrial designers and material
                  engineers, CaseCraft was born from a simple frustration: the
                  lack of high-quality custom phone cases that didn&apos;t
                  compromise on protection or design.
                </p>
                <p>
                  What began as a small workshop in Silicon Valley has grown
                  into a vertically integrated manufacturing facility where we
                  control every step of the process—from digital printing to
                  final quality inspection.
                </p>
                <p>
                  Today, we serve customers in over 35 countries, with each case
                  still meticulously crafted in our California facility using
                  sustainable materials and precision German printing
                  technology.
                </p>
              </div>
              <div className="mt-8">
                <Link href="/menu/create-design">
                  <Button size="lg" className="group">
                    Design Your Custom Case
                    <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container px-6 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-sm font-semibold tracking-wide text-indigo-600 uppercase">
              Our Principles
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              The CaseCraft Difference
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              What sets us apart in an industry of mass-produced accessories
            </p>
          </div>

          <div className="grid gap-8 mt-16 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Customer Obsession",
                description:
                  "4.9/5 average rating from 12,000+ reviews with 24/7 customer support.",
                icon: <Users className="w-8 h-8 text-indigo-600" />,
              },
              {
                title: "Military-Grade Protection",
                description:
                  "Tested to withstand 10-foot drops while maintaining a slim profile.",
                icon: <Shield className="w-8 h-8 text-indigo-600" />,
              },
              {
                title: "Sustainable Craftsmanship",
                description:
                  "100% recycled materials and carbon-neutral shipping since 2020.",
                icon: <Heart className="w-8 h-8 text-indigo-600" />,
              },
              {
                title: "Vertical Manufacturing",
                description:
                  "Complete in-house control from design to production for consistent quality.",
                icon: <Factory className="w-8 h-8 text-indigo-600" />,
              },
              {
                title: "Award-Winning Design",
                description:
                  "Recipient of the 2022 Red Dot Award for product design excellence.",
                icon: <Award className="w-8 h-8 text-indigo-600" />,
              },
              {
                title: "Global Reach",
                description:
                  "Trusted by customers in 35+ countries with localized fulfillment centers.",
                icon: <Globe className="w-8 h-8 text-indigo-600" />,
              },
            ].map((value, index) => (
              <div
                key={index}
                className="p-8 transition-all bg-white rounded-xl border border-gray-200 hover:shadow-lg hover:border-indigo-100"
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
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container px-6 mx-auto">
          <div className="px-8 py-12 overflow-hidden bg-gradient-to-r from-indigo-600 to-indigo-800 rounded-2xl">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Join Our Craft
              </h2>
              <p className="mt-4 text-lg leading-8 text-indigo-100">
                We&apos;re building a team of passionate creators who believe in
                the intersection of technology and craftsmanship.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <Button size="lg" variant="cta" className="shadow-lg">
                  View Open Positions
                </Button>
                <Button size="lg" variant="outline-white">
                  Learn About Our Culture
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
