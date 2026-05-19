import earningsImg from '../assets/images/regenerated_image_1779048502448.png';

export default function EarningsEstimator() {
  return (
    <section className="py-20 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-like-dark tracking-tighter uppercase">
            POTENCIAL DE <span className="text-like-red">GANHOS REAIS</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Com lucro de 100% na revenda direta e comissões agressivas no digital, você constrói sua liberdade financeira.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
          <div>
            <span className="text-like-red font-black text-xs tracking-widest uppercase mb-4 block">Exemplo de Lucro</span>
            <h3 className="text-3xl font-black text-like-dark tracking-tight uppercase mb-6 leading-tight">
              GANHE <span className="text-like-red">R$ 3.117,00</span> <br /> POR MÊS
            </h3>
            <p className="text-gray-600 font-medium mb-8 leading-relaxed">
              Vendendo apenas <strong>1 Colágeno por dia</strong>, você garante um lucro livre de mais de 3 mil reais mensais. Imagine o potencial com a linha completa!
            </p>
            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-sm font-bold text-like-dark">Pagamento Diário das Vendas</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-sm font-bold text-like-dark">40% de Comissão no Online</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-sm font-bold text-like-dark">50% de Desconto para Consumo</span>
              </div>
            </div>
            
            <a 
              href="https://likebrasil.com.br/consultor/onathanoficial"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-like-red text-white rounded-xl font-black text-sm shadow-lg hover:bg-like-red-dark transition-all hover:scale-105 uppercase tracking-tighter w-full sm:w-auto"
            >
              Quero esses Ganhos
            </a>
          </div>
          <a 
            href="https://likebrasil.com.br/consultor/onathanoficial"
            target="_blank"
            rel="noopener noreferrer"
            className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-white block transition-transform hover:scale-[1.02]"
          >
            <img 
              src={earningsImg} 
              alt="Ganhos Like Brasil"
              className="w-full h-auto block"
              referrerPolicy="no-referrer"
            />
          </a>
        </div>

        {/* Badges */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Lucro Direto', bold: '100% DE MARGEM' },
            { label: 'Bônus Unilevel', bold: 'GANHOS EM 4 NÍVEIS' },
            { label: 'Plano de Carreira', bold: 'PRÊMIOS E VIAGENS' },
            { label: 'Indicação', bold: 'BÔNUS DIÁRIOS' }
          ].map((item, i) => (
            <div key={i} className="text-center p-4">
              <p className="text-[10px] text-gray-400 uppercase tracking-tighter mb-1 leading-none">{item.label}</p>
              <p className="text-xs font-black text-like-dark tracking-tighter leading-none">{item.bold}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
