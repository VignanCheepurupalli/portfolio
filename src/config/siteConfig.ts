export interface Project {
  title: string;
  subtitle: string;
  description: string;
  points: string[];
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
  intro:
    "Frontend-focused developer with full-stack experience. I enjoy building responsive, performant applications and am currently exploring AI-powered solutions.",
  about:
    "I'm a web developer passionate about creating minimal, functional, and beautiful digital experiences. With a focus on modern JavaScript frameworks and cloud-native architectures, I build products that are fast, accessible, and delightful to use.",
  email: "vignan.ft05@gmail.com",

  socialLinks: {
    github: "https://github.com/VignanCheepurupalli",
    linkedin: "https://www.linkedin.com/in/vignan-cheepurupalli-136996208/",
  },

  navLinks: [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],

  // ✅ CLEAN PROJECTS (ONLY REAL ONE FOR NOW)
  projects: [
    {
      title: "Depth Training Platform",
      subtitle:
        "Production-grade CMS-driven fitness & physiotherapy platform",
      description:
        "Built a full-stack, content-driven web platform for a real physiotherapy client, enabling dynamic service pages and rehabilitation content.",
      points: [
        "Developed dynamic frontend using Next.js and Tailwind CSS, improving content scalability",
        "Designed and implemented Sanity CMS schemas and GROQ queries",
        "Built reusable React components with responsive and accessible design",
        "Delivered production-ready features with consistent performance across devices",
      ],
      techStack: ["Next.js", "React", "Tailwind CSS", "Sanity CMS"],
      githubUrl: "",
      liveUrl: "",
      caseStudyUrl: "",
      showLinks: false,
    },
    {
      title: "ScanExpense",
      subtitle: "Android receipt scanner with ML-based text extraction",
      description:
        "Built a mobile application to scan receipts and automatically extract expense data using Google ML Kit.",
      points: [
        "Implemented real-time receipt scanning using camera and ML Kit text recognition",
        "Developed parsing logic to extract key fields like date and total using regex",
        "Built SQLite-based storage with CRUD operations and expense history tracking",
        "Visualized expense data using charts for category-based insights"
      ],
      techStack: ["Java", "Android", "SQLite", "ML Kit"],
      githubUrl: "",
      liveUrl: "",
      caseStudyUrl: "",
      showLinks: false
    },
    {
      title: "Inventory Analytics Dashboard",
      subtitle: "Data analysis and forecasting dashboard using R & Shiny",
      description:
        "Built an interactive dashboard to analyze retail inventory data and forecast demand using statistical and machine learning models.",
      points: [
        "Performed data cleaning and exploratory analysis using dplyr and ggplot2",
        "Built predictive models including Decision Tree, Random Forest, and time-series forecasting",
        "Developed interactive Shiny dashboard with filters for brand and pricing insights",
        "Visualized trends in inventory, ratings, and demand for better decision-making"
      ],
      techStack: ["R", "Shiny", "ggplot2", "dplyr", "Machine Learning"],
      githubUrl: "",
      liveUrl: "",
      caseStudyUrl: "",
      showLinks: false
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
        "Focused on usability, clarity, and scalability across all interfaces.",
      ],
      tech: ["Figma"],
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
        "Delivered production-ready features with optimized performance and consistent rendering across devices, enhancing user experience.",
      ],
      tech: ["Next.js", "React", "Tailwind", "Sanity CMS"],
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
        "Developed navigation and interaction systems focused on clarity and discoverability.",
      ],
      tech: ["Figma", "Balsamiq", "User Research"],
    },
  ],
};

export default siteConfig;