"use client";

import { useEffect, useRef, useState } from "react";

export function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  className = "",
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  const getTransform = () => {
    if (isVisible) return "translate(0, 0)";

    switch (direction) {
      case "up":
        return "translate(0, 50px)";
      case "down":
        return "translate(0, -50px)";
      case "left":
        return "translate(50px, 0)";
      case "right":
        return "translate(-50px, 0)";
      default:
        return "translate(0, 50px)";
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${className}`}
      style={{
        transform: getTransform(),
        opacity: isVisible ? 1 : 0,
      }}
    >
      {children}
    </div>
  );
}
