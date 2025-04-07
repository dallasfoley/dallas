import type { IconType } from "react-icons/lib";
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
import { techNameMap } from "./tech-names";

// Helper type for tech stack items
type TechStackItem = {
  Icon: IconType;
  name: string;
};

export const projects = [
  {
    title: "LightMind",
    category: "Fullstack",
    description:
      "A mental health tracker allowing users to track and visualize their feelings over time, journal, set reminders, etc.",
    longDescription:
      "A mental health tracker allowing users to track and visualize their feelings over time, journal, set reminders, etc. Also includes a notification system implemented with Twilio and a Linux Cronjob (thorough Vercel) and an AI Chatbot implemented with Vercel's AI SDK.",
    image: "/lightmind.png",
    github: "https://github.com/dallasfoley/LightMind",
    demo: "https://lightmind.it.com",
    stack: [
      { Icon: SiTypescript, name: techNameMap.SiTypescript },
      { Icon: SiNextdotjs, name: techNameMap.SiNextdotjs },
      { Icon: SiReactquery, name: techNameMap.SiReactquery },
      { Icon: SiZod, name: techNameMap.SiZod },
      { Icon: SiTailwindcss, name: techNameMap.SiTailwindcss },
      { Icon: SiShadcnui, name: techNameMap.SiShadcnui },
      { Icon: SiPostgresql, name: techNameMap.SiPostgresql },
      { Icon: SiDrizzle, name: techNameMap.SiDrizzle },
    ],
    fullstack: [
      { Icon: SiTypescript, name: techNameMap.SiTypescript },
      { Icon: SiReact, name: techNameMap.SiReact },
      { Icon: SiNextdotjs, name: techNameMap.SiNextdotjs },
      { Icon: SiReactquery, name: techNameMap.SiReactquery },
      { Icon: SiZod, name: techNameMap.SiZod },
      { Icon: SiReacthookform, name: techNameMap.SiReacthookform },
      { Icon: SiCss3, name: techNameMap.SiCss3 },
      { Icon: SiTailwindcss, name: techNameMap.SiTailwindcss },
      { Icon: SiShadcnui, name: techNameMap.SiShadcnui },
      { Icon: SiPostgresql, name: techNameMap.SiPostgresql },
      { Icon: SiDrizzle, name: techNameMap.SiDrizzle },
      { Icon: SiLinux, name: techNameMap.SiLinux },
      { Icon: SiTwilio, name: techNameMap.SiTwilio },
      { Icon: SiClerk, name: techNameMap.SiClerk },
      { Icon: SiVercel, name: techNameMap.SiVercel },
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
      { Icon: SiTypescript, name: techNameMap.SiTypescript },
      { Icon: SiReact, name: techNameMap.SiReact },
      { Icon: SiNextdotjs, name: techNameMap.SiNextdotjs },
      { Icon: SiTailwindcss, name: techNameMap.SiTailwindcss },
      { Icon: SiPostgresql, name: techNameMap.SiPostgresql },
      { Icon: SiPrisma, name: techNameMap.SiPrisma },
      { Icon: SiVercel, name: techNameMap.SiVercel },
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
      { Icon: SiTypescript, name: techNameMap.SiTypescript },
      { Icon: SiReact, name: techNameMap.SiReact },
      { Icon: SiNextdotjs, name: techNameMap.SiNextdotjs },
      { Icon: SiTailwindcss, name: techNameMap.SiTailwindcss },
      { Icon: SiShadcnui, name: techNameMap.SiShadcnui },
      { Icon: SiThreedotjs, name: techNameMap.SiThreedotjs },
      { Icon: SiVercel, name: techNameMap.SiVercel },
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
      { Icon: SiTypescript, name: techNameMap.SiTypescript },
      { Icon: SiCss3, name: techNameMap.SiCss3 },
      { Icon: SiReact, name: techNameMap.SiReact },
      { Icon: SiNodedotjs, name: techNameMap.SiNodedotjs },
      { Icon: SiExpress, name: techNameMap.SiExpress },
      { Icon: SiPostgresql, name: techNameMap.SiPostgresql },
      { Icon: SiVercel, name: techNameMap.SiVercel },
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
    stack: [
      { Icon: SiTypescript, name: techNameMap.SiTypescript },
      { Icon: SiReact, name: techNameMap.SiReact },
      { Icon: SiNextdotjs, name: techNameMap.SiNextdotjs },
      { Icon: SiTailwindcss, name: techNameMap.SiTailwindcss },
      { Icon: SiVercel, name: techNameMap.SiVercel },
    ],
  },
  {
    title: "Calculator",
    category: "Frontend-Centric",
    description: "A calulator.",
    image: "/calc.png",
    github: "https://github.com/dallasfoley/Calculator",
    demo: "https://calculadora-nine-pi.vercel.app/",
    stack: [
      { Icon: SiTypescript, name: techNameMap.SiTypescript },
      { Icon: SiCss3, name: techNameMap.SiCss3 },
      { Icon: SiReact, name: techNameMap.SiReact },
      { Icon: SiVercel, name: techNameMap.SiVercel },
    ],
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
      { Icon: SiTypescript, name: techNameMap.SiTypescript },
      { Icon: SiNextdotjs, name: techNameMap.SiNextdotjs },
      { Icon: SiTailwindcss, name: techNameMap.SiTailwindcss },
      { Icon: SiDocker, name: techNameMap.SiDocker },
      { Icon: SiNginx, name: techNameMap.SiNginx },
      { Icon: SiDigitalocean, name: techNameMap.SiDigitalocean },
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
      { Icon: SiTypescript, name: techNameMap.SiTypescript },
      { Icon: SiNextdotjs, name: techNameMap.SiNextdotjs },
      { Icon: SiTailwindcss, name: techNameMap.SiTailwindcss },
      { Icon: SiClerk, name: techNameMap.SiClerk },
      { Icon: SiDocker, name: techNameMap.SiDocker },
      { Icon: SiNginx, name: techNameMap.SiNginx },
      { Icon: FaAws, name: techNameMap.FaAws },
    ],
  },
  {
    title: "To-Do App (AWS Lambda)",
    category: "Devops-Centric",
    description:
      "The same To-Do application deployed through AWS Lambda functions.",
    image: "/todo.png",
    github:
      "https://github.com/users/dallasfoley/packages/container/package/todo-app",
    demo: "https://todo135.twilightparadox.com/",
    stack: [
      { Icon: SiTypescript, name: techNameMap.SiTypescript },
      { Icon: SiNextdotjs, name: techNameMap.SiNextdotjs },
      { Icon: SiTailwindcss, name: techNameMap.SiTailwindcss },
      { Icon: SiClerk, name: techNameMap.SiClerk },
      { Icon: SiDocker, name: techNameMap.SiDocker },
      { Icon: SiNginx, name: techNameMap.SiNginx },
      { Icon: SiAwslambda, name: techNameMap.SiAwslambda },
    ],
  },
  {
    title: "Canadian Experience",
    category: "Non-Web",
    description: "An exercise in OOP made with C++, CMake and wxWidgets.",
    image: "/canadian-experience.png",
    github: "https://github.com/dallasfoley/CanadianExperience",
    stack: [
      { Icon: SiCplusplus, name: techNameMap.SiCplusplus },
      { Icon: SiCmake, name: techNameMap.SiCmake },
    ],
  },
  {
    title: "Action Sudoku",
    category: "Non-Web",
    description:
      "An interactive sudoku game with multiple levels, features and themes.",
    image: "/action-sudoku.png",
    github: "https://github.com/dallasfoley/ActionSudokuGame",
    stack: [
      { Icon: SiCplusplus, name: techNameMap.SiCplusplus },
      { Icon: SiCmake, name: techNameMap.SiCmake },
      { Icon: SiXml, name: techNameMap.SiXml },
    ],
  },
  {
    title: "Graph ADT Implementation",
    category: "Non-Web",
    description:
      "A comprehensive implementation of the Graph Abstract Data Type (ADT) using an Adjacency Map structure. Implements multiple shortest path algorithms.",
    image: "/graph.jpg",
    github: "https://github.com/dallasfoley/GraphADTImplementation",
    stack: [
      { Icon: SiPython, name: techNameMap.SiPython },
      { Icon: SiNumpy, name: techNameMap.SiNumpy },
    ],
  },
];

export type Project = {
  title: string;
  category: string;
  description: string;
  longDescription?: string;
  image: string;
  github: string;
  demo?: string;
  stack: TechStackItem[];
  fullstack?: TechStackItem[];
};
