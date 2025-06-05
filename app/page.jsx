import { HeroSection } from "@/components/sections/hero-section";
import GridBackground from "@/components/grid-background";

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-white">
      <div className="absolute inset-0">
        <GridBackground />
      </div>
      <main className="relative z-10 px-10 pt-20">
        <HeroSection />
        <div className="h-[200vh] flex items-center justify-center">
          <div className="space-y-4 text-center">
            <h2 className="text-4xl font-bold text-slate-900">
              Scroll to see header animation
            </h2>
            <p className="text-slate-600">
              Scroll down and then back up to see the dark header
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
