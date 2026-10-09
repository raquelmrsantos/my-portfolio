import React, { useRef } from 'react';
import gsap from 'gsap';

export const RollingItem = ({ children }: { children: React.ReactNode }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (!containerRef.current) return;
    const texts = containerRef.current.querySelectorAll('.rolling-text');
    gsap.to(texts, { y: '-100%', duration: 0.3, ease: 'power2.inOut' });
  };

  const handleMouseLeave = () => {
    if (!containerRef.current) return;
    const texts = containerRef.current.querySelectorAll('.rolling-text');
    gsap.to(texts, { y: '0%', duration: 0.3, ease: 'power2.inOut' });
  };

  return (
    <div
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className='relative overflow-hidden flex items-center justify-center'
    >
      <span className='rolling-text flex items-center'>{children}</span>
      <span
        className='rolling-text absolute top-full left-0 flex items-center h-full w-full'
        aria-hidden='true'
      >
        {children}
      </span>
    </div>
  );
};

