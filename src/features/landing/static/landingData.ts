import {
  Code2,
  Box,
  Zap,
  Globe,
  Star,
  CheckCircle2,
  Layers,
} from "lucide-react";

import blayerPorto from "@/shared/assets/blayer-porto.png";
import chaplinPorto from "@/shared/assets/chaplin-porto.png";

export const landingHighlights = [
  { icon: Star, title: "3+ Years", subtitle: "Experience" },
  { icon: CheckCircle2, title: "Kazee Digital", subtitle: "Indonesia" },
  { icon: Layers, title: "Built", subtitle: "DzikriAlan" },
];

export const landingSkills = [
  { label: "Vue.js", icon: "/skills/vuejs.svg" },
  { label: "Nuxt.js", icon: "/skills/nuxtjs.webp" },
  { label: "React", icon: "/skills/react.svg" },
  { label: "Next.js", icon: "/skills/nextjs.webp" },
  { label: "TypeScript", icon: "/skills/typescript.svg" },
  { label: "JavaScript", icon: "/skills/javascript.svg" },
  { label: "Tailwind CSS", icon: "/skills/tailwind-css.svg" },
  { label: "Node.js", icon: "/skills/nodejs.svg" },
  { label: "PHP", icon: "/skills/php.svg" },
  { label: "Laravel", icon: "/skills/laravel.svg" },
  { label: "CodeIgniter", icon: "/skills/codeigniter.svg" },
  { label: "HTML", icon: "/skills/html.svg" },
  { label: "CSS", icon: "/skills/css.svg" },
];

export const landingServices = [
  {
    icon: Code2,
    title: "Frontend Architecture",
    description:
      "Designing and implementing scalable frontend architecture using Vue, React, Next.js, and TypeScript across production products.",
  },
  {
    icon: Box,
    title: "AI Chat Interfaces",
    description:
      "Engineering interactive AI chat interfaces with real-time data streaming (SSE/WebSockets) and robust state management.",
  },
  {
    icon: Zap,
    title: "Data Visualization",
    description:
      "Building geospatial and statistical visualization tools with Mapbox GL JS, Tegola, and complex charting libraries.",
  },
  {
    icon: Globe,
    title: "API Integration",
    description:
      "Optimizing prompt-driven API generation and high-performance API integration to speed up development turnaround.",
  },
];

export const landingExperience = [
  {
    period: "2023 — Present",
    company: "Kazee Digital Indonesia",
    role: "Frontend Developer",
    description:
      "Designed scalable frontend architecture with Vue and TypeScript across 3 products, engineered interactive AI chat interfaces with real-time streaming, and automated API generation to cut development turnaround by 40%.",
    logo: "/experience/kazee-logo.jpeg",
    image: "/experience/kazee-activity.webp",
    current: true,
  },
  {
    period: "2023",
    company: "Surya Microsystems International",
    role: "Frontend Developer",
    description:
      "Applied component-based frontend approaches with Vue.js and Element Plus across concurrent client projects, and maintained production apps including the LSP Exam System, Cost Control App, and Village Website.",
    logo: "/experience/surya-logo.jpeg",
    image: "/experience/surya-activity.webp",
    current: false,
  },
];

export const landingProjects = [
  {
    category: "Media Intelligence",
    title: "Media Monitoring",
    description:
      "Contributed to maintenance such as bug fixing and the creation of the media relations sub-feature.",
    tags: ["Vue.js", "Pinia", "Mapbox GL JS"],
    image: "/work/medmon.webp",
  },
  {
    category: "AI Platform",
    title: "Trendnow AI",
    description:
      "Contributed to the initial development, from the landing page to blog content management.",
    tags: ["Vue.js", "TypeScript"],
    image: "/work/trendnowai.webp",
  },
  {
    category: "AI Platform",
    title: "AI Search",
    description:
      "Contributed to design architecture planning and AI integration for semantic and contextual search.",
    tags: ["Vue.js", "AI Integration"],
    image: "/work/aisearch.webp",
  },
  {
    category: "AI Platform",
    title: "Chaplin",
    description:
      "Production-grade AI agent platform that turns a team's knowledge into AI agents for support and workflow automation, with real-time chat via SSE and WebSockets.",
    tags: ["Next.js", "TypeScript", "TanStack Query", "NextAuth.js"],
    image: chaplinPorto,
  },
  {
    category: "AI Platform",
    title: "Kazee Smartboard",
    description:
      "Contributed to design architecture planning and chatbot integration to analyze each widget's data.",
    tags: ["Vue.js", "SSE/WebSockets", "Pinia"],
    image: "/work/smartboard.webp",
  },
  {
    category: "Education",
    title: "LSP Exam System",
    description:
      "Contributed to the creation of many exam forms and determination of the exam application flow.",
    tags: ["Vue.js", "Laravel"],
    image: "/work/lsp.webp",
  },
  {
    category: "Finance",
    title: "Cost Control App",
    description:
      "Contributed to website maintenance, including bug fixing, dashboard feature optimization, and more.",
    tags: ["Vue.js", "CodeIgniter"],
    image: "/work/cost.webp",
  },
  {
    category: "Government",
    title: "Sipadatasih",
    description:
      "Contributed to the feature for community submission requests for personal document creation.",
    tags: ["Vue.js", "JavaScript"],
    image: "/work/lurah.webp",
  },
  {
    category: "Starter Kit",
    title: "Blayer",
    description:
      "Production-ready Next.js 14 starter with TypeScript, Tailwind CSS, TanStack Query, Zustand, and Prisma — built for rapid feature development with consistent architecture conventions.",
    tags: ["Next.js", "TypeScript", "Prisma", "TanStack Query"],
    image: blayerPorto,
  },
  {
    category: "Content",
    title: "Casetudy",
    description:
      "Curates high-quality Product & Design case studies so anyone can learn from real experience easily and relevantly.",
    tags: ["Next.js", "Tailwind CSS"],
    image: "/work/casetudy.webp",
  },
];

export const landingTestimonials = [
  {
    quote:
      "Great developer! Delivered high-quality work on time with excellent communication. Will hire again.",
    name: "John Doe",
    role: "CEO, TechStart",
  },
  {
    quote:
      "Dzikri is very professional and skilled. He understands requirements quickly and provides the best solutions.",
    name: "Sarah Lee",
    role: "Product Manager",
  },
  {
    quote:
      "Amazing experience working with Dzikri. Highly recommended for any frontend projects!",
    name: "Michael Wong",
    role: "Founder, DevLaunch",
  },
];

