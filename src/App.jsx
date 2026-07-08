import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import About from './components/sections/About';
import Contact from './components/sections/Contact';
import Experience from './components/sections/Experience';
import Focus from './components/sections/Focus';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import { navLinks } from './data/profile';
import useTheme from './hooks/useTheme';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="relative min-h-screen bg-background text-text">
      <Navbar links={navLinks} theme={theme} toggleTheme={toggleTheme} />
      <main className="relative z-10">
        <Hero />
        <About />
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
