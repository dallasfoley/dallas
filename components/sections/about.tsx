"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import TextReveal from "@/components/ui-effects/text-reveal";
import Keyboard from "../skill-keyboard";
import HoverVideoTooltip from "../hover-video-tooltip";
import Flow from "../ui/flowchart";
import { SparklesCore } from "../ui/sparkles";

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 bg-transparent relative overflow-hidden"
    >
      <motion.div className="absolute inset-0 z-0 opacity-30" style={{ y }}>
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/20 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/20 rounded-full filter blur-3xl" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16 flex flex-col items-center"
        >
          <TextReveal
            text="About Me"
            className="text-3xl md:text-4xl font-bold mb-4"
          />

          <div className="w-[40rem] h-40 relative flex justify-center items-center overflow-hidden">
            {/* Gradients */}
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm z-10" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4 z-10" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm z-10" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4 z-10" />

            {/* Core component with custom clip-path for top-only sparkles with curved bottom */}
            <div
              className="absolute inset-0 w-full h-full"
              style={{
                clipPath: "polygon(20% 0%, 80% 0%, 80% 70%, 50% 100%, 20% 70%)",
                WebkitClipPath:
                  "polygon(20% 0%, 80% 0%, 80% 70%, 50% 100%, 20% 70%)",
              }}
            >
              <SparklesCore
                background="transparent"
                minSize={0.4}
                maxSize={1}
                particleDensity={1200}
                className="w-full h-full"
                particleColor="#FFFFFF"
              />
            </div>

            {/* Removed radial gradient mask as per user's request */}
          </div>

          <div className="text-lg bg-black text-gray-400 max-w-3xl mx-auto my-8">
            I&apos;m a creative fullstack developer driven by a curiosity to
            understand the complete lifecycle of software, from front to back
            and the deployment process. I&apos;m particularly drawn to
            technologies that empower me to create efficient and scalable
            solutions. <br />
            <br />
            On the frontend, I find myself gravitating towards modern JavaScript
            frameworks and libraries, particularly React.js and Next.js, where I
            can craft intuitive and engaging user experiences. I believe
            TypeScript is practically mandatory for its ability to enhance code
            maintainability and scalability. It&apos;s 2025 and if you&apos;re
            still using vanilla JS,{" "}
            <HoverVideoTooltip videoUrl="/videos/jordan-stop-it.webm">
              in the words of the second greatest basketball player of all
              time...
            </HoverVideoTooltip>{" "}
            For styling, I often leverage Tailwind CSS to create visually
            appealing and responsive designs and have been learning some 3D
            libraries as well -- particularly Three.js and Spline. <br />
            <br />
            On the backend, I enjoy working with Node.js and Express.js as well
            as Next.js&apos;s server components, server actions and API routes
            for building efficient and versatile APIs. I&apos;m also comfortable
            working with and enjoy Java and the Spring Boot ecosystem &#8212;
            particularly for enterprise-level applications &#8212; for their
            scalability and robustness. <br />
            <br />
            When it comes to databases, I&apos;m experienced with both
            relational databases like PostgreSQL and MySQL and non-relational
            databases such as Firebase, allowing me to choose the best tool for
            the job. My interest extends beyond just code; I&apos;m passionate
            about the entire DevOps pipeline. I&apos;m actively learning about
            containerization with Docker to streamline deployment and
            management. I also utilize CI/CD tools like GitHub Actions and
            GitLab CI/CD to automate testing and deployment processes, ensuring
            continuous integration and delivery. While I appreciate the ease of
            deploying to Vercel, I&apos;m also curious about all it does under
            the hood and enjoy digging into the complexities of deploying web
            apps to VMs and VPSs (through DigitalOcean or AWS) or AWS&apos;s
            Lambda functions directly which Vercel spins up under the hood.
            <br />
            <br /> While those are the technologies I&apos;ve explored and am
            most comfortable with, I&apos;m willing to learn whichever
            technology is suited for the job. Ultimately, I&apos;m a lifelong
            learner, always eager to explore new technologies and refine my
            skills to build impactful and innovative applications.
          </div>
          <div className="w-full h-72">
            <Flow />
          </div>
        </motion.div>

        {/* Skills Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-20 flex flex-col items-center"
        >
          <h3 className="text-2xl font-bold mb-8 text-center bg-black w-32">
            My Skills
          </h3>
          <div className="w-full overflow-hidden">
            <Keyboard />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
