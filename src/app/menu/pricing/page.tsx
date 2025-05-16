import { Button } from "@/components/ui/button";
import { Check, ChevronRight } from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const pricingPlans = [
  {
    name: "Basic",
    price: "$24.99",
    description: "Perfect for simple designs and everyday protection",
    features: [
      "Single-color print",
      "Basic protection",
      "Standard shipping",
      "1-3 day production",
    ],
    featured: false,
  },
  {
    name: "Premium",
    price: "$34.99",
    description: "Our most popular option with enhanced features",
    features: [
      "Full-color print",
      "Enhanced protection",
      "Free shipping",
      "Premium materials",
      "1-2 day production",
    ],
    featured: true,
  },
  {
    name: "Pro",
    price: "$49.99",
    description: "For those who want the absolute best",
    features: [
      "Ultra HD print",
      "Military-grade protection",
      "Free express shipping",
      "Luxury materials",
      "Same-day production",
      "Priority support",
    ],
    featured: false,
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white antialiased">
      <Header />

      <section className="py-20 bg-gradient-to-b from-indigo-50 to-white">
        <div className="container px-6 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl font-display">
              Simple, Transparent Pricing
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              Choose the perfect plan for your needs
            </p>
          </div>

          <div className="grid gap-8 mt-16 lg:grid-cols-3">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`p-8 rounded-xl border ${
                  plan.featured
                    ? "border-indigo-300 bg-white shadow-lg relative"
                    : "border-gray-200 bg-white"
                }`}
              >
                {plan.featured && (
                  <div className="absolute top-0 right-0 px-4 py-1 text-sm font-medium text-white bg-indigo-600 rounded-bl-lg rounded-tr-lg">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900">
                  {plan.name}
                </h3>
                <p className="mt-2 text-gray-600">{plan.description}</p>
                <div className="mt-6">
                  <span className="text-4xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-gray-500"> / case</span>
                </div>
                <ul className="mt-8 space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="w-5 h-5 text-indigo-600" />
                      <span className="ml-3 text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Link href="/design/create-design">
                    <Button
                      size="lg"
                      className={`w-full group ${
                        plan.featured ? "bg-indigo-600 hover:bg-indigo-700" : ""
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

          <div className="p-8 mt-16 bg-white rounded-xl border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900">
              Frequently Asked Questions
            </h3>
            <div className="grid gap-6 mt-8 md:grid-cols-2">
              {[
                {
                  question: "How long does shipping take?",
                  answer:
                    "Standard shipping takes 3-5 business days. Premium and Pro plans include faster shipping options.",
                },
                {
                  question: "What materials are used?",
                  answer:
                    "We use high-quality polycarbonate and TPU materials that offer excellent protection without adding bulk.",
                },
                {
                  question: "Can I return my case?",
                  answer:
                    "Yes, we offer a 30-day satisfaction guarantee. If you're not happy, we'll refund or replace your case.",
                },
                {
                  question: "Do you offer discounts for bulk orders?",
                  answer:
                    "Yes, contact our sales team for custom pricing on orders of 10+ cases.",
                },
              ].map((faq, index) => (
                <div key={index}>
                  <h4 className="font-medium text-gray-900">{faq.question}</h4>
                  <p className="mt-2 text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
