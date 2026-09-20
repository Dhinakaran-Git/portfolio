import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Server, Layers, Cpu, Database, Zap, CheckCircle2, ArrowRight } from 'lucide-react';

export const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow || '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', duration: 0.5, bounce: 0.1 }}
          className="relative w-full max-w-4xl bg-[#0D1424] border border-blue-500/40 rounded-2xl shadow-2xl overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="px-6 py-5 bg-[#080D18] border-b border-blue-900/40 flex items-center justify-between flex-shrink-0">
            <div>
              <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-blue-950 text-cyan-400 border border-blue-800/60">
                {project.category}
              </span>
              <h2 className="text-2xl font-bold text-white mt-1.5">{project.title}</h2>
              <p className="text-xs font-mono text-blue-400">{project.company}</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors border border-slate-700/50"
              aria-label="Close project modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content (Scrollable) */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
            
            {/* Technologies */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2.5">
                Technology Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-md bg-blue-950/50 border border-blue-800/50 text-xs font-mono text-cyan-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Architecture Flow Diagram */}
            {project.architecture && (
              <div className="bg-[#070B14] p-5 rounded-xl border border-blue-900/50">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold flex items-center gap-1.5">
                    <Layers className="w-4 h-4" />
                    <span>System Architecture & Data Flow</span>
                  </h4>
                  <span className="text-[11px] font-mono text-slate-500">Live Microservices Flow</span>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-2 py-4 px-2">
                  {project.architecture.nodes.map((node, nIdx) => (
                    <React.Fragment key={nIdx}>
                      <div className="px-3.5 py-2 rounded-lg bg-blue-950/70 border border-blue-700/50 text-xs font-mono font-medium text-slate-200 shadow-sm flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-cyan-400" />
                        <span>{node.label}</span>
                      </div>
                      {nIdx < project.architecture.nodes.length - 1 && (
                        <ArrowRight className="w-4 h-4 text-blue-500 flex-shrink-0 animate-pulse" />
                      )}
                    </React.Fragment>
                  ))}
                </div>

                <p className="text-center text-xs font-mono text-slate-400 mt-2">
                  {project.architecture.flowDescription}
                </p>
              </div>
            )}

            {/* Problem & Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800">
                <h4 className="text-sm font-bold text-red-400 mb-2 font-mono flex items-center gap-2">
                  <span>[ Challenge / Problem ]</span>
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {project.problem}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-blue-950/20 border border-blue-900/40">
                <h4 className="text-sm font-bold text-cyan-400 mb-2 font-mono flex items-center gap-2">
                  <span>[ Technical Solution ]</span>
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Key Engineering Highlights */}
            <div>
              <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Key Engineering Contributions</span>
              </h4>
              <div className="space-y-2.5">
                {project.highlights.map((highlight, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-3 text-sm text-slate-300">
                    <span className="text-cyan-400 font-mono text-xs mt-1">0{hIdx + 1}.</span>
                    <span className="leading-relaxed">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Footer */}
          <div className="px-6 py-4 bg-[#080D18] border-t border-blue-900/40 flex items-center justify-between flex-shrink-0">
            <span className="text-xs font-mono text-slate-500">
              Enterprise Project • {project.company}
            </span>
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-lg text-xs font-mono font-medium text-white bg-blue-600 hover:bg-blue-500 transition-colors"
            >
              Close Details
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
