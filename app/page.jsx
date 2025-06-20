import { HeroSection } from "@/components/sections/hero-section";
import { VideosSection } from "@/components/sections/videos-section";
import { ServicesSection } from "@/components/sections/services-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="relative z-10 px-10 pt-20">
        <HeroSection />
        <VideosSection />
      </div>
      <ServicesSection />
      <TestimonialsSection />
    </div>
  );
}
