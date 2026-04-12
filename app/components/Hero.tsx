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
      <div className="animate-[pulse-slow_3s_ease-in-out_infinite] mb-8 inline-flex items-center px-4 py-1.5 rounded-full border border-orange-500/60 bg-orange-500/10 text-orange-400 text-xs font-bold tracking-widest uppercase">
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
      <div className="relative z-10 mt-14 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
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
