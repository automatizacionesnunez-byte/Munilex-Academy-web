import { motion } from 'framer-motion';
import { Lock, FileText, Activity, ShieldAlert, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const PrisonGridSystem = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Modular Cell Emulation - RED theme adapted for light clarity */}
    <rect x="20" y="20" width="80" height="80" rx="12" stroke="#7F1D1D" strokeWidth="4" strokeDasharray="10 5" />
    <rect x="140" y="20" width="80" height="80" rx="12" fill="#7F1D1D" fillOpacity="0.1" stroke="#7F1D1D" strokeWidth="2" />
    <rect x="20" y="140" width="80" height="80" rx="12" fill="#7F1D1D" fillOpacity="0.05" stroke="#7F1D1D" strokeWidth="2" />
    <rect x="140" y="140" width="80" height="80" rx="12" stroke="#7F1D1D" strokeWidth="4" />
    
    <path d="M180 60V80" stroke="#7F1D1D" strokeWidth="4" strokeLinecap="round" />
    <path d="M160 50L200 90" stroke="#7F1D1D" strokeWidth="2" opacity="0.3" />
    
    <circle cx="60" cy="180" r="15" fill="url(#redGradient)" />
    <defs>
      <linearGradient id="redGradient" x1="20" y1="20" x2="220" y2="220" gradientUnits="userSpaceOnUse">
        <stop stopColor="#EF4444" />
        <stop offset="1" stopColor="#7F1D1D" />
      </linearGradient>
    </defs>
  </svg>
);

const AcademyIIPP = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-surface text-on-surface px-6 md:px-8 relative overflow-hidden font-inter">
      <Helmet>
        <title>Academia ayudante instituciones penitenciarias | Munilex Academy</title>
        <meta name="description" content="Academia experta en prisiones. LOGP resumida, casos prácticos online y derecho penitenciario para tu oposición a Ayudante de Instituciones Penitenciarias." />
      </Helmet>
      
      {/* Tactical Red deep background orbs */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-prisons/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[30rem] h-[30rem] bg-red-900/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 grid lg:grid-cols-[1fr_0.8fr] gap-16 items-center mb-24">
        
        {/* Asymmetrical Hero */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-prisons/5 text-prisons text-[10px] font-black uppercase tracking-[0.2em] border border-prisons/10 w-fit">
            Instituciones Penitenciarias
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.95]">
            Control <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-prisons to-rose-600">
               Absoluto.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-on-surface-variant font-medium leading-relaxed max-w-xl mt-4">
            Asegura el bloque de Derecho Penitenciario. Una preparación táctica, densa e inquebrantable para superar a tus opositores.
          </p>

          <Link 
            to="/academy/precios"
            className="mt-8 inline-flex items-center justify-between px-10 py-5 bg-on-surface text-white font-black uppercase tracking-wider rounded-2xl text-xs w-fit group shadow-premium hover:-translate-y-1 transition-all"
          >
            Asegurar Nivel
            <ArrowRight className="w-5 h-5 ml-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Floating Identity Component */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="absolute inset-0 bg-prisons/5 rounded-[3rem] blur-2xl" />
          <div className="bg-white/80 backdrop-blur-3xl border border-outline-variant rounded-[3rem] p-12 shadow-premium relative">
            <PrisonGridSystem className="w-64 h-64 drop-shadow-[0_20px_40px_rgba(127,29,29,0.1)]" />
          </div>
        </motion.div>
      </div>

      {/* Bento Grid */}
      <div className="max-w-6xl mx-auto z-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Main Large Horizontal */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="md:col-span-3 bg-white border border-outline-variant rounded-[2.5rem] p-10 hover:border-prisons/30 transition-all shadow-ambient flex flex-col md:flex-row gap-8 items-center"
          >
             <div className="p-6 bg-prisons/5 rounded-2xl border border-prisons/10 hidden md:block">
               <Lock className="w-16 h-16 text-prisons" />
             </div>
             <div className="flex-1">
                <h3 className="text-3xl font-black mb-3 uppercase tracking-tight">LOGP y Reglamento Penitenciario</h3>
                <p className="text-on-surface-variant font-medium leading-relaxed text-sm max-w-2xl">
                  Sumérgete en la prisión desde tu zona de estudio. Resolvemos supuestos prácticos reales: libertades, aislamientos, comunicación y régimen disciplinario, basándonos estrictamente en la última normativa consolidada del BOE.
                </p>
             </div>
          </motion.div>

          {/* Column 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="bg-white border border-outline-variant rounded-[2.5rem] p-8 hover:border-prisons/30 transition-all shadow-ambient"
          >
            <ShieldAlert className="w-8 h-8 text-prisons mb-6" />
            <h3 className="text-xl font-black mb-2 uppercase">Casuística Extrema</h3>
            <p className="text-on-surface-variant font-medium text-sm leading-relaxed">
              Tratamiento de reclusos, situaciones de amotinamiento y normativa de seguridad plasmados en test que emulan el estilo rebuscado de las últimas convocatorias.
            </p>
          </motion.div>

          {/* Column 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="bg-white border border-outline-variant rounded-[2.5rem] p-8 hover:border-prisons/30 transition-all shadow-ambient"
          >
            <Activity className="w-8 h-8 text-prisons mb-6" />
            <h3 className="text-xl font-black mb-2 uppercase">Función Pública y Penal</h3>
            <p className="text-on-surface-variant font-medium text-sm leading-relaxed">
              Consolida la Parte General, Penal y la Estructura Orgánica del Estado, asegurando la nota necesaria sin arriesgar negativos.
            </p>
          </motion.div>

          {/* Column 3 Spotlight */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
            className="bg-white border border-outline-variant rounded-[2.5rem] p-8 text-center flex flex-col justify-center items-center shadow-ambient hover:border-prisons/30 transition-all"
          >
            <FileText className="w-10 h-10 text-on-surface/40 mb-4" />
            <h3 className="font-manrope font-black text-4xl text-prisons uppercase">5.000+</h3>
            <div className="text-[10px] text-prisons/60 font-black tracking-widest uppercase mt-1">Supuestos Prácticos</div>
          </motion.div>

        </div>
      </div>

      {/* SEO & Expanded Content Area */}
      <div className="max-w-4xl mx-auto z-10 relative mt-24 border-t border-outline-variant pt-16">
        <h2 className="text-3xl font-black mb-6 uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-prisons to-rose-600">Academia Instituciones Penitenciarias Élite</h2>
        <div className="prose prose-slate prose-p:text-on-surface-variant prose-strong:text-on-surface prose-a:text-prisons">
          <p className="mb-4">
            Alcanzar tu meta como Ayudante de Instituciones Penitenciarias demanda un conocimiento férreo del Código Penal y la Ley General Penitenciaria. En nuestra <strong>academia Instituciones Penitenciarias élite</strong>, no estudiamos teoría, forjamos operadores jurídicos de máximo nivel mediante <em>Deep Learning</em>.
          </p>
          <p className="mb-4">
            El verdadero desafío se encuentra en los <strong>casos prácticos Prisiones</strong>. Nuestra plataforma genera incontables <strong>supuestos prácticos IIP resueltos</strong> y fundamentados jurídicamente. Pon a prueba tus reflejos ante situaciones simuladas reales mediante <strong>Reglamento Penitenciario tests</strong> que se van endureciendo conforme tú mejoras.
          </p>
          <p>
            Desde la <strong>LOGP resumida</strong> con esquemas interactivos hasta el meticuloso desglose de la Función Pública. Domina los <strong>Test Ayudantes de Instituciones Penitenciarias</strong> y accede al interior de los muros con la preparación más extrema del panorama actual.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AcademyIIPP;
