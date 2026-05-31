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

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="timeline-line" />

          <div className="space-y-10">
            {timelineItems.map(({ title, company, period, description, achievements }) => (
              <div key={title} className="relative pl-20">
                {/* Dot */}
                <div className="absolute left-[21px] top-0 w-5 h-5 rounded-full bg-grad-main border-4 border-bg-2" />
                {/* Card */}
                <div className="bg-bg-3 border border-border-c rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary">
                  <span className="text-primary font-semibold text-sm">{period}</span>
                  <h3 className="text-white text-xl font-semibold mt-1 mb-1">{title}</h3>
                  <h4 className="text-accent font-medium mb-3">{company}</h4>
                  <p className="text-text-2 mb-4 leading-relaxed">{description}</p>
                  <ul className="space-y-1.5">
                    {achievements.map((a) => (
                      <li key={a} className="text-text-3 text-sm pl-5 relative">
                        <span className="absolute left-0 text-primary">▸</span>
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
