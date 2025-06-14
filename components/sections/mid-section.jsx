"use client";

import Image from "next/image";

export function MidSection() {
  return (
    <section className="w-full px-4 md:px-10 lg:px-18">
      <div className="relative w-full overflow-hidden aspect-video rounded-2xl">
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

        <div className="absolute inset-0 z-20 flex items-center justify-start px-6 md:px-20">
          <div className="max-w-2xl space-y-5 text-white">
            <Image
              src="/placeholder-logo.svg"
              alt="Rosebank Logo"
              width={160}
              height={40}
              className="mb-2"
            />

            <h1 className="text-3xl font-bold leading-tight md:text-5xl">
              Rosebank Website <br /> Design And Development
            </h1>

            <p className="text-base md:text-lg">
              Creative exploration, showcase website design and custom UX/UI.{" "}
              <br />
              We designed Rosebank's new website to highlight their famous
              showcase.
            </p>

            <div className="flex flex-wrap gap-3 text-sm font-medium">
              <span className="px-3 py-1 rounded-full bg-white/20">
                UX Design
              </span>
              <span className="px-3 py-1 rounded-full bg-white/20">
                Web Design
              </span>
              <span className="px-3 py-1 rounded-full bg-white/20">
                Web Development
              </span>
            </div>

            <a
              href="/our-work/rosebank-landscaping/"
              className="inline-block px-6 py-2 mt-4 text-sm font-semibold text-white transition bg-blue-600 rounded-full hover:bg-blue-700"
            >
              View Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
