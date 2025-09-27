'use client';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { useEffect, useRef } from 'react';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger, SplitText);

const AnimatedTitle = ({ title }: { title: string }) => {
    const titleRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const currentRef = titleRef.current; // Capture ref value
        if (!currentRef) return;

        const splitTitle = new SplitText(currentRef, { type: "chars" });

        // Set the initial state (hidden)
        gsap.set(splitTitle.chars, {
            opacity: 0,
            y: -50,
        });

        // Create scroll-triggered animation
        const tl = gsap.to(splitTitle.chars, {
            opacity: 1,
            y: 0,
            ease: "back.out(1.7)",
            stagger: {
                from: "center",
                each: 0.06,
            },
            scrollTrigger: {
                trigger: currentRef,
                start: "top 70%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
            }
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
        <div>
            <h2
                ref={titleRef}
                className='font-bold uppercase text-center text-black overflow-hidden'
                style={{ fontSize: 'clamp(2rem, 10vw, 10rem)' }}
            >
                {title}
            </h2>
        </div>
    );
};

export default AnimatedTitle;