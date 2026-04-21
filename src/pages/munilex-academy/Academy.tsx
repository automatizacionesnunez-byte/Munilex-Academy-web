import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Zap, 
  ArrowRight, 
  Brain, 
  Clock, 
  Target, 
  Scale, 
  Building2, 
  TrendingUp,
} from 'lucide-react';
import { Link } from 'react-router-dom';

import policiaImg from '../../assets/spec/policia.png';
import secretarioImg from '../../assets/spec/secretario_new.png';
import iippImg from '../../assets/spec/iipp_new.png';
import guardiaImg from '../../assets/spec/guardia.png';

const Academy = () => {
  return (
    <div className="min-h-screen bg-[#131313] text-[#E5E2E1] font-inter selection:bg-[#d4af37]/30 selection:text-white">
      <Helmet>
        <title>Academia oposiciones IA | Temarios Actualizados | Munilex Academy</title>
        <meta name="description" content="Munilex Academy: La academia de oposiciones de nueva generación impulsada por Inteligencia Artificial. Temarios siempre actualizados, simulacros infinitos y preparación de élite." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 md:pt-60 md:pb-40 px-6 md:px-8 overflow-hidden bg-[#131313]">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#d4af37 0.5px, transparent 0.5px)', backgroundSize: '30px 30px' }} />
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-[#d4af37]/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-black text-white leading-[0.85] tracking-tighter mb-20 uppercase"
          >
            LA REVOLUCIÓN DEL <br/>
            <span className="italic text-[#d4af37]">APRENDIZAJE</span>
          </motion.h1>

          {/* 3 Cards in Hero */}
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto text-left">
            {[
              { 
                title: "Oposiciones", 
                subtitle: "Preparación de Élite", 
                to: "/academy/oposiciones",
                desc: "Tests adaptativos, analítica avanzada y tutoría 24/7 para tu plaza.",
                icon: <Zap className="w-5 h-5" />
              },
              { 
                title: "Corporate", 
                subtitle: "Planes Escalables", 
                to: "/academy/corporate",
                desc: "Planes Iniciación, Marca o Ecosistema a medida para academias.",
                icon: <Building2 className="w-5 h-5" />
              },
              { 
                title: "Centros FP", 
                subtitle: "Educación Dual", 
                to: "/academy/fp",
                desc: "Soporte en creación de textos, roleplay IA y tutorización de módulos oficiales.",
                icon: <Brain className="w-5 h-5" />
              }
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="group"
              >
                <Link to={card.to} className="block p-8 bg-[#1C1B1B] border border-white/5 rounded-[2.5rem] hover:border-[#d4af37]/30 transition-all h-full relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#d4af37]/5 blur-3xl rounded-full" />
                  <div className="w-12 h-12 bg-[#2A2A2A] rounded-2xl flex items-center justify-center text-[#d4af37] mb-6 group-hover:bg-[#d4af37] group-hover:text-black transition-all">
                    {card.icon}
                  </div>
                  <div className="text-[10px] font-black text-[#d4af37] uppercase tracking-[0.2em] mb-2">{card.subtitle}</div>
                  <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-4 group-hover:text-[#d4af37] transition-colors">{card.title}</h3>
                  <p className="text-white/40 text-sm font-medium leading-relaxed">{card.desc}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vertientes Section */}
      <section className="py-40 bg-[#0E0E0E]">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex flex-col gap-32">
            
            {/* Oposiciones Vertical */}
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <motion.div 
                   initial={{ opacity: 0, x: -20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   className="inline-block px-4 py-2 bg-[#d4af37]/10 border border-[#d4af37]/20 rounded-full text-[#d4af37] text-[10px] font-black uppercase tracking-widest mb-8"
                >
                  PREPARACIÓN DIRECTA
                </motion.div>
                <h2 className="text-4xl md:text-6xl font-black text-white leading-[0.9] tracking-tighter uppercase mb-8">
                   MUNILEx <br/>
                   <span className="italic text-[#d4af37]">OPOSICIONES</span>
                </h2>
                <p className="text-white/50 text-xl font-medium leading-relaxed mb-10 max-w-xl">
                  Nuestra plataforma para opositores independientes. Tecnología de precisión diseñada para maximizar el rendimiento académico mediante el análisis de progreso y un motor inagotable de pruebas, simulacros y material didáctico avanzado.
                </p>
                <ul className="space-y-4 mb-12 text-sm font-bold uppercase tracking-tight text-white/70">
                   <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-[#d4af37] rounded-full" />
                      Entrenamiento basado en estricta jurisprudencia.
                   </li>
                   <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-[#d4af37] rounded-full" />
                      Tests adaptativos con IA en tiempo real.
                   </li>
                   <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-[#d4af37] rounded-full" />
                      Seguimiento de racha y gamificación de élite.
                   </li>
                </ul>
                <Link to="/academy/oposiciones" className="inline-flex items-center gap-4 text-[#d4af37] font-black uppercase tracking-widest text-[11px] group">
                   Explorar Oposiciones <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
              <div className="relative group">
                 <div className="absolute -inset-4 bg-[#d4af37]/10 blur-3xl rounded-[4rem] group-hover:bg-[#d4af37]/20 transition-colors" />
                 <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800" alt="Oposiciones" className="relative rounded-[3.5rem] border border-white/10 shadow-2xl md:grayscale group-hover:grayscale-0 transition-all duration-700 h-[500px] w-full object-cover" />
              </div>
            </div>

            {/* Corporate Vertical */}
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="order-2 lg:order-1 relative group text-right">
                 <div className="absolute -inset-4 bg-white/5 blur-3xl rounded-[4rem] group-hover:bg-[#d4af37]/10 transition-colors" />
                 <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" alt="Corporate" className="relative rounded-[3.5rem] border border-white/10 shadow-2xl md:grayscale group-hover:grayscale-0 transition-all duration-700 h-[500px] w-full object-cover" />
              </div>
              <div className="order-1 lg:order-2">
                 <motion.div 
                   initial={{ opacity: 0, x: 20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   className="inline-block px-4 py-2 bg-white/5 border border-white/10 rounded-full text-white text-[10px] font-black uppercase tracking-widest mb-8"
                >
                  SOLUCIONES B2B
                </motion.div>
                <h2 className="text-4xl md:text-6xl font-black text-white leading-[0.9] tracking-tighter uppercase mb-8">
                   MUNILEx <br/>
                   <span className="italic text-[#d4af37]">CORPORATE</span>
                </h2>
                <p className="text-white/50 text-xl font-medium leading-relaxed mb-10 max-w-xl">
                  Soluciones de marca blanca escalables en tres niveles: Iniciación, Marca propia o Ecosistema educativo a medida. Integramos nuestro motor de IA como herramienta pedagógica de alto prestigio en academias privadas.
                </p>
                <ul className="space-y-4 mb-12 text-sm font-bold uppercase tracking-tight text-white/70">
                   <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-[#d4af37] rounded-full" />
                      Acuerdos B2B de licenciamiento personalizado.
                   </li>
                   <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-[#d4af37] rounded-full" />
                      Implementación en tiempo récord (desde 1 semana).
                   </li>
                   <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-[#d4af37] rounded-full" />
                      Soporte técnico especializado 1:1.
                   </li>
                </ul>
                <Link to="/academy/corporate" className="inline-flex items-center gap-4 text-[#d4af37] font-black uppercase tracking-widest text-[11px] group">
                   Ver Planes Corporate <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>

            {/* FP Vertical */}
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <motion.div 
                   initial={{ opacity: 0, x: -20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   className="inline-block px-4 py-2 bg-[#d4af37]/10 border border-[#d4af37]/20 rounded-full text-[#d4af37] text-[10px] font-black uppercase tracking-widest mb-8"
                >
                  INSTITUTOS Y CENTROS
                </motion.div>
                <h2 className="text-4xl md:text-6xl font-black text-white leading-[0.9] tracking-tighter uppercase mb-8">
                   MUNILEx <br/>
                   <span className="italic text-[#d4af37]">FORMACIÓN PROF.</span>
                </h2>
                <p className="text-white/50 text-xl font-medium leading-relaxed mb-10 max-w-xl">
                  Digitalización avanzada para módulos de FP Básica, Grado Medio y Superior. Provisión de plataforma centralizada para dar soporte a los diferentes currículos de Formación Profesional.
                </p>
                <ul className="space-y-4 mb-12 text-sm font-bold uppercase tracking-tight text-white/70">
                   <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-[#d4af37] rounded-full" />
                      Soporte en la creación dinámica de textos didácticos.
                   </li>
                   <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-[#d4af37] rounded-full" />
                      Tutorización activa mediante IA experta.
                   </li>
                   <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-[#d4af37] rounded-full" />
                      Roleplay profesional interactivo con escenarios reales.
                   </li>
                </ul>
                <Link to="/academy/fp" className="inline-flex items-center gap-4 text-[#d4af37] font-black uppercase tracking-widest text-[11px] group">
                   Explorar Proyectos FP <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
              <div className="relative group">
                 <div className="absolute -inset-4 bg-white/5 blur-3xl rounded-[4rem] group-hover:bg-[#d4af37]/10 transition-colors" />
                 <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800" alt="Centros FP" className="relative rounded-[3.5rem] border border-white/10 shadow-2xl md:grayscale group-hover:grayscale-0 transition-all duration-700 h-[500px] w-full object-cover" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Carousel Specialties */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8 mb-16">
          <div className="text-center">
             <h2 className="text-2xl md:text-4xl font-black text-[#131313] uppercase tracking-tighter mb-4">LAS OPOSICIONES QUE OFRECEMOS</h2>
             <p className="text-slate-500 font-medium max-w-xl mx-auto">Motor algorítmico especializado para cada cuerpo y escala.</p>
          </div>
        </div>

        <div className="relative">
          <div className="flex gap-6 animate-scroll whitespace-nowrap">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-6">
                {[
                  { name: "Habilitados Nacionales", tag: "SECRETARÍA / INTERVENCIÓN", img: secretarioImg, to: "/academy/habilitados" },
                  { name: "Policía Nacional", tag: "ESCALA BÁSICA", img: policiaImg, to: "/academy/policia" },
                  { name: "Administrativo AGE", tag: "ESTADO (C1/C2)", img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=400", to: "/academy/age" },
                  { name: "Ayudantes IIPP", tag: "PRISIONES / PENITENCIARIA", img: iippImg, to: "/academy/iipp" },
                  { name: "Guardia Civil", tag: "CABOS Y GUARDIAS", img: guardiaImg, to: "/academy/guardiacivil" },
                  { name: "Habilitados Nacionales", tag: "TESORERÍA", img: secretarioImg, to: "/academy/habilitados" }
                ].map((item, idx) => (
                  <Link key={`${i}-${idx}`} to={item.to} className="inline-block w-[300px] bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow p-6 group">
                    <div className="aspect-video bg-slate-100 rounded-xl mb-4 overflow-hidden">
                       <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="text-[9px] font-black text-[#d4af37] uppercase tracking-widest mb-1">{item.tag}</div>
                    <div className="text-sm font-black text-[#131313] uppercase tracking-tight truncate">{item.name}</div>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-40 bg-[#0E0E0E] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-32">
            <h2 className="text-3xl md:text-6xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-12">
              ¿Por qué <span className="text-[#d4af37] italic">Munilex Academy?</span>
            </h2>
            <div className="w-24 h-2 bg-[#d4af37] rounded-full mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { t: "Velocidad de Asimilación", d: "Optimizamos la curva de aprendizaje mediante algoritmos que priorizan lo que más olvidas.", icon: <Brain /> },
              { t: "Ahorro de Tiempo", d: "Filtramos la información irrelevante para que te enfoques solo en lo que cae en el examen.", icon: <Clock /> },
              { t: "Solvencia Técnica", d: "Trazabilidad completa de cada respuesta con cita directa a la normativa legal vigente.", icon: <Scale /> },
              { t: "Trazabilidad Total", d: "Historial detallado de cada sesión para que veas tu progreso real día a día.", icon: <Target /> },
              { t: "Analítica Predictiva", d: "Nuestro sistema predice tu nota basada en miles de datos de otros opositores y exámenes pasados.", icon: <TrendingUp /> },
              { t: "Org. Estratégica", d: "Soluciones a medida para organizaciones que buscan optimizar sus procesos formativos.", icon: <Building2 /> }
            ].map((feature, i) => (
              <div key={i} className="bg-[#1C1B1B] border border-white/5 p-12 rounded-[3.5rem] hover:border-[#d4af37]/30 transition-all group">
                <div className="w-16 h-16 bg-[#2A2A2A] rounded-2xl flex items-center justify-center text-[#d4af37] mb-10 group-hover:scale-110 transition-transform">
                   {feature.icon}
                </div>
                <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-tight">{feature.t}</h3>
                <p className="text-white/40 font-medium leading-relaxed">
                  {feature.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-[#131313]">
        <div className="max-w-5xl mx-auto px-6 md:px-8 text-center">
          <div className="bg-[#1C1B1B] border border-white/5 p-20 rounded-[4rem] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#d4af37]/5 rounded-full blur-[100px]" />
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-10 relative z-10">¿Listo para <span className="text-[#d4af37] italic">tu plaza?</span></h2>
            <Link to="/academy/contacto" className="inline-flex items-center gap-4 px-12 py-6 bg-[#d4af37] text-black font-black rounded-2xl text-xl hover:scale-105 transition-transform relative z-10 shadow-2xl shadow-[#d4af37]/20 uppercase tracking-widest">
              Empezar ahora
              <ArrowRight className="w-7 h-7" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academy;
