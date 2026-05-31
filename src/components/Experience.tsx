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

export default function Experience() {
  return (
    <section id="experience" className="py-24 pt-32 bg-bg-2 min-h-screen">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-[clamp(2.5rem,5vw,3.5rem)] font-bold gradient-text mb-4">
            Experience &amp; Education
          </h2>
          <p className="text-text-3 max-w-xl mx-auto text-lg">
            My journey through education and personal development in technology
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line - centered on desktop, left-aligned on mobile */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary to-secondary -translate-x-1/2" />

          <div className="space-y-12">
            {timelineItems.map(({ title, company, period, description, achievements }, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={title}
                  className={`relative flex flex-col md:flex-row items-stretch gap-6 md:gap-16 w-full ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 top-6 w-5 h-5 rounded-full bg-gradient-to-br from-primary to-secondary border-4 border-bg-2 -translate-x-1/2 z-10 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />

                  {/* Date Column */}
                  <div className={`w-full md:w-1/2 flex items-center pl-12 md:pl-0 ${
                    isEven ? "md:justify-start md:pl-8" : "md:justify-end md:pr-8"
                  }`}>
                    <span className="text-primary font-bold text-base md:text-xl tracking-wider select-none bg-bg-3/50 px-4 py-1.5 rounded-full border border-border-c/50 md:border-0 md:bg-transparent md:px-0 md:py-0">
                      {period}
                    </span>
                  </div>

                  {/* Card Column */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0">
                    <div className="bg-bg-3 border border-border-c rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:border-primary">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="text-xs font-semibold px-2.5 py-1 rounded bg-primary/10 border border-primary/20 text-primary">
                          {company}
                        </span>
                      </div>
                      <h3 className="text-white text-xl font-semibold mt-1 mb-2">{title}</h3>
                      <p className="text-text-2 mb-4 leading-relaxed text-sm">{description}</p>
                      <ul className="space-y-2">
                        {achievements.map((a) => (
                          <li key={a} className="text-text-3 text-xs pl-5 relative leading-relaxed">
                            <span className="absolute left-0 text-primary">▸</span>
                            {a}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
