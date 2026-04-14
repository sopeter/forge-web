const stats = [
  {
    value: "InBody",
    label: "Scan-driven",
    detail: "Real body composition data — not guesses",
  },
  {
    value: "4–8 wk",
    label: "Adaptation cycle",
    detail: "AI rewrites your plan as your body changes",
  },
  {
    value: "2–3",
    label: "AI calls per plan",
    detail: "Generate · Evaluate · Regenerate",
  },
  {
    value: "0",
    label: "Generic templates",
    detail: "Every plan is built from scratch for you",
  },
];

export default function SocialProof() {
  return (
    <section className="section-reveal border-y border-white/5 bg-white/[0.02] px-6 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-y-0 md:divide-x md:divide-white/10">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center md:px-8 first:pl-0 last:pr-0">
            <div className="text-2xl md:text-3xl font-black text-orange-500 tracking-tight mb-1">
              {stat.value}
            </div>
            <div className="text-xs font-bold tracking-widest uppercase text-white mb-1">
              {stat.label}
            </div>
            <div className="text-xs text-white/35 leading-snug">{stat.detail}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
