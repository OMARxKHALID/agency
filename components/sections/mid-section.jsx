"use client";

import Image from "next/image";

export function MidSection() {
  return (
    <section className="w-full lg:px-4">
      <div className="relative w-full h-screen overflow-hidden sm:h-auto sm:aspect-video rounded-2xl">
        <video
          className="absolute top-0 left-0 object-cover w-full h-full rounded-2xl"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        >
          <source src="/videos/rosebank.mp4" type="video/mp4" />
        </video>

        {/* Mobile Layout */}
        <div className="absolute inset-0 z-20 flex flex-col justify-between p-4 text-white sm:hidden">
          <div className="flex flex-col justify-center flex-1 space-y-6">
            <Image
              src="/placeholder-logo.svg"
              alt="Rosebank Logo"
              width={120}
              height={30}
              className="self-start"
            />

            <div className="space-y-4">
              <h1 className="text-4xl font-bold leading-tight">
                Rosebank Website Design And Development
              </h1>

              <p className="text-base leading-relaxed opacity-90">
                Creative exploration, showcase website design and custom UX/UI.
                We designed Rosebanks new website to highlight their famous
                showcase.
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-4 py-2 text-sm font-medium rounded-full bg-white/20">
                  UX Design
                </span>
                <span className="px-4 py-2 text-sm font-medium rounded-full bg-white/20">
                  Web Design
                </span>
                <span className="px-4 py-2 text-sm font-medium rounded-full bg-white/20">
                  Web Development
                </span>
              </div>
            </div>
          </div>

          <div className="flex gap-3 pb-4">
            <a
              href="/our-work/rosebank-landscaping/"
              className="flex-1 px-6 py-4 text-base font-semibold text-center text-white transition bg-blue-600 rounded-full hover:bg-blue-700"
            >
              View Project
            </a>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="absolute inset-0 z-20 items-center justify-start hidden p-4 sm:flex sm:p-6 md:px-20">
          <div className="max-w-2xl space-y-3 text-white md:space-y-5">
            <Image
              src="/placeholder-logo.svg"
              alt="Rosebank Logo"
              width={120}
              height={30}
              className="mb-1 md:mb-2 md:w-[160px] md:h-[40px]"
            />

            <h1 className="text-2xl font-bold leading-tight sm:text-3xl md:text-4xl lg:text-5xl">
              Rosebank Website <br className="hidden sm:block" /> Design And
              Development
            </h1>

            <p className="text-sm sm:text-base md:text-lg">
              Creative exploration, showcase website design and custom UX/UI.{" "}
              <br className="hidden md:block" />
              We designed Rosebank's new website to highlight their famous
              showcase.
            </p>

            <div className="flex flex-wrap gap-2 text-xs font-medium md:gap-3 sm:text-sm">
              <span className="px-2 py-1 rounded-full md:px-3 bg-white/20">
                UX Design
              </span>
              <span className="px-2 py-1 rounded-full md:px-3 bg-white/20">
                Web Design
              </span>
              <span className="px-2 py-1 rounded-full md:px-3 bg-white/20">
                Web Development
              </span>
            </div>

            <a
              href="/our-work/rosebank-landscaping/"
              className="inline-block px-4 py-2 mt-2 text-xs font-semibold text-white transition bg-blue-600 rounded-full sm:px-6 md:mt-4 sm:text-sm hover:bg-blue-700"
            >
              View Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
