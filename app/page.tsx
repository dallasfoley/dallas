import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Projects from "@/components/sections/projects";
import Experience from "@/components/sections/experience";
import Contact from "@/components/sections/contact";
import Navbar from "@/components/sections/navbar";
import Background3D from "@/components/ui-effects/background-3D";

export default function Home() {
  return (
    <main className="relative min-h-screen text-white overflow-hidden">
      <div className="fixed inset-0 -z-5">
        <Background3D />
      </div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}
