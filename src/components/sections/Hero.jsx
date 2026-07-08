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
      <div className="grid items-center gap-8 lg:grid-cols-[1fr_0.92fr] lg:gap-12">
        <div className="min-w-0 space-y-7 sm:space-y-8">
          <motion.div
            initial={{ y: 18 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-5 sm:space-y-6"
          >
            <div className="inline-flex max-w-full items-center gap-2 rounded-md border border-border bg-surface px-3 py-2 text-xs font-semibold leading-5 text-secondary sm:gap-3">
              <span className="h-2 w-2 shrink-0 bg-accent" />
              <span>Open to full-time backend roles — available now</span>
            </div>

            <div className="space-y-5">
              <p className="text-base font-semibold text-accent">{profile.name}</p>
              <h1 className="max-w-3xl break-words text-[1.7rem] font-semibold leading-[1.14] text-text min-[380px]:text-3xl sm:text-4xl lg:text-5xl">
                {profile.headline}
              </h1>
              <p className="max-w-3xl text-[0.95rem] leading-7 text-secondary sm:text-lg sm:leading-8">
                {profile.summary}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 12 }}
            animate={{ y: 0 }}
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
            initial={{ y: 12 }}
            animate={{ y: 0 }}
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
            initial={{ y: 12 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.22, ...imageTransition }}
          className="max-w-xl text-sm leading-6 text-muted"
        >
          BSCS at FAST-NUCES · Software Developer Intern at QuantumLogicsLabs
          </motion.p>
        </div>

        <motion.div
          initial={{ y: 18 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.16, ...imageTransition }}
          className="min-w-0 overflow-hidden border border-border bg-surface p-4 shadow-panel sm:p-5"
        >
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3 border-b border-border pb-4">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
              scanner output
            </p>
            <span className="rounded-md bg-accent px-2.5 py-1 text-xs font-semibold text-white">
              CI passed
            </span>
          </div>
          <div className="space-y-3 overflow-hidden font-mono text-xs leading-6 text-secondary sm:text-sm">
            <p className="break-all"><span className="text-accent">$</span> scan https://example.com --report</p>
            <p className="break-words">10 checks completed · 3 findings</p>
            <p className="break-words">missing-header: Content-Security-Policy</p>
            <p className="break-words">cors-policy: wildcard origin detected</p>
            <p className="break-all text-text">report: exports/security-audit.pdf</p>
          </div>
          <div className="mt-6 grid border border-border text-center text-xs text-secondary sm:grid-cols-3">
            {['Manual check', 'Automated scan', 'PDF report'].map((step) => (
              <div key={step} className="border-b border-border px-3 py-3 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0">
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
