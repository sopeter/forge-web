const forgePoints = [
  "Uses real body composition data — muscle mass, body fat %, metabolic rate, and more",
  "AI generates a program matched to your actual physiology",
  "Re-scans every 4–8 weeks recalibrate the entire program to what your body actually did",
  "Adapts intelligently — strength and cardio unified in one plan",
];

const otherPoints = [
  'Built on self-reported guesses — weight, height, how you "feel"',
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
    <section className="section-reveal px-6 py-24 max-w-6xl mx-auto">
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
