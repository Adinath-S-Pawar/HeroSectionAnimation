# ItzFizz — Scroll-Driven Hero Section

A premium scroll-driven hero section animation built with Next.js, GSAP, and Tailwind CSS. Features staggered load animations and a car image that responds fluidly to scroll progress.

---

## Features

- Staggered headline letter animation on page load
- Stats fade-in with sequential delay
- Scroll-driven car animation tied to scroll progress via GSAP ScrollTrigger
- GPU-accelerated transforms with no layout reflows on scroll
- FOUC prevention via CSS opacity before JS initializes
- SSR-safe GSAP initialization with `useLayoutEffect` guards
- LCP optimized to 0.55s via image preload hint

---

## Tech Stack

| Tool | Purpose |
|---|---|
| Next.js 16 (App Router) | Framework |
| TypeScript | Type safety |
| Tailwind CSS v4 | Styling |
| GSAP + ScrollTrigger | Animations |

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
git clone https://github.com/Adinath-S-Pawar/itzfizz-hero.git
cd itzfizz-hero
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Project Structure

```
itzfizz-hero/
├── app/
│   ├── globals.css           # Tailwind imports + FOUC prevention styles
│   ├── layout.tsx            # Root layout with image preload + scroll reset
│   └── page.tsx              # Entry point
├── components/
│   ├── HeroSection.tsx       # Hero layout + load animations
│   ├── ScrollAnimation.tsx   # Scroll-driven car animation wrapper
│   └── ScrollReset.tsx       # Prevents scroll position retention on refresh
└── public/
    └── car.png               # McLaren 720S top-view asset
```

---

## License

MIT
