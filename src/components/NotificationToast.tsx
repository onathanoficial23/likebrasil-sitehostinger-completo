import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { UserCheck, X } from 'lucide-react';

const NAMES = [
  'João', 'Maria', 'Pedro', 'Ana', 'Lucas', 'Beatriz', 'Mateus', 'Camila', 
  'Gabriel', 'Larissa', 'Rafael', 'Juliana', 'Thiago', 'Fernanda', 'Bruno',
  'Aline', 'Rodrigo', 'Priscila', 'Felipe', 'Letícia', 'Gustavo', 'Patrícia',
  'Ricardo', 'Vanessa', 'Marcos', 'Eduardo', 'André', 'Isabela', 'Daniel', 
  'Tatiana', 'Vitor', 'Suelen', 'Leonardo', 'Clara', 'Marcelo', 'Mônica', 
  'Sandro', 'Eliane', 'Rogério', 'Renata', 'Silvana', 'Tânia', 'Hugo', 
  'Flávia', 'Artur', 'Lorena', 'Danilo', 'Milena', 'Sérgio', 'Bianca', 
  'Adriano', 'Clarice', 'Caio', 'Dandara', 'Erick', 'Esther', 'Fabio', 
  'Gislaine', 'Heitor', 'Inês', 'Jonas', 'Kelly', 'Luis', 'Marta', 'Natan', 
  'Olívia', 'Paulo', 'Queila', 'Rui', 'Sonia', 'Talis', 'Uriel', 'Valéria', 
  'Wagner', 'Xande', 'Yago', 'Zilda', 'Bernardo', 'Catarina', 'Davi', 
  'Helena', 'Miguel', 'Alice', 'Arthur', 'Sophia', 'Laura', 'Manuela', 
  'Valentina', 'Samuel', 'Heloísa', 'João Miguel', 'Luiza', 'Enzo Gabriel', 
  'Maria Luiza', 'Lorenzo', 'Theo', 'Maria Eduarda', 'Isaac', 'Giovanna', 
  'Guilherme', 'Maria Clara', 'Nícolas', 'Maria Cecília', 'Murilo', 'Beatriz', 
  'Joaquim', 'Duda', 'Pedro Henrique', 'Calebe', 'Lívia', 'Matheus', 'Sarah'
];

const STATES = [
  'São Paulo', 'Rio de Janeiro', 'Minas Gerais', 'Espírito Santo', 'Bahia', 
  'Paraná', 'Santa Catarina', 'Rio Grande do Sul', 'Goiás', 'Ceará', 'Pernambuco'
];

export default function NotificationToast() {
  const [notification, setNotification] = useState<{name: string, state: string} | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const playSound = () => {
    const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3');
    audio.volume = 0.2;
    audio.play().catch(e => console.log('Audio play blocked by browser:', e));
  };

  const showRandomNotification = () => {
    // Safety check to ensure we don't trigger if already visible
    if (isVisible) return;

    const name = NAMES[Math.floor(Math.random() * NAMES.length)];
    const state = STATES[Math.floor(Math.random() * STATES.length)];
    
    setNotification({ name, state });
    setIsVisible(true);
    playSound();

    // Auto-hide after 8 seconds
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, 8000);

    return hideTimer;
  };

  useEffect(() => {
    if (isVisible) return;

    const delay = notification === null ? 4000 : Math.floor(Math.random() * (25000 - 15000 + 1) + 15000);

    const timer = setTimeout(() => {
      showRandomNotification();
    }, delay);

    return () => clearTimeout(timer);
  }, [isVisible, notification]);

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto z-[100] pointer-events-none flex justify-center sm:justify-start">
      <AnimatePresence>
        {isVisible && notification && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="pointer-events-auto bg-[#d0e0eb] rounded-2xl p-4 shadow-2xl border border-gray-100 flex items-center gap-4 w-full max-w-[calc(100vw-2rem)] sm:w-auto sm:min-w-[280px] sm:max-w-sm relative"
          >
            <div className="w-12 h-12 bg-like-red/10 rounded-full flex items-center justify-center text-like-red shrink-0">
              <UserCheck size={24} />
            </div>
            
            <div className="flex-grow">
              <p className="text-sm font-black text-like-dark uppercase tracking-tight leading-tight">
                {notification.name} de {notification.state}
              </p>
              <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">
                Acabou de realizar o cadastro!
              </p>
            </div>

            <button 
              onClick={() => setIsVisible(false)}
              className="text-gray-300 hover:text-gray-500 transition-colors"
            >
              <X size={16} />
            </button>

            {/* Progress bar for auto-hide */}
            <motion.div 
              initial={{ width: '100%' }}
              animate={{ width: '0%' }}
              transition={{ duration: 8, ease: 'linear' }}
              className="absolute bottom-0 left-0 h-1 bg-like-red/20 rounded-b-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
