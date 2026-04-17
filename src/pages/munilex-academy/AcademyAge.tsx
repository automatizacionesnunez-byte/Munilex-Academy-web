import { motion } from 'framer-motion';
import { MousePointer2, Server, Keyboard, Command, FileBadge } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const ServerNodeIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect x="40" y="40" width="160" height="160" rx="40" fill="#0A192F" stroke="url(#blueCyanGradient)" strokeWidth="8"/>
    <path d="M80 90H160" stroke="#38BDF8" strokeWidth="8" strokeLinecap="round" />
    <path d="M80 150H130" stroke="#38BDF8" strokeWidth="8" strokeLinecap="round" />
    <circle cx="160" cy="150" r="10" fill="#22D3EE" />
    <circle cx="160" cy="150" r="20" stroke="#22D3EE" strokeWidth="2" strokeDasharray="4 4" className="animate-spin-slow" />
    <defs>
      <linearGradient id="blueCyanGradient" x1="40" y1="40" x2="200" y2="200" gradientUnits="userSpaceOnUse">
        <stop stopColor="#3B82F6" />
        <stop offset="1" stopColor="#06B6D4" />
      </linearGradient>
    </defs>
  </svg>
);

const AcademyAge = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#020617] text-slate-200 px-6 md:px-8 relative overflow-hidden font-inter">
      <Helmet>
        <title>Academia oposiciones AGE online | Munilex Academy</title>
        <meta name="description" content="Academia oposiciones AGE online. Auxiliar administrativo estado y administrativo C1. Preparación con simulador de ofimática integrado impulsado por IA." />
      </Helmet>
      {/* Cyber Background elements */}
      <div className="absolute top-[10%] left-[20%] w-[40rem] h-[40rem] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-[30rem] h-[30rem] bg-cyan-400/5 rounded-full blur-[100px] pointer-events-none" />
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-overlay pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center text-center mb-24">
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-cyan-400 text-[11px] font-black uppercase tracking-[0.2em] border border-blue-500/20 mb-8"
        >
          <Server className="w-4 h-4" /> Administración General del Estado (AGE)
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="max-w-4xl"
        >
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] text-white">
            EL CEREBRO <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300">
               DEL ESTADO.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 font-medium leading-relaxed mt-6 max-w-2xl mx-auto">
            Ingresa en el Cuerpo General Auxiliar o Administrativo. Supera el Bloque Jurídico y arrasa en el examen práctico de Ofimática gracias al Simulador Interactivo.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-10"
        >
          <Link 
            to="/academy/precios"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-black uppercase tracking-wider rounded-xl text-sm shadow-[0_0_40px_rgba(6,182,212,0.3)] hover:shadow-[0_0_60px_rgba(6,182,212,0.5)] transition-all hover:scale-105"
          >
            Acceder al Sistema <Command className="w-5 h-5" />
          </Link>
        </motion.div>

      </div>

      {/* C1 vs C2 Matrix */}
      <div className="max-w-6xl mx-auto z-10 relative mb-16">
        <h2 className="text-3xl font-black mb-10 text-white tracking-tighter text-center">
          DIFERENCIAL OPERATIVO
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* C2: Auxiliar */}
          <div className="bg-[#0F172A]/80 backdrop-blur-xl border border-cyan-500/30 rounded-3xl p-10 hover:border-cyan-400 transition-all shadow-2xl relative overflow-hidden group">
             <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <Server className="w-32 h-32 text-cyan-400" />
             </div>
             <div className="relative z-10">
               <div className="inline-block px-3 py-1 bg-cyan-500/10 text-cyan-400 text-[10px] font-black tracking-widest rounded-md mb-6 border border-cyan-500/20">
                 ESCALA C2
               </div>
               <h3 className="text-3xl font-black mb-2 text-white">Auxiliar Administrativo</h3>
               <p className="text-slate-400 text-sm mb-8 leading-relaxed">Apoyo directo en oficinas públicas, atención al ciudadano y gestión documental rutinaria.</p>
               <ul className="space-y-4 text-slate-300 text-sm">
                 <li className="flex gap-3 items-start"><Keyboard className="w-5 h-5 text-cyan-400 shrink-0" /> <span><strong>Prueba principal de ofimática</strong> (Word y Excel). Rapidez esencial.</span></li>
                 <li className="flex gap-3 items-start"><MousePointer2 className="w-5 h-5 text-cyan-400 shrink-0" /> <span>Fuerte componente en <strong>psicotécnicos</strong>.</span></li>
                 <li className="flex gap-3 items-start"><FileBadge className="w-5 h-5 text-cyan-400 shrink-0" /> <span>Temario jurídico acotado (Ley 39 y 40 básicas).</span></li>
               </ul>
             </div>
          </div>

          {/* C1: Administrativo */}
          <div className="bg-[#0F172A]/80 backdrop-blur-xl border border-blue-500/30 rounded-3xl p-10 hover:border-blue-400 transition-all shadow-2xl relative overflow-hidden group">
             <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <Command className="w-32 h-32 text-blue-500" />
             </div>
             <div className="relative z-10">
               <div className="inline-block px-3 py-1 bg-blue-500/10 text-blue-400 text-[10px] font-black tracking-widest rounded-md mb-6 border border-blue-500/20">
                 ESCALA C1
               </div>
               <h3 className="text-3xl font-black mb-2 text-white">Administrativo del Estado</h3>
               <p className="text-slate-400 text-sm mb-8 leading-relaxed">Puesto técnico intermedio. Responsabilidad en procedimientos administrativos y gestión operativa.</p>
               <ul className="space-y-4 text-slate-300 text-sm">
                 <li className="flex gap-3 items-start"><FileBadge className="w-5 h-5 text-blue-400 shrink-0" /> <span>Resolución de <strong>Supuestos Prácticos</strong> complejos.</span></li>
                 <li className="flex gap-3 items-start"><Server className="w-5 h-5 text-blue-400 shrink-0" /> <span>Profundidad en <strong>Gestión Financiera y de Personal</strong>.</span></li>
                 <li className="flex gap-3 items-start"><MousePointer2 className="w-5 h-5 text-blue-400 shrink-0" /> <span>Escalafón superior, mayor sueldo y responsabilidad.</span></li>
               </ul>
             </div>
          </div>

        </div>
      </div>

      {/* Cyber Bento Grid Layout */}
      <div className="max-w-6xl mx-auto z-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Main Large Card (Left) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="md:col-span-7 bg-[#0F172A]/80 backdrop-blur-xl border-t border-l border-white/10 rounded-3xl p-10 hover:border-cyan-500/30 transition-all shadow-2xl relative overflow-hidden"
          >
             <div className="absolute top-0 right-0 p-8 opacity-20">
                <ServerNodeIcon className="w-48 h-48" />
             </div>
             <div className="relative z-10">
                <Keyboard className="w-10 h-10 text-cyan-400 mb-6" />
                <h3 className="text-3xl font-black mb-4 text-white">Simulador de Ofimática Windows / Office</h3>
                <p className="text-slate-400 leading-relaxed max-w-md text-sm">
                  La segunda parte del examen exige agilidad extrema en Word y Excel. Nuestra plataforma integra un emulador en el navegador web que evalúa tus atajos de teclado y rapidez en resolución de supuestos al milisegundo.
                </p>
             </div>
          </motion.div>

          {/* Top Right Card */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="md:col-span-5 bg-[#0F172A]/50 backdrop-blur-xl border border-white/5 rounded-3xl p-8 hover:border-blue-500/30 transition-all"
          >
            <MousePointer2 className="w-8 h-8 text-blue-400 mb-4" />
            <h3 className="text-xl font-black mb-2 text-white">Entrenamiento Automático</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Psicotécnicos lógicos, matemáticos y verbales generados procedimentalmente. Jamás repetirás la misma pregunta, forzando a tu cerebro a razonar en vez de memorizar.
            </p>
          </motion.div>

          {/* Bottom Right Card */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="md:col-span-5 bg-[#0F172A]/50 backdrop-blur-xl border border-white/5 rounded-3xl p-8 hover:border-blue-500/30 transition-all"
          >
            <FileBadge className="w-8 h-8 text-blue-300 mb-4" />
            <h3 className="text-xl font-black mb-2 text-white">LPAC y LRJSP</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              La burocracia desglosada. Aprende leyes de procedimiento administrativo mediante tarjetas inteligentes (Flashcards activas).
            </p>
          </motion.div>

          {/* Bottom Left Card (Data metrics) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
            className="md:col-span-7 bg-gradient-to-r from-blue-900/40 to-cyan-900/20 border border-cyan-500/20 rounded-3xl p-8 flex items-center justify-between"
          >
             <div>
               <div className="text-[10px] text-cyan-400 font-bold tracking-widest uppercase mb-1">Volumen de Tests en Plazos Reales</div>
               <div className="text-5xl font-black font-space-grotesk text-white">10M+</div>
             </div>
             <div className="text-right">
               <div className="text-[10px] text-blue-400 font-bold tracking-widest uppercase mb-1">Precisión IA en Corrección</div>
               <div className="text-5xl font-black font-space-grotesk text-white">99.9%</div>
             </div>
          </motion.div>

        </div>
      </div>

      {/* SEO & Expanded Content Area */}
      <div className="max-w-4xl mx-auto z-10 relative mt-24 border-t border-cyan-500/20 pt-16">
        <h2 className="text-3xl font-black mb-6 text-white">Academia AGE Online Avanzada</h2>
        <div className="prose prose-invert prose-p:text-slate-400 prose-strong:text-cyan-400 prose-a:text-blue-400">
          <p className="mb-4">
            Convertirse en un <strong>Administrativo del Estado</strong> o conseguir la plaza de Auxiliar Administrativo de la AGE ya no se trata de memorizar temario en bucle. En nuestra <strong>academia AGE online</strong> apostamos por una preparación ciber-asistida y orientada al cerebro.
          </p>
          <p className="mb-4">
            Afronta el pesado Bloque Jurídico (<strong>Ley 39/2015</strong> y <strong>Ley 40/2015</strong>) con flashcards conversacionales que detectan y corrigen tus confusiones doctrinales. Cuando llegue el examen práctico de la segunda parte, vuela con nuestro exclusivo <strong>Simulador Ofimática AGE online</strong>, el cual genera <strong>tests ofimática Administrativo del Estado</strong> y Auxiliares para que te adaptes al milisegundo de ejecución en entornos Windows y Office.
          </p>
          <p>
            Da un salto cualitativo exponencial sobre tu competencia con la mejor <em>preparación Auxiliar AGE</em> disponible. Domina la burocracia, la informática y conquista tu plaza definitiva.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AcademyAge;
