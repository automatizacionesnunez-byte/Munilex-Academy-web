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
    <div className="pt-32 pb-24 min-h-screen bg-surface text-on-surface px-6 md:px-8 relative overflow-hidden font-inter">
      <Helmet>
        <title>Academia oposiciones policía y GC | Munilex Academy</title>
        <meta name="description" content="Academia oposiciones policía nacional online. Consigue tu placa en la Escala Básica. Entrenamiento en ortografía IA, teoría y psicotécnicos." />
      </Helmet>
      
      {/* Background Orbs - Subtle Transparent to Accent */}
      <div className="absolute top-[-10%] right-[-5%] w-[40rem] h-[40rem] bg-police-gold/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[30rem] h-[30rem] bg-police/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 grid lg:grid-cols-[1fr_0.8fr] gap-16 items-center mb-24">
        
        {/* Asymmetrical Hero */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-police-gold/10 text-police-gold text-[10px] font-black uppercase tracking-[0.2em] border border-police-gold/20 w-fit">
            Cuerpo Nacional de Policía
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.95]">
            Tu placa  
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-police-gold to-police">
               te espera.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-on-surface-variant font-medium leading-relaxed max-w-xl mt-4">
            El entrenamiento más táctico. IA diseñada para aplastar la teoría penal, sociología y anticipar las preguntas trampa de los psicotécnicos. 
          </p>

          <Link 
            to="/academy/precios"
            className="mt-8 inline-flex items-center justify-between px-10 py-5 bg-on-surface text-white font-black uppercase tracking-wider rounded-2xl text-xs w-fit group shadow-premium hover:scale-105 transition-all"
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
          <div className="absolute inset-0 bg-police-gold/5 rounded-[3rem] blur-xl" />
          <div className="bg-white/80 backdrop-blur-2xl border border-outline-variant rounded-[3rem] p-12 shadow-premium relative">
            <CNPBadge className="w-64 h-64 drop-shadow-[0_20px_40px_rgba(0,0,0,0.1)]" />
          </div>
        </motion.div>
      </div>

      {/* Bento Grid layout */}
      <div className="max-w-6xl mx-auto z-10 relative">
        <h2 className="text-3xl font-black mb-10 tracking-tighter uppercase">
          Núcleo Modular
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Very Large */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="col-span-1 md:col-span-2 bg-white rounded-[2.5rem] p-10 border border-outline-variant hover:border-police-gold/40 shadow-ambient transition-all flex flex-col justify-between"
          >
            <div>
              <div className="w-16 h-16 mb-6">
                <CNPBadge className="w-full h-full object-contain" />
              </div>
              <h3 className="text-2xl font-black mb-4 tracking-tight uppercase">Ciber-Simulador Temario</h3>
              <p className="text-on-surface-variant leading-relaxed max-w-lg mb-8">
                Penal, Constitución y Sociología. Exámenes adaptativos que aprenden de tus errores. El algoritmo bombardea tus áreas débiles hasta erradicarlas.
              </p>
            </div>
            <div className="flex gap-4">
              <span className="px-3 py-1 bg-surface-low rounded-md text-[10px] text-police-gold uppercase font-bold tracking-widest border border-outline-variant">Auto-evaluación</span>
              <span className="px-3 py-1 bg-surface-low rounded-md text-[10px] text-police-gold uppercase font-bold tracking-widest border border-outline-variant">Ranking Nacional</span>
            </div>
          </motion.div>

          {/* Card 2: Vertical */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="bg-white rounded-[2.5rem] p-10 border border-outline-variant hover:border-police-gold/40 shadow-ambient transition-all flex flex-col items-center text-center justify-center"
          >
            <div className="font-manrope text-7xl font-black mb-2 tracking-tighter">98<span className="text-police-gold">%</span></div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-on-surface-variant font-bold">Rendimiento Operativo</div>
            <p className="text-sm text-on-surface-variant/70 mt-6 font-medium">
              De los alumnos que siguieron la IA Munilex lograron pasar el corte teórico.
            </p>
          </motion.div>

          {/* Card 3: Small Horizontal */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="md:col-span-1 bg-white rounded-[2.5rem] p-10 border border-outline-variant hover:border-police-gold/40 shadow-ambient transition-all"
          >
            <div className="w-10 h-10 text-police mb-6">
               <Target className="w-full h-full" />
            </div>
            <h3 className="text-xl font-black mb-3 uppercase">Psicotécnicos</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed font-medium">
              Órdenes, figuras, matemáticas. Matrices generadas infinitamente para entrenar agilidad extrema bajo presión.
            </p>
          </motion.div>

          {/* Card 4: Long Horizontal */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
            className="md:col-span-2 bg-white rounded-[2.5rem] p-10 border border-outline-variant hover:border-police-gold/40 shadow-ambient transition-all flex flex-col justify-center"
          >
            <h3 className="text-xl font-black mb-3 text-police-gold uppercase">Supuestos Prácticos Tácticos</h3>
            <p className="text-on-surface-variant leading-relaxed max-w-lg mb-6 font-medium">
              Afronta casos operativos reales aplicados al marco jurídico-penal. Resoluciones guiadas con justificación doctrinaria y jurisprudencial para perfeccionar la aplicación de la norma.
            </p>
            <div className="flex gap-2 text-[10px] font-black tracking-widest text-on-surface-variant/60 uppercase">
              <CheckCircle className="w-4 h-4 text-police-gold" /> Análisis Jurisprudencial IA
            </div>
          </motion.div>
        </div>
      </div>

      {/* SEO & Expanded Content Area */}
      <div className="max-w-4xl mx-auto z-10 relative mt-24 border-t border-outline-variant pt-16">
        <h2 className="text-3xl font-black mb-6 tracking-tighter uppercase">Preparación de Oposiciones Policía Nacional Avanzada</h2>
        <div className="prose prose-slate prose-p:text-on-surface-variant prose-strong:text-on-surface">
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
