import Section from '../layout/Section';
import Card from '../ui/Card';
import Reveal from '../ui/Reveal';
import { experiences } from '../../data/experience';

function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Current software development experience."
      description="Backend API work, authentication flows, database-backed features, and React integration in a real product setting."
    >
      <div className="relative pl-6 sm:pl-8">
        <div className="absolute left-2 top-0 h-full w-px bg-border sm:left-3" />
        <div className="grid gap-6">
          {experiences.map((item, index) => (
            <Reveal key={`${item.company}-${item.role}`} delay={index * 0.08}>
              <div className="relative">
                <span className="absolute -left-[1.05rem] top-8 h-3.5 w-3.5 border border-border bg-accent sm:-left-[1.28rem]" />
                <Card className="p-6 sm:p-8">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.24em] text-muted">
                        {item.duration}
                      </p>
                      <h3 className="mt-3 text-2xl font-semibold text-text">{item.role}</h3>
                      <p className="mt-2 text-sm text-secondary">{item.company}</p>
                    </div>
                    <div className="rounded-md border border-border bg-background px-4 py-2 text-xs uppercase tracking-[0.18em] text-secondary">
                      Current role
                    </div>
                  </div>

                  <div className="mt-6 grid gap-3">
                    {item.points.map((point) => (
                      <div key={point} className="flex gap-3 text-sm leading-7 text-secondary">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default Experience;
