'use client';

import React from 'react';
import Section from './Section';

export default function About() {
  return (
    <Section className='py-20 md:py-28'>
      <div className='grid md:grid-cols-2 gap-12 md:gap-16 items-start'>
        <div>
          <h1 className='mb-8 uppercase text-9xl font-bold font-sofia-sans-condensed '>
            About me
          </h1>
        </div>
        <div className='space-y-6 font-spline-sans-mono text-center uppercase'>
          <p className='text-lg font-light leading-relaxed'>
            I&apos;m a passionate developer with expertise in modern web
            technologies. I focus on creating beautiful, functional, and
            user-friendly applications that solve real problems.
          </p>
          <p className='text-lg font-light leading-relaxed'>
            My journey in technology has led me to specialize in React,
            TypeScript, and crafting seamless user experiences that bridge the
            gap between design and functionality.
          </p>
        </div>
      </div>
    </Section>
  );
}
