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
    <div className="pt-48 pb-24 min-h-screen bg-[#131313] text-[#E5E2E1] px-6 md:px-8 relative overflow-hidden font-inter selection:bg-[#d4af37]/20 selection:text-[#d4af37]">
      <Helmet>
        <title>Academia oposiciones Guardia Civil | Munilex Academy</title>
        <meta name="description" content="Prepara tu Oposición a la Guardia Civil con IA. Especialización en ortografía, inglés táctico y temario oficial de Cabos y Guardias." />
      </Helmet>
      
      {/* Background elements */}
      <div className="absolute top-[20%] left-[-10%] w-[50rem] h-[50rem] bg-[#059669]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[40rem] h-[40rem] bg-[#d4af37]/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Infinite Scrolling Ticker (Marquee) */}
      <div className="absolute top-32 left-0 w-full overflow-hidden border-y border-white/5 bg-white/[0.02] backdrop-blur-md py-4 z-0">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
          className="flex whitespace-nowrap gap-16 item-center text-[10px] font-black tracking-[0.4em] text-[#059669]/40 uppercase font-manrope"
        >
          {Array(8).fill("Operación Estado de Alerta  /  Rutinas de Éxito 97%  /  Gramática y Ortografía IA  /  ").map((text, i) => (
            <span key={i}>{text}</span>
          ))}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 pt-20 grid lg:grid-cols-[0.8fr_1fr] gap-20 items-center mb-32">
        
        {/* Badge Component */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative flex justify-center lg:justify-start order-2 lg:order-1"
        >
          <div className="absolute inset-0 bg-[#059669]/10 rounded-[4rem] blur-3xl opacity-50" />
          <div className="bg-[#1C1B1B] border border-white/5 rounded-[4rem] p-16 shadow-2xl relative group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#059669]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <GCBadge className="w-64 h-64 drop-shadow-[0_20px_60px_rgba(6,78,59,0.3)] group-hover:scale-105 transition-transform duration-700" />
          </div>
        </motion.div>

        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col gap-8 order-1 lg:order-2 lg:text-right items-start lg:items-end"
        >
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-[#059669]/10 text-[#059669] text-[10px] font-black uppercase tracking-[0.3em] border border-[#059669]/20 shadow-sm w-fit backdrop-blur-xl font-manrope">
            <div className="w-2 h-2 rounded-full bg-[#059669] animate-pulse" />
            Benemérita
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.85] text-white font-manrope">
            EL HONOR <br />
            <span className="italic text-[#d4af37]">
               ES NUESTRA DIVISA.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/50 font-semibold leading-relaxed max-w-xl lg:text-right font-inter">
            Suma de temario, <span className="text-[#059669] font-black italic">ortografía extrema</span> e inglés táctico en un solo motor de IA. Destruye el filtro gramatical de la prueba de acceso.
          </p>

          <Link 
            to="/academy/precios"
            className="inline-flex items-center justify-between px-10 py-5 bg-[#d4af37] text-black font-black uppercase tracking-widest rounded-2xl text-[11px] group shadow-xl shadow-[#d4af37]/10 hover:scale-105 transition-all font-manrope"
          >
            Matriculación Élite
            <Crosshair className="w-5 h-5 ml-4 group-hover:rotate-90 transition-transform" />
          </Link>
        </motion.div>
      </div>

      {/* Bento Grid */}
      <div className="max-w-7xl mx-auto z-10 relative mb-40">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase font-manrope mb-4 text-white">
            Matriz <span className="text-[#d4af37] italic">Táctica</span>
          </h2>
          <p className="text-white/40 font-bold uppercase tracking-widest text-xs font-manrope">Entrenamiento de alta intensidad con IA adaptativa.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Main Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="col-span-1 md:col-span-8 bg-[#1C1B1B] border border-white/5 rounded-[3rem] p-12 hover:border-[#d4af37]/40 transition-all shadow-2xl relative overflow-hidden group border-l-8 border-l-[#059669]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#d4af37]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10 flex flex-col justify-between h-full">
              <div>
                <div className="w-16 h-16 mb-10 bg-black/50 rounded-2xl flex items-center justify-center border border-[#059669]/10 text-[#059669] group-hover:bg-[#059669] group-hover:text-black transition-all">
                   <Target className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-black mb-6 uppercase tracking-tight font-manrope text-white">Ortografía y Gramática (Filtro IA)</h3>
                <p className="text-white/40 font-bold leading-relaxed max-w-2xl text-lg font-inter">
                  El mayor punto de criba en la Guardia Civil no es el temario penal, es la <span className="text-[#059669] font-black italic">ortografía</span>. Generamos frases trampa dinámicas con el mismo nivel de dificultad del tribunal. Si fallas una regla, el sistema te bombardea con variaciones hasta erradicar el error.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Stats/Highlight Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="col-span-1 md:col-span-4 bg-[#d4af37] text-black rounded-[3rem] p-12 hover:scale-[1.02] transition-all flex flex-col justify-center items-center text-center shadow-xl shadow-[#d4af37]/20 group"
          >
            <BrainCircuit className="w-16 h-16 text-black mb-8 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter font-manrope italic">Inglés Táctico</h3>
            <p className="text-sm text-black/60 font-black leading-relaxed uppercase tracking-wider font-manrope">
              Gramática basada en vocabulario policial y fronterizo. Domina el idioma de las fuerzas de seguridad.
            </p>
          </motion.div>

          {/* Large Horizontal Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="col-span-1 md:col-span-12 bg-[#1C1B1B] border border-white/5 rounded-[3rem] p-12 flex flex-col md:flex-row gap-12 items-center justify-between shadow-2xl hover:border-[#d4af37]/40 transition-all group"
          >
            <div className="flex-1">
              <h3 className="text-3xl font-black mb-4 uppercase tracking-tight text-white font-manrope">Simulacros Oficiales</h3>
              <p className="text-white/40 font-bold leading-relaxed max-w-4xl text-lg font-inter">
                Temario completo (Penal, Constitución, Fuerzas de Seguridad). Entrena con cronómetro en exámenes de 100 preguntas modelados con la misma densidad estadística de los últimos 5 años de convocatoria.
              </p>
            </div>
            <div className="flex-shrink-0">
              <div className="flex items-center gap-5 px-8 py-5 bg-black/50 border border-white/5 rounded-[2.5rem] shadow-xl group-hover:border-[#059669]/30 transition-all">
                <RotateCcw className="w-8 h-8 text-[#059669] animate-spin-slow" />
                <span className="font-black text-[#059669] text-2xl tracking-tighter uppercase font-manrope">Live Sync</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Footer Content Area */}
      <div className="max-w-4xl mx-auto z-10 relative mt-32 border-t border-white/5 pt-20">
          <h2 className="text-3xl md:text-5xl font-black mb-10 uppercase tracking-tighter text-white italic">Academia Premium para Ingreso en la Guardia Civil</h2>
        <div className="space-y-6 text-white/50 font-semibold leading-relaxed text-lg">
          <p>
            Conseguir el <em>apto</em> y lograr <strong>aprobar las oposiciones de la Guardia Civil</strong> requiere una preparación sin margen de error. En nuestra innovadora <span className="text-[#d4af37]">academia Guardia Civil online</span>, fusionamos el rigor jurídico con las técnicas más punteras de <em>machine learning</em>.
          </p>
          <p>
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
