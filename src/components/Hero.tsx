"use client";

import { motion } from "framer-motion";
import { Mail, ArrowDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background glow blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#22c55e]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-[#22c55e]/4 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 pt-20 w-full">
        <motion.p {...fadeUp(0.1)} className="text-[#22c55e] font-mono text-base mb-4">
          Hi, my name is
        </motion.p>

        <motion.h1
          {...fadeUp(0.2)}
          className="text-5xl sm:text-7xl font-bold text-[#f0f0f0] leading-tight mb-3"
        >
          Gaurav Suvarna.
        </motion.h1>

        <motion.h2
          {...fadeUp(0.3)}
          className="text-3xl sm:text-5xl font-bold text-[#6b7280] leading-tight mb-6"
        >
          I build things for the web.
        </motion.h2>

        <motion.p
          {...fadeUp(0.4)}
          className="text-[#a3a3a3] text-lg max-w-xl leading-relaxed mb-8"
        >
          Full Stack Developer with 3+ years of experience building production-grade web
          applications. Currently pursuing an M.S. in Computer Science at Clemson University
          and seeking full-stack or software engineering roles.
        </motion.p>

        <motion.div {...fadeUp(0.5)} className="flex flex-wrap gap-4 mb-10">
          <a
            href="#projects"
            className="bg-[#22c55e] text-[#0d0d0d] px-6 py-3 rounded font-semibold hover:bg-[#16a34a] transition-colors"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border border-[#22c55e] text-[#22c55e] px-6 py-3 rounded font-semibold hover:bg-[#22c55e]/10 transition-colors"
          >
            Contact Me
          </a>
        </motion.div>

        <motion.div {...fadeUp(0.6)} className="flex gap-5">
          <a
            href="https://github.com/gaurav2055/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-[#6b7280] hover:text-[#22c55e] transition-colors"
          >
            <GithubIcon size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/gaurav-suvarna"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-[#6b7280] hover:text-[#22c55e] transition-colors"
          >
            <LinkedinIcon size={22} />
          </a>
          <a
            href="mailto:gauravs712118@gmail.com"
            aria-label="Email"
            className="text-[#6b7280] hover:text-[#22c55e] transition-colors"
          >
            <Mail size={22} />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#6b7280]"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        >
          <ArrowDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
