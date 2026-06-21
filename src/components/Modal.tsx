import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ReactNode } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg';
}

export function Modal({ isOpen, onClose, title, children, size = 'md' }: ModalProps) {
  const sizeClasses = {
    sm: 'max-w-sm',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm"
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className={`w-full ${sizeClasses[size]} bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden pointer-events-auto`}
            >
              <div className="flex justify-between items-center p-4 border-b border-zinc-800/50">
                <h3 className="text-xl font-display font-medium text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400">
                  {title}
                </h3>
                <button
                  onClick={onClose}
                  className="p-1 rounded-full hover:bg-zinc-800 transition-colors text-zinc-400 hover:text-white"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="p-6">
                {children}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
