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
    <div className="pt-32 pb-24 min-h-screen bg-[#0E0E0E] text-white px-6 md:px-8 relative overflow-hidden font-inter selection:bg-blue-600/20 selection:text-white">
      <Helmet>
        <title>Academia oposiciones AGE online | Munilex Academy</title>
        <meta name="description" content="Academia oposiciones AGE online. Auxiliar administrativo estado y administrativo C1. Preparación con simulador de ofimática integrado impulsado por IA." />
      </Helmet>
      
      {/* Background elements */}
      <div className="absolute top-[10%] left-[20%] w-[40rem] h-[40rem] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-[30rem] h-[30rem] bg-blue-700/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center mb-32">
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-[0.3em] mb-10 shadow-lg backdrop-blur-xl font-manrope"
        >
          <Server className="w-4 h-4 animate-pulse" /> Administración General del Estado (AGE)
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="max-w-5xl"
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.85] text-white font-manrope">
            EL CEREBRO <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-400 to-white">
               DEL ESTADO.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/50 font-medium leading-relaxed mt-10 max-w-2xl mx-auto font-inter">
            Ingresa en el Cuerpo General Auxiliar o Administrativo. Supera el Bloque Jurídico y arrasa en el examen práctico de Ofimática gracias al <span className="text-blue-400 font-bold">Simulador Interactivo</span>.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12"
        >
          <Link 
            to="/academy/precios"
            className="inline-flex items-center gap-4 px-10 py-5 bg-blue-600 text-white font-black uppercase tracking-widest rounded-2xl text-[11px] shadow-[0_20px_50px_rgba(37,99,235,0.2)] hover:scale-105 active:scale-95 transition-all font-manrope"
          >
            Acceder al Sistema <Command className="w-5 h-5" />
          </Link>
        </motion.div>

      </div>

      {/* C1 vs C2 Matrix */}
      <div className="max-w-7xl mx-auto z-10 relative mb-40">
        <h2 className="text-4xl md:text-6xl font-black mb-16 text-white tracking-tighter text-center uppercase font-manrope">
          DIFERENCIAL <span className="text-blue-500">OPERATIVO</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* C2: Auxiliar */}
          <div className="bg-[#1C1B1B] border border-white/5 rounded-[3rem] p-12 hover:border-blue-500/40 transition-all shadow-2xl relative overflow-hidden group">
             <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-20 transition-opacity">
                <Server className="w-48 h-48 text-blue-600" />
             </div>
             <div className="relative z-10">
               <div className="inline-block px-5 py-2 bg-blue-600/10 text-blue-400 text-[10px] font-black tracking-widest rounded-full mb-10 border border-blue-500/20 uppercase font-manrope">
                 ESCALA C2
               </div>
               <h3 className="text-4xl font-black mb-6 text-white uppercase tracking-tight font-manrope">Auxiliar Administrativo</h3>
               <p className="text-white/40 font-medium text-lg mb-10 leading-relaxed font-inter">Apoyo directo en oficinas públicas, atención al ciudadano y gestión documental rutinaria.</p>
               <ul className="space-y-6 text-white/60 font-bold text-sm font-manrope">
                 <li className="flex gap-4 items-start"><Keyboard className="w-5 h-5 text-blue-500 shrink-0" /> <span><strong className="text-white font-black">Prueba principal de ofimática</strong> (Word y Excel). Rapidez esencial.</span></li>
                 <li className="flex gap-4 items-start"><MousePointer2 className="w-5 h-5 text-blue-500 shrink-0" /> <span>Fuerte componente en <strong className="text-white font-black">psicotécnicos</strong>.</span></li>
                 <li className="flex gap-4 items-start"><FileBadge className="w-5 h-5 text-blue-500 shrink-0" /> <span>Temario jurídico acotado (Ley 39 y 40 básicas).</span></li>
               </ul>
             </div>
          </div>

          {/* C1: Administrativo */}
          <div className="bg-[#1C1B1B] border border-white/5 rounded-[3rem] p-12 hover:border-blue-500/40 transition-all shadow-2xl relative overflow-hidden group">
             <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-20 transition-opacity">
                <Command className="w-48 h-48 text-blue-500" />
             </div>
             <div className="relative z-10">
               <div className="inline-block px-5 py-2 bg-blue-600 text-white text-[10px] font-black tracking-widest rounded-full mb-10 uppercase font-manrope">
                 ESCALA C1
               </div>
               <h3 className="text-4xl font-black mb-6 text-white uppercase tracking-tight font-manrope">Administrativo del Estado</h3>
               <p className="text-white/40 font-medium text-lg mb-10 leading-relaxed font-inter">Puesto técnico intermedio. Responsabilidad en procedimientos administrativos y gestión operativa.</p>
               <ul className="space-y-6 text-white/60 font-bold text-sm font-manrope">
                 <li className="flex gap-4 items-start"><FileBadge className="w-5 h-5 text-blue-500 shrink-0" /> <span>Resolución de <strong className="text-white font-black">Supuestos Prácticos</strong> complejos.</span></li>
                 <li className="flex gap-4 items-start"><Server className="w-5 h-5 text-blue-500 shrink-0" /> <span>Profundidad en <strong className="text-white font-black">Gestión Financiera y de Personal</strong>.</span></li>
                 <li className="flex gap-4 items-start"><MousePointer2 className="w-5 h-5 text-blue-500 shrink-0" /> <span>Escalafón superior, mayor sueldo y responsabilidad.</span></li>
               </ul>
             </div>
          </div>

        </div>
      </div>

      {/* Cyber Bento Grid Layout */}
      <div className="max-w-7xl mx-auto z-10 relative mb-40">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Main Large Card (Left) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="md:col-span-7 bg-[#1C1B1B] border border-white/5 rounded-[3rem] p-12 hover:border-blue-500/40 transition-all shadow-2xl relative overflow-hidden group"
          >
             <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity">
                <ServerNodeIcon className="w-64 h-64" />
             </div>
             <div className="relative z-10">
                <div className="w-16 h-16 bg-black/50 text-blue-500 rounded-[1.5rem] flex items-center justify-center mb-10 border border-white/5">
                   <Keyboard className="w-8 h-8" />
                </div>
                <h3 className="text-4xl font-black mb-6 text-white uppercase tracking-tight font-manrope">Simulador Ofimática</h3>
                <p className="text-white/40 font-medium leading-relaxed max-w-lg text-lg font-inter">
                  La segunda parte del examen exige agilidad extrema. Nuestra plataforma integra un <span className="text-blue-400 font-bold">emulador</span> que evalúa tus atajos de teclado y rapidez en resolución de supuestos al milisegundo.
                </p>
             </div>
          </motion.div>

          {/* Right Column Grid */}
          <div className="md:col-span-5 grid grid-rows-2 gap-8 text-left">
            <motion.div 
              initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="bg-[#1C1B1B] border border-white/5 rounded-[2.5rem] p-10 hover:border-blue-500/40 transition-all shadow-xl flex flex-col justify-center group"
            >
              <MousePointer2 className="w-10 h-10 text-blue-500 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-black mb-3 text-white uppercase pr-4 font-manrope">Entrenamiento Automático</h3>
              <p className="text-white/40 font-medium text-[0.95rem] leading-relaxed font-inter">
                Psicotécnicos lógicos procedimentales. Jamás repetirás la misma pregunta, forzando a tu cerebro a razonar.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="bg-[#1C1B1B] border border-white/5 rounded-[2.5rem] p-10 hover:border-blue-500/40 transition-all shadow-xl flex flex-col justify-center border-l-4 border-l-blue-600 group"
            >
              <FileBadge className="w-10 h-10 text-blue-500 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-black mb-3 text-white uppercase font-manrope">LPAC y LRJSP</h3>
              <p className="text-white/40 font-medium text-[0.95rem] leading-relaxed font-inter">
                La burocracia desglosada. Aprende leyes de procedimiento mediante flashcards activas inteligentes.
              </p>
            </motion.div>
          </div>

          {/* Stats Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
            className="md:col-span-12 bg-white text-black rounded-[3rem] p-12 flex flex-col md:flex-row items-center justify-around text-center gap-10 shadow-2xl"
          >
             <div className="flex flex-col items-center">
                <div className="text-[10px] text-blue-600 font-black tracking-[.25em] uppercase mb-4 opacity-70 font-manrope">Tests en Plazos Reales</div>
                <div className="text-6xl md:text-8xl font-black tracking-tighter font-manrope italic">10M+</div>
             </div>
             <div className="w-[1px] h-24 bg-black/10 hidden md:block" />
             <div className="flex flex-col items-center">
                <div className="text-[10px] text-blue-600 font-black tracking-[.25em] uppercase mb-4 opacity-70 font-manrope">Precisión IA en Corrección</div>
                <div className="text-6xl md:text-8xl font-black tracking-tighter font-manrope italic">99.9%</div>
             </div>
          </motion.div>

        </div>
      </div>

      {/* SEO & Expanded Content Area */}
      <div className="max-w-4xl mx-auto z-10 relative mt-40 border-t border-white/5 pt-24 text-center">
        <h2 className="text-4xl md:text-6xl font-black mb-12 text-white uppercase tracking-tighter font-manrope italic">Academia AGE Online Avanzada</h2>
        <div className="prose prose-invert prose-lg max-w-none prose-p:text-white/40 prose-p:font-medium prose-strong:text-blue-500 prose-strong:font-black prose-p:leading-relaxed font-inter">
          <p className="mb-8">
            Convertirse en un <strong>Administrativo del Estado</strong> o conseguir la plaza de Auxiliar Administrativo de la AGE ya no se trata de memorizar temario en bucle. En nuestra <strong>academia AGE online</strong> apostamos por una preparación asistida por IA y orientada al cerebro.
          </p>
          <p className="mb-8">
            Afronta el pesado Bloque Jurídico (<strong>Ley 39/2015</strong> y <strong>Ley 40/2015</strong>) con flashcards conversacionales que detectan y corrigen tus confusiones doctrinales. Cuando llegue el examen práctico de la segunda parte, vuela con nuestro exclusivo <strong>Simulador Ofimática AGE online</strong>, el cual genera <strong>tests ofimática Administrativo del Estado</strong> y Auxiliares para que te adaptes al milisegundo de ejecución en entornos Windows y Office.
          </p>
          <p className="font-bold text-white/80">
            Da un salto cualitativo exponencial sobre tu competencia con la mejor <em>preparación Auxiliar AGE</em> disponible. Domina la burocracia, la informática y conquista tu plaza definitiva.
          </p>
        </div>
      </div>
    </div>
  );
};

      </div>
    </div>
  );
};

export default AcademyAge;
