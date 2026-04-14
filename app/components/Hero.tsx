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
            ? "0 0 80px 16px rgba(249,115,22,0.4), 0 32px 64px rgba(0,0,0,0.6)"
            : "0 8px 40px rgba(0,0,0,0.5)",
          background: "linear-gradient(160deg, #1a1a1a 0%, #0d0d0d 100%)",
          aspectRatio: "9/19",
        }}
      >
        {/* Notch */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-4 bg-black rounded-full z-10" />
        {/* Screenshot placeholder */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4">
          <span className="text-white/20 text-xs italic text-center">
            {screenshotLabel}
          </span>
        </div>
        {/* Inner edge shine */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 50%)",
          }}
        />
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
      {/* Layered radial glows */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(249,115,22,0.22) 0%, rgba(249,115,22,0.06) 40%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(249,115,22,0.12) 0%, transparent 60%)",
        }}
      />

      {/* Pulsing badge */}
      <div
        className="animate-pulse-slow hero-in mb-8 inline-flex items-center px-4 py-1.5 rounded-full border border-orange-500/60 bg-orange-500/10 text-orange-400 text-xs font-bold tracking-widest uppercase"
        style={{ animationDelay: "0ms" }}
      >
        In Development · iOS 17+
      </div>

      {/* Headline */}
      <h1
        className="hero-in relative z-10 font-black uppercase leading-none tracking-tight"
        style={{ animationDelay: "80ms" }}
      >
        <span className="block text-5xl md:text-7xl lg:text-8xl text-white">
          No More
        </span>
        <span
          className="block text-5xl md:text-7xl lg:text-8xl text-orange-500"
          style={{
            textShadow: "0 0 80px rgba(249,115,22,0.4)",
          }}
        >
          Guesswork.
        </span>
      </h1>

      {/* Bold outcome stat */}
      <p
        className="hero-in relative z-10 mt-8 text-white/90 text-lg md:text-2xl font-bold tracking-tight max-w-2xl"
        style={{ animationDelay: "160ms" }}
      >
        The only fitness app built on{" "}
        <span className="text-orange-400">actual body composition scans</span>
        {" "}— not self-reported stats.
      </p>

      {/* Subtext */}
      <p
        className="hero-in relative z-10 mt-4 max-w-xl text-white/50 text-sm md:text-base leading-relaxed"
        style={{ animationDelay: "200ms" }}
      >
        Forge reads your InBody data — muscle mass, body fat %, metabolic rate — and
        builds a training program that could only be yours. It rewrites itself every
        4–8 weeks as your body changes.
      </p>

      {/* App Store rating placeholders */}
      <div
        className="hero-in relative z-10 mt-6 flex items-center justify-center gap-4 flex-wrap"
        style={{ animationDelay: "260ms" }}
      >
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
          <span className="text-sm">🍎</span>
          <div className="text-left">
            <div className="text-white text-xs font-black leading-none">App Store</div>
            <div className="text-white/40 text-[10px] tracking-wide">Coming soon</div>
          </div>
        </div>
        <div className="text-white/20 text-xs font-bold tracking-widest uppercase">
          iOS 17+ · iPhone
        </div>
      </div>

      {/* iPhone frames */}
      <div
        className="hero-in relative z-10 mt-14 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8"
        style={{ animationDelay: "340ms" }}
      >
        <IPhoneFrame label="Home" screenshotLabel="Screenshot 1" elevated={false} />
        <IPhoneFrame label="AI Plan" screenshotLabel="Screenshot 2" elevated={true} />
        <IPhoneFrame label="Live Session" screenshotLabel="Screenshot 3" elevated={false} />
      </div>

      {/* Annotation note */}
      <p
        className="hero-in relative z-10 mt-6 text-xs text-white/25 italic"
        style={{ animationDelay: "480ms" }}
      >
        Real screenshots drop in here
      </p>
    </section>
  );
}
