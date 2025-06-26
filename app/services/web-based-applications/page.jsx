"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import gsap from "gsap";

const Intro = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="relative w-full pt-64 mb-16 overflow-hidden lg:mb-20 xl:pt-40 lg:pt-40 md:pt-40">
      {/* Desktop Image */}
      <div className="absolute inset-0 z-20 items-center justify-center hidden pointer-events-none md:flex">
        <div className="relative w-2/3 h-32 translate-y-20 xs:w-1/2 xs:h-40 sm:w-1/3 sm:h-48 md:w-2/4 md:h-2/4 lg:w-3/4 lg:h-3/4 ">
          <Image
            src="/images/webdev.svg"
            alt="Web Development Illustration"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Mobile Image and Text */}
      <div className="absolute inset-0 z-30 flex pointer-events-none md:hidden mt-28">
        <div className="relative w-full h-full">
          <div className="absolute top-0 flex items-center justify-center w-full h-32 max-w-xs -translate-x-1/2 left-1/2 xs:max-w-sm sm:h-40">
            <h1 className="text-[2.5rem] font-bold text-black leading-[50px] text-center">
              web based application
            </h1>
          </div>
          <div className="absolute w-4/5 h-32 -translate-x-1/2 top-6 xs:w-3/4 sm:w-2/3 sm:h-48">
            <Image
              src="/images/webdev.svg"
              alt="WebDev Mobile Illustration"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>

      {/* Desktop Text */}
      <div className="relative z-10 flex items-center justify-center w-full h-full px-4">
        <div className="w-full mx-auto max-w-7xl">
          <div className="items-center justify-center hidden md:flex">
            <h1 className="text-[7.7rem] font-bold text-black text-center leading-none">
              web based application
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

const Sections = () => {
  const containerRef = useRef(null);
  const floatingRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const floating = floatingRef.current;
    if (!container || !floating) return;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 40;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 40;

      gsap.to(floating, {
        x,
        y,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const resetFloating = () => {
      gsap.to(floating, {
        x: 0,
        y: 0,
        duration: 0.4,
        ease: "power2.out",
      });
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", resetFloating);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", resetFloating);
    };
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-cyan-100">
      <div className="px-6 py-16 mx-auto lg:px-10 lg:py-8 ">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image Section */}
          <div
            className="relative flex justify-center"
            ref={containerRef}
            style={{ cursor: "pointer" }}
          >
            <div className="relative w-full max-w-[600px] aspect-square">
              {/* Main Image */}
              <Image
                src="/images/id-dev-01.webp"
                alt="Web Development Illustration"
                fill
                className="object-contain"
                priority
              />

              {/* Floating Image */}
              <div
                ref={floatingRef}
                className="absolute z-10 pointer-events-none left-1/2 top-1/2"
                style={{
                  transform: "translate(-50%, -50%)",
                  width: "100px",
                  height: "100px",
                }}
              >
                <Image
                  src="/images/id-dev-02.webp"
                  alt="Floating Illustration"
                  fill
                  className="object-contain"
                  priority
                  draggable={false}
                />
              </div>
            </div>
          </div>

          {/* Text Section */}
          <div className="space-y-10 ">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold leading-tight text-gray-900 lg:text-5xl">
                Web Development
                <br />
                Tailored To Your
                <br />
                Business
              </h2>
              <p className="text-base leading-relaxed text-gray-800 ">
                Whilst we are happy working with off-the-shelf platforms like
                WordPress and Shopify when it's the right solution, our website
                developers excel in coding custom websites built from the ground
                up to meet your end users' needs precisely. We've recently
                developed a bespoke eCommerce and membership website for the
                charity Listening Books and a medical information portal with
                hundreds of thousands of records for the Hamad Medical
                Corporation in Qatar.
              </p>
            </div>
            <Button className="w-full px-10 py-8 text-base font-semibold text-white transition duration-300 bg-black rounded-full border-2 md:w-fit hover:bg-transparent hover:text-black">
              Let’s Discuss Your Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function WebBasedApplicationsPage() {
  return (
    <main>
      <Intro />
      <Sections />
    </main>
  );
}
