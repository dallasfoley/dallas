"use client";

import type React from "react";

import { useState, useId, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";
import TextReveal from "@/components/ui-effects/text-reveal";
import Image from "next/image";
import { projects } from "@/lib/constants/projects";
import { Project } from "@/lib/types";
import Link from "next/link";
import { Highlight } from "../ui-effects/highlight";
import TechIconTooltip from "../ui/tech-icon-tooltip";
import { useOutsideClick } from "@/hooks/use-outside-click";
import ProjectsGrid from "../projects-grid";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("Web Apps");
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const ref = useRef<HTMLDivElement | null>(null);
  const id = useId();

  const filteredProjects = projects.filter(
    (project) => project.category === activeFilter
  );

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveProject(null);
      }
    }

    if (activeProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeProject]);

  useOutsideClick(ref as React.RefObject<HTMLDivElement>, () =>
    setActiveProject(null)
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
        {filteredProjects.length > 0 && (
          <ProjectsGrid
            filteredProjects={filteredProjects}
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
            setActiveProject={setActiveProject}
            id={id}
          />
        )}
      </div>

      {/* Expanded Project Modal */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 h-full w-full z-50 flex items-center justify-center"
          >
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex absolute top-4 right-4 items-center justify-center bg-white rounded-full h-8 w-8 z-[60]"
              onClick={() => setActiveProject(null)}
            >
              <CloseIcon />
            </motion.button>

            <motion.div
              layoutId={`card-${activeProject.title}-${id}`}
              ref={ref}
              className="w-full max-w-3xl h-full md:h-fit md:max-h-[90%] flex flex-col bg-gray-900 sm:rounded-3xl overflow-hidden border border-slate-800"
            >
              <motion.div layoutId={`image-${activeProject.title}-${id}`}>
                <Image
                  priority
                  width={800}
                  height={400}
                  src={activeProject.image || "/file.svg"}
                  alt={activeProject.title}
                  className="w-full h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover"
                />
              </motion.div>

              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <motion.h3
                      layoutId={`title-${activeProject.title}-${id}`}
                      className="text-2xl font-bold text-white mb-2"
                    >
                      {activeProject.title}
                    </motion.h3>
                  </div>

                  <div className="flex gap-3">
                    <Link
                      href={activeProject.github}
                      target="_blank"
                      className="flex items-center justify-center bg-gray-800 hover:bg-red-600 text-white rounded-full h-10 w-10 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <SiGithub className="h-5 w-5" />
                    </Link>
                    {activeProject.demo && (
                      <Link
                        href={activeProject.demo}
                        target="_blank"
                        className="flex items-center justify-center bg-gray-800 hover:bg-red-600 text-white rounded-full h-10 w-10 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="h-5 w-5" />
                      </Link>
                    )}
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {activeProject.fullstack &&
                      activeProject.fullstack.map((tech, key) => (
                        <div
                          className="mx-1 sm:mx-2 p-0 h-4 w-4 sm:h-5 sm:w-5"
                          key={key}
                        >
                          <TechIconTooltip
                            Icon={tech.Icon}
                            techName={tech.name}
                          />
                        </div>
                      ))}
                    {!activeProject.fullstack &&
                      activeProject.stack?.map((tech, key) => (
                        <div
                          className="mx-1 sm:mx-2 p-0 h-4 w-4 sm:h-5 sm:w-5"
                          key={key}
                        >
                          <TechIconTooltip
                            Icon={tech.Icon}
                            techName={tech.name}
                          />
                        </div>
                      ))}

                    {!activeProject.fullstack &&
                      activeProject.stack?.map((tech, key) => (
                        <div
                          className="mx-1 sm:mx-2 p-0 h-4 w-4 sm:h-5 sm:w-5"
                          key={key}
                        >
                          <TechIconTooltip
                            Icon={tech.Icon}
                            techName={tech.name}
                          />
                        </div>
                      ))}
                  </div>
                </div>

                {
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-6 text-gray-300 max-h-60 overflow-y-auto pr-2 custom-scrollbar"
                  >
                    <h4 className="text-lg font-semibold text-white mb-2">
                      About this project
                    </h4>
                    <p>
                      {activeProject.longDescription ||
                        activeProject.description}
                    </p>
                  </motion.div>
                }
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

const CloseIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </svg>
  );
};
