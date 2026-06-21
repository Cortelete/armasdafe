import { useState } from 'react';
import { Modal } from './Modal';
import { Star } from 'lucide-react';
import { motion } from 'motion/react';

interface RatingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function RatingModal({ isOpen, onClose }: RatingModalProps) {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedback, setFeedback] = useState('');

  const handleRating = (value: number) => {
    setRating(value);
    if (value === 5) {
      window.open('https://search.google.com/local/writereview?placeid=ChIJKdQH7scb6JQR3a08NuRkXF8', '_blank');
      onClose();
      reset();
    } else {
      setShowFeedback(true);
    }
  };

  const submitFeedback = (e: React.FormEvent) => {
    e.preventDefault();
    // Use formsubmit.co to send feedback
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = 'https://formsubmit.co/armasdafeartigosreligiosos@gmail.com'; // Placeholder email as not provided
    form.target = '_blank';

    const inputMsg = document.createElement('input');
    inputMsg.type = 'hidden';
    inputMsg.name = 'Mensagem de Melhoria';
    inputMsg.value = feedback;

    const inputRating = document.createElement('input');
    inputRating.type = 'hidden';
    inputRating.name = 'Estrelas';
    inputRating.value = rating.toString();

    form.appendChild(inputMsg);
    form.appendChild(inputRating);
    document.body.appendChild(form);
    form.submit();
    
    onClose();
    reset();
  };

  const reset = () => {
    setTimeout(() => {
      setRating(0);
      setHoveredRating(0);
      setShowFeedback(false);
      setFeedback('');
    }, 300);
  };

  return (
    <Modal isOpen={isOpen} onClose={() => { onClose(); reset(); }} title="Avalie nossa loja">
      {!showFeedback ? (
        <div className="flex flex-col items-center py-6">
          <p className="text-zinc-400 mb-6 text-center">
            Sua opinião é muito importante para nós. Como foi sua experiência?
          </p>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onMouseEnter={() => setHoveredRating(star)}
                onMouseLeave={() => setHoveredRating(0)}
                onClick={() => handleRating(star)}
                className="p-1 transition-transform hover:scale-110"
              >
                <Star
                  size={40}
                  className={`transition-colors ${
                    (hoveredRating || rating) >= star
                      ? 'fill-brand-gold text-brand-gold'
                      : 'text-zinc-600'
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      ) : (
        <motion.form 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          onSubmit={submitFeedback} 
          className="space-y-4"
        >
          <p className="text-zinc-300 text-sm">
            Sentimos muito que sua experiência não tenha sido 5 estrelas. 
            O que houve e como podemos melhorar?
          </p>
          <textarea
            required
            value={feedback}
            onChange={e => setFeedback(e.target.value)}
            className="w-full h-32 bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-white focus:outline-none focus:border-brand-red resize-none"
            placeholder="Conte-nos o que aconteceu..."
          />
          <button 
            type="submit"
            className="w-full bg-zinc-800 text-white font-medium py-3 rounded-lg hover:bg-zinc-700 transition-colors"
          >
            Enviar Feedback
          </button>
        </motion.form>
      )}
    </Modal>
  );
}
