"use client";
import { icons } from "@/components/constants/icons";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef } from "react";

export const Marquee = ({ items = icons, speed = 0.03, className }) => {
  const scrollerRef = useRef(null);
  const sectionRef = useRef(null);
  const animationRef = useRef(null);
  const positionRef = useRef(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    let lastTimestamp = 0;

    const isInViewport = (element) => {
      const rect = element.getBoundingClientRect();
      return rect.top <= window.innerHeight && rect.bottom >= 0;
    };

    const animate = (timestamp) => {
      if (!scrollerRef.current || !sectionRef.current) return;
      if (isInViewport(sectionRef.current)) {
        const elapsed = lastTimestamp ? timestamp - lastTimestamp : 0;
        lastTimestamp = timestamp;
        positionRef.current += speed * elapsed;
        const containerWidth = scrollerRef.current.scrollWidth / 2;
        if (positionRef.current >= containerWidth) {
          positionRef.current = 0;
        }
        scrollerRef.current.style.transform = `translateX(-${positionRef.current}px)`;
      } else {
        lastTimestamp = timestamp;
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [speed]);

  return (
    <section ref={sectionRef} className={cn("relative", className)}>
      <div className="relative max-w-6xl mx-auto overflow-hidden">
        <div className="absolute z-10 w-56 h-full pointer-events-none -right-4 bg-gradient-to-l from-white to-transparent" />
        <div className="absolute z-10 w-56 h-full pointer-events-none -left-4 bg-gradient-to-r from-white to-transparent" />
        <div className="w-full py-4 overflow-hidden" aria-hidden="true">
          <div
            ref={scrollerRef}
            className="flex translate-x-0 w-fit backface-hidden"
          >
            {[...items, ...items].map(({ icon, name }, index) => (
              <div
                key={index}
                className="flex items-center mx-8 text-gray-600 whitespace-nowrap"
              >
                {icon}
                <span className="text-lg font-semibold">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
