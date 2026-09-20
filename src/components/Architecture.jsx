import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Layers,
  Server,
  Database,
  Cpu,
  Zap,
  Radio,
  Sliders,
  ArrowRight,
  ArrowDown,
  Sparkles,
  CheckCircle2,
  Share2,
} from 'lucide-react';

export const Architecture = () => {
  const [activeTab, setActiveTab] = useState('microservices');

  const architectureTabs = [
    { id: 'microservices', name: 'Monolith → Microservices', icon: Layers },
    { id: 'rest-apis', name: 'REST API Gateway', icon: Server },
    { id: 'caching', name: 'Redis Caching Flow', icon: Zap },
    { id: 'messaging', name: 'Kafka Messaging', icon: Radio },
    { id: 'reusable', name: 'AOP & Reusable Components', icon: Sliders },
  ];

  return (
    <section id="architecture" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-3 text-xs font-mono font-semibold text-cyan-400 tracking-widest uppercase mb-2">
            <span>05 / ARCHITECTURE</span>
            <div className="h-px bg-gradient-to-r from-cyan-500/50 to-transparent w-24 sm:w-48" />
            <span className="text-slate-400 hidden sm:inline">HOW I BUILD SYSTEMS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            How I Build Systems
          </h2>
          <p className="mt-2 text-base sm:text-lg text-slate-400 max-w-2xl">
            Interactive system architecture diagrams demonstrating end-to-end data flows, service modularization, distributed caching, and event streaming.
          </p>
        </div>

        {/* Interactive Architecture Navigation Tabs */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-8 pb-3 border-b border-slate-800">
          {architectureTabs.map((tab) => {
            const IconComp = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-mono font-medium transition-all duration-300 border ${
                  isActive
                    ? 'bg-blue-600/25 text-cyan-300 border-cyan-400/60 shadow-glow-sm'
                    : 'bg-[#0D1424]/40 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-slate-200'
                }`}
              >
                <IconComp className={`w-4 h-4 ${isActive ? 'text-cyan-400' : 'text-slate-500'}`} />
                <span>{tab.name}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Architecture Viewer Panel */}
        <div className="glass-card p-6 sm:p-10 rounded-2xl border border-blue-900/40 relative overflow-hidden">
          
          {/* Animated Ambient Node Gradients */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <AnimatePresence mode="wait">
            
            {/* Tab 1: Monolith → Microservices */}
            {activeTab === 'microservices' && (
              <motion.div
                key="microservices"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      <Layers className="w-5 h-5 text-cyan-400" />
                      <span>Monolith to Microservices Modernization</span>
                    </h3>
                    <p className="text-sm text-slate-400 mt-1">
                      Decomposing tightly coupled monolithic web apps into domain-driven Spring Boot services with dedicated data access and caching.
                    </p>
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-blue-950/70 border border-blue-800/50 text-cyan-300 self-start md:self-auto">
                    Domain-Driven Modernization
                  </span>
                </div>

                {/* Visual Architecture Diagram */}
                <div className="p-6 sm:p-8 rounded-xl bg-[#070B14] border border-blue-950 flex flex-col items-center">
                  
                  {/* Layer 1: Client / Frontend */}
                  <div className="flex flex-wrap justify-center gap-4 w-full max-w-xl">
                    <div className="p-4 rounded-xl bg-blue-950/60 border border-blue-600/40 text-center flex-1 min-w-[140px] shadow-sm">
                      <div className="text-xs font-mono text-cyan-400 font-semibold mb-1">Presentation Layer</div>
                      <div className="text-sm font-bold text-white">Angular 18 / React</div>
                      <div className="text-[11px] text-slate-400 mt-0.5">Reactive Web Client</div>
                    </div>
                  </div>

                  {/* Flow Arrow */}
                  <div className="my-3 flex flex-col items-center">
                    <div className="w-0.5 h-6 bg-gradient-to-b from-blue-500 to-cyan-400" />
                    <ArrowDown className="w-4 h-4 text-cyan-400 -mt-1 animate-bounce" />
                    <span className="text-[11px] font-mono text-cyan-400/80 mt-1">HTTPS / JSON</span>
                  </div>

                  {/* Layer 2: API Gateway */}
                  <div className="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/40 text-center w-full max-w-md shadow-glow-sm">
                    <div className="text-xs font-mono text-cyan-400 font-semibold">API Gateway & Routing</div>
                    <div className="text-sm font-bold text-white">Reverse Proxy • Authentication • Rate Limiting</div>
                  </div>

                  {/* Flow Arrow */}
                  <div className="my-3 flex flex-col items-center">
                    <div className="w-0.5 h-6 bg-gradient-to-b from-cyan-400 to-blue-500" />
                    <ArrowDown className="w-4 h-4 text-blue-400 -mt-1" />
                    <span className="text-[11px] font-mono text-blue-400/80 mt-1">Service Dispatch</span>
                  </div>

                  {/* Layer 3: Microservices Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-2xl">
                    <div className="p-3.5 rounded-lg bg-blue-950/40 border border-blue-800/40 text-center">
                      <div className="text-xs font-mono text-cyan-300 font-semibold">Service A</div>
                      <div className="text-sm font-bold text-white">Form Service</div>
                      <div className="text-[10px] text-slate-400 mt-1">Spring Boot 3</div>
                    </div>
                    <div className="p-3.5 rounded-lg bg-blue-950/40 border border-blue-800/40 text-center">
                      <div className="text-xs font-mono text-cyan-300 font-semibold">Service B</div>
                      <div className="text-sm font-bold text-white">Workflow Engine</div>
                      <div className="text-[10px] text-slate-400 mt-1">Spring Boot 3</div>
                    </div>
                    <div className="p-3.5 rounded-lg bg-blue-950/40 border border-blue-800/40 text-center">
                      <div className="text-xs font-mono text-cyan-300 font-semibold">Service C</div>
                      <div className="text-sm font-bold text-white">Document Service</div>
                      <div className="text-[10px] text-slate-400 mt-1">PDF Engine</div>
                    </div>
                  </div>

                  {/* Flow Arrow */}
                  <div className="my-3 flex flex-col items-center">
                    <div className="w-0.5 h-6 bg-gradient-to-b from-blue-500 to-indigo-500" />
                    <ArrowDown className="w-4 h-4 text-indigo-400 -mt-1" />
                  </div>

                  {/* Layer 4: Storage & Caching */}
                  <div className="flex flex-wrap justify-center gap-4 w-full max-w-lg">
                    <div className="p-3.5 rounded-xl bg-orange-950/30 border border-orange-700/40 text-center flex-1 min-w-[140px]">
                      <div className="text-xs font-mono text-orange-400 font-semibold">Relational Store</div>
                      <div className="text-sm font-bold text-white">Oracle Database</div>
                      <div className="text-[10px] text-slate-400 mt-0.5">ACID Transactions</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-red-950/30 border border-red-700/40 text-center flex-1 min-w-[140px]">
                      <div className="text-xs font-mono text-red-400 font-semibold">In-Memory Cache</div>
                      <div className="text-sm font-bold text-white">Redis Cluster</div>
                      <div className="text-[10px] text-slate-400 mt-0.5">Sub-millisecond reads</div>
                    </div>
                  </div>

                </div>

                {/* Key Architectural Principles */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm text-slate-300">
                  <div className="p-4 rounded-xl bg-[#0A0F1C] border border-slate-800">
                    <div className="font-bold text-cyan-400 mb-1">Independent Deployability</div>
                    <p className="text-slate-400 text-xs">Each microservice is containerized with Docker and can be upgraded without taking down the full system.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#0A0F1C] border border-slate-800">
                    <div className="font-bold text-cyan-400 mb-1">Decoupled Business Logic</div>
                    <p className="text-slate-400 text-xs">Dynamic form evaluation and PDF generation operate as distinct modular services with clear API contracts.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#0A0F1C] border border-slate-800">
                    <div className="font-bold text-cyan-400 mb-1">Performance Resilience</div>
                    <p className="text-slate-400 text-xs">Redis caching shields the Oracle database from repetitive form definition queries during peak usage.</p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Tab 2: REST APIs */}
            {activeTab === 'rest-apis' && (
              <motion.div
                key="rest-apis"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      <Server className="w-5 h-5 text-cyan-400" />
                      <span>Standardized REST API Architecture</span>
                    </h3>
                    <p className="text-sm text-slate-400 mt-1">
                      Predictable API responses with standardized JSON envelopes, pagination, DTO validation, and global `@ControllerAdvice`.
                    </p>
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-blue-950/70 border border-blue-800/50 text-cyan-300 self-start md:self-auto">
                    RESTful Best Practices
                  </span>
                </div>

                <div className="p-6 sm:p-8 rounded-xl bg-[#070B14] border border-blue-950 flex flex-col items-center">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full max-w-4xl text-center">
                    <div className="p-4 rounded-xl bg-blue-950/50 border border-blue-700/40">
                      <span className="text-xs font-mono text-cyan-400">Step 1</span>
                      <div className="text-sm font-bold text-white mt-1">Client Request</div>
                      <p className="text-[11px] text-slate-400 mt-1">GET /api/v1/forms?page=0&size=20</p>
                    </div>
                    <div className="p-4 rounded-xl bg-blue-950/50 border border-blue-700/40">
                      <span className="text-xs font-mono text-cyan-400">Step 2</span>
                      <div className="text-sm font-bold text-white mt-1">DTO Validation</div>
                      <p className="text-[11px] text-slate-400 mt-1">Jakarta Bean Validation (@Valid)</p>
                    </div>
                    <div className="p-4 rounded-xl bg-blue-950/50 border border-blue-700/40">
                      <span className="text-xs font-mono text-cyan-400">Step 3</span>
                      <div className="text-sm font-bold text-white mt-1">Service & Pagination</div>
                      <p className="text-[11px] text-slate-400 mt-1">Spring Data Pageable & Repository</p>
                    </div>
                    <div className="p-4 rounded-xl bg-blue-950/50 border border-blue-700/40">
                      <span className="text-xs font-mono text-cyan-400">Step 4</span>
                      <div className="text-sm font-bold text-white mt-1">Standardized Envelope</div>
                      <p className="text-[11px] text-slate-400 mt-1">{`{ success: true, data: [...], page: {...} }`}</p>
                    </div>
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-[#0D1424] border border-blue-900/40 font-mono text-xs text-slate-300">
                  <div className="text-cyan-400 font-semibold mb-2">// Sample Standardized Enterprise API Envelope</div>
                  <pre className="text-slate-300 overflow-x-auto leading-relaxed">
{`{
  "timestamp": "2026-09-20T11:40:00Z",
  "status": 200,
  "message": "Forms retrieved successfully",
  "data": [
    { "id": 101, "formName": "Maryland Case Filing", "version": "3.2" }
  ],
  "pagination": { "page": 0, "size": 20, "totalElements": 142, "totalPages": 8 }
}`}
                  </pre>
                </div>
              </motion.div>
            )}

            {/* Tab 3: Caching */}
            {activeTab === 'caching' && (
              <motion.div
                key="caching"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      <Zap className="w-5 h-5 text-cyan-400" />
                      <span>Redis In-Memory Caching & Queuing</span>
                    </h3>
                    <p className="text-sm text-slate-400 mt-1">
                      Cache-aside patterns and Redis queues to safeguard database throughput and achieve microsecond response times.
                    </p>
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-blue-950/70 border border-blue-800/50 text-cyan-300 self-start md:self-auto">
                    Sub-millisecond Latency
                  </span>
                </div>

                <div className="p-6 sm:p-8 rounded-xl bg-[#070B14] border border-blue-950 flex flex-col items-center">
                  <div className="w-full max-w-2xl space-y-4">
                    <div className="p-4 rounded-xl bg-blue-950/40 border border-blue-700/50 flex items-center justify-between">
                      <div>
                        <div className="text-xs font-mono text-cyan-400">1. Client Request</div>
                        <div className="text-sm font-bold text-white">Query Form Definition</div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-cyan-400" />
                      <div className="text-right">
                        <div className="text-xs font-mono text-cyan-400">Spring Boot Service</div>
                        <div className="text-sm font-bold text-white">@Cacheable("forms")</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-600/40">
                        <div className="flex items-center justify-between text-xs font-mono text-emerald-400 mb-1">
                          <span>CACHE HIT (~2ms)</span>
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                        </div>
                        <div className="text-sm font-bold text-white">Redis In-Memory Return</div>
                        <p className="text-xs text-slate-300 mt-1">Payload returned immediately from Redis cache without hitting Oracle DB.</p>
                      </div>

                      <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-600/40">
                        <div className="flex items-center justify-between text-xs font-mono text-amber-400 mb-1">
                          <span>CACHE MISS</span>
                          <span className="w-2 h-2 rounded-full bg-amber-400" />
                        </div>
                        <div className="text-sm font-bold text-white">Query Oracle DB & Populate Cache</div>
                        <p className="text-xs text-slate-300 mt-1">Fetch from Oracle via Spring Data JPA, store in Redis with TTL, return to client.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Tab 4: Messaging */}
            {activeTab === 'messaging' && (
              <motion.div
                key="messaging"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      <Radio className="w-5 h-5 text-cyan-400" />
                      <span>Apache Kafka & Redis Pub/Sub Event Pipelines</span>
                    </h3>
                    <p className="text-sm text-slate-400 mt-1">
                      Asynchronous event processing, high-throughput distributed logging, and real-time pub/sub notifications.
                    </p>
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-blue-950/70 border border-blue-800/50 text-cyan-300 self-start md:self-auto">
                    Event-Driven Architecture
                  </span>
                </div>

                <div className="p-6 sm:p-8 rounded-xl bg-[#070B14] border border-blue-950 flex flex-col items-center">
                  <div className="flex flex-wrap items-center justify-center gap-4 w-full max-w-3xl">
                    <div className="p-4 rounded-xl bg-blue-950/50 border border-blue-800/60 text-center flex-1 min-w-[150px]">
                      <div className="text-xs font-mono text-cyan-400">Event Producer</div>
                      <div className="text-sm font-bold text-white mt-1">Spring Boot App</div>
                      <div className="text-[11px] text-slate-400 mt-1">KafkaTemplate.send()</div>
                    </div>

                    <ArrowRight className="w-5 h-5 text-cyan-400 flex-shrink-0 animate-pulse" />

                    <div className="p-5 rounded-xl bg-purple-950/40 border border-purple-600/50 text-center flex-1 min-w-[180px] shadow-glow-sm">
                      <div className="text-xs font-mono text-purple-300">Kafka Cluster Topic</div>
                      <div className="text-base font-bold text-white mt-1">app.audit.events</div>
                      <div className="text-[11px] text-slate-300 mt-1">Partitioned • Replicated • Resilient</div>
                    </div>

                    <ArrowRight className="w-5 h-5 text-cyan-400 flex-shrink-0 animate-pulse" />

                    <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-700/50 text-center flex-1 min-w-[150px]">
                      <div className="text-xs font-mono text-emerald-300">Log Consumers</div>
                      <div className="text-sm font-bold text-white mt-1">@KafkaListener</div>
                      <div className="text-[11px] text-slate-400 mt-1">Async Audit Storage</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Tab 5: Reusable Components */}
            {activeTab === 'reusable' && (
              <motion.div
                key="reusable"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      <Sliders className="w-5 h-5 text-cyan-400" />
                      <span>Cross-Cutting Concerns & AOP (AspectJ)</span>
                    </h3>
                    <p className="text-sm text-slate-400 mt-1">
                      Centralizing audit logging, execution timing, and exception handling across enterprise services with zero boilerplate.
                    </p>
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-blue-950/70 border border-blue-800/50 text-cyan-300 self-start md:self-auto">
                    Clean Architecture
                  </span>
                </div>

                <div className="p-6 sm:p-8 rounded-xl bg-[#070B14] border border-blue-950 flex flex-col items-center">
                  <div className="w-full max-w-2xl space-y-3">
                    <div className="p-3.5 rounded-lg bg-blue-950/40 border border-blue-800/40 flex items-center justify-between">
                      <span className="text-xs font-mono text-white">1. Service Method Execution</span>
                      <span className="text-xs font-mono text-cyan-400">@Around("@annotation(LogExecutionTime)")</span>
                    </div>
                    <div className="p-3.5 rounded-lg bg-blue-950/60 border border-cyan-500/50 flex items-center justify-between shadow-glow-sm">
                      <span className="text-xs font-mono text-cyan-300 font-bold">2. AspectJ Interceptor</span>
                      <span className="text-xs font-mono text-cyan-300">Captures parameters, timing, user identity</span>
                    </div>
                    <div className="p-3.5 rounded-lg bg-blue-950/40 border border-blue-800/40 flex items-center justify-between">
                      <span className="text-xs font-mono text-white">3. Asynchronous Publish to Kafka</span>
                      <span className="text-xs font-mono text-cyan-400">Non-blocking background thread</span>
                    </div>
                    <div className="p-3.5 rounded-lg bg-blue-950/40 border border-blue-800/40 flex items-center justify-between">
                      <span className="text-xs font-mono text-white">4. Central Exception Handler</span>
                      <span className="text-xs font-mono text-cyan-400">@ExceptionHandler with secure error codes</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

          </AnimatePresence>

        </div>

      </div>
    </section>
  );
};
