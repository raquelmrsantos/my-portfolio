"use client";

import React, { useEffect, useRef, ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  animationType?: "fadeUp" | "fadeIn" | "slideLeft" | "slideRight";
  delay?: number;
}

export default function Section({
  children,
  className = "",
  animationType = "fadeUp",
  delay = 0,
}: SectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Dynamic import to avoid SSR issues
    const initAnimation = async () => {
      if (typeof window === "undefined") return;

      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");

      gsap.registerPlugin(ScrollTrigger);

      if (!sectionRef.current) return;

      const element = sectionRef.current;

      // Set initial state based on animation type
      switch (animationType) {
        case "fadeUp":
          gsap.set(element, { opacity: 0, y: 50 });
          break;
        case "fadeIn":
          gsap.set(element, { opacity: 0 });
          break;
        case "slideLeft":
          gsap.set(element, { opacity: 0, x: -50 });
          break;
        case "slideRight":
          gsap.set(element, { opacity: 0, x: 50 });
          break;
      }

      // Create the animation
      const animation = gsap.to(element, {
        opacity: 1,
        x: 0,
        y: 0,
        duration: 1,
        delay,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      return () => {
        animation.kill();
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    };

    initAnimation();
  }, [animationType, delay]);

  return (
    <div
      ref={sectionRef}
      className={`h-[calc(100vh-40px)] overflow-hidden rounded-[20px] bg-[#EDEDED] p-[20px] ${className}`}
    >
      {children}
    </div>
  );
}
