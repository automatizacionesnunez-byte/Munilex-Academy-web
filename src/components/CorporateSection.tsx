import { motion } from 'framer-motion';
import { Cpu, Smartphone, Layers, CheckCircle2 } from 'lucide-react';

const coreFeatures = [
  {
    title: 'Desarrollo a Medida',
    desc: 'Adaptación técnica a los objetivos específicos de su institución.',
    icon: <Smartphone className="w-5 h-5" />
  },
  {
    title: 'Personalización Total',
    desc: 'Integramos sus metodologías en el núcleo de nuestra IA corporativa.',
    icon: <Cpu className="w-5 h-5" />
  },
  {
    title: 'Escalabilidad Global',
    desc: 'Infraestructura preparada para el crecimiento de sus alumnos.',
    icon: <Layers className="w-5 h-5" />
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
            ¿Alguna duda sobre nuestra plataforma? <span className="text-[#0066FF] italic">Nuestro equipo te atenderá en tiempo récord.</span>
          </h2>
          <p className="text-xl text-[#002B5B]/60 font-semibold max-w-2xl mx-auto">
            Descubra cómo podemos adaptar Munilex para su <span className="text-[#002B5B]">Ayuntamiento</span>, <span className="text-[#002B5B]">Academia</span> u <span className="text-[#002B5B]">Oposiciones</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coreFeatures.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 border border-slate-100 rounded-[2.5rem] bg-white shadow-ambient hover:shadow-premium transition-all group"
            >
              <div className="w-12 h-12 bg-[#F0F7FF] text-[#0066FF] rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                {f.icon}
              </div>
              <h4 className="text-xl font-black text-[#002B5B] mb-3 tracking-tight">{f.title}</h4>
              <p className="text-sm text-[#002B5B]/60 font-semibold leading-relaxed mb-8">
                {f.desc}
              </p>
              
              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#0066FF]">
                <CheckCircle2 className="w-4 h-4" />
                Soporte Prioritario
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
