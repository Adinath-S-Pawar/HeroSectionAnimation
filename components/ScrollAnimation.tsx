'use client';

import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HeroSection from './HeroSection';

gsap.registerPlugin(ScrollTrigger);

/**
 * Handles the scroll-driven animation logic for the HeroSection component.
 * Uses GSAP ScrollTrigger to coordinate animations precisely tied to scroll position.
 */
const ScrollAnimation = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const carRef = useRef<HTMLImageElement>(null);

    /**
     * Executes the GSAP animation logic locally only on the client side to avoid
     * hydration mismatch issues when SSR runs without window access.
     */
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
