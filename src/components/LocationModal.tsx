import { Modal } from './Modal';
import { MapPin } from 'lucide-react';

interface LocationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LocationModal({ isOpen, onClose }: LocationModalProps) {
  const handleOpenMaps = () => {
    // Open google maps external
    window.open('https://maps.google.com/?q=-25.0926689,-50.1188973', '_blank');
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Nossa Localização" size="lg">
      <div className="space-y-4">
        <div className="flex items-start gap-3 bg-zinc-900/50 p-4 rounded-lg border border-zinc-800">
          <MapPin className="text-brand-red shrink-0" />
          <div>
            <p className="font-medium text-white">Armas da Fé Artigos Religiosos</p>
            <p className="text-sm text-zinc-400 mt-1">Ponta Grossa - PR</p>
          </div>
        </div>

        <div className="bg-zinc-900/50 p-4 rounded-lg border border-zinc-800 text-sm">
          <h4 className="text-white font-medium mb-3">Horário de Atendimento</h4>
          <ul className="space-y-2 text-zinc-400">
            <li className="flex justify-between">
              <span>Segunda a Sexta</span>
              <span className="text-white">13:30h às 19:30h</span>
            </li>
            <li className="flex justify-between">
              <span>Sábado</span>
              <span className="text-white whitespace-pre-wrap text-right">10h às 12:30h{'\n'}13:30h às 16h</span>
            </li>
            <li className="flex justify-between">
              <span>Domingos e Feriados</span>
              <span className="text-white">Fechado</span>
            </li>
          </ul>
        </div>
        
        <div className="w-full h-64 sm:h-80 rounded-lg overflow-hidden border border-zinc-800 relative">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7226.543021583564!2d-50.1188973!3d-25.0926689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e81bc7ee07d429%3A0x5f5c64e4363caddd!2sArmas%20da%20F%C3%A9%20Artigos%20Religiosos!5e0!3m2!1spt-BR!2sbr!4v1782061578339!5m2!1spt-BR!2sbr" 
            className="absolute inset-0 w-full h-full"
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <button 
          onClick={handleOpenMaps}
          className="w-full bg-zinc-100 text-zinc-900 font-medium py-3 rounded-lg hover:bg-white transition-colors flex items-center justify-center gap-2"
        >
          <MapPin size={18} />
          Abrir no aplicativo de Mapas
        </button>
      </div>
    </Modal>
  );
}
