import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Building2, Rocket, ArrowRight, CheckCircle, Globe, Heart, Cog, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const AcademyCorporate = () => {
  return (
    <div className="min-h-screen bg-[#131313] text-[#E5E2E1] font-inter selection:bg-[#d4af37]/30 selection:text-white">
      <Helmet>
        <title>Corporate | Digitalización de Academias | Munilex Academy</title>
        <meta name="description" content="Lleva tu academia al siguiente nivel con tecnología de marca blanca e IA integrada. Tres planes escalables para tu éxito." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 px-6 md:px-8 overflow-hidden bg-[#0E0E0E]">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#d4af37 0.5px, transparent 0.5px)', backgroundSize: '30px 30px' }} />
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-[#d4af37]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-20 h-20 bg-[#d4af37]/10 rounded-3xl flex items-center justify-center text-[#d4af37] mx-auto mb-10 border border-[#d4af37]/20"
          >
            <Building2 className="w-10 h-10" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black text-white leading-[0.85] tracking-tighter mb-10 uppercase"
          >
            TU MARCA, NUESTRA <br/>
            <span className="italic text-[#d4af37]">TECNOLOGÍA</span>
          </motion.h1>
          <p className="text-xl md:text-2xl text-white/50 max-w-3xl mx-auto leading-relaxed font-semibold">
            Digitalización de alto rendimiento para centros que buscan escalar sin límites técnicos.
          </p>
        </div>
      </section>

      {/* Plans Section - 3 Columns */}
      <section className="py-24 bg-[#131313]">
        <div className="max-w-full mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Plan Iniciación */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#1C1B1B] border border-white/5 p-12 rounded-[4rem] relative overflow-hidden group flex flex-col"
            >
              <div className="flex items-center gap-4 mb-10 relative">
                <div className="w-14 h-14 bg-[#2A2A2A] rounded-2xl flex items-center justify-center text-[#d4af37] group-hover:scale-110 transition-transform">
                  <Rocket className="w-7 h-7" />
                </div>
                <div className="h-[2px] flex-grow bg-gradient-to-r from-[#d4af37] to-transparent opacity-20" />
              </div>
              
              <div className="flex-grow">
                <h3 className="text-3xl font-black text-white mb-2 uppercase tracking-tighter leading-none">Plan Iniciación</h3>
                <div className="text-[#d4af37] italic font-bold mb-8 uppercase text-sm tracking-widest">"Empieza por lo básico"</div>
                
                <p className="text-white/60 font-medium leading-relaxed mb-10">
                  Integración básica del ecosistema MUNILEx: dashboard de seguimiento, tests ilimitados, casos prácticos con corrección automática, flashcards y analítica. Sin personalización de marca.
                </p>
                
                <div className="space-y-6 mb-12">
                  <div className="p-6 bg-white/5 rounded-3xl border border-white/5">
                    <div className="text-[10px] font-black uppercase text-[#d4af37] tracking-[0.2em] mb-3">Setup & Tiempos</div>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center text-xs font-bold">
                        <span className="text-white/40">Base Munilex</span>
                        <span className="text-white">500€ — 1 semana</span>
                      </div>
                      <div className="flex justify-between items-center text-xs font-bold">
                        <span className="text-white/40">Base Propia</span>
                        <span className="text-white">700€-1200€ — 2-3 sem.</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-[#d4af37]/5 rounded-3xl border border-[#d4af37]/10">
                    <div className="text-[10px] font-black uppercase text-[#d4af37] tracking-[0.2em] mb-3">Licencia Alumno / Mes</div>
                    <div className="space-y-2 text-xs font-black uppercase">
                      <div className="flex justify-between"><span className="text-white/30">0 a 150</span> <span className="text-white">4€/u</span></div>
                      <div className="flex justify-between"><span className="text-white/30">150 a 500</span> <span className="text-white">3.5€/u</span></div>
                      <div className="flex justify-between"><span className="text-white/30">+500</span> <span className="text-white">2€/u</span></div>
                    </div>
                  </div>
                </div>
              </div>

              <Link to="/academy/contacto" className="w-full py-6 bg-white/5 hover:bg-white/10 text-white font-black rounded-2xl text-center uppercase tracking-widest transition-all border border-white/10 mt-auto">
                Consultar Inicio
              </Link>
            </motion.div>

            {/* Plan Marca */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-[#1C1B1B] border border-[#d4af37]/40 p-12 rounded-[4rem] relative overflow-hidden group flex flex-col shadow-2xl shadow-[#d4af37]/5"
            >
              <div className="flex items-center gap-4 mb-10 relative">
                <div className="w-14 h-14 bg-[#2A2A2A] rounded-2xl flex items-center justify-center text-[#d4af37] group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                  <Heart className="w-7 h-7" />
                </div>
                <div className="h-[2px] flex-grow bg-gradient-to-r from-[#d4af37] to-transparent opacity-40" />
                <div className="absolute -top-6 right-0 text-[10px] bg-[#d4af37] text-black font-black px-4 py-1 rounded-full uppercase">Más Popular</div>
              </div>
              
              <div className="flex-grow">
                <h3 className="text-3xl font-black text-white mb-2 uppercase tracking-tighter leading-none">Plan Marca</h3>
                <div className="text-[#d4af37] italic font-bold mb-8 uppercase text-sm tracking-widest">"Tu tecnología propia"</div>
                
                <p className="text-white/60 font-medium leading-relaxed mb-10">
                  Todo lo del Plan Iniciación más personalización completa (logo, colores, entorno), funcionalidad extra a elección y soporte prioritario. Tu imagen, nuestra tecnología.
                </p>
                
                <div className="space-y-6 mb-12">
                  <div className="p-6 bg-white/5 rounded-3xl border border-white/5">
                    <div className="text-[10px] font-black uppercase text-[#d4af37] tracking-[0.2em] mb-3">Setup & Tiempos</div>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center text-xs font-bold">
                        <span className="text-white/40">Presupuesto</span>
                        <span className="text-white">Bajo según adapt.</span>
                      </div>
                      <div className="flex justify-between items-center text-xs font-bold">
                        <span className="text-white/40">Entrega aprox.</span>
                        <span className="text-white">3 - 4 semanas</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-[#d4af37] rounded-3xl border border-[#d4af37]">
                    <div className="text-[10px] font-black uppercase text-black/40 tracking-[0.2em] mb-3">Licencia Alumno / Mes</div>
                    <div className="space-y-2 text-xs font-black uppercase text-black">
                      <div className="flex justify-between"><span className="opacity-40">0 a 150</span> <span className="opacity-90">5€/u</span></div>
                      <div className="flex justify-between"><span className="opacity-40">150 a 500</span> <span className="opacity-90">4€/u</span></div>
                      <div className="flex justify-between"><span className="opacity-40">+500</span> <span className="opacity-90">3€/u</span></div>
                    </div>
                  </div>
                </div>
              </div>

              <Link to="/academy/contacto" className="w-full py-6 bg-[#d4af37] text-black font-black rounded-2xl text-center uppercase tracking-widest transition-all shadow-xl shadow-[#d4af37]/20 mt-auto">
                Configurar Marca
              </Link>
            </motion.div>

            {/* Plan Ecosistema */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-[#1C1B1B] border border-white/5 p-12 rounded-[4rem] relative overflow-hidden group flex flex-col"
            >
              <div className="flex items-center gap-4 mb-10 relative">
                <div className="w-14 h-14 bg-[#2A2A2A] rounded-2xl flex items-center justify-center text-[#d4af37] group-hover:scale-110 transition-transform">
                  <Globe className="w-7 h-7" />
                </div>
                <div className="h-[2px] flex-grow bg-gradient-to-r from-[#d4af37] to-transparent opacity-20" />
              </div>
              
              <div className="flex-grow">
                <h3 className="text-3xl font-black text-white mb-2 uppercase tracking-tighter leading-none">Plan Ecosistema</h3>
                <div className="text-[#d4af37] italic font-bold mb-8 uppercase text-sm tracking-widest">"Tu sistema educativo propio"</div>
                
                <p className="text-white/60 font-medium leading-relaxed mb-10">
                  Desarrollo 100% personalizado, funcionalidades ilimitadas, integración total de metodologías propias, acompañamiento técnico continuo e infraestructura dedicada.
                </p>
                
                <div className="space-y-6 mb-12">
                  <div className="p-6 bg-white/5 rounded-3xl border border-white/5">
                    <div className="text-[10px] font-black uppercase text-[#d4af37] tracking-[0.2em] mb-3">Setup & Tiempos</div>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center text-xs font-bold">
                        <span className="text-white/40">Inversión</span>
                        <span className="text-white">Bajo presupuesto</span>
                      </div>
                      <div className="flex justify-between items-center text-xs font-bold">
                        <span className="text-white/40">Entrega aprox.</span>
                        <span className="text-white">6 - 8 semanas</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-[#d4af37]/5 rounded-3xl border border-[#d4af37]/10">
                    <div className="text-[10px] font-black uppercase text-[#d4af37] tracking-[0.2em] mb-3">Licencia Alumno / Mes</div>
                    <div className="space-y-2 text-xs font-black uppercase">
                      <div className="flex justify-between"><span className="text-white/30">0 a 150</span> <span className="text-white">5€/u</span></div>
                      <div className="flex justify-between"><span className="text-white/30">150 a 500</span> <span className="text-white">4€/u</span></div>
                      <div className="flex justify-between"><span className="text-white/30">+500</span> <span className="text-white">3€/u</span></div>
                    </div>
                  </div>
                </div>
              </div>

              <Link to="/academy/contacto" className="w-full py-6 bg-white text-black hover:bg-slate-200 font-black rounded-2xl text-center uppercase tracking-widest transition-all mt-auto">
                Consultar Proyecto
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why MultiLex Corporate */}
      <section className="py-40 bg-[#0E0E0E]">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <div className="text-[#d4af37] font-black uppercase tracking-[0.4em] text-[10px] mb-8 block">Excelencia Tecnológica</div>
              <h2 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter mb-12 uppercase">
                INFRAESTRUCTURA <br/>
                <span className="italic text-[#d4af37]">SIN LIMITES</span>
              </h2>
              
              <div className="space-y-10">
                {[
                  { t: "Escalabilidad Automática", d: "Soportamos desde 10 hasta 10.000 alumnos sin degradación de rendimiento.", icon: <Cog /> },
                  { t: "Seguridad Bancaria", d: "Encriptación de grado militar para proteger tus contenidos y datos de alumnos.", icon: <Shield /> },
                  { t: "Soporte 1:1", d: "Un gestor técnico dedicado para asegurar que tu transición digital sea perfecta.", icon: <CheckCircle /> }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-12 h-12 bg-[#1C1B1B] rounded-xl flex items-center justify-center text-[#d4af37] flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-black text-white uppercase tracking-tight mb-2">{item.t}</h4>
                      <p className="text-white/40 font-medium leading-relaxed">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link to="/academy/contacto" className="inline-flex items-center gap-3 px-10 py-5 bg-[#d4af37] text-black font-black uppercase tracking-widest text-[11px] rounded-xl mt-16 hover:scale-105 transition-all">
                Solicitar auditoría gratuita
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#d4af37]/20 to-transparent blur-3xl opacity-50" />
              <div className="bg-[#1C1B1B] border border-white/5 p-12 rounded-[4rem] relative z-10">
                <div className="text-center mb-10">
                  <h3 className="text-3xl font-black text-white uppercase tracking-tight leading-none mb-2">Presupuestos</h3>
                  <div className="text-[#d4af37] font-bold uppercase text-[10px] tracking-[0.3em]">Cerrados y Transparentes</div>
                </div>
                <p className="text-white/50 text-center text-lg leading-relaxed mb-10">
                  Nuestra política de precios se basa en el éxito de tu academia. A mayor volumen de alumnos, menor coste por licencia.
                </p>
                <div className="pt-8 border-t border-white/5 text-center">
                  <p className="text-white/30 text-xs font-bold italic">"Tecnología propia a precio de mercado compartido"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AcademyCorporate;
