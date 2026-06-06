import ScrollReveal from "./ScrollReveal";
import { MapPin, GraduationCap, Briefcase } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-28 max-w-6xl mx-auto px-6 lg:px-8">
      <ScrollReveal>
        <h2 className="text-3xl font-bold text-[#f0f0f0] mb-14 flex items-center gap-4">
          <span className="text-[#22c55e] font-mono text-xl font-normal">01.</span>
          About Me
          <span className="h-px flex-1 bg-[#2a2a2a] max-w-xs" />
        </h2>
      </ScrollReveal>

      <div className="grid md:grid-cols-5 gap-14 items-start">
        {/* Bio — takes 3 of 5 columns */}
        <ScrollReveal delay={0.1} className="md:col-span-3 space-y-4 text-[#a3a3a3] leading-relaxed">
          <p>
            I&apos;m a Full Stack Developer with 3+ years of industry experience, currently
            pursuing my{" "}
            <span className="text-[#f0f0f0]">M.S. in Computer Science at Clemson University</span>{" "}
            (GPA 3.85). My work spans the full stack — from crafting fast, accessible React
            interfaces to designing cloud infrastructure on AWS.
          </p>
          <p>
            At Clemson, I&apos;m the lead developer on{" "}
            <span className="text-[#22c55e]">Prepitus</span>, an AI-powered SAT tutoring
            platform built with a graduate research team. The platform uses a custom Deep
            Knowledge Tracing (LSTM) model to personalize learning for 450+ students across
            30 knowledge components.
          </p>
          <p>
            Before that, I spent two years at{" "}
            <span className="text-[#f0f0f0]">Wipro Ltd</span> shipping 12+ MERN-stack
            products for one of India&apos;s largest insurers — integrating 30+ third-party
            systems and reducing execution time by 35–40%.
          </p>
          <p>
            I&apos;m actively looking for full-stack and software engineering roles, and I&apos;m
            open to remote, hybrid, or relocation.
          </p>
        </ScrollReveal>

        {/* Avatar + quick facts — takes 2 of 5 columns */}
        <ScrollReveal delay={0.2} className="md:col-span-2 flex flex-col items-center gap-8">
          {/* Avatar */}
          <div className="w-44 h-44 rounded-full border-2 border-[#22c55e] overflow-hidden shadow-[0_0_40px_rgba(34,197,94,0.12)] shrink-0">
            <Image
              src="/avatar.jpeg"
              alt="Gaurav Suvarna"
              width={176}
              height={176}
              className="w-full h-full object-cover object-[50%_12%]"
              priority
            />
          </div>

          {/* Quick facts */}
          <div className="w-full space-y-3">
            <div className="flex items-start gap-3 text-[#a3a3a3] text-sm">
              <MapPin size={16} className="text-[#22c55e] mt-0.5 shrink-0" />
              <span>Clemson, SC — Open to Remote, Hybrid, or Relocation</span>
            </div>
            <div className="flex items-start gap-3 text-[#a3a3a3] text-sm">
              <GraduationCap size={16} className="text-[#22c55e] mt-0.5 shrink-0" />
              <span>M.S. Computer Science, Clemson University (GPA 3.85)</span>
            </div>
            <div className="flex items-start gap-3 text-[#a3a3a3] text-sm">
              <Briefcase size={16} className="text-[#22c55e] mt-0.5 shrink-0" />
              <span>3+ years full-stack experience (Wipro + Clemson research)</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
