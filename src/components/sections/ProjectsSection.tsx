import { ExternalLink, Github, FileText } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import siteConfig from "@/config/siteConfig";

const ProjectsSection = () => (
  <section id="projects" className="py-24 sm:py-32">
    <div className="container">
      <FadeIn>
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground mb-12">
          Projects
        </h2>
      </FadeIn>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {siteConfig.projects.map((project, i) => (
          <FadeIn key={project.title} delay={i * 0.1}>
            <div className="group rounded-lg border border-border bg-card p-6 hover:border-muted-foreground/30 transition-colors duration-300 h-full flex flex-col">
              <h3 className="text-lg font-semibold text-card-foreground mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {project.showLinks && (
                <div className="flex items-center gap-4 pt-2 border-t border-border">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                      aria-label="GitHub"
                    >
                      <Github size={16} />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                      aria-label="Live Demo"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                  {project.caseStudyUrl && (
                    <a
                      href={project.caseStudyUrl}
                      className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                      aria-label="Case Study"
                    >
                      <FileText size={16} />
                    </a>
                  )}
                </div>
              )}
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
