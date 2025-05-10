import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="pt-24 pb-16 bg-gray-900">
      <div className="container px-6 mx-auto">
        <div className="grid grid-cols-2 gap-12 md:grid-cols-4">
          <div>
            <h3 className="text-sm font-semibold leading-6 text-white uppercase tracking-wider">
              Products
            </h3>
            <ul className="mt-6 space-y-3">
              {[
                "iPhone Cases",
                "Samsung Cases",
                "Google Cases",
                "Accessories",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm leading-6 text-gray-300 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold leading-6 text-white uppercase tracking-wider">
              Company
            </h3>
            <ul className="mt-6 space-y-3">
              {["About", "Blog", "Careers", "Press"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm leading-6 text-gray-300 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold leading-6 text-white uppercase tracking-wider">
              Support
            </h3>
            <ul className="mt-6 space-y-3">
              {["Contact", "Shipping", "Returns", "FAQ"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm leading-6 text-gray-300 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold leading-6 text-white uppercase tracking-wider">
              Newsletter
            </h3>
            <p className="mt-6 text-sm leading-relaxed text-gray-300">
              Subscribe for exclusive designs and professional insights.
            </p>
            <div className="flex mt-6 gap-3">
              <Input
                type="email"
                placeholder="Your email address"
                className="text-gray-900 placeholder-gray-500 bg-white"
              />
              <Button variant="secondary" className="whitespace-nowrap">
                Subscribe
              </Button>
            </div>
            <div className="flex mt-8 space-x-6">
              {["Twitter", "Instagram", "LinkedIn"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    {/* Social icons would go here */}
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="pt-12 mt-12 border-t border-gray-800">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <p className="text-sm leading-6 text-gray-400">
              &copy; {new Date().getFullYear()} CaseCraft. All rights reserved.
            </p>
            <div className="flex mt-6 space-x-8 md:mt-0">
              <a
                href="#"
                className="text-sm leading-6 text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm leading-6 text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-sm leading-6 text-gray-400 hover:text-white transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
