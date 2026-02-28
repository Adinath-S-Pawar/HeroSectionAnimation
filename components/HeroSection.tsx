import React, { forwardRef } from 'react';

const HeroSection = forwardRef<HTMLImageElement, React.HTMLAttributes<HTMLElement>>((props, ref) => {
  const headline = 'WELCOME ITZFIZZ'.split('');

  return (
    <section 
      {...props}
      className={`relative flex flex-col items-center justify-center w-full h-screen bg-[#0a0a0a] overflow-hidden ${props.className || ''}`}
    >
      <div className="z-10 flex flex-row items-center justify-center mb-16 text-6xl font-bold tracking-[0.25em] text-white md:text-8xl">
        {headline.map((char, index) => (
          <span key={index} className={char === ' ' ? 'w-8 md:w-16' : ''}>
            {char}
          </span>
        ))}
      </div>
      
      <div className="z-10 flex flex-row items-start justify-between w-full max-w-6xl px-8 pb-48 md:px-12">
        <div className="flex flex-col items-center text-center">
          <span className="mb-3 text-4xl font-bold text-white md:text-5xl">58%</span>
          <span className="max-w-[160px] text-sm leading-relaxed text-gray-400 md:text-base">
            Increase in pick up point use
          </span>
        </div>
        <div className="flex flex-col items-center text-center">
          <span className="mb-3 text-4xl font-bold text-white md:text-5xl">23%</span>
          <span className="max-w-[160px] text-sm leading-relaxed text-gray-400 md:text-base">
            Decreased in customer phone calls
          </span>
        </div>
        <div className="flex flex-col items-center text-center">
          <span className="mb-3 text-4xl font-bold text-white md:text-5xl">27%</span>
          <span className="max-w-[160px] text-sm leading-relaxed text-gray-400 md:text-base">
            Increase in pick up point use
          </span>
        </div>
        <div className="flex flex-col items-center text-center">
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
        className="absolute bottom-6 left-1/2 z-20 w-80 -translate-x-1/2 object-contain md:w-[420px]"
      />
    </section>
  );
});

HeroSection.displayName = 'HeroSection';

export default HeroSection;
