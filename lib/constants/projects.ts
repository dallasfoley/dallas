import { IconType } from "react-icons/lib";
import {
  SiAwslambda,
  SiClerk,
  SiCmake,
  SiCplusplus,
  SiCss3,
  SiDigitalocean,
  SiDocker,
  SiDrizzle,
  SiExpress,
  SiLinux,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiNumpy,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiReacthookform,
  SiReactquery,
  SiShadcnui,
  SiTailwindcss,
  SiThreedotjs,
  SiTwilio,
  SiTypescript,
  SiVercel,
  SiXml,
  SiZod,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

export const projects = [
  {
    title: "LightMind",
    category: "Fullstack",
    description:
      "A mental health tracker allowing users to track and visualize their feelings over time, journal, set reminders, etc.",
    longDesription:
      "A mental health tracker allowing users to track and visualize their feelings over time, journal, set reminders, etc. Also includes a notification system implemented with Twilio and a Linux Cronjob (thorough Vercel) and an AI Chatbot implemented with Vercel's AI SDK.",

    image: "/lightmind.png",
    github: "https://github.com/dallasfoley/LightMind",
    demo: "https://lightmind.it.com",
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
    fullstack: [
      SiTypescript,
      SiReact,
      SiNextdotjs,
      SiReactquery,
      SiZod,
      SiReacthookform,
      SiCss3,
      SiTailwindcss,
      SiShadcnui,
      SiPostgresql,
      SiDrizzle,
      SiLinux,
      SiTwilio,
      SiClerk,
      SiVercel,
    ],
  },
  {
    title: "Recipe Finder",
    category: "Fullstack",
    description: "An app where users can find, save and edit recipes.",
    longDescription:
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
      SiVercel,
    ],
  },
  {
    title: "Personal Porfolio",
    category: "Frontend-Centric",
    description: "An exercise in UI builing",
    longDescription:
      "This gorgeous display of my work, experience, skills, characteristics, etc.",
    image: "/portfolio.png",
    github: "https://github.com/dallasfoley/dallas",
    demo: "#",
    stack: [
      SiTypescript,
      SiReact,
      SiNextdotjs,
      SiTailwindcss,
      SiShadcnui,
      SiThreedotjs,
      SiVercel,
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
      SiVercel,
    ],
  },
  {
    title: "DIY Auth",
    category: "Backend-Centric",
    description:
      "A simple sign-in and sign-out using 0 auth libraries and only utilizing bcrypt's hashing algorithm.",
    image: "/auth.png",
    github: "https://github.com/dallasfoley/Auth",
    demo: "https://auth-git-master-dallas-foleys-projects.vercel.app/login",
    stack: [SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiVercel],
  },
  {
    title: "Calculator",
    category: "Frontend-Centric",
    description: "A calulator.",
    image: "/calc.png",
    github: "https://github.com/dallasfoley/Calculator",
    demo: "https://calculadora-nine-pi.vercel.app/",
    stack: [SiTypescript, SiCss3, SiReact, SiVercel],
  },
  {
    title: "Auth",
    category: "Devops-Centric",
    description:
      "The same DIY auth app from the backend tab deployed with Docker, NGINX and the Github Container Repository on a DigitalOcean droplet.",
    image: "/auth.png",
    github:
      "https://github.com/users/dallasfoley/packages/container/package/auth",
    demo: "https://auth135.twilightparadox.com/login",
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
    title: "To-Do App (AWS EC2)",
    category: "Devops-Centric",
    description:
      "A simple To-Do application deployed with Docker, NGINX and the Github Container Repository on an AWS EC2 instance.",
    image: "/todo.png",
    github:
      "https://github.com/users/dallasfoley/packages/container/package/todo-app",
    demo: "https://todo135.twilightparadox.com/",
    stack: [
      SiTypescript,
      SiNextdotjs,
      SiTailwindcss,
      SiClerk,
      SiDocker,
      SiNginx,
      FaAws,
    ],
  },
  {
    title: "To-Do App (AWS Lambda)",
    category: "Devops-Centric",
    description:
      "The same To-Do application deployed through AWS Lambda functions.",
    image: "/todo.png",
    github: "#",
    demo: "#",
    stack: [
      SiTypescript,
      SiNextdotjs,
      SiTailwindcss,
      SiClerk,
      SiDocker,
      SiNginx,
      SiAwslambda,
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
