import type { IconType } from "react-icons/lib";
import {
  SiAmazonec2,
  SiAmazonrds,
  SiAwslambda,
  SiClerk,
  SiCmake,
  SiCplusplus,
  SiCss3,
  SiDocker,
  SiDrizzle,
  SiExpress,
  SiMysql,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiNumpy,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiReacthookform,
  SiShadcnui,
  //SiSpringboot,
  SiTailwindcss,
  SiThreedotjs,
  SiTwilio,
  SiTypescript,
  SiVercel,
  SiXml,
  SiZod,
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { FaAws } from "react-icons/fa";
import { techNameMap } from "./tech-names";
import { JavalinIcon } from "@/components/javalin-con";

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
      { Icon: SiPostgresql, name: techNameMap.SiPostgresql },
      { Icon: SiDrizzle, name: techNameMap.SiDrizzle },
      { Icon: SiZod, name: techNameMap.SiZod },
      { Icon: SiTailwindcss, name: techNameMap.SiTailwindcss },
      { Icon: SiShadcnui, name: techNameMap.SiShadcnui },
    ],
    fullstack: [
      { Icon: SiTypescript, name: techNameMap.SiTypescript },
      { Icon: SiReact, name: techNameMap.SiReact },
      { Icon: SiNextdotjs, name: techNameMap.SiNextdotjs },
      { Icon: SiPostgresql, name: techNameMap.SiPostgresql },
      { Icon: SiDrizzle, name: techNameMap.SiDrizzle },
      { Icon: SiZod, name: techNameMap.SiZod },
      { Icon: SiReacthookform, name: techNameMap.SiReacthookform },
      { Icon: SiCss3, name: techNameMap.SiCss3 },
      { Icon: SiTailwindcss, name: techNameMap.SiTailwindcss },
      { Icon: SiShadcnui, name: techNameMap.SiShadcnui },
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
    demo: "https://recipe-finder-peach.vercel.app",
    stack: [
      { Icon: SiTypescript, name: techNameMap.SiTypescript },
      { Icon: SiReact, name: techNameMap.SiReact },
      { Icon: SiNextdotjs, name: techNameMap.SiNextdotjs },
      { Icon: SiPostgresql, name: techNameMap.SiPostgresql },
      { Icon: SiPrisma, name: techNameMap.SiPrisma },
      { Icon: SiTailwindcss, name: techNameMap.SiTailwindcss },
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
      { Icon: SiNodedotjs, name: techNameMap.SiNodedotjs },
      { Icon: SiExpress, name: techNameMap.SiExpress },
      { Icon: SiPostgresql, name: techNameMap.SiPostgresql },
      { Icon: SiTypescript, name: techNameMap.SiTypescript },
      { Icon: SiCss3, name: techNameMap.SiCss3 },
      { Icon: SiReact, name: techNameMap.SiReact },
      { Icon: SiVercel, name: techNameMap.SiVercel },
    ],
  },
  {
    title: "Personal Porfolio",
    category: "Frontend-Centric",
    description: "An exercise in UI builing.",
    longDescription:
      "This gorgeous and performant display of my work, experience, skills, characteristics, etc.",
    image: "/portfolio.png",
    github: "https://github.com/dallasfoley/dallas",
    demo: "/",
    stack: [
      { Icon: SiTypescript, name: techNameMap.SiTypescript },
      { Icon: SiReact, name: techNameMap.SiReact },
      { Icon: SiTailwindcss, name: techNameMap.SiTailwindcss },
      { Icon: SiShadcnui, name: techNameMap.SiShadcnui },
      { Icon: SiThreedotjs, name: techNameMap.SiThreedotjs },
      { Icon: SiVercel, name: techNameMap.SiVercel },
    ],
  },
  {
    title: "Reading Progress Tracker Frontend",
    category: "Frontend-Centric",
    description:
      "The frontend for a fullstack reading progress tracker application, manages JWTs manually, with a Javalin server, for session management.",
    image: "/reading-tracker.png",
    github: "https://github.com/dallasfoley/progress-tracker-frontend",
    demo: "https://progress-tracker-frontend-jade.vercel.app",
    stack: [
      { Icon: SiTypescript, name: techNameMap.SiTypescript },
      { Icon: SiNextdotjs, name: techNameMap.SiNextdotjs },
      { Icon: SiMysql, name: techNameMap.SiMysql },
      { Icon: SiTailwindcss, name: techNameMap.SiTailwindcss },
      { Icon: SiZod, name: techNameMap.SiZod },
      { Icon: SiShadcnui, name: techNameMap.SiShadcnui },
      { Icon: SiReacthookform, name: techNameMap.SiReacthookform },
      { Icon: SiVercel, name: techNameMap.SiVercel },
    ],
  },
  {
    title: "Calculadora",
    category: "Frontend-Centric",
    description: "A calulator.",
    image: "/calc.png",
    github: "https://github.com/dallasfoley/Calculator",
    demo: "https://calculadora-nine-pi.vercel.app",
    stack: [
      { Icon: SiTypescript, name: techNameMap.SiTypescript },
      { Icon: SiCss3, name: techNameMap.SiCss3 },
      { Icon: SiReact, name: techNameMap.SiReact },
      { Icon: SiVercel, name: techNameMap.SiVercel },
    ],
  },
  // {
  //   title: "Todo App Frontend",
  //   category: "Frontend-Centric",
  //   description: "The React frontend for a fullstack todo-app.",
  //   image: "/todo.png",
  //   github: "https://github.com/dallasfoley/spring-boot-todo-frontend",
  //   demo: "",
  //   stack: [
  //     { Icon: SiTypescript, name: techNameMap.SiTypescript },
  //     { Icon: SiReact, name: techNameMap.SiReact },
  //     { Icon: SiTailwindcss, name: techNameMap.SiTailwindcss },

  //     { Icon: SiZod, name: techNameMap.SiZod },
  //     { Icon: SiShadcnui, name: techNameMap.SiShadcnui },

  //     { Icon: SiReacthookform, name: techNameMap.SiReacthookform },
  //     { Icon: SiVercel, name: techNameMap.SiVercel },
  //   ],
  // },
  {
    title: "Reading Progress Tracker Backend",
    category: "Backend-Centric",
    description:
      "The Javalin backend for a reading progress tracker application.",
    longDescription:
      "The Javalin backend for a reading progress tracker application, manages JWTs manually, with a Javalin server, for session management. Built with Java, Javalin and MySQL through AWS RDS, deployed on an AWS EC2 instance through a Docker container with an NGINX reverse proxy.",
    image: "/reading-tracker.png",
    github: "https://github.com/dallasfoley/progress-tracker-backend",
    package:
      "https://github.com/users/dallasfoley/packages/container/package/progress-tracker-backend",
    stack: [
      { Icon: FaJava, name: techNameMap.FaJava },
      {
        Icon: JavalinIcon,
        name: techNameMap.JavalinIcon,
      },
      { Icon: SiMysql, name: techNameMap.SiMysql },
      { Icon: FaAws, name: techNameMap.FaAws },
      { Icon: SiDocker, name: techNameMap.SiDocker },
      { Icon: SiNginx, name: techNameMap.SiNginx },
    ],
  },
  // {
  //   title: "Todo App Backend",
  //   category: "Backend-Centric",
  //   description: "The Spring Boot backend for a todo application.",
  //   longDescription:
  //     "The Spring Boot backend for a todo application. Created with Java, Spring Boot and PostgreSQL through Neon DB. Manages JWTs manually for session management. Deployed on an AWS EC2 instance through a Docker container with an NGINX reverse proxy.",
  //   image: "/todo.png",
  //   github: "https://github.com/dallasfoley/spring-boot-todo-frontend",
  //   package:
  //     "https://github.com/users/dallasfoley/packages/container/package/progress-tracker-backend",
  //   stack: [
  //     { Icon: FaJava, name: techNameMap.FaJava },
  //     { Icon: SiSpringboot, name: techNameMap.SiSpringboot },
  //     { Icon: SiPostgresql, name: techNameMap.SiPostgresql },
  //     { Icon: FaAws, name: techNameMap.FaAws },
  //     { Icon: SiDocker, name: techNameMap.SiDocker },
  //     { Icon: SiNginx, name: techNameMap.SiNginx },
  //   ],
  // },
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
      { Icon: SiNextdotjs, name: techNameMap.SiNextdotjs },
      { Icon: SiTailwindcss, name: techNameMap.SiTailwindcss },
      { Icon: SiVercel, name: techNameMap.SiVercel },
    ],
  },
  {
    title: "Reading Progress Tracker App (AWS)",
    category: "Devops-Centric",
    description:
      "The Javalin backend is deployed to an AWS EC2 instance through a Docker container with an NGINX reverse proxy.",
    longDescription:
      "The Javalin backend is deployed to an AWS EC2 instance through a Docker container with an NGINX reverse proxy. It is the same EC2 instance and same NGINX reverse proxy used for the Spring Boot Todo App but a different backend on a different conatiner. The Next.js Backend-For-Frontend is deployed serverlessly to Vercel.",
    image: "/reading-tracker.png",
    github:
      "https://github.com/users/dallasfoley/packages/container/package/todo-app",
    demo: "https://progress-tracker-frontend-jade.vercel.app",
    stack: [
      { Icon: FaAws, name: techNameMap.FaAws },
      { Icon: SiAmazonec2, name: techNameMap.SiAmazonec2 },
      { Icon: SiAmazonrds, name: techNameMap.SiAmazonrds },
      { Icon: SiDocker, name: techNameMap.SiDocker },
      { Icon: SiNginx, name: techNameMap.SiNginx },
      { Icon: SiVercel, name: techNameMap.SiVercel },
    ],
  },
  // {
  //   title: "Todo App (AWS EC2)",
  //   category: "Devops-Centric",
  //   description:
  //     "The Spring Boot backend is deployed to an AWS EC2 instance through a Docker container with an NGINX reverse proxy.",
  //   longDescription:
  //     "The Javalin backend is deployed to an AWS EC2 instance through a Docker container with an NGINX reverse proxy. It is the same EC2 instance and same NGINX reverse proxy used for the Javalin Reading Progress Tracker but a different backend on a different conatiner. The Next.js Backend-For-Frontend is deployed serverlessly to Vercel.",
  //   image: "/todo.png",
  //   github:
  //     "https://github.com/users/dallasfoley/packages/container/package/todo-app",
  //   demo: "https://todo135.twilightparadox.com/",
  //   stack: [
  //     { Icon: FaAws, name: techNameMap.FaAws },
  //     { Icon: SiDocker, name: techNameMap.SiDocker },
  //     { Icon: SiNginx, name: techNameMap.SiNginx },
  //     { Icon: SiVercel, name: techNameMap.SiVercel },
  //   ],
  // },
  {
    title: "Todo App (AWS Lambda)",
    category: "Devops-Centric",
    description:
      "The same Todo app deployed serverlessly through AWS Lambda functions.",
    image: "/todo.png",
    github: "https://github.com/dallasfoley/todo-app",
    demo: "https://todo-app-135.site",
    stack: [
      { Icon: SiTypescript, name: techNameMap.SiTypescript },
      { Icon: SiNextdotjs, name: techNameMap.SiNextdotjs },
      { Icon: SiTailwindcss, name: techNameMap.SiTailwindcss },
      { Icon: SiPostgresql, name: techNameMap.SiPostgresql },
      { Icon: SiClerk, name: techNameMap.SiClerk },
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
  package?: string;
  demo?: string;
  stack: TechStackItem[];
  fullstack?: TechStackItem[];
};
