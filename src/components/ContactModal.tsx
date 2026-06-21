import { useState } from 'react';
import { Modal } from './Modal';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const reasons = [
  'Itens Religiosos (Geral)',
  'Velas',
  'Incensos',
  'Imagens',
  'Ervas',
  'Aparamentos',
  'Cristais',
  'Banhos',
  'Cartas',
  'Tabacaria',
  'Outros'
];

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [name, setName] = useState('');
  const [selectedReasons, setSelectedReasons] = useState<string[]>([]);

  const toggleReason = (reason: string) => {
    setSelectedReasons(prev => 
      prev.includes(reason) 
        ? prev.filter(r => r !== reason)
        : [...prev, reason]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const formattedReasons = selectedReasons.length > 0 
      ? selectedReasons.join(', ') 
      : 'Informações gerais';

    const text = `Olá, me chamo *${name.trim()}*.\nEstou entrando em contato através do site sobre: *${formattedReasons}*.`;
    const url = `https://wa.me/554299998651?text=${encodeURIComponent(text)}`;
    
    window.open(url, '_blank');
    onClose();
    setName('');
    setSelectedReasons([]);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Fale Conosco">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-zinc-300 mb-2">Seu Nome</label>
          <input 
            type="text" 
            required
            value={name}
            onChange={e => setName(e.target.value)}
            className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all"
            placeholder="Digite seu nome"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-zinc-300 mb-3">Motivo do Contato (Opcional)</label>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {reasons.map(reason => (
              <label 
                key={reason} 
                className={`flex items-center p-2 rounded-md border cursor-pointer transition-all ${
                  selectedReasons.includes(reason)
                    ? 'border-brand-red bg-brand-red/10 text-white'
                    : 'border-zinc-800 bg-zinc-900/50 text-zinc-400 hover:bg-zinc-800'
                }`}
              >
                <input 
                  type="checkbox" 
                  className="hidden"
                  checked={selectedReasons.includes(reason)}
                  onChange={() => toggleReason(reason)}
                />
                <span className="text-xs">{reason}</span>
              </label>
            ))}
          </div>
        </div>

        <button 
          type="submit"
          className="w-full bg-gradient-to-r from-brand-red-dark to-brand-red text-white font-medium py-3 rounded-lg shadow-[0_0_15px_rgba(139,0,0,0.3)] hover:shadow-[0_0_25px_rgba(139,0,0,0.5)] transition-all"
        >
          Enviar para WhatsApp
        </button>
      </form>
    </Modal>
  );
}
