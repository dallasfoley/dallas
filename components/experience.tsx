"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, GraduationCap } from "lucide-react";
import type { Education, WorkExperience } from "@/lib/types";
import { Meteors } from "@/components/ui/meteors";
import { cn } from "@/lib/utils";
import { Cover } from "./ui/cover";

interface TimelineItemProps {
  item: WorkExperience | Education;
  index: number;
  type: "work" | "education";
}

function TimelineItem({ item, index, type }: TimelineItemProps) {
  const isWork = type === "work";

  return (
    <div className="relative pl-10">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        className={cn(
          "absolute left-0 top-1 h-5 w-5 rounded-full border-4 bg-transparent",
          isWork ? "border-cyan-500" : "border-purple-500"
        )}
      />
      <div className="relative overflow-hidden rounded-xl">
        <Card className="bg-gray-900 border-0 rounded-[calc(0.75rem-2px)] relative z-10">
          <CardContent className="p-6">
            <div className="mb-2 flex justify-between flex-wrap">
              <h4 className="text-xl font-bold text-white">
                {isWork
                  ? (item as WorkExperience).title
                  : (item as Education).degree}
              </h4>
              <span className="text-white">{item.period}</span>
            </div>
            <div className="text-gray-400 mb-4">
              {isWork
                ? (item as WorkExperience).company
                : (item as Education).institution}
            </div>
            <p className="text-gray-300">{item.description}</p>
          </CardContent>
          <div className="absolute inset-0 z-0">
            <Meteors
              number={15}
              className={cn(
                isWork ? "before:from-cyan-500" : "before:from-purple-500"
              )}
            />
          </div>
        </Card>
      </div>
    </div>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const workExperience: WorkExperience[] = [
    {
      title: "Java Backend Development Intern",
      company: "Revature LLC.",
      period: "Aug. 2024 - Dec. 2024",
      description:
        "Collaborated with a team developing scalable backend systems and RESTful APIs using Java Spring Boot. Gained hands-on experience in designing database schemas, implementing business logic and optimizing API performance.",
    },
    {
      title: "Overnight Stocking Associate",
      company: "Walmart",
      period: "Feb. 2025 - Present",
      description: "",
    },
    {
      title: "Undergraduate Teaching Assistant",
      company: "Michigan State University",
      period: "Aug. 2023 - Dec. 2023",
      description: "",
    },
  ];

  const education: Education[] = [
    {
      degree: "Bachelor of Science",
      institution: "Michigan State University",
      period: "2019 - 2023",
      description: "Specialized in Mathematics and Computer Science.",
    },
    {
      degree: "Diploma",
      institution: "Novi High School",
      period: "2015 - 2019",
      description: "",
    },
  ];

  return (
    <section
      id="experience"
      ref={ref}
      className="py-20 bg-transparent relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0 opacity-20">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-purple-500/30 rounded-full filter blur-3xl"
          style={{ y: y1 }}
        />
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-purple-500/30 rounded-full filter blur-3xl"
          style={{ y: y2 }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Cover className="p-3">
            {/* <TextReveal
              text="Experience & Education"
              className="text-3xl md:text-4xl font-bold mb-4"
            /> */}
            <h2 className="text-3xl md:text-4xl font-bold">
              Experience & Education
            </h2>
          </Cover>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mt-4 bg-black">
            My professional journey and educational background that have
            assisted in shaping my skills and expertise.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-8">
              <Briefcase className="h-6 w-6 text-cyan-500 mr-3" />
              <h3 className="text-2xl font-bold">Work Experience</h3>
            </div>
            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-1/2 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-cyan-500 before:to-primary">
              {workExperience.map((job, index) => (
                <TimelineItem
                  key={index}
                  item={job}
                  index={index}
                  type="work"
                />
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-8">
              <GraduationCap className="h-6 w-6 text-purple-500 mr-3" />
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-1/2 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-purple-500 before:to-primary">
              {education.map((edu, index) => (
                <TimelineItem
                  key={index}
                  item={edu}
                  index={index}
                  type="education"
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
