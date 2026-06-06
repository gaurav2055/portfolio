import ScrollReveal from "./ScrollReveal";
import { skills } from "@/lib/data";

const categoryIcons: Record<string, string> = {
  Frontend: "◈",
  Backend: "⬡",
  Databases: "◉",
  "Cloud & DevOps": "◎",
  Mobile: "◫",
  Tools: "◧",
};

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-28 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-[#f0f0f0] mb-8 md:mb-14 flex items-center gap-4">
            <span className="text-[#22c55e] font-mono text-xl font-normal">04.</span>
            Skills
            <span className="h-px flex-1 bg-[#2a2a2a] max-w-xs" />
          </h2>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {Object.entries(skills).map(([category, items], i) => (
            <ScrollReveal key={category} delay={i * 0.08}>
              <div className="bg-[#161616] border border-[#2a2a2a] rounded-lg p-6 h-full hover:border-[#22c55e]/30 transition-colors duration-300">
                <h3 className="text-[#22c55e] font-mono text-sm font-semibold mb-4 flex items-center gap-2 uppercase tracking-wider">
                  <span>{categoryIcons[category]}</span>
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="text-[#a3a3a3] text-sm bg-[#0d0d0d] border border-[#2a2a2a] px-3 py-1.5 rounded-full hover:border-[#22c55e]/40 hover:text-[#f0f0f0] transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
