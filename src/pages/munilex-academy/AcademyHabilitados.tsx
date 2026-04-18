import { motion } from 'framer-motion';
import { Scale, BookOpen, Brain, Landmark, ChevronRight, Video, FileText, LayoutList } from 'lucide-react';
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
        <meta name="description" content="Academia online para Habilitados Nacionales (Secretaría, Intervención y Tesorería). Generador de test IA, casos prácticos y repositorio de legislación A1." />
      </Helmet>
      
      {/* Abstract background elements */}
      <div className="absolute top-0 right-0 w-full h-[80vh] pointer-events-none opacity-[0.07] grayscale mix-blend-multiply">
        <img src="/ayuntamiento_bg.png" alt="" className="w-full h-full object-cover object-top" />
      </div>
      <div className="absolute top-0 right-0 w-full h-[80vh] bg-gradient-to-b from-transparent via-surface to-surface pointer-events-none" />
      <div className="absolute top-[20%] left-[-10%] w-[40rem] h-[40rem] bg-police-gold/5 rounded-full blur-[150px] pointer-events-none" />

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
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-8 text-transparent bg-clip-text bg-gradient-to-r from-police-gold via-on-surface to-on-surface">
            Habilitados <br/> Nacionales
          </h1>
          <p className="text-xl md:text-2xl text-on-surface-variant font-medium leading-relaxed max-w-3xl mx-auto italic mb-10">
            "La columna vertebral jurídica y financiera de la Administración Local."
          </p>
          <p className="text-sm text-on-surface-variant/70 max-w-2xl mx-auto font-semibold uppercase tracking-widest leading-loose">
            Especialidades: Secretaría, Intervención-Tesorería y Secretaría-Intervención. Preparación de Nivel A1 con IA Generativa para Opositores de Élite.
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
      <div className="max-w-7xl mx-auto z-10 relative mb-32 px-4">
        <div className="grid md:grid-cols-6 gap-6">
          
          {/* Card 1: IA Test Generation */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="md:col-span-3 bg-white border border-outline-variant rounded-[2.5rem] p-10 hover:border-police-gold/50 transition-all group shadow-ambient relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-police-gold/5 rounded-bl-full group-hover:bg-police-gold/10 transition-colors" />
            <Brain className="w-10 h-10 text-police-gold mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-black mb-4 uppercase tracking-tight text-on-surface">Generación Tipo Test IA</h3>
            <p className="text-on-surface-variant font-medium leading-relaxed">
              Algoritmos que generan tests aleatorios respetando el modo oficial del examen. Entrena con preguntas inéditas basadas en la última legislación vigente.
            </p>
          </motion.div>

          {/* Card 2: Legal & Econ Cases */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="md:col-span-3 bg-white border border-outline-variant rounded-[2.5rem] p-10 hover:border-police-gold/50 transition-all group shadow-ambient relative overflow-hidden"
          >
            <LayoutList className="w-10 h-10 text-police-gold mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-black mb-4 uppercase tracking-tight text-on-surface">Casos Prácticos Élite</h3>
            <p className="text-on-surface-variant font-medium leading-relaxed">
              Módulos específicos para la parte <span className="text-police-gold">Jurídica</span> y <span className="text-police-gold">Económica</span>. Prepáralos de forma independiente o en bloques combinados según tu subescala.
            </p>
          </motion.div>

          {/* Card 3: Legislation Repository */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="md:col-span-2 bg-on-surface rounded-[2.5rem] p-10 shadow-premium"
          >
            <FileText className="w-10 h-10 text-police-gold mb-6" />
            <h3 className="text-xl font-black text-white mb-4 uppercase tracking-tight">Legislación A1</h3>
            <p className="text-white/60 font-medium text-sm leading-relaxed">
              Acceso instantáneo a toda la normativa sintetizada y actualizada. Sin PDFs obsoletos.
            </p>
          </motion.div>

          {/* Card 4: Flashcards */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
            className="md:col-span-2 bg-white border border-outline-variant rounded-[2.5rem] p-10 shadow-ambient"
          >
            <Landmark className="w-10 h-10 text-police-gold mb-6" />
            <h3 className="text-xl font-black text-on-surface mb-4 uppercase tracking-tight">Flashcards</h3>
            <p className="text-on-surface-variant font-medium text-sm leading-relaxed">
              Sistemas de repetición espaciada para memorizar plazos complejos y competencias municipales.
            </p>
          </motion.div>

          {/* Card 5: YouTube Repository */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
            className="md:col-span-2 bg-white border border-outline-variant rounded-[2.5rem] p-10 shadow-ambient border-l-4 border-l-police-gold"
          >
            <Video className="w-10 h-10 text-police-gold mb-6" />
            <h3 className="text-xl font-black text-on-surface mb-2 uppercase tracking-tight">Vídeos Curados</h3>
            <div className="flex items-center gap-2 mb-4">
              <span className="px-2 py-0.5 bg-police-gold/10 text-police-gold text-[9px] font-black rounded-full uppercase">Adaptación 100%</span>
            </div>
            <p className="text-on-surface-variant font-medium text-sm leading-relaxed">
              Repositorio de lecciones magistrales de los mejores canales, auditadas por IA según el temario.
            </p>
          </motion.div>

        </div>
      </div>

      {/* SEO & Expanded Content Area */}
      <div className="max-w-4xl mx-auto z-10 relative mt-32 border-t border-outline-variant pt-24 text-center">
        <h2 className="text-4xl font-black mb-12 text-on-surface uppercase tracking-tighter">Academia Secretaría Intervención</h2>
        <div className="prose prose-lg max-w-none prose-p:text-on-surface-variant prose-p:font-medium prose-strong:text-police-gold prose-strong:font-black prose-p:leading-relaxed px-4">
          <p className="mb-8 text-left">
            La preparación para el <strong>Cuerpo de Habilitados Nacionales A1</strong> exige herramientas de precisión quirúrgica. En Munilex Academy, hemos evolucionado el concepto de estudio tradicional para enfocarnos en la eficiencia absoluta.
          </p>
          <p className="mb-8 text-left">
            Nuestro <strong>Generador de Test con Inteligencia Artificial</strong> permite realizar simulacros en modo oficial, mientras que la sección de <strong>Casos Prácticos</strong> desglosa minuciosamente tanto la parte jurídica como la económica, fundamentales en las subescalas de Secretaría e Intervención. 
          </p>
          <p className="font-bold text-on-surface italic text-left">
            No pierdas tiempo buscando lecciones; nuestro repositorio de vídeos auditados y la base legislativa permanentemente actualizada te permiten centrarte exclusivamente en dominar el temario y conseguir tu plaza.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AcademyHabilitados;
