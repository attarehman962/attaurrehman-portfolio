import Section from '../layout/Section';
import Card from '../ui/Card';
import Reveal from '../ui/Reveal';
import { profile } from '../../data/profile';

const pillars = [
  {
    title: 'Full-stack delivery',
    copy:
      'Builds complete systems rather than isolated pages, including frontend flows, backend APIs, auth boundaries, and persistence layers.'
  },
  {
    title: 'Backend-first thinking',
    copy:
      'Prioritizes API structure, validation, security, and clean database design so products remain stable as they scale.'
  },
  {
    title: 'Practical engineering',
    copy:
      'Focuses on maintainable architecture, reliable CRUD workflows, protected routes, and production-minded implementation details.'
  }
];

function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Engineering-focused developer branding."
      description="The portfolio positions Atta as a serious full stack engineer with clear backend depth, strong frontend execution, and practical project architecture."
    >
      <div className="grid gap-5 sm:gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal>
          <Card className="space-y-5 p-6 sm:p-8">
            {profile.about.map((paragraph) => (
              <p key={paragraph} className="text-sm leading-8 text-secondary sm:text-base">
                {paragraph}
              </p>
            ))}
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
    </Section>
  );
}

export default About;
