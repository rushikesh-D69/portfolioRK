"use client";

import SectionHeader from "./motion/SectionHeader";
import StaggerChildren, { StaggerItem } from "./motion/StaggerChildren";
import { timelineItems } from "@/data/experience";

function isEducation(title: string) {
  return /b\.tech|bachelor|education/i.test(title);
}

/** Oldest → newest (left to right on the track) */
const chronologicalItems = [...timelineItems].reverse();

export default function Experience() {
  return (
    <section id="experience" className="section-padding border-t border-[rgba(255,255,255,0.06)]">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <SectionHeader
          label="Background"
          title={
            <>
              <span className="block">Education &amp;</span>
              <span className="gradient-text block">Experience</span>
            </>
          }
          description="From Signals to Synapses — internships, firmware work, and ECE at Amrita Vishwa Vidyapeetham, Bengaluru."
        />

        <div className="relative mt-4 md:mt-8">
          {/* Mobile: horizontal scroll · Desktop: 3-column grid */}
          <div className="overflow-x-auto pb-6 -mx-6 px-6 md:mx-0 md:px-0 scrollbar-hide snap-x snap-mandatory">
            <div className="relative min-w-[920px] md:min-w-0">
              {/* Track line */}
              <div
                className="timeline-track-h hidden md:block"
                aria-hidden
              />

              <StaggerChildren
                className="grid grid-cols-3 gap-6 md:gap-8 relative"
                stagger={0.1}
              >
                {chronologicalItems.map((item, index) => {
                  const edu = isEducation(item.title);
                  return (
                    <StaggerItem key={`${item.company}-${item.period}`}>
                      <div className="snap-start flex flex-col items-stretch h-full">
                        {/* Track node + year (desktop) */}
                        <div className="hidden md:flex flex-col items-center mb-8">
                          <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-text-3 mb-3">
                            {item.period}
                          </span>
                          <div className="timeline-node-h relative z-10" />
                        </div>

                        {/* Mobile period badge */}
                        <div className="md:hidden flex items-center gap-3 mb-4">
                          <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                            {item.period}
                          </span>
                        </div>

                        <article className="surface-elevated rounded-2xl p-6 md:p-7 flex flex-col h-full border border-[rgba(255,255,255,0.06)] hover:border-[rgba(59,130,246,0.2)] transition-colors duration-300">
                          <span
                            className={`inline-flex self-start text-[0.6rem] font-bold uppercase tracking-[0.18em] px-2.5 py-1 rounded-full mb-4 ${
                              edu
                                ? "bg-secondary/15 text-secondary border border-secondary/25"
                                : "bg-primary/10 text-primary border border-primary/20"
                            }`}
                          >
                            {edu ? "Education" : "Experience"}
                          </span>

                          <p className="section-label text-[0.6rem] mb-2 leading-snug">
                            {item.company}
                          </p>
                          <h3 className="text-white font-bold text-lg md:text-xl tracking-tight leading-snug mb-3">
                            {item.title}
                          </h3>

                          {item.location && (
                            <p className="text-text-3 text-xs mb-4">{item.location}</p>
                          )}

                          <p className="text-text-2 text-sm leading-relaxed font-light mb-5 flex-grow">
                            {item.description}
                          </p>

                          <ul className="space-y-3 pt-4 border-t border-[rgba(255,255,255,0.06)]">
                            {item.achievements.map((a) => (
                              <li
                                key={a}
                                className="text-text-2 text-xs md:text-sm leading-relaxed pl-3 border-l-2 border-primary/30"
                              >
                                {a}
                              </li>
                            ))}
                          </ul>
                        </article>

                        {/* Connector stub on mobile between cards */}
                        {index < chronologicalItems.length - 1 && (
                          <div className="md:hidden flex justify-center py-3" aria-hidden>
                            <div className="w-px h-6 bg-gradient-to-b from-primary/40 to-transparent" />
                          </div>
                        )}
                      </div>
                    </StaggerItem>
                  );
                })}
              </StaggerChildren>
            </div>
          </div>

          <p className="text-text-3 text-xs text-center mt-2 md:hidden uppercase tracking-widest">
            Swipe to explore →
          </p>
        </div>
      </div>
    </section>
  );
}
