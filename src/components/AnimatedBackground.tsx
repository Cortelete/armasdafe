import { motion } from 'motion/react';

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <div 
        className="absolute inset-0 bg-gradient-to-br from-brand-black via-[#2a0000] to-brand-black animate-gradient-x"
      />
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full bg-brand-red opacity-10 blur-[120px]"
        animate={{
          x: ['-20%', '20%', '-20%'],
          y: ['-20%', '20%', '-20%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{ top: '10%', left: '10%' }}
      />
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full bg-[#ff0000] opacity-[0.05] blur-[100px]"
        animate={{
          x: ['20%', '-20%', '20%'],
          y: ['20%', '-20%', '20%'],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{ bottom: '10%', right: '10%' }}
      />
    </div>
  );
}
