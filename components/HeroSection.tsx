'use client';

import React, { forwardRef, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

/**
 * A functional ForwardRef component that renders the primary hero portion of the landing page.
 * Displays animated headlines and stat blocks using internal GSAP implementations,
 * while forwarding the car image reference for external scroll-based trigger control.
 */
const HeroSection = forwardRef<HTMLImageElement, React.HTMLAttributes<HTMLElement>>((props, ref) => {
  const headline = 'WELCOME ITZFIZZ'.split('');
  const lettersRef = useRef<(HTMLSpanElement | null)[]>([]);
  const statsRef = useRef<(HTMLDivElement | null)[]>([]);

  /**
   * Initializes initial appearance and sequential load animations safely on the client.
   * Leverages gsap.context for easy cleanup during strict mode unmounts or fast refreshes.
   */
  useLayoutEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      gsap.set(lettersRef.current, { opacity: 0 });
      gsap.set(statsRef.current, { opacity: 0 });

      gsap.fromTo(
        lettersRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.05,
          ease: 'power3.out',
          duration: 0.8,
        }
      );

      gsap.fromTo(
        statsRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          delay: 0.6,
          ease: 'power2.out',
          duration: 0.6,
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      {...props}
      className={`relative flex flex-col items-center justify-center w-full h-screen bg-[#0a0a0a] overflow-hidden ${props.className || ''}`}
    >
      <div className="z-10 flex flex-row items-center justify-center mb-16 text-6xl font-bold tracking-[0.25em] text-white md:text-8xl">
        {headline.map((char, index) => (
          <span
            key={index}
            ref={(el) => {
              if (el) lettersRef.current[index] = el;
            }}
            className={`inline-block will-change-transform ${char === ' ' ? 'w-8 md:w-16' : ''}`}
          >
            {char}
          </span>
        ))}
      </div>

      <div className="z-10 flex flex-row items-start justify-between w-full max-w-6xl px-8 pb-48 md:px-12">
        <div ref={(el) => { if (el) statsRef.current[0] = el; }} className="flex flex-col items-center text-center">
          <span className="mb-3 text-4xl font-bold text-white md:text-5xl">58%</span>
          <span className="max-w-[160px] text-sm leading-relaxed text-gray-400 md:text-base">
            Increase in pick up point use
          </span>
        </div>
        <div ref={(el) => { if (el) statsRef.current[1] = el; }} className="flex flex-col items-center text-center">
          <span className="mb-3 text-4xl font-bold text-white md:text-5xl">23%</span>
          <span className="max-w-[160px] text-sm leading-relaxed text-gray-400 md:text-base">
            Decreased in customer phone calls
          </span>
        </div>
        <div ref={(el) => { if (el) statsRef.current[2] = el; }} className="flex flex-col items-center text-center">
          <span className="mb-3 text-4xl font-bold text-white md:text-5xl">27%</span>
          <span className="max-w-[160px] text-sm leading-relaxed text-gray-400 md:text-base">
            Increase in pick up point use
          </span>
        </div>
        <div ref={(el) => { if (el) statsRef.current[3] = el; }} className="flex flex-col items-center text-center">
          <span className="mb-3 text-4xl font-bold text-white md:text-5xl">40%</span>
          <span className="max-w-[160px] text-sm leading-relaxed text-gray-400 md:text-base">
            Decreased in customer phone calls
          </span>
        </div>
      </div>

      <img
        id="car-image"
        ref={ref}
        src="/car.png"
        alt=""
        className="absolute bottom-6 left-1/2 z-20 w-80 -translate-x-1/2 object-contain md:w-[420px] will-change-transform"
      />
    </section>
  );
});

HeroSection.displayName = 'HeroSection';

export default HeroSection;
