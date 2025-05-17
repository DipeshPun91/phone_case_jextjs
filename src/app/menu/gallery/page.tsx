import { Button } from "@/components/ui/button";
import { ChevronRight, Star, Search, Filter } from "lucide-react";
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
    reviews: 142,
    price: 29.99,
    category: "Artistic",
    bestseller: true,
  },
  {
    id: 2,
    title: "Mountain Landscape",
    image: "/images/gallery/mountain-landscape.jpg",
    rating: 4.9,
    reviews: 89,
    price: 27.99,
    category: "Nature",
    new: true,
  },
  {
    id: 3,
    title: "Geometric Pattern",
    image: "/images/gallery/geometric-pattern.jpg",
    rating: 4.7,
    reviews: 76,
    price: 24.99,
    category: "Modern",
  },
  {
    id: 4,
    title: "Tropical Vibes",
    image: "/images/gallery/tropical-vibes.jpg",
    rating: 4.9,
    reviews: 203,
    price: 26.99,
    category: "Nature",
    bestseller: true,
  },
  {
    id: 5,
    title: "Minimalist Black",
    image: "/images/gallery/minimalist-black.jpg",
    rating: 4.6,
    reviews: 54,
    price: 22.99,
    category: "Minimalist",
  },
  {
    id: 6,
    title: "Galaxy Effect",
    image: "/images/gallery/galaxy-effect.jpg",
    rating: 4.8,
    reviews: 118,
    price: 28.99,
    category: "Space",
    new: true,
  },
  {
    id: 7,
    title: "Vintage Film",
    image: "/images/gallery/vintage-film.jpg",
    rating: 4.7,
    reviews: 67,
    price: 25.99,
    category: "Vintage",
  },
  {
    id: 8,
    title: "Marble Texture",
    image: "/images/gallery/marble-texture.jpg",
    rating: 4.8,
    reviews: 92,
    price: 26.99,
    category: "Elegant",
  },
  {
    id: 9,
    title: "Neon Lights",
    image: "/images/gallery/neon-lights.jpg",
    rating: 4.9,
    reviews: 156,
    price: 29.99,
    category: "Modern",
    bestseller: true,
  },
];

export default function GalleryPage() {
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
              Design Inspiration Gallery
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-600">
              Discover our most popular designs or use them as inspiration for
              your custom creation.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="container px-6 mx-auto">
          {/* Filters and Search */}
          <div className="flex flex-col items-center justify-between mb-12 space-y-4 md:flex-row md:space-y-0">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 w-5 h-5 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search designs..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                Categories
              </Button>
              <Button variant="outline">Popular</Button>
              <Button variant="outline">New Arrivals</Button>
            </div>
          </div>

          {/* Design Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {mockCases.map((caseItem) => (
              <div
                key={caseItem.id}
                className="overflow-hidden transition-all bg-white rounded-xl border border-gray-200 hover:shadow-lg hover:border-indigo-100 group"
              >
                {/* Badges */}
                <div className="absolute z-10 flex space-x-2 top-4 left-4">
                  {caseItem.bestseller && (
                    <span className="px-2 py-1 text-xs font-medium text-white bg-indigo-600 rounded-full">
                      Bestseller
                    </span>
                  )}
                  {caseItem.new && (
                    <span className="px-2 py-1 text-xs font-medium text-white bg-green-600 rounded-full">
                      New
                    </span>
                  )}
                </div>

                {/* Case Image */}
                <div className="relative aspect-[9/16] bg-gray-50">
                  <Image
                    src={caseItem.image}
                    alt={caseItem.title}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 via-transparent to-transparent" />
                </div>

                {/* Case Details */}
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-indigo-600">
                      {caseItem.category}
                    </span>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <span className="ml-1 text-sm font-medium text-gray-900">
                        {caseItem.rating}
                      </span>
                      <span className="mx-1 text-gray-300">•</span>
                      <span className="text-sm text-gray-500">
                        {caseItem.reviews} reviews
                      </span>
                    </div>
                  </div>
                  <h3 className="mt-2 text-lg font-semibold text-gray-900">
                    {caseItem.title}
                  </h3>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-xl font-bold text-gray-900">
                      ${caseItem.price.toFixed(2)}
                    </span>
                    <Button size="sm" className="group">
                      Customize
                      <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center mt-12 space-x-2">
            <Button variant="outline" size="sm">
              Previous
            </Button>
            <Button variant="outline" size="sm">
              1
            </Button>
            <Button size="sm">2</Button>
            <Button variant="outline" size="sm">
              3
            </Button>
            <Button variant="outline" size="sm">
              Next
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-indigo-600">
        <div className="container px-6 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Can&apos;t Find What You&apos;re Looking For?
            </h2>
            <p className="mt-4 text-lg leading-8 text-indigo-100">
              Create a completely custom design with our easy-to-use design
              tool.
            </p>
            <div className="mt-8">
              <Link href="/menu/create-design">
                <Button size="lg" variant="outline-white" className="group">
                  Start Designing Now
                  <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
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
