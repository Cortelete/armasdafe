import { useState } from 'react';
import { Modal } from './Modal';
import { ExternalLink, Rocket } from 'lucide-react';

interface DeveloperModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DeveloperModal({ isOpen, onClose }: DeveloperModalProps) {
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const text = `Olá, me chamo *${name.trim()}*, vi o link da *Armas da Fé* e quero um site igual!`;
    const url = `https://wa.me/5541988710303?text=${encodeURIComponent(text)}`;
    
    window.open(url, '_blank');
    onClose();
    setName('');
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Desenvolvido por InteligenciArte.IA ✨">
      <div className="space-y-6">
        <div className="text-center">
          <p className="text-zinc-300 text-sm mb-4">
            Especialistas em criar presenças digitais luxuosas, modernas e de alta conversão.
          </p>
          <a
            href="https://www.instagram.com/inteligenciarte.ia"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-brand-red hover:text-red-400 transition-colors text-sm font-medium shrink-0"
          >
            Conheça nosso trabalho no Instagram
            <ExternalLink size={16} />
          </a>
        </div>

        <div className="border-t border-zinc-800/50 pt-6">
          <h4 className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400 font-medium mb-4 text-center">
            Gostou deste site?
          </h4>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input 
                type="text" 
                required
                value={name}
                onChange={e => setName(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all text-sm"
                placeholder="Qual o seu nome?"
              />
            </div>
            <button 
              type="submit"
              className="w-full bg-gradient-to-r from-zinc-800 to-zinc-700 text-white font-medium py-3 rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
            >
              <Rocket size={18} />
              Quer um site incrível como esse? Fale comigo! 🚀
            </button>
          </form>
        </div>
      </div>
    </Modal>
  );
}
