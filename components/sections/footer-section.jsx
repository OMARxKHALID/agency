import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Linkedin, Twitter, Facebook, Instagram, Dribbble } from "lucide-react";

export function FooterSection() {
  return (
    <footer className="relative px-4 py-8 overflow-hidden md:py-12 lg:py-16">
      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        <h1 className="mb-4 text-4xl font-bold leading-tight text-white md:mb-8 md:text-6xl lg:text-9xl">
          Pop the bubbles
          <br />
          and call us.
        </h1>

        <Button
          size="lg"
          className="px-6 py-6 text-base text-white transition-all duration-300 bg-blue-600 border border-blue-600 rounded-full md:px-10 md:py-8 md:text-lg hover:bg-black"
        >
          {"Let's Talk"}
          <ArrowRight className="w-8 h-8 ml-2 md:w-16 md:h-16" />
        </Button>
      </div>
      <div className="relative z-10 mt-8 md:mt-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 md:gap-12 lg:gap-16 lg:grid-cols-2">
            <div className="flex flex-col justify-between h-full">
              <div className="space-y-3 md:space-y-4">
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 text-sm font-medium text-black bg-teal-300 rounded-full">
                    WEB DESIGN
                  </span>
                  <span className="px-4 py-2 text-sm font-medium text-black bg-teal-300 rounded-full">
                    BRANDING
                  </span>
                </div>
                <div>
                  <span className="px-4 py-2 text-sm font-medium text-black bg-teal-300 rounded-full">
                    WEB DEVELOPMENT
                  </span>
                </div>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 text-sm font-medium text-black bg-teal-300 rounded-full">
                    E-COMMERCE DEVELOPMENT
                  </span>
                  <span className="px-4 py-2 text-sm font-medium text-black bg-teal-300 rounded-full">
                    ORGANIC SEO
                  </span>
                </div>
                <div>
                  <span className="px-4 py-2 text-sm font-medium text-black bg-teal-300 rounded-full">
                    WEB BASED APPLICATIONS
                  </span>
                </div>
                <div>
                  <span className="px-4 py-2 text-sm font-medium text-black bg-teal-300 rounded-full">
                    WEB APP SECURITY
                  </span>
                </div>
                <div>
                  <span className="px-4 py-2 text-sm font-medium text-black bg-teal-300 rounded-full">
                    WEBSITE SUPPORT & MAINTENANCE
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between h-full">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="space-y-3 md:space-y-4">
                  <h3 className="text-xl font-bold text-white md:text-2xl">
                    London
                  </h3>
                  <div className="space-y-2 md:space-y-3">
                    <p className="text-2xl font-bold text-white md:text-4xl">
                      020 3908 4428
                    </p>
                    <div className="space-y-1 text-sm text-gray-300 md:text-base">
                      <p>30 Stamford Street, London, SE1 9LQ</p>
                      <p>85 Tottenham Ct Rd, London, W1T 4TQ</p>
                    </div>
                    <p className="text-blue-400">london@netdreams.co.uk</p>
                  </div>
                </div>
                <div className="space-y-3 md:space-y-4">
                  <h3 className="text-xl font-bold text-white md:text-2xl">
                    Richmond
                  </h3>
                  <div className="space-y-2 md:space-y-3">
                    <p className="text-2xl font-bold text-white md:text-4xl">
                      020 8948 5808
                    </p>
                    <div className="space-y-1 text-sm text-gray-300 md:text-base">
                      <p>56 Kew Road, Richmond,</p>
                      <p>Surrey, TW9 2PQ</p>
                    </div>
                    <p className="text-blue-400">richmond@netdreams.co.uk</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap justify-center gap-2 mt-8 md:justify-end md:gap-4 md:mt-16">
                <Button
                  variant="outline"
                  className="px-6 py-2 text-sm text-white border-white rounded-full md:px-8 md:py-3 md:text-base hover:bg-white hover:text-black"
                >
                  About
                </Button>
                <Button
                  variant="outline"
                  className="px-6 py-2 text-sm text-white border-white rounded-full md:px-8 md:py-3 md:text-base hover:bg-white hover:text-black"
                >
                  Lab
                </Button>
                <Button
                  variant="outline"
                  className="px-6 py-2 text-sm text-white border-white rounded-full md:px-8 md:py-3 md:text-base hover:bg-white hover:text-black"
                >
                  Blog
                </Button>
              </div>
            </div>
          </div>
          {/* Mobile Footer Elements - New */}
          <div className="block mt-12 lg:hidden">
            <div className="flex justify-center gap-4">
              <Linkedin className="w-6 h-6 text-white transition-colors cursor-pointer hover:text-teal-300" />
              <Twitter className="w-6 h-6 text-white transition-colors cursor-pointer hover:text-teal-300" />
              <Facebook className="w-6 h-6 text-white transition-colors cursor-pointer hover:text-teal-300" />
              <Instagram className="w-6 h-6 text-white transition-colors cursor-pointer hover:text-teal-300" />
              <Dribbble className="w-6 h-6 text-white transition-colors cursor-pointer hover:text-teal-300" />
            </div>
            <p className="mt-6 text-xs text-center text-gray-400">
              © IDStudio Web Design Ltd. Privacy Policy Terms & Conditions
            </p>
          </div>
          {/* Hide desktop footer elements on mobile */}
          <div className="hidden mt-8 space-y-4 lg:block">
            <div className="flex justify-center gap-4 md:gap-6 md:justify-start">
              <Linkedin className="w-6 h-6 text-white transition-colors cursor-pointer hover:text-teal-300" />
              <Twitter className="w-6 h-6 text-white transition-colors cursor-pointer hover:text-teal-300" />
              <Facebook className="w-6 h-6 text-white transition-colors cursor-pointer hover:text-teal-300" />
              <Instagram className="w-6 h-6 text-white transition-colors cursor-pointer hover:text-teal-300" />
              <Dribbble className="w-6 h-6 text-white transition-colors cursor-pointer hover:text-teal-300" />
            </div>
            <p className="text-xs text-center text-gray-400 md:text-sm md:text-left">
              © IDStudio Web Design Ltd. Privacy Policy Terms & Conditions
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
