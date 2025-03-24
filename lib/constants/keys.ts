export type TechKey = {
  name: string;
  label: string;
  description: string;
};

export const TECH_KEYS: Record<string, TechKey> = {
  // Languages
  js: {
    name: "js",
    label: "JavaScript",
    description:
      "A versatile scripting language essential for front-end and back-end web development, enabling interactive and dynamic web applications.",
  },
  ts: {
    name: "ts",
    label: "TypeScript",
    description:
      "A statically typed superset of JavaScript that enhances code maintainability and scalability, particularly in large projects.",
  },
  python: {
    name: "python",
    label: "Python",
    description:
      "A high-level, interpreted language known for its readability and extensive libraries, widely used in web development, data science, and automation.",
  },
  java: {
    name: "java",
    label: "Java",
    description:
      "A robust, object-oriented language designed for cross-platform applications, commonly used in enterprise-level software development.",
  },
  c: {
    name: "c",
    label: "C",
    description:
      "A foundational programming language that provides low-level control and high performance, used in system programming and embedded systems.",
  },
  cpp: {
    name: "cpp",
    label: "C++",
    description:
      "An extension of C that supports object-oriented programming, offering high performance and flexibility for complex software development.",
  },
  bash: {
    name: "bash",
    label: "Bash",
    description:
      "A command-line shell and scripting language used for automating tasks and managing systems in Unix-like environments.",
  },
  // Frameworks & Libraries
  react: {
    name: "react",
    label: "React.js",
    description:
      "A declarative JavaScript library for building efficient and reusable user interface components for web applications.",
  },
  nextjs: {
    name: "nextjs",
    label: "Next.js",
    description:
      "A React framework that enables server-side rendering and static site generation, improving performance and SEO for web applications.",
  },
  nodejs: {
    name: "nodejs",
    label: "Node.js",
    description:
      "A JavaScript runtime built on Chrome's V8 engine that allows server-side execution of JavaScript, enabling scalable network applications.",
  },
  express: {
    name: "expressjs",
    label: "Express.js",
    description:
      "A fast, minimalist web framework for Node.js, providing robust features for building web and mobile applications.",
  },
  html: {
    name: "html",
    label: "HTML5",
    description:
      "The standard markup language for creating the structure and content of web pages.",
  },
  css: {
    name: "css",
    label: "CSS3",
    description:
      "A style sheet language used for describing the presentation and layout of web documents.",
  },
  springboot: {
    name: "springboot",
    label: "Spring Boot",
    description:
      "A framework that simplifies the development of stand-alone, production-grade Spring-based applications with minimal configuration.",
  },
  bootstrap: {
    name: "bootstrap",
    label: "Bootstrap",
    description:
      "A popular CSS framework that provides pre-built components and responsive design capabilities for web development.",
  },
  // Backend & Databases
  postgres: {
    name: "postgres",
    label: "PostgreSQL",
    description:
      "A powerful, open-source relational database management system known for its reliability and advanced features.",
  },
  mysql: {
    name: "mysql",
    label: "MySQL",
    description:
      "A widely used open-source relational database management system, suitable for various web applications and data storage needs.",
  },
  prisma: {
    name: "prisma",
    label: "Prisma",
    description:
      "A modern database toolkit that simplifies database access and management for Node.js and TypeScript applications.",
  },
  drizzle: {
    name: "drizzle",
    label: "Drizzle",
    description:
      "A lightweight, type-safe SQL query builder and ORM for TypeScript, designed to be fast and developer-friendly.",
  },
  hibernate: {
    name: "hibernate",
    label: "Spring Hibernate",
    description:
      "An object-relational mapping (ORM) framework that simplifies database interactions in Java applications.",
  },
  aws: {
    name: "aws",
    label: "AWS",
    description:
      "Amazon Web Services, a comprehensive cloud computing platform offering a wide range of services, including computing, storage, and databases.",
  },
  // Version Control & Deployment
  linux: {
    name: "linux",
    label: "Linux",
    description:
      "An open-source operating system kernel that powers various distributions and is widely used for servers and development environments.",
  },
  git: {
    name: "git",
    label: "Git",
    description:
      "A distributed version control system that tracks changes in source code during software development, enabling collaboration and version management.",
  },
  github: {
    name: "github",
    label: "GitHub",
    description:
      "A web-based platform for version control and collaboration using Git, providing hosting for software development and version control.",
  },
  gitlab: {
    name: "gitlab",
    label: "GitLab",
    description:
      "A web-based DevOps platform that provides Git repository management, CI/CD pipelines, and other collaboration tools.",
  },
  docker: {
    name: "docker",
    label: "Docker",
    description:
      "A platform for developing, shipping, and running applications in containers, enabling consistent and portable deployments.",
  },
  nginx: {
    name: "nginx",
    label: "NGINX",
    description:
      "A high-performance web server and reverse proxy server, often used for load balancing and content caching.",
  },
  vercel: {
    name: "vercel",
    label: "Vercel",
    description:
      "A cloud platform for static sites and serverless functions, optimized for front-end developers and seamless deployment.",
  },
  // Tools and Utilities
  jira: {
    name: "jira",
    label: "Jira",
    description:
      "A project management tool used for tracking issues, planning sprints, and managing agile software development.",
  },
  reactquery: {
    name: "reactquery",
    label: "Tanstack (React) Query",
    description:
      "A data-fetching library for React that simplifies asynchronous data management and caching in front-end applications.",
  },
  zod: {
    name: "zod",
    label: "Zod",
    description:
      "A TypeScript-first schema declaration and validation library, used to ensure data integrity.",
  },
  tailwind: {
    name: "tailwind",
    label: "Tailwind CSS",
    description:
      "A utility-first CSS framework that enables rapid UI development with highly customizable and composable styles.",
  },
  shadcn: {
    name: "shadcn",
    label: "Shadcn UI",
    description:
      "A collection of reusable UI components for React, designed to be easily customizable and integrated into projects.",
  },
  clerk: {
    name: "clerk",
    label: "Clerk",
    description:
      "A platform that simplifies user authentication and management for web and mobile applications.",
  },
  threejs: {
    name: "threejs",
    label: "Three.js",
    description:
      "A JavaScript library for creating 3D graphics in web browsers, enabling interactive and immersive experiences.",
  },
  openai: {
    name: "openai",
    label: "Open AI",
    description:
      "An artificial intelligence research and deployment company providing advanced AI models and APIs for various applications.",
  },
  vscode: {
    name: "vscode",
    label: "VSCode",
    description:
      "Visual Studio Code, a lightweight but powerful source code editor that runs on your desktop and is available for Windows, macOS and Linux. It comes with built-in support for JavaScript, TypeScript and Node.js and has a rich ecosystem of extensions for other languages (such as C++, C#, Java, Python, PHP, Go) and runtimes (such as .NET and Unity).",
  },
};
