import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import About from './components/sections/About';
import Contact from './components/sections/Contact';
import Experience from './components/sections/Experience';
import Focus from './components/sections/Focus';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import { navLinks } from './data/profile';
import useTheme from './hooks/useTheme';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="relative min-h-screen bg-background text-text">
      <div className="app-glow pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-60" />
      <Navbar links={navLinks} theme={theme} toggleTheme={toggleTheme} />
      <main className="relative z-10">
        <Hero theme={theme} />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Focus />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
