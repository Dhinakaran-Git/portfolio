import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Architecture } from './components/Architecture';
import { BackendSection } from './components/BackendSection';
import { FrontendSection } from './components/FrontendSection';
import { DevOps } from './components/DevOps';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { BackgroundEffect } from './components/BackgroundEffect';

export function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.remove('dark');
      root.classList.add('light');
    } else {
      root.classList.remove('light');
      root.classList.add('dark');
    }
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="relative min-h-screen text-slate-100 selection:bg-blue-600 selection:text-white">
      {/* Interactive Custom Cursor */}
      <CustomCursor />

      {/* Futuristic Background Effect */}
      <BackgroundEffect />

      {/* Glassmorphic Navbar */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Architecture />
        <BackendSection />
        <FrontendSection />
        <DevOps />
        <Education />
        <Contact />
      </main>

      {/* Dark Footer */}
      <Footer />
    </div>
  );
}

export default App;
