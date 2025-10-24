'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger, SplitText);

const AnimatedHeroTitle = ({ title }: { title: string }) => {
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = titleRef.current; // Capture ref value
    if (!currentRef) return;

    const splitTitle = new SplitText(currentRef, { type: 'chars' });

    // Set the initial state (hidden)
    gsap.set(splitTitle.chars, {
      opacity: 0,
      y: -50,
    });

    // Create scroll-triggered animation
    const tl = gsap.to(splitTitle.chars, {
      opacity: 1,
      y: 0,
      ease: 'back.out(1.7)',
      stagger: {
        from: 'center',
        each: 0.06,
      },
      scrollTrigger: {
        trigger: currentRef,
        // trigger when title enters the bottom of the viewport — more reliable on small screens
        start: 'top bottom',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
      },
    });

    // Cleanup function
    return () => {
      // Kill the specific ScrollTrigger instance
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
      // Revert SplitText
      splitTitle.revert();
    };
  }, [title]); // Add title as a dependency

  return (
    <h1
      ref={titleRef}
      className='font-bold font-sofia-sans-condensed uppercase text-center text-black tracking-[-8px] leading-[0.8] mt-6 sm:mt-8 md:mt-10 lg:mt-15 text-[clamp(5.5rem,25vw,15rem)]'
      style={{
        letterSpacing: 'clamp(-2rem, -1.5vw, 0.05rem)',
      }}
    >
      <span className='lg:inline block'>web</span>{' '}
      <span className='lg:inline block'>developer</span>
    </h1>
  );
};

export default AnimatedHeroTitle;
