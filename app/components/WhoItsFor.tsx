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
        Who It&apos;s For
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
            &ldquo;Most &apos;personalised&apos; fitness apps personalise the{" "}
            <em>label</em> on the same generic plan.
          </p>
          <p className="mt-4 text-white/70 text-base md:text-lg leading-relaxed">
            Forge is different. Your body composition, your training history,
            your goals — the AI reads all of it and builds something{" "}
            <strong className="text-white">that could only be yours</strong>.
          </p>
          <p className="mt-4 text-white/70 text-base md:text-lg leading-relaxed">
            Whether you&apos;ve never touched a barbell or you&apos;ve been training for
            years, Forge meets you where your body actually is.&rdquo;
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
