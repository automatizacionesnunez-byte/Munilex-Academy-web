import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Target, Zap, Quote, Award, GraduationCap, ArrowRight, Globe } from 'lucide-react';
import joseMariaImg from '../../assets/jose_maria.jpg';
import franciscoMarinImg from '../../assets/francisco_marin.jpg';

const About = () => {
  const [activePillar, setActivePillar] = useState(0);
  const WHATSAPP_LINK = "https://wa.me/34605392912?text=Hola,%20me%20gustaría%20solicitar%20una%20demostración%20para%20mi%20Ayuntamiento.";

const LinkedInLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

  return (
    <div className="min-h-screen bg-white font-inter">
      {/* Editorial Hero */}
      <section className="relative pt-32 pb-48 px-6 md:px-8 bg-white border-b border-slate-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 -skew-x-12 transform translate-x-1/2 opacity-30" />
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px]" />
        
        <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-[#002B5B] leading-[0.9] tracking-tighter mb-10 mt-10 uppercase">
              Rigor en cada <br /> <span className="text-[#0066FF]">algoritmo.</span>
            </h1>
            
            <p className="text-xl md:text-3xl text-slate-500 max-w-xl leading-relaxed mb-16 font-medium">
              Munilex es la convergencia definitiva entre la <span className="text-[#002B5B] italic">seguridad jurídica</span> y la <span className="text-[#0066FF] font-black">inteligencia artificial</span>.
            </p>
            
            <div className="py-12 border-y border-slate-100 max-w-2xl">
              <div className="flex gap-12 mb-10">
                {[
                  { id: '01', label: 'MISIÓN', title: 'Nuestra Misión', content: 'Democratizar el acceso al rigor jurídico municipal mediante IA ética y soberana.' },
                  { id: '02', label: 'VISIÓN', title: 'Hacia el Futuro', content: 'Convertir a MuniLex en el estándar tecnológico de la administración local española.' },
                  { id: '03', label: 'VALORES', title: 'Valores', content: 'Transparencia técnica total. Cada respuesta es auditable y cita la fuente legal exacta.' }
                ].map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => setActivePillar(index)}
                    className="flex flex-col text-left group"
                  >
                    <span className={`text-5xl font-black tracking-tighter transition-colors ${activePillar === index ? 'text-[#0066FF]' : 'text-slate-200'}`}>{item.id}</span>
                    <span className={`text-[11px] font-black uppercase tracking-widest transition-opacity ${activePillar === index ? 'opacity-100' : 'opacity-40'}`}>{item.label}</span>
                  </button>
                ))}
              </div>
              
              <div className="relative min-h-[120px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activePillar}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="bg-slate-50 p-8 rounded-3xl border border-slate-100"
                  >
                    <h4 className="text-[#002B5B] font-black text-xl mb-3">
                      {activePillar === 0 ? 'Nuestra Misión' : activePillar === 1 ? 'Hacia el Futuro' : 'Valores Fundamentales'}
                    </h4>
                    <p className="text-slate-600 font-medium leading-relaxed">
                      {activePillar === 0 ? 'Democratizar el acceso al rigor jurídico municipal mediante IA ética y soberana, devolviendo el control al servidor público.' : 
                       activePillar === 1 ? 'Convertir a MuniLex en el estándar tecnológico no negociable de la administración local española para finales de la década.' : 
                       'Transparencia técnica total. Cada respuesta de nuestra IA es auditable y cita la fuente legal exacta para seguridad jurídica.'}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-slate-100 rounded-[4rem] overflow-hidden shadow-2xl relative group">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" 
                alt="Munilex Vision" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#002B5B]/80 to-transparent opacity-60" />
              <div className="absolute bottom-16 left-16 right-16">
                <blockquote className="text-white">
                  <Quote className="w-16 h-16 mb-8 text-[#0066FF] opacity-40 rotate-180" />
                  <p className="text-3xl md:text-4xl font-black italic leading-tight mb-6 tracking-tight">
                    "La seguridad jurídica no es negociable en la administración pública."
                  </p>
                  <footer className="text-sm font-bold tracking-widest uppercase opacity-60 flex items-center gap-4">
                    <div className="w-10 h-px bg-white/40" />
                    Dirección Munilex
                  </footer>
                </blockquote>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pilares */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="mb-20">
            <h2 className="text-5xl font-black text-[#002B5B] uppercase tracking-tighter mb-8">Nuestros Pilares</h2>
            <div className="w-24 h-2 bg-[#0066FF] rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { t: "Rigor Institucional", d: "IA supervisada por Secretarios e Interventores.", i: <GraduationCap className="w-10 h-10" /> },
              { t: "Seguridad Soberana", d: "Cumplimiento total ENS y servidores en España.", i: <ShieldCheck className="w-10 h-10" /> },
              { t: "Transparencia IA", d: "La IA cita siempre la fuente legal exacta.", i: <Target className="w-10 h-10" /> }
            ].map((pillar, i) => (
              <div key={i} className="bg-white p-12 rounded-[2.5rem] border border-slate-100 shadow-sm">
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-[#0066FF] mb-10">
                  {pillar.i}
                </div>
                <h3 className="text-2xl font-black mb-6 text-[#002B5B] tracking-tight">{pillar.t}</h3>
                <p className="text-slate-500 leading-relaxed font-medium">{pillar.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Historia */}
      <section className="py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="mb-32 text-center">
            <div className="text-[13px] font-black uppercase tracking-[0.3em] text-[#0066FF] mb-6">Nuestra Historia</div>
            <h2 className="text-6xl md:text-8xl font-black text-[#002B5B] tracking-tighter uppercase mb-10">El Origen de la <br /> <span className="text-[#0066FF]">Revolución</span></h2>
            <div className="max-w-4xl mx-auto space-y-8 text-left border-l-4 border-[#0066FF] pl-10">
              <p className="text-slate-500 font-medium text-xl leading-relaxed italic">
                "MuniLex no nació de un despacho de consultoría, sino de la amistad y la voluntad de resolver un problema real."
              </p>
              <p className="text-slate-600 font-medium text-lg leading-relaxed">
                El origen se remonta a la etapa de <strong>José María Núñez Mejías</strong> como compañero de piso de un Secretario-Interventor interino. Al observar cómo su amigo se veía abrumado por la inmensa diversidad de materias del derecho administrativo local, José María (jurista formado en <a href="https://racks.academy" target="_blank" rel="noopener noreferrer" className="text-[#0066FF] hover:underline"><strong>RACKS Academy</strong></a>) comenzó a experimentar con modelos de IA para blindar la seguridad jurídica de su compañero.
              </p>
              <p className="text-slate-600 font-medium text-lg leading-relaxed">
                Lo que comenzó como una herramienta personal basada en GPTs evolucionó hasta convertirse en MuniLex. Tras compartir el proyecto con <strong>Francisco de Paula Marín</strong>, también abogado y ya conocido suyo, decidieron potenciar la vertiente educativa y corporativa, dando lugar a <strong>MuniLex Academy</strong>, <strong>Corporate</strong> y <strong>FP</strong>.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* José María */}
            <div className="bg-slate-50 rounded-[3.5rem] p-12 border border-slate-100 flex flex-col justify-between">
              <div>
                <div className="flex gap-8 items-start mb-10">
                  <div className="w-32 h-32 rounded-[2rem] overflow-hidden shadow-lg border-4 border-white">
                    <img src={joseMariaImg} alt="José María Núñez Mejías" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-black text-[#002B5B] tracking-tighter uppercase mb-2 leading-none">José María <br /> Núñez Mejías</h3>
                    <div className="text-[10px] font-black text-[#0066FF] uppercase tracking-widest mb-6">Co-fundador / Jurista / CTO</div>
                  </div>
                </div>
                <p className="text-slate-600 font-medium text-base leading-relaxed mb-10">
                  Jurista experto en IA Generativa aplicado al sector jurídico y académico (<a href="https://racks.academy" target="_blank" rel="noopener noreferrer" className="text-[#0066FF] hover:underline"><strong>RACKS Academy</strong></a>). Como <strong>CTO de Munilex</strong>, lidera la arquitectura de algoritmos y la soberanía tecnológica del ecosistema.
                </p>
              </div>
              
              <div className="flex gap-4">
                <a href="https://es.linkedin.com/in/jos%C3%A9mar%C3%ADan%C3%BA%C3%B1ezmej%C3%ADas" target="_blank" rel="noopener noreferrer" className="p-4 bg-white rounded-2xl text-[#0066FF] hover:bg-[#0066FF] hover:text-white transition-all shadow-sm">
                  <LinkedInLogo className="w-6 h-6" />
                </a>
                <a href="https://www.techtitute.com/es-es/docentes/nunez-mejias-jose-maria" target="_blank" rel="noopener noreferrer" className="p-4 bg-white rounded-2xl text-[#0066FF] hover:bg-[#0066FF] hover:text-white transition-all shadow-sm">
                  <GraduationCap className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Francisco */}
            <div className="bg-[#002B5B] rounded-[3.5rem] p-12 text-white flex flex-col justify-between">
              <div>
                <div className="flex gap-8 items-start mb-10">
                  <div className="w-32 h-32 rounded-[2rem] overflow-hidden shadow-lg border-4 border-white/10">
                    <img src={franciscoMarinImg} alt="Francisco de Paula Marín" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-black text-white tracking-tighter uppercase mb-2 leading-none">Francisco <br /> de Paula Marín</h3>
                    <div className="text-[10px] font-black text-[#0066FF] uppercase tracking-widest mb-6">Co-fundador / Abogado / CMO / Profesor</div>
                  </div>
                </div>
                <p className="text-white/70 font-medium text-base leading-relaxed mb-10">
                  Abogado, estratega de negocio y profesor. Como <strong>CMO de Munilex</strong>, lidera la expansión educativa y corporativa, aportando su visión estratégica y experiencia docente para democratizar el acceso al derecho local.
                </p>
              </div>

              <div className="flex gap-4">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/10 rounded-2xl text-white hover:bg-white hover:text-[#002B5B] transition-all border border-white/5">
                  <LinkedInLogo className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <div className="bg-[#002B5B] rounded-[3.5rem] p-24 text-white text-center relative overflow-hidden">
             <h2 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter uppercase">
               Evolucionemos <br /> <span className="text-[#0066FF]">la gestión</span>
             </h2>
             <a href={WHATSAPP_LINK} className="inline-flex items-center gap-4 px-12 py-6 bg-white text-[#002B5B] font-black rounded-2xl text-xl shadow-2xl hover:scale-105 transition-transform">
               Hablar con un consultor
               <ArrowRight className="w-6 h-6" />
             </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
