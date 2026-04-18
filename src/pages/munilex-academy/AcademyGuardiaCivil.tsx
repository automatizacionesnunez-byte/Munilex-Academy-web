import { motion } from 'framer-motion';
import { Crosshair, BrainCircuit, RotateCcw } from 'lucide-react';
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
    <div className="pt-32 pb-24 min-h-screen bg-[#022c22] text-white px-6 md:px-8 relative overflow-hidden font-inter">
      <Helmet>
        <title>Academia oposiciones Guardia Civil | Munilex Academy</title>
        <meta name="description" content="Prepara tu Oposición a la Guardia Civil con IA. Especialización en ortografía, inglés táctico y temario oficial de Cabos y Guardias." />
      </Helmet>
      {/* Deep Forest background elements */}
      <div className="absolute top-[20%] left-[-10%] w-[50rem] h-[50rem] bg-[#10b981]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[40rem] h-[40rem] bg-[#059669]/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Infinite Scrolling Ticker (Marquee) */}
      <div className="absolute top-24 left-0 w-full overflow-hidden border-y border-white/5 bg-[#064e3b]/30 py-3 z-0">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
          className="flex whitespace-nowrap gap-16 item-center text-[10px] font-space-grotesk tracking-[0.3em] text-[#10b981]"
        >
          {Array(8).fill("OPERACIÓN ESTADO DE ALERTA  /  RUTINAS DE ÉXITO 97%  /  GRAMÁTICA Y ORTOGRAFÍA IA  /  ").map((text, i) => (
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
          <div className="absolute inset-0 bg-gradient-to-br from-[#10b981]/20 to-transparent rounded-[3rem] blur-xl" />
          <div className="bg-[#064e3b]/40 backdrop-blur-3xl border border-white/5 rounded-[3rem] p-12 shadow-2xl relative">
            <GCBadge className="w-64 h-64 drop-shadow-[0_0_50px_rgba(16,185,129,0.3)]" />
          </div>
        </motion.div>

        {/* Asymmetrical Hero */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col gap-6 order-1 lg:order-2 lg:text-right items-start lg:items-end"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#10b981]/10 text-[#10b981] text-[11px] font-black uppercase tracking-[0.2em] border border-[#10b981]/20 w-fit">
            Benemérita
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] text-white">
            El Honor <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] to-[#6ee7b7]">
               Es Nuestra Divisa.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-[#a7f3d0] font-medium leading-relaxed max-w-xl mt-4 lg:text-right">
            Suma de temario, ortografía extrema e inglés táctico en un solo motor de IA. Destruye el filtro gramatical de la prueba de acceso.
          </p>

          <Link 
            to="/academy/precios"
            className="mt-8 inline-flex items-center justify-between px-8 py-5 bg-gradient-to-br from-[#10b981] to-[#059669] text-white font-black uppercase tracking-wider rounded-xl text-sm w-fit group shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:shadow-[0_0_50px_rgba(16,185,129,0.5)] transition-all hover:-translate-y-1"
          >
            Acceso Rápido
            <Crosshair className="w-5 h-5 ml-4 group-hover:rotate-90 transition-transform" />
          </Link>
        </motion.div>
      </div>

      {/* Bento Grid */}
      <div className="max-w-6xl mx-auto z-10 relative">
        <div className="flex justify-between items-end mb-10">
          <h2 className="text-3xl font-black text-white tracking-tighter">
            MATRIZ TÁCTICA
          </h2>
          <div className="hidden md:flex gap-2 text-xs font-space-grotesk text-[#10b981] tracking-widest font-bold">
            <span className="px-2 py-1 bg-[#10b981]/10 rounded">V.4.2 ONLINE</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Card 1: Wide Top */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            className="col-span-1 md:col-span-8 bg-[#064e3b]/50 backdrop-blur-xl border-t border-l border-white/5 rounded-3xl p-10 hover:border-[#10b981]/30 transition-all shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#10b981]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10 flex flex-col justify-between h-full">
              <div>
                <GCBadge className="w-16 h-16 text-[#10b981] mb-6 drop-shadow-md" />
                <h3 className="text-2xl font-black mb-3">Ortografía y Gramática (Filtro IA)</h3>
                <p className="text-[#a7f3d0]/80 leading-relaxed max-w-xl">
                  El mayor punto de criba en la Guardia Civil no es el temario penal, es la ortografía. Generamos frases trampa dinámicas con el mismo nivel de dificultad del tribunal. Si fallas una regla, el sistema te acribilla con variaciones hasta que tu mente rechace el error.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Square Right */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="col-span-1 md:col-span-4 bg-[#064e3b]/30 backdrop-blur-xl border border-white/5 rounded-3xl p-10 hover:border-[#10b981]/30 transition-all flex flex-col justify-center items-center text-center"
          >
            <BrainCircuit className="w-12 h-12 text-white mb-4" />
            <h3 className="text-xl font-black mb-2 text-[#10b981]">Inglés Técnico</h3>
            <p className="text-[13px] text-[#a7f3d0]/60">
              Gramática de habla inglesa basada en vocabulario policial y fronterizo.
            </p>
          </motion.div>

          {/* Card 3: Wide Bottom */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="col-span-1 md:col-span-12 bg-gradient-to-r from-[#022c22] to-[#064e3b] border border-white/5 rounded-3xl p-10 flex flex-col md:flex-row gap-8 items-center justify-between"
          >
            <div className="flex-1">
              <h3 className="text-2xl font-black mb-3 text-white">Simulacros Oficiales</h3>
              <p className="text-[#a7f3d0]/70 leading-relaxed max-w-3xl">
                Temario completo (Penal, Constitución, Fuerzas de Seguridad). Entrena con cronómetro en exámenes de 100 preguntas modelados con la misma densidad estadística de los últimos 5 años de convocatoria.
              </p>
            </div>
            <div className="flex-shrink-0">
              <div className="flex items-center gap-3 px-6 py-4 bg-[#10b981]/10 border border-[#10b981]/20 rounded-2xl">
                <RotateCcw className="w-6 h-6 text-[#10b981] animate-spin-slow" />
                <span className="font-space-grotesk font-black text-white text-lg tracking-widest">EN VIVO</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* SEO & Expanded Content Area */}
      <div className="max-w-4xl mx-auto z-10 relative mt-24 border-t border-[#10b981]/20 pt-16">
        <h2 className="text-3xl font-black mb-6 text-white">Academia Premium para Ingreso en la Guardia Civil</h2>
        <div className="prose prose-invert prose-p:text-[#a7f3d0]/80 prose-a:text-[#10b981] prose-strong:text-white">
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
