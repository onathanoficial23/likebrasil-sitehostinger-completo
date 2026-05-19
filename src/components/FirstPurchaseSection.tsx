import { Play } from 'lucide-react';
import { motion } from 'motion/react';

export default function FirstPurchaseSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1 bg-like-red/10 text-like-red text-xs font-black tracking-widest rounded-full mb-4">
            <Play size={14} /> PASSO A PASSO
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-like-dark tracking-tighter uppercase leading-none mb-4">
            Como Fazer <span className="text-like-red">Primeira Compra</span> Na Like Brasil
          </h2>
          <p className="text-gray-500 font-bold text-lg uppercase tracking-widest">Tutorial Completo</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-like-dark">
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/tIXzGX5EnM8" 
              title="Como Fazer Primeira Compra Na Like Brasil"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="mt-12 text-center">
            <motion.a 
              href="https://likebrasil.com.br/consultor/onathanoficial"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-12 py-6 bg-like-red text-white rounded-2xl font-black text-xl shadow-xl hover:bg-like-red-dark transition-all uppercase tracking-tighter"
            >
              Fazer a Primeira Compra
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
