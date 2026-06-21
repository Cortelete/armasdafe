import { useState } from 'react';
import { DeveloperModal } from './DeveloperModal';

export function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <footer className="mt-8 text-center relative z-10 w-full flex justify-center">
        <button 
          onClick={() => setIsModalOpen(true)}
          className="text-[10px] sm:text-xs text-zinc-500 hover:text-zinc-300 font-medium tracking-widest uppercase transition-colors"
        >
          Desenvolvido por InteligenciArte.IA ✨
        </button>
      </footer>
      <DeveloperModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
