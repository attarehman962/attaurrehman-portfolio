import { motion } from 'framer-motion';
import Section from '../layout/Section';
import Button from '../ui/Button';
import { profile, socialLinks } from '../../data/profile';

function Hero() {
  const imageTransition = {
    duration: 0.45,
    ease: [0.22, 1, 0.36, 1]
  };

  return (
    <Section id="top" className="pt-28 sm:pt-32 lg:pt-36">
      <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-3 rounded-md border border-border bg-surface px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
              <span className="h-2 w-2 bg-accent" />
              Open to full-time backend roles — available now
            </div>

            <div className="space-y-5">
              <p className="text-base font-semibold text-accent">{profile.name}</p>
              <h1 className="max-w-4xl text-4xl font-semibold leading-[1.05] text-text sm:text-6xl lg:text-7xl">
                {profile.headline}
              </h1>
              <p className="max-w-3xl text-base leading-8 text-secondary sm:text-lg">
                {profile.summary}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, ...imageTransition }}
            className="flex flex-wrap gap-3"
          >
            {socialLinks.map((link, index) => (
              <Button
                key={link.label}
                href={link.href}
                variant={index === 0 ? 'primary' : index === 1 ? 'secondary' : 'ghost'}
                download={link.download}
              >
                {link.label}
              </Button>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, ...imageTransition }}
            className="flex flex-wrap gap-2"
          >
            {profile.heroFacts.map((item) => (
              <a
                key={item}
                href="#project-security-misconfiguration-scanner"
                className="rounded-md border border-border bg-surface px-3 py-2 text-sm font-medium text-secondary transition hover:border-accent/50 hover:text-text"
              >
                {item}
              </a>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22, ...imageTransition }}
            className="text-sm text-muted"
          >
            BSCS at FAST-NUCES · Software Developer Intern at QuantumLogicsLabs
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.16, ...imageTransition }}
          className="border border-border bg-surface p-5 shadow-panel"
        >
          <div className="mb-5 flex items-center justify-between border-b border-border pb-4">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
              scanner output
            </p>
            <span className="rounded-md bg-accent px-2.5 py-1 text-xs font-semibold text-white">
              CI passed
            </span>
          </div>
          <div className="space-y-3 font-mono text-sm text-secondary">
            <p><span className="text-accent">$</span> scan https://example.com --report</p>
            <p>10 checks completed · 3 findings</p>
            <p>missing-header: Content-Security-Policy</p>
            <p>cors-policy: wildcard origin detected</p>
            <p className="text-text">report: exports/security-audit.pdf</p>
          </div>
          <div className="mt-6 grid grid-cols-3 border border-border text-center text-xs text-secondary">
            {['Manual check', 'Automated scan', 'PDF report'].map((step) => (
              <div key={step} className="border-r border-border px-3 py-3 last:border-r-0">
                {step}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

export default Hero;
