import { FaReact } from "react-icons/fa";
import redditClone from "@/public/redditclone.png";
import ecommerce from "@/public/ecommerce.png";
import lms from "@/public/lms.png";
import nextShop from "@/public/nextShop.png";
import chatapp from "@/public/chatapp.jpeg";

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
