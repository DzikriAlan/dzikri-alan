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

export const landingFaqs = [
  {
    question: "What projects do you work on?",
    answer:
      "Mostly AI-driven web products and full-stack platforms — interactive AI chat interfaces, geospatial and statistical data visualization, semantic search, and fact-checking tools, alongside production SaaS work like Chaplin, Blayer, and Casetudy.",
  },
  {
    question: "Do you work remotely or on-site?",
    answer:
      "I'm based in Bandung, Jawa Barat, and work remotely with teams and clients across time zones — I've done this for 3 years at Kazee Digital Indonesia and Surya Microsystems, collaborating async with cross-functional teams.",
  },
  {
    question: "What's your tech stack and tooling?",
    answer:
      "Vue.js, Nuxt, Next.js, React, and TypeScript on the frontend; Node.js, NestJS, Prisma, and PostgreSQL on the backend; plus SSE/WebSockets for real-time streaming and Claude Code, DeepSeek, and prompt engineering for AI-driven workflows.",
  },
  {
    question: "Can I see more of your work?",
    answer:
      "Yes — check the Experience & Projects section above for case studies like Chaplin, Blayer, Kazee Smartboard, and the LSP Exam System, or reach out directly for a deeper walkthrough.",
  },
  {
    question: "How can I start a new project?",
    answer:
      "Send me an email or a message on WhatsApp with a short brief of what you're building — I'll get back to you to discuss requirements, scope, and timeline in more detail.",
  },
];

export const landingExperience = [
  {
    period: "2023 — Present",
    company: "Kazee Digital Indonesia",
    role: "Frontend Developer",
    description:
      "Designed scalable frontend architecture with Vue and TypeScript across 3 products, engineered interactive AI chat interfaces with real-time streaming, and automated API generation to cut development turnaround by 40%.",
    logo: "/experience/kazee-logo.webp",
    image: "/experience/kazee-activity.webp",
    current: true,
  },
  {
    period: "2023",
    company: "Surya Microsystems International",
    role: "Frontend Developer",
    description:
      "Applied component-based frontend approaches with Vue.js and Element Plus across concurrent client projects, and maintained production apps including the LSP Exam System, Cost Control App, and Village Website.",
    logo: "/experience/surya-logo.webp",
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
      "I had a great experience working with Dzikri. He consistently delivered clean, high-quality work and demonstrated strong technical skills. Communication was always clear and professional, making collaboration smooth and efficient. Dzikri is reliable, easy to work with, and always committed to delivering the best results. I highly recommend him for any team or project.",
    name: "Farhan Muhamad S.",
    role: "Founder, Coptera Career",
    linkedinUrl: "https://www.linkedin.com/in/farhan-muhamad/",
    avatar: farhanmuhammadAvatar,
  },
  {
    quote:
      "He has a strong sense of curiosity and is always eager to learn and grow. His frontend skills are excellent, and he's also a capable full-stack engineer. He's easy to work with, an effective team player, and even in high-pressure situations, he helps keep discussions calm and productive. On top of that, he has a strong sense of ownership—once he takes responsibility for something, he makes sure it's delivered well.\n\nI'm confident he'll continue to grow and become an even stronger, well-rounded engineer in the future.",
    name: "Muhammad Abdulhadi",
    role: "AI Engineer, Frisidea Tech",
    linkedinUrl: "https://www.linkedin.com/in/muhammad-abdulhadi-756167212/",
    avatar: abdulhadiAvatar,
  },
];

