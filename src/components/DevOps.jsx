import React from 'react';
import {
  GitBranch,
  GitPullRequest,
  Box,
  Container,
  Terminal,
  TerminalSquare,
  Wrench,
} from 'lucide-react';

export const DevOps = () => {
  const tools = [
    { name: 'Git', icon: GitBranch, detail: 'Version Control' },
    { name: 'GitLab', icon: GitPullRequest, detail: 'CI/CD & Code Review' },
    { name: 'Docker', icon: Box, detail: 'Containerization' },
    { name: 'Docker Compose', icon: Container, detail: 'Local Orchestration' },
    { name: 'Jenkins', icon: Terminal, detail: 'Build Pipelines' },
    { name: 'Linux', icon: TerminalSquare, detail: 'Server Environments' },
  ];

  // Duplicate list to create a seamless infinite marquee
  const marqueeItems = [...tools, ...tools, ...tools];

  return (
    <section className="py-16 relative z-10 overflow-hidden border-y border-blue-900/30 bg-[#080D18]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold text-cyan-400 tracking-widest uppercase">
            <Wrench className="w-4 h-4" />
            <span>DEVOPS & ENGINEERING TOOLS</span>
          </div>
          <span className="text-xs font-mono text-slate-500 hidden sm:inline">
            Hover to inspect
          </span>
        </div>
      </div>

      {/* Marquee Container with pause-on-hover */}
      <div className="flex overflow-x-hidden select-none group">
        <div className="flex items-center gap-6 py-2 animate-marquee group-hover:[animation-play-state:paused]">
          {marqueeItems.map((tool, idx) => {
            const IconComp = tool.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3 px-5 py-3 rounded-xl bg-[#0D1424]/80 border border-blue-900/40 hover:border-cyan-400/50 hover:bg-blue-950/50 transition-all duration-200 flex-shrink-0 cursor-default"
              >
                <div className="p-2 rounded-lg bg-blue-950/80 border border-blue-800/40 text-cyan-400">
                  <IconComp className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white font-mono">{tool.name}</div>
                  <div className="text-[11px] text-slate-400">{tool.detail}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
