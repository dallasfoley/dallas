import { IconType } from "react-icons/lib";
import {
  SiCmake,
  SiCplusplus,
  SiCss3,
  SiDigitalocean,
  SiDocker,
  SiDrizzle,
  SiExpress,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiNumpy,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiReactquery,
  SiShadcnui,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiXml,
  SiZod,
} from "react-icons/si";

export const projects = [
  {
    title: "LightMind",
    category: "Fullstack",
    description:
      "A mental health tracker allowing users to track and visualize their feelings over time, journal, set reminders, etc. Also includes a notification system implemented with Twilio and an AI Chatbot implemented with Vercel's AI SDK.",
    image: "/file.svg",
    github: "https://github.com/dallasfoley/LightMind",
    demo: "#",
    stack: [
      SiTypescript,
      SiNextdotjs,
      SiReactquery,
      SiZod,
      SiTailwindcss,
      SiShadcnui,
      SiPostgresql,
      SiDrizzle,
    ],
  },
  {
    title: "Recipe Finder",
    category: "Fullstack",
    description:
      "An app where users can find, save and edit recipes. Allows search by name, ingredient list or AI Chatbot.",
    image: "/recipe-finder.png",
    github: "https://github.com/dallasfoley/recipe-finder",
    demo: "https://recipe-finder-peach.vercel.app/",
    stack: [
      SiTypescript,
      SiReact,
      SiNextdotjs,
      SiTailwindcss,
      SiPostgresql,
      SiPrisma,
    ],
  },
  {
    title: "Personal Porfolio",
    category: "Frontend-Centric",
    description: "An exercise in UI builing",
    image: "/portfolio.png",
    github: "#",
    demo: "#",
    stack: [
      SiTypescript,
      SiReact,
      SiNextdotjs,
      SiTailwindcss,
      SiShadcnui,
      SiThreedotjs,
    ],
  },
  {
    title: "Pokedol",
    category: "Fullstack",
    description: "An app featuring various Pokemon themed games.",
    image: "/pokedol.png",
    github: "https://github.com/dallasfoley/Pokedol",
    demo: "https://pokedol.vercel.app/",
    stack: [
      SiTypescript,
      SiCss3,
      SiReact,
      SiNodedotjs,
      SiExpress,
      SiPostgresql,
    ],
  },
  {
    title: "Auth",
    category: "Backend-Centric",
    description:
      "A simple sign-in and sign-out using 0 auth libraries and only utilizing bcrypt's hashing algorithm.",
    image: "/auth.png",
    github: "#",
    demo: "#",
    stack: [SiTypescript, SiReact, SiNextdotjs],
  },
  {
    title: "Calculator",
    category: "Frontend-Centric",
    description: "A calulator.",
    image: "/calc.png",
    github: "https://github.com/dallasfoley/Calculator",
    demo: "https://calculadora-nine-pi.vercel.app/",
    stack: [SiTypescript, SiCss3, SiReact],
  },
  {
    title: "To-Do App",
    category: "Devops-Centric",
    description:
      "A simple To-Do application deployed with Docker and NGINX on a DigitalOcean Droplet.",
    image: "/todo.png",
    github: "#",
    demo: "#",
    stack: [
      SiTypescript,
      SiNextdotjs,
      SiTailwindcss,
      SiDocker,
      SiNginx,
      SiDigitalocean,
    ],
  },
  {
    title: "Canadian Experience",
    category: "Non-Web",
    description: "An exercise in OOP made with C++, CMake and wxWidgets.",
    image: "/canadian-experience.png",
    github: "https://github.com/dallasfoley/CanadianExperience",
    stack: [SiCplusplus, SiCmake],
  },
  {
    title: "Action Sudoku",
    category: "Non-Web",
    description:
      "An interactive sudoku game with multiple levels, features and themes.",
    image: "/action-sudoku.png",
    github: "https://github.com/dallasfoley/ActionSudokuGame",
    stack: [SiCplusplus, SiCmake, SiXml],
  },
  {
    title: "Graph ADT Implementation",
    category: "Non-Web",
    description:
      "A comprehensive implementation of the Graph Abstract Data Type (ADT) using an Adjacency Map structure. Implements multiple shortest path algorithms.",
    image: "/graph.jpg",
    github: "https://github.com/dallasfoley/GraphADTImplementation",
    stack: [SiPython, SiNumpy],
  },
];

export type Project = {
  title: string;
  category: string;
  description: string;
  image: string;
  github: string;
  demo?: string;
  stack: IconType[];
};
