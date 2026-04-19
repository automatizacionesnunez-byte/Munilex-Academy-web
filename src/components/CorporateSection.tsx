import { motion } from 'framer-motion';
import { Cpu, Smartphone, Layers, CheckCircle2 } from 'lucide-react';

const plans = [
  {
    title: 'Plan Iniciación',
    desc: 'Integración del ecosistema Munilex Básico sin personalización de marca.',
    features: [
      'Dashboard de seguimiento (rachas, media...)',
      'Tests ilimitados por bloques y dificultad',
      'Tests de exámenes de convocatorias oficiales',
      'Casos prácticos con correcciones y explicaciones',
      'Flashcards de repaso y analítica de progreso'
    ],
    icon: <Layers className="w-6 h-6" />
  },
  {
    title: 'Plan Marca',
    desc: 'Integración del ecosistema Munilex Básico con personalización para su Academia.',
    features: [
      'Todo lo incluido en el Plan Iniciación',
      'Colores, tipografía y logo corporativo',
      'Personalización básica del entorno de estudio',
      '+1 Funcionalidad extra a elegir',
      'Soporte Prioritario'
    ],
    icon: <Smartphone className="w-6 h-6" />
  },
  {
    title: 'Plan Ecosistema',
    desc: 'Munilex a su medida. Proyecto ambicioso con funcionalidades totalmente personalizadas.',
    features: [
      'Desarrollo 100% personalizado bajo demanda',
      'Funcionalidades ilimitadas',
      'Integración total de sus metodologías',
      'Acompañamiento técnico continuo',
      'Infraestructura escalable dedicada'
    ],
    icon: <Cpu className="w-6 h-6" />
  }
];

const CorporateSection = () => {
  return (
    <section id="corporate-spotlight" className="py-24 bg-white border-t border-outline-variant/30">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <span className="text-[#0066FF] font-black uppercase tracking-[0.4em] text-xs md:text-sm mb-6 block">
            Munilex Academy Corporate
          </span>
          <h2 className="text-[#002B5B] text-3xl md:text-5xl leading-tight tracking-tighter max-w-3xl mx-auto mb-8">
            Nuestros planes de integración académica
          </h2>
          <p className="text-xl text-[#002B5B]/60 font-semibold max-w-2xl mx-auto">
            Descubra cómo podemos adaptar Munilex para su <span className="text-[#002B5B]">Ayuntamiento</span>, <span className="text-[#002B5B]">Academia</span> u <span className="text-[#002B5B]">Oposiciones</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 border border-slate-100 rounded-[2.5rem] bg-white shadow-ambient hover:shadow-premium transition-all group flex flex-col"
            >
              <div className="w-14 h-14 bg-[#F0F7FF] text-[#0066FF] rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                {p.icon}
              </div>
              <h4 className="text-2xl font-black text-[#002B5B] mb-3 tracking-tight">{p.title}</h4>
              <p className="text-sm text-[#002B5B]/60 font-semibold leading-relaxed mb-8 h-10">
                {p.desc}
              </p>
              
              <ul className="mb-8 space-y-4 flex-1">
                {p.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm font-semibold text-[#002B5B]/80 leading-snug">
                    <CheckCircle2 className="w-5 h-5 text-[#0066FF] shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#0066FF] mt-auto group-hover:text-[#002B5B] transition-colors">
                Contactar Asesor
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="px-10 py-5 bg-[#002B5B] text-white font-black uppercase tracking-widest text-[11px] rounded-xl hover:scale-105 transition-all shadow-premium">
            Contactar con Consultoría
          </button>
        </div>
      </div>
    </section>
  );
};

export default CorporateSection;
