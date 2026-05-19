import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EarningsEstimator from './components/EarningsEstimator';
import ProductShowcase from './components/ProductShowcase';
import KitSection from './components/KitSection';
import RegistrationSection from './components/RegistrationSection';
import FirstPurchaseSection from './components/FirstPurchaseSection';
import SupportMaterials from './components/SupportMaterials';
import NotificationToast from './components/NotificationToast';
import Footer from './components/Footer';
import YouTubeSection from './components/YouTubeSection';
import { Smartphone, Layout, Users, Star, BarChart3, Globe } from 'lucide-react';
import { motion } from 'motion/react';
import appLikeImage from './assets/images/regenerated_image_1779048187834.png';

export default function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-like-red selection:text-white">
      <Navbar />
      <NotificationToast />
      
      <main>
        <Hero />
        
        {/* Why choose Like Brasil - Quick Feature Section */}
        <section className="py-12 bg-white border-y border-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-between gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="flex items-center gap-2 font-black tracking-tighter text-xl uppercase">Pessoas</div>
              <div className="flex items-center gap-2 font-black tracking-tighter text-xl uppercase">Inovação</div>
              <div className="flex items-center gap-2 font-black tracking-tighter text-xl uppercase">Propósito</div>
              <div className="flex items-center gap-2 font-black tracking-tighter text-xl uppercase">Qualidade</div>
            </div>
          </div>
        </section>

        <ProductShowcase />
        
        {/* Income Opportunity Banner */}
        <section className="py-20 bg-like-red relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase mb-6">
              TORNE-SE UM <span className="text-like-dark">REVENDEDOR LIKE BRASIL</span>
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10 font-medium">
              A LIKE BRASIL Perfumes e Cosméticos oferece uma oportunidade única para quem deseja empreender com liberdade, autonomia e alto potencial de ganhos.
            </p>
            <a 
              href="https://likebrasil.com.br/consultor/onathanoficial" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-5 bg-white text-like-red rounded-2xl font-black text-lg shadow-2xl transition-all hover:scale-105"
            >
              CADASTRAR-SE AGORA
            </a>
          </div>
        </section>

        <EarningsEstimator />
        <SupportMaterials />

        {/* App Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="inline-flex items-center gap-2 px-4 py-1 bg-like-red/10 text-like-red text-xs font-black tracking-widest rounded-full mb-6">
                  <Smartphone size={14} /> EXCLUSIVIDADE
                </span>
                <h2 className="text-4xl md:text-5xl font-black text-like-dark tracking-tighter uppercase leading-none mb-6">
                  TUDO O QUE VOCÊ PRECISA <br /> <span className="text-like-red">NA PALMA DA MÃO</span>
                </h2>
                <p className="text-gray-600 font-medium mb-10 leading-relaxed">
                  Com a Plataforma Unilike, você gerencia suas vendas, faz pedidos rápidos, acessa materiais de apoio e acompanha seu crescimento em tempo real.
                </p>

                <div className="grid sm:grid-cols-2 gap-8 mb-10">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-like-red border border-gray-100">
                      <Layout size={20} />
                    </div>
                    <span className="font-bold text-like-dark text-sm">Catálogo Digital</span>
                  </div>

                  <a 
                    href="https://likebrasil.com.br/consultor/onathanoficial"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col gap-1 items-start hover:opacity-80 transition-opacity"
                  >
                    <img 
                      src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=200" 
                      alt="Materiais" 
                      className="w-12 h-12 rounded-lg object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <span className="text-[7px] font-black uppercase text-gray-400 tracking-tight">Materiais de Apoio</span>
                  </a>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-like-red border border-gray-100">
                      <BarChart3 size={20} />
                    </div>
                    <span className="font-bold text-like-dark text-sm">Relatórios de Ganhos</span>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-like-red border border-gray-100">
                      <Globe size={20} />
                    </div>
                    <span className="font-bold text-like-dark text-sm">Treinamentos Online</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <a 
                    href="https://likebrasil.com.br/consultor/onathanoficial"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-12 px-8 bg-like-dark rounded-lg flex items-center justify-center text-white gap-2 cursor-pointer hover:bg-black transition-colors"
                  >
                    <span className="text-sm font-black uppercase tracking-tighter">Conheça mais sobre a UNILIKE</span>
                  </a>
                </div>
              </div>

                <a 
                  href="https://likebrasil.com.br/consultor/onathanoficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block group"
                >
                  <div className="absolute -inset-10 bg-like-gold/10 rounded-full blur-3xl opacity-50 transition-opacity group-hover:opacity-100" />
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 flex items-center justify-center p-2 sm:p-0 transition-transform group-hover:scale-[1.01]"
                  >
                    <img 
                      src={appLikeImage} 
                      alt="App Like Brasil" 
                      className="w-full h-auto max-w-full block"
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                </a>
            </div>
          </div>
        </section>

        <KitSection />
        <RegistrationSection />
        <FirstPurchaseSection />
        <YouTubeSection />
      </main>

      <Footer />
    </div>
  );
}

