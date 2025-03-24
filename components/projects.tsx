"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";
import TextReveal from "@/components/ui-effects/text-reveal";
import Image from "next/image";
import { projects } from "@/lib/constants/projects";
import Link from "next/link";
import { MovingBorder } from "@/components/ui-effects/aceternity-moving-border";
import { Highlight } from "./ui-effects/highlight";
import TechIconTooltip from "./ui/tech-icon-tooltip";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("Fullstack");

  const categories = [
    "Fullstack",
    "Frontend-Centric",
    "Backend-Centric",
    "Devops-Centric",
    "Non-Web",
  ];

  const filteredProjects = projects.filter(
    (project) => project.category === activeFilter
  );

  return (
    <section id="projects" className="py-12 sm:py-20 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16 flex flex-col items-center"
        >
          <Highlight className="p-2 mb-4">
            <TextReveal
              text="Selected Projects"
              className="text-2xl sm:text-3xl md:text-4xl font-bold"
            />
          </Highlight>
          <p className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto bg-black">
            Explore my recent work! Each project represents my passion for
            creating engaging digital experiences.
          </p>
        </motion.div>

        {/* Filter Buttons - Scrollable on mobile */}
        <div className="flex flex-col md:flex-row overflow-x-auto pb-4 sm:justify-center gap-2 sm:gap-4 no-scrollbar">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeFilter === category ? "default" : "outline"}
              onClick={() => setActiveFilter(category)}
              className={`capitalize mb-4 sm:mb-8 whitespace-nowrap ${
                activeFilter === category
                  ? "bg-primary hover:bg-primary/90"
                  : "text-black hover:text-primary hover:bg-zinc-300 hover:border-primary"
              }`}
              size="sm"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="h-[350px] sm:h-[400px]"
            >
              <div
                className="relative h-full w-full overflow-hidden p-[1px]"
                style={{ borderRadius: "0.75rem" }}
              >
                <div
                  className="absolute inset-0"
                  style={{ borderRadius: "calc(0.75rem * 0.96)" }}
                >
                  <MovingBorder duration={4000} rx="30%" ry="30%">
                    <div className="h-20 w-20 bg-[radial-gradient(#0ea5e9_40%,transparent_60%)] opacity-[0.8]" />
                  </MovingBorder>
                </div>

                <div
                  className="relative h-full w-full bg-gray-900 border border-slate-800 rounded-xl overflow-hidden flex flex-col"
                  style={{ borderRadius: "calc(0.75rem * 0.96)" }}
                >
                  <div className="relative overflow-hidden aspect-video">
                    <Image
                      src={project.image || "/file.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      width={200}
                      height={200}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4">
                        <span className="text-xs uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded">
                          {project.category}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 sm:p-6 flex-grow flex flex-col">
                    <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-400 mb-2 sm:mb-4 flex-grow line-clamp-3 sm:line-clamp-none">
                      {project.description}
                    </p>
                    <div className="flex justify-between items-center gap-2 sm:gap-4 mt-auto">
                      <div className="flex">
                        <Link
                          href={project.github}
                          className="text-gray-400 hover:text-red-600 transition-colors"
                        >
                          <SiGithub className="h-4 w-4 sm:h-5 sm:w-5" />
                        </Link>
                        {project.demo && (
                          <Link
                            href={project.demo}
                            className="text-gray-400 hover:text-red-600 transition-colors"
                          >
                            <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5 ml-3 sm:ml-4" />
                          </Link>
                        )}
                      </div>
                      <div className="flex items-center">
                        {project.stack.map((Tech, key) => (
                          <div
                            className="mx-1 sm:mx-2 p-0 h-4 w-4 sm:h-5 sm:w-5"
                            key={key}
                          >
                            <TechIconTooltip Icon={Tech} />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
