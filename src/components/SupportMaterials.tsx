import { BookOpen, Image, Share2, Video, Download, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function SupportMaterials() {
  const materials = [
    { icon: <BookOpen />, title: 'Catálogo Oficial', desc: 'Versão em PDF e interativa.' },
    { icon: <Image />, title: 'Fotos e Vídeos', desc: 'Material de alta qualidade para redes sociais.' },
    { icon: <Share2 />, title: 'Landing Pages', desc: 'Modelos prontos para captura de leads.' },
    { icon: <Video />, title: 'Treinamentos', desc: 'Vídeos tutoriais sobre produtos e vendas.' },
  ];

  return (
    <section className="py-24 bg-like-dark relative overflow-hidden">
      {/* Texture Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#D4B475 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase leading-none mb-8">
              MATERIAIS DE <br /><span className="text-like-gold">APOIO COMPLETOS</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed font-medium">
              Não se preocupe se você está começando agora. Fornecemos todo o arsenal de marketing necessário para você brilhar.
            </p>

            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-3 text-white font-bold">
                <CheckCircle className="text-like-gold" size={20} />
                <span>Estratégias de Venda Validada</span>
              </div>
              <div className="flex items-center gap-3 text-white font-bold group">
                <CheckCircle className="text-like-gold" size={20} />
                <a href="https://wa.link/ov90du" target="_blank" rel="noopener noreferrer" className="hover:text-like-gold transition-colors">Suporte via WhatsApp 24/7</a>
              </div>
              <div className="flex items-center gap-3 text-white font-bold">
                <CheckCircle className="text-like-gold" size={20} />
                <span>Comunidade Exclusiva</span>
              </div>
            </div>

            <a 
              href="https://likebrasil.com.br/consultor/onathanoficial"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-5 bg-like-gold hover:bg-like-gold/80 text-like-dark rounded-2xl font-black text-lg transition-all shadow-xl shadow-like-gold/20"
            >
              QUERO ACESSAR O SISTEMA
            </a>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {materials.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors"
              >
                <div className="w-12 h-12 rounded-2xl bg-like-gold/20 flex items-center justify-center text-like-gold mb-6">
                  {item.icon}
                </div>
                <h4 className="text-white font-bold text-xl mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.desc}</p>
                <a 
                  href="https://likebrasil.com.br/consultor/onathanoficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex items-center gap-2 text-like-gold text-xs font-black uppercase tracking-widest hover:gap-3 transition-all"
                >
                  Baixar Agora <Download size={14} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
