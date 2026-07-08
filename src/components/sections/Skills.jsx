import Section from '../layout/Section';
import Badge from '../ui/Badge';
import Card from '../ui/Card';
import Reveal from '../ui/Reveal';
import { coreConcepts, skillGroups } from '../../data/skills';

function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Stack"
      title="Skills grouped by evidence."
      description="Tools used across backend automation, security scanning, CRM workflows, and document processing."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
                Core concepts
              </p>
              <h3 className="mt-3 text-xl font-semibold text-text sm:text-2xl">
                Patterns recruiters can ask about immediately.
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
