import { Modal } from './Modal';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AboutModal({ isOpen, onClose }: AboutModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Quem Somos">
      <div className="space-y-4 text-sm sm:text-base text-zinc-300">
        <p>
          A <strong className="text-white">Armas da Fé - Artigos Religiosos</strong> nasceu do desejo de 
          compartilhar luz e fé através de peças selecionadas com carinho e respeito.
        </p>
        <p>
          Trabalhamos com uma vasta linha de produtos que engloba imagens sagradas, velas, 
          incensos, roupas, cristais, ervas, tabacaria e acessórios diversos.
        </p>
        <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-lg mt-6">
          <h4 className="text-white font-medium mb-2">Nosso Atendimento</h4>
          <ul className="text-sm space-y-1 text-zinc-400">
            <li><strong>Seg a sex:</strong> 13:30h às 19:30h</li>
            <li><strong>Sábado:</strong> 10h às 12:30h e 13:30h às 16h</li>
            <li><strong>Domingos e Feriados:</strong> Sem expediente</li>
          </ul>
        </div>
      </div>
    </Modal>
  );
}
