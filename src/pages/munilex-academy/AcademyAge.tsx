import { motion } from 'framer-motion';
import { Keyboard, FileBadge, ArrowRight, Laptop, UserCheck, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const ServerNodeIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect x="40" y="40" width="160" height="160" rx="40" fill="#0A192F" stroke="url(#blueCyanGradient)" strokeWidth="8"/>
    <path d="M80 90H160" stroke="#3b82f6" strokeWidth="8" strokeLinecap="round" />
    <path d="M80 150H130" stroke="#3b82f6" strokeWidth="8" strokeLinecap="round" />
    <circle cx="160" cy="150" r="10" fill="#3b82f6" />
    <circle cx="160" cy="150" r="20" stroke="#3b82f6" strokeWidth="2" strokeDasharray="4 4" className="animate-spin-slow" />
    <defs>
      <linearGradient id="blueCyanGradient" x1="40" y1="40" x2="200" y2="200" gradientUnits="userSpaceOnUse">
        <stop stopColor="#3b82f6" />
        <stop offset="1" stopColor="#d4af37" />
      </linearGradient>
    </defs>
  </svg>
);

const AcademyAge = () => {
  return (
    <div className="pt-48 pb-24 min-h-screen bg-[#131313] text-[#E5E2E1] px-6 md:px-8 relative overflow-hidden font-inter selection:bg-[#3b82f6]/30">
      <Helmet>
        <title>Academia oposiciones AGE online | Munilex Academy</title>
        <meta name="description" content="Academia oposiciones AGE online. Auxiliar administrativo estado y administrativo C1. Preparación con simulador de ofimática integrado impulsado por IA." />
      </Helmet>

      {/* Subtle Background Accents - BLUE for AGE */}
      <div className="absolute top-[20%] left-[-10%] w-[50rem] h-[50rem] bg-[#3b82f6]/5 rounded-full blur-[150px] pointer-events-none" />
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#3b82f6]/10 text-[#3b82f6] text-[10px] font-black uppercase tracking-[0.3em] border border-[#3b82f6]/20 w-fit">
               Administración General del Estado
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] text-white">
              EL CEREBRO <br />
              <span className="italic text-[#d4af37]">DEL ESTADO</span>
            </h1>
            
            <p className="text-xl text-white/50 font-semibold leading-relaxed max-w-xl">
              Ingresa en el Cuerpo General Auxiliar o Administrativo. Supera el Bloque Jurídico y arrasa en el examen práctico de Ofimática gracias a la IA.
            </p>

            <div className="flex flex-wrap gap-4">
               <Link 
                to="/academy/contacto"
                className="inline-flex items-center gap-3 px-10 py-5 bg-[#d4af37] text-black font-black uppercase tracking-widest text-[11px] rounded-xl hover:scale-105 transition-all shadow-xl shadow-[#d4af37]/10"
              >
                Acceder al Sistema <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#3b82f6]/20 to-transparent rounded-[3rem] blur-3xl opacity-50" />
            <div className="bg-[#1C1B1B] border border-white/5 rounded-[4rem] p-16 shadow-2xl relative group">
              <ServerNodeIcon className="w-64 h-64 drop-shadow-[0_0_50px_rgba(59,130,246,0.2)] group-hover:scale-105 transition-transform duration-700" />
            </div>
          </motion.div>
        </div>

        {/* Section Header: Route Selection */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black uppercase tracking-tighter text-white">Selecciona tu <span className="text-[#d4af37]">Puesto</span></h2>
          <p className="text-white/40 text-xs font-bold mt-3 uppercase tracking-widest">Elige la escala que mejor se adapte a tu perfil</p>
        </div>

        {/* Route Selection - C1 vs C2 */}
        <div className="grid md:grid-cols-2 gap-8 mb-32">
          {/* C2: Auxiliar */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative bg-[#1C1B1B] border border-white/5 p-12 rounded-[3.5rem] hover:border-[#3b82f6]/40 transition-all overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
               <UserCheck className="w-32 h-32 text-[#3b82f6]" />
            </div>
            <div className="relative z-10">
              <div className="inline-block px-4 py-1.5 bg-[#3b82f6]/10 text-[#3b82f6] text-[10px] font-black tracking-[0.2em] rounded-lg mb-8 border border-[#3b82f6]/20 uppercase">
                Escala C2
              </div>
              <h3 className="text-4xl font-black text-white mb-4 uppercase tracking-tighter leading-tight">Auxiliar <br/> Administrativo</h3>
              <p className="text-white/40 font-bold mb-8 leading-relaxed max-w-sm">Atención al ciudadano, soporte operativo y gestión documental básica en delegaciones.</p>
              <div className="flex items-center gap-2 text-[#d4af37] font-black uppercase text-[10px] tracking-widest group-hover:gap-4 transition-all">
                Explorar Ruta <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </motion.div>

          {/* C1: Administrativo */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative bg-[#1C1B1B] border border-white/5 p-12 rounded-[3.5rem] hover:border-[#3b82f6]/40 transition-all overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
               <Briefcase className="w-32 h-32 text-[#3b82f6]" />
            </div>
            <div className="relative z-10">
              <div className="inline-block px-4 py-1.5 bg-[#3b82f6]/10 text-[#3b82f6] text-[10px] font-black tracking-[0.2em] rounded-lg mb-8 border border-[#3b82f6]/20 uppercase">
                Escala C1
              </div>
              <h3 className="text-4xl font-black text-white mb-4 uppercase tracking-tighter leading-tight">Administrativo <br/> del Estado</h3>
              <p className="text-white/40 font-bold mb-8 leading-relaxed max-w-sm">Puesto técnico. Gestión de procedimientos públicos, presupuestos y recursos humanos.</p>
              <div className="flex items-center gap-2 text-[#d4af37] font-black uppercase text-[10px] tracking-widest group-hover:gap-4 transition-all">
                Explorar Ruta <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Section Header: Features */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black uppercase tracking-tighter text-white">Herramientas a tu <span className="text-[#d4af37]">Disposición</span></h2>
          <p className="text-white/40 text-xs font-bold mt-3 uppercase tracking-widest">Tecnología de vanguardia para tu entrenamiento</p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-32">
          {[
            {
               title: "Simulador Ofimática",
               desc: "Evalúa tus atajos de teclado y rapidez en resolución de supuestos de Word y Excel al milisegundo.",
               icon: <Laptop className="w-6 h-6" />,
               accent: "#3b82f6"
            },
            {
               title: "Burocracia IA",
               desc: "Aprende leyes de procedimiento (LPAC y LRJSP) mediante tarjetas inteligentes de aprendizaje activo.",
               icon: <FileBadge className="w-6 h-6" />,
               accent: "#3b82f6"
            },
            {
               title: "Psicotécnicos",
               desc: "Matrices generadas procedimentalmente para forzar a tu cerebro a razonar en vez de memorizar.",
               icon: <Keyboard className="w-6 h-6" />,
               accent: "#3b82f6"
            }
          ].map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#1C1B1B] border border-white/5 p-10 rounded-[3rem] hover:border-[#3b82f6]/30 transition-all group"
            >
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-[#3b82f6] mb-8 border border-[#3b82f6]/10 group-hover:bg-[#3b82f6] group-hover:text-black transition-all">
                {f.icon}
              </div>
              <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter">{f.title}</h3>
              <p className="text-white/40 text-sm font-bold leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* SEO Content Area */}
        <div className="max-w-4xl mx-auto border-t border-white/5 pt-20">
          <h2 className="text-3xl font-black mb-8 text-white uppercase tracking-tighter">Academia AGE Online Avanzada</h2>
          <div className="space-y-6 text-white/50 font-medium leading-relaxed">
            <p>
              Convertirse en un <span className="text-[#3b82f6] font-bold underline decoration-2 decoration-[#3b82f6]/30">Administrativo del Estado</span> ya no es cuestión de memorizar temario en bucle. En Munilex Academy apostamos por una preparación asistida por IA orientada a la eficiencia cerebral.
            </p>
            <p>
              Afronta las leyes de procedimiento (<span className="text-[#d4af37] font-bold italic">39/2015 y 40/2015</span>) con nuestra metodología exclusiva que garantiza un dominio absoluto del marco legislativo estatal.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademyAge;
