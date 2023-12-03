import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap, LuMessageSquare } from "react-icons/lu";
import redditClone from "@/public/redditclone.png";
import ecommerce from "@/public/ecommerce.png";
import lms from "@/public/lms.png";
import nextShop from "@/public/nextShop.png";
import chatapp from "@/public/chatapp.jpeg";

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

// export const experiencesData = [
//   {
//     title: "Graduated bootcamp",
//     location: "Miami, FL",
//     description:
//       "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
//     icon: React.createElement(LuGraduationCap),
//     date: "2019",
//   },
//   {
//     title: "Front-End Developer",
//     location: "Orlando, FL",
//     description:
//       "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
//     icon: React.createElement(CgWorkAlt),
//     date: "2019 - 2021",
//   },
//   {
//     title: "Full-Stack Developer",
//     location: "Houston, TX",
//     description:
//       "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
//     icon: React.createElement(FaReact),
//     date: "2021 - present",
//   },
// ] as const;

export const projectsData = [
  {
    title: "Social Media Platform",
    description:
      "Developed a feature-rich Reddit clone using MERN stack, implementing user authentication with JWT with all the main Reddit functionalities.",
    tags: ["React", "Express.js", "MongoDB", "Tailwind", "Node.js", "Redux"],
    imageUrl: redditClone,
  },
  {
    title: "LMS Platform",
    description:
      "Dynamic online learning platform with secure authentication, course & chapter creation, multimedia support, and Stripe payment integration.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Prisma", "MySQL"],
    imageUrl: lms,
  },
  {
    title: "E-Commerce Website(MERN Stack)",
    description:
      "Designed and implemented with user authentication with JWT, and React-Redux for state management.",
    tags: ["React", "Express.js", "MongoDB", "Tailwind", "Node.js", "Redux"],
    imageUrl: ecommerce,
  },
  {
    title: "Chat App",
    description:
      "Developed a chat application using Flutter and Firebase, with user authentication, real-time messaging.",
    tags: ["Flutter", "Firebase", "Cloud Firestore", "Dart"],
    imageUrl: chatapp,
  },
  {
    title: "E-Commerce Website (NEXT JS)",
    description:
      "Designed and implemented with user authentication with Next Auth, and Zustand for state management.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Prisma", "MongoDB"],
    imageUrl: nextShop,
  },
] as const;

import { IconType } from "react-icons";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaNode,
  FaGithub,
  FaDatabase,
  FaJava,
  FaFigma,
} from "react-icons/fa";
import {
  SiTypescript,
  SiPrisma,
  SiRedux,
  SiExpress,
  SiMysql,
  SiFlutter,
  SiFirebase,
  SiTailwindcss,
  SiPostman,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

type Skill = {
  skill: string;
  icon: IconType | null;
};

export const skillsData: readonly Skill[] = [
  { skill: "HTML", icon: FaHtml5 },
  { skill: "CSS", icon: FaCss3 },
  { skill: "JavaScript", icon: FaJs },
  { skill: "TypeScript", icon: SiTypescript },
  { skill: "React", icon: FaReact },
  { skill: "Next.js", icon: TbBrandNextjs },
  { skill: "Node.js", icon: FaNode },
  { skill: "Github", icon: FaGithub },
  { skill: "Tailwind", icon: SiTailwindcss },
  { skill: "Prisma", icon: SiPrisma },
  { skill: "MongoDB", icon: FaDatabase },
  { skill: "Redux", icon: SiRedux },
  { skill: "Express", icon: SiExpress },
  { skill: "Java", icon: FaJava },
  { skill: "Figma", icon: FaFigma },
  { skill: "Firebase", icon: SiFirebase },
  { skill: "MongoDB", icon: FaDatabase },
  { skill: "MySQL", icon: SiMysql },
  { skill: "Flutter", icon: SiFlutter },
  { skill: "Postman", icon: SiPostman },
] as const;
