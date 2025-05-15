import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Testimonial = () => {
  return (
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
  );
};

export default Testimonial;
