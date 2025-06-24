import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative px-2 md:px-12 lg:px-22 min-h-[calc(80vh-6rem)] flex items-center">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[45%_55%] items-center w-full">
        <div className="space-y-6 lg:space-y-10">
          <div className="inline-flex items-center gap-8 px-4 py-2 rounded-sm bg-emerald-50 ">
            <span className="text-[10px] md:text-xs font-dm-mono tracking-wider text-emerald-800 uppercase">
              Web Design Agency. Web Design Pakistan
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-[84px] font-schibsted leading-[0.95] lg:leading-[0.85] tracking-tight text-black">
            Creatively
            <br />
            Driven Web
            <br />
            Design
          </h1>
          <p className="text-base leading-relaxed text-black font-mundial-regular md:text-lg">
            ID Studio is an award-winning web design agency that combines the
            skills of talented in-house brand experts, web designers and
            developers to deliver results-driven websites that elevate your
            brand and drive conversions.
          </p>
          <Link href="/contact">
            <Button className="w-full px-10 py-8 mt-8 text-sm text-white transition-colors duration-300 bg-black rounded-full shadow-lg md:w-auto font-mundial-demi">
              Contact Us
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </Link>
        </div>
        <div className="relative h-[300px] md:h-[500px] lg:h-[700px]">
          <div className="absolute -right-10 md:-right-20 top-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[250px] md:h-[500px]">
            <img
              src="/images/balloon.webp"
              alt="3D Balloon Background"
              className="object-contain w-full h-full"
              style={{ filter: "brightness(0.9) contrast(1.1)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
