import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const IMAGES = [
  '/fundos/fundo1.jpg',
  '/fundos/fundo2.jpg',
  '/fundos/fundo3.jpg',
  '/fundos/fundo4.jpg',
  '/fundos/fundo5.jpg',
  '/fundos/fundo6.jpg',
  '/fundos/fundo7.jpg',
  '/fundos/fundo8.jpg',
  '/fundos/fundo9.jpg',
  '/fundos/fundo10.jpg',
  '/fundos/fundo11.jpg',
  '/fundos/fundo12.jpg',
  '/fundos/fundo13.jpg',
  '/fundos/fundo14.jpg',
];

export function CardBackgroundCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % IMAGES.length);
    }, 3000); // changes every 3 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden rounded-[2.5rem] mix-blend-overlay opacity-20 pointer-events-none">
      <AnimatePresence>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 bg-cover bg-no-repeat bg-[position:40%_center]"
          style={{ backgroundImage: `url(${IMAGES[currentIndex]})` }}
        />
      </AnimatePresence>
    </div>
  );
}
