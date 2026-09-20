import React from 'react';
import { motion } from 'framer-motion';
import { Award, Briefcase, Code, Layers, Server, ShieldCheck, Database, Check } from 'lucide-react';

export const About = () => {
  const stats = [
    {
      value: '4.5+',
      label: 'Years Experience',
      subtext: 'Enterprise software development',
      icon: Briefcase,
    },
    {
      value: '3',
      label: 'Major Work Environments',
      subtext: 'Aithent, BAssure, TNQ',
      icon: Award,
    },
    {
      value: 'Java',
      label: 'Primary Backend',
      subtext: 'Spring Boot 3 & Microservices',
      icon: Server,
    },
    {
      value: 'Microservices',
      label: 'Architecture',
      subtext: 'Monolith modernization & event flow',
      icon: Layers,
    },
  ];

  const focusPoints = [
    'Migrating monolithic systems into domain-oriented Spring Boot microservices.',
    'Designing low-latency REST APIs with standardized error envelopes and pagination.',
    'Implementing distributed caching with Redis and event streaming with Apache Kafka.',
    'Building reactive, modular frontends using modern React and Angular 18.',
  ];

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-3 text-xs font-mono font-semibold text-cyan-400 tracking-widest uppercase mb-2">
            <span>01 / ABOUT</span>
            <div className="h-px bg-gradient-to-r from-cyan-500/50 to-transparent w-24 sm:w-48" />
            <span className="text-slate-400 hidden sm:inline">ENGINEERING SCALABLE SYSTEMS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            About Me
          </h2>
          <p className="mt-2 text-base sm:text-lg text-slate-400 max-w-2xl">
            Engineering reliable enterprise applications with modern backend and frontend technologies.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Professional Summary */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-blue-900/30">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Code className="w-5 h-5 text-cyan-400" />
                <span>Professional Summary</span>
              </h3>
              
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6">
                Java Full Stack Developer with <strong className="text-white">4.5 years of experience</strong> building Java-based web services and enterprise applications using <strong className="text-cyan-300">Spring Boot</strong>, <strong className="text-cyan-300">React</strong>, and <strong className="text-cyan-300">Angular</strong>. Experienced in REST API development, microservices architecture, caching, messaging, and modernization of legacy applications.
              </p>

              <div className="space-y-3 pt-4 border-t border-slate-800">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                  Core Engineering Capabilities
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {focusPoints.map((point, index) => (
                    <div key={index} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <div className="p-1 rounded bg-blue-950/60 border border-blue-800/40 text-cyan-400 mt-0.5 flex-shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-800/80 flex flex-wrap gap-4 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  <span>Location: Chennai, Tamil Nadu, India</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-blue-400" />
                  <span>Degree: B.Sc. Computer Science</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Key Metrics / Statistics */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {stats.map((stat, idx) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={idx}
                  className="glass-card p-6 rounded-xl border border-blue-900/30 flex flex-col justify-between group hover:border-cyan-500/40 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-lg bg-blue-950/50 border border-blue-800/40 text-cyan-400 group-hover:text-white group-hover:bg-blue-600 transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-slate-500">0{idx + 1}</span>
                  </div>

                  <div>
                    <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-mono group-hover:text-cyan-300 transition-colors">
                      {stat.value}
                    </div>
                    <div className="text-sm font-semibold text-slate-200 mt-1">
                      {stat.label}
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5">
                      {stat.subtext}
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
};
