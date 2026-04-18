import { motion } from 'framer-motion';
import { Crosshair, BrainCircuit, ShieldHalf, RotateCcw } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const GCBadge = ({ className }: { className?: string }) => (
  <img 
    src="/guardia_civil.png" 
    alt="Emblema de la Guardia Civil"
    className={className} 
  />
);

const AcademyGuardiaCivil = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-surface text-on-surface px-6 md:px-8 relative overflow-hidden font-inter">
      <Helmet>
        <title>Academia oposiciones Guardia Civil | Munilex Academy</title>
        <meta name="description" content="Prepara tu Oposición a la Guardia Civil con IA. Especialización en ortografía, inglés táctico y temario oficial de Cabos y Guardias." />
      </Helmet>
      
      {/* Background elements - Subtle Emerald accents */}
      <div className="absolute top-[20%] left-[-10%] w-[50rem] h-[50rem] bg-guardia/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[40rem] h-[40rem] bg-emerald-600/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Infinite Scrolling Ticker (Marquee) - Updated for clarity */}
      <div className="absolute top-24 left-0 w-full overflow-hidden border-y border-outline-variant bg-white/50 backdrop-blur-md py-3 z-0">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
          className="flex whitespace-nowrap gap-16 item-center text-[10px] font-black tracking-[0.3em] text-guardia/40 uppercase"
        >
          {Array(8).fill("Operación Estado de Alerta  /  Rutinas de Éxito 97%  /  Gramática y Ortografía IA  /  ").map((text, i) => (
            <span key={i}>{text}</span>
          ))}
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10 pt-16 grid lg:grid-cols-[0.8fr_1fr] gap-16 items-center mb-24">
        
        {/* Floating Identity Component */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative flex justify-center lg:justify-start order-2 lg:order-1"
        >
          <div className="absolute inset-0 bg-guardia/5 rounded-[3rem] blur-xl" />
          <div className="bg-white/80 backdrop-blur-2xl border border-outline-variant rounded-[3rem] p-12 shadow-premium relative">
            <GCBadge className="w-64 h-64 drop-shadow-[0_20px_50px_rgba(6,78,59,0.1)]" />
          </div>
        </motion.div>

        {/* Asymmetrical Hero */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col gap-6 order-1 lg:order-2 lg:text-right items-start lg:items-end"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-guardia/5 text-guardia text-[10px] font-black uppercase tracking-[0.2em] border border-guardia/10 w-fit">
            Benemérita
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.95] text-on-surface">
            El Honor <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-guardia to-emerald-500">
               Es Nuestra Divisa.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-on-surface-variant font-medium leading-relaxed max-w-xl mt-4 lg:text-right">
            Suma de temario, ortografía extrema e inglés táctico en un solo motor de IA. Destruye el filtro gramatical de la prueba de acceso.
          </p>

          <Link 
            to="/academy/precios"
            className="mt-8 inline-flex items-center justify-between px-10 py-5 bg-on-surface text-white font-black uppercase tracking-wider rounded-2xl text-xs w-fit group shadow-premium hover:-translate-y-1 transition-all"
          >
            Acceso Rápido
            <Crosshair className="w-5 h-5 ml-4 group-hover:rotate-90 transition-transform" />
          </Link>
        </motion.div>
      </div>

      {/* Bento Grid */}
      <div className="max-w-6xl mx-auto z-10 relative">
        <div className="flex justify-between items-end mb-10">
          <h2 className="text-3xl font-black tracking-tighter uppercase">
            Matriz Táctica
          </h2>
          <div className="hidden md:flex gap-2 text-[10px] font-black text-guardia tracking-widest uppercase">
            <span className="px-3 py-1 bg-guardia/5 border border-guardia/10 rounded-md uppercase">v.4.2 Online</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Card 1: Wide Top */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            className="col-span-1 md:col-span-8 bg-white border border-outline-variant rounded-[2.5rem] p-10 hover:border-guardia/30 transition-all shadow-ambient relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-guardia/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10 flex flex-col justify-between h-full">
              <div>
                <div className="w-16 h-16 mb-6">
                   <GCBadge className="w-full h-full object-contain" />
                </div>
                <h3 className="text-2xl font-black mb-3 uppercase tracking-tight">Ortografía y Gramática (Filtro IA)</h3>
                <p className="text-on-surface-variant font-medium leading-relaxed max-w-xl">
                  El mayor punto de criba en la Guardia Civil no es el temario penal, es la ortografía. Generamos frases trampa dinámicas con el mismo nivel de dificultad del tribunal. Si fallas una regla, el sistema te acribilla con variaciones hasta que tu mente rechace el error.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Square Right */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="col-span-1 md:col-span-4 bg-white border border-outline-variant rounded-[2.5rem] p-10 hover:border-guardia/30 transition-all flex flex-col justify-center items-center text-center shadow-ambient"
          >
            <BrainCircuit className="w-12 h-12 text-guardia mb-4" />
            <h3 className="text-xl font-black mb-2 text-on-surface uppercase">Inglés Técnico</h3>
            <p className="text-[13px] text-on-surface-variant font-medium">
              Gramática de habla inglesa basada en vocabulario policial y fronterizo.
            </p>
          </motion.div>

          {/* Card 3: Wide Bottom */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="col-span-1 md:col-span-12 bg-white border border-outline-variant rounded-[2.5rem] p-10 flex flex-col md:flex-row gap-8 items-center justify-between shadow-ambient hover:border-guardia/30 transition-all"
          >
            <div className="flex-1">
              <h3 className="text-2xl font-black mb-3 uppercase">Simulacros Oficiales</h3>
              <p className="text-on-surface-variant font-medium leading-relaxed max-w-3xl">
                Temario completo (Penal, Constitución, Fuerzas de Seguridad). Entrena con cronómetro en exámenes de 100 preguntas modelados con la misma densidad estadística de los últimos 5 años de convocatoria.
              </p>
            </div>
            <div className="flex-shrink-0">
              <div className="flex items-center gap-3 px-6 py-4 bg-guardia/5 border border-guardia/10 rounded-2xl">
                <RotateCcw className="w-6 h-6 text-guardia animate-spin-slow" />
                <span className="font-black text-on-surface text-lg tracking-widest">EN VIVO</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* SEO & Expanded Content Area */}
      <div className="max-w-4xl mx-auto z-10 relative mt-24 border-t border-outline-variant pt-16">
        <h2 className="text-3xl font-black mb-6 uppercase tracking-tighter">Academia Premium para Ingreso en la Guardia Civil</h2>
        <div className="prose prose-slate prose-p:text-on-surface-variant prose-strong:text-on-surface prose-a:text-guardia">
          <p className="mb-4">
            Conseguir el <em>apto</em> y lograr <strong>aprobar las oposiciones de la Guardia Civil</strong> requiere una preparación sin margen de error. En nuestra innovadora <strong>academia Guardia Civil online</strong>, fusionamos el rigor jurídico con las técnicas más punteras de <em>machine learning</em>.
          </p>
          <p className="mb-4">
            Olvídate de memorizar ciegamente el <strong>temario de la Guardia Civil en PDF</strong> estático. Nuestro sistema transforma la teoría en miles de <strong>simulacros de examen de la Guardia Civil</strong> interactivos y <strong>test de ortografía Guardia Civil</strong> adaptados que te acribillan allí donde fallas.
          </p>
          <p>
            Alístate con los mejores. Prepara el Derecho Penal, la Constitucional, las pruebas psicotécnicas y el duro examen de <strong>Inglés para la Guardia Civil</strong> con el motor de entrenamiento táctico más avanzado de España.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AcademyGuardiaCivil;
