import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import useActiveSection from '../../hooks/useActiveSection';
import { profile } from '../../data/profile';

function Navbar({ links, theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useActiveSection(links);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const closeMenu = () => setMenuOpen(false);
    window.addEventListener('resize', closeMenu);

    return () => window.removeEventListener('resize', closeMenu);
  }, []);

  const baseLinkClass =
    'rounded-md px-3 py-2 text-sm text-secondary transition duration-200 hover:bg-elevated hover:text-text';

  const navColors =
    theme === 'light'
      ? {
          borderColor: scrolled ? 'rgba(10,10,10,0.14)' : 'rgba(10,10,10,0.08)',
          backgroundColor: scrolled ? 'rgba(247,247,247,0.92)' : 'rgba(247,247,247,0.8)'
        }
      : {
          borderColor: scrolled ? 'rgba(255,255,255,0.14)' : 'rgba(255,255,255,0.08)',
          backgroundColor: scrolled ? 'rgba(10,10,10,0.88)' : 'rgba(10,10,10,0.72)'
        };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="section-shell pt-4">
        <motion.nav
          initial={false}
          animate={navColors}
          className="panel px-3 py-3 sm:px-4"
        >
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            <a href="#top" className="flex min-w-0 items-center gap-2 sm:gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-accent text-xs font-semibold text-white sm:h-11 sm:w-11 sm:text-sm">
                AR
              </div>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-text">{profile.name}</p>
                <p className="hidden truncate text-xs text-muted sm:block">Automation & Security Tooling</p>
              </div>
            </a>

            <div className="hidden items-center gap-1 md:flex">
              {links.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className={`${baseLinkClass} ${
                    activeSection === link.id ? 'bg-text/10 text-text' : ''
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex shrink-0 items-center gap-2">
              <button
                type="button"
                className="inline-flex items-center gap-1.5 rounded-md border border-border bg-elevated px-2 py-2 text-sm text-secondary transition hover:bg-background hover:text-text sm:gap-2 sm:px-3"
                aria-label="Toggle site theme"
                onClick={toggleTheme}
              >
                <span aria-hidden="true">{theme === 'dark' ? '☾' : '☀'}</span>
                <span className="relative flex h-5 w-10 items-center rounded-full border border-border bg-background px-1">
                  <motion.span
                    layout
                    className="h-3 w-3 rounded-full bg-text"
                    transition={{ type: 'spring', stiffness: 450, damping: 30 }}
                    style={{
                      marginLeft: theme === 'dark' ? 0 : 18
                    }}
                  />
                </span>
              </button>

              <button
                type="button"
                className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-border bg-elevated text-sm text-text transition hover:bg-background md:hidden"
                aria-expanded={menuOpen}
                aria-label="Toggle navigation menu"
                onClick={() => setMenuOpen((value) => !value)}
              >
                <span className="relative block h-4 w-5">
                  <span
                    className={`absolute left-0 top-0 h-px w-5 bg-current transition ${
                      menuOpen ? 'translate-y-[7px] rotate-45' : ''
                    }`}
                  />
                  <span
                    className={`absolute left-0 top-[7px] h-px w-5 bg-current transition ${
                      menuOpen ? 'opacity-0' : 'opacity-100'
                    }`}
                  />
                  <span
                    className={`absolute left-0 top-[14px] h-px w-5 bg-current transition ${
                      menuOpen ? '-translate-y-[7px] -rotate-45' : ''
                    }`}
                  />
                </span>
              </button>
            </div>
          </div>

          <AnimatePresence>
            {menuOpen ? (
              <motion.div
                key="mobile-nav"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden md:hidden"
              >
                <div className="mt-4 grid gap-2 border-t border-border pt-4">
                  {links.map((link) => (
                    <a
                      key={link.id}
                      href={`#${link.id}`}
                      className={`px-3 py-3 text-base ${baseLinkClass} ${
                        activeSection === link.id ? 'bg-text/10 text-text' : ''
                      }`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </motion.nav>
      </div>
    </header>
  );
}

export default Navbar;
