import { motion } from 'framer-motion';
import { Lock, FileText, Activity, ShieldAlert, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const PrisonGridSystem = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Modular Cell Emulation - RED theme */}
    <rect x="20" y="20" width="80" height="80" rx="10" stroke="#EF4444" strokeWidth="4" strokeDasharray="10 5" />
    <rect x="140" y="20" width="80" height="80" rx="10" fill="#7F1D1D" fillOpacity="0.5" stroke="#F87171" strokeWidth="2" />
    <rect x="20" y="140" width="80" height="80" rx="10" fill="#7F1D1D" fillOpacity="0.2" stroke="#EF4444" strokeWidth="2" />
    <rect x="140" y="140" width="80" height="80" rx="10" stroke="#EF4444" strokeWidth="4" />
    
    <path d="M180 60V80" stroke="#FCA5A5" strokeWidth="4" strokeLinecap="round" />
    <path d="M160 50L200 90" stroke="#FCA5A5" strokeWidth="2" opacity="0.5" />
    
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
    <div className="pt-32 pb-24 min-h-screen bg-[#110505] text-white px-6 md:px-8 relative overflow-hidden font-inter">
      <Helmet>
        <title>Academia ayudante instituciones penitenciarias | Munilex Academy</title>
        <meta name="description" content="Academia experta en prisiones. LOGP resumida, casos prácticos online y derecho penitenciario para tu oposición a Ayudante de Instituciones Penitenciarias." />
      </Helmet>
      {/* Tactical Red deep background */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-red-700/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[30rem] h-[30rem] bg-red-900/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 grid lg:grid-cols-[1fr_0.8fr] gap-16 items-center mb-24">
        
        {/* Asymmetrical Hero */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-red-500/10 text-red-500 text-[11px] font-black uppercase tracking-[0.2em] border border-red-500/20 w-fit">
            Instituciones Penitenciarias
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] text-white">
            Control <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-400">
               Absoluto.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-red-100/60 font-medium leading-relaxed max-w-xl mt-4">
            Asegura el bloque de Derecho Penitenciario. Una preparación táctica, densa e inquebrantable para superar a tus opositores.
          </p>

          <Link 
            to="/academy/precios"
            className="mt-8 inline-flex items-center justify-between px-8 py-5 bg-gradient-to-br from-red-600 to-red-900 text-white font-black uppercase tracking-wider rounded-xl text-sm w-fit group shadow-[0_0_30px_rgba(220,38,38,0.3)] hover:shadow-[0_0_50px_rgba(220,38,38,0.5)] transition-all hover:-translate-y-1"
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
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 to-transparent rounded-[3rem] blur-2xl" />
          <div className="bg-[#1A0A0A]/80 backdrop-blur-3xl border border-white/5 rounded-[3rem] p-12 shadow-2xl relative">
            <PrisonGridSystem className="w-64 h-64 drop-shadow-[0_0_40px_rgba(248,113,113,0.2)]" />
          </div>
        </motion.div>
      </div>

      {/* Bento Grid */}
      <div className="max-w-6xl mx-auto z-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Main Large Horizontal */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="md:col-span-3 bg-[#1A0A0A]/70 backdrop-blur-xl border-t border-l border-white/10 rounded-3xl p-10 hover:border-red-500/30 transition-all shadow-xl flex flex-col md:flex-row gap-8 items-center"
          >
             <div className="p-6 bg-red-900/20 rounded-2xl border border-red-500/20 hidden md:block">
               <Lock className="w-16 h-16 text-red-500" />
             </div>
             <div className="flex-1">
                <h3 className="text-3xl font-black mb-3 text-white">LOGP y Reglamento Penitenciario</h3>
                <p className="text-red-100/60 leading-relaxed text-sm max-w-2xl">
                  Sumérgete en la prisión desde tu zona de estudio. Resolvemos supuestos prácticos reales: libertades, aislamientos, comunicación y régimen disciplinario, basándonos estrictamente en la última normativa consolidada del BOE.
                </p>
             </div>
          </motion.div>

          {/* Column 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="bg-[#1F0A0A]/50 backdrop-blur-xl border border-white/5 rounded-3xl p-8 hover:border-red-500/30 transition-all"
          >
            <ShieldAlert className="w-8 h-8 text-rose-500 mb-6" />
            <h3 className="text-xl font-black mb-2 text-white">Casuística Extrema</h3>
            <p className="text-red-100/50 text-sm leading-relaxed">
              Tratamiento de reclusos, situaciones de amotinamiento y normativa de seguridad plasmados en test que emulan el estilo rebuscado de las últimas convocatorias.
            </p>
          </motion.div>

          {/* Column 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="bg-[#1F0A0A]/50 backdrop-blur-xl border border-white/5 rounded-3xl p-8 hover:border-red-500/30 transition-all"
          >
            <Activity className="w-8 h-8 text-red-500 mb-6" />
            <h3 className="text-xl font-black mb-2 text-white">Función Pública y Penal</h3>
            <p className="text-red-100/50 text-sm leading-relaxed">
              Consolida la Parte General, Penal y la Estructura Orgánica del Estado, asegurando la nota necesaria sin arriesgar negativos.
            </p>
          </motion.div>

          {/* Column 3 Spotlight */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
            className="bg-gradient-to-b from-red-900/40 to-transparent border border-red-500/20 rounded-3xl p-8 text-center flex flex-col justify-center items-center"
          >
            <FileText className="w-10 h-10 text-white mb-4" />
            <h3 className="font-space-grotesk font-black text-3xl text-red-400">5.000+</h3>
            <div className="text-[10px] text-red-500 font-bold tracking-widest uppercase">Supuestos Prácticos</div>
          </motion.div>

        </div>
      </div>

      {/* SEO & Expanded Content Area */}
      <div className="max-w-4xl mx-auto z-10 relative mt-24 border-t border-red-500/20 pt-16">
        <h2 className="text-3xl font-black mb-6 text-white">Academia Instituciones Penitenciarias Élite</h2>
        <div className="prose prose-invert prose-p:text-red-100/60 prose-strong:text-red-400 prose-a:text-red-500">
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
