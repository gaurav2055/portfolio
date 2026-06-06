import ScrollReveal from "./ScrollReveal";
import { Mail, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-28 max-w-6xl mx-auto px-6 lg:px-8">
      <ScrollReveal>
        <h2 className="text-3xl font-bold text-[#f0f0f0] mb-8 md:mb-14 flex items-center gap-4">
          <span className="text-[#22c55e] font-mono text-xl font-normal">05.</span>
          Get In Touch
          <span className="h-px flex-1 bg-[#2a2a2a] max-w-xs" />
        </h2>
      </ScrollReveal>

      <div className="max-w-xl">
        <ScrollReveal delay={0.1}>
          <p className="text-[#a3a3a3] text-lg leading-relaxed mb-10">
            I&apos;m actively looking for full-stack and software engineering roles. Whether
            you have an opportunity, a question, or just want to say hi — my inbox is
            always open.
          </p>

          <a
            href="mailto:gauravs712118@gmail.com"
            className="inline-block border-2 border-[#22c55e] text-[#22c55e] px-8 py-4 rounded font-semibold text-lg hover:bg-[#22c55e]/10 transition-all duration-200"
          >
            Say Hello
          </a>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mt-12 flex flex-col sm:flex-row flex-wrap gap-6">
            <a
              href="https://github.com/gaurav2055/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-[#6b7280] hover:text-[#22c55e] transition-colors text-sm"
            >
              <GithubIcon size={18} />
              github.com/gaurav2055
            </a>
            <a
              href="https://www.linkedin.com/in/gaurav-suvarna"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-[#6b7280] hover:text-[#22c55e] transition-colors text-sm"
            >
              <LinkedinIcon size={18} />
              linkedin.com/in/gaurav-suvarna
            </a>
            <a
              href="mailto:gauravs712118@gmail.com"
              className="flex items-center gap-3 text-[#6b7280] hover:text-[#22c55e] transition-colors text-sm"
            >
              <Mail size={18} />
              gauravs712118@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-3 text-[#6b7280] text-sm mt-4">
            <MapPin size={16} className="text-[#22c55e] shrink-0" />
            Clemson, SC — Open to Remote, Hybrid, or Relocation
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
