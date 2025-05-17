import { Button } from "@/components/ui/button";
import {
  Check,
  ChevronRight,
  Zap,
  Shield,
  Truck,
  BadgePercent,
} from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const pricingPlans = [
  {
    name: "Essential",
    price: 24.99,
    description: "Ideal for simple designs and everyday protection",
    features: [
      "Single-color print",
      "Basic drop protection (4ft)",
      "Standard shipping (3-5 days)",
      "1-3 day production time",
      "6-month warranty",
    ],
    featured: false,
    icon: <Shield className="w-6 h-6 text-indigo-600" />,
  },
  {
    name: "Premium",
    price: 34.99,
    description: "Our most popular option with enhanced features",
    features: [
      "Full-color HD printing",
      "Enhanced protection (6ft drops)",
      "Free priority shipping (2-3 days)",
      "Premium scratch-resistant coating",
      "1-2 day production",
      "1-year warranty",
    ],
    featured: true,
    icon: <Zap className="w-6 h-6 text-indigo-600" />,
  },
  {
    name: "Pro",
    price: 49.99,
    description: "For those who demand the absolute best",
    features: [
      "Ultra HD photographic printing",
      "Military-grade protection (10ft drops)",
      "Free express shipping (1-2 days)",
      "Luxury matte/gloss finishes",
      "Same-day production",
      "Lifetime warranty",
      "Priority customer support",
    ],
    featured: false,
    icon: <BadgePercent className="w-6 h-6 text-indigo-600" />,
  },
];

export default function PricingPage() {
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
            <span className="inline-block px-3 py-1 mb-4 text-sm font-medium text-indigo-600 bg-indigo-100 rounded-full">
              Simple Pricing
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl font-display">
              Protection That Fits Your Needs
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-600">
              Choose the perfect plan for your style and protection
              requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-white">
        <div className="container px-6 mx-auto">
          {/* Value Propositions */}
          <div className="grid gap-8 mb-16 md:grid-cols-3">
            {[
              {
                title: "Free Shipping",
                description: "On all orders over $30",
                icon: <Truck className="w-8 h-8 text-indigo-600" />,
              },
              {
                title: "30-Day Guarantee",
                description: "Love it or your money back",
                icon: <Check className="w-8 h-8 text-indigo-600" />,
              },
              {
                title: "Secure Payments",
                description: "100% secure checkout",
                icon: <Shield className="w-8 h-8 text-indigo-600" />,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 text-center bg-gray-50 rounded-xl"
              >
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-indigo-100 rounded-lg">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-1 text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Plans Grid */}
          <div className="grid gap-8 lg:grid-cols-3">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative p-8 rounded-2xl border transition-all ${
                  plan.featured
                    ? "border-indigo-300 bg-white shadow-xl scale-[1.02]"
                    : "border-gray-200 bg-white hover:border-indigo-200"
                }`}
              >
                {plan.featured && (
                  <div className="absolute top-0 right-0 px-4 py-1 text-sm font-medium text-white bg-gradient-to-r from-indigo-600 to-indigo-500 rounded-bl-xl rounded-tr-xl">
                    Most Popular
                  </div>
                )}
                <div className="flex items-center mb-6">
                  <div className="flex items-center justify-center w-10 h-10 mr-4 bg-indigo-100 rounded-lg">
                    {plan.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {plan.name}
                    </h3>
                    <p className="text-gray-600">{plan.description}</p>
                  </div>
                </div>
                <div className="mb-8">
                  <span className="text-4xl font-bold text-gray-900">
                    ${plan.price.toFixed(2)}
                  </span>
                  <span className="text-gray-500"> / case</span>
                </div>
                <ul className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="flex-shrink-0 w-5 h-5 mt-0.5 text-indigo-600" />
                      <span className="ml-3 text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Link href="/menu/create-design">
                    <Button
                      size="lg"
                      className={`w-full group ${
                        plan.featured
                          ? "bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-700 hover:to-indigo-600"
                          : ""
                      }`}
                    >
                      Get Started
                      <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-6 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Everything you need to know about our cases and process.
            </p>
          </div>

          <div className="grid gap-8 mt-12 md:grid-cols-2">
            {[
              {
                question: "What's the difference between the plans?",
                answer:
                  "Our Essential plan offers basic protection with single-color printing. Premium adds full-color HD printing and enhanced protection. The Pro plan includes our highest quality materials, ultra HD printing, and military-grade protection with fastest production times.",
              },
              {
                question: "How long does shipping take?",
                answer:
                  "Essential cases ship in 3-5 business days. Premium includes free 2-3 day shipping. Pro cases come with free 1-2 day express shipping. Production times are additional (1-3 days for Essential, 1-2 for Premium, same-day for Pro).",
              },
              {
                question: "What materials are used?",
                answer:
                  "All cases use premium polycarbonate and TPU. Premium and Pro cases add scratch-resistant coatings. Pro cases feature our luxury matte or gloss finishes for enhanced look and feel.",
              },
              {
                question: "Do you offer bulk discounts?",
                answer:
                  "Yes! We offer volume discounts for orders of 10+ cases. Contact our sales team at sales@casecraft.com for custom pricing on bulk orders and corporate gifts.",
              },
              {
                question: "What's your return policy?",
                answer:
                  "We offer a 30-day satisfaction guarantee. If you're not completely happy with your case, return it for a full refund or replacement. Custom designs are non-refundable unless defective.",
              },
              {
                question: "How do I create a custom design?",
                answer:
                  "Use our online design tool to upload your artwork or photos. Our system will guide you through the process with real-time previews. Need help? Our design team can assist for an additional fee.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl border border-gray-200 hover:border-indigo-200 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </h3>
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>

          {/* Support CTA */}
          <div className="max-w-2xl px-8 py-8 mx-auto mt-16 text-center bg-white rounded-xl border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900">
              Still have questions?
            </h3>
            <p className="mt-2 text-gray-600">
              Our customer support team is available 24/7 to help you.
            </p>
            <div className="mt-6">
              <Link href="/contact">
                <Button variant="outline">Contact Support</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
