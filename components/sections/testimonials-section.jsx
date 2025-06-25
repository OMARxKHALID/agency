"use client";

import { useState, useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { testimonials } from "@/constants/testimonials";

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const isMobile = useIsMobile();
  const VISIBLE_CARDS = isMobile ? 1 : 3;
  const maxIndex = testimonials.length - VISIBLE_CARDS;

  const handlePrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - VISIBLE_CARDS : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - VISIBLE_CARDS ? 0 : prev + 1
    );
  };

  return (
    <section className="relative px-10 py-20 font-mundial">
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-16">
          <div className="inline-flex items-center gap-8 px-4 py-2 rounded-sm bg-emerald-50">
            <span className="text-[10px] md:text-xs font-dm-mono tracking-wider text-emerald-800 uppercase">
              TESTIMONIALS
            </span>
            <div className="w-12 h-px bg-gray-800" />
          </div>
        </div>

        <div className="relative">
          {/* Previous Button */}
          <div className="absolute left-0 z-10 flex flex-col items-center justify-center -translate-x-12 -translate-y-1/2 top-1/2">
            <div className="w-1 h-10 bg-gray-800" />
            <button
              onClick={handlePrevious}
              className="text-xs font-extrabold tracking-[0.15em] text-gray-900 uppercase -rotate-90 whitespace-nowrap my-8"
            >
              Previous
            </button>
            <div className="w-1 h-10 bg-gray-800" />
          </div>

          {/* Next Button */}
          <div className="absolute z-10 flex flex-col items-center justify-center translate-x-12 -translate-y-1/2 right-[1.2rem] top-1/2">
            <div className="w-1 h-10 bg-gray-800" />
            <button
              onClick={handleNext}
              className="text-xs font-extrabold tracking-[0.15em] text-gray-900 uppercase rotate-90 whitespace-nowrap my-4"
            >
              Next
            </button>
            <div className="w-1 h-10 bg-gray-800" />
          </div>

          {/* Testimonials Container */}
          <div className="overflow-hidden">
            <div
              ref={containerRef}
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / testimonials.length)
                }%)`,
                width: `${(100 / VISIBLE_CARDS) * testimonials.length}%`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-4"
                  style={{ width: `${100 / testimonials.length}%` }}
                >
                  <div className="h-full px-10 py-16 bg-[#E9FFFE]">
                    <div className="h-full bg-[#E9FFFE]">
                      <blockquote className="mb-6 text-lg leading-relaxed text-gray-900 font-mundial-demi lg:mb-8 lg:text-xl">
                        '{testimonial.quote}'
                      </blockquote>
                      <div>
                        <div className="mb-1 text-base text-gray-900 font-mundial-bold lg:text-lg">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-gray-700 font-mundial-regular lg:text-base">
                          {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
