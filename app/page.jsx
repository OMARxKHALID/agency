import { HeroSection } from "@/components/sections/hero-section";
import GridBackground from "@/components/grid-background";
import { VideosSection } from "@/components/sections/videos-section";
import { ServicesSection } from "@/components/sections/services-section";
import { FooterSection } from "@/components/sections/footer-section";

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-white">
      <div className="absolute inset-0">
        <GridBackground />
      </div>
      <div className="relative z-10 px-10 pt-20">
        <HeroSection />
        <VideosSection />
      </div>
      <ServicesSection />
      <FooterSection />
    </div>
  );
}
