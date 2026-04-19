import { motion } from 'framer-motion';
import { Landmark, GraduationCap, Building2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const pillars = [
  {
    id: 'funcion-publica',
    title: <><span className="text-[#002B5B]">Munilex</span> <span className="text-[#0066FF]">Función Pública</span></>,
    role: 'Administración Local',
    desc: 'Automatización técnica y rigor jurídico para secretarios e interventores.',
    icon: <Landmark className="w-6 h-6 text-[#0066FF]" />,
    color: 'bg-white',
    textColor: 'text-[#002B5B]',
    accentColor: 'text-[#0066FF]',
    link: '/funcionarios',
    borderColor: 'border-slate-100'
  },
  {
    id: 'academy',
    title: <><span className="text-white">Munilex</span> <span className="text-[#d4af37]">Academy</span></>,
    role: 'Preparación 24/7',
    desc: 'Herramienta para que opositores se formen 365 días al año desde cualquier parte del mundo.',
    icon: <GraduationCap className="w-6 h-6 text-[#d4af37]" />,
    color: 'bg-[#002B5B]',
    textColor: 'text-white',
    accentColor: 'text-[#d4af37]',
    link: '/academy',
    borderColor: 'border-white/5'
  },
  {
    id: 'corporate',
    title: <><span className="text-white">Munilex Academy</span> <span className="text-[#d4af37]">Corporate</span></>,
    role: 'Desarrollo a Medida',
    desc: 'Personalización integral y tecnología propia para academias y centros de formación.',
    icon: <Building2 className="w-6 h-6 text-[#d4af37]" />,
    color: 'bg-[#002B5B]',
    textColor: 'text-white',
    accentColor: 'text-[#d4af37]',
    link: '/academy/sobre-nosotros',
    borderColor: 'border-white/5'
  }
];

const BentoPillars = () => {
  return (
    <section className="py-24 bg-white border-y border-slate-50">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`relative overflow-hidden rounded-[3rem] p-10 flex flex-col justify-between group transition-all duration-500 hover:shadow-2xl border ${p.borderColor} ${p.color} ${p.textColor} min-h-[400px] shadow-xl`}
            >
              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-10 transition-transform group-hover:scale-110 ${p.id === 'funcion-publica' ? 'bg-[#F0F7FF]' : 'bg-white/5 border border-white/10'}`}>
                  {p.icon}
                </div>
                <div className="mb-6">
                  <span className={`text-[10px] font-black uppercase tracking-[0.3em] opacity-40 mb-3 block`}>
                    {p.role}
                  </span>
                  <h3 className={`text-3xl font-black tracking-tight leading-none`}>
                    {p.title}
                  </h3>
                </div>
                <p className={`text-base font-semibold leading-relaxed ${p.id === 'funcion-publica' ? 'text-[#002B5B]/60' : 'text-white/60'}`}>
                  {p.desc}
                </p>
              </div>

              <div className="relative z-10 pt-10">
                <Link 
                  to={p.link}
                  className={`inline-flex items-center gap-3 font-black uppercase tracking-widest text-[11px] group transition-colors ${p.accentColor}`}
                >
                  Saber más <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentoPillars;
