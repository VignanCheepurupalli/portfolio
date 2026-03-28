export interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  caseStudyUrl?: string;
  showLinks: boolean;
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  tagline: string;
  intro: string;
  about: string;
  email: string;
  socialLinks: {
    github: string;
    linkedin: string;
  };
  navLinks: { label: string; href: string }[];
  projects: Project[];
  skills: string[];
  experience: Experience[];
}

const siteConfig: SiteConfig = {
  name: "Alex Morgan",
  title: "Web Developer",
  tagline: "Building elegant, performant web experiences with modern technologies.",
  intro: "I craft clean, user-centric interfaces and robust applications that solve real problems.",
  about:
    "I'm a web developer passionate about creating minimal, functional, and beautiful digital experiences. With a focus on modern JavaScript frameworks and cloud-native architectures, I build products that are fast, accessible, and delightful to use. When I'm not coding, you'll find me exploring new technologies, contributing to open source, or writing about web development.",
  email: "hello@alexmorgan.dev",
  socialLinks: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
  navLinks: [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],
  projects: [
    {
      title: "Cloud Dashboard",
      description:
        "A real-time analytics dashboard for monitoring cloud infrastructure metrics with interactive visualizations.",
      techStack: ["React", "TypeScript", "D3.js", "Tailwind CSS"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      caseStudyUrl: "/case-study/cloud-dashboard",
      showLinks: false,
    },
    {
      title: "DevFlow",
      description:
        "A developer productivity tool that streamlines CI/CD workflows and provides intelligent code review suggestions.",
      techStack: ["Next.js", "Node.js", "PostgreSQL", "Docker"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      caseStudyUrl: "/case-study/devflow",
      showLinks: false,
    },
    {
      title: "Minimal CMS",
      description:
        "A headless content management system designed for speed and simplicity, with a clean editing experience.",
      techStack: ["Vue.js", "Express", "MongoDB", "GraphQL"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      caseStudyUrl: "/case-study/minimal-cms",
      showLinks: false,
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "PostgreSQL",
    "MongoDB",
    "Docker",
    "AWS",
    "Git",
    "Tailwind CSS",
    "GraphQL",
    "REST APIs",
    "CI/CD",
  ],
  experience: [
    {
      role: "Senior Frontend Developer",
      company: "TechCorp",
      duration: "2022 — Present",
      description:
        "Leading the frontend architecture for a SaaS platform serving 50k+ users. Built a component library and design system from scratch.",
    },
    {
      role: "Full Stack Developer",
      company: "StartupXYZ",
      duration: "2020 — 2022",
      description:
        "Developed and maintained multiple client-facing applications. Implemented real-time features and optimized performance by 40%.",
    },
    {
      role: "Junior Developer",
      company: "Digital Agency Co.",
      duration: "2018 — 2020",
      description:
        "Built responsive websites and web applications for clients across various industries. Worked closely with designers and project managers.",
    },
  ],
};

export default siteConfig;
