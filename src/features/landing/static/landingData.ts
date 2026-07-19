import { Star, CheckCircle2, Layers } from "lucide-react";

import blayerPorto from "@/shared/assets/blayer-porto.webp";
import chaplinPorto from "@/shared/assets/chaplin-porto.webp";
import abdulhadiAvatar from "@/shared/assets/abdulhadi.webp";
import farhanmuhammadAvatar from "@/shared/assets/farhanmuhammad.webp";

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

// period/company/logo/image/current live here; role/description are
// localized via i18n `work.experience` (same order).
export const landingExperience = [
  {
    period: "2023 — Present",
    company: "Kazee Digital Indonesia",
    logo: "/experience/kazee-logo.webp",
    image: "/experience/kazee-activity.webp",
    current: true,
  },
  {
    period: "2023",
    company: "Surya Microsystems International",
    logo: "/experience/surya-logo.webp",
    image: "/experience/surya-activity.webp",
    current: false,
  },
];

// title/tags/image live here; category/description are localized via
// i18n `work.projects` (same order).
export const landingProjects = [
  {
    title: "Media Monitoring",
    tags: ["Vue.js", "Pinia", "Mapbox GL JS"],
    image: "/work/medmon.webp",
  },
  {
    title: "Trendnow AI",
    tags: ["Vue.js", "TypeScript"],
    image: "/work/trendnowai.webp",
  },
  {
    title: "AI Search",
    tags: ["Vue.js", "AI Integration"],
    image: "/work/aisearch.webp",
  },
  {
    title: "Chaplin",
    tags: ["Next.js", "TypeScript", "TanStack Query", "NextAuth.js"],
    image: chaplinPorto,
  },
  {
    title: "Kazee Smartboard",
    tags: ["Vue.js", "SSE/WebSockets", "Pinia"],
    image: "/work/smartboard.webp",
  },
  {
    title: "LSP Exam System",
    tags: ["Vue.js", "Laravel"],
    image: "/work/lsp.webp",
  },
  {
    title: "Cost Control App",
    tags: ["Vue.js", "CodeIgniter"],
    image: "/work/cost.webp",
  },
  {
    title: "Sipadatasih",
    tags: ["Vue.js", "JavaScript"],
    image: "/work/lurah.webp",
  },
  {
    title: "Blayer",
    tags: ["Next.js", "TypeScript", "Prisma", "TanStack Query"],
    image: blayerPorto,
  },
  {
    title: "Casetudy",
    tags: ["Next.js", "Tailwind CSS"],
    image: "/work/casetudy.webp",
  },
];

// Quote text lives in the i18n translation files (`testimonials` array,
// same order as below) so it can be localized; only non-text data stays here.
export const landingTestimonials = [
  {
    name: "Farhan Muhamad S.",
    role: "Founder, Coptera Career",
    linkedinUrl: "https://www.linkedin.com/in/farhan-muhamad/",
    avatar: farhanmuhammadAvatar,
  },
  {
    name: "Muhammad Abdulhadi",
    role: "AI Engineer, Frisidea Tech",
    linkedinUrl: "https://www.linkedin.com/in/muhammad-abdulhadi-756167212/",
    avatar: abdulhadiAvatar,
  },
];

