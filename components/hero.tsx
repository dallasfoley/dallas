"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { TypewriterEffectSmooth } from "./ui-effects/typewriter-effect";

const words = [
  {
    text: "Hi, ",
    className: "text-zinc-200 text-3xl md:text-5xl",
  },
  {
    text: "I'm ",
    className: "text-zinc-200 text-3xl md:text-5xl",
  },
  {
    text: "Dallas.",
    className: "text-blue-600 text-3xl md:text-5xl",
  },
];

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-transparent">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:flex lg:items-center lg:gap-x-10 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg lg:flex-shrink-0">
          <motion.h1
            className="mt-10 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <TypewriterEffectSmooth
              words={words}
              className="text-3xl md:text-5xl"
            />
          </motion.h1>
          <motion.p
            className="mt-6 text-xl leading-8 text-zinc-400 font-semibold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
          >
            Fullstack Developer
          </motion.p>
          <motion.div
            className="mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.4 }}
          >
            <Link
              href="#projects"
              className="px-6 py-3 font-bold text-white rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 border-2 border-white flex items-center justify-center whitespace-nowrap transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 hover:-translate-y-1 hover:scale-105"
            >
              <span>View my Work</span>
            </Link>
            <Link
              href="#contact"
              className="px-6 py-3 font-bold text-white rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center whitespace-nowrap transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 hover:-translate-y-1 hover:scale-105"
            >
              <span>Get in Touch</span>
            </Link>
          </motion.div>
        </div>
        <motion.div
          className="mx-auto mt-16 lg:mt-0"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.6,
            // Ensure the final state is maintained
            x: { type: "spring", stiffness: 100, damping: 15 },
          }}
        >
          <div className="relative">
            <Image
              src="/hero.png"
              alt="Design concept"
              width={600}
              height={600}
              className="w-[500px] max-w-full bg-transparent"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
