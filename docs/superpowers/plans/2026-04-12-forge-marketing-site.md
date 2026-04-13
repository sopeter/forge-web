# Forge Marketing Site Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a single-page Next.js marketing website for the Forge iOS app with a bold athletic visual identity.

**Architecture:** Static Next.js 14 App Router site with seven section components composed in `app/page.tsx`. No backend, no auth, no data fetching — fully static export suitable for Vercel free tier.

**Tech Stack:** Next.js 14+, Tailwind CSS v3, TypeScript, Vercel static export

---

## File Map

| File | Responsibility |
|------|---------------|
| `package.json` | Dependencies and scripts |
| `next.config.ts` | Static export config |
| `tailwind.config.ts` | Custom colours, fonts, animation |
| `postcss.config.mjs` | PostCSS with Tailwind |
| `app/layout.tsx` | Root layout — metadata, font, body class |
| `app/globals.css` | Base styles, gradient background, resets |
| `app/page.tsx` | Composes all section components |
| `app/components/Nav.tsx` | Sticky semi-transparent navbar |
| `app/components/Hero.tsx` | Headline, phone frames, glow |
| `app/components/Problem.tsx` | Two-column comparison grid |
| `app/components/HowItWorks.tsx` | 3-step card row |
| `app/components/Features.tsx` | 3×2 feature card grid |
| `app/components/WhoItsFor.tsx` | Editorial + audience tag cloud |
| `app/components/Footer.tsx` | Centered minimal footer |

---

## Task 1: Scaffold the Next.js project

**Files:**
- Create: `package.json`
- Create: `tsconfig.json`
- Create: `next.config.ts`
- Create: `tailwind.config.ts`
- Create: `postcss.config.mjs`
- Create: `.gitignore` (update)

- [ ] **Step 1: Initialise project with npx**

```bash
cd C:/Users/peter/Coding/forge-web
npx create-next-app@latest . \
  --typescript \
  --tailwind \
  --app \
  --no-src-dir \
  --import-alias "@/*" \
  --no-eslint
```

When prompted whether to overwrite existing files (`.gitignore`, `README.md`), answer **Yes** to `.gitignore` and **No** to `README.md`.

Expected: Project files created, `node_modules` installed.

- [ ] **Step 2: Configure static export in `next.config.ts`**

Replace the entire file content:

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
};

export default nextConfig;
```

- [ ] **Step 3: Verify dev server starts**

```bash
npm run dev
```

Expected: Server starts at `http://localhost:3000` with no errors. Stop with Ctrl+C.

- [ ] **Step 4: Commit scaffold**

```bash
git add package.json package-lock.json tsconfig.json next.config.ts tailwind.config.ts postcss.config.mjs .gitignore app/ public/
git commit -m "chore: scaffold Next.js 14 app with Tailwind and TypeScript"
```

---

## Task 2: Global styles and Tailwind config

**Files:**
- Modify: `tailwind.config.ts`
- Modify: `app/globals.css`
- Modify: `app/layout.tsx`

- [ ] **Step 1: Extend Tailwind config with brand tokens**

Replace `tailwind.config.ts`:

```ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#f97316",
          dark: "#0a0a0a",
          card: "#111111",
          border: "#1e1e1e",
        },
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "'Segoe UI'",
          "sans-serif",
        ],
      },
      keyframes: {
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" },
        },
      },
      animation: {
        "pulse-slow": "pulse 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
```

- [ ] **Step 2: Write global CSS**

Replace `app/globals.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --bg: #0a0a0a;
  --accent: #f97316;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: var(--bg);
  background-image: linear-gradient(135deg, #111 0%, #1c0a00 60%, #7c2d12 100%);
  background-attachment: fixed;
  color: #fff;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  min-height: 100vh;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
```

- [ ] **Step 3: Update `app/layout.tsx` with metadata**

```tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Forge — AI-Powered Training",
  description:
    "Forge uses your body composition data to generate and continuously adapt a training program built specifically for you.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

- [ ] **Step 4: Clear the default page and verify styles load**

Replace `app/page.tsx` temporarily:

```tsx
export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <h1 className="text-4xl font-black uppercase text-white">Forge</h1>
    </main>
  );
}
```

Run `npm run dev`, open `http://localhost:3000`. The page should show "FORGE" in white on the dark gradient background. Stop server.

- [ ] **Step 5: Commit**

```bash
git add tailwind.config.ts app/globals.css app/layout.tsx app/page.tsx
git commit -m "style: global styles, gradient background, brand Tailwind tokens"
```

---

## Task 3: Nav component

**Files:**
- Create: `app/components/Nav.tsx`

The Nav is sticky with a blurred dark background. Left side: flame emoji + "FORGE" wordmark. Right side: orange outlined pill badge "IN DEVELOPMENT · iOS 17+".

- [ ] **Step 1: Create `app/components/Nav.tsx`**

```tsx
export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md bg-black/40 border-b border-white/5">
      {/* Wordmark */}
      <div className="flex items-center gap-2">
        <span className="text-2xl" aria-hidden="true">🔥</span>
        <span className="text-white font-black text-xl tracking-widest uppercase">
          Forge
        </span>
      </div>

      {/* Status badge */}
      <span className="hidden sm:inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase border border-orange-500 text-orange-500">
        In Development · iOS 17+
      </span>
    </nav>
  );
}
```

- [ ] **Step 2: Add Nav to `app/page.tsx`**

```tsx
import Nav from "./components/Nav";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Nav />
      <div className="pt-20 flex items-center justify-center">
        <h1 className="text-4xl font-black uppercase text-white">Forge placeholder</h1>
      </div>
    </main>
  );
}
```

- [ ] **Step 3: Verify in browser**

Run `npm run dev`. At `http://localhost:3000` the navbar should be fixed at the top with the flame + FORGE on the left and the orange pill on the right. Stop server.

- [ ] **Step 4: Commit**

```bash
git add app/components/Nav.tsx app/page.tsx
git commit -m "feat: Nav component — sticky blurred navbar with wordmark and badge"
```

---

## Task 4: Hero component

**Files:**
- Create: `app/components/Hero.tsx`

Hero contains: pulsing badge, two-line headline ("NO MORE / GUESSWORK." with "GUESSWORK" in orange), subtext paragraph, three iPhone frame placeholders (left, center elevated, right), and a radial orange glow behind the headline.

- [ ] **Step 1: Create `app/components/Hero.tsx`**

```tsx
function IPhoneFrame({
  label,
  screenshotLabel,
  elevated,
}: {
  label: string;
  screenshotLabel: string;
  elevated: boolean;
}) {
  return (
    <div
      className={`relative flex flex-col items-center ${
        elevated ? "-translate-y-5" : ""
      }`}
    >
      {/* Phone frame */}
      <div
        className="relative w-40 md:w-48 rounded-[2.5rem] border-2 border-white/20 overflow-hidden"
        style={{
          boxShadow: elevated
            ? "0 0 60px 10px rgba(249,115,22,0.35)"
            : "0 8px 32px rgba(0,0,0,0.5)",
          background: "linear-gradient(160deg, #1a1a1a 0%, #0d0d0d 100%)",
          aspectRatio: "9/19",
        }}
      >
        {/* Notch */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-4 bg-black rounded-full z-10" />
        {/* Screenshot placeholder content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4">
          <span className="text-white/20 text-xs italic text-center">
            {screenshotLabel}
          </span>
        </div>
      </div>
      {/* Label below phone */}
      <span className="mt-3 text-xs font-bold tracking-widest uppercase text-white/40">
        {label}
      </span>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-16 overflow-hidden">
      {/* Radial glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(249,115,22,0.18) 0%, transparent 70%)",
        }}
      />

      {/* Pulsing badge */}
      <div className="animate-pulse-slow mb-8 inline-flex items-center px-4 py-1.5 rounded-full border border-orange-500/60 bg-orange-500/10 text-orange-400 text-xs font-bold tracking-widest uppercase">
        In Development · iOS 17+
      </div>

      {/* Headline */}
      <h1 className="relative z-10 font-black uppercase leading-none tracking-tight">
        <span className="block text-5xl md:text-7xl lg:text-8xl text-white">
          No More
        </span>
        <span className="block text-5xl md:text-7xl lg:text-8xl text-orange-500">
          Guesswork.
        </span>
      </h1>

      {/* Subtext */}
      <p className="relative z-10 mt-6 max-w-xl text-white/70 text-base md:text-lg leading-relaxed">
        Forge uses your{" "}
        <strong className="text-white font-semibold">body composition data</strong>{" "}
        — not self-reported stats — to generate and continuously adapt a training
        program built specifically for you.
      </p>

      {/* iPhone frames */}
      <div className="relative z-10 mt-14 flex items-end justify-center gap-4 md:gap-8">
        <IPhoneFrame label="Home" screenshotLabel="Screenshot 1" elevated={false} />
        <IPhoneFrame label="AI Plan" screenshotLabel="Screenshot 2" elevated={true} />
        <IPhoneFrame label="Live Session" screenshotLabel="Screenshot 3" elevated={false} />
      </div>

      {/* Annotation note */}
      <p className="relative z-10 mt-6 text-xs text-white/25 italic">
        Real screenshots drop in here
      </p>
    </section>
  );
}
```

- [ ] **Step 2: Add Hero to `app/page.tsx`**

```tsx
import Nav from "./components/Nav";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
    </main>
  );
}
```

- [ ] **Step 3: Verify in browser**

Run `npm run dev`. Hero should show the pulsing badge, the "NO MORE / GUESSWORK." headline (GUESSWORK in orange), subtext, three phone frames with center elevated and glowing orange, and the annotation note. Stop server.

- [ ] **Step 4: Commit**

```bash
git add app/components/Hero.tsx app/page.tsx
git commit -m "feat: Hero component — headline, iPhone frames, radial glow"
```

---

## Task 5: Problem component

**Files:**
- Create: `app/components/Problem.tsx`

Two-column comparison grid. Left = Forge (green dots), right = Other apps (red dots).

- [ ] **Step 1: Create `app/components/Problem.tsx`**

```tsx
const forgePoints = [
  "Uses real body composition data — muscle mass, body fat %, metabolic rate, and more",
  "AI generates a program matched to your actual physiology",
  "Re-scans every 4–8 weeks recalibrate the entire program to what your body actually did",
  "Adapts intelligently — strength and cardio unified in one plan",
];

const otherPoints = [
  "Built on self-reported guesses — weight, height, how you "feel"",
  "Same generic routines recycled for every user",
  "Plan never changes unless you manually edit it",
  "Treat strength and cardio as separate, disconnected products",
];

function ComparisonColumn({
  title,
  points,
  dotColor,
  highlight,
}: {
  title: string;
  points: string[];
  dotColor: string;
  highlight: boolean;
}) {
  return (
    <div
      className={`rounded-2xl p-6 md:p-8 border ${
        highlight
          ? "border-orange-500/30 bg-orange-500/5"
          : "border-white/10 bg-white/5"
      }`}
    >
      <h3
        className={`text-lg font-black uppercase tracking-widest mb-6 ${
          highlight ? "text-orange-500" : "text-white/50"
        }`}
      >
        {title}
      </h3>
      <ul className="space-y-4">
        {points.map((point, i) => (
          <li key={i} className="flex items-start gap-3">
            <span
              className={`mt-1.5 w-2 h-2 rounded-full flex-shrink-0 ${dotColor}`}
            />
            <span className="text-sm md:text-base text-white/80 leading-relaxed">
              {point}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Problem() {
  return (
    <section className="px-6 py-24 max-w-6xl mx-auto">
      {/* Section tag */}
      <p className="text-xs font-bold tracking-widest uppercase text-orange-500 mb-4">
        The Problem
      </p>

      {/* Headline */}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-tight mb-6">
        Generic apps.
        <br />
        <span className="text-white/50">Generic results.</span>
      </h2>

      {/* Body */}
      <p className="max-w-2xl text-white/60 text-base md:text-lg leading-relaxed mb-12">
        Every fitness app asks how much you weigh and spits out the same routine.
        Your body composition tells a far more complete story — and no app has been
        taking it seriously. Until now.
      </p>

      {/* Comparison grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ComparisonColumn
          title="Forge"
          points={forgePoints}
          dotColor="bg-green-500"
          highlight={true}
        />
        <ComparisonColumn
          title="Other Apps"
          points={otherPoints}
          dotColor="bg-red-500"
          highlight={false}
        />
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Add Problem to `app/page.tsx`**

```tsx
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Problem from "./components/Problem";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <Problem />
    </main>
  );
}
```

- [ ] **Step 3: Verify in browser**

Run `npm run dev`. Scroll past Hero. The Problem section should show the section tag, headline, body copy, and the two-column comparison grid. Stop server.

- [ ] **Step 4: Commit**

```bash
git add app/components/Problem.tsx app/page.tsx
git commit -m "feat: Problem component — two-column Forge vs Other Apps comparison grid"
```

---

## Task 6: HowItWorks component

**Files:**
- Create: `app/components/HowItWorks.tsx`

3-step card row. Each card: large faded step number, emoji icon, title, body text, orange top-border accent.

- [ ] **Step 1: Create `app/components/HowItWorks.tsx`**

```tsx
const steps = [
  {
    number: "01",
    emoji: "📊",
    title: "Share your body composition",
    body: "Enter body composition results (muscle mass, body fat %, metabolic rate). Forge treats this as the foundation, not an afterthought.",
  },
  {
    number: "02",
    emoji: "🤖",
    title: "AI builds your plan",
    body: "Artificial intelligence generates a personalised weekly program calibrated to your physiology, training history, and goals. No templates. No guesses.",
  },
  {
    number: "03",
    emoji: "🔄",
    title: "It adapts as you do",
    body: "Every 4–8 weeks, Forge compares your latest body composition against your last. The AI reads what your body actually changed and rewrites your program to match.",
  },
];

export default function HowItWorks() {
  return (
    <section className="px-6 py-24 max-w-6xl mx-auto">
      {/* Section tag */}
      <p className="text-xs font-bold tracking-widest uppercase text-orange-500 mb-4">
        How It Works
      </p>

      {/* Headline */}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-tight mb-16">
        Real data in.
        <br />
        <span className="text-white/50">Real programming out.</span>
      </h2>

      {/* Step cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((step) => (
          <div
            key={step.number}
            className="relative rounded-2xl p-8 bg-[#111] border border-[#1e1e1e] overflow-hidden"
            style={{ borderTop: "2px solid #f97316" }}
          >
            {/* Faded step number */}
            <span className="absolute top-4 right-6 text-7xl font-black text-white/5 select-none leading-none">
              {step.number}
            </span>

            {/* Emoji */}
            <span className="text-3xl mb-4 block">{step.emoji}</span>

            {/* Title */}
            <h3 className="text-lg font-black uppercase tracking-wide text-white mb-3">
              {step.title}
            </h3>

            {/* Body */}
            <p className="text-sm text-white/60 leading-relaxed">{step.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Add HowItWorks to `app/page.tsx`**

```tsx
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import HowItWorks from "./components/HowItWorks";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <Problem />
      <HowItWorks />
    </main>
  );
}
```

- [ ] **Step 3: Verify in browser**

Run `npm run dev`. Scroll to the How It Works section. Three cards should appear with orange top borders, large faded numbers, and step content. Stop server.

- [ ] **Step 4: Commit**

```bash
git add app/components/HowItWorks.tsx app/page.tsx
git commit -m "feat: HowItWorks component — 3-step card row with orange top-border accent"
```

---

## Task 7: Features component

**Files:**
- Create: `app/components/Features.tsx`

3×2 feature card grid. Each card has emoji, bold title, and description.

- [ ] **Step 1: Create `app/components/Features.tsx`**

```tsx
const features = [
  {
    emoji: "🧠",
    title: "AI Training Plans",
    body: "Generated, evaluated, and regenerated by artificial intelligence based on your body composition and session performance.",
  },
  {
    emoji: "📋",
    title: "Body Composition Tracking",
    body: "Import your scan results directly. Track body fat %, muscle mass, and metabolic rate over time with trend charts.",
  },
  {
    emoji: "⚡",
    title: "Live Session Tracking",
    body: "Log sets, reps, and weights in real-time. Auto-detects personal records. Rest timer built in. Works offline.",
  },
  {
    emoji: "🍎",
    title: "Apple Health Integration",
    body: "Workouts sync to Apple Health automatically. Body weight pre-fills from your latest Apple Health data.",
  },
  {
    emoji: "🏆",
    title: "Personal Records",
    body: "Auto-detected from your session history. Per-exercise trend charts show your strength progression over time.",
  },
  {
    emoji: "📚",
    title: "Exercise Library",
    body: "52 exercises with muscle diagrams, step-by-step instructions, and AI-powered substitutions when you need them.",
  },
];

export default function Features() {
  return (
    <section className="px-6 py-24 max-w-6xl mx-auto">
      {/* Section tag */}
      <p className="text-xs font-bold tracking-widest uppercase text-orange-500 mb-4">
        Features
      </p>

      {/* Headline */}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-tight mb-16">
        Everything you need.
        <br />
        <span className="text-white/50">Nothing you don't.</span>
      </h2>

      {/* Feature grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-2xl p-7 bg-[#111] border border-[#1e1e1e] hover:border-orange-500/30 transition-colors duration-300"
          >
            <span className="text-3xl mb-4 block">{feature.emoji}</span>
            <h3 className="text-base font-black uppercase tracking-wide text-white mb-2">
              {feature.title}
            </h3>
            <p className="text-sm text-white/60 leading-relaxed">{feature.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Add Features to `app/page.tsx`**

```tsx
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <Problem />
      <HowItWorks />
      <Features />
    </main>
  );
}
```

- [ ] **Step 3: Verify in browser**

Run `npm run dev`. Scroll to Features. Six cards in a 3×2 grid (1 column on mobile, 2 on tablet, 3 on desktop). Each card has emoji, bold title, description. Stop server.

- [ ] **Step 4: Commit**

```bash
git add app/components/Features.tsx app/page.tsx
git commit -m "feat: Features component — 3x2 card grid with six feature descriptions"
```

---

## Task 8: WhoItsFor component

**Files:**
- Create: `app/components/WhoItsFor.tsx`

Two-column layout: editorial block quote on the left, audience tag cloud on the right (alternating highlighted/neutral tags).

- [ ] **Step 1: Create `app/components/WhoItsFor.tsx`**

```tsx
const tags = [
  { label: "Beginners finding their baseline", highlighted: true },
  { label: "Experienced lifters breaking plateaus", highlighted: false },
  { label: "People training strength and cardio", highlighted: true },
  { label: "Athletes in structured off-seasons", highlighted: false },
  { label: "Anyone who wants a plan that actually fits", highlighted: false },
  { label: "Recovery from injury", highlighted: true },
];

export default function WhoItsFor() {
  return (
    <section className="px-6 py-24 max-w-6xl mx-auto">
      {/* Section tag */}
      <p className="text-xs font-bold tracking-widest uppercase text-orange-500 mb-4">
        Who It's For
      </p>

      {/* Headline */}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-tight mb-16">
        Truly personalised.
        <br />
        <span className="text-white/50">Not for a type. For you.</span>
      </h2>

      {/* Two-column */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Editorial statement */}
        <blockquote className="border-l-2 border-orange-500 pl-6">
          <p className="text-white/70 text-base md:text-lg leading-relaxed">
            "Most 'personalised' fitness apps personalise the{" "}
            <em>label</em> on the same generic plan.
          </p>
          <p className="mt-4 text-white/70 text-base md:text-lg leading-relaxed">
            Forge is different. Your body composition, your training history,
            your goals — the AI reads all of it and builds something{" "}
            <strong className="text-white">that could only be yours</strong>.
          </p>
          <p className="mt-4 text-white/70 text-base md:text-lg leading-relaxed">
            Whether you've never touched a barbell or you've been training for
            years, Forge meets you where your body actually is."
          </p>
        </blockquote>

        {/* Tag cloud */}
        <div className="flex flex-wrap gap-3">
          {tags.map((tag) => (
            <span
              key={tag.label}
              className={`px-4 py-2 rounded-full text-sm font-semibold border ${
                tag.highlighted
                  ? "bg-orange-500/15 border-orange-500/50 text-orange-300"
                  : "bg-white/5 border-white/15 text-white/60"
              }`}
            >
              {tag.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Add WhoItsFor to `app/page.tsx`**

```tsx
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";
import WhoItsFor from "./components/WhoItsFor";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <Problem />
      <HowItWorks />
      <Features />
      <WhoItsFor />
    </main>
  );
}
```

- [ ] **Step 3: Verify in browser**

Run `npm run dev`. Scroll to "Who It's For". Left shows the editorial blockquote with orange left border, right shows the audience tag cloud with mixed highlighted (orange) and neutral tags. Stop server.

- [ ] **Step 4: Commit**

```bash
git add app/components/WhoItsFor.tsx app/page.tsx
git commit -m "feat: WhoItsFor component — editorial blockquote and audience tag cloud"
```

---

## Task 9: Footer component

**Files:**
- Create: `app/components/Footer.tsx`

Centered minimal footer: flame icon + FORGE wordmark, "Currently in development for iOS 17+", tagline pills, copyright.

- [ ] **Step 1: Create `app/components/Footer.tsx`**

```tsx
export default function Footer() {
  return (
    <footer className="px-6 py-16 border-t border-white/10 text-center">
      {/* Wordmark */}
      <div className="flex items-center justify-center gap-2 mb-4">
        <span className="text-2xl" aria-hidden="true">🔥</span>
        <span className="text-white font-black text-xl tracking-widest uppercase">
          Forge
        </span>
      </div>

      {/* Status line */}
      <p className="text-white/50 text-sm mb-3">
        Currently in development for iOS 17+
      </p>

      {/* Tagline */}
      <p className="text-white/30 text-xs tracking-widest uppercase mb-8">
        AI-powered · Body composition driven · Apple Health integrated
      </p>

      {/* Copyright */}
      <p className="text-white/20 text-xs">© 2026 Forge</p>
    </footer>
  );
}
```

- [ ] **Step 2: Add Footer and complete `app/page.tsx`**

```tsx
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";
import WhoItsFor from "./components/WhoItsFor";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Problem />
      <HowItWorks />
      <Features />
      <WhoItsFor />
      <Footer />
    </main>
  );
}
```

- [ ] **Step 3: Verify full page in browser**

Run `npm run dev`. Scroll through the full page top to bottom:
- Nav sticky with blur ✓
- Hero with phones and glow ✓
- Problem comparison grid ✓
- HowItWorks 3-step cards ✓
- Features 3×2 grid ✓
- WhoItsFor editorial + tags ✓
- Footer centered minimal ✓

Stop server.

- [ ] **Step 4: Commit**

```bash
git add app/components/Footer.tsx app/page.tsx
git commit -m "feat: Footer component and complete page composition"
```

---

## Task 10: Responsive polish and static export verification

**Files:**
- No new files — verify existing components behave correctly at all breakpoints and the static export builds cleanly.

- [ ] **Step 1: Check mobile layout in browser devtools**

Run `npm run dev`. Open browser devtools, set viewport to 375×812 (iPhone 14).

Verify:
- Nav badge hidden on very small screen (spec says `hidden sm:inline-flex` — already coded)
- All grids single-column
- Hero phones stack vertically — **if they overflow horizontally, add `flex-col` on mobile**

If phones overflow on mobile, update `Hero.tsx` phone frames container:

```tsx
{/* iPhone frames */}
<div className="relative z-10 mt-14 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
  <IPhoneFrame label="Home" screenshotLabel="Screenshot 1" elevated={false} />
  <IPhoneFrame label="AI Plan" screenshotLabel="Screenshot 2" elevated={true} />
  <IPhoneFrame label="Live Session" screenshotLabel="Screenshot 3" elevated={false} />
</div>
```

- [ ] **Step 2: Test static build**

```bash
npm run build
```

Expected: Build completes with no TypeScript or Next.js errors. Output in `out/` directory.

- [ ] **Step 3: Serve and verify static build**

```bash
npx serve out
```

Open `http://localhost:3000`. Scroll through the full page. Verify the same visual result as dev mode. Stop server.

- [ ] **Step 4: Commit responsive fix (if made) and add `out/` to `.gitignore`**

Check if `out/` is already in `.gitignore`. If not:

```bash
echo "out/" >> .gitignore
```

Then commit:

```bash
git add .gitignore app/components/Hero.tsx   # include Hero only if it was changed
git commit -m "fix: responsive phone frames stack vertically on mobile, ignore build output"
```

If no changes were needed for Hero:

```bash
git add .gitignore
git commit -m "chore: ignore static export output directory"
```

---

## Task 11: Deploy to Vercel

**Files:** None — deployment configuration only.

- [ ] **Step 1: Push to GitHub (if not already)**

```bash
git remote -v   # confirm remote exists
git push origin main
```

- [ ] **Step 2: Import project on Vercel**

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click **Add New Project**
3. Import the `forge-web` GitHub repository
4. Framework preset: **Next.js** (auto-detected)
5. No environment variables needed
6. Click **Deploy**

- [ ] **Step 3: Verify deployed site**

Open the Vercel preview URL. Scroll through the full page and verify all sections render correctly in production.

- [ ] **Step 4: Note the deployment URL**

Record the live URL for reference (e.g., `forge-web.vercel.app`).

---

## Self-Review Notes

- All seven spec sections are implemented: Nav, Hero, Problem, HowItWorks, Features, WhoItsFor, Footer
- Language conventions honoured: "body composition" (not "InBody"), "AI" (not "Claude"), "Apple Health" (not "HealthKit"), no CTA/download link
- Responsive behaviour: mobile single-column grids, phone frames stack vertically, nav badge hidden on xs
- No backend, no auth, no analytics — fully in scope
- Screenshot placeholders render as dark gradient rectangles with italic labels
- Static export config in `next.config.ts` targets Vercel free tier
