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
    <section className="section-reveal px-6 py-24 max-w-6xl mx-auto">
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
            className="step-card relative rounded-2xl p-8 bg-[#111] border-r border-r-[#1e1e1e] border-b border-b-[#1e1e1e] border-l border-l-[#1e1e1e] border-t-2 border-t-orange-500 overflow-hidden"
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
