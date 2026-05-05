import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { BookOpen, Zap, CheckCircle, ArrowRight, Brain, FileText, Smartphone, X, ChevronRight, Scale, Landmark, FileCheck, Lock, Shield, Dumbbell, Languages, Building2, Clock, Target, TrendingUp, Sparkles, Star, Award, Search, GraduationCap } from 'lucide-react';
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
      label: "Administración Estado",
      icon: <FileText className="w-5 h-5" />,
      tagline: "Cuerpo Administrativo y Auxiliar",
      description: "Preparación táctica para el soporte operativo y de gestión pública nacional."
    },
    fuerzas: {
      label: "Fuerzas de Seguridad",
      icon: <div className="flex -space-x-1.5"><img src="/policia_nacional.png" className="w-5 h-5 object-contain" alt="" /><img src="/guardia_civil.png" className="w-5 h-5 object-contain" alt="" /></div>,
      tagline: "Policía Nacional y Guardia Civil",
      description: "Oposiciones multifactoriales: teoría, aptitud física y psicotécnicos."
    },
    penitenciaria: {
      label: "Prisiones",
      icon: <Lock className="w-5 h-5" />,
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
      title: "Auxiliar Administrativo",
      subtitle: "Estado (C2)",
      description: "Enfoque operativo: apoyo de oficina, registro y tramitación básica.",
      features: [
        { icon: <Smartphone />, title: "Ofimática Elite", desc: "Preparación intensiva para Windows y Office con simulaciones reales." },
        { icon: <Brain />, title: "Psicotécnicos", desc: "Batería infinita de tests de lógica, cálculo y aptitud verbal." },
        { icon: <Zap />, title: "Admin. Electrónica", desc: "Dominio de herramientas de tramitación digital y atención al ciudadano." },
        { icon: <CheckCircle />, title: "Cuestionarios Rápidos", desc: "Tests de 30 preguntas para repasos dinámicos diarios." }
      ]
    },
    administrativo_age: {
      title: "Administrativo Estado",
      subtitle: "Estado (C1)",
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
        { icon: <Shield />, title: "Ciencias Jurídicas", desc: "Temario legal actualizado con foco en Derecho Penal and Procesal." },
        { icon: <Brain />, title: "Psicotécnicos Avanzados", desc: "Baterías infinitas de inteligencia lógica, espacial, verbal y numérica." },
        { icon: <Dumbbell />, title: "Planificación Física", desc: "Seguimiento de marcas y preparación específica para las pruebas." },
        { icon: <CheckCircle />, title: "Exclusiones Médicas", desc: "Control y asesoramiento preventivo sobre el cuadro de exclusiones." }
      ]
    },
    guardia_civil: {
      title: "Guardia Civil",
      subtitle: "Cuerpo de Guardias",
      description: "Mezcla fuerte de teoría jurídica, idiomas y aptitudes físicas.",
      features: [
        { icon: <Languages />, title: "Gramática e Inglés", desc: "Módulos específicos de lengua española, ortografía e idioma extranjero." },
        { icon: <Landmark />, title: "Derechos Humanos", desc: "Estudio profundo de la Constitución y tratados internacionales." },
        { icon: <Zap />, title: "Teórico-Práctico", desc: "Simulacros de 140 minutos integrando todas las subpruebas." },
        { icon: <Dumbbell />, title: "Agilidad y Natación", desc: "Planificación para los 2.000m, agilidad y soltura acuática." }
      ]
    },
    iipp: {
      title: "Prisiones (IIPP)",
      subtitle: "Ayudantes",
      description: "Especialización en derecho penitenciario y conducta humana.",
      features: [
        { icon: <Lock />, title: "Derecho Penitenciario", desc: "El núcleo duro: LOGP, Reglamentos y ejecución penal detallada." },
        { icon: <Brain />, title: "Conducta Humana", desc: "Psicología aplicada y dinámica social en el medio penitenciario." },
        { icon: <FileText />, title: "Supuestos Prácticos", desc: "8 supuestos por simulacro para dominar la aplicación normativa." },
        { icon: <CheckCircle />, title: "Mapas de Régimen", desc: "Esquemas de organización y tratamiento penitenciario." }
      ]
    }
  };

  const TrackCard = ({ title, description, icon, to, features, accentColor = "[#d4af37]" }: any) => (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-[#1C1B1B] p-10 rounded-[2rem] border border-white/5 shadow-2xl relative overflow-hidden group h-full flex flex-col"
    >
      <div className={`absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity text-${accentColor}`}>
        {icon}
      </div>
      
      <div className={`w-14 h-14 bg-${accentColor}/10 rounded-2xl flex items-center justify-center text-${accentColor} mb-8 group-hover:scale-110 transition-transform overflow-hidden border border-${accentColor}/20 shadow-xl`}>
        {icon}
      </div>
      
      <h3 className="mb-4 text-white font-black text-2xl tracking-tighter leading-tight uppercase font-manrope">{title}</h3>
      <p className="text-[0.875rem] text-white/40 mb-8 leading-relaxed font-bold flex-grow font-inter">
        {description}
      </p>
      
      <ul className="space-y-4 mb-10">
        {features.map((item: string, i: number) => (
          <li key={i} className="flex items-center gap-3 font-black text-white/60 text-[10px] uppercase tracking-widest font-manrope">
            <CheckCircle className={`w-4 h-4 text-${accentColor}/70`} />
            {item}
          </li>
        ))}
      </ul>
      
      <Link 
        to={to}
        className={`w-full py-4 bg-white text-black font-black text-[10px] uppercase tracking-[0.2em] rounded-xl hover:bg-${accentColor} transition-all flex items-center justify-center gap-3 shadow-xl font-manrope`}
      >
        Acceder a la Ruta
        <ArrowRight className="w-4 h-4" />
      </Link>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-[#131313] text-[#E5E2E1] font-inter selection:bg-[#d4af37]/20 selection:text-[#d4af37]">
      <Helmet>
        <title>Munilex Academy | Preparación de Élite con IA</title>
        <meta name="description" content="La academia de oposiciones de nueva generación. Temarios siempre actualizados y simulacros infinitos potenciados por Inteligencia Artificial." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-40 px-6 md:px-8 border-b border-white/5 overflow-hidden">
        {/* Visual Assets Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero_secretary.png" 
            className="w-full h-full object-cover object-center opacity-40 mix-blend-luminosity grayscale" 
            alt="" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#131313]/20 via-[#131313]/80 to-[#131313]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#131313] via-[#131313]/40 to-transparent" />
        </div>

        {/* Abstract Glows */}
        <div className="absolute -top-40 -right-40 w-[800px] h-[800px] bg-[#d4af37]/10 rounded-full blur-[150px] pointer-events-none z-0" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-[#d4af37] text-[10px] font-black tracking-[0.3em] uppercase mb-10 backdrop-blur-xl font-manrope"
          >
            <div className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse" />
            Siguiente Generación IA
          </motion.div>
          
          <h1 className="text-5xl md:text-8xl lg:text-[7.5rem] font-black text-white leading-[0.85] tracking-tighter mb-10 max-w-5xl uppercase font-manrope">
            Oposita con el<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] via-white to-white/20 italic">
              Poder de la IA.
            </span>
          </h1>
          
          <p className="text-lg md:text-2xl text-white/50 max-w-2xl leading-relaxed mb-16 font-semibold font-inter">
            Transformamos el estudio en una experiencia de alto rendimiento. Temarios que se actualizan solos, simulacros infinitos y el asistente jurídico más avanzado de España.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <Link 
              to="/academy/precios"
              className="px-12 py-6 bg-[#d4af37] text-black font-black rounded-2xl text-[11px] uppercase tracking-[0.3em] shadow-xl shadow-[#d4af37]/20 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 font-manrope"
            >
              Probar Gratis Ahora
              <ArrowRight className="w-5 h-5" />
            </Link>
            <button 
              onClick={() => {
                document.getElementById('rutas')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-12 py-6 bg-white/5 border border-white/10 text-white font-black rounded-2xl text-[11px] uppercase tracking-[0.3em] transition-all flex items-center justify-center backdrop-blur-xl hover:bg-white/10 font-manrope"
            >
              Ver Especialidades
            </button>
          </div>
        </div>
      </section>

      {/* Routes Map Section */}
      <section className="py-32 relative bg-[#131313]" id="rutas">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-20">
            <div className="max-w-2xl">
              <h2 className="mb-4 text-white font-black text-4xl md:text-6xl tracking-tighter uppercase font-manrope">Élite <span className="text-[#d4af37] italic">Formativa</span></h2>
              <p className="text-xl text-white/40 font-bold leading-relaxed font-manrope uppercase tracking-widest text-xs">Tecnología de vanguardia aplicada a los temarios más exigentes del Estado.</p>
            </div>

            <div className="flex flex-wrap gap-2 p-1.5 bg-white/5 rounded-2xl border border-white/5 backdrop-blur-xl shrink-0">
              {(families && Object.keys(families) as Array<keyof typeof families>).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveFamily(key)}
                  className={`flex items-center gap-2 px-6 py-4 rounded-xl font-black text-[9px] uppercase tracking-[0.25em] transition-all duration-300 font-manrope ${
                    activeFamily === key 
                      ? 'bg-[#d4af37] text-black shadow-lg scale-105' 
                      : 'text-white/40 hover:text-white'
                  }`}
                >
                  {families[key].icon}
                  {families[key].label}
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeFamily}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {activeFamily === 'habilitados' && (
                <div className="md:col-span-2">
                  <TrackCard 
                    title={routeDetails.habilitados.title}
                    description={families.habilitados.description}
                    icon={<Landmark className="w-7 h-7" />}
                    to="/academy/habilitados"
                    accentColor="[#d4af37]"
                    features={['Secretaría e Intervención', 'Tesorería', 'Control Jurídico Local', 'Urbanismo Avanzado']}
                  />
                </div>
              )}

              {activeFamily === 'age' && (
                <>
                  <TrackCard 
                    title="Auxiliar Administrativo"
                    description="Cuerpo General Auxiliar del Estado (C2). Dominio de ofimática, psicotécnicos y administración electrónica."
                    icon={<FileText className="w-7 h-7" />}
                    to="/academy/age"
                    accentColor="[#d4af37]"
                    features={['Psicotécnicos Ilimitados', 'Simulador de Ofimática', 'Tramitación Digital']}
                  />
                  <TrackCard 
                    title="Administrativo del Estado"
                    description="Cuerpo General Administrativo (C1). Gestión avanzada de personal y presupuestos públicos."
                    icon={<Building2 className="w-7 h-7" />}
                    to="/academy/age"
                    accentColor="[#d4af37]"
                    features={['Derecho Financiero', 'Gestión de RRHH', 'Análisis de Casos']}
                  />
                </>
              )}

              {activeFamily === 'fuerzas' && (
                <>
                  <TrackCard 
                    title="Policía Nacional"
                    description="Escala Básica CNP. Preparación 360º: Jurídica, Sociología, Psicotécnicos y seguimiento físico."
                    icon={<img src="/policia_nacional.png" className="w-10 h-10 object-contain" alt="CNP" />}
                    to="/academy/policia"
                    accentColor="[#d4af37]"
                    features={['Código Penal 2024', 'Psicotécnicos Tácticos', 'Preparación de Entrevista']}
                  />
                  <TrackCard 
                    title="Guardia Civil"
                    description="Escala de Cabos y Guardias. Especialización en ortografía, gramática e inglés jurídico."
                    icon={<img src="/guardia_civil.png" className="w-10 h-10 object-contain" alt="GC" />}
                    to="/academy/guardiacivil"
                    accentColor="[#d4af37]"
                    features={['Inglés Técnico GC', 'Pruebas de Ortografía', 'Plan de Fitness']}
                  />
                </>
              )}

              {activeFamily === 'penitenciaria' && (
                <div className="md:col-span-2">
                   <TrackCard 
                    title="Prisiones (IIPP)"
                    description="Ayudantes de Instituciones Penitenciarias. Foco absoluto en Derecho Penitenciario y resolución de supuestos de régimen."
                    icon={<Lock className="w-10 h-10" />}
                    to="/academy/iipp"
                    accentColor="[#d4af37]"
                    features={['Derecho Penitenciario', 'Supuestos de Examen', 'Régimen de Personal']}
                  />
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* AI Bento Features */}
      <section className="py-32 bg-[#131313] relative border-y border-white/5 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <img src="/ayuntamiento_premium.png" className="w-full h-full object-cover" alt="" />
          <div className="absolute inset-0 bg-[#131313]/80" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <div className="text-center mb-24">
             <h2 className="text-white font-black text-4xl md:text-7xl tracking-tighter mb-6 uppercase font-manrope">Arsenal <span className="text-[#d4af37] italic">Tecnológico</span></h2>
             <p className="text-xl text-white/40 font-bold max-w-2xl mx-auto font-manrope uppercase tracking-widest text-xs">Herramientas diseñadas para maximizar tu capacidad de retención y análisis.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-2 p-12 rounded-[3rem] bg-[#1C1B1B] border border-white/5 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#d4af37]/10 blur-[80px] pointer-events-none" />
              <div className="w-16 h-16 rounded-2xl bg-black/50 text-[#d4af37] flex items-center justify-center mb-10 border border-[#d4af37]/10 group-hover:bg-[#d4af37] group-hover:text-black transition-all">
                <Brain className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-black mb-4 text-white tracking-tighter uppercase font-manrope">Asistente Legal 24/7</h3>
              <p className="text-white/40 leading-relaxed font-bold text-lg font-inter">Resuelve dudas sobre leyes complejas al instante. Nuestra IA cruza jurisprudencia y normativa actualizada en segundos.</p>
            </div>

            <div className="md:col-span-2 p-12 rounded-[3rem] bg-[#1C1B1B] border border-white/5 shadow-2xl relative overflow-hidden group">
              <div className="w-16 h-16 rounded-2xl bg-black/50 text-[#d4af37] flex items-center justify-center mb-10 border border-[#d4af37]/10 group-hover:bg-[#d4af37] group-hover:text-black transition-all">
                <FileText className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-black mb-4 text-white tracking-tighter uppercase font-manrope">Simulacros Infinitos</h3>
              <p className="text-white/40 leading-relaxed font-bold text-lg font-inter">Genera exámenes clónicos a los reales. Adapta la dificultad a tus puntos débiles automáticamente.</p>
            </div>

            <div className="md:col-span-4 lg:col-span-3 p-12 rounded-[3rem] bg-[#1C1B1B] border border-white/5 shadow-2xl relative overflow-hidden group flex flex-col md:flex-row gap-10 items-center">
               <div className="flex-1">
                 <div className="w-16 h-16 rounded-2xl bg-black/50 text-[#d4af37] flex items-center justify-center mb-10 border border-[#d4af37]/10 group-hover:bg-[#d4af37] group-hover:text-black transition-all">
                  <Zap className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-black mb-4 text-white tracking-tighter uppercase font-manrope">Actualización en Vivo</h3>
                <p className="text-white/40 leading-relaxed font-bold text-lg font-inter">Si se publica un cambio en el BOE por la mañana, tu temario está actualizado por la tarde. Sin esperas, sin fe de erratas.</p>
               </div>
               <div className="w-full md:w-64 h-64 bg-black/40 rounded-3xl border border-white/5 p-6 flex flex-col justify-center gap-4">
                  <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden"><div className="h-full w-[90%] bg-[#d4af37] shadow-[0_0_10px_rgba(212,175,55,0.5)]" /></div>
                  <div className="h-2 w-[70%] bg-white/5 rounded-full overflow-hidden"><div className="h-full w-[60%] bg-[#d4af37]/50" /></div>
                  <div className="h-2 w-[85%] bg-white/5 rounded-full overflow-hidden"><div className="h-full w-[40%] bg-[#d4af37]/30" /></div>
               </div>
            </div>

            <div className="md:col-span-4 lg:col-span-1 p-12 rounded-[3rem] bg-[#d4af37] border border-white/5 shadow-2xl relative overflow-hidden group flex flex-col justify-end min-h-[300px]">
              <div className="absolute top-8 left-8 w-16 h-16 rounded-2xl bg-black/20 text-black flex items-center justify-center border border-black/10">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black mb-2 text-black tracking-tighter uppercase font-manrope italic">Retención Activa</h3>
              <p className="text-black/60 leading-tight font-black text-sm font-manrope uppercase">Flashcards personalizadas con IA.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Benefits Section */}
      <section className="py-32 px-6 bg-[#131313] relative overflow-hidden border-b border-white/5">
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="mb-24">
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-8 text-white uppercase font-manrope">Aliado de <span className="text-[#d4af37] italic">Academias</span></h2>
            <p className="text-white/40 max-w-2xl mx-auto text-xl font-bold mb-12 font-manrope uppercase tracking-widest text-xs">Diseñamos Munilex como el socio tecnológico definitivo para centros de formación y preparadores.</p>
            <Link 
              to="/munilex-corporate" 
              className="inline-flex items-center gap-3 px-12 py-6 bg-white text-black font-black rounded-2xl hover:bg-[#d4af37] transition-all group uppercase tracking-[0.2em] text-[11px] shadow-2xl font-manrope"
            >
              Explorar Versión Empresas
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-12 rounded-[3rem] bg-[#1C1B1B] border border-white/5 shadow-2xl hover:border-[#d4af37]/30 transition-all group text-left">
              <Clock className="w-14 h-14 text-[#d4af37] mb-8 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-black text-white uppercase mb-4 font-manrope">Automatización</h3>
              <p className="text-white/40 font-bold leading-relaxed font-inter">Libera a tus profesores de la carga de corregir tests. La IA analiza errores y recomienda refuerzos automáticamente.</p>
            </div>
            <div className="p-12 rounded-[3rem] bg-[#1C1B1B] border border-white/5 shadow-2xl hover:border-[#d4af37]/30 transition-all group text-left">
              <Zap className="w-14 h-14 text-[#d4af37] mb-8 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-black text-white uppercase mb-4 font-manrope">Reducción Soporte</h3>
              <p className="text-white/40 font-bold leading-relaxed font-inter">Nuestra IA resuelve el 80% de las dudas normativas de tus alumnos al instante, 24 horas al día, 7 días a la semana.</p>
            </div>
            <div className="p-12 rounded-[3rem] bg-[#1C1B1B] border border-white/5 shadow-2xl hover:border-[#d4af37]/30 transition-all group text-left">
              <GraduationCap className="w-14 h-14 text-[#d4af37] mb-8 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-black text-white uppercase mb-4 font-manrope">Prestigio Digital</h3>
              <p className="text-white/40 font-bold leading-relaxed font-inter">Ofrece a tus alumnos la plataforma más avanzada del mercado bajo tu marca o integrándote con nuestra red.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 px-6 bg-[#131313]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-8 text-white uppercase font-manrope">Impacto <span className="text-[#d4af37] italic">Real</span></h2>
            <p className="text-white/40 max-w-2xl mx-auto text-xl font-bold font-manrope uppercase tracking-widest text-xs">Opositores que ya entrenan con tecnología de élite.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                name: "Carlos M.", 
                body: "Conseguí mi plaza en Policía Nacional. Los psicotécnicos de la IA clavan los patrones del examen real.",
                role: "Agente CNP"
              },
              { 
                name: "Elena S.", 
                body: "El asistente jurídico me ahorró semanas de búsqueda en el BOE para Administrativo del Estado. Es insuperable.",
                role: "Administrativa AGE"
              },
              { 
                name: "Javier R.", 
                body: "La capacidad de análisis de supuestos prácticos de Munilex es lo más parecido a tener un tutor de élite 24/7.",
                role: "Ayudante Prisiones"
              }
            ].map((t, i) => (
              <div key={i} className="p-12 rounded-[3rem] bg-[#1C1B1B] border border-white/5 shadow-2xl hover:shadow-[0_0_50px_rgba(212,175,55,0.05)] transition-all">
                <div className="flex items-center gap-1 mb-10 text-[#d4af37]">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-white/60 font-bold italic mb-10 leading-relaxed text-xl font-inter">"{t.body}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center font-black text-[#d4af37]">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-black text-white uppercase tracking-tighter font-manrope">{t.name}</div>
                    <div className="text-[10px] text-[#d4af37] font-black uppercase tracking-widest font-manrope">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Branding */}
      <footer className="py-20 bg-[#131313] border-t border-white/5 text-center">
        <div className="max-w-7xl mx-auto px-8">
          <img src="/munilex_logo_new.png" className="h-16 mx-auto mb-10 opacity-50 grayscale hover:grayscale-0 transition-all" alt="" />
          <p className="text-white/20 font-black text-[10px] uppercase tracking-[0.5em] font-manrope">© 2024 Munilex Academy • Inteligencia Artificial para Opositores</p>
        </div>
      </footer>
    </div>
  );
};

export default Academy;
