import React from 'react';
import { motion } from 'framer-motion';
import { Layers, ArrowRight, ExternalLink } from 'lucide-react';

export const ProjectCard = ({ project, onSelect }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="glass-card rounded-2xl border border-blue-900/30 overflow-hidden flex flex-col justify-between group hover:border-blue-500/50 hover:shadow-glow-md transition-all duration-300"
    >
      <div className="p-6 sm:p-7">
        
        {/* Top: Category Tag & Company */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-blue-950 text-cyan-300 border border-blue-800/60 font-medium">
            {project.category}
          </span>
          <span className="text-xs font-mono text-slate-400">
            {project.company}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2.5">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-slate-300 leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Architecture Flow Preview */}
        {project.architecture && (
          <div className="mb-5 p-3 rounded-lg bg-[#070B14] border border-blue-950 text-xs font-mono text-slate-300 flex items-center gap-2 overflow-x-auto">
            <Layers className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
            <span className="truncate">{project.architecture.flowDescription}</span>
          </div>
        )}

        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.technologies.slice(0, 5).map((tech, idx) => (
            <span
              key={idx}
              className="px-2.5 py-0.5 rounded bg-blue-950/40 border border-blue-900/50 text-xs font-mono text-slate-300"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="px-2 py-0.5 rounded bg-slate-900 text-xs font-mono text-slate-500">
              +{project.technologies.length - 5}
            </span>
          )}
        </div>

      </div>

      {/* Card Action Footer */}
      <div className="px-6 py-4 bg-[#080D18]/80 border-t border-blue-900/30 flex items-center justify-between">
        <span className="text-xs font-mono text-slate-500">
          Enterprise Architecture
        </span>
        <button
          onClick={() => onSelect(project)}
          className="inline-flex items-center gap-2 text-xs font-mono font-medium text-cyan-400 group-hover:text-cyan-300 hover:underline"
        >
          <span>View Architecture & Details</span>
          <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
};
