'use client';

import React, { useEffect, useRef, useCallback } from 'react';

import gsap from 'gsap';
import SplitText from 'gsap/SplitText';

const AnimatedContactText = ({ text }: { text: string }) => {
  const wrapperRef = useRef<HTMLSpanElement>(null);
  const splitRef = useRef<SplitText | null>(null);

  const init = useCallback(() => {
    if (!wrapperRef.current) return;

    gsap.set(wrapperRef.current, { autoAlpha: 1 });
    const split = new SplitText(wrapperRef.current, { type: 'chars' });
    splitRef.current = split;
  }, []);

  const handleMouseEnter = useCallback(() => {
    if (!splitRef.current || !wrapperRef.current) return;

    const chars = splitRef.current.chars;
    if (chars.length < 2) return;

    // Move first character left and last character right
    gsap.to(chars[0], {
      x: -6,
      duration: 0.3,
      ease: 'power2.out',
    });

    gsap.to(chars[chars.length - 1], {
      x: 6,
      duration: 0.3,
      ease: 'power2.out',
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (!splitRef.current || !wrapperRef.current) return;

    const chars = splitRef.current.chars;
    if (chars.length < 2) return;

    // Reset wrapper scale
    gsap.to(wrapperRef.current, {
      scale: 1,
      duration: 0.3,
      ease: 'power2.out',
    });

    // Reset character positions
    gsap.to(chars[0], {
      x: 0,
      duration: 0.3,
      ease: 'power2.out',
    });

    gsap.to(chars[chars.length - 1], {
      x: 0,
      duration: 0.3,
      ease: 'power2.out',
    });
  }, []);

  useEffect(() => {
    init();
  }, [init]);

  return (
    <span
      ref={wrapperRef}
      className='uppercase font-spline-sans-mono cursor-pointer'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {text}
    </span>
  );
};

export default AnimatedContactText;