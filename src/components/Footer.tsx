import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Instagram, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="pt-20 pb-12 bg-gray-900">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4 lg:col-span-3">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-white">CaseCraft</div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-gray-300">
              Premium custom phone cases with museum-quality printing and
              durable materials.
            </p>
            <div className="flex mt-6 space-x-5">
              {[
                { icon: Twitter, name: "Twitter" },
                { icon: Instagram, name: "Instagram" },
                { icon: Linkedin, name: "LinkedIn" },
                { icon: Mail, name: "Email" },
              ].map(({ icon: Icon, name }) => (
                <a
                  key={name}
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label={name}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-5 lg:col-span-6">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Products",
                  links: [
                    "iPhone Cases",
                    "Samsung Cases",
                    "Google Cases",
                    "Accessories",
                    "New Arrivals",
                  ],
                },
                {
                  title: "Company",
                  links: [
                    "About",
                    "Blog",
                    "Careers",
                    "Press",
                    "Sustainability",
                  ],
                },
                {
                  title: "Support",
                  links: ["Contact", "Shipping", "Returns", "FAQ", "Guides"],
                },
              ].map((section) => (
                <div key={section.title} className="space-y-4">
                  <h3 className="text-sm font-semibold leading-6 text-white uppercase tracking-wider">
                    {section.title}
                  </h3>
                  <ul className="space-y-3">
                    {section.links.map((item) => (
                      <li key={item}>
                        <a
                          href="#"
                          className="group flex items-start text-sm leading-6 text-gray-300 hover:text-white transition-colors duration-150"
                        >
                          <span>{item}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-3 lg:col-span-3">
            <h3 className="text-sm font-semibold leading-6 text-white uppercase tracking-wider">
              Stay Updated
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-gray-300">
              Subscribe for exclusive designs and professional insights.
            </p>
            <form className="mt-6 space-y-3">
              <div className="flex flex-col gap-3">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="text-gray-900 placeholder-gray-500 bg-white focus:ring-2 focus:ring-indigo-500 border-gray-300"
                  required
                />
                <Button
                  type="submit"
                  variant="default"
                  size="sm"
                  className="whitespace-nowrap bg-indigo-600 hover:bg-indigo-700 focus-visible:ring-indigo-500"
                >
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-gray-400">
                By subscribing, you agree to our{" "}
                <a
                  href="#"
                  className="underline hover:text-gray-300 transition-colors"
                >
                  Privacy Policy
                </a>
                .
              </p>
            </form>
          </div>
        </div>

        <div className="pt-12 mt-12 border-t border-gray-800">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <p className="text-sm text-center md:text-left text-gray-400">
              &copy; {new Date().getFullYear()} CaseCraft. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center mt-4 space-x-6 md:mt-0">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                (item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-150"
                  >
                    {item}
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
