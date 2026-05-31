import { skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-24 min-h-screen bg-bg-1">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-[clamp(2.5rem,5vw,3.5rem)] font-bold gradient-text mb-4">
            Skills &amp; Technologies
          </h2>
          <p className="text-text-3 max-w-xl mx-auto text-lg">
            A comprehensive overview of my technical skills and proficiency areas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map(({ icon, title, skills }) => (
            <div
              key={title}
              className="bg-bg-2 border border-border-c rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-primary"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-grad-main flex items-center justify-center flex-shrink-0">
                  <i className={`${icon} text-white text-xl`} />
                </div>
                <h3 className="text-white font-semibold text-lg">{title}</h3>
              </div>

              <ul className="space-y-2.5">
                {skills.map((skill) => (
                  <li key={skill} className="flex items-start gap-2 text-text-2 text-sm">
                    <span className="text-primary mt-0.5 flex-shrink-0">▹</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
