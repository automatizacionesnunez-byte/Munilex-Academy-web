import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Zap, CheckCircle, ArrowRight, Brain, FileText, Smartphone, X, ChevronRight, Scale, Landmark, FileCheck, Lock, Shield, Dumbbell, Languages, Building2, Clock, Target, TrendingUp, GraduationCap } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Academy = () => {
  const location = useLocation();
  const [selectedRoute, setSelectedRoute] = useState<null | string>(null);
  const [activeFamily, setActiveFamily] = useState<'habilitados' | 'age' | 'fuerzas' | 'penitenciaria'>('habilitados');

  useEffect(() => {
    const path = location.pathname.toLowerCase();
    if (path.includes('/age')) setActiveFamily('age');
    if (path.includes('/policia') || path.includes('/guardiacivil')) setActiveFamily('fuerzas');
    if (path.includes('/iipp')) setActiveFamily('penitenciaria');
    if (path.includes('/habilitados')) setActiveFamily('habilitados');
  }, [location.pathname]);

  const families = {
    habilitados: {
      label: "Habilitados Nacionales",
      icon: <Landmark className="w-5 h-5" />,
      tagline: "Secretaría, Intervención y Tesorería",
      description: "La ruta de máxima exigencia para el liderazgo jurídico en la Administración Local."
    },
    age: {
      label: "Familia AGE",
      icon: <FileText className="w-5 h-5" />,
      tagline: "Cuerpo Administrativo y Auxiliar del Estado",
      description: "Preparación táctica para el soporte operativo y de gestión pública."
    },
    fuerzas: {
      label: "Fuerzas de Seguridad",
      icon: <div className="flex -space-x-1.5"><img src="/policia_nacional.png" className="w-5 h-5 object-contain" alt="" /><img src="/guardia_civil.png" className="w-5 h-5 object-contain" alt="" /></div>,
      tagline: "Policía Nacional y Guardia Civil",
      description: "Oposiciones multifactoriales: teoría, aptitud física y psicotécnicos."
    },
    penitenciaria: {
      label: "Inst. Penitenciarias",
      icon: <div className="relative"><Lock className="w-5 h-5" /><div className="absolute inset-0 flex items-center justify-center opacity-20"><div className="w-full h-[1px] bg-red-500 rotate-45" /></div></div>,
      tagline: "Ayudante de Instituciones Penitenciarias",
      description: "Especialización vertical en normativa penitenciaria y conducta humana."
    }
  };

  const routeDetails: Record<string, any> = {
    habilitados: {
      title: "Habilitados Nacionales",
      subtitle: "Secretaría e Intervención",
      description: "Dominio absoluto del marco legal municipal con asistencia de IA para informes y fiscalización.",
      features: [
        { icon: <Scale />, title: "Informes de Secretaría", desc: "Generación de informes de legalidad basados en jurisprudencia TS y TC." },
        { icon: <Landmark />, title: "Acuerdos y Decretos", desc: "Redacción asistida de borradores para Plenos y Juntas de Gobierno." },
        { icon: <FileCheck />, title: "PCAP y PPT", desc: "Soporte completo en la fiscalización de pliegos de contratación pública." },
        { icon: <Zap />, title: "Urbanismo", desc: "Tramitación de expedientes de licencias y planeamiento urbanístico." }
      ]
    },
    auxiliar_age: {
      title: "Auxiliar Administrativo AGE",
      subtitle: "Cuerpo General Auxiliar (C2)",
      description: "Enfoque operativo: apoyo de oficina, registro y tramitación básica.",
      features: [
        { icon: <Smartphone />, title: "Ofimática Elite", desc: "Preparación intensiva para Windows y Office con simulaciones reales." },
        { icon: <Brain />, title: "Psicotécnicos", desc: "Batería infinita de tests de lógica, cálculo y aptitud verbal." },
        { icon: <Zap />, title: "Admin. Electrónica", desc: "Dominio de herramientas de tramitación digital y atención al ciudadano." },
        { icon: <CheckCircle />, title: "Cuestionarios Rápidos", desc: "Tests de 30 preguntas para repasos dinámicos diarios." }
      ]
    },
    administrativo_age: {
      title: "Administrativo del Estado",
      subtitle: "Cuerpo General Administrativo (C1)",
      description: "Gestión administrativa, personal y presupuestaria avanzada.",
      features: [
        { icon: <FileText />, title: "Casos Prácticos", desc: "Resolución de supuestos ligados al programa con mapas normativos." },
        { icon: <Scale />, title: "Derecho Administrativo", desc: "Esquemas detallados de procedimiento administrativo y financiero." },
        { icon: <Brain />, title: "Gestión de Personal", desc: "Todo sobre el régimen del personal al servicio de las AAPP." },
        { icon: <Landmark />, title: "Organización de Oficinas", desc: "Pautas de gestión táctica en dependencias públicas." }
      ]
    },
    policia: {
      title: "Policía Nacional",
      subtitle: "Escala Básica",
      description: "Preparación multifactorial: jurídica, social, física y psicológica.",
      features: [
        { icon: <Shield />, title: "Ciencias Jurídicas", desc: "Temario legal actualizado con foco en Derecho Penal y Procesal." },
        { icon: <Brain />, title: "Psicotécnicos Avanzados", desc: "Baterías infinitas de inteligencia lógica, espacial, verbal y numérica." },
        { icon: <Dumbbell />, title: "Planificación Física", desc: "Seguimiento de marcas y preparación específica para las pruebas." },
        { icon: <CheckCircle />, title: "Exclusiones Médicas", desc: "Control y asesoramiento preventivo sobre el cuadro de exclusiones." }
      ]
    },
    guardia_civil: {
      title: "Guardia Civil",
      subtitle: "Escala de Cabos y Guardias",
      description: "Mezcla fuerte de teoría jurídica, idiomas y aptitudes físicas.",
      features: [
        { icon: <Languages />, title: "Gramática e Inglés", desc: "Módulos específicos de lengua española, ortografía e idioma extranjero." },
        { icon: <Landmark />, title: "Derechos Humanos", desc: "Estudio profundo de la Constitución y tratados internacionales." },
        { icon: <Zap />, title: "Teórico-Práctico", desc: "Simulacros de 140 minutos integrando todas las subpruebas." },
        { icon: <Dumbbell />, title: "Agilidad y Natación", desc: "Planificación para los 2.000m, agilidad y soltura acuática." }
      ]
    },
    iipp: {
      title: "Instituciones Penitenciarias",
      subtitle: "Cuerpo de Ayudantes",
      description: "Especialización en derecho penitenciario y conducta humana.",
      features: [
        { icon: <Lock />, title: "Derecho Penitenciario", desc: "El núcleo duro: LOGP, Reglamentos y ejecución penal detallada." },
        { icon: <Brain />, title: "Conducta Humana", desc: "Psicología aplicada y dinámica social en el medio penitenciario." },
        { icon: <FileText />, title: "Supuestos Prácticos", desc: "8 supuestos por simulacro para dominar la aplicación normativa." },
        { icon: <CheckCircle />, title: "Mapas de Régimen", desc: "Esquemas de organización y tratamiento penitenciario." }
      ]
    }
  };

  const TrackCard = ({ title, description, icon, to, features }: any) => (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-[#1C1B1B] p-10 rounded-3xl border border-[#353534]/50 relative overflow-hidden group h-full flex flex-col"
    >
      <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity text-primary">
        {icon}
      </div>
      
      <div className={`w-14 h-14 bg-gradient-to-br from-[#f2ca50] to-[#d4af37] rounded-xl flex items-center justify-center text-[#241a00] mb-8 shadow-[0_0_20px_rgba(212,175,55,0.2)] group-hover:scale-105 transition-transform overflow-hidden`}>
        {icon}
      </div>
      
      <h3 className="mb-4 text-white font-black text-2xl tracking-tight leading-tight">{title}</h3>
      <p className="text-[0.875rem] text-[#E5E2E1]/70 mb-8 leading-relaxed font-normal flex-grow">
        {description}
      </p>
      
      <ul className="space-y-4 mb-10">
        {features.map((item: string, i: number) => (
          <li key={i} className="flex items-center gap-3 font-medium text-[#E5E2E1]/90 text-sm">
            <CheckCircle className="w-5 h-5 text-[#d4af37]" />
            {item}
          </li>
        ))}
      </ul>
      
      <Link 
        to={to}
        className="w-full py-4 bg-[#2A2A2A] text-white font-semibold rounded-xl hover:bg-[#353534] border border-[#4D4635]/30 transition-all flex items-center justify-center gap-3"
      >
        Ver Ruta Detallada
        <ArrowRight className="w-4 h-4" />
      </Link>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-[#131313] text-[#E5E2E1] font-inter selection:bg-[#d4af37]/30 selection:text-white">
      <Helmet>
        <title>Academia oposiciones IA | Temarios Actualizados | Munilex Academy</title>
        <meta name="description" content="Munilex Academy: La academia de oposiciones de nueva generación impulsada por Inteligencia Artificial. Temarios siempre actualizados, simulacros infinitos y preparación de élite." />
      </Helmet>

      {/* Sidebar Detail View */}
      <AnimatePresence>
        {selectedRoute && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedRoute(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-[60]"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full max-w-xl bg-[#131313] text-[#E5E2E1] border-l border-[#353534] z-[70] shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-y-auto"
            >
              <div className="sticky top-0 bg-[#131313]/90 backdrop-blur-xl px-8 py-6 border-b border-[#353534] flex justify-between items-center z-10">
                <div>
                  <h4 className="text-white font-bold text-xl tracking-tight">Detalle de Ruta</h4>
                </div>
                <button 
                  onClick={() => setSelectedRoute(null)}
                  className="p-2 hover:bg-[#2A2A2A] rounded-full transition-colors text-[#E5E2E1]/70 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-10">
                <div className="text-xs font-bold uppercase tracking-[0.15em] text-[#d4af37] mb-3">
                  {routeDetails[selectedRoute].subtitle}
                </div>
                <h2 className="text-3xl font-black text-white tracking-tight mb-6 leading-tight">
                  {routeDetails[selectedRoute].title}
                </h2>
                <p className="text-[0.95rem] text-[#E5E2E1]/80 leading-relaxed mb-10">
                  {routeDetails[selectedRoute].description}
                </p>

                <div className="space-y-4">
                  {routeDetails[selectedRoute].features.map((feature: any, idx: number) => (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + idx * 0.05 }}
                      key={idx} 
                      className="flex gap-5 p-5 rounded-2xl bg-[#1C1B1B] border border-[#353534]/50 hover:border-[#d4af37]/30 transition-colors group"
                    >
                      <div className="w-12 h-12 bg-[#2A2A2A] rounded-xl flex items-center justify-center text-[#d4af37]">
                        {feature.icon}
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-white tracking-tight mb-1 text-sm">{feature.title}</div>
                        <p className="text-[0.85rem] text-[#E5E2E1]/70 leading-relaxed">{feature.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-12">
                  <a 
                    href="https://munilex.lovable.app/auth/register"
                    className="w-full py-4 bg-gradient-to-r from-[#f2ca50] to-[#d4af37] text-[#241a00] font-bold rounded-xl text-md hover:opacity-90 transition-opacity flex items-center justify-center gap-3 group"
                  >
                    Empezar Preparación
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <p className="text-center mt-4 text-xs font-medium text-[#E5E2E1]/50">
                    Acceso inmediato al entorno de estudio Munilex
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Hero Section - Simplified 3 Columns */}
      <section className="relative pt-48 pb-32 md:pt-60 md:pb-40 px-6 md:px-8 overflow-hidden bg-[#131313]">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#d4af37 0.5px, transparent 0.5px)', backgroundSize: '30px 30px' }} />
        
        {/* Glows */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-[#d4af37]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 -left-32 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-24">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1] tracking-tighter mb-10 uppercase"
            >
              LA REVOLUCIÓN DEL <br/>
              <span className="italic text-[#d4af37]">APRENDIZAJE</span>
            </motion.h1>
          </div>

      {/* Vertientes Academy - Narrative Approach */}
      <section className="py-40 bg-[#131313]">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-12">
               <div className="text-[#d4af37] font-black uppercase tracking-[0.4em] text-[10px] mb-8 block">Innovación Educativa</div>
               <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-12">
                Nuestras <span className="text-[#d4af37] italic">Líneas de Valor</span>
              </h2>
            </div>
            
            <div className="lg:col-span-7 space-y-12">
              <div className="group cursor-default">
                <div className="flex border-l-4 border-white/5 pl-8 group-hover:border-[#d4af37] transition-all py-2">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-black text-white uppercase tracking-tight">Oposiciones</h3>
                    <p className="text-white/50 font-medium text-lg leading-relaxed max-w-xl">
                      Plataformas verticales enfocadas al opositor independiente. Ecosistemas de alto rendimiento para cuerpos como Habilitados Nacionales, Policía Nacional o IIPP.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group cursor-default">
                <div className="flex border-l-4 border-white/5 pl-8 group-hover:border-[#d4af37] transition-all py-2">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-black text-white uppercase tracking-tight">Corporate (Academias)</h3>
                    <p className="text-white/50 font-medium text-lg leading-relaxed max-w-xl">
                      Soluciones de marca blanca para centros de formación. Integramos nuestro motor algorítmico en su infraestructura para potenciar el éxito de sus alumnos.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group cursor-default">
                <div className="flex border-l-4 border-white/5 pl-8 group-hover:border-[#d4af37] transition-all py-2">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-black text-white uppercase tracking-tight">Centros FP</h3>
                    <p className="text-white/50 font-medium text-lg leading-relaxed max-w-xl">
                      Digitalización avanzada para módulos de diferentes currículums en Institutos de Formación Profesional, optimizando la asimilación de contenidos teóricos.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 h-full min-h-[400px]">
              <div className="bg-[#1C1B1B] border border-white/10 rounded-[3rem] p-12 h-full flex flex-col justify-center relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#d4af37]/5 rounded-full blur-[60px]" />
                <div className="relative z-10 space-y-8">
                  <div className="w-16 h-16 bg-[#d4af37]/10 rounded-2xl flex items-center justify-center text-[#d4af37]">
                    <Zap className="w-8 h-8" />
                  </div>
                  <h4 className="text-3xl font-black text-white tracking-tighter uppercase leading-[1]">Tecnología <br/> de Élite</h4>
                  <p className="text-white/40 font-medium leading-relaxed">
                    Unificamos la IA más avanzada con metodologías docentes probadas para maximizar cada segundo de estudio.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Specialties Sliding Carousel */}
      <section className="py-24 bg-white border-y border-slate-100 overflow-hidden" id="rutas">
        <div className="max-w-7xl mx-auto px-6 md:px-8 mb-16">
          <div className="text-center">
             <h2 className="text-3xl md:text-5xl font-black text-[#131313] uppercase tracking-tighter mb-4">Especialidades Activas</h2>
             <p className="text-slate-500 font-medium max-w-xl mx-auto">Motor algorítmico especializado para cada cuerpo y escala.</p>
          </div>
        </div>

        <div className="relative">
          <div className="flex gap-6 animate-scroll whitespace-nowrap">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-6">
                {[
                  { name: "Habilitados Nacionales", tag: "SECRETARÍA / INTERVENCIÓN", img: "https://images.unsplash.com/photo-1541829070764-84a7d30dee70?auto=format&fit=crop&q=80&w=400", to: "/academy/habilitados" },
                  { name: "Policía Nacional", tag: "ESCALA BÁSICA", img: "https://images.unsplash.com/photo-1517511620798-cec17d428bc0?auto=format&fit=crop&q=80&w=400", to: "/academy/policia" },
                  { name: "Administrativo AGE", tag: "ESTADO (C1/C2)", img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=400", to: "/academy/age" },
                  { name: "Ayudantes IIPP", tag: "PRISIONES / PENITENCIARIA", img: "https://images.unsplash.com/photo-1589216532372-1c2a367900d9?auto=format&fit=crop&q=80&w=400", to: "/academy/iipp" },
                  { name: "Guardia Civil", tag: "CABOS Y GUARDIAS", img: "https://images.unsplash.com/photo-1585822797371-2a62886a86c6?auto=format&fit=crop&q=80&w=400", to: "/academy/guardiacivil" },
                  { name: "Habilitados Nacionales", tag: "TESORERÍA", img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=400", to: "/academy/habilitados" }
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

      {/* Why Choose Us - Results Focused */}
      <section className="py-40 bg-[#0E0E0E] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-32">
            <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-12">
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
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-10 relative z-10">¿Listo para <span className="text-[#d4af37] italic">tu plaza?</span></h2>
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
