import React from 'react';
import { motion } from 'framer-motion';
import { Atom, Code2, Compass, Layout, Grid, ArrowDown, ArrowRight, Layers, Monitor } from 'lucide-react';

export const FrontendSection = () => {
  const frontendTechs = [
    { name: 'React JS', desc: 'Modern SPA development, functional components, custom hooks & state management.', icon: Atom, tag: 'Modern UI' },
    { name: 'Angular 18', desc: 'Enterprise component hierarchy, reactive forms, RxJS observables & TypeScript.', icon: Code2, tag: 'Enterprise' },
    { name: 'Angular.js', desc: 'Maintenance and strategic modernization of legacy enterprise web portals.', icon: Layers, tag: 'Legacy Support' },
    { name: 'React Router', desc: 'Declarative, client-side routing and protected navigation hierarchies.', icon: Compass, tag: 'Navigation' },
    { name: 'Material UI', desc: 'Comprehensive accessible design systems and enterprise dashboard components.', icon: Layout, tag: 'Design System' },
    { name: 'Bootstrap', desc: 'Fluid responsive grid layouts and rapid cross-browser styling utilities.', icon: Grid, tag: 'Responsive' },
  ];

  return (
    <section className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 text-xs font-mono font-semibold text-cyan-400 tracking-widest uppercase mb-2">
            <span>CLIENT-SIDE CRAFT</span>
            <div className="h-px bg-gradient-to-r from-cyan-500/50 to-transparent w-24 sm:w-48" />
            <span className="text-slate-400 hidden sm:inline">MODERN INTERFACES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Frontend Engineering
          </h2>
          <p className="mt-2 text-base sm:text-lg text-slate-400 max-w-2xl">
            Crafting responsive, accessible, and high-performance user interfaces that seamlessly connect with enterprise backend APIs.
          </p>
        </div>

        {/* End-to-End Data Pipeline Flow Visual */}
        <div className="mb-14 p-6 sm:p-8 rounded-2xl bg-[#080D18] border border-blue-900/40">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-6 flex items-center gap-2">
            <Monitor className="w-4 h-4" />
            <span>End-to-End Client-to-Backend Integration Flow</span>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
            {/* Step 1 */}
            <div className="p-4 rounded-xl bg-blue-950/60 border border-blue-700/50 text-center flex-1 w-full md:w-auto">
              <div className="text-xs font-mono text-slate-400">Step 1</div>
              <div className="text-sm sm:text-base font-bold text-white mt-1">User Interface</div>
              <div className="text-[11px] text-cyan-300 font-mono mt-0.5">User Events & Forms</div>
            </div>

            {/* Down Arrow on mobile, Right Arrow on desktop */}
            <div className="flex flex-col items-center">
              <ArrowRight className="hidden md:block w-5 h-5 text-cyan-400 animate-pulse" />
              <ArrowDown className="md:hidden w-5 h-5 text-cyan-400 animate-pulse" />
            </div>

            {/* Step 2 */}
            <div className="p-4 rounded-xl bg-blue-950/60 border border-blue-700/50 text-center flex-1 w-full md:w-auto">
              <div className="text-xs font-mono text-slate-400">Step 2</div>
              <div className="text-sm sm:text-base font-bold text-white mt-1">React / Angular</div>
              <div className="text-[11px] text-cyan-300 font-mono mt-0.5">Component State & HTTP</div>
            </div>

            <div className="flex flex-col items-center">
              <ArrowRight className="hidden md:block w-5 h-5 text-cyan-400 animate-pulse" />
              <ArrowDown className="md:hidden w-5 h-5 text-cyan-400 animate-pulse" />
            </div>

            {/* Step 3 */}
            <div className="p-4 rounded-xl bg-blue-950/60 border border-blue-700/50 text-center flex-1 w-full md:w-auto">
              <div className="text-xs font-mono text-slate-400">Step 3</div>
              <div className="text-sm sm:text-base font-bold text-white mt-1">REST API Contract</div>
              <div className="text-[11px] text-cyan-300 font-mono mt-0.5">JSON Payloads & Status</div>
            </div>

            <div className="flex flex-col items-center">
              <ArrowRight className="hidden md:block w-5 h-5 text-cyan-400 animate-pulse" />
              <ArrowDown className="md:hidden w-5 h-5 text-cyan-400 animate-pulse" />
            </div>

            {/* Step 4 */}
            <div className="p-4 rounded-xl bg-blue-950/60 border border-blue-700/50 text-center flex-1 w-full md:w-auto">
              <div className="text-xs font-mono text-slate-400">Step 4</div>
              <div className="text-sm sm:text-base font-bold text-white mt-1">Spring Boot Services</div>
              <div className="text-[11px] text-cyan-300 font-mono mt-0.5">Microservices & Logic</div>
            </div>
          </div>
        </div>

        {/* Frontend Tech Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {frontendTechs.map((tech, idx) => {
            const IconComp = tech.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="glass-card p-5 rounded-xl border border-blue-900/30 hover:border-cyan-400/40 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-lg bg-blue-950/60 border border-blue-800/40 text-cyan-400 group-hover:text-white group-hover:bg-blue-600 transition-colors">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-950/70 text-cyan-400 border border-blue-800/50">
                    {tech.tag}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {tech.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mt-1.5">
                  {tech.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
