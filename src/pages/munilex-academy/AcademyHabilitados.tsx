import { motion } from 'framer-motion';
import { Scale, BookOpen, Mic, Landmark, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const HabilitadosShield = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M120 20L200 60V140C200 190 120 220 120 220C120 220 40 190 40 140V60L120 20Z" fill="#0A0A0A" stroke="url(#oldGold)" strokeWidth="6" />
    <path d="M120 40V200" stroke="url(#oldGold)" strokeWidth="4" strokeLinecap="round" />
    <path d="M70 90H170" stroke="url(#oldGold)" strokeWidth="4" strokeLinecap="round" />
    <path d="M120 120C136.569 120 150 106.569 150 90C150 73.4315 136.569 60 120 60C103.431 60 90 73.4315 90 90C90 106.569 103.431 120 120 120Z" stroke="url(#oldGold)" strokeWidth="4" />
    <defs>
      <linearGradient id="oldGold" x1="120" y1="20" x2="120" y2="220" gradientUnits="userSpaceOnUse">
        <stop stopColor="#D4AF37" />
        <stop offset="0.5" stopColor="#AA8222" />
        <stop offset="1" stopColor="#755B11" />
      </linearGradient>
    </defs>
  </svg>
);

const AcademyHabilitados = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-surface text-on-surface px-6 md:px-8 relative overflow-hidden font-inter selection:bg-police-gold/20 selection:text-on-surface">
      <Helmet>
        <title>Preparador habilitados nacionales | Munilex Academy</title>
        <meta name="description" content="Academia online para Habilitados Nacionales (Secretaría, Intervención y Tesorería). Cante de temas online, simulador oral IA y preparación A1." />
      </Helmet>
      
      {/* Abstract background elements */}
      <div className="absolute top-0 right-0 w-full h-[60vh] bg-gradient-to-b from-police-gold/5 to-transparent pointer-events-none" />
      <div className="absolute top-[20%] left-[-10%] w-[30rem] h-[30rem] bg-police-gold/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center text-center mt-8 mb-24">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <HabilitadosShield className="w-24 h-24 mx-auto mb-8 drop-shadow-ambient" />
          <div className="inline-flex items-center gap-2 px-6 py-2 border border-outline-variant bg-white text-police-gold text-[10px] font-black uppercase tracking-[0.3em] shadow-ambient">
            Cuerpo de Élite Funcional
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] text-on-surface mb-8">
            Habilitados <br/> Nacionales
          </h1>
          <p className="text-xl md:text-2xl text-on-surface-variant font-medium leading-relaxed max-w-3xl mx-auto italic mb-10">
            "La columna vertebral jurídica y financiera de la Administración Local."
          </p>
          <p className="text-sm text-on-surface-variant/70 max-w-2xl mx-auto font-semibold uppercase tracking-widest leading-loose">
            Especialidades: Secretaría, Intervención-Tesorería y Secretaría-Intervención. Preparación de Nivel A1 con IA conversacional para el cante de temas.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-12"
        >
          <Link 
            to="/academy/precios"
            className="inline-flex items-center gap-4 px-10 py-5 bg-on-surface text-white font-black uppercase tracking-widest text-[11px] shadow-premium hover:opacity-90 transition-all rounded-xl"
          >
            Suscripción Premium <ChevronRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>

      {/* Elegant Bento Grid Layout */}
      <div className="max-w-6xl mx-auto z-10 relative mb-32">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8">
          
          {/* Card 1: Oral Simulation */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="bg-white border border-outline-variant rounded-[2.5rem] p-12 hover:border-police-gold/50 transition-all group shadow-ambient relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-police-gold/5 rounded-bl-full group-hover:bg-police-gold/10 transition-colors" />
            <Mic className="w-10 h-10 text-police-gold mb-8 group-hover:scale-110 transition-transform" />
            <h3 className="text-3xl font-black mb-6 uppercase tracking-tight text-on-surface">Dictado y Cante (IA)</h3>
            <p className="text-on-surface-variant leading-relaxed font-medium text-lg">
              Practica tu cante de temas en pijama. El motor transcribe, cronometra y evalúa la literalidad de tu exposición oral frente al temario oficial. Te avisa si has omitido epígrafes críticos.
            </p>
          </motion.div>

          {/* Card 2: Legal Cases */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="bg-white border border-outline-variant rounded-[2.5rem] p-12 hover:border-police-gold/50 transition-all group shadow-ambient relative overflow-hidden"
          >
            <div className="absolute bottom-0 right-0 p-8 opacity-[0.03] group-hover:opacity-10 transition-opacity">
              <Scale className="w-64 h-64 text-police-gold group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="relative z-10">
              <Landmark className="w-10 h-10 text-police-gold mb-8 group-hover:scale-110 transition-transform" />
              <h3 className="text-3xl font-black mb-6 uppercase tracking-tight text-on-surface">Supuestos Jurídicos</h3>
              <p className="text-on-surface-variant leading-relaxed font-medium text-lg max-w-sm">
                Pliegos de contratación, intervención de presupuestos, expropiaciones. Supuestos cortados a cuchillo de la actividad real de las Entidades Locales de España.
              </p>
            </div>
          </motion.div>

          {/* Full Width Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="md:col-span-2 bg-on-surface rounded-[3rem] p-12 flex flex-col md:flex-row items-center gap-12 shadow-premium"
          >
            <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-full flex items-center justify-center shrink-0">
              <BookOpen className="w-10 h-10 text-police-gold" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-black text-white mb-3 uppercase tracking-tight">Comunión de Leyes Actualizadas</h3>
              <p className="text-white/60 font-medium text-base leading-relaxed">
                Nuestro motor sincroniza diariamente con el BOE. Cualquier cambio en la LRJRL, TRHL, LCSP o el TREBEP se propaga instantáneamente. No estudiarás normas derogadas.
              </p>
            </div>
            <div className="font-black tracking-[.25em] text-police-gold text-xs font-black uppercase text-center border-t md:border-t-0 md:border-l border-white/10 pt-8 md:pt-0 md:pl-12 shrink-0">
              <div className="opacity-70 mb-2">Sincronización</div>
              <div className="text-5xl">24/7</div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* SEO & Expanded Content Area */}
      <div className="max-w-4xl mx-auto z-10 relative mt-32 border-t border-outline-variant pt-24 text-center">
        <h2 className="text-4xl font-black mb-12 text-on-surface uppercase tracking-tighter">Academia Secretaría Intervención</h2>
        <div className="prose prose-lg max-w-none prose-p:text-on-surface-variant prose-p:font-medium prose-strong:text-police-gold prose-strong:font-black prose-p:leading-relaxed">
          <p className="mb-8">
            Alcanzar el <strong>Cuerpo de Habilitados Nacionales A1</strong> (Subescala de Secretaría, Intervención-Tesorería o Secretaría-Intervención) es el nivel más alto de la burocracia local. Requieres más que esquemas; necesitas un <strong>Preparador Habilitados Nacionales A1</strong> algorítmico, siempre disponible y puramente objetivo.
          </p>
          <p className="mb-8">
            Nuestra <strong>Suscripción Premium Habilitados Nacionales</strong> no tiene rival en el mercado. Convierte el árido Derecho Administrativo y el Régimen Local en una experiencia formativa inmersiva. Utiliza nuestro <strong>Simulador oral oposiciones</strong> para ejecutar el famoso <strong>cante de temas online</strong>, donde la IA evaluará tu cadencia, exactitud literal y gestión del tiempo en tiempo real.
          </p>
          <p className="font-bold text-on-surface">
            Da un salto cualitativo exponencial enfrentándote a miles de <strong>casos prácticos Local</strong> de ayuntamientos reales, analizados y resueltos por nuestro núcleo jurídico. Domina el BOE y asegura tu nombramiento oficial.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AcademyHabilitados;
