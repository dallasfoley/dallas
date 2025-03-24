import Hero from "@/components/hero";
import About from "@/components/about";
import Projects from "@/components/projects";
import Experience from "@/components/experience";
import Contact from "@/components/contact";
import Navbar from "@/components/navbar";
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
