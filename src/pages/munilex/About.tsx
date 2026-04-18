import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Target, Zap, Quote, Users, Award, ShieldAlert, GraduationCap, ArrowRight } from 'lucide-react';

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
          </div>
        </div>
      </section>

      {/* Leadership & Expertise Section (Our Story) */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-32 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-[13px] font-black uppercase tracking-[0.3em] text-primary-container mb-6">Nuestra Historia</div>
              <h2 className="mb-10 text-secondary italic uppercase tracking-tighter text-4xl md:text-6xl font-black italic">De la <span className="text-primary-container not-italic">necesidad real</span> a la vanguardia jurídica</h2>
              
              <div className="space-y-8 text-lg text-on-surface-variant font-medium leading-relaxed">
                <p>
                  Todo comenzó en un pequeño municipio de <span className="text-primary-container font-black">Cáceres, Extremadura</span>. Un buen amigo acababa de tomar posesión de su primer cargo como <span className="text-secondary font-black">Secretario Interventor interino</span>. 
                </p>
                <p>
                  Pronto descubrimos la realidad del "Superman del Ayuntamiento": una única persona manejando más de 120 leyes distintas, abrumada por procesos manuales, búsquedas interminables en el BOE y bases de datos obsoletas. La tecnología no estaba llegando a donde más se necesitaba.
                </p>
                <p>
                  Decidimos que podíamos cambiar eso. Tras meses de experimentación e iteración constante probando diversos sistemas de IA, nació <span className="text-primary-container font-black">Munilex</span>. Un sistema creado desde la empatía y la precisión técnica, diseñado para que los habilitados nacionales puedan recuperar algo invaluable: la tranquilidad y el control sobre su tiempo.
                </p>
              </div>
              
              <div className="mt-16 space-y-8">
                <div className="flex items-center gap-6 p-8 bg-surface-low rounded-[2rem] border border-primary/5 shadow-sm transition-all hover:bg-white hover:shadow-premium hover:border-primary/10 group">
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center text-primary-container group-hover:scale-110 transition-transform">
                    <Users className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="font-black text-secondary tracking-tight text-xl">Racks Academy Ecosystem</h4>
                    <p className="text-sm font-medium opacity-60">Formación de élite en IA aplicada al sector jurídico español.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute -top-10 -right-10 w-full h-full bg-primary-container/10 rounded-[4rem] blur-[80px]" />
              
              <div className="relative z-10 aspect-[4/5] bg-surface-dim rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(30,41,59,0.4)] border-8 border-white group-hover:scale-[1.02] transition-transform duration-700">
                <img 
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=2000" 
                  alt="Dedicación Jurídica" 
                  className="w-full h-full object-cover transition-transform duration-2000 group-hover:scale-105 contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent via-transparent opacity-40 group-hover:opacity-20 transition-opacity" />
                
                <div className="absolute bottom-10 left-10 right-10 p-8 bg-white/90 backdrop-blur-xl rounded-[2.5rem] border border-white/40 shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 bg-primary text-white rounded-xl flex items-center justify-center shadow-lg">
                      <GraduationCap className="w-7 h-7" />
                    </div>
                    <div>
                      <div className="text-xl font-black text-secondary tracking-tight">Precisión & Esfuerzo</div>
                      <div className="text-[11px] font-black uppercase tracking-[0.2em] text-primary-container">Desde la práctica hacia la innovación</div>
                    </div>
                  </div>
                </div>
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
