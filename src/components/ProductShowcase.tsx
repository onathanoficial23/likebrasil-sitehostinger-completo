import { motion } from 'motion/react';
import imgOzonio from '../assets/images/regenerated_image_1779047157905.png';
import imgCapilar from '../assets/images/regenerated_image_1779047156532.png';
import imgPerfumaria from '../assets/images/regenerated_image_1779047155001.png';
import imgSuplementos from '../assets/images/regenerated_image_1779047151354.png';
import imgBodySplash from '../assets/images/regenerated_image_1779047149926.png';
import imgLinhaCompleta from '../assets/images/regenerated_image_1779047147977.png';

const products = [
  {
    category: 'Linha Ozônio',
    image: imgOzonio,
    description: 'Óleos ozonizados com intensa atividade antimicrobiana e regeneração tecidual.',
    brand: 'COSMÉTICOS LIKE'
  },
  {
    category: 'Cuidado Capilar',
    image: imgCapilar,
    description: 'Linha de shampoos, condicionadores e máscaras com tecnologia avançada.',
    brand: 'COSMÉTICOS LIKE'
  },
  {
    category: 'Perfumaria Fine',
    image: imgPerfumaria,
    description: 'Fragrâncias mais vendidas no mundo com tecnologia Biolike (Infravermelho Longo).',
    brand: 'LIKESENSE'
  },
  {
    category: 'Linha de Suplementos',
    image: imgSuplementos,
    description: 'Nutracêuticos de alta performance para saúde e bem-estar diário.',
    brand: 'NUTRITION LINE'
  },
  {
    category: 'Body Splash & Hidratação',
    image: imgBodySplash,
    description: 'Toque sedoso e pele perfumada com fragrâncias intensas.',
    brand: 'SOFT TOUCH'
  },
  {
    category: 'LINHA COMPLETA LIKE',
    image: imgLinhaCompleta,
    description: 'Linha completa de Perfumaria e Cosméticos',
    brand: 'ORIENTAL LINE'
  }
];

export default function ProductShowcase() {
  return (
    <section id="produtos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-black text-like-dark tracking-tighter uppercase leading-none">
              NOSSAS <span className="text-like-red">LINHAS DE PRODUTOS</span>
            </h2>
            <p className="mt-4 text-gray-600 font-medium">
              Oferecemos o que há de melhor em ozônio, cosméticos, suplementos e perfumaria de alta concentração e fixação.
            </p>
          </div>
          <a 
            href="https://likebrasil.com.br/consultor/onathanoficial"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border-2 border-like-dark text-like-dark font-black text-xs tracking-widest uppercase hover:bg-like-dark hover:text-white transition-all text-center"
          >
            VER CATÁLOGO COMPLETO
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <a 
              key={product.category}
              href="https://likebrasil.com.br/consultor/onathanoficial"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-square sm:aspect-[3/4] overflow-hidden rounded-2xl bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.category}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-like-dark/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-[10px] font-black tracking-widest uppercase rounded">
                      {product.brand}
                    </span>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6 text-white transform transition-transform group-hover:-translate-y-2">
                    <h3 className="text-xl font-bold mb-2 uppercase tracking-tight">{product.category}</h3>
                    <p className="text-sm opacity-80 leading-snug line-clamp-2">
                      {product.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </a>
          ))}
        </div>

        {/* Feature bar */}
        <div className="mt-20 bg-like-dark rounded-3xl p-1 px-1 flex flex-col md:flex-row items-stretch gap-1">
          {[
            { label: 'MAIS DE 180', sub: 'FRANQUIAS NO BRASIL' },
            { label: 'PAGAMENTO', sub: 'DIÁRIO DAS VENDAS' },
            { label: 'LUCRO DE ATÉ', sub: '100% NA REVENDA' }
          ].map((stat, i) => (
            <div key={i} className="flex-1 bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center text-white border border-white/5">
              <p className="text-2xl font-black mb-1">{stat.label}</p>
              <p className="text-[10px] font-bold text-like-gold uppercase tracking-[0.2em]">{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

