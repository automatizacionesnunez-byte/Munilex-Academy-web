import { motion } from 'framer-motion';
import { Target, CheckCircle, Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const CNPBadge = ({ className }: { className?: string }) => (
  <img 
    src="/policia_nacional.png" 
    alt="Escudo Cuerpo Nacional de Policia"
    className={className} 
  />
);

const AcademyPolicia = () => {
  return (
    <div className="pt-48 pb-24 min-h-screen bg-[#131313] text-[#E5E2E1] px-6 md:px-8 relative overflow-hidden font-inter selection:bg-[#0ea5e9]/30">
      <Helmet>
        <title>Academia oposiciones Policía Nacional | Munilex Academy</title>
        <meta name="description" content="Academia oposiciones policía nacional online. Consigue tu placa en la Escala Básica. Entrenamiento en ortografía IA, teoría y psicotécnicos." />
      </Helmet>

      {/* Subtle Background Accents - BLUE for Policia */}
      <div className="absolute top-[20%] left-[-10%] w-[50rem] h-[50rem] bg-[#0ea5e9]/5 rounded-full blur-[150px] pointer-events-none" />
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#0ea5e9]/10 text-[#0ea5e9] text-[10px] font-black uppercase tracking-[0.3em] border border-[#0ea5e9]/20 w-fit">
               Escala Básica y Ejecutiva
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.85] text-white">
              TU PLACA <br />
              <span className="italic text-[#d4af37]">CUESTIÓN DE HONOR</span>
            </h1>
            
            <p className="text-xl text-white/50 font-semibold leading-relaxed max-w-xl">
              El entrenamiento más táctico. IA diseñada para aplastar la teoría penal, sociología y anticipar las preguntas trampa de los psicotécnicos.
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
            initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#0ea5e9]/20 to-transparent rounded-[3rem] blur-3xl opacity-50" />
            <div className="bg-[#1C1B1B] border border-white/5 rounded-[4rem] p-16 shadow-2xl relative group">
              <CNPBadge className="w-64 h-64 drop-shadow-[0_0_50px_rgba(255,215,0,0.2)] group-hover:scale-105 transition-transform duration-700" />
            </div>
          </motion.div>
        </div>

        {/* Section Header: Features */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black uppercase tracking-tighter text-white">Unidades de <span className="text-[#d4af37]">Entrenamiento</span></h2>
          <p className="text-white/40 text-xs font-bold mt-3 uppercase tracking-widest">Especialización táctica para la Policía Nacional</p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-32">
          {[
            {
               title: "Simulador Penal",
               desc: "Exámenes adaptativos que aprenden de tus errores legales. El algoritmo bombardea tus áreas débiles.",
               icon: <Shield className="w-6 h-6" />,
               accent: "#0ea5e9"
            },
            {
               title: "Psicotécnicos",
               desc: "Matrices generadas infinitamente para entrenar agilidad extrema bajo presión.",
               icon: <Target className="w-6 h-6" />,
               accent: "#0ea5e9"
            },
            {
               title: "Supuestos Prácticos",
               desc: "Resoluciones guiadas con justificación doctrinaria y jurisprudencial para perfeccionar la aplicación.",
               icon: <CheckCircle className="w-6 h-6" />,
               accent: "#0ea5e9"
            }
          ].map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#1C1B1B] border border-white/5 p-10 rounded-[3rem] hover:border-[#0ea5e9]/30 transition-all group"
            >
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-[#0ea5e9] mb-8 border border-[#0ea5e9]/10 group-hover:bg-[#0ea5e9] group-hover:text-black transition-all">
                {f.icon}
              </div>
              <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter">{f.title}</h3>
              <p className="text-white/40 text-sm font-bold leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* SEO Content Area */}
        <div className="max-w-4xl mx-auto border-t border-white/5 pt-20">
          <h2 className="text-3xl font-black mb-8 text-white uppercase tracking-tighter">Preparación Avanzada Policía Nacional</h2>
          <div className="space-y-6 text-white/50 font-medium leading-relaxed">
            <p>
              Aprobar la <span className="text-[#0ea5e9] font-bold underline decoration-2 decoration-[#0ea5e9]/30">Escala Básica de la Policía Nacional</span> exige mucho más que memorizar. En Munilex Academy, hemos desarrollado un sistema integral apoyado en tecnología de precisión.
            </p>
            <p>
              Nuestro ciber-simulador adapta los tests a tu curva de olvido, garantizando que dominas el <span className="text-[#d4af37] font-bold">Derecho Penal</span>, las Ciencias Sociales y los psicotécnicos con una eficiencia del 98%.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademyPolicia;
