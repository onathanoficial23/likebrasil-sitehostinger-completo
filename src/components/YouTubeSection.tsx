import { Youtube, Play, Users, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import youtubeThumb from '../assets/images/regenerated_image_1779124319901.png';

export default function YouTubeSection() {
  return (
    <section id="youtube" className="py-24 bg-like-dark relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-like-red/10 skew-x-[-20deg] translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-like-red/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-5 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-600/20 text-red-500 rounded-full mb-6">
              <Youtube size={16} fill="currentColor" />
              <span className="text-[10px] font-black uppercase tracking-widest">Canal Oficial no YouTube</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-[0.9] mb-6">
              APRENDA COM QUEM <br />
              <span className="text-like-red">FAZ ACONTECER</span>
            </h2>
            
            <p className="text-gray-400 text-lg mb-10 max-w-xl leading-relaxed">
              Siga o canal de <span className="text-white font-bold tracking-tight">Nathan Oliveira</span> e tenha acesso a estratégias exclusivas, treinamentos de vendas, 
              apresentações de planos e tudo o que você precisa para decolar seu negócio na Like Brasil.
            </p>

            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-4 text-white/90">
                <div className="w-6 h-6 rounded-full bg-like-red/20 flex items-center justify-center text-like-red">
                  <CheckCircle2 size={16} />
                </div>
                <span className="font-bold">Estratégias de Venda Diária</span>
              </div>
              <div className="flex items-center gap-4 text-white/90">
                <div className="w-6 h-6 rounded-full bg-like-red/20 flex items-center justify-center text-like-red">
                  <CheckCircle2 size={16} />
                </div>
                <span className="font-bold">Treinamentos Técnicos de Produtos</span>
              </div>
              <div className="flex items-center gap-4 text-white/90">
                <div className="w-6 h-6 rounded-full bg-like-red/20 flex items-center justify-center text-like-red">
                  <CheckCircle2 size={16} />
                </div>
                <span className="font-bold">Dicas de Liderança e Expansão</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a 
                href="https://www.youtube.com/@nathanoliveiralikebrasilofc" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-5 bg-red-600 hover:bg-red-700 text-white rounded-2xl font-black text-lg shadow-2xl shadow-red-600/30 transition-all hover:scale-105 group"
              >
                <Youtube className="mr-3 group-hover:scale-110 transition-transform" size={24} fill="white" />
                INSCREVER-SE AGORA
              </a>
              
              <div className="flex items-center gap-3 px-6 py-5 bg-white/5 border border-white/10 rounded-2xl">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full border-2 border-like-dark bg-gray-600" />
                  <div className="w-8 h-8 rounded-full border-2 border-like-dark bg-gray-700" />
                  <div className="w-8 h-8 rounded-full border-2 border-like-dark bg-gray-800" />
                </div>
                <div className="text-xs text-white/60">
                  <span className="block font-black text-white">+ Milhares</span>
                  Inscritos no Canal
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative lg:max-w-md lg:ml-auto w-full lg:col-span-2"
          >
            <div className="relative aspect-video rounded-3xl overflow-hidden bg-gray-900 shadow-2xl border border-white/10 group">
              {/* YouTube Video Mockup Style Overlay */}
              <img 
                src={youtubeThumb} 
                alt="Nathan Oliveira YouTube" 
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full border-2 border-like-red overflow-hidden bg-gray-800">
                     <img 
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200" 
                      alt="Profile" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">Nathan Oliveira</h4>
                    <p className="text-white/60 text-sm">Like Brasil Ofc</p>
                  </div>
                </div>
                <div className="h-1 bg-white/20 w-full rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '75%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="h-full bg-like-red"
                  />
                </div>
              </div>

              {/* Play Button Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <a 
                  href="https://www.youtube.com/@nathanoliveiralikebrasilofc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-20 h-20 rounded-full bg-red-600 text-white flex items-center justify-center shadow-2xl shadow-red-600/50 hover:scale-110 transition-transform cursor-pointer"
                >
                  <Play size={32} fill="white" className="ml-1" />
                </a>
              </div>
            </div>
            
            {/* Stats Badge */}
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
              className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 hidden sm:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-red-600">
                   <Users size={20} />
                </div>
                <div>
                   <span className="block text-2xl font-black text-like-dark leading-none uppercase tracking-tighter italic">AO VIVO</span>
                   <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Treinamentos</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
