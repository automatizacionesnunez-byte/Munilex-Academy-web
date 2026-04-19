import { motion } from 'framer-motion';
import { Lock, ShieldAlert, ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const PrisonGridSystem = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect x="20" y="20" width="80" height="80" rx="10" stroke="#ef4444" strokeWidth="4" strokeDasharray="10 5" />
    <rect x="140" y="20" width="80" height="80" rx="10" fill="#7F1D1D" fillOpacity="0.5" stroke="#F87171" strokeWidth="2" />
    <rect x="20" y="140" width="80" height="80" rx="10" fill="#7F1D1D" fillOpacity="0.2" stroke="#ef4444" strokeWidth="2" />
    <rect x="140" y="140" width="80" height="80" rx="10" stroke="#ef4444" strokeWidth="4" />
    <path d="M180 60V80" stroke="#FCA5A5" strokeWidth="4" strokeLinecap="round" />
    <path d="M160 50L200 90" stroke="#FCA5A5" strokeWidth="2" opacity="0.5" />
    <circle cx="60" cy="180" r="15" fill="url(#redGradient)" />
    <defs>
      <linearGradient id="redGradient" x1="20" y1="20" x2="220" y2="220" gradientUnits="userSpaceOnUse">
        <stop stopColor="#ef4444" />
        <stop offset="1" stopColor="#7F1D1D" />
      </linearGradient>
    </defs>
  </svg>
);

const AcademyIIPP = () => {
  return (
    <div className="pt-48 pb-24 min-h-screen bg-[#131313] text-[#E5E2E1] px-6 md:px-8 relative overflow-hidden font-inter selection:bg-[#ef4444]/30">
      <Helmet>
        <title>Academia ayudante instituciones penitenciarias | Munilex Academy</title>
        <meta name="description" content="Academia experta en prisiones. LOGP resumida, casos prácticos online y derecho penitenciario para tu oposición a Ayudante de Instituciones Penitenciarias." />
      </Helmet>

      {/* Subtle Background Accents - RED for Prisiones */}
      <div className="absolute top-[20%] left-[-10%] w-[50rem] h-[50rem] bg-[#ef4444]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-[10%] right-[-5%] w-[30rem] h-[30rem] bg-[#d4af37]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 pt-16">
        
        {/* Header Section */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#ef4444]/10 text-[#ef4444] text-[10px] font-black uppercase tracking-[0.3em] border border-[#ef4444]/20 w-fit">
               Cuerpo de Ayudantes de IIPP
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] text-white">
              CONTROL <br />
              <span className="italic text-[#d4af37]">ABSOLUTO</span>
            </h1>
            
            <p className="text-xl text-white/50 font-semibold leading-relaxed max-w-xl">
              Asegura el bloque de Derecho Penitenciario. Una preparación táctica, densa e inquebrantable para superar a tus opositores.
            </p>

            <div className="flex flex-wrap gap-4">
               <Link 
                to="/academy/contacto"
                className="inline-flex items-center gap-3 px-10 py-5 bg-[#d4af37] text-black font-black uppercase tracking-widest text-[11px] rounded-xl hover:scale-105 transition-all shadow-xl shadow-[#d4af37]/10"
              >
                Inicia el Entrenamiento <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#ef4444]/20 to-transparent rounded-[3rem] blur-3xl opacity-50" />
            <div className="bg-[#1C1B1B] border border-white/5 rounded-[4rem] p-16 shadow-2xl relative group">
              <PrisonGridSystem className="w-64 h-64 drop-shadow-[0_0_50px_rgba(239,68,68,0.2)] group-hover:scale-105 transition-transform duration-700" />
            </div>
          </motion.div>
        </div>

        {/* Section Header: Features */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black uppercase tracking-tighter text-white">Sistemas de <span className="text-[#d4af37]">Control</span></h2>
          <p className="text-white/40 text-xs font-bold mt-3 uppercase tracking-widest">Especialización en Derecho Penitenciario</p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-32">
          {[
            {
               title: "LOGP y Reglamento",
               desc: "Resolvemos supuestos prácticos reales: libertades, aislamientos y régimen disciplinario actualizado.",
               icon: <Lock className="w-6 h-6" />,
               accent: "#ef4444"
            },
            {
               title: "Función Pública",
               desc: "Consolida la Parte General, Penal y Estructura Orgánica asegurando el apto sin riesgos.",
               icon: <ShieldCheck className="w-6 h-6" />,
               accent: "#ef4444"
            },
            {
               title: "Supuestos Reales",
               desc: "Analizamos la casuística de tratamiento de reclusos y situaciones de seguridad críticas.",
               icon: <ShieldAlert className="w-6 h-6" />,
               accent: "#ef4444"
            }
          ].map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#1C1B1B] border border-white/5 p-10 rounded-[3rem] hover:border-[#ef4444]/30 transition-all group"
            >
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-[#ef4444] mb-8 border border-[#ef4444]/10 group-hover:bg-[#ef4444] group-hover:text-black transition-all">
                {f.icon}
              </div>
              <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter">{f.title}</h3>
              <p className="text-white/40 text-sm font-bold leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* SEO Content Area */}
        <div className="max-w-4xl mx-auto border-t border-white/5 pt-20">
          <h2 className="text-3xl font-black mb-8 text-white uppercase tracking-tighter">Preparación Instituciones Penitenciarias Élite</h2>
          <div className="space-y-6 text-white/50 font-medium leading-relaxed">
            <p>
              Alcanzar tu meta como <span className="text-[#ef4444] font-bold underline decoration-2 decoration-[#ef4444]/30">Ayudante de Instituciones Penitenciarias</span> demanda un conocimiento férreo del Código Penal y la LOGP. En Munilex Academy, forjamos operadores jurídicos de máximo nivel.
            </p>
            <p>
              Nuestro sistema genera incontables <span className="text-[#d4af37] font-bold">casos prácticos Prisiones</span> fundamentados jurídicamente, basados estrictamente en la última normativa consolidada del BOE.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademyIIPP;
