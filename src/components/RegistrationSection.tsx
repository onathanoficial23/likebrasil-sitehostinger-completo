import { motion } from 'motion/react';

export default function RegistrationSection() {
  return (
    <section className="py-24 bg-gray-50 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-like-red/5 via-transparent to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-6 py-2 bg-like-red text-white text-sm font-black tracking-[0.2em] rounded-full mb-6 shadow-lg shadow-like-red/20 uppercase"
          >
            Como Começar?
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-black text-like-dark tracking-tighter uppercase leading-tight mb-6">
            O PRIMEIRO PASSO É O <br />
            <span className="text-like-red font-black">"CADASTRO GRATUITO NA LIKE"</span>
          </h2>
          <p className="text-gray-600 font-bold text-lg uppercase tracking-tight">
            Veja abaixo como é simples
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white group"
          >
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/oA9qbAyrYog" 
              title="Passo a Passo Cadastro Like Brasil"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            
            <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/80 to-transparent pointer-events-none">
              <p className="text-white font-black text-xl tracking-tight uppercase">Tutorial de Cadastro Passo a Passo</p>
              <p className="text-white/60 text-xs font-bold uppercase tracking-widest mt-1">Gaste apenas 2 minutos e comece agora</p>
            </div>
          </motion.div>
          
          <div className="mt-12 text-center">
            <a 
              href="https://likebrasil.com.br/consultor/onathanoficial"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-12 py-6 bg-like-red text-white rounded-2xl font-black text-xl shadow-xl hover:bg-like-red-dark transition-all hover:scale-105 uppercase tracking-tighter"
            >
              Fazer meu Cadastro Gratuito
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
