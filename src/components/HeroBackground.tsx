export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Faint structural grid — content reads first */}
      <div className="absolute inset-0 grid-bg opacity-[0.35]" />

      {/* Single soft ambient glow, fixed position */}
      <div className="absolute top-1/3 right-0 w-[480px] h-[480px] glow-orb-blue rounded-full opacity-30" />
    </div>
  );
}
