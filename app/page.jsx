import { HeroSection } from "@/components/sections/hero-section";
import { VideosSection } from "@/components/sections/videos-section";
import { ServicesSection } from "@/components/sections/services-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden inset-0 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
      <div className="relative px-10 pt-20 ">
        <HeroSection />
        <VideosSection />
      </div>
      <ServicesSection />
      <TestimonialsSection />
    </div>
  );
}
