import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  skillCategories,
  skills,
} from '../data/skills';
import {
  Layers,
  Server,
  Cpu,
  Database,
  ShieldCheck,
  Sliders,
  Atom,
  Code2,
  Boxes,
  Compass,
  Layout,
  Grid,
  HardDrive,
  Zap,
  Radio,
  Box,
  Container,
  GitBranch,
  GitPullRequest,
  Terminal,
  TerminalSquare,
  FileCode,
  Globe,
  Palette,
  Coffee,
  CheckCircle2,
} from 'lucide-react';

const iconMap = {
  Coffee,
  Layers,
  Cpu,
  Server,
  Database,
  ShieldCheck,
  Sliders,
  Atom,
  Code2,
  Boxes,
  Compass,
  Layout,
  Grid,
  HardDrive,
  Zap,
  Radio,
  Box,
  Container,
  GitBranch,
  GitPullRequest,
  Terminal,
  TerminalSquare,
  FileCode,
  Globe,
  Palette,
};

const getLevelBadgeClass = (level) => {
  switch (level) {
    case 'Primary':
      return 'bg-blue-950/70 text-cyan-300 border-cyan-500/40';
    case 'Experienced':
      return 'bg-slate-800/60 text-blue-300 border-blue-600/30';
    case 'Used in Projects':
      return 'bg-slate-900/60 text-slate-300 border-slate-700/50';
    default:
      return 'bg-slate-800/60 text-slate-300 border-slate-700/50';
  }
};

export const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredSkills = selectedCategory === 'all'
    ? skills
    : skills.filter((skill) => skill.category === selectedCategory);

  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 text-xs font-mono font-semibold text-cyan-400 tracking-widest uppercase mb-2">
            <span>02 / SKILLS</span>
            <div className="h-px bg-gradient-to-r from-cyan-500/50 to-transparent w-24 sm:w-48" />
            <span className="text-slate-400 hidden sm:inline">TECHNICAL ARSENAL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Technical Arsenal
          </h2>
          <p className="mt-2 text-base sm:text-lg text-slate-400 max-w-2xl">
            A comprehensive overview of backend, frontend, database, and infrastructure technologies verified through hands-on enterprise projects.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-10 pb-2 border-b border-slate-800/80">
          {skillCategories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-mono font-medium transition-all duration-200 border ${
                  isSelected
                    ? 'bg-blue-600/20 text-cyan-300 border-cyan-400/60 shadow-glow-sm'
                    : 'bg-[#0D1424]/40 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-slate-200'
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          <AnimatePresence>
            {filteredSkills.map((skill) => {
              const IconComp = iconMap[skill.icon] || Server;
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  key={skill.name}
                  className={`glass-card p-5 rounded-xl border flex flex-col justify-between group hover:border-cyan-400/50 hover:shadow-glow-sm transition-all duration-300 ${
                    skill.highlight ? 'border-blue-900/50 bg-[#0D1424]/80' : 'border-slate-800/60 bg-[#0A0F1C]/70'
                  }`}
                >
                  <div>
                    {/* Header: Icon + Name + Level Badge */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-lg bg-blue-950/60 border border-blue-800/40 text-cyan-400 group-hover:text-white group-hover:bg-blue-600 transition-colors">
                          <IconComp className="w-5 h-5" />
                        </div>
                        <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {skill.name}
                        </h3>
                      </div>

                      <span
                        className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full border ${getLevelBadgeClass(
                          skill.level
                        )}`}
                      >
                        {skill.level}
                      </span>
                    </div>

                    {/* Skill Description */}
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mt-2">
                      {skill.description}
                    </p>
                  </div>

                  {/* Bottom Indicator */}
                  <div className="mt-4 pt-3 border-t border-slate-800/50 flex items-center justify-between text-[11px] font-mono text-slate-500">
                    <span className="capitalize">{skill.category}</span>
                    <span className="text-cyan-500/70 group-hover:text-cyan-400 transition-colors">
                      Enterprise Tier
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
