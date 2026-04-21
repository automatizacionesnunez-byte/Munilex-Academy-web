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

          <div className="grid md:grid-cols-3 gap-8">
            {/* Oposiciones Column */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-[#1C1B1B] border border-white/5 p-10 rounded-[2.5rem] flex flex-col justify-between hover:border-white/20 transition-all group"
            >
              <div>
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-white mb-8 border border-white/10 group-hover:bg-white/10 transition-all">
                   <Target className="w-6 h-6" />
                </div>
                <h3 className="text-3xl font-black text-white mb-4 uppercase tracking-tighter">Oposiciones</h3>
                <p className="text-white/50 font-bold text-sm leading-relaxed mb-10">
                  La ruta definitiva hacia tu plaza en la administración pública.
                </p>
              </div>
              <button 
                onClick={() => document.getElementById('rutas')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full py-5 bg-white text-black font-black uppercase tracking-widest text-[10px] rounded-xl hover:bg-slate-200 transition-all flex items-center justify-center gap-2"
              >
                Explorar Rutas
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>

            {/* Corporate Column - PREMIUM */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-[#1C1B1B] border-2 border-[#d4af37]/30 p-10 rounded-[2.5rem] flex flex-col justify-between relative overflow-hidden group shadow-[0_0_50px_rgba(212,175,55,0.1)]"
            >
              <div className="absolute top-0 right-0 py-2 px-6 bg-[#d4af37] text-black font-black text-[9px] uppercase tracking-widest rounded-bl-2xl">
                PREMIUM
              </div>
              <div>
                <div className="w-12 h-12 bg-[#d4af37]/10 rounded-2xl flex items-center justify-center text-[#d4af37] mb-8 border border-[#d4af37]/20 group-hover:bg-[#d4af37]/20 transition-all">
                   <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-3xl font-black text-white mb-4 uppercase tracking-tighter">Corporate</h3>
                <p className="text-white/50 font-bold text-sm leading-relaxed mb-10">
                  Adaptación estratégica de centros educativos y academias al ecosistema IA.
                </p>
              </div>
              <Link 
                to="/academy/corporate"
                className="w-full py-5 bg-[#d4af37] text-black font-black uppercase tracking-widest text-[10px] rounded-xl hover:scale-105 transition-all flex items-center justify-center gap-2 shadow-xl shadow-[#d4af37]/10"
              >
                Saber más
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* FP Column */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-[#1C1B1B] border border-white/5 p-10 rounded-[2.5rem] flex flex-col justify-between hover:border-white/20 transition-all group"
            >
              <div>
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-white mb-8 border border-white/10 group-hover:bg-white/10 transition-all">
                   <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="text-3xl font-black text-white mb-4 uppercase tracking-tighter">FP</h3>
                <p className="text-white/50 font-bold text-sm leading-relaxed mb-10">
                  Excelencia técnica y digitalización avanzada para centros de Formación Profesional.
                </p>
              </div>
              <Link 
                to="/academy/fp"
                className="w-full py-5 bg-white text-black font-black uppercase tracking-widest text-[10px] rounded-xl hover:bg-slate-200 transition-all flex items-center justify-center gap-2"
              >
                Saber más
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Routes Map Section */}
      <section className="py-24 relative" id="rutas">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="max-w-3xl mb-16">
            <h2 className="mb-4 text-white font-bold text-3xl md:text-4xl tracking-tight">Especialidades Disponibles</h2>
            <p className="text-[1.05rem] text-[#E5E2E1]/60 font-medium leading-relaxed">Infraestructura tecnológica dedicada para cada cuerpo y escala.</p>
          </div>

          <div className="flex flex-wrap gap-3 mb-12">
            {(Object.keys(families) as Array<keyof typeof families>).map((key) => (
              <button
                key={key}
                onClick={() => setActiveFamily(key)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                  activeFamily === key 
                    ? 'bg-[#E5E2E1] text-[#131313]' 
                    : 'bg-[#1C1B1B] text-[#E5E2E1]/70 hover:bg-[#2A2A2A] hover:text-white border border-[#353534]'
                }`}
              >
                {families[key].icon}
                {families[key].label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeFamily}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {activeFamily === 'habilitados' && (
                <div className="md:col-span-2">
                  <TrackCard 
                    title={routeDetails.habilitados.title}
                    description={families.habilitados.description}
                    icon={<Landmark className="w-7 h-7" />}
                    to="/academy/habilitados"
                    features={['Secretaría e Intervención', 'Tesorería', 'Control Jurídico Local', 'Urbanismo y PCAP']}
                  />
                </div>
              )}

              {activeFamily === 'age' && (
                <>
                  <TrackCard 
                    title="Auxiliar Administrativo AGE"
                    description="Apoyo operativo, registro y tramitación. Incluye simulador de ofimática y tests rápidos."
                    icon={<FileText className="w-7 h-7" />}
                    to="/academy/age"
                    features={['Psicotécnicos Ilimitados', 'Ofimática Office/Windows', 'Registro y Archivo']}
                  />
                  <TrackCard 
                    title="Administrativo del Estado"
                    description="Gestión técnica y financiera. Análisis de supuestos prácticos y esquemas de normativa."
                    icon={<Building2 className="w-7 h-7" />}
                    to="/academy/age"
                    features={['Derecho Administrativo', 'Gestión Financiera', 'Gestión de Personal']}
                  />
                </>
              )}

              {activeFamily === 'fuerzas' && (
                <>
                  <TrackCard 
                    title="Policía Nacional"
                    description="Oposición multifactorial de la Escala Básica. Conocimientos, psicotécnicos y seguimiento físico con métricas de progresión."
                    icon={<img src="/policia_nacional.png" className="w-10 h-10 object-contain" alt="CNP" />}
                    to="/academy/policia"
                    features={['Temario Jurídico Especializado', 'Psicotécnicos Avanzados', 'Control de Exclusiones']}
                  />
                  <TrackCard 
                    title="Guardia Civil"
                    description="Escala de Cabos y Guardias. Fuerte enfoque en lengua, inglés y preparación física integral con plan de entrenamiento específico."
                    icon={<img src="/guardia_civil.png" className="w-10 h-10 object-contain" alt="GC" />}
                    to="/academy/guardiacivil"
                    features={['Ortografía y Gramática', 'Idiomas (Inglés)', 'Plan de Entrenamiento Físico']}
                  />
                </>
              )}

              {activeFamily === 'penitenciaria' && (
                <div className="md:col-span-2">
                   <TrackCard 
                    title="Ayudantes de IIPP"
                    description="Instituciones Penitenciarias: verticalidad jurídica, régimen penitenciario y conducta humana. Análisis de supuestos prácticos reales."
                    icon={<div className="relative"><Lock className="w-10 h-10" /><div className="absolute inset-0 flex items-center justify-center opacity-30"><div className="w-full h-[2px] bg-red-500 rotate-45" /></div></div>}
                    to="/academy/iipp"
                    features={['Derecho Penitenciario', 'Casos Prácticos Reales', 'Mapas Conceptuales']}
                  />
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* AI Bento Features */}
      <section className="py-24 bg-[#0E0E0E] relative border-t border-[#353534]/50">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="mb-16">
             <h2 className="text-white font-bold text-3xl md:text-4xl tracking-tight mb-4">El motor detrás del éxito</h2>
             <p className="text-[1.05rem] text-[#E5E2E1]/60 font-medium">Herramientas diseñadas para exprimir cada minuto de tu tiempo de estudio.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                title: "Simulacros Infinitos", 
                desc: "100% adaptados a tu convocatoria. Generación infinita de tests y casos prácticos.", 
                icon: <FileText className="w-6 h-6" />,
                span: "md:col-span-1"
              },
              { 
                title: "Asistente IA 24/7", 
                desc: "Resuelve dudas legales complejas cruzando datos con jurisprudencia del TS.", 
                icon: <Brain className="w-6 h-6" />,
                span: "md:col-span-2 lg:col-span-2"
              },
              { 
                title: "Temarios Vivos", 
                desc: "Si el BOE se actualiza, tu contenido de estudio cambia automáticamente sin que tengas que imprimir resúmenes de nuevo.", 
                icon: <Zap className="w-6 h-6" />,
                span: "md:col-span-2 lg:col-span-2"
              },
              { 
                title: "Retención Activa", 
                desc: "Sistema de flashcards espaciado para consolidar datos puros como plazos y sanciones.", 
                icon: <Target className="w-6 h-6" />,
                span: "md:col-span-1"
              }
            ].map((tool, i) => (
              <div key={i} className={`p-8 rounded-3xl bg-[#1C1B1B] border border-[#353534]/50 hover:bg-[#201F1F] hover:border-[#4D4635] transition-all group ${tool.span}`}>
                <div className="w-12 h-12 rounded-xl bg-[#2A2A2A] text-[#d4af37] flex items-center justify-center mb-6 border border-[#353534]">
                  {tool.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white tracking-tight">{tool.title}</h3>
                <p className="text-[#E5E2E1]/70 leading-relaxed font-normal text-[0.95rem]">{tool.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate & FP Dedicated Section */}
      <section className="py-32 bg-[#131313] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#d4af37]/5 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter uppercase mb-6">
              SOLUCIONES PARA <br/>
              <span className="italic text-[#d4af37]">ORGANIZACIONES</span>
            </h2>
            <p className="text-white/40 font-bold text-sm uppercase tracking-widest">Tecnología de vanguardia para centros de formación y empresas</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Corporate Card */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-[#1C1B1B] border border-[#d4af37]/30 p-12 rounded-[3.5rem] relative overflow-hidden group shadow-2xl shadow-[#d4af37]/5"
            >
              <div className="absolute top-0 right-0 p-12 opacity-5 text-[#d4af37]">
                <Building2 className="w-32 h-32" />
              </div>
              
              <div className="w-20 h-20 bg-[#d4af37]/10 rounded-[1.5rem] flex items-center justify-center text-[#d4af37] mb-10 border border-[#d4af37]/20 group-hover:scale-110 transition-transform">
                <Building2 className="w-10 h-10" />
              </div>
              
              <h3 className="text-3xl font-black text-white mb-6 uppercase tracking-tighter">Corporate</h3>
              <p className="text-[#E5E2E1]/60 text-lg leading-relaxed mb-10 font-medium">
                Transformamos tu academia tradicional en un centro de alto rendimiento tecnológico con marca propia e IA integrada.
              </p>
              
              <ul className="space-y-4 mb-12">
                {['Personalización Marca Blanca', 'API de Integración Total', 'Análisis de Datos Masivo'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/80 font-bold text-sm uppercase tracking-tight">
                    <CheckCircle className="w-5 h-5 text-[#d4af37]" />
                    {item}
                  </li>
                ))}
              </ul>
              
              <Link 
                to="/academy/corporate"
                className="inline-flex items-center gap-3 px-10 py-5 bg-[#d4af37] text-black font-black uppercase tracking-widest text-[11px] rounded-xl hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all"
              >
                Explorar Corporate <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* FP Card */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-[#1C1B1B] border border-white/5 p-12 rounded-[3.5rem] relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-12 opacity-5 text-white">
                <GraduationCap className="w-32 h-32" />
              </div>
              
              <div className="w-20 h-20 bg-white/5 rounded-[1.5rem] flex items-center justify-center text-white mb-10 border border-white/10 group-hover:scale-110 transition-transform">
                <GraduationCap className="w-10 h-10" />
              </div>
              
              <h3 className="text-3xl font-black text-white mb-6 uppercase tracking-tighter">Formación Prof.</h3>
              <p className="text-[#E5E2E1]/60 text-lg leading-relaxed mb-10 font-medium">
                Digitalización avanzada para ciclos formativos. IA entrenada en currículos oficiales y casos prácticos técnicos.
              </p>
              
              <ul className="space-y-4 mb-12">
                {['Rigor Técnico IA', 'Generación de Casos Prácticos', 'Seguimiento de Competencias'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/80 font-bold text-sm uppercase tracking-tight">
                    <CheckCircle className="w-5 h-5 text-[#d4af37]" />
                    {item}
                  </li>
                ))}
              </ul>
              
              <Link 
                to="/academy/fp"
                className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-black uppercase tracking-widest text-[11px] rounded-xl hover:bg-slate-200 transition-all"
              >
                Explorar FP <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits instead of Testimonials */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: "3x", label: "Velocidad de Asimilación", desc: "Acelera la curva de aprendizaje mediante tests adaptativos.", icon: <TrendingUp className="w-5 h-5"/> },
              { num: "40%", label: "Ahorro de Tiempo", desc: "Se acabó crear esquemas manualmente. Nosotros los generamos.", icon: <Clock className="w-5 h-5"/> },
              { num: "0", label: "Obsolescencia", desc: "Alertas automáticas sobre normativa derogada en tu syllabus.", icon: <Shield className="w-5 h-5"/> },
              { num: "100%", label: "Trazabilidad Analítica", desc: "Métricas de tu desempeño por bloques temáticos.", icon: <Target className="w-5 h-5"/> }
            ].map((stat, i) => (
              <div key={i} className="p-8 bg-[#1C1B1B]/40 backdrop-blur-md rounded-3xl border border-[#353534]/30 hover:border-[#d4af37]/20 transition-colors">
                <div className="text-[#d4af37] mb-6 opacity-80">{stat.icon}</div>
                <div className="text-4xl font-black mb-2 text-white">{stat.num}</div>
                <div className="text-[#E5E2E1] font-bold tracking-tight text-lg mb-3">{stat.label}</div>
                <div className="text-[0.85rem] text-[#E5E2E1]/60 leading-relaxed">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academy;
