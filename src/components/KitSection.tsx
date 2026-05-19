import { Check, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function KitSection() {
  const kits = [
    {
      name: 'LIKE START',
      price: '99',
      cents: '90',
      points: '99,90',
      description: 'Ideal para quem está começando agora.',
      isPopular: false,
      details: [
        'R$ 15 UNILIKE (Plataforma)',
        'R$ 84,90 em Produtos (Livre Escolha)',
        '99,90 Pontos Qualificáveis',
        'Consumo Inteligente: 50% Desconto',
        'Acesso à Universidade Unilike'
      ]
    },
    {
      name: 'LIKE 500',
      price: '499',
      cents: '90',
      points: '550',
      description: 'Para quem busca crescimento rápido.',
      isPopular: false,
      details: [
        'R$ 15 UNILIKE (Plataforma)',
        'R$ 499,90 em Produtos (Livre Escolha)',
        '550 Pontos Qualificáveis',
        'Consumo Inteligente: 50% Desconto',
        'Bônus Recompra em 6 Níveis',
        'Participa dos Sorteios Like 500'
      ]
    },
    {
      name: 'LIKE 1000',
      price: '999',
      cents: '90',
      points: '1.100',
      description: 'A melhor escolha para empreendedores.',
      isPopular: true,
      details: [
        'R$ 15 UNILIKE (Plataforma)',
        'R$ 999,90 em Produtos (Livre Escolha)',
        '1.100 Pontos Qualificáveis',
        'Consumo Inteligente: 50% Desconto',
        'Principal Escolha para Liderança',
        'Vantagens Máximas no Plano'
      ]
    }
  ];

  return (
    <section id="kits" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-like-dark tracking-tighter uppercase leading-none">
            OPÇÕES DE <span className="text-like-red">KITS DE ADESÃO</span>
          </h2>
          <p className="mt-4 text-gray-600 font-medium">Escolha a melhor oportunidade para o seu momento e comece hoje.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {kits.map((kit, index) => (
            <motion.div
              key={kit.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-white rounded-3xl overflow-hidden shadow-xl border relative flex flex-col ${
                kit.isPopular ? 'border-like-red scale-105 z-10' : 'border-gray-100'
              }`}
            >
              {kit.isPopular && (
                <div className="bg-like-red text-white py-1 px-4 text-[10px] font-black uppercase tracking-widest text-center">
                  Principal Escolha!
                </div>
              )}
              
              <div className="p-8 pb-4 text-center">
                <h3 className="text-xl font-black text-like-dark uppercase mb-1">{kit.name}</h3>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-tight">{kit.description}</p>
              </div>

              <div className="px-8 py-4 flex flex-col items-center border-y border-gray-50 bg-gray-50/50">
                <div className="flex items-start">
                  <span className="text-sm font-bold text-like-dark mt-1">R$</span>
                  <span className="text-5xl font-black text-like-dark tracking-tighter">{kit.price}</span>
                  <span className="text-sm font-bold text-like-dark mt-1">,{kit.cents}</span>
                </div>
                <div className="mt-2 bg-like-red/10 px-3 py-1 rounded-full">
                  <span className="text-[10px] font-black text-like-red uppercase">{kit.points} PTS QUALIFICÁVEIS</span>
                </div>
              </div>

              <div className="p-8 flex-grow">
                <ul className="space-y-3 mb-8">
                  {kit.details.map((detail, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-gray-600 font-bold">
                      <div className="w-1 h-1 rounded-full bg-like-red" />
                      {detail}
                    </li>
                  ))}
                </ul>

                <a 
                  href="https://likebrasil.com.br/consultor/onathanoficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-4 rounded-xl font-black text-xs tracking-widest uppercase transition-all flex items-center justify-center gap-2 group ${
                    kit.isPopular 
                      ? 'bg-like-red text-white shadow-lg shadow-like-red/30' 
                      : 'bg-like-dark text-white'
                  }`}
                >
                  COMEÇAR AGORA
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
        <p className="mt-12 text-center text-xs text-gray-400 font-bold max-w-2xl mx-auto italic">
          * A UNILIKE é nossa plataforma educacional com conteúdos dos treinadores oficiais, diretores e líderes. A adesão inclui o acesso à plataforma mais o valor em produtos à livre escolha.
        </p>
      </div>
    </section>
  );
}

