import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

export const Education = () => {
  return (
    <section className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 text-xs font-mono font-semibold text-cyan-400 tracking-widest uppercase mb-2">
            <span>ACADEMICS</span>
            <div className="h-px bg-gradient-to-r from-cyan-500/50 to-transparent w-24 sm:w-48" />
            <span className="text-slate-400 hidden sm:inline">FOUNDATIONAL KNOWLEDGE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Education
          </h2>
        </div>

        {/* Minimal Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <div className="glass-card p-6 sm:p-8 rounded-2xl border border-blue-900/40 hover:border-blue-500/40 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3.5 rounded-xl bg-blue-950/70 border border-blue-800/50 text-cyan-400 flex-shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>

              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <h3 className="text-xl font-bold text-white">
                    B.Sc. Computer Science
                  </h3>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-900 text-xs font-mono text-cyan-300 self-start sm:self-auto">
                    <Calendar className="w-3 h-3 text-cyan-400" />
                    <span>2017 – 2020</span>
                  </div>
                </div>

                <div className="text-base text-blue-400 font-medium mt-1">
                  K.S. Rangasamy College of Arts and Science
                </div>

                <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                  Rigorous foundational curriculum covering core computer science principles, object-oriented programming, data structures, algorithms, database systems, and software engineering methodologies.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
