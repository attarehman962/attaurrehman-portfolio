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
  },
  {
    label: 'Resume',
    value: 'Download PDF',
    href: '/resume.pdf',
    download: true
  }
];

function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Open to backend, automation, and security tooling roles — full-time."
      description="Email, GitHub, LinkedIn, and resume - the recruiter path stays short."
    >
      <div className="grid gap-5 sm:gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal>
          <Card className="space-y-6 p-5 sm:p-8">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-muted">
                Reach out
              </p>
              <p className="mt-4 max-w-xl text-sm leading-7 text-secondary sm:text-base sm:leading-8">
                If you are hiring for backend roles, junior Python positions, or automation-heavy
                tooling work, Atta is available for the conversation.
              </p>
            </div>

            <div className="grid gap-3 sm:flex sm:flex-wrap">
              <Button href={`mailto:${profile.email}`}>Email</Button>
              <Button href="/resume.pdf" variant="secondary" download>
                Resume
              </Button>
              <Button href={profile.github} variant="secondary">GitHub</Button>
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
                  {...(method.download ? { download: true } : {})}
                  {...(method.href.startsWith('http')
                    ? { target: '_blank', rel: 'noreferrer' }
                    : {})}
                  className="mt-3 block break-all text-sm font-medium text-text transition hover:text-secondary sm:text-lg sm:break-normal"
                >
                  {method.value}
                </a>
              </Card>
            </Reveal>
          ))}
          <Reveal delay={contactMethods.length * 0.08}>
            <Card className="p-5 sm:p-6">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-muted">
                Response
              </p>
              <p className="mt-3 text-sm font-medium text-text sm:text-lg">
                Usually responds within 24 hours.
              </p>
            </Card>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

export default Contact;
