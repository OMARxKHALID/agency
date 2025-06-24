import { HeroSection } from "@/components/sections/hero-section";
import { VideosSection } from "@/components/sections/videos-section";
import { ServicesSection } from "@/components/sections/services-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { Marquee } from "@/components/ui/marquee";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="relative inset-0 w-full h-full min-h-screen overflow-hidden ">
      <div className="relative px-10 pt-16">
        <HeroSection />
        <VideosSection />
      </div>
      <ServicesSection />
      <div className="relative mb-16 mt-52">
        <div className="absolute z-20 right-2 md:right-2 lg:right-10 xl:right-20 bottom-16 ">
          <span className="block -ml-12 tracking-tighter -rotate-12 font-mundial-regular">
            Our tech stack
          </span>
          <Image
            alt="arrow"
            src="/images/arrow.svg"
            className="w-16"
            width={100}
            height={100}
          />
        </div>
        <Marquee />
      </div>

      <TestimonialsSection />
    </div>
  );
}
