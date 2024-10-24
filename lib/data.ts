import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import taskManagerImg from "../public/taskmanager.png"
import techshopImage from '../public/TechShop.png';
import copeWithStressImg from "../public/coping-with-stress.png";
import ticTacToeImg from "../public/tic-tac-toe.png";
import mouseFollowerImg from "../public/mouse-follower.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Task Manager",
    description:
      "Developed with the MERN stack. The application allows users to manage their tasks efficiently, with secure authentication and real-time synchronization.",
    tags: ["React", "Node", "MongoDB", "Vite", "Tailwind"],
    imageUrl: taskManagerImg,
    link: "https://mern-task-manager-three.vercel.app/"
  },
  {
    title: "TechShop",
    description:
      "Complete ecommerce offering a robust and scalable online shopping experience. Product management, user authentication and order processing.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: techshopImage,
    link: "https://ecommerce-pm-4.vercel.app/"
  },
  {
    title: "Coping with Stress",
    description:
      "Developed with Nextjs. Page developed for an English class related to stress management.",
    tags: ["React", "Next.js", "Tailwind", "Framer-motion", "Lucid react"],
    imageUrl: copeWithStressImg,
    link: "https://coping-with-stress-english-lab-class.vercel.app/"
  },
  {
    title: "Tic Tac Toe",
    description:
      "Interactive Tic-Tac-Toe game built with React and Vite. Features include two-player mode, responsive design, and game state persistence.",
    tags: ["React", "Vite", "CSS", "Javascript", "Canvas"],
    imageUrl: ticTacToeImg,
    link: "https://tic-tac-toe-psi-ivory-73.vercel.app/"
  },
  {
    title: "Mouse follower",
    description:
      "Interactive Mouse Follower application built with React and Vite. Features include a toggleable mouse-following effect, custom animations, and responsive design.",
    tags: ["React", "Vite", "CSS", "Javascript"],
    imageUrl: mouseFollowerImg,
    link: "https://mouse-follower-one.vercel.app/"
  }
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Shadcn",
  "Express",
  "PostgreSQL",
  "Bootstrap",
  "Framer Motion",
] as const;
