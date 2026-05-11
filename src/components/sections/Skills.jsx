import Section from '../layout/Section';
import Badge from '../ui/Badge';
import Card from '../ui/Card';
import Reveal from '../ui/Reveal';
import { coreConcepts, skillGroups } from '../../data/skills';

function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Modern frontend, backend, and database tooling."
      description="The stack coverage highlights product delivery across UI, APIs, authentication, databases, migration workflows, and real application concepts."
    >
      <div className="grid gap-5 sm:gap-6 lg:grid-cols-2">
        {skillGroups.map((group, index) => (
          <Reveal key={group.title} delay={index * 0.08}>
            <Card className="h-full p-5 sm:p-7">
              <div className="space-y-4">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.24em] text-muted">
                    {group.title}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-secondary">{group.description}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-6">
        <Card className="p-5 sm:p-7">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="max-w-lg">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-muted">
                Core concepts
              </p>
              <h3 className="mt-3 text-xl font-semibold text-text sm:text-2xl">
                Application patterns that matter in real projects.
              </h3>
            </div>
            <div className="flex max-w-2xl flex-wrap gap-2">
              {coreConcepts.map((concept) => (
                <Badge key={concept}>{concept}</Badge>
              ))}
            </div>
          </div>
        </Card>
      </Reveal>
    </Section>
  );
}

export default Skills;
