import SectionHeader from "./motion/SectionHeader";
import FadeUp from "./motion/FadeUp";
import NarrativeFlow from "./NarrativeFlow";

export default function About() {
  return (
    <section id="about" className="section-padding border-t border-[rgba(255,255,255,0.06)]">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <SectionHeader
          label="Focus"
          title={
            <>
              <span className="block">Building Intelligent Systems</span>
              <span className="block text-text-2 font-extrabold">From Embedded Hardware</span>
              <span className="gradient-text block">To Learning-Based Decision Systems</span>
            </>
          }
          description="ECE student building firmware, analog circuits, and ML pipelines — integrated as complete systems, not isolated demos."
          align="left"
          className="md:mb-24"
        />

        <FadeUp>
          <div className="glass-card rounded-2xl p-10 md:p-16 lg:p-20 mb-20 md:mb-28 max-w-5xl">
            <p className="section-label mb-8">Technical Profile</p>
            <h3 className="text-white font-extrabold text-[clamp(2rem,4.5vw,3.5rem)] tracking-[-0.04em] leading-[1.05] mb-10 max-w-3xl">
              Hardware constraints, firmware logic, and learned models — engineered as one stack.
            </h3>
            <div className="space-y-7 body-lg text-text-2 font-light max-w-3xl">
              <p>
                I&apos;m an Electronics and Communication Engineering student at Amrita Vishwa Vidyapeetham, passionate about creating systems that seamlessly bridge hardware and software. My work focuses on embedded systems, analog electronics, and intelligent real-time applications.
              </p>
              <p>
                Rather than showcasing every project, I curate a portfolio of work that demonstrates clear thinking, solid engineering, and measurable impact. Each project tells a story about problem-solving and technical excellence.
              </p>
            </div>
          </div>
        </FadeUp>

        <NarrativeFlow />
      </div>
    </section>
  );
}
