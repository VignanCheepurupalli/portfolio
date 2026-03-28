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

      {/* Featured Project */}
      {siteConfig.projects[0] && (
        <div className="mb-10">
          <FadeIn>
            <div 
              onClick={() => {
                if (project.liveUrl) window.open(project.liveUrl, "_blank");
                else if (project.githubUrl) window.open(project.githubUrl, "_blank");
              }}
              className="group rounded-xl border border-border bg-card p-6 sm:p-8 
              hover:-translate-y-1 hover:scale-[1.01] 
              hover:shadow-xl dark:hover:shadow-white/10 
              transition-all duration-300 cursor-pointer"
            >
              <h3 className="text-xl font-semibold text-card-foreground mb-2">
                {siteConfig.projects[0].title}
              </h3>

              <p className="text-sm text-muted-foreground mb-3">
                {siteConfig.projects[0].subtitle}
              </p>

              <ul className="text-sm text-muted-foreground leading-relaxed mb-4 space-y-1">
                {siteConfig.projects[0].points.slice(0, 3).map((point, idx) => (
                  <li key={idx}>• {point}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mb-4">
                {siteConfig.projects[0].techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {siteConfig.projects[0].showLinks && (
                <div className="flex items-center gap-4 pt-2 border-t border-border">
                  {siteConfig.projects[0].githubUrl && (
                    <a
                      href={siteConfig.projects[0].githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      <Github size={16} />
                    </a>
                  )}
                  {siteConfig.projects[0].liveUrl && (
                    <a
                      href={siteConfig.projects[0].liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                  {siteConfig.projects[0].caseStudyUrl && (
                    <a
                      href={siteConfig.projects[0].caseStudyUrl}
                      className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      <FileText size={16} />
                    </a>
                  )}
                </div>
              )}
            </div>
          </FadeIn>
        </div>
      )}

      {/* Other Projects */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {siteConfig.projects.slice(1).map((project, i) => (
          <FadeIn key={project.title} delay={i * 0.1}>
            <div 
              onClick={() => {
                if (project.liveUrl) window.open(project.liveUrl, "_blank");
                else if (project.githubUrl) window.open(project.githubUrl, "_blank");
              }}
              className="group rounded-xl border border-border bg-card p-6 sm:p-8 
              hover:-translate-y-1 hover:scale-[1.01] 
              hover:shadow-xl dark:hover:shadow-white/10 
              transition-all duration-300 cursor-pointer"
            >
              <h3 className="text-lg font-semibold text-card-foreground mb-2">
                {project.title}
              </h3>

              <p className="text-sm text-muted-foreground mb-3">
                {project.subtitle}
              </p>

              <ul className="text-sm text-muted-foreground leading-relaxed mb-4 space-y-1">
                {project.points.slice(0, 2).map((point, idx) => (
                  <li key={idx}>• {point}</li>
                ))}
              </ul>

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
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                  {project.caseStudyUrl && (
                    <a
                      href={project.caseStudyUrl}
                      className="text-muted-foreground hover:text-foreground transition-colors duration-200"
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