import { GraduationCap, Cpu, Bot } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Highlight {
  Icon: LucideIcon;
  title: string;
  lines: string[];
}

const highlights: Highlight[] = [
  {
    Icon: GraduationCap,
    title: "Education",
    lines: ["B.Tech Electronics & Communication", "Amrita Vishwa Vidyapeetham"],
  },
  {
    Icon: Cpu,
    title: "Specialization",
    lines: ["Embedded Systems", "Analog Circuit Design"],
  },
  {
    Icon: Bot,
    title: "Passion",
    lines: ["Robotics & Automation", "Creative Engineering", "Innovation & Problem Solving"],
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 pt-32 bg-bg-2 min-h-screen">
      <div className="max-w-6xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-[clamp(2.5rem,5vw,3.5rem)] font-bold gradient-text mb-4">
            About Me
          </h2>
          <p className="text-text-3 max-w-xl mx-auto text-lg">
            Get to know more about my background and passion for technology
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-5 mb-12">
            <p className="text-text-2 text-lg leading-relaxed">
              I&apos;m an Electronics and Communication Engineering student at Amrita
              Vishwa Vidyapeetham, Bengaluru. My interests lie at the intersection of
              embedded systems, machine learning, and analog hardware.
            </p>
            <p className="text-text-2 text-lg leading-relaxed">
              I&apos;m also a weeb and otaku—so creativity, curiosity, and a love for
              design and flow are always part of my projects.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {highlights.map(({ Icon, title, lines }) => (
              <div
                key={title}
                className="bg-bg-3 border border-border-c rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-primary"
              >
                <div className="w-14 h-14 rounded-xl bg-grad-main flex items-center justify-center mb-4">
                  <Icon size={24} className="text-white" />
                </div>
                <h4 className="text-white font-semibold text-lg mb-2">{title}</h4>
                {lines.map((l) => (
                  <p key={l} className="text-text-3 text-sm leading-relaxed">{l}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
