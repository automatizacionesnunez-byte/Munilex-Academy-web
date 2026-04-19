import { motion } from 'framer-motion';
import { Scale, Mic, Landmark, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const HabilitadosShield = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M120 20L200 60V140C200 190 120 220 120 220C120 220 40 190 40 140V60L120 20Z" fill="#0A0A0A" stroke="#D4AF37" strokeWidth="6" />
    <path d="M120 40V200" stroke="#D4AF37" strokeWidth="4" strokeLinecap="round" />
    <path d="M70 90H170" stroke="#D4AF37" strokeWidth="4" strokeLinecap="round" />
    <path d="M120 120C136.569 120 150 106.569 150 90C150 73.4315 136.569 60 120 60C103.431 60 90 73.4315 90 90C90 106.569 103.431 120 120 120Z" stroke="#D4AF37" strokeWidth="4" />
  </svg>
);

const AcademyHabilitados = () => {
  return (
    <div className="pt-48 pb-24 min-h-screen bg-[#131313] text-[#E5E2E1] px-6 md:px-8 relative overflow-hidden font-inter selection:bg-[#d4af37]/30">
      <Helmet>
        <title>Preparador habilitados nacionales | Munilex Academy</title>
        <meta name="description" content="Academia online para Habilitados Nacionales (Secretaría, Intervención y Tesorería). Cante de temas online, simulador oral IA y preparación A1." />
      </Helmet>

      {/* Subtle Background Accents - GOLD for Habilitados */}
      <div className="absolute top-[20%] left-[-10%] w-[50rem] h-[50rem] bg-[#d4af37]/5 rounded-full blur-[150px] pointer-events-none" />
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#d4af37]/10 text-[#d4af37] text-[10px] font-black uppercase tracking-[0.3em] border border-[#d4af37]/20 w-fit">
               Subescala de Secretaría e Intervención
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] text-white">
              CÓDIGO <br />
              <span className="italic text-[#d4af37]">DE ÉLITE A1</span>
            </h1>
            
            <p className="text-xl text-white/50 font-semibold leading-relaxed max-w-xl">
              La columna vertebral jurídica y financiera de la Administración Local. Preparación de alto nivel con IA conversacional para el cante de temas.
            </p>

            <div className="flex flex-wrap gap-4">
               <Link 
                to="/contacto"
                className="inline-flex items-center gap-3 px-10 py-5 bg-[#d4af37] text-black font-black uppercase tracking-widest text-[11px] rounded-xl hover:scale-105 transition-all shadow-xl shadow-[#d4af37]/10"
              >
                Acceder a la Preparación <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/20 to-transparent rounded-[3rem] blur-3xl opacity-50" />
            <div className="bg-[#1C1B1B] border border-white/5 rounded-[4rem] p-16 shadow-2xl relative group">
              <HabilitadosShield className="w-64 h-64 drop-shadow-[0_0_50px_rgba(212,175,55,0.2)] group-hover:scale-105 transition-transform duration-700" />
            </div>
          </motion.div>
        </div>

        {/* Section Header: Features */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black uppercase tracking-tighter text-white">Preparación de <span className="text-[#d4af37]">Élite</span></h2>
          <p className="text-white/40 text-xs font-bold mt-3 uppercase tracking-widest">Sistemas avanzados para el Cuerpo A1</p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-32">
          {[
            {
               title: "Simulador de Cante",
               desc: "El motor transcribe, cronometra y evalúa la literalidad de tu exposición oral frente al temario oficial.",
               icon: <Mic className="w-6 h-6" />,
               accent: "#d4af37"
            },
            {
               title: "Supuestos Locales",
               desc: "Pliegos de contratación, intervención de presupuestos y expropiaciones analizados al detalle.",
               icon: <Landmark className="w-6 h-6" />,
               accent: "#d4af37"
            },
            {
               title: "Sincronización BOE",
               desc: "Cualquier cambio en la LCSP o el TREBEP se propaga instantáneamente a nuestros test.",
               icon: <Scale className="w-6 h-6" />,
               accent: "#d4af37"
            }
          ].map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#1C1B1B] border border-white/5 p-10 rounded-[3rem] hover:border-[#d4af37]/30 transition-all group"
            >
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-[#d4af37] mb-8 border border-[#d4af37]/10 group-hover:bg-[#d4af37] group-hover:text-black transition-all">
                {f.icon}
              </div>
              <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter">{f.title}</h3>
              <p className="text-white/40 text-sm font-bold leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* SEO Content Area */}
        <div className="max-w-4xl mx-auto border-t border-white/5 pt-20">
          <h2 className="text-3xl font-black mb-8 text-white uppercase tracking-tighter">Preparador Habilitados Nacionales A1</h2>
          <div className="space-y-6 text-white/50 font-medium leading-relaxed">
            <p>
              Alcanzar el <span className="text-[#d4af37] font-bold underline decoration-2 decoration-[#d4af37]/30">Cuerpo de Habilitados Nacionales A1</span> es el nivel más alto de la burocracia local. Requieres un sistema puramente objetivo y siempre disponible.
            </p>
            <p>
              Nuestra metodología convierte el árido <span className="font-bold underline italic decoration-1">Derecho Administrativo</span> en una experiencia formativa inmersiva, garantizando un nombramiento oficial con la preparación más avanzada del sector.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademyHabilitados;
