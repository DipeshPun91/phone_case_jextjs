import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, Sparkles } from "lucide-react";

const Header = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="container flex items-center justify-between h-20 px-6 mx-auto">
        <div className="flex items-center space-x-3">
          <Sparkles className="w-6 h-6 text-indigo-600" />
          <span className="text-2xl font-bold text-gray-900 font-display tracking-tight">
            CaseCraft
          </span>
        </div>
        <div className="hidden space-x-8 md:flex">
          {["Home", "Design", "Gallery", "Pricing", "About"].map((item) => (
            <a
              key={item}
              href="#"
              className={`text-sm font-medium transition-colors ${
                item === "Home"
                  ? "text-indigo-600"
                  : "text-gray-600 hover:text-indigo-600"
              }`}
            >
              {item}
            </a>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            className="text-gray-600 hover:text-indigo-600 hover:bg-indigo-50"
          >
            Sign In
          </Button>
          <Button className="hidden md:inline-flex group">
            Create Design
            <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
