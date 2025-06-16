"use client";

import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

const testimonials = [
  {
    quote:
      "What an awesome web design agency to work with.....creative design is insane, technical delivery is of a super high standard and the team is incredible. I highly recommend ID Studio.",
    name: "Yasmeen Jaffer",
    company: "JJC Fintech",
  },
  {
    quote:
      "These guys helped me design a fantastic, fresh and unique website! There was never a no to a request and always replied next day to any emails! I would highly recommend them for their creativity but also their customer service.",
    name: "Camilla Kastrup",
    company: "CEO, Thorsager",
  },
  {
    quote:
      "Ecstatic with our new website. Mike and the team took on our project when we were let down by another agency. If you're looking for a web agency who really know their stuff, and are great to work with, I couldn't recommend them more.",
    name: "Greg Clarke",
    company: "Wiley Edge",
  },
  {
    quote:
      "Outstanding work from start to finish. The team delivered beyond our expectations and the website has significantly improved our online presence. Professional, creative, and highly skilled.",
    name: "Sarah Mitchell",
    company: "TechFlow Solutions",
  },
  {
    quote:
      "Incredible attention to detail and fantastic communication throughout the project. They transformed our vision into reality and delivered a website that perfectly represents our brand.",
    name: "David Chen",
    company: "Innovate Digital",
  },
  {
    quote:
      "Best investment we've made for our business. The new website has increased our leads by 300% and the design is absolutely stunning. Couldn't be happier with the results.",
    name: "Emma Rodriguez",
    company: "Growth Marketing Co",
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const VISIBLE_CARDS = 3;
  const maxIndex = testimonials.length - VISIBLE_CARDS;

  const animateSlide = (newIndex) => {
    if (!containerRef.current) return;

    const translateX = -(newIndex * (100 / VISIBLE_CARDS));
    gsap.to(containerRef.current, {
      x: `${translateX}%`,
      duration: 0.8,
      ease: "power2.out",
    });
  };

  const handleNext = () => {
    const newIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    animateSlide(newIndex);
  };

  const handlePrevious = () => {
    const newIndex = currentIndex <= 0 ? maxIndex : currentIndex - 1;
    setCurrentIndex(newIndex);
    animateSlide(newIndex);
  };

  useEffect(() => {
    if (containerRef.current) {
      gsap.set(containerRef.current, {
        width: `${(testimonials.length / VISIBLE_CARDS) * 100}%`,
        x: "0%",
      });
    }
  }, []);

  return (
    <section className="relative py-20 px-14 font-mundial">
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-16">
          <div className="flex items-center gap-4">
            <span className="text-xs font-medium tracking-[0.2em] text-gray-800 uppercase">
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

          <div className="absolute right-0 z-10 flex flex-col items-center justify-center translate-x-12 -translate-y-1/2 top-1/2">
            <div className="w-1 h-10 bg-gray-800" />
            <button
              onClick={handleNext}
              className="text-xs font-extrabold tracking-[0.15em] text-gray-900 uppercase rotate-90 whitespace-nowrap my-4"
            >
              Next
            </button>
            <div className="w-1 h-10 bg-gray-800" />
          </div>

          <div className="overflow-hidden">
            <div ref={containerRef} className="flex">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-4"
                  style={{ width: `${100 / testimonials.length}%` }}
                >
                  <div className="h-full p-8 bg-teal-50">
                    <div className="h-full p-6 lg:p-8 bg-teal-50">
                      <blockquote className="mb-6 text-lg font-bold leading-relaxed text-gray-900 lg:mb-8 lg:text-xl">
                        '{testimonial.quote}'
                      </blockquote>
                      <div>
                        <div className="mb-1 text-base font-bold text-gray-900 lg:text-lg">
                          {testimonial.name}
                        </div>
                        <div className="text-sm font-bold text-gray-700 lg:text-base">
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
