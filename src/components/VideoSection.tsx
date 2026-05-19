import { Play } from 'lucide-react';

export default function VideoSection() {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-black text-like-dark tracking-tighter uppercase leading-[0.9] mb-8">
              CONHEÇA A <br /> <span className="text-like-red">ESSÊNCIA DA LIKE BRASIL</span>
            </h2>
            <p className="text-gray-600 text-lg font-medium leading-relaxed mb-10">
              Assista ao vídeo e entenda por que milhares de pessoas estão mudando de vida com nossos produtos e nossa oportunidade de negócio.
            </p>
            
            <div className="space-y-6">
              {[
                'Produção 100% Nacional',
                'Matéria-prima Importada',
                'Tecnologia de Alta Fixação',
                'Logística Rápida e Segura'
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-like-red/10 flex items-center justify-center text-like-red">
                    <div className="w-2 h-2 rounded-full bg-like-red" />
                  </div>
                  <span className="font-bold text-like-dark">{text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-like-red/10 rounded-[2.5rem] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity" />
            <div className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
              <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/oA9qbAyrYog" 
                title="Conheça a Like Brasil"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <div className="absolute inset-0 bg-like-dark/40 flex items-center justify-center pointer-events-none group-hover:opacity-0 transition-opacity">
                <div className="w-20 h-20 rounded-full bg-like-red flex items-center justify-center text-white animate-pulse">
                  <Play size={40} className="fill-current" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
