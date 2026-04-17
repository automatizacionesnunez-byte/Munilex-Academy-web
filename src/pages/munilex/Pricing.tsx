import Pricing from '../../components/Pricing';
import { motion } from 'framer-motion';
import { CheckCircle, BarChart, Users, Phone } from 'lucide-react';

const PricingPage = () => {
  return (
    <div className="pt-24 min-h-screen">
      <section className="py-24 px-6 md:px-8 bg-white text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center bg-secondary-cyan/10 px-4 py-2 rounded-full mb-8 border border-secondary-cyan/20">
            <span className="w-2 h-2 bg-secondary-cyan rounded-full animate-pulse mr-2" />
            <span className="text-secondary-cyan text-[13px] font-black uppercase tracking-widest">Inversión Transparente</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-primary leading-tight tracking-tighter mb-12">
            Planes diseñados para cada <span className="text-primary-container italic">perfil jurídico</span>
          </h1>
          <p className="text-xl text-primary/60 max-w-3xl mx-auto leading-relaxed">
            Inscripción flexible con transparencia total. Elija el plan que se adapte a su volumen de consultas y necesidades institucionales.
          </p>
        </motion.div>
      </section>

      <Pricing hideHeader={true} />

      {/* Enterprise / Ayuntamiento Details */}
      <section className="py-32 bg-surface-low border-t border-surface-variant/30">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-black text-primary mb-12 flex items-center gap-4">
                <span className="w-12 h-1 text-primary-container bg-primary-container" />
                Soluciones para Ayuntamientos
              </h2>
              <p className="text-primary/70 text-lg leading-relaxed mb-12 font-inter">
                Ofrecemos despliegues corporativos que unifican a toda la secretaría, intervención y tesorería en una sola plataforma inteligente.
              </p>
              <ul className="space-y-6">
                {[
                  { title: "Dashboard Corporativo", desc: "Gestione consumos y roles por departamento.", icon: <BarChart /> },
                  { title: "Soporte Prioritario 24/7", desc: "Canal directo con consultores jurídicos e ingenieros.", icon: <Phone /> },
                  { title: "Formación Presencial", desc: "Talleres prácticos sobre IA aplicada al Derecho Administrativo.", icon: <Users /> }
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-6 items-start">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center">
                       {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-1 tracking-tight">{item.title}</h4>
                      <p className="text-primary/60 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative rounded-[3rem] overflow-hidden shadow-premium group min-h-[500px]">
              <img 
                src="/ayuntamiento_premium.png" 
                alt="Modern Spanish City Hall" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent" />
              <div className="absolute bottom-10 left-10 right-10 text-white">
                <h3 className="text-4xl font-black mb-4">Presupuesto a Medida</h3>
                <p className="text-white/80 text-lg leading-relaxed mb-8">
                  Personalizamos el coste según el censo municipal y la cantidad de habilitados activos.
                </p>
                <div className="space-y-3 mb-10">
                  {["Sin límite de consultas", "Integración API Directa", "SLA 99.9% Garantizado"].map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary-cyan" />
                      <span className="font-bold text-white/90">{feat}</span>
                    </div>
                  ))}
                </div>
                <button className="w-full btn-primary !bg-white !text-primary py-5 text-lg font-black shadow-2xl hover:!bg-white/90">
                  Solicitar Oferta Personalizada
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
