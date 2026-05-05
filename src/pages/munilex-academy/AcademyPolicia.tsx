import { motion } from 'framer-motion';
import { Target, CheckCircle, Shield, MoveRight } from 'lucide-react';
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
    <div className="pt-48 pb-24 min-h-screen bg-[#131313] text-[#E5E2E1] px-6 md:px-8 relative overflow-hidden font-inter selection:bg-[#d4af37]/20 selection:text-[#d4af37]">
      <Helmet>
        <title>Academia oposiciones policía y GC | Munilex Academy</title>
        <meta name="description" content="Academia oposiciones policía nacional online. Consigue tu placa en la Escala Básica. Entrenamiento en ortografía IA, teoría y psicotécnicos." />
      </Helmet>
      
      {/* Background Orbs */}
      <div className="absolute top-[-10%] right-[-5%] w-[40rem] h-[40rem] bg-[#d4af37]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[30rem] h-[30rem] bg-[#d4af37]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center mb-32 pt-16">
        
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-8"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-[#d4af37] text-[10px] font-black tracking-[0.3em] uppercase w-fit backdrop-blur-xl font-manrope">
            <div className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse" />
            Cuerpo Nacional de Policía
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.85] font-manrope text-white">
            TU PLACA  
            <br />
            <span className="italic text-[#d4af37]">
               TE ESPERA.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/50 font-semibold leading-relaxed max-w-xl font-inter">
            El entrenamiento más táctico. IA diseñada para aplastar la teoría penal, sociología y anticipar las preguntas trampa de los psicotécnicos. 
          </p>

          <Link 
            to="/academy/precios"
            className="inline-flex items-center justify-between px-10 py-5 bg-[#d4af37] text-black font-black uppercase tracking-widest rounded-2xl text-[11px] w-fit group shadow-xl shadow-[#d4af37]/10 hover:scale-105 transition-all font-manrope"
          >
            Inicia el Entrenamiento
            <MoveRight className="w-5 h-5 ml-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Badge Component */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="absolute inset-0 bg-[#d4af37]/5 rounded-[4rem] blur-3xl opacity-50" />
          <div className="bg-[#1C1B1B] border border-white/5 rounded-[4rem] p-16 shadow-2xl relative group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <CNPBadge className="w-64 h-64 drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)] group-hover:scale-105 transition-transform duration-700" />
          </div>
        </motion.div>
      </div>

      {/* Bento Grid */}
      <div className="max-w-7xl mx-auto z-10 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase font-manrope mb-4 text-white">Núcleo <span className="text-[#d4af37] italic">Operativo</span></h2>
          <p className="text-white/40 font-bold uppercase tracking-widest text-xs font-manrope">Sistemas avanzados de evaluación adaptativa.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="col-span-1 md:col-span-2 bg-[#1C1B1B] rounded-[3rem] p-12 border border-white/5 hover:border-[#d4af37]/30 shadow-2xl transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="w-16 h-16 mb-10 bg-black/50 rounded-2xl flex items-center justify-center border border-[#d4af37]/10 text-[#d4af37] group-hover:bg-[#d4af37] group-hover:text-black transition-all">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-black mb-6 tracking-tight uppercase font-manrope text-white">Ciber-Simulador Temario</h3>
              <p className="text-white/40 leading-relaxed max-w-lg mb-10 font-bold text-lg">
                Penal, Constitución y Sociología. Exámenes adaptativos que aprenden de tus errores. El algoritmo bombardea tus áreas débiles hasta erradicarlas.
              </p>
            </div>
            <div className="flex gap-4">
              <span className="px-5 py-2 bg-black/50 rounded-full text-[9px] text-[#d4af37] uppercase font-black tracking-[0.2em] border border-[#d4af37]/10">Auto-evaluación</span>
              <span className="px-5 py-2 bg-black/50 rounded-full text-[9px] text-[#d4af37] uppercase font-black tracking-[0.2em] border border-[#d4af37]/10">Ranking Nacional</span>
            </div>
          </motion.div>

          {/* Stats Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="bg-[#d4af37] rounded-[3rem] p-12 flex flex-col items-center text-center justify-center group shadow-xl shadow-[#d4af37]/20"
          >
            <div className="font-manrope text-8xl font-black mb-2 tracking-tighter text-black">98<span className="text-black/40">%</span></div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-black font-black">Rendimiento</div>
            <p className="text-sm text-black/60 mt-8 font-black leading-relaxed uppercase font-manrope">
              De los alumnos que siguieron la IA Munilex lograron pasar el corte teórico.
            </p>
          </motion.div>

          {/* Psychotech Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="md:col-span-1 bg-[#1C1B1B] rounded-[3rem] p-12 border border-white/5 hover:border-[#d4af37]/30 shadow-2xl transition-all group"
          >
            <div className="w-14 h-14 text-[#d4af37] mb-10 bg-black/50 rounded-2xl flex items-center justify-center border border-[#d4af37]/10 group-hover:bg-[#d4af37] group-hover:text-black transition-all">
               <Shield className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-black mb-4 uppercase font-manrope text-white">Psicotécnicos</h3>
            <p className="text-white/40 leading-relaxed font-bold">
              Órdenes, figuras, matemáticas. Matrices generadas infinitamente para entrenar agilidad extrema bajo presión.
            </p>
          </motion.div>

          {/* Cases Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
            className="md:col-span-2 bg-[#1C1B1B] rounded-[3rem] p-12 border border-white/5 hover:border-[#d4af37]/30 shadow-2xl transition-all flex flex-col justify-center"
          >
            <h3 className="text-2xl font-black mb-4 text-[#d4af37] uppercase font-manrope italic">Supuestos Prácticos Tácticos</h3>
            <p className="text-white/40 leading-relaxed max-w-lg mb-8 font-bold text-lg">
              Afronta casos operativos reales aplicados al marco jurídico-penal. Resoluciones guiadas con justificación doctrinaria y jurisprudencial para perfeccionar la aplicación de la norma.
            </p>
            <div className="flex items-center gap-3 text-[10px] font-black tracking-[0.2em] text-[#d4af37]/60 uppercase font-manrope">
              <div className="w-8 h-[1px] bg-[#d4af37]/30" />
              Análisis Jurisprudencial IA
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="max-w-4xl mx-auto z-10 relative mt-32 border-t border-white/5 pt-20">
        <h2 className="text-3xl md:text-5xl font-black mb-10 tracking-tighter uppercase font-manrope text-white italic">Preparación de Oposiciones Policía Nacional Avanzada</h2>
        <div className="space-y-6 text-white/50 font-semibold leading-relaxed text-lg">
          <p>
            Aprobar la <strong>Escala Básica de la Policía Nacional</strong> o la <strong>Escala Ejecutiva</strong> exige mucho más que memorizar. En nuestra <span className="text-[#d4af37]">academia online para Policía Nacional</span>, hemos desarrollado un sistema integral apoyado en Inteligencia Artificial.
          </p>
          <p>
            Al afrontar el <strong>temario de la Policía Nacional actualizado</strong> (Derecho Penal, Ciencias Sociales y materias técnico-científicas), nuestro ciber-simulador adapta los tests a tu curva de olvido. No solo practicamos teoría, también cubrimos exhaustivamente los <strong>test psicotécnicos CNP</strong> y ofrecemos simulacros de <strong>examen oficial de la Policía Nacional</strong> cronometrados.
          </p>
          <p>
            Prepárate con la herramienta definitiva para superar los test ortográficos, los psicotécnicos de inteligencia lógica y el duro marco legislativo penal. Consigue tu apto y domina el proceso selectivo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AcademyPolicia;
