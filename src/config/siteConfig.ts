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
  location: string;
  points: string[];
  tech: string[];
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
  name: "Vignan Cheepurupalli",
  title: "Frontend • Full Stack",
  tagline: "I build fast, clean, and user-focused web applications.",
  intro: "Frontend-focused developer with full-stack experience. I enjoy building responsive, performant applications and am currently exploring AI-powered solutions.",
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
      role: "UI/UX Designer",
      company: "SudoMade",
      duration: "Oct 2025 — Jan 2026",
      location: "Remote",
      points: [
        "Designed core user-facing and internal interfaces for an early-stage startup web platform.",
        "Collaborated with founders and team members through ideation, design reviews, and feedback cycles.",
        "Created low-fidelity wireframes and translated them into high-fidelity UI designs.",
        "Designed complete admin panel experience including dashboards, order management, and product workflows.",
        "Focused on usability, clarity, and scalability across all interfaces."
      ],
      tech: ["Figma"]
    },
    {
      role: "Web Developer (Graduate Client Project)",
      company: "Depth Training & Physiotherapy",
      duration: "Sep 2025 — Dec 2025",
      location: "Ontario, Canada · Remote",
      points: [
        "Built dynamic, content-driven frontend pages using Next.js and Tailwind CSS, improving content scalability and reducing manual updates.",
        "Integrated Sanity CMS with schema design and GROQ queries.",
        "Developed reusable React components ensuring responsive and accessible UI.",
        "Collaborated in Agile workflow using Jira and GitHub feature branches.",
        "Delivered production-ready features with optimized performance and consistent rendering across devices, enhancing user experience."
      ],
      tech: ["Next.js", "React", "Tailwind", "Sanity CMS"]
    },
    {
      role: "UI/UX Designer (Graduate Client Project)",
      company: "Wilfrid Laurier University",
      duration: "Jan 2025 — Apr 2025",
      location: "Brantford, Ontario, Canada",
      points: [
        "Conducted user research and translated findings into personas and user flows.",
        "Designed structured wireframes and high-fidelity prototypes using Balsamiq and Figma.",
        "Improved usability through iterative design reviews and feedback cycles.",
        "Developed navigation and interaction systems focused on clarity and discoverability."
      ],
      tech: ["Figma", "Balsamiq", "User Research"]
    }
  ],
};

export default siteConfig;
