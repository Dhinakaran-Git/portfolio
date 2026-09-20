import React from 'react';
import { motion } from 'framer-motion';

export const BackgroundEffect = () => {
  const codeSymbols = [
    { text: '{ }', top: '15%', left: '8%', delay: 0 },
    { text: '=>', top: '28%', left: '88%', delay: 2 },
    { text: '< />', top: '65%', left: '5%', delay: 4 },
    { text: '@Service', top: '75%', left: '90%', delay: 1 },
    { text: '::', top: '45%', left: '92%', delay: 3 },
    { text: '// async', top: '88%', left: '15%', delay: 5 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60" />

      {/* Radial Glow Gradients */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute top-1/3 -right-40 w-[30rem] h-[30rem] bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 left-1/4 w-[28rem] h-[28rem] bg-blue-700/10 rounded-full blur-3xl" />

      {/* Subtle Floating Code Symbols */}
      {codeSymbols.map((sym, idx) => (
        <motion.span
          key={idx}
          className="absolute text-xs font-mono font-bold text-blue-500/15 select-none hidden lg:block"
          style={{ top: sym.top, left: sym.left }}
          animate={{
            y: [0, -15, 0],
            opacity: [0.15, 0.35, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: sym.delay,
            ease: 'easeInOut',
          }}
        >
          {sym.text}
        </motion.span>
      ))}
    </div>
  );
};
