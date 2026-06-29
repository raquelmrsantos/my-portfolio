'use client';

import React from 'react';
import Section from './Section';
import BlurText from './BlurText';
import { ArrowDownRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'E-Commerce Development',
      description: 'Building premium, high-performance shopping experiences that drive conversions, with expertise in SEO, accessibility, and luxury brand standards.',
    },
    {
      title: 'Custom Web Applications',
      description: 'Architecting scalable front-end solutions and internal enterprise platforms tailored to complex business requirements.',
    },
    {
      title: 'UI/UX Implementation',
      description: 'Bridging the gap between design and engineering with pixel-perfect precision, fluid animations, and responsive interfaces.',
    },
  ];

  return (
    <Section className='py-20 md:py-28'>
      <div className='space-y-12'>
        <div>
          <BlurText
            text='Services'
            delay={150}
            animateBy='words'
            direction='top'
            className='mb-8 uppercase text-7xl md:text-9xl font-bold font-sofia-sans-condensed'
          />
        </div>
        <div className='grid md:grid-cols-3 gap-8 font-spline-sans-mono uppercase'>
          {services.map((service, index) => (
            <div key={index} className='border-t border-black/20 pt-6'>
              <h3 className='text-2xl font-normal mb-6 flex items-start gap-2'>
                <ArrowDownRight className='min-w-6 text-gray-500' />
                {service.title}
              </h3>
              <p className='text-sm font-light leading-relaxed normal-case tracking-wide opacity-90'>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
