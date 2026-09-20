import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FileText,
  Mail,
  Linkedin,
  Phone,
  ArrowDown,
  Sparkles,
  ExternalLink,
  CheckCircle2,
  Code2,
} from 'lucide-react';

export const Hero = () => {
  const [downloadNotice, setDownloadNotice] = useState(false);
  const resumeUrl = "/resume/Dhinakaran-JavaFullStack.pdf";

  const handleDownloadResume = (e) => {
    setDownloadNotice(true);
    setTimeout(() => setDownloadNotice(false), 4000);
  };

  const floatingBadges = [
    { name: 'Java', color: 'text-amber-400 border-amber-500/30 bg-amber-950/20', position: '-top-4 -left-4', delay: 0 },
    { name: 'Spring Boot', color: 'text-emerald-400 border-emerald-500/30 bg-emerald-950/20', position: '-top-5 -right-3', delay: 0.8 },
    { name: 'React', color: 'text-cyan-400 border-cyan-500/30 bg-cyan-950/20', position: 'top-1/3 -left-8', delay: 1.6 },
    { name: 'Microservices', color: 'text-blue-400 border-blue-500/30 bg-blue-950/20', position: 'top-1/2 -right-8', delay: 2.4 },
    { name: 'Kafka', color: 'text-purple-400 border-purple-500/30 bg-purple-950/20', position: 'bottom-20 -left-6', delay: 1.2 },
    { name: 'Redis', color: 'text-red-400 border-red-500/30 bg-red-950/20', position: '-bottom-4 -right-4', delay: 2.0 },
    { name: 'Docker', color: 'text-sky-400 border-sky-500/30 bg-sky-950/20', position: '-bottom-5 left-10', delay: 0.4 },
    { name: 'Oracle', color: 'text-orange-400 border-orange-500/30 bg-orange-950/20', position: 'top-16 -right-6', delay: 2.8 },
  ];

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Small Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-950/40 border border-blue-500/30 mb-6">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-xs font-mono font-semibold tracking-wider text-cyan-300 uppercase">
                JAVA FULL STACK DEVELOPER
              </span>
            </div>

            {/* Large Heading */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-tight mb-4">
              Building scalable applications with{' '}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                Java, Spring Boot & React.
              </span>
            </h1>

            {/* Animated Highlighted Text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-wrap items-center gap-2 sm:gap-3 my-3 text-sm sm:text-base font-mono text-cyan-400 font-medium"
            >
              <span className="px-2.5 py-1 rounded bg-blue-900/30 border border-blue-700/40">Java</span>
              <span className="text-blue-500">•</span>
              <span className="px-2.5 py-1 rounded bg-blue-900/30 border border-blue-700/40">Spring Boot</span>
              <span className="text-blue-500">•</span>
              <span className="px-2.5 py-1 rounded bg-blue-900/30 border border-blue-700/40">Microservices</span>
              <span className="text-blue-500">•</span>
              <span className="px-2.5 py-1 rounded bg-blue-900/30 border border-blue-700/40">React</span>
            </motion.div>

            {/* Description */}
            <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Java Full Stack Developer with <strong className="text-white font-semibold">4.5+ years</strong> of experience building enterprise applications, REST APIs, microservices, and modern web interfaces. Experienced in migrating monolithic applications to microservices and implementing scalable solutions using Redis and Kafka.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto text-center px-6 py-3 rounded-lg font-medium text-sm text-white bg-blue-600 hover:bg-blue-500 shadow-glow-sm hover:shadow-glow-md transition-all duration-300 border border-blue-400/30"
              >
                View My Work
              </a>

              <a
                href={resumeUrl}
                download="Dhinakaran-JavaFullStack.pdf"
                onClick={handleDownloadResume}
                className="w-full sm:w-auto text-center px-6 py-3 rounded-lg font-medium text-sm text-slate-200 bg-slate-900/70 hover:bg-slate-800/80 border border-slate-700 hover:border-blue-400/50 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto text-center px-6 py-3 rounded-lg font-medium text-sm text-slate-300 hover:text-white bg-transparent hover:bg-blue-950/30 border border-blue-900/50 hover:border-blue-500/40 transition-all duration-300"
              >
                Contact Me
              </a>
            </div>

            {/* Resume Notification Toast */}
            {downloadNotice && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-3 text-xs font-mono text-cyan-400 flex items-center gap-2 bg-blue-950/60 px-3 py-2 rounded border border-blue-800/50"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>Resume download started.</span>
              </motion.div>
            )}

            {/* Social Links & Contact Info */}
            <div className="mt-10 pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-6 text-sm text-slate-400">
              <a
                href="https://linkedin.com/in/dhinakaranmurugesan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
                title="LinkedIn Profile"
              >
                <div className="p-2 rounded-lg bg-blue-950/40 border border-blue-900/50">
                  <Linkedin className="w-4 h-4 text-blue-400" />
                </div>
                <span>linkedin.com/in/dhinakaranmurugesan</span>
              </a>

              <a
                href="mailto:dhinakaranmurugesan18@gmail.com"
                className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
                title="Email Me"
              >
                <div className="p-2 rounded-lg bg-blue-950/40 border border-blue-900/50">
                  <Mail className="w-4 h-4 text-cyan-400" />
                </div>
                <span>dhinakaranmurugesan18@gmail.com</span>
              </a>

              <a
                href="tel:+916374138887"
                className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
                title="Call Me"
              >
                <div className="p-2 rounded-lg bg-blue-950/40 border border-blue-900/50">
                  <Phone className="w-4 h-4 text-emerald-400" />
                </div>
                <span>+91 6374138887</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Futuristic Developer Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center items-center py-6"
          >
            {/* Ambient Back Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-cyan-500/10 rounded-2xl filter blur-2xl transform -rotate-1" />

            {/* Code Panel */}
            <div className="relative w-full max-w-md bg-[#0D1424]/90 border border-blue-500/30 rounded-xl shadow-2xl overflow-hidden backdrop-blur-xl">
              {/* Code Window Header */}
              <div className="px-4 py-3 bg-[#080D18] border-b border-blue-900/40 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                  <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>DeveloperController.java</span>
                </div>
                <div className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-950/60 text-cyan-300 border border-blue-800/40">
                  Java 17+
                </div>
              </div>

              {/* Code Body */}
              <div className="p-5 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto text-slate-200">
                <div className="text-purple-400">@RestController</div>
                <div className="text-purple-400">
                  @RequestMapping<span className="text-slate-300">(</span>
                  <span className="text-emerald-300">"/api"</span>
                  <span className="text-slate-300">)</span>
                </div>
                <div className="text-blue-300 mt-1">
                  public class <span className="text-amber-300 font-bold">DeveloperController</span> {'{'}
                </div>

                <div className="pl-4 mt-2 text-purple-400">
                  @GetMapping<span className="text-slate-300">(</span>
                  <span className="text-emerald-300">"/profile"</span>
                  <span className="text-slate-300">)</span>
                </div>
                <div className="pl-4 text-blue-300">
                  public <span className="text-amber-300">Developer</span> <span className="text-cyan-300">profile</span>() {'{'}
                </div>

                <div className="pl-8 text-slate-300 mt-1">
                  return <span className="text-purple-400 font-semibold">new</span> <span className="text-amber-300">Developer</span>(
                </div>
                <div className="pl-12 text-emerald-300">
                  "Dhinakaran",
                </div>
                <div className="pl-12 text-emerald-300 flex items-center">
                  <span>"Java Full Stack Developer"</span>
                  {/* Blinking Blue Cursor */}
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ repeat: Infinity, duration: 1 }}
                    className="inline-block w-2 h-4 ml-1 bg-cyan-400 shadow-glow-sm"
                  />
                </div>
                <div className="pl-8 text-slate-300">);</div>

                <div className="pl-4 text-blue-300 mt-1">{'}'}</div>
                <div className="text-blue-300">{'}'}</div>

                {/* Simulated Server Console Output */}
                <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] text-slate-400">
                  <div className="text-emerald-400 flex items-center gap-1">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    <span>Tomcat initialized on port 8080 (http)</span>
                  </div>
                  <div className="text-blue-400">
                    200 OK • GET /api/profile [14ms]
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badges */}
            {floatingBadges.map((badge, idx) => (
              <motion.div
                key={badge.name}
                className={`absolute ${badge.position} hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium border shadow-lg backdrop-blur-md ${badge.color}`}
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  delay: badge.delay,
                  ease: 'easeInOut',
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-current" />
                <span>{badge.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="mt-12 flex flex-col items-center justify-center text-slate-400 text-xs font-mono z-10"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 hover:text-cyan-400 transition-colors group"
        >
          <span className="tracking-widest uppercase text-[11px] text-slate-400 group-hover:text-cyan-400">
            Scroll to explore
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            className="w-5 h-8 rounded-full border border-slate-700 group-hover:border-cyan-400 flex items-start justify-center p-1"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
              className="w-1 h-2 rounded-full bg-cyan-400"
            />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
};
