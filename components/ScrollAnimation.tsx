'use client';

import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HeroSection from './HeroSection';

gsap.registerPlugin(ScrollTrigger);

/** Drives car animation in HeroSection based on scroll progress. */
const ScrollAnimation = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const carRef = useRef<HTMLImageElement>(null);

    useLayoutEffect(() => {
        if (typeof window === 'undefined') return;

        const ctx = gsap.context(() => {
            gsap.to(carRef.current, {
                y: -300,
                rotation: 15,
                scale: 1.2,
                ease: 'none',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top top',
                    end: 'bottom bottom',
                    scrub: 1.5,
                    invalidateOnRefresh: true,
                    anticipatePin: 1,
                },
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="relative h-[300vh] bg-[#0a0a0a]">
            <div className="sticky top-0">
                <HeroSection ref={carRef} />
            </div>
        </div>
    );
};

export default ScrollAnimation;