import { skillCategories } from "@/data/skills";
import SectionHeader from "./motion/SectionHeader";
import StaggerChildren, { StaggerItem } from "./motion/StaggerChildren";

export default function Skills() {
  return (
    <section id="skills" className="section-padding border-t border-[rgba(255,255,255,0.06)]">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <SectionHeader
          label="Capabilities"
          title={
            <>
              <span className="block">Technical</span>
              <span className="gradient-text block">Domains</span>
            </>
          }
          description="Expertise organized by engineering discipline — not a resume checklist."
        />

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8" stagger={0.08}>
          {skillCategories.map(({ icon, title, description, skills }) => (
            <StaggerItem key={title}>
              <div className="surface-elevated rounded-2xl p-8 md:p-10 h-full group hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-10 h-10 rounded-lg surface-clean flex items-center justify-center flex-shrink-0">
                    <i className={`${icon} text-primary text-sm`} />
                  </div>
                  <div>
                    <h3 className="text-white font-extrabold text-xl md:text-2xl tracking-[-0.03em]">
                      {title}
                    </h3>
                    <p className="text-text-2 text-sm md:text-base leading-relaxed mt-2 font-light">
                      {description}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-[rgba(255,255,255,0.06)]">
                  {skills.map((skill) => (
                    <span key={skill} className="tech-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
