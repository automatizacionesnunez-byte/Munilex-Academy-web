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
    <div className="pt-32 pb-24 min-h-screen bg-surface text-on-surface px-6 md:px-8 relative overflow-hidden font-inter selection:bg-primary/20 selection:text-on-surface">
      <Helmet>
        <title>Academia oposiciones AGE online | Munilex Academy</title>
        <meta name="description" content="Academia oposiciones AGE online. Auxiliar administrativo estado y administrativo C1. Preparación con simulador de ofimática integrado impulsado por IA." />
      </Helmet>
      
      {/* Abstract Background elements */}
      <div className="absolute top-[10%] left-[20%] w-[40rem] h-[40rem] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-[30rem] h-[30rem] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center text-center mb-24">
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-outline-variant text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-8 shadow-ambient"
        >
          <Server className="w-4 h-4" /> Administración General del Estado (AGE)
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="max-w-4xl"
        >
          <h1 className="text-6xl md:text-[6.5rem] font-black uppercase tracking-tighter leading-[0.9] text-on-surface">
            EL CEREBRO <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
               DEL ESTADO.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant font-semibold leading-relaxed mt-10 max-w-2xl mx-auto">
            Ingresa en el Cuerpo General Auxiliar o Administrativo. Supera el Bloque Jurídico y arrasa en el examen práctico de Ofimática gracias al Simulador Interactivo.
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
            className="inline-flex items-center gap-4 px-10 py-5 bg-on-surface text-white font-black uppercase tracking-widest rounded-2xl text-xs shadow-premium hover:scale-105 transition-all"
          >
            Acceder al Sistema <Command className="w-5 h-5" />
          </Link>
        </motion.div>

      </div>

      {/* C1 vs C2 Matrix */}
      <div className="max-w-6xl mx-auto z-10 relative mb-24">
        <h2 className="text-3xl font-black mb-12 text-on-surface tracking-tighter text-center uppercase">
          DIFERENCIAL OPERATIVO
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* C2: Auxiliar */}
          <div className="bg-white border border-outline-variant rounded-[2.5rem] p-10 hover:border-secondary/30 transition-all shadow-ambient relative overflow-hidden group">
             <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                <Server className="w-48 h-48 text-secondary" />
             </div>
             <div className="relative z-10">
               <div className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary text-[10px] font-black tracking-widest rounded-full mb-8 border border-secondary/20 uppercase">
                 ESCALA C2
               </div>
               <h3 className="text-3xl font-black mb-4 text-on-surface uppercase tracking-tight">Auxiliar Administrativo</h3>
               <p className="text-on-surface-variant font-medium text-[0.95rem] mb-10 leading-relaxed">Apoyo directo en oficinas públicas, atención al ciudadano y gestión documental rutinaria.</p>
               <ul className="space-y-6 text-on-surface font-semibold text-sm">
                 <li className="flex gap-4 items-start"><Keyboard className="w-5 h-5 text-secondary shrink-0" /> <span><strong>Prueba principal de ofimática</strong> (Word y Excel). Rapidez esencial.</span></li>
                 <li className="flex gap-4 items-start"><MousePointer2 className="w-5 h-5 text-secondary shrink-0" /> <span>Fuerte componente en <strong>psicotécnicos</strong>.</span></li>
                 <li className="flex gap-4 items-start"><FileBadge className="w-5 h-5 text-secondary shrink-0" /> <span>Temario jurídico acotado (Ley 39 y 40 básicas).</span></li>
               </ul>
             </div>
          </div>

          {/* C1: Administrativo */}
          <div className="bg-white border border-outline-variant rounded-[2.5rem] p-10 hover:border-primary/30 transition-all shadow-ambient relative overflow-hidden group">
             <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                <Command className="w-48 h-48 text-primary" />
             </div>
             <div className="relative z-10">
               <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-[10px] font-black tracking-widest rounded-full mb-8 border border-primary/20 uppercase">
                 ESCALA C1
               </div>
               <h3 className="text-3xl font-black mb-4 text-on-surface uppercase tracking-tight">Administrativo del Estado</h3>
               <p className="text-on-surface-variant font-medium text-[0.95rem] mb-10 leading-relaxed">Puesto técnico intermedio. Responsabilidad en procedimientos administrativos y gestión operativa.</p>
               <ul className="space-y-6 text-on-surface font-semibold text-sm">
                 <li className="flex gap-4 items-start"><FileBadge className="w-5 h-5 text-primary shrink-0" /> <span>Resolución de <strong>Supuestos Prácticos</strong> complejos.</span></li>
                 <li className="flex gap-4 items-start"><Server className="w-5 h-5 text-primary shrink-0" /> <span>Profundidad en <strong>Gestión Financiera y de Personal</strong>.</span></li>
                 <li className="flex gap-4 items-start"><MousePointer2 className="w-5 h-5 text-primary shrink-0" /> <span>Escalafón superior, mayor sueldo y responsabilidad.</span></li>
               </ul>
             </div>
          </div>

        </div>
      </div>

      {/* Cyber Bento Grid Layout */}
      <div className="max-w-6xl mx-auto z-10 relative mb-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Main Large Card (Left) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="md:col-span-7 bg-white border border-outline-variant rounded-[3rem] p-12 hover:border-secondary/30 transition-all shadow-ambient relative overflow-hidden group"
          >
             <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity">
                <ServerNodeIcon className="w-64 h-64" />
             </div>
             <div className="relative z-10">
                <div className="w-16 h-16 bg-secondary/10 text-secondary rounded-[1.5rem] flex items-center justify-center mb-8 border border-secondary/20">
                  <Keyboard className="w-8 h-8" />
                </div>
                <h3 className="text-4xl font-black mb-6 text-on-surface uppercase tracking-tight">Simulador Ofimática</h3>
                <p className="text-on-surface-variant font-semibold leading-relaxed max-w-md text-lg">
                  La segunda parte del examen exige agilidad extrema. Nuestra plataforma integra un emulador que evalúa tus atajos de teclado y rapidez en resolución de supuestos al milisegundo.
                </p>
             </div>
          </motion.div>

          {/* Right Column Grid */}
          <div className="md:col-span-5 grid grid-rows-2 gap-8 text-left">
            <motion.div 
              initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="bg-white border border-outline-variant rounded-[2.5rem] p-10 hover:border-primary/30 transition-all shadow-ambient flex flex-col justify-center"
            >
              <MousePointer2 className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-xl font-black mb-3 text-on-surface uppercase pr-4">Entrenamiento Automático</h3>
              <p className="text-on-surface-variant font-medium text-[0.9rem] leading-relaxed">
                Psicotécnicos lógicos procedimentales. Jamás repetirás la misma pregunta, forzando a tu cerebro a razonar.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="bg-white border border-outline-variant rounded-[2.5rem] p-10 hover:border-primary/30 transition-all shadow-ambient flex flex-col justify-center"
            >
              <FileBadge className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-xl font-black mb-3 text-on-surface uppercase">LPAC y LRJSP</h3>
              <p className="text-on-surface-variant font-medium text-[0.9rem] leading-relaxed">
                La burocracia desglosada. Aprende leyes de procedimiento mediante flashcards activas inteligentes.
              </p>
            </motion.div>
          </div>

          {/* Bottom Full Card (Data metrics) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
            className="md:col-span-12 bg-on-surface rounded-[3rem] p-12 flex flex-col md:flex-row items-center justify-around text-center gap-10 shadow-premium"
          >
             <div className="flex flex-col items-center">
               <div className="text-[10px] text-primary font-black tracking-[.25em] uppercase mb-4 opacity-70">Tests en Plazos Reales</div>
               <div className="text-6xl md:text-8xl font-black text-white tracking-tighter">10M+</div>
             </div>
             <div className="w-[1px] h-24 bg-white/10 hidden md:block" />
             <div className="flex flex-col items-center">
               <div className="text-[10px] text-secondary font-black tracking-[.25em] uppercase mb-4 opacity-70">Precisión IA en Corrección</div>
               <div className="text-6xl md:text-8xl font-black text-white tracking-tighter">99.9%</div>
             </div>
          </motion.div>

        </div>
      </div>

      {/* SEO & Expanded Content Area */}
      <div className="max-w-4xl mx-auto z-10 relative mt-32 border-t border-outline-variant pt-24 text-center">
        <h2 className="text-4xl font-black mb-10 text-on-surface uppercase tracking-tighter">Academia AGE Online Avanzada</h2>
        <div className="prose prose-lg max-w-none prose-p:text-on-surface-variant prose-p:font-medium prose-strong:text-primary prose-strong:font-black prose-p:leading-relaxed">
          <p className="mb-8">
            Convertirse en un <strong>Administrativo del Estado</strong> o conseguir la plaza de Auxiliar Administrativo de la AGE ya no se trata de memorizar temario en bucle. En nuestra <strong>academia AGE online</strong> apostamos por una preparación ciber-asistida y orientada al cerebro.
          </p>
          <p className="mb-8">
            Afronta el pesado Bloque Jurídico (<strong>Ley 39/2015</strong> y <strong>Ley 40/2015</strong>) con flashcards conversacionales que detectan y corrigen tus confusiones doctrinales. Cuando llegue el examen práctico de la segunda parte, vuela con nuestro exclusivo <strong>Simulador Ofimática AGE online</strong>, el cual genera <strong>tests ofimática Administrativo del Estado</strong> y Auxiliares para que te adaptes al milisegundo de ejecución en entornos Windows y Office.
          </p>
          <p className="font-bold text-on-surface">
            Da un salto cualitativo exponencial sobre tu competencia con la mejor <em>preparación Auxiliar AGE</em> disponible. Domina la burocracia, la informática y conquista tu plaza definitiva.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AcademyAge;
