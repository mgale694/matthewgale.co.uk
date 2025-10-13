export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string | null;
  featured: boolean;
  image: string | null;
  imageDark?: string | null;
  preview: string | null;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Personal Website",
    description: "A modern, minimalist personal website built with React, TypeScript, and TanStack Router. Features a blog system powered by markdown files.",
    technologies: ["React", "TypeScript", "TanStack Router", "Tailwind CSS", "Vite"],
    githubUrl: "https://github.com/mgale694/matthewgale.co.uk",
    liveUrl: "https://matthewgale.co.uk",
    featured: true,
    image: "/showcase/personal-site-preview-light.webp",
    imageDark: "/showcase/personal-site-preview-dark.webp",
    preview: null,
  },
  {
    id: 2,
    title: "Photography Portfolio",
    description: "A clean, elegant photography portfolio showcasing my film photography work. Built with modern web technologies and optimized for visual storytelling.",
    technologies: ["React", "TypeScript", "TanStack Router", "Tailwind CSS", "Vite", "Responsive Design"],
    githubUrl: "https://github.com/mgale694",
    liveUrl: "https://mattgale-photography.pages.dev/",
    featured: true,
    image: "/showcase/photography-preview-light.webp",
    imageDark: "/showcase/photography-preview-dark.webp",
    preview: null,
  },
  {
    id: 3,
    title: "uvve - uv Virtual Environment Manager",
    description: "A CLI tool for managing Python virtual environments using uv. Think pyenv-virtualenv but powered by the speed of uv.",
    technologies: ["uv", "CLI", "Python", "Virtual Environments"],
    githubUrl: "https://github.com/hedge-quill/uvve",
    liveUrl: null,
    featured: false,
    image: null,
    preview: null,
  },
  {
    id: 4,
    title: "Python Trading Engine",
    description: "A modular Python trading engine designed for real-time trading, order management, and analytics. This project is structured for extensibility and clarity, with a Streamlit-based frontend, a robust backend trading engine, and a flexible database layer.",
    technologies: ["Python", "RabbitMQ", "PnL", "PostgresSQL", "kdb+", "Trading", "Backtesting"],
    githubUrl: "https://github.com/mgale694/py-trading-engine",
    liveUrl: null,
    featured: false,
    image: null,
    preview: null,
  },
  {
    id: 5,
    title: "Cadence - Advanced Data Structures",
    description: "A Python package providing efficient and robust implementations of fundamental advanced data structures.",
    technologies: ["Python", "Data Structures", "Algorithms"],
    githubUrl: "https://github.com/mgale694/cadence",
    liveUrl: null,
    featured: false,
    image: null,
    preview: null,
  },
  {
    id: 6,
    title: "Rithm - Essential Algorithms",
    description: "A Python toolkit for mastering and exploring essential algorithms with clarity and efficiency.",
    technologies: ["Python", "Algorithms"],
    githubUrl: "https://github.com/mgale694/rithm",
    liveUrl: null,
    featured: false,
    image: null,
    preview: null,
  },
  {
    id: 7,
    title: "Flight Tracker",
    description: "This project is an application that allows users to track flights based on their selected direction. The application fetches flight data and displays relevant information about flights overhead in real-time.",
    technologies: ["Python", "Streamlit", "APIs", "Data Visualization", "Raspberry Pi"],
    githubUrl: "https://github.com/mgale694/flight-tracker",
    liveUrl: null,
    featured: false,
    image: null,
    preview: null,
  },
  {
    id: 8,
    title: "Grrs - File Searcher",
    description: "A simple and efficient command-line utility written in Rust for searching text patterns within files. Think of it as a lightweight grep alternative built for learning and demonstration purposes.",
    technologies: ["Rust", "CLI", "File I/O"],
    githubUrl: "https://github.com/mgale694/file-searcher",
    liveUrl: null,
    featured: false,
    image: null,
    preview: null,
  },
  {
    id: 9,
    title: "Repogen - GitHub Repo Generator",
    description: "Rust-based command-line tool that automates the creation of new GitHub repositories — both remotely and locally.",
    technologies: ["Rust", "CLI", "Github", "API", "async", "OAuth"],
    githubUrl: "https://github.com/mgale694/repogen",
    liveUrl: null,
    featured: false,
    image: null,
    preview: null,
  },
  {
    id: 10,
    title: "Cure - Basic Java Game",
    description: "A simple 2D Java game where players fight zombies to find a cure.",
    technologies: ["Rust", "CLI", "Game Development"],
    githubUrl: "https://github.com/mgale694/repogen",
    liveUrl: null,
    featured: false,
    image: null,
    preview: null,
  },
];