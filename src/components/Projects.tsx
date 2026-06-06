import ScrollReveal from "./ScrollReveal";
import { projects } from "@/lib/data";
import { ExternalLink, Lock } from "lucide-react";
import { GithubIcon } from "./Icons";

const labelColors: Record<string, string> = {
  Research: "bg-purple-500/10 text-purple-400",
  Freelance: "bg-blue-500/10 text-blue-400",
  Personal: "bg-[#22c55e]/10 text-[#22c55e]",
  Academic: "bg-amber-500/10 text-amber-400",
};

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-28 max-w-6xl mx-auto px-6 lg:px-8">
      <ScrollReveal>
        <h2 className="text-3xl font-bold text-[#f0f0f0] mb-8 md:mb-14 flex items-center gap-4">
          <span className="text-[#22c55e] font-mono text-xl font-normal">03.</span>
          Projects
          <span className="h-px flex-1 bg-[#2a2a2a] max-w-xs" />
        </h2>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <ScrollReveal key={project.name} delay={i * 0.08}>
            <div
              className={`group bg-[#161616] border rounded-lg p-6 h-full flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(34,197,94,0.08)] ${
                project.featured
                  ? "border-[#22c55e]/25 hover:border-[#22c55e]/50"
                  : "border-[#2a2a2a] hover:border-[#22c55e]/30"
              }`}
            >
              {/* Card header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span
                    className={`text-xs font-mono px-2 py-0.5 rounded-full mb-2 inline-block ${
                      labelColors[project.label] ?? "bg-[#22c55e]/10 text-[#22c55e]"
                    }`}
                  >
                    {project.label}
                  </span>
                  <h3 className="text-[#f0f0f0] font-bold text-xl leading-tight">
                    {project.name}
                  </h3>
                  <p className="text-[#6b7280] text-sm mt-0.5">{project.tagline}</p>
                </div>

                {/* Links */}
                <div className="flex gap-3 ml-4 shrink-0">
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                      className="text-[#6b7280] hover:text-[#22c55e] transition-colors"
                    >
                      <GithubIcon size={18} />
                    </a>
                  ) : (
                    <span className="text-[#3a3a3a]" title="Private repository">
                      <Lock size={18} />
                    </span>
                  )}
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Live Demo"
                      className="text-[#6b7280] hover:text-[#22c55e] transition-colors"
                    >
                      <ExternalLink size={18} />
                    </a>
                  ) : null}
                </div>
              </div>

              {/* Description */}
              <p className="text-[#a3a3a3] text-sm leading-relaxed flex-1 mb-5">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[#6b7280] text-xs font-mono bg-[#0d0d0d] border border-[#2a2a2a] px-2.5 py-1 rounded group-hover:border-[#3a3a3a] transition-colors"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
