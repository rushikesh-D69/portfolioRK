import { credibilitySignals } from "@/data/credibility";
import FadeUp from "./motion/FadeUp";

export default function CredibilityStrip() {
  return (
    <FadeUp delay={0.28}>
      <div className="border-t border-[rgba(255,255,255,0.06)]">
        <div className="max-w-content mx-auto px-6 md:px-10 py-5 md:py-6">
          <ul className="flex flex-wrap items-center gap-x-8 gap-y-2 list-none m-0 p-0">
            {credibilitySignals.map(({ label }) => (
              <li
                key={label}
                className="text-[0.7rem] md:text-xs font-medium uppercase tracking-[0.16em] text-text-3"
              >
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </FadeUp>
  );
}
