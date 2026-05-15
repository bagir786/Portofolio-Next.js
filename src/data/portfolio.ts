import { ExternalLink, Globe } from "lucide-react";
import { AppStoreIcon, PlayStoreIcon, GithubIcon, LinkedInIcon, InstagramIcon, MailIcon } from "@/components/shared/Icons";

export interface ProjectLink {
  name: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  links: ProjectLink[];
  status?: "Public" | "Private";
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface Skill {
  name: string;
  category: "Languages" | "Frontend & Mobile" | "Backend" | "Database & Cloud" | "Tools" | "Methodologies";
  slug?: string;
  iconUrl?: string;
}

export const PORTFOLIO_DATA = {
  name: "Muhammad Hafiudin Bagir",
  role: "Full Stack Developer",
  location: "Bekasi, Indonesia",
  email: "hafiudinbagir@gmail.com",
  about: "Software Engineer with hands-on experience developing enterprise web and mobile applications using React, Flutter, Node.js, Laravel, and Python. Experienced in building internal business systems, AI-integrated platforms, realtime workforce management solutions, and scalable mobile applications.",
  socials: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/muhamad-hafiudin-bagir",
      icon: LinkedInIcon,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/havh_12",
      icon: InstagramIcon,
    },
    {
      name: "Email",
      url: "mailto:hafiudinbagir@gmail.com",
      icon: MailIcon,
    },
    {
      name: "GitHub",
      url: "https://github.com/bagir786",
      icon: GithubIcon,
    },
  ] as SocialLink[],
  skills: [
    // Languages
    { name: "JavaScript", category: "Languages", slug: "js" },
    { name: "Dart", category: "Languages", slug: "dart" },
    { name: "PHP", category: "Languages", slug: "php" },
    { name: "Python", category: "Languages", slug: "python" },
    { name: "Kotlin", category: "Languages", slug: "kotlin" },
    { name: "Swift", category: "Languages", slug: "swift" },
    { name: "Java", category: "Languages", slug: "java" },
    // Frontend & Mobile
    { name: "React.js", category: "Frontend & Mobile", slug: "react" },
    { name: "Flutter", category: "Frontend & Mobile", slug: "flutter" },
    { name: "React Native", category: "Frontend & Mobile", slug: "react" },
    { name: "Jetpack Compose", category: "Frontend & Mobile", iconUrl: "/icons/jetpackcompose.svg" },
    { name: "SwiftUI", category: "Frontend & Mobile", slug: "apple" },
    { name: "Next.js", category: "Frontend & Mobile", slug: "nextjs" },
    { name: "Tailwind CSS", category: "Frontend & Mobile", slug: "tailwind" },
    // Backend
    { name: "Node.js", category: "Backend", slug: "nodejs" },
    { name: "Express.js", category: "Backend", slug: "express" },
    { name: "Laravel", category: "Backend", slug: "laravel" },
    { name: "Django", category: "Backend", slug: "django" },
    { name: "Flask", category: "Backend", slug: "flask" },
    { name: "Redis", category: "Backend", slug: "redis" },
    { name: "RabbitMQ", category: "Backend", slug: "rabbitmq" },
    // Database & Cloud
    { name: "MySQL", category: "Database & Cloud", slug: "mysql" },
    { name: "PostgreSQL", category: "Database & Cloud", slug: "postgres" },
    { name: "Firebase", category: "Database & Cloud", slug: "firebase" },
    { name: "AWS", category: "Database & Cloud", slug: "aws" },
    { name: "MongoDB", category: "Database & Cloud", slug: "mongodb" },
    // Tools
    { name: "Docker", category: "Tools", slug: "docker" },
    { name: "Git", category: "Tools", slug: "git" },
    { name: "Postman", category: "Tools", slug: "postman" },
    { name: "Figma", category: "Tools", slug: "figma" },
    // Methodologies
    { name: "Agile Development", category: "Methodologies" },
    { name: "Scrum", category: "Methodologies" },
  ] as Skill[],
  projects: [
    {
      title: "ALKITAB GBKP + KITAB ENDE",
      description: "A multi-functional, multi-version, free, and ad-free Bible app with modern interface, advanced search, version comparison, cross-references, personal notes, bookmarks, and highlights.",
      image: "/images/alkitab.png",
      tags: ["Dart", "Python"],
      links: [
        { name: "GitHub", url: "https://github.com/bagir786/alkitab-showcase", icon: GithubIcon },
        { name: "App Store", url: "https://apps.apple.com/id/app/alkitab-gbkp-kitab-ende/id6749220027", icon: AppStoreIcon },
        { name: "Play Store", url: "https://play.google.com/store/apps/details?id=com.alkitab.alkitab", icon: PlayStoreIcon },
      ],
    },
    {
      title: "INSIGHT",
      description: "A web and mobile application for completing Reflective Journals for Competency Development Program Evaluations based on Kirkpatrick's 5-Level model. Used by BPOM employees.",
      image: "/images/insight.png",
      tags: ["Dart", "Python"],
      links: [
        { name: "GitHub", url: "https://github.com/bagir786/insight-showcase", icon: GithubIcon },
        { name: "Live Site", url: "https://insightapp.site/#/code", icon: Globe },
      ],
    },
    {
      title: "MARITIM MUDA CONNECT",
      description: "Community platform to build connections, and access information about maritime events, scholarships, job opportunities, and maritime products.",
      image: "/images/maritim.png",
      tags: ["Dart", "Php"],
      links: [
        { name: "GitHub", url: "https://github.com/Maritim-Muda-Connect/MaritimMudaConnect", icon: GithubIcon },
        { name: "Play Store", url: "https://play.google.com/store/search?q=maritim+muda+connect&c=apps", icon: PlayStoreIcon },
      ],
    },
    {
      title: "SMILE MULTIFAB",
      description: "Integrated enterprise management and logistics mobile application developed for the IT Department of PT Multi Fabrindo Gemilang. Features seamless mobile integration for streamlined corporate workflows.",
      image: "/images/smile-multifab.png",
      tags: ["Dart", "JavaScript"],
      links: [
        { name: "Private", url: "https://github.com/bagir786/Smile-Multifab", icon: GithubIcon },
      ],
      status: "Private",
    },
    {
      title: "VMS MULTIFAB",
      description: "Enterprise-grade Vendor Management System (VMS) for PT Multi Fabrindo Gemilang. An integrated digital platform for strategic partnership management featuring enterprise-level security and automated industrial processes.",
      image: "/images/vms-multifab.png",
      tags: ["JavaScript"],
      links: [
        { name: "Private", url: "https://github.com/bagir786/vms", icon: GithubIcon },
      ],
      status: "Private",
    },
    {
      title: "ERP MULTIFAB",
      description: "Comprehensive Enterprise Resource Planning (ERP) system focused on data centralization and operational efficiency for large-scale manufacturing environments.",
      image: "/images/erp-multifab.png",
      tags: ["JavaScript", "PHP"],
      links: [
        { name: "Private", url: "https://github.com/itmultifab/mfg-datacore-v2-fe", icon: GithubIcon },
      ],
      status: "Private",
    },
    {
      title: "WORKSHOP MULTIFAB",
      description: "Industrial workshop management application designed to optimize production tracking and internal logistics through mobile integration.",
      image: "/images/workshop-multifab.png",
      tags: ["Dart"],
      links: [
        { name: "Private", url: "https://github.com/bagir786/workshop", icon: GithubIcon },
      ],
      status: "Private",
    },
    {
      title: "GYM TRACKING",
      description: "A comprehensive fitness tracking application designed to monitor workout progress, exercise sets, and personal health metrics with a mobile-first interface.",
      image: "/images/gym-tracking.png",
      tags: ["Dart", "Python"],
      links: [
        { name: "Private", url: "https://github.com/MohFahmi27/gym_tracking", icon: GithubIcon },
      ],
      status: "Private",
    },
  ] as Project[],
};
