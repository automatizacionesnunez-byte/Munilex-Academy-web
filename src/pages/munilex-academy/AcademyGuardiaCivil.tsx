import { motion } from 'framer-motion';
import { Crosshair, BrainCircuit, RotateCcw, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const GCBadge = ({ className }: { className?: string }) => (
  <img 
    src="/guardia_civil.png" 
    alt="Emblema de la Guardia Civil"
    className={className} 
  />
);

const AcademyGuardiaCivil = () => {
  return (
    <div className="pt-48 pb-24 min-h-screen bg-[#131313] text-[#E5E2E1] px-6 md:px-8 relative overflow-hidden font-inter selection:bg-[#10b981]/30">
      <Helmet>
        <title>Academia oposiciones Guardia Civil | Munilex Academy</title>
        <meta name="description" content="Prepara tu Oposición a la Guardia Civil con IA. Especialización en ortografía, inglés táctico y temario oficial de Cabos y Guardias." />
      </Helmet>

      {/* Subtle Background Accents - GREEN for Guardia Civil */}
      <div className="absolute top-[20%] left-[-10%] w-[50rem] h-[50rem] bg-[#10b981]/5 rounded-full blur-[150px] pointer-events-none" />
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#10b981]/10 text-[#10b981] text-[10px] font-black uppercase tracking-[0.3em] border border-[#10b981]/20 w-fit">
               Escala de Cabos y Guardias
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.85] text-white">
              EL HONOR <br />
              <span className="italic text-[#d4af37]">NUESTRA DIVISA</span>
            </h1>
            
            <p className="text-xl text-white/50 font-semibold leading-relaxed max-w-xl">
              Suma de temario, ortografía extrema e inglés táctico en un solo motor de IA. Destruye el filtro gramatical de la prueba de acceso.
            </p>

            <div className="flex flex-wrap gap-4">
               <Link 
                to="/academy/contacto"
                className="inline-flex items-center gap-3 px-10 py-5 bg-[#d4af37] text-black font-black uppercase tracking-widest text-[11px] rounded-xl hover:scale-105 transition-all shadow-xl shadow-[#d4af37]/10"
              >
                Comenzar Entrenamiento <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: 3 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1 }}
            className="relative flex justify-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#10b981]/20 to-transparent rounded-[3rem] blur-3xl opacity-50" />
            <div className="bg-[#1C1B1B] border border-white/5 rounded-[4rem] p-16 shadow-2xl relative group">
              <GCBadge className="w-64 h-64 drop-shadow-[0_0_50px_rgba(16,185,129,0.2)] group-hover:scale-105 transition-transform duration-700" />
            </div>
          </motion.div>
        </div>

        {/* Section Header: Features */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black uppercase tracking-tighter text-white">Protocolos de <span className="text-[#d4af37]">Formación</span></h2>
          <p className="text-white/40 text-xs font-bold mt-3 uppercase tracking-widest">Metodología específica para la Benemérita</p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-32">
          {[
            {
               title: "Ortografía IA",
               desc: "Generamos frases trampa dinámicas con el nivel de dificultad exacto del tribunal.",
               icon: <Crosshair className="w-6 h-6" />,
               accent: "#10b981"
            },
            {
               title: "Inglés Táctico",
               desc: "Vocabulario policial y técnico adaptado específicamente a la convocatoria de la GC.",
               icon: <BrainCircuit className="w-6 h-6" />,
               accent: "#10b981"
            },
            {
               title: "Simulacros Oficiales",
               desc: "Exámenes de 100 preguntas con la densidad estadística real de los últimos 5 años.",
               icon: <RotateCcw className="w-6 h-6" />,
               accent: "#10b981"
            }
          ].map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#1C1B1B] border border-white/5 p-10 rounded-[3rem] hover:border-[#10b981]/30 transition-all group"
            >
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-[#10b981] mb-8 border border-[#10b981]/10 group-hover:bg-[#10b981] group-hover:text-black transition-all">
                {f.icon}
              </div>
              <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter">{f.title}</h3>
              <p className="text-white/40 text-sm font-bold leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* SEO Content Area */}
        <div className="max-w-4xl mx-auto border-t border-white/5 pt-20">
          <h2 className="text-3xl font-black mb-8 text-white uppercase tracking-tighter">Preparación de Élite para la Guardia Civil</h2>
          <div className="space-y-6 text-white/50 font-medium leading-relaxed">
            <p>
              Conseguir el <span className="text-[#10b981] font-bold">apto</span> y lograr aprobar las oposiciones de la Guardia Civil requiere una preparación sin margen de error. En Munilex Academy, fusionamos el rigor jurídico con las técnicas más punteras de IA.
            </p>
            <p>
              Nuestro sistema transforma el <span className="text-[#d4af37] font-bold italic underline decoration-1">temario oficial</span> en miles de simulacros interactivos y tests de ortografía adaptados que te acribillan allí donde fallas, garantizando una retención máxima.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademyGuardiaCivil;
