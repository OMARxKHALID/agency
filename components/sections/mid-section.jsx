"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    src: "/videos/rosebank.mp4",
    logo: "/placeholder-logo.svg",
    title: "Rosebank Website Design And Development",
    description:
      "Creative exploration, showcase website design and custom UX/UI. We designed Rosebank's new website to highlight their famous showcase.",
    tags: ["UX Design", "Web Design", "Web Development"],
    link: "/our-work/rosebank-landscaping/",
  },
  {
    src: "/videos/rosebank2.mp4",
    logo: "/placeholder-logo.svg",
    title: "Project Two Design",
    description:
      "Another amazing project showcasing our capabilities in design and development.",
    tags: ["Brand Design", "UI Design", "Development"],
    link: "/our-work/project-two/",
  },
  {
    src: "/videos/rosebank.mp4",
    logo: "/placeholder-logo.svg",
    title: "Project Three Innovation",
    description: "Innovative solutions for modern design challenges.",
    tags: ["Innovation", "Web Design", "Development"],
    link: "/our-work/project-three/",
  },
];

const VideoSlide = ({ project, index, innerRef }) => (
  <div
    ref={innerRef}
    className="absolute inset-0 w-full h-screen py-8"
    style={{ zIndex: index + 1 }}
  >
    <div className="relative w-full h-full overflow-hidden rounded-2xl">
      <video
        className="absolute top-0 left-0 object-cover w-full h-full rounded-2xl"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
      >
        <source src={project.src} type="video/mp4" />
      </video>

      {/* Mobile Layout */}
      <div className="absolute inset-0 z-20 flex flex-col justify-between p-4 text-white sm:hidden">
        <div className="flex flex-col justify-center flex-1 space-y-6">
          <Image
            src={project.logo}
            alt="Project Logo"
            width={120}
            height={30}
            className="self-start"
          />
          <div className="space-y-4">
            <h1 className="text-4xl font-bold leading-tight">
              {project.title}
            </h1>
            <p className="text-base leading-relaxed opacity-90">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-4 py-2 text-sm font-medium rounded-full bg-white/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="flex gap-3 pb-4">
          <a
            href={project.link}
            className="flex-1 px-6 py-4 text-base font-semibold text-center text-white bg-blue-600 rounded-full hover:bg-blue-700"
          >
            View Project
          </a>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="absolute inset-0 z-20 items-center justify-start hidden p-6 text-white sm:flex md:px-20">
        <div className="max-w-2xl space-y-5">
          <Image
            src={project.logo}
            alt="Project Logo"
            width={160}
            height={40}
            className="mb-2"
          />
          <h1 className="text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
            {project.title}
          </h1>
          <p className="text-base md:text-lg">{project.description}</p>
          <div className="flex flex-wrap gap-3 text-sm font-medium">
            {project.tags.map((tag, i) => (
              <span key={i} className="px-3 py-1 rounded-full bg-white/20">
                {tag}
              </span>
            ))}
          </div>
          <a
            href={project.link}
            className="inline-block px-6 py-3 mt-4 text-sm font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700"
          >
            View Project
          </a>
        </div>
      </div>
    </div>
  </div>
);

export function MidSection() {
  const sectionRef = useRef(null);
  const videoRefs = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const items = videoRefs.current;

    // Timeline for scroll animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: `+=${projects.length * 100}%`,
        scrub: 1,
        pin: true,
      },
    });

    // Stack slides on top of each other
    gsap.set(items.slice(1), { yPercent: 100 });

    // Animate each slide into view
    items.slice(1).forEach((el) => {
      tl.to(el, { yPercent: 0, ease: "none" });
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[300vh] overflow-hidden"
    >
      {projects.map((project, index) => (
        <VideoSlide
          key={index}
          index={index}
          project={project}
          innerRef={(el) => (videoRefs.current[index] = el)}
        />
      ))}
    </section>
  );
}
