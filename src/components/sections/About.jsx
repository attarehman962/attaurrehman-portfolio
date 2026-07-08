import Section from '../layout/Section';
import Badge from '../ui/Badge';
import Card from '../ui/Card';
import Reveal from '../ui/Reveal';
import { profile } from '../../data/profile';
import { skillGroups } from '../../data/skills';

const pillars = [
  {
    title: 'Automation-first',
    copy:
      'Looks for repetitive checks and manual workflows, then turns them into repeatable backend systems.'
  },
  {
    title: 'Backend depth',
    copy:
      'Prioritizes API structure, validation, authentication, relational data, migrations, and testable service boundaries.'
  },
  {
    title: 'Proof over claims',
    copy:
      'Uses shipped projects, GitHub repos, Docker setups, CI checks, and case-study details to show the work clearly.'
  }
];

function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Backend developer focused on practical automation."
      description="Short bio, clear direction, and no generic personal essay."
    >
      <div className="grid gap-5 sm:gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal>
          <Card className="space-y-5 p-6 sm:p-8">
            {profile.about.map((paragraph) => (
              <p key={paragraph} className="text-sm leading-8 text-secondary sm:text-base">
                {paragraph}
              </p>
            ))}

            <div className="flex flex-wrap gap-2 border-t border-border pt-5 text-sm font-medium text-secondary">
              <span>3 shipped projects</span>
              <span className="text-muted">·</span>
              <span>Software Developer Intern at QuantumLogicsLabs</span>
              <span className="text-muted">·</span>
              <span>FAST-NUCES '26</span>
            </div>

            <div className="grid gap-3 border-t border-border pt-5 sm:grid-cols-3">
              {profile.highlights.map((item) => (
                <div key={item.label}>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-text">{item.value}</p>
                </div>
              ))}
            </div>
          </Card>
        </Reveal>

        <div className="grid gap-6">
          {pillars.map((pillar, index) => (
            <Reveal key={pillar.title} delay={index * 0.08}>
              <Card className="p-5 sm:p-6">
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-muted">
                  0{index + 1}
                </p>
                <h3 className="mt-4 text-xl font-semibold text-text">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-7 text-secondary">{pillar.copy}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal className="mt-6">
        <Card className="p-5 sm:p-7">
          <div className="mb-6">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
              Skills
            </p>
            <h3 className="mt-3 text-xl font-semibold text-text sm:text-2xl">
              Tools grouped by where they show up in the work.
            </h3>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <h4 className="text-sm font-semibold text-text">{group.title}</h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </Reveal>
    </Section>
  );
}

export default About;
