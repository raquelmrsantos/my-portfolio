import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';

gsap.registerPlugin(SplitText, ScrambleTextPlugin);

export interface ScrambledTextProps {
  radius?: number;
  duration?: number;
  speed?: number;
  scrambleChars?: string;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

const ScrambledText: React.FC<ScrambledTextProps> = ({
  radius = 100,
  duration = 1.2,
  speed = 0.5,
  scrambleChars = '.:',
  className = '',
  style = {},
  children,
}) => {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!rootRef.current) return;

    let split: SplitText | null = null;
    let handleMove: ((e: PointerEvent) => void) | null = null;

    // Wait for fonts to load before initializing SplitText
    const initScramble = async () => {
      try {
        // Wait for all fonts to be ready
        await document.fonts.ready;

        // Add a small delay to ensure layout is stable
        await new Promise(resolve => setTimeout(resolve, 50));

        if (!rootRef.current) return;

        const paragraph = rootRef.current.querySelector('p');
        if (!paragraph) return;

        // Split by words first to keep words together
        split = SplitText.create(paragraph, {
          type: 'words,chars',
          wordsClass: 'inline-block',
          charsClass: 'inline-block will-change-transform',
        });

        split.chars.forEach(el => {
          const c = el as HTMLElement;
          gsap.set(c, { attr: { 'data-content': c.innerHTML } });
        });

        handleMove = (e: PointerEvent) => {
          if (!split) return;

          split.chars.forEach(el => {
            const c = el as HTMLElement;
            const { left, top, width, height } = c.getBoundingClientRect();
            const dx = e.clientX - (left + width / 2);
            const dy = e.clientY - (top + height / 2);
            const dist = Math.hypot(dx, dy);

            if (dist < radius) {
              gsap.to(c, {
                overwrite: true,
                duration: duration * (1 - dist / radius),
                scrambleText: {
                  text: c.dataset.content || '',
                  chars: scrambleChars,
                  speed,
                },
                ease: 'none',
              });
            }
          });
        };

        const el = rootRef.current;
        if (el && handleMove) {
          el.addEventListener('pointermove', handleMove);
        }
      } catch (error) {
        console.error('Error initializing scrambled text:', error);
      }
    };

    initScramble();

    return () => {
      const el = rootRef.current;
      if (el && handleMove) {
        el.removeEventListener('pointermove', handleMove);
      }
      if (split) {
        split.revert();
      }
    };
  }, [radius, duration, speed, scrambleChars]);

  return (
    <div ref={rootRef} className={`${className}`} style={style}>
      <p className='whitespace-normal'>{children}</p>
    </div>
  );
};

export default ScrambledText;
