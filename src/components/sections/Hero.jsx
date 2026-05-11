import { AnimatePresence, motion } from 'framer-motion';
import Section from '../layout/Section';
import Button from '../ui/Button';
import Card from '../ui/Card';
import { profile, socialLinks } from '../../data/profile';
import profileImage from '../../assets/profile.jpeg';
import profileDarkImage from '../../assets/profile1.jpeg';

function Hero({ theme }) {
  const activeProfileImage = theme === 'dark' ? profileDarkImage : profileImage;
  const imageTransition = {
    duration: 0.45,
    ease: [0.22, 1, 0.36, 1]
  };

  return (
    <Section id="top" className="pt-32 sm:pt-36 lg:pt-40">
      <div className="space-y-8 lg:space-y-10">
        <div className="grid items-center gap-8 lg:grid-cols-[1.35fr_0.95fr] lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            <div className="inline-flex items-center rounded-full border border-border bg-text/5 px-4 py-2 font-mono text-xs uppercase tracking-[0.28em] text-secondary">
              <span className="mr-3 inline-flex h-2 w-2 rounded-full bg-text" />
              full_stack.engineer = true
            </div>

            <div className="space-y-5">
              <div className="space-y-3">
                <p className="font-mono text-sm uppercase tracking-[0.3em] text-secondary">
                  {profile.stack}
                </p>
                <h1 className="max-w-4xl text-4xl font-semibold tracking-[-0.04em] text-text sm:text-6xl lg:text-7xl">
                  {profile.name}
                </h1>
              </div>

              <div className="space-y-2">
                <p className="text-lg text-text sm:text-2xl">{profile.role}</p>
                <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted sm:text-sm">
                  {profile.education}
                </p>
              </div>

              <p className="max-w-3xl text-sm leading-7 text-secondary sm:text-lg sm:leading-8">
                {profile.summary}
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.16, ...imageTransition }}
              className="flex flex-wrap gap-3"
            >
              <Button href="#projects">View Projects</Button>
              {socialLinks.map((link, index) => (
                <Button
                  key={link.label}
                  href={link.href}
                  variant={index === socialLinks.length - 1 ? 'secondary' : 'ghost'}
                  download={link.download}
                >
                  {link.label}
                </Button>
              ))}
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-3">
              {profile.quickStats.map((item) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, ...imageTransition }}
                  className="rounded-2xl border border-border bg-text/5 px-4 py-4"
                >
                  <p className="font-mono text-xl text-text">{item.value}</p>
                  <p className="mt-2 text-sm text-secondary">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="hidden lg:block" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-5xl"
        >
          <Card className="overflow-hidden p-0">
            <div className="border-b border-border px-5 py-4">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-text/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-text/35" />
                <span className="h-2.5 w-2.5 rounded-full bg-text/20" />
              </div>
            </div>

            <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="relative min-h-[260px] overflow-hidden border-b border-border sm:min-h-[320px] lg:border-b-0 lg:border-r">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={theme}
                    src={activeProfileImage}
                    alt="Atta Ur Rehman portrait"
                    initial={{ opacity: 0, scale: 1.03, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, scale: 0.985, filter: 'blur(8px)' }}
                    transition={imageTransition}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </AnimatePresence>
              </div>

              <div className="space-y-6 p-5 sm:p-6">
                <div className="rounded-2xl border border-border bg-background/70 p-4 font-mono text-sm text-secondary">
                  <p className="text-text">$ whoami</p>
                  <p className="mt-3">Atta Ur Rehman</p>
                  <p>Full Stack Developer</p>
                  <p>React · FastAPI · PostgreSQL</p>
                </div>

                <div className="space-y-3">
                  {profile.heroFacts.map((fact) => (
                    <motion.div
                      key={fact}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ ...imageTransition, delay: 0.08 }}
                      className="flex gap-3 text-sm leading-6 text-secondary"
                    >
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-text" />
                      <span>{fact}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="rounded-2xl border border-border bg-text/5 p-4">
                  <p className="font-mono text-xs uppercase tracking-[0.24em] text-muted">
                    positioning
                  </p>
                  <p className="mt-3 text-sm leading-7 text-secondary">
                    Backend-focused full stack developer building secure dashboards, APIs,
                    authentication flows, and maintainable database-driven systems.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
}

export default Hero;
