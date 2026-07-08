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
      title="Case studies built around problems, not buzzwords."
      description="The lead project is security automation; the supporting work shows authenticated backends, data workflows, and product delivery."
    >
      <div className="grid gap-5 sm:gap-6">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={index * 0.08}>
            <div id={project.id} className="scroll-mt-28">
              <Card hover className={`overflow-hidden p-0 ${index === 0 ? 'border-accent/45' : ''}`}>
                <div className="grid gap-0 lg:grid-cols-[1.12fr_0.88fr]">
                  <div className="space-y-6 p-5 sm:p-8">
                    <div className="space-y-4">
                      <div className="flex flex-wrap items-center gap-3">
                        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
                          0{index + 1}
                        </p>
                        <span className="rounded-md border border-border bg-background px-3 py-1 text-xs font-medium text-secondary">
                          {project.subtitle}
                        </span>
                        {index === 0 ? (
                          <span className="rounded-md bg-accent px-3 py-1 text-xs font-semibold text-white">
                            Flagship
                          </span>
                        ) : null}
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

                    <div className="grid gap-4">
                      {[
                        ['Problem', project.problem],
                        ['Approach', project.approach],
                        ['Result', project.result]
                      ].map(([label, copy]) => (
                        <div key={label} className="grid gap-2 border-l-2 border-accent/35 pl-4 sm:grid-cols-[7rem_1fr] sm:gap-4">
                          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                            {label}
                          </p>
                          <p className="text-sm leading-7 text-secondary">{copy}</p>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((item) => (
                        <Badge key={item}>{item}</Badge>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <Button href={project.github} className="sm:min-w-[11rem]">
                        Repository
                      </Button>
                      <Button href={project.live} variant="secondary" className="sm:min-w-[9rem]">
                        Demo / Details
                      </Button>
                    </div>
                  </div>

                  <div className="border-t border-border bg-background p-5 sm:p-8 lg:border-l lg:border-t-0">
                    <div className="mb-6">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                        Evidence
                      </p>
                      <h4 className="mt-3 text-xl font-semibold text-text">{project.summary}</h4>
                    </div>

                    {index === 0 ? (
                      <div className="mb-6 flex min-h-40 items-center justify-center border border-dashed border-border bg-surface p-5 text-center">
                        <p className="text-sm leading-6 text-muted">
                          Screenshot / demo GIF placeholder
                        </p>
                      </div>
                    ) : null}

                    <div className="space-y-3">
                      {project.proof.map((item) => (
                        <div key={item} className="flex gap-3 text-sm leading-7 text-secondary">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-7 border border-border bg-surface p-4 font-mono text-xs text-secondary">
                      {project.preview.map((line) => (
                        <p key={line} className="break-words leading-6">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export default Projects;
