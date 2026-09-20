import React from 'react';
import { Terminal, Linkedin, Mail, Phone, ArrowUp } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Architecture', href: '#architecture' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative z-10 bg-[#04060B] border-t border-blue-950/60 pt-16 pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand & Summary */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2.5 text-lg font-bold font-mono tracking-tight">
              <div className="w-8 h-8 rounded-lg bg-blue-950/70 border border-blue-500/40 flex items-center justify-center text-cyan-400">
                <Terminal className="w-4 h-4 text-cyan-400" />
              </div>
              <span className="text-white">
                &lt;<span className="text-blue-400">Dhinakaran</span> /&gt;
              </span>
            </div>

            <div className="text-base font-bold text-white">
              Dhinakaran Murugesan
            </div>
            <div className="text-xs font-mono text-cyan-400">
              Java Full Stack Developer • 4.5+ Years Experience
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed">
              Specialized in scalable Java enterprise systems, Spring Boot microservices, high-performance Redis caching, and reactive React / Angular interfaces.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-200 font-semibold mb-4">
              Navigation
            </div>
            <ul className="space-y-2 text-xs sm:text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-cyan-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social / Direct Connect */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-200 font-semibold mb-4">
              Connect
            </div>
            <div className="flex flex-col space-y-2.5 text-xs sm:text-sm">
              <a
                href="https://linkedin.com/in/dhinakaranmurugesan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span className="truncate">LinkedIn Profile</span>
              </a>

              <a
                href="mailto:dhinakaranmurugesan18@gmail.com"
                className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span className="truncate">dhinakaranmurugesan18@gmail.com</span>
              </a>

              <a
                href="tel:+916374138887"
                className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>+91 6374138887</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © 2026 Dhinakaran Murugesan. Built with React.
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-slate-400 transition-colors">
              Chennai, Tamil Nadu, India
            </span>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 p-2 rounded-lg bg-blue-950/40 border border-blue-900/50 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors"
              title="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
              <span>Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
