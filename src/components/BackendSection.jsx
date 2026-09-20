import React from 'react';
import { motion } from 'framer-motion';
import { Server, Cpu, Zap, Radio, Sliders, CheckCircle2 } from 'lucide-react';

export const BackendSection = () => {
  const backendCapabilities = [
    {
      title: 'REST API Development',
      description: 'Building structured REST APIs using Spring Boot with standardized HTTP status codes, Jakarta DTO validations, and clean pagination.',
      icon: Server,
      badge: 'Spring Boot 3',
      points: ['Stateless API design', 'DTO Request/Response mapping', 'Standardized error envelopes'],
    },
    {
      title: 'Microservices Architecture',
      description: 'Modernizing monolithic applications and decomposing complex business logic into independent, resilient, and modular services.',
      icon: Cpu,
      badge: 'Domain Driven',
      points: ['Monolith-to-microservices migration', 'Service modularization', 'API Gateway routing'],
    },
    {
      title: 'Caching & Queuing',
      description: 'Implementing Redis-based caching to minimize database query latency and using Redis queues for high-throughput buffering.',
      icon: Zap,
      badge: 'Redis',
      points: ['In-memory cache-aside patterns', 'TTL management', 'Distributed Redis queues'],
    },
    {
      title: 'Event Messaging & Pub/Sub',
      description: 'Leveraging Apache Kafka for distributed event streaming and Redis Pub/Sub for real-time inter-service communication.',
      icon: Radio,
      badge: 'Kafka & Redis',
      points: ['Asynchronous event processing', 'Decoupled publisher/subscriber', 'Audit trail event streaming'],
    },
    {
      title: 'Cross-Cutting Concerns',
      description: 'Applying AspectJ and Spring AOP for centralized execution logging, global Controller Advice, and reusable backend components.',
      icon: Sliders,
      badge: 'AspectJ / AOP',
      points: ['Centralized method execution logging', 'Global @ControllerAdvice exception handling', 'Shared enterprise utilities'],
    },
  ];

  return (
    <section className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 text-xs font-mono font-semibold text-cyan-400 tracking-widest uppercase mb-2">
            <span>SPECIALIZATION</span>
            <div className="h-px bg-gradient-to-r from-cyan-500/50 to-transparent w-24 sm:w-48" />
            <span className="text-slate-400 hidden sm:inline">JAVA & SPRING BOOT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Backend Engineering
          </h2>
          <p className="mt-2 text-base sm:text-lg text-slate-400 max-w-2xl">
            Specialized in designing resilient enterprise backend services, data pipelines, and microservices architectures with Java and the Spring ecosystem.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {backendCapabilities.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card p-6 rounded-2xl border border-blue-900/40 hover:border-cyan-500/50 hover:shadow-glow-sm transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-blue-950/60 border border-blue-800/50 text-cyan-400 group-hover:text-white group-hover:bg-blue-600 transition-colors">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-blue-950/80 text-cyan-300 border border-blue-800/40">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                    {item.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 space-y-1.5">
                  {item.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-2 text-xs text-slate-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
