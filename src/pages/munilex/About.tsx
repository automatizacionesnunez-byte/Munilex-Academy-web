import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Target, Zap, Quote, Award, GraduationCap, ArrowRight, ExternalLink as Linkedin, Globe } from 'lucide-react';
import joseMariaImg from '../../assets/jose_maria.jpg';
import franciscoMarinImg from '../../assets/francisco_marin.jpg';

const About = () => {
  const [activePillar, setActivePillar] = useState(0);
  const WHATSAPP_LINK = "https://wa.me/34605392912?text=Hola,%20me%20gustaría%20solicitar%20una%20demostración%20para%20mi%20Ayuntamiento.";

  return (
    <div className="pt-24 min-h-screen bg-surface font-inter">
      {/* Editorial Hero */}
      <section className="relative py-24 md:py-48 px-6 md:px-8 bg-white border-b border-surface-variant/30 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-surface-low -skew-x-12 transform translate-x-1/2 opacity-30" />
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary-container/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-cyan/5 rounded-full blur-[120px]" />
        
        <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary-container/10 border border-primary-container/20 text-primary-container text-[14px] font-black tracking-widest uppercase mb-10">
              <Award className="w-4 h-4 fill-current" />
              Nuestra Identidad Institucional
            </div>
            
            <h1 className="text-6xl md:text-9xl font-black text-secondary leading-[0.9] tracking-tighter mb-12">
              Rigor en cada <span className="text-primary-container">algoritmo.</span>
            </h1>
            
            <p className="text-xl md:text-3xl text-on-surface-variant max-w-xl leading-relaxed mb-16 font-inter font-medium opacity-90">
              Munilex es la convergencia definitiva entre la <span className="text-secondary italic">seguridad jurídica</span> y la <span className="text-primary-container font-black">inteligencia artificial de vanguardia</span>.
            </p>
            
            <div className="py-12 border-y border-surface-variant/30 max-w-2xl">
              <div className="flex gap-12 mb-10">
                {[
                  { id: '01', label: 'MISIÓN', title: 'Nuestra Misión', content: 'Democratizar el acceso al rigor jurídico municipal mediante IA ética y soberana, devolviendo el control al servidor público.' },
                  { id: '02', label: 'VISIÓN', title: 'Hacia el Futuro', content: 'Convertir a MuniLex en el estándar tecnológico no negociable de la administración local española para finales de la década.' },
                  { id: '03', label: 'VALORES', title: 'Valores Fundamentales', content: 'Transparencia técnica total. Cada respuesta de nuestra IA es auditable y cita la fuente legal exacta para seguridad jurídica.' }
                ].map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => setActivePillar(index)}
                    className="flex flex-col text-left group"
                  >
                    <span className={`text-4xl font-black tracking-tighter transition-colors ${activePillar === index ? 'text-primary' : 'text-surface-variant'}`}>{item.id}</span>
                    <span className={`text-[13px] font-black uppercase tracking-widest transition-opacity ${activePillar === index ? 'opacity-100' : 'opacity-40 group-hover:opacity-60'}`}>{item.label}</span>
                  </motion.button>
                ))}
              </div>
              
              <div className="relative min-h-[100px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activePillar}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="bg-surface-low p-8 rounded-3xl border border-primary-container/10 shadow-sm"
                  >
                    <h4 className="text-secondary font-black text-xl mb-3">{[
                      'Nuestra Misión', 
                      'Hacia el Futuro', 
                      'Valores Fundamentales'
                    ][activePillar]}</h4>
                    <p className="text-on-surface-variant font-medium leading-relaxed">
                      {[
                        'Democratizar el acceso al rigor jurídico municipal mediante IA ética y soberana, devolviendo el control al servidor público.',
                        'Convertir a MuniLex en el estándar tecnológico no negociable de la administración local española para finales de la década.',
                        'Transparencia técnica total. Cada respuesta de nuestra IA es auditable y cita la fuente legal exacta para seguridad jurídica.'
                      ][activePillar]}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-surface-variant rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(30,41,59,0.3)] relative group">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" 
                alt="Munilex Vision" 
                className="w-full h-full object-cover transition-transform duration-2000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent via-transparent opacity-60" />
              <div className="absolute bottom-16 left-16 right-16">
                <blockquote className="text-white">
                  <Quote className="w-16 h-16 mb-8 text-primary-fixed opacity-40 rotate-180" />
                  <p className="text-3xl md:text-4xl font-black italic leading-tight mb-6 tracking-tight">
                    "La seguridad jurídica no es negociable en la administración pública."
                  </p>
                  <footer className="text-sm font-bold tracking-widest uppercase opacity-60 flex items-center gap-4">
                    <div className="w-10 h-px bg-white/40" />
                    Dirección Ejecutiva Munilex
                  </footer>
                </blockquote>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values & Pillares Grid */}
      <section className="py-32 bg-surface-low relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="mb-20">
            <h2 className="mb-8 text-secondary">Nuestros Pilares</h2>
            <div className="w-24 h-2 bg-primary-container rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { 
                t: "Rigor Institucional", 
                d: "IA entrenada bajo la supervisión de Secretarios e Interventores en activo.", 
                i: <GraduationCap className="w-10 h-10" />,
                c: "bg-primary-container"
              },
              { 
                t: "Seguridad Soberana", 
                d: "Cumplimiento total con el ENS y servidores localizados íntegramente en España.", 
                i: <ShieldCheck className="w-10 h-10" />,
                c: "bg-secondary"
              },
              { 
                t: "Transparencia IA", 
                d: "Procesos auditables donde la IA cita siempre la fuente legal exacta (BOE/DOUE).", 
                i: <Target className="w-10 h-10" />,
                c: "bg-secondary-cyan"
              }
            ].map((pillar, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-12 rounded-[2.5rem] shadow-ambient border border-surface-variant/50 group"
              >
                <div className={`w-16 h-16 ${pillar.c} rounded-2xl flex items-center justify-center text-white mb-10 shadow-lg group-hover:scale-110 transition-transform`}>
                  {pillar.i}
                </div>
                <h3 className="text-2xl font-black mb-6 text-on-surface tracking-tight">{pillar.t}</h3>
                <p className="text-on-surface-variant leading-relaxed font-medium">
                  {pillar.d}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership & Expertise Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="mb-24 text-center">
            <div className="text-[13px] font-black uppercase tracking-[0.3em] text-primary-container mb-6">Liderazgo Munilex</div>
            <h2 className="text-5xl md:text-7xl font-black text-secondary tracking-tighter uppercase mb-6">Derecho y Tecnología con <span className="text-primary-container">Propósito</span></h2>
            <p className="text-on-surface-variant font-semibold text-xl max-w-3xl mx-auto">La convergencia entre la academia tradicional y la innovación disruptiva.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            {/* José María - Fundador */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative group bg-surface-low rounded-[3.5rem] p-8 md:p-12 border border-primary/5 shadow-ambient hover:shadow-premium transition-all"
            >
              <div className="flex flex-col md:flex-row gap-8 items-start mb-10">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-[2.5rem] overflow-hidden bg-white border border-surface-variant shadow-ambient flex-shrink-0">
                  <img 
                    src={joseMariaImg} 
                    alt="José María Núñez Mejías" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <div>
                  <h3 className="text-3xl font-black text-secondary leading-tight mb-2 tracking-tighter uppercase">José María Núñez Mejías</h3>
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-container mb-6">Fundador / Consultor Técnico LegalTech & IA</div>
                  <p className="text-on-surface-variant leading-relaxed font-medium mb-6">
                    Jurista certificado por Racks Academy. Su visión lidera el desarrollo de algoritmos que garantizan la seguridad jurídica absoluta, aplicando la inteligencia artificial en entornos académicos como TECH UNIVERSITY.
                  </p>
                  <div className="flex gap-4">
                    <a href="https://www.linkedin.com/in/jose-maria-nu%C3%B1ez-mejia-73b06222b/" target="_blank" rel="noopener noreferrer" className="text-secondary/40 hover:text-primary-container transition-colors"><Linkedin className="w-5 h-5" /></a>
                    <a href="https://www.techtitute.com/es-es/docentes/nunez-mejias-jose-maria" target="_blank" rel="noopener noreferrer" className="text-secondary/40 hover:text-primary-container transition-colors"><Globe className="w-5 h-5" /></a>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Jurista", "LegalTech Expert", "IA Aplicada", "Racks Academy"].map((tag) => (
                  <span key={tag} className="px-4 py-1.5 bg-white border border-surface-variant/50 rounded-full text-[10px] font-black uppercase tracking-wider text-secondary/60">{tag}</span>
                ))}
              </div>
            </motion.div>

            {/* Francisco - Fundador */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative group bg-white rounded-[3.5rem] p-8 md:p-12 border border-primary-container/10 shadow-premium hover:-translate-y-2 transition-all"
            >
              <div className="flex flex-col md:flex-row gap-8 items-start mb-10">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-[2.5rem] overflow-hidden bg-primary-container/5 border border-primary-container/10 shadow-sm flex-shrink-0">
                  <img 
                    src={franciscoMarinImg} 
                    alt="Francisco de Paula Marín" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <div>
                  <h3 className="text-3xl font-black text-secondary leading-tight mb-2 tracking-tighter uppercase">Francisco de Paula Marín</h3>
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary-cyan mb-6">Fundador / Director Académico & Comercial</div>
                  <p className="text-on-surface-variant leading-relaxed font-medium">
                    Referente pedagógico especializado en la síntesis de normativa compleja. Francisco es co-fundador y dirige la estructuración estratégica de contenidos y la expansión comercial de Munilex, asegurando la excelencia educativa.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Gestión Académica", "Estrategia Comercial", "Docencia Superior", "Experto Jurídico"].map((tag) => (
                  <span key={tag} className="px-4 py-1.5 bg-surface-low border border-primary/5 rounded-full text-[10px] font-black uppercase tracking-wider text-secondary/40">{tag}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Unified Certifications Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-surface-low via-white to-white opacity-50" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 text-center">
          <div className="mb-20">
             <div className="text-[13px] font-black uppercase tracking-[0.3em] text-primary-container mb-6">Acreditación Técnica</div>
             <h2 className="text-5xl md:text-7xl font-black text-secondary tracking-tighter">Garantía y Seguridad Soberana</h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-24 items-center">
             <div className="flex flex-col items-center gap-6 group">
                <div className="w-24 h-24 rounded-full bg-surface-low flex items-center justify-center text-on-surface-variant border border-surface-variant/30 shadow-sm transition-all duration-500 group-hover:bg-primary-container/10 group-hover:border-primary-container/30 group-hover:scale-110">
                   <Award className="w-10 h-10 group-hover:text-primary-container transition-colors" />
                </div>
                <div className="flex flex-col gap-1">
                   <span className="font-black text-xl md:text-2xl tracking-tighter text-secondary">CERTIFICADO ENS</span>
                   <span className="text-[10px] font-black uppercase tracking-widest opacity-40">Esquema Nacional de Seguridad</span>
                </div>
             </div>
             <div className="flex flex-col items-center gap-6 group">
                <div className="w-24 h-24 rounded-full bg-surface-low flex items-center justify-center text-on-surface-variant border border-surface-variant/30 shadow-sm transition-all duration-500 group-hover:bg-secondary/10 group-hover:border-secondary/30 group-hover:scale-110">
                   <ShieldCheck className="w-10 h-10 group-hover:text-secondary transition-colors" />
                </div>
                <div className="flex flex-col gap-1">
                   <span className="font-black text-xl md:text-2xl tracking-tighter text-secondary">CUMPLE CON LA RGPD</span>
                   <span className="text-[10px] font-black uppercase tracking-widest opacity-40">Protección de Datos Europeos</span>
                </div>
             </div>
             <div className="flex flex-col items-center gap-6 group">
                <div className="w-24 h-24 rounded-full bg-surface-low flex items-center justify-center text-on-surface-variant border border-surface-variant/30 shadow-sm transition-all duration-500 group-hover:bg-secondary-cyan/10 group-hover:border-secondary-cyan/30 group-hover:scale-110">
                   <Target className="w-10 h-10 group-hover:text-secondary-cyan transition-colors" />
                </div>
                <div className="flex flex-col gap-1">
                   <span className="font-black text-xl md:text-2xl tracking-tighter text-secondary">SOPORTE TSJ</span>
                   <span className="text-[10px] font-black uppercase tracking-widest opacity-40">Jurisprudencia Unificada</span>
                </div>
             </div>
             <div className="flex flex-col items-center gap-6 group">
                <div className="w-24 h-24 rounded-full bg-surface-low flex items-center justify-center text-on-surface-variant border border-surface-variant/30 shadow-sm transition-all duration-500 group-hover:bg-primary/10 group-hover:border-primary/30 group-hover:scale-110">
                   <Zap className="w-10 h-10 group-hover:text-primary transition-colors" />
                </div>
                <div className="flex flex-col gap-1">
                   <span className="font-black text-xl md:text-2xl tracking-tighter text-secondary">SDR 12,5 V</span>
                   <span className="text-[10px] font-black uppercase tracking-widest opacity-40">Estándar de Respuesta Crítica</span>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Corporate CTA */}
      <section className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <div className="bg-primary rounded-[3.5rem] p-16 md:p-24 text-white text-center relative overflow-hidden shadow-premium">
             <div className="absolute inset-0 bg-gradient-to-br from-primary-container/40 to-secondary-cyan/10 pointer-events-none" />
             <h2 className="text-4xl md:text-6xl font-black mb-10 relative z-10 tracking-tighter leading-tight">
               Evolucionemos juntos la gestión municipal
             </h2>
             <p className="text-xl text-primary-fixed/80 mb-16 relative z-10 max-w-2xl mx-auto font-medium leading-relaxed uppercase tracking-widest text-sm">
               HABLAR CON UN CONSULTOR ESTRATÉGICO
             </p>
             <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 px-12 py-6 bg-white text-primary font-black rounded-2xl text-xl shadow-2xl hover:scale-105 transition-transform relative z-10 group"
             >
               Solicitar Demostración
               <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
             </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
