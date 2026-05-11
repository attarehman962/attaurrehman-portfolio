import Section from '../layout/Section';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import Card from '../ui/Card';
import Reveal from '../ui/Reveal';
import { projects } from '../../data/projects';

function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Featured builds with real engineering depth."
      description="Each project is framed around architecture, security, data workflows, and practical product execution rather than beginner-level showcase copy."
    >
      <div className="grid gap-5 sm:gap-6">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={index * 0.08}>
            <Card hover className="overflow-hidden p-0">
              <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
                <div className="space-y-6 p-5 sm:p-8">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <p className="font-mono text-xs uppercase tracking-[0.24em] text-muted">
                        0{index + 1}
                      </p>
                      <span className="rounded-full border border-border bg-text/5 px-3 py-1 text-xs text-secondary">
                        {project.subtitle}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-text sm:text-3xl">
                        {project.title}
                      </h3>
                      <p className="mt-3 max-w-2xl text-sm leading-8 text-secondary sm:text-base">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                      <Badge key={item}>{item}</Badge>
                    ))}
                  </div>

                  <div className="grid gap-6 lg:grid-cols-2">
                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.24em] text-muted">
                        Key features
                      </p>
                      <div className="mt-4 space-y-3">
                        {project.features.map((feature) => (
                          <div key={feature} className="flex gap-3 text-sm leading-7 text-secondary">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-text" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.24em] text-muted">
                        Engineering highlights
                      </p>
                      <div className="mt-4 space-y-3">
                        {project.engineering.map((item) => (
                          <div key={item} className="flex gap-3 text-sm leading-7 text-secondary">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-text" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Button href={project.github} className="sm:min-w-[11rem]">
                      GitHub Repository
                    </Button>
                    <Button href={project.live} variant="secondary" className="sm:min-w-[9rem]">
                      Live Demo
                    </Button>
                  </div>
                </div>

                <div className="border-t border-border bg-background/70 p-5 sm:p-8 lg:border-l lg:border-t-0">
                  <div className="rounded-3xl border border-border bg-background/80 p-5 font-mono text-sm text-secondary">
                    <div className="mb-5 flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-text/60" />
                      <span className="h-2.5 w-2.5 rounded-full bg-text/35" />
                      <span className="h-2.5 w-2.5 rounded-full bg-text/20" />
                    </div>
                    <p className="mb-4 text-xs uppercase tracking-[0.24em] text-muted">
                      {project.summary}
                    </p>
                    <div className="space-y-3">
                      {project.preview.map((line) => (
                        <p key={line} className="break-words leading-7">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export default Projects;
