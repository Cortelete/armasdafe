import { motion } from 'motion/react';
import { useState } from 'react';
import { AboutModal } from './AboutModal';

export function Profile() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);

  const handleLogoClick = () => {
    if (isSpinning) return;
    setIsSpinning(true);
    
    // Open modal after the initial spin animation
    setTimeout(() => {
      setIsAboutOpen(true);
      setIsSpinning(false);
    }, 1000);
  };

  return (
    <>
      <div className="flex flex-row items-center justify-center gap-4 mb-6 sm:mb-8 mt-24 text-left relative z-10 w-full px-2">
        <motion.div
          animate={isSpinning ? {
            rotateY: [0, 360, 720, 1080],
            scale: [1, 1.2, 1.4, 1.5, 1],
            transition: { duration: 1, ease: "easeInOut" }
          } : {
            y: [-5, 5, -5],
            transition: { duration: 6, ease: "easeInOut", repeat: Infinity }
          }}
          onClick={handleLogoClick}
          className="w-20 h-20 sm:w-24 sm:h-24 shrink-0 cursor-pointer drop-shadow-xl"
        >
          <img 
            src="/logo.png" 
            alt="Armas da Fé" 
            className="w-full h-full object-contain"
            onError={(e) => {
               // Fallback visually if logo isn't properly loaded
               (e.target as HTMLImageElement).src = "https://placehold.co/400x400/990000/ffffff.png?text=Armas+da+F%C3%A9"
            }}
          />
        </motion.div>
        
        <div className="flex flex-col">
          <motion.h1 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-display font-medium mb-0.5 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-red-200 via-white to-red-200 animate-gradient-x"
          >
            Armas da Fé
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="text-sm sm:text-base text-zinc-300 font-serif italic"
          >
            Artigos Religiosos
          </motion.p>
        </div>
      </div>

      <AboutModal isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} />
    </>
  );
}
