import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-[#0d0d0d] min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <footer className="border-t border-[#2a2a2a] py-6 text-center">
        <p className="text-[#555555] text-sm font-mono">
          Designed &amp; Built by Gaurav Suvarna
        </p>
      </footer>
    </main>
  );
}
