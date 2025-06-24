import { HeroSection } from "@/components/sections/hero-section";
import { VideosSection } from "@/components/sections/videos-section";
import { ServicesSection } from "@/components/sections/services-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";

export default function HomePage() {
  return (
    <div className="relative inset-0 w-full h-full min-h-screen overflow-hidden ">
      <div className="relative px-10 pt-16 ">
        <HeroSection />
        <VideosSection />
      </div>
      <ServicesSection />
      <TestimonialsSection />
    </div>
  );
}
