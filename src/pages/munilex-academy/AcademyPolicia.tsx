import { motion } from 'framer-motion';
import { Target, CheckCircle, MoveRight } from 'lucide-react';
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
    <div className="pt-32 pb-24 min-h-screen bg-[#0A0E1A] text-white px-6 md:px-8 relative overflow-hidden font-inter">
      <Helmet>
        <title>Academia oposiciones policía y GC | Munilex Academy</title>
        <meta name="description" content="Academia oposiciones policía nacional online. Consigue tu placa en la Escala Básica. Entrenamiento en ortografía IA, teoría y psicotécnicos." />
      </Helmet>
      {/* Background Orbs */}
      <div className="absolute top-[-10%] right-[-5%] w-[40rem] h-[40rem] bg-[#FFD700]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[30rem] h-[30rem] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 grid lg:grid-cols-[1fr_0.8fr] gap-16 items-center mb-24">
        
        {/* Asymmetrical Hero */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#FFD700]/10 text-[#FFD700] text-[11px] font-black uppercase tracking-[0.2em] border border-[#FFD700]/20 w-fit">
            Cuerpo Nacional de Policía
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] text-white">
            Tu placa  
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#FFEDA3]">
               te espera.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-[#B0B8CF] font-medium leading-relaxed max-w-xl mt-4">
            El entrenamiento más táctico. IA diseñada para aplastar la teoría penal, sociología y anticipar las preguntas trampa de los psicotécnicos. 
          </p>

          <Link 
            to="/academy/precios"
            className="mt-8 inline-flex items-center justify-between px-8 py-5 bg-gradient-to-br from-[#FFD700] to-[#E5C100] text-[#0A0E1A] font-black uppercase tracking-wider rounded-xl text-sm w-fit group shadow-[0_0_30px_rgba(255,215,0,0.3)] hover:shadow-[0_0_50px_rgba(255,215,0,0.5)] transition-all hover:scale-105"
          >
            Inicia el Entrenamiento
            <MoveRight className="w-5 h-5 ml-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Floating Identity Component */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-transparent rounded-[3rem] blur-xl" />
          <div className="bg-[#1B1F2C]/60 backdrop-blur-2xl border-t border-l border-white/5 rounded-[3rem] p-12 shadow-2xl relative">
            <CNPBadge className="w-64 h-64 drop-shadow-[0_0_40px_rgba(255,215,0,0.2)]" />
          </div>
        </motion.div>
      </div>

      {/* Bento Grid layout */}
      <div className="max-w-6xl mx-auto z-10 relative">
        <h2 className="text-3xl font-black mb-10 text-white tracking-tighter">
          NÚCLEO MÓDULAR
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Very Large (Glassmorphism) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="col-span-1 md:col-span-2 bg-[#1B1F2C]/70 backdrop-blur-xl border border-white/5 rounded-3xl p-10 hover:border-[#FFD700]/20 transition-all flex flex-col justify-between"
          >
            <div>
              <CNPBadge className="w-16 h-16 mb-6 drop-shadow-md" />
              <h3 className="text-2xl font-black mb-4 font-space-grotesk tracking-tight">Ciber-Simulador Temario</h3>
              <p className="text-[#B0B8CF] leading-relaxed max-w-lg mb-8">
                Penal, Constitución y Sociología. Exámenes adaptativos que aprenden de tus errores. El algoritmo bombardea tus áreas débiles hasta erradicarlas.
              </p>
            </div>
            <div className="flex gap-4">
              <span className="px-3 py-1 bg-[#0A0E1A] rounded-md text-[10px] text-[#FFD700] uppercase font-bold tracking-widest border border-white/5">Auto-evaluación</span>
              <span className="px-3 py-1 bg-[#0A0E1A] rounded-md text-[10px] text-[#FFD700] uppercase font-bold tracking-widest border border-white/5">Ranking Nacional</span>
            </div>
          </motion.div>

          {/* Card 2: Vertical */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="bg-[#171B28]/80 backdrop-blur-xl border border-white/5 rounded-3xl p-10 hover:border-[#FFD700]/20 transition-all flex flex-col items-center text-center justify-center"
          >
            <div className="font-space-grotesk text-6xl font-black text-white mb-2 tracking-tighter">98<span className="text-[#FFD700]">%</span></div>
            <div className="text-[11px] uppercase tracking-[0.2em] text-[#B0B8CF] font-bold">Rendimiento Operativo</div>
            <p className="text-sm text-[#B0B8CF]/60 mt-6">
              De los alumnos que siguieron la IA Munilex lograron pasar el corte teórico.
            </p>
          </motion.div>

          {/* Card 3: Small Horizontal */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="md:col-span-1 bg-[#171B28]/80 backdrop-blur-xl border border-white/5 rounded-3xl p-10 hover:border-[#FFD700]/20 transition-all"
          >
            <Target className="w-10 h-10 text-white mb-6" />
            <h3 className="text-xl font-black mb-3">Psicotécnicos</h3>
            <p className="text-sm text-[#B0B8CF] leading-relaxed">
              Órdenes, figuras, matemáticas. Matrices generadas infinitamente para entrenar agilidad extrema bajo presión.
            </p>
          </motion.div>

          {/* Card 4: Long Horizontal */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
            className="md:col-span-2 bg-gradient-to-r from-[#FFD700]/10 to-transparent border border-[#FFD700]/10 rounded-3xl p-10 flex flex-col justify-center"
          >
            <h3 className="text-xl font-black mb-3 text-[#FFD700]">Supuestos Prácticos Tácticos</h3>
            <p className="text-[#B0B8CF] leading-relaxed max-w-lg mb-6">
              Afronta casos operativos reales aplicados al marco jurídico-penal. Resoluciones guiadas con justificación doctrinaria y jurisprudencial para perfeccionar la aplicación de la norma.
            </p>
            <div className="flex gap-2 text-xs font-bold font-space-grotesk tracking-widest text-white/50">
              <CheckCircle className="w-4 h-4 text-[#FFD700]" /> ANÁLISIS JURISPRUDENCIAL IA
            </div>
          </motion.div>
        </div>
      </div>

      {/* SEO & Expanded Content Area */}
      <div className="max-w-4xl mx-auto z-10 relative mt-24 border-t border-white/5 pt-16">
        <h2 className="text-3xl font-black mb-6 text-white">Preparación de Oposiciones Policía Nacional Avanzada</h2>
        <div className="prose prose-invert prose-p:text-[#B0B8CF] prose-a:text-[#FFD700]">
          <p className="mb-4">
            Aprobar la <strong>Escala Básica de la Policía Nacional</strong> o la <strong>Escala Ejecutiva</strong> exige mucho más que memorizar. En nuestra <em>academia online para Policía Nacional</em>, hemos desarrollado un sistema integral apoyado en Inteligencia Artificial.
          </p>
          <p className="mb-4">
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
