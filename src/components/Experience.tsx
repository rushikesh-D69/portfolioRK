"use client";

import SectionHeader from "./motion/SectionHeader";
import StaggerChildren, { StaggerItem } from "./motion/StaggerChildren";

interface TimelineItem {
  title:        string;
  company:      string;
  period:       string;
  description:  string;
  achievements: string[];
}

const timelineItems: TimelineItem[] = [
  {
    title:       "Electronics & Communication Engineering Student",
    company:     "Amrita Vishwa Vidyapeetham, Bengaluru",
    period:      "2023 – Present",
    description: "Pursuing B.Tech in ECE with a focus on embedded systems, analog/digital design, and intelligent systems.",
    achievements: [
      "Strong foundation in electronics, circuits, and embedded programming",
      "Hands-on experience with microcontrollers, signal processing, and IoT",
      "Active participation in technical fests, robotics, and project expos",
    ],
  },
  {
    title:       "Project Developer",
    company:     "Personal Projects",
    period:      "2023 – Present",
    description: "Developing personal and academic projects spanning embedded systems, analog circuits, IoT, and machine learning.",
    achievements: [
      "Built embedded systems projects using ARM microcontrollers",
      "Created analog and digital circuit prototypes",
      "Implemented ML models and IoT solutions for real-world problems",
    ],
  },
];

function parseYear(period: string) {
  return period.split("–")[0].trim();
}

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
          description="My journey through technical learning and hands-on project development"
        />

        <div className="relative max-w-4xl mx-auto">
          <div className="timeline-line hidden md:block" />

          <StaggerChildren className="space-y-20 md:space-y-28" stagger={0.12}>
            {timelineItems.map(({ title, company, period, description, achievements }, index) => (
              <StaggerItem key={title}>
                <div className="relative flex flex-col md:flex-row gap-10 md:gap-0">
                  <div className="absolute left-0 md:left-1/2 top-10 timeline-node -translate-x-1/2 z-10 hidden md:block" />

                  <div className={`md:w-1/2 flex items-start ${index % 2 === 0 ? "md:pr-20 md:text-right md:justify-end" : "md:pl-20 md:order-2"}`}>
                    <div className="pl-10 md:pl-0">
                      <p className="timeline-year">{parseYear(period)}</p>
                      <p className="text-primary text-xs font-semibold uppercase tracking-[0.2em] mt-2">
                        {period}
                      </p>
                    </div>
                  </div>

                  <div className={`md:w-1/2 pl-10 md:pl-0 ${index % 2 === 0 ? "md:pl-20" : "md:pr-20 md:order-1"}`}>
                    <div className="surface-elevated rounded-2xl p-8 md:p-10 text-left">
                      <span className="section-label text-[0.65rem]">{company}</span>
                      <h3 className="text-white text-2xl md:text-[1.75rem] font-extrabold mt-4 mb-4 tracking-[-0.03em] leading-tight">
                        {title}
                      </h3>
                      <p className="text-text-2 mb-8 leading-[1.75] text-base font-light">{description}</p>

                      <div className="space-y-4 pt-6 border-t border-[rgba(255,255,255,0.06)]">
                        {achievements.map((a) => (
                          <p key={a} className="text-text-2 text-sm md:text-base leading-relaxed pl-4 border-l border-[rgba(59,130,246,0.25)]">
                            {a}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </div>
    </section>
  );
}
