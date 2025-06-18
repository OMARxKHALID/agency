import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FooterSection() {
  return (
    <footer className="relative overflow-hidden ">
      <div className="relative z-10 flex flex-col items-center justify-center px-4 text-center">
        <h1 className="mb-8 text-6xl font-bold leading-tight text-white md:text-6xl lg:text-9xl xl:text-9xl ">
          Pop the bubbles
          <br />
          and call us.
        </h1>

        <Button
          size="lg"
          className="px-10 py-8 text-lg text-white transition-all duration-300 bg-blue-600 border border-blue-600 rounded-full hover:bg-black"
        >
          {"Let's Talk"}
          <ArrowRight className="w-16 h-16 ml-2" />
        </Button>
      </div>
    </footer>
  );
}
