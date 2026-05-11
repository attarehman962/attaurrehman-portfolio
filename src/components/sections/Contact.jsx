import Section from '../layout/Section';
import Button from '../ui/Button';
import Card from '../ui/Card';
import Reveal from '../ui/Reveal';
import { profile } from '../../data/profile';

const contactMethods = [
  {
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/attaurrehman962',
    href: profile.linkedin
  },
  {
    label: 'GitHub',
    value: 'github.com/attarehman962',
    href: profile.github
  }
];

function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Available for internships, freelance projects, and full-stack development collaborations."
      description="The closing section is built to convert recruiter, client, or collaborator interest into a direct message with minimal friction."
    >
      <div className="grid gap-5 sm:gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal>
          <Card className="space-y-6 p-5 sm:p-8">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-muted">
                Reach out
              </p>
              <p className="mt-4 max-w-xl text-base leading-8 text-secondary">
                If you are hiring for internships, reviewing student talent, or need a
                developer who can build React frontends, FastAPI backends, authentication
                systems, dashboards, and database-driven products, Atta is available for the
                conversation.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button href={`mailto:${profile.email}`}>Email Me</Button>
              <Button href={profile.linkedin} variant="secondary">
                LinkedIn
              </Button>
              <Button href={profile.github} variant="ghost">
                GitHub
              </Button>
            </div>
          </Card>
        </Reveal>

        <div className="grid gap-4">
          {contactMethods.map((method, index) => (
            <Reveal key={method.label} delay={index * 0.08}>
              <Card className="p-5 sm:p-6">
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-muted">
                  {method.label}
                </p>
                <a
                  href={method.href}
                  {...(method.href.startsWith('http')
                    ? { target: '_blank', rel: 'noreferrer' }
                    : {})}
                  className="mt-3 block break-all text-base font-medium text-text transition hover:text-secondary sm:text-lg sm:break-normal"
                >
                  {method.value}
                </a>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default Contact;
