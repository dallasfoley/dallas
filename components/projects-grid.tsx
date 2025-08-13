import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { MovingBorder } from "./ui-effects/aceternity-moving-border";
import { Button } from "./ui/button";
import TechIconTooltip from "./ui/tech-icon-tooltip";
import { Project } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

const categories = ["Web Apps", "Packages", "Non-Web"];

export default function ProjectsGrid({
  filteredProjects,
  activeFilter,
  setActiveFilter,
  setActiveProject,
  id,
}: {
  filteredProjects: Project[];
  activeFilter: string;
  setActiveFilter: (category: string) => void;
  setActiveProject: (project: Project | null) => void;
  id: string;
}) {
  return (
    <>
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="h-[350px] sm:h-[400px]"
            onClick={() => setActiveProject(project)}
            layoutId={`card-${project.title}-${id}`}
          >
            <div
              className="relative h-full w-full overflow-hidden p-[1px] cursor-pointer"
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
                  <motion.div layoutId={`image-${project.title}-${id}`}>
                    <Image
                      src={project.image || "/file.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      width={200}
                      height={200}
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4">
                      <span className="text-xs uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded">
                        {project.category}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-3 sm:p-6 flex-grow flex flex-col">
                  <motion.h3
                    layoutId={`title-${project.title}-${id}`}
                    className="text-lg sm:text-xl font-bold mb-1 sm:mb-2"
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p
                    layoutId={`description-${project.title}-${id}`}
                    className="text-sm sm:text-base text-gray-400 mb-2 sm:mb-4 flex-grow line-clamp-3 sm:line-clamp-none"
                  >
                    {project.description}
                  </motion.p>
                  <div className="flex justify-between items-center gap-2 sm:gap-4 mt-auto">
                    <div className="flex">
                      <Link
                        href={project.github}
                        className="m-0 p-0 text-gray-400 hover:text-red-600 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <SiGithub className="h-4 w-4 sm:h-5 sm:w-5" />
                      </Link>
                      {project.demo && (
                        <Link
                          href={project.demo}
                          className="text-gray-400 hover:text-red-600 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5 ml-3 sm:ml-4" />
                        </Link>
                      )}
                    </div>
                    <div className="flex items-center">
                      {project.stack?.map((tech, key) => (
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
                      {project.fullstack?.map((tech, key) => (
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
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}
