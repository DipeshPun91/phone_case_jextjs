import { Button } from "@/components/ui/button";
import { ChevronRight, Star } from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

const mockCases = [
  {
    id: 1,
    title: "Abstract Watercolor",
    image: "/images/gallery/abstract-watercolor.jpg",
    rating: 4.8,
    price: 29.99,
  },
  {
    id: 2,
    title: "Mountain Landscape",
    image: "/images/gallery/mountain-landscape.jpg",
    rating: 4.9,
    price: 27.99,
  },
  {
    id: 3,
    title: "Geometric Pattern",
    image: "/images/gallery/geometric-pattern.jpg",
    rating: 4.7,
    price: 24.99,
  },
  {
    id: 4,
    title: "Tropical Vibes",
    image: "/images/gallery/tropical-vibes.jpg",
    rating: 4.9,
    price: 26.99,
  },
  {
    id: 5,
    title: "Minimalist Black",
    image: "/images/gallery/minimalist-black.jpg",
    rating: 4.6,
    price: 22.99,
  },
  {
    id: 6,
    title: "Galaxy Effect",
    image: "/images/gallery/galaxy-effect.jpg",
    rating: 4.8,
    price: 28.99,
  },
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-white antialiased">
      <Header />

      <section className="py-20 bg-white">
        <div className="container px-6 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl font-display">
              Our Case Gallery
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              Browse our collection of popular designs for inspiration.
            </p>
          </div>

          <div className="grid gap-8 mt-16 sm:grid-cols-2 lg:grid-cols-3">
            {mockCases.map((caseItem) => (
              <div
                key={caseItem.id}
                className="overflow-hidden bg-white rounded-xl shadow-sm border border-gray-100 group"
              >
                <div className="relative aspect-[9/16]">
                  <Image
                    src={caseItem.image}
                    alt={caseItem.title}
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {caseItem.title}
                  </h3>
                  <div className="flex items-center mt-2">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="ml-1 text-sm text-gray-600">
                      {caseItem.rating}
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-lg font-bold text-gray-900">
                      ${caseItem.price}
                    </span>
                    <Button variant="outline" size="sm">
                      Customize
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link href="/design/create-design">
              <Button size="lg" className="group">
                Create Your Own Design
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
