import { useState } from 'react';
import { AnimatedBackground } from './components/AnimatedBackground';
import { CardBackgroundCarousel } from './components/CardBackgroundCarousel';
import { Profile } from './components/Profile';
import { LinkButton } from './components/LinkButton';
import { ContactModal } from './components/ContactModal';
import { LocationModal } from './components/LocationModal';
import { RatingModal } from './components/RatingModal';
import { Footer } from './components/Footer';
import { Instagram, MapPin, Star } from 'lucide-react';
import { WhatsAppIcon } from './components/WhatsAppIcon';
import { motion } from 'motion/react';

export default function App() {
  const [activeModal, setActiveModal] = useState<'contact' | 'location' | 'rating' | null>(null);

  return (
    <main className="min-h-screen relative flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 selection:bg-brand-red selection:text-white">
      <AnimatedBackground />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-md relative z-10 flex flex-col items-center bg-zinc-950/40 backdrop-blur-xl border border-zinc-800/80 rounded-[2.5rem] overflow-hidden py-10 px-4 sm:px-6 shadow-[0_0_50px_rgba(139,0,0,0.15)]"
      >
        <CardBackgroundCarousel />
        
        <Profile />

        <div className="w-full flex flex-col gap-3">
          <LinkButton 
            title="Instagram"
            icon={Instagram}
            href="https://www.instagram.com/armasdafeartigosreligiosos/"
            delay={0.5}
          />
          
          <LinkButton 
            title="Atendimento"
            icon={WhatsAppIcon}
            onClick={() => setActiveModal('contact')}
            delay={0.6}
          />
          
          <LinkButton 
            title="Localização"
            icon={MapPin}
            onClick={() => setActiveModal('location')}
            delay={0.7}
          />
          
          <LinkButton 
            title="Avalie-nos"
            icon={Star}
            onClick={() => setActiveModal('rating')}
            delay={0.8}
          />
        </div>

        <Footer />
      </motion.div>

      <ContactModal 
        isOpen={activeModal === 'contact'} 
        onClose={() => setActiveModal(null)} 
      />
      <LocationModal 
        isOpen={activeModal === 'location'} 
        onClose={() => setActiveModal(null)} 
      />
      <RatingModal 
        isOpen={activeModal === 'rating'} 
        onClose={() => setActiveModal(null)} 
      />
    </main>
  );
}
