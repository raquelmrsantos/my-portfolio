"use client";

import React from "react";
import Section from "./Section";

export default function About() {
  return (
    <Section className="p-8 md:p-12" animationType="slideLeft" delay={0.2}>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/3">
          <div className="w-48 h-48 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-6xl">👨‍💻</span>
          </div>
        </div>
        <div className="md:w-2/3 text-black">
          <h2>About Me</h2>
          <p className="text-lg mb-4 text-black/90">
            I&apos;m a passionate developer with expertise in modern web
            technologies. I love creating beautiful, functional, and
            user-friendly applications.
          </p>
          <p className="text-lg text-black/90">
            My journey in tech has led me to specialize in React, TypeScript,
            and creating seamless user experiences.
          </p>
        </div>
      </div>
    </Section>
  );
}
