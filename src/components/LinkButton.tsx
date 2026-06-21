import { motion } from 'motion/react';
import { LucideIcon, ChevronRight } from 'lucide-react';
import { ReactNode, ElementType } from 'react';

interface LinkButtonProps {
  title: string;
  icon: ElementType;
  onClick?: () => void;
  href?: string;
  delay?: number;
}

export function LinkButton({ title, icon: Icon, onClick, href, delay = 0 }: LinkButtonProps) {
  const content = (
    <>
      <div className="absolute inset-0 bg-gradient-to-r from-brand-red/0 via-brand-red/5 to-brand-red/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out" />
      <div className="absolute left-5 sm:left-6 transition-transform duration-300 ease-out group-hover:scale-110 group-hover:text-red-400">
        <Icon size={22} className="sm:w-[26px] sm:h-[26px]" strokeWidth={1.5} />
      </div>
      <div className="w-full flex flex-col items-center justify-center pl-10 pr-10 text-center relative z-10">
        <span className="font-medium text-sm sm:text-base tracking-wide text-zinc-100 group-hover:text-white transition-colors duration-300">{title}</span>
      </div>
      <div className="absolute right-5 sm:right-6 text-zinc-600 group-hover:text-red-400 transition-all duration-300 ease-out group-hover:translate-x-1">
        <ChevronRight size={18} strokeWidth={1.5} />
      </div>
    </>
  );

  const className = "w-full max-w-md relative flex items-center justify-center p-4 sm:p-5 rounded-2xl bg-gradient-to-b from-zinc-900/80 to-zinc-950/80 backdrop-blur-xl border border-zinc-800/60 shadow-[0_4px_15px_rgba(0,0,0,0.5)] overflow-hidden group transition-all duration-300 hover:border-brand-red/40";

  const MotionWrapper = ({ children }: { children: ReactNode }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, type: "spring", stiffness: 80, damping: 15 }}
      whileHover={{ 
        scale: 1.02, 
        boxShadow: "0 8px 30px rgba(139, 0, 0, 0.2)",
      }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <MotionWrapper>
        <a 
          href={href} 
          target="_blank" 
          rel="noopener noreferrer" 
          className={className}
        >
          {content}
        </a>
      </MotionWrapper>
    );
  }

  return (
    <MotionWrapper>
      <button 
        onClick={onClick} 
        className={className}
      >
        {content}
      </button>
    </MotionWrapper>
  );
}
