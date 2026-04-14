"use client";

import { useState } from "react";

const goals = [
  { emoji: "💪", label: "Build muscle", desc: "Strength-focused hypertrophy plan" },
  { emoji: "🏃", label: "Hybrid athlete", desc: "Strength + cardio unified" },
  { emoji: "⚖️", label: "Lose body fat", desc: "Body recomposition with real data" },
  { emoji: "🔁", label: "Break a plateau", desc: "AI recalibrates what isn't working" },
];

export default function CTABanner() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section className="section-reveal px-6 py-24 max-w-6xl mx-auto">
      {/* Top rule */}
      <div className="h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent mb-16" />

      {/* Section label */}
      <p className="text-xs font-bold tracking-widest uppercase text-orange-500 mb-4 text-center">
        What's Your Goal?
      </p>

      {/* Headline */}
      <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight mb-4 text-center">
        One app.
        <br />
        <span className="text-white/50">Every goal.</span>
      </h2>

      <p className="text-white/40 text-sm text-center max-w-md mx-auto mb-12">
        Forge adapts to what you're actually trying to do — and adjusts every time your body composition changes.
      </p>

      {/* Goal selector */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {goals.map((goal) => (
          <button
            key={goal.label}
            onClick={() => setSelected(goal.label)}
            className={`group rounded-2xl p-5 border text-left transition-all duration-200 cursor-pointer ${
              selected === goal.label
                ? "border-orange-500/60 bg-orange-500/10"
                : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.06]"
            }`}
          >
            <span className="text-2xl block mb-3">{goal.emoji}</span>
            <div
              className={`text-sm font-black uppercase tracking-wide mb-1 ${
                selected === goal.label ? "text-orange-400" : "text-white"
              }`}
            >
              {goal.label}
            </div>
            <div className="text-xs text-white/40 leading-snug">{goal.desc}</div>
          </button>
        ))}
      </div>

      {/* CTA */}
      <div className="flex flex-col items-center gap-4">
        {selected && (
          <p className="text-sm text-white/60">
            Forge will build your{" "}
            <span className="text-orange-400 font-bold">{selected.toLowerCase()}</span>{" "}
            plan the moment you enter your InBody data.
          </p>
        )}

        {/* App Store CTA */}
        <div className="flex items-center gap-3 mt-2">
          <div
            className="flex items-center gap-3 px-6 py-3 rounded-2xl border border-white/20 bg-white/[0.04]"
          >
            <span className="text-xl">🍎</span>
            <div className="text-left">
              <div className="text-[10px] text-white/40 tracking-widest uppercase">Coming to the</div>
              <div className="text-white font-black text-sm tracking-wide">App Store</div>
            </div>
          </div>
        </div>

        <p className="text-xs text-white/25 tracking-widest uppercase">
          iOS 17+ · iPhone · Free to download
        </p>
      </div>
    </section>
  );
}
