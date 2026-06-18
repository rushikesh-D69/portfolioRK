import FadeUp from "./motion/FadeUp";

const STEPS = [
  {
    phase: "01 — Model",
    title: "Problem Framing",
    description:
      "Define constraints, interfaces, and failure modes before selecting hardware or writing firmware. The system spec drives every design decision.",
  },
  {
    phase: "02 — Build",
    title: "Technical Design",
    description:
      "Integrate embedded firmware, analog front-ends, and software stacks into architectures where each layer has defined I/O and timing guarantees.",
  },
  {
    phase: "03 — Verify",
    title: "Delivery",
    description:
      "Prototype on target hardware, measure against requirements, and document what was built — schematics, traces, and code paths included.",
  },
];

const HIGHLIGHTS = [
  { title: "Purpose", lines: ["Solve real constraints", "Build systems that deliver value"] },
  { title: "Process", lines: ["Prototype fast, then refine", "Test hardware and software together"] },
  { title: "Impact", lines: ["Not every experiment is featured", "Selected work that shows clear thinking"] },
];

interface NarrativeFlowProps {
  className?: string;
}

export default function NarrativeFlow({ className = "" }: NarrativeFlowProps) {
  return (
    <div className={className}>
      <FadeUp>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] mb-16">
          {STEPS.map((step, i) => (
            <div key={step.title} className="bg-[#0a0a0a] px-8 py-10 md:py-12 relative">
              {i < STEPS.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-gradient-to-b from-transparent via-[rgba(59,130,246,0.25)] to-transparent" />
              )}
              <p className="section-label text-[0.65rem] mb-4">{step.phase}</p>
              <h3 className="text-white font-extrabold text-xl md:text-2xl tracking-[-0.03em] mb-4">
                {step.title}
              </h3>
              <p className="text-text-2 text-sm md:text-base leading-[1.75] font-light">{step.description}</p>
            </div>
          ))}
        </div>
      </FadeUp>

      <FadeUp delay={0.1}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {HIGHLIGHTS.map(({ title, lines }) => (
            <div key={title} className="surface-clean rounded-xl p-8">
              <h4 className="text-white font-bold text-lg mb-4 tracking-tight">{title}</h4>
              <div className="space-y-2">
                {lines.map((l) => (
                  <p key={l} className="text-text-2 text-sm leading-relaxed">{l}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </FadeUp>
    </div>
  );
}
