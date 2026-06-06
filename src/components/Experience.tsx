import ScrollReveal from "./ScrollReveal";
import { experiences, education } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-28 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-[#f0f0f0] mb-14 flex items-center gap-4">
            <span className="text-[#22c55e] font-mono text-xl font-normal">02.</span>
            Experience
            <span className="h-px flex-1 bg-[#2a2a2a] max-w-xs" />
          </h2>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative pl-6 border-l border-[#2a2a2a]">
          {experiences.map((exp, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <div className="relative mb-12 last:mb-0">
                {/* Timeline dot */}
                <div className="absolute -left-[29px] top-1.5 w-3 h-3 rounded-full bg-[#22c55e] ring-4 ring-[#0a0a0a]" />

                <div className="bg-[#161616] border border-[#2a2a2a] rounded-lg p-6 ml-6 hover:border-[#22c55e]/30 transition-colors duration-300">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                    <h3 className="text-[#f0f0f0] font-semibold text-lg">{exp.title}</h3>
                    <span className="text-[#22c55e] font-mono text-sm whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-[#6b7280] text-sm mb-5">
                    {exp.company} &middot; {exp.location}
                    {exp.current && (
                      <span className="ml-2 bg-[#22c55e]/10 text-[#22c55e] text-xs px-2 py-0.5 rounded-full">
                        Current
                      </span>
                    )}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-5">
                    {exp.highlights.map((point, j) => (
                      <li key={j} className="text-[#a3a3a3] text-sm flex gap-2">
                        <span className="text-[#22c55e] mt-0.5 shrink-0">▸</span>
                        {point}
                      </li>
                    ))}
                  </ul>

                  {/* Tech pills */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[#22c55e] bg-[#22c55e]/10 text-xs px-2.5 py-1 rounded font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Education */}
        <ScrollReveal delay={0.1}>
          <h3 className="text-xl font-bold text-[#f0f0f0] mt-20 mb-8 flex items-center gap-4">
            Education
            <span className="h-px flex-1 bg-[#2a2a2a] max-w-xs" />
          </h3>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="bg-[#161616] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#22c55e]/30 transition-colors duration-300">
                <p className="text-[#22c55e] font-mono text-sm mb-1">{edu.period}</p>
                <h4 className="text-[#f0f0f0] font-semibold mb-1">{edu.degree}</h4>
                <p className="text-[#a3a3a3] text-sm">{edu.school} &middot; {edu.location}</p>
                <p className="text-[#6b7280] text-sm mt-1">GPA: {edu.gpa}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
