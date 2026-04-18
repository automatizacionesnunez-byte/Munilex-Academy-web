import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Clock, 
  ShieldCheck, 
  Zap, 
  Activity, 
  Landmark, 
  Shield, 
  Lock, 
  Cpu, 
  ArrowUpRight, 
  UserCheck, 
  GraduationCap, 
  Scale, 
  Brain,
  MessageCircle,
  FileText,
  Smartphone,
  CheckCircle,
  Sparkles,
  Layers,
  Globe,
  BarChart3,
  Rocket,
  Gavel,
  Link2
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const testimonialsPool = [
    {
      content: "\"Munilex me ha ahorrado muchísimo tiempo en la elaboración de informes. Al tener la base de datos legislativa integrada con la IA, todo el proceso es ahora mucho más ágil. He podido completar expedientes administrativos enteros en una fracción del tiempo habitual.\"",
      author: "E. García",
      role: "Secretaria de Ayuntamiento",
      type: "funcionario",
      icon: <ShieldCheck className="w-10 h-10" />,
      theme: "light"
    },
    {
      content: "\"Puedo estar tranquilamente en casa o de viaje y hacerme un tipo test, estudiando desde cualquier sitio con total flexibilidad. Gracias a su capacidad para generar contenido y simulacros, la organización de mi estudio ha dado un salto de calidad increíble.\"",
      author: "Carlos M.",
      role: "Opositor Policía Nacional",
      type: "opositor",
      icon: <GraduationCap className="w-10 h-10" />,
      theme: "dark"
    },
    {
      content: "\"Es la solución tecnológica que nuestra academia necesitaba. Ofrecer a nuestros alumnos una plataforma 24/7 con IA soberana y generador de materiales bajo nuestra propia marca nos ha permitido escalar nuestra formación a otro nivel.\"",
      author: "D. Martínez",
      role: "Director de Academia Jurídica",
      type: "academia",
      icon: <Rocket className="w-10 h-10" />,
      theme: "corporate"
    },
    {
      content: "\"La automatización del control interno ha reducido mis tiempos de revisión en un 40%. Munilex detecta discrepancias normativas que antes nos llevaban horas identificar.\"",
      author: "J. Rodríguez",
      role: "Interventor Municipal",
      type: "funcionario",
      icon: <Activity className="w-10 h-10" />,
      theme: "light"
    },
    {
      content: "\"Los resúmenes generados por la IA son clave para entender los temas más densos de contratación pública. Estudiar por la noche con el asistente 24/7 es un lujo.\"",
      author: "Lucía P.",
      role: "Opositora GACE",
      type: "opositor",
      icon: <Layers className="w-10 h-10" />,
      theme: "dark"
    },
    {
      content: "\"Munilex es como tener un equipo de soporte legal 24/7. Resuelve incluso las dudas más específicas de la LPAC con una precisión técnica asombrosa.\"",
      author: "Alberto S.",
      role: "Técnico de Administración General",
      type: "funcionario",
      icon: <Scale className="w-10 h-10" />,
      theme: "light"
    },
    {
      content: "\"La precisión en la citación de jurisprudencia es inigualable. Es un antes y un después en mi preparación para el tercer ejercicio.\"",
      author: "Marta T.",
      role: "Opositora Judicaturas",
      type: "opositor",
      icon: <Gavel className="w-10 h-10" />,
      theme: "dark"
    },
    {
      content: "\"Implementar Munilex en el departamento ha mejorado la calidad de nuestros actos administrativos de forma exponencial. Menos recursos, más seguridad jurídica.\"",
      author: "Ricardo F.",
      role: "Concejal de Personal",
      type: "funcionario",
      icon: <UserCheck className="w-10 h-10" />,
      theme: "corporate"
    },
    {
      content: "\"Me encanta que la plataforma use nuestra propia marca corporativa pero ofrezca la potencia de cálculo y generación de Munilex.\"",
      author: "Sonia V.",
      role: "Directora de Formación Online",
      type: "academia",
      icon: <Globe className="w-10 h-10" />,
      theme: "light"
    },
    {
      content: "\"La trazabilidad con el BOE me da la seguridad que necesito para firmar informes complejos. Saber que la IA no inventa, sino que cita, es fundamental.\"",
      author: "David G.",
      role: "Técnico Habilitado",
      type: "funcionario",
      icon: <Link2 className="w-10 h-10" />,
      theme: "corporate"
    }
  ];

  const [testimonials, setTestimonials] = useState(testimonialsPool);

  useEffect(() => {
    // Randomize initial order
    setTestimonials([...testimonialsPool].sort(() => Math.random() - 0.5));
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const academyBodies = [
    { 
      name: "Habilitados Nacionales", 
      path: "/academy/habilitados", 
      icon: <Landmark className="w-6 h-6" />,
      color: "bg-amber-500/10 text-amber-600",
      desc: "Secretaría e Intervención"
    },
    { 
      name: "Administrativos AGE", 
      path: "/academy/age", 
      icon: <Cpu className="w-6 h-6" />,
      color: "bg-cyan-500/10 text-cyan-600",
      desc: "Estado Administrativo"
    },
    { 
      name: "Policía Nacional", 
      path: "/academy/policia", 
      icon: <Shield className="w-6 h-6" />,
      color: "bg-blue-500/10 text-blue-600",
      desc: "Escala Básica y Ejecutiva"
    },
    { 
      name: "Guardia Civil", 
      path: "/academy/guardiacivil", 
      icon: <ShieldCheck className="w-6 h-6" />,
      color: "bg-green-500/10 text-green-600",
      desc: "Ingreso Benemérita"
    },
    { 
      name: "Prisiones IIPP", 
      path: "/academy/iipp", 
      icon: <Lock className="w-6 h-6" />,
      color: "bg-red-500/10 text-red-600",
      desc: "Ayudante de Instituciones"
    }
  ];

  return (
    <div className="bg-surface overflow-hidden">
      {/* Dynamic Dual Hero */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-40 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-container/10 rounded-full blur-[140px] -mr-64 -mt-32" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary-cyan/10 rounded-full blur-[140px] -ml-64 -mb-32" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-surface-lowest border border-outline-variant text-[11px] font-black uppercase tracking-[0.3em] mb-10 text-secondary"
          >
            <Zap className="w-3.5 h-3.5 text-primary-container" />
            Ecosistema de Inteligencia Jurídica
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-black tracking-tighter mb-12 leading-[0.9] max-w-5xl mx-auto text-secondary italic"
          >
            La inteligencia que <span className="text-primary-container not-italic">revoluciona</span> el sector jurídico académico
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-2xl text-on-surface-variant max-w-3xl mx-auto mb-16 font-medium leading-relaxed opacity-80"
          >
            Dominio legal total para tu día a día profesional y la preparación más avanzada para tu próximo gran salto en la Administración.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <Link to="/funcionarios" className="group bg-secondary text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-premium border border-white/10 flex items-center gap-3">
              Soluciones para Funcionarios
              <ShieldCheck className="w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity" />
            </Link>
            <Link to="/academy" className="group bg-gradient-to-br from-[#241a00] to-black text-[#d4af37] px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-[0_20px_50px_rgba(212,175,55,0.1)] border border-[#d4af37]/30 flex items-center gap-3">
              Acceso a la Academia
              <Landmark className="w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Bento Dual Path Section */}
      <section className="py-24 px-6 md:px-8 border-y border-outline-variant bg-surface-low relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
             <motion.h3 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="text-3xl md:text-5xl font-black text-secondary tracking-tight mb-4 uppercase"
             >
               ¿Cómo quieres transformar tu <span className="text-primary-container">carrera</span> hoy?
             </motion.h3>
             <p className="text-xl text-on-surface-variant font-medium opacity-60">Selecciona el ecosistema que mejor se adapta a tu momento vital.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Officials Path */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="group p-12 md:p-16 bg-white rounded-[3rem] border border-outline-variant shadow-[0_30px_60px_rgba(0,0,0,0.03)] hover:shadow-premium transition-all relative overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container/5 blur-3xl -mr-32 -mt-32" />
              <div>
                <div className="w-16 h-16 bg-primary-container/10 rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform text-primary-container font-black">
                  <Landmark className="w-8 h-8" />
                </div>
                <h3 className="text-4xl font-black text-secondary tracking-tight mb-6 italic">Munilex <span className="text-primary-container not-italic">para Funcionarios</span></h3>
                <p className="text-xl text-on-surface-variant font-medium mb-10 leading-relaxed opacity-70">
                  Potencia tu desempeño profesional diario. Herramientas de IA soberana para la gestión administrativa de élite y formación continua corporate.
                </p>
                <ul className="space-y-4 mb-12">
                   {["Informes técnicos en segundos", "Auditoría normativa real-time", "Red de inteligencia inter-municipal"].map((item, i) => (
                     <li key={i} className="flex items-center gap-3 text-secondary font-bold text-sm">
                       <CheckCircle className="w-5 h-5 text-primary-container" />
                       {item}
                     </li>
                   ))}
                </ul>
              </div>
              <Link 
                to="/funcionarios" 
                className="w-full py-5 bg-secondary text-white font-black text-xs uppercase tracking-widest rounded-2xl text-center hover:scale-[1.02] transition-all shadow-lg active:scale-95"
              >
                Potenciar mi Carrera Profesional
              </Link>
            </motion.div>

            {/* Academy Path */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="group p-12 md:p-16 bg-[#131313] rounded-[3rem] border border-[#d4af37]/20 shadow-[0_30px_60px_rgba(212,175,55,0.05)] hover:shadow-[0_40px_80px_rgba(212,175,55,0.15)] transition-all relative overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#d4af37]/5 blur-3xl -mr-32 -mt-32" />
              <div>
                <div className="w-16 h-16 bg-[#d4af37]/10 rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                   <GraduationCap className="w-8 h-8 text-[#d4af37]" />
                </div>
                <h3 className="text-4xl font-black text-white tracking-tight mb-6 italic">Munilex <span className="text-[#d4af37] not-italic">Academy</span></h3>
                <p className="text-xl text-white/50 font-medium mb-10 leading-relaxed">
                  Asegura tu futuro en la Administración. La metodología de preparación más avanzada asistida por IA para opositores que buscan la excelencia.
                </p>
                <ul className="space-y-4 mb-12">
                   {["Simulacros de examen adaptativos", "Tutoría legal IA 24/7", "Temarios actualizados al minuto"].map((item, i) => (
                     <li key={i} className="flex items-center gap-3 text-white/80 font-bold text-sm">
                       <ShieldCheck className="w-5 h-5 text-[#d4af37]" />
                       {item}
                     </li>
                   ))}
                </ul>
              </div>
              <Link 
                to="/academy" 
                className="w-full py-5 bg-gradient-to-br from-[#f2ca50] to-[#d4af37] text-[#241a00] font-black text-xs uppercase tracking-widest rounded-2xl text-center hover:scale-[1.02] transition-all shadow-lg active:scale-95"
              >
                Asegurar mi Futuro Profesional
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SaaS for Academies Section (NEW) */}
      <section className="py-32 bg-surface-lowest relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-container/10 rounded-full blur-[160px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-outline-variant text-[10px] font-black uppercase tracking-widest mb-8 text-secondary">
                 <Layers className="w-4 h-4 text-primary-container" />
                 Soluciones White-Label
              </div>
              <h2 className="text-4xl md:text-7xl font-black text-secondary tracking-tighter mb-8 leading-[0.9]">
                Cree su propia <span className="text-primary-container">Academia de Élite</span> con nuestra tecnología
              </h2>
              <p className="text-xl text-on-surface-variant font-medium mb-12 leading-relaxed">
                ¿Gestiona una academia? Le entregamos una plataforma marca blanca completa, con su propia identidad visual y toda la potencia de la IA de Munilex integrada.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                {[
                  { icon: <Globe className="w-6 h-6" />, t: "Dominio Propio", d: "Su marca es la protagonista absoluta." },
                  { icon: <Clock className="w-6 h-6" />, t: "Acceso 24/7", d: "Alumnos conectados sin interrupciones." },
                  { icon: <Sparkles className="w-6 h-6" />, t: "Generador IA", t2: "Tests y material en segundos." },
                  { icon: <BarChart3 className="w-6 h-6" />, t: "Analítica Pro", d: "Control total del progreso alumno." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                     <div className="w-12 h-12 bg-white rounded-xl shadow-ambient border border-outline-variant flex items-center justify-center text-primary-container flex-shrink-0">
                        {item.icon}
                     </div>
                     <div>
                        <h4 className="font-black text-secondary text-sm mb-1">{item.t}</h4>
                        <p className="text-xs text-on-surface-variant font-medium opacity-70">{item.d || item.t2}</p>
                     </div>
                  </div>
                ))}
              </div>

              <a 
                href="https://wa.me/34605392912?text=Hola,%20me%20gustaría%20solicitar%20una%20plataforma%20Munilex%20para%20mi%20academia."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-5 bg-secondary text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-primary transition-all shadow-xl group"
              >
                Solicitar Demo Corporativa
                <Rocket className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10 bg-white rounded-[3rem] p-4 shadow-premium border border-outline-variant overflow-hidden">
                 <div className="bg-surface-low rounded-[2.5rem] p-1 md:p-12 border border-outline-variant/50">
                    <div className="flex items-center justify-between mb-8 pb-8 border-b border-outline-variant">
                       <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-secondary rounded-lg" />
                          <div className="font-black text-secondary text-sm">Tu Academia <span className="text-[10px] opacity-40 block tracking-widest">DASHBOARD PROFESOR</span></div>
                       </div>
                       <div className="flex gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-400" />
                          <div className="w-3 h-3 rounded-full bg-amber-400" />
                          <div className="w-3 h-3 rounded-full bg-green-400" />
                       </div>
                    </div>
                    <div className="space-y-6">
                       <div className="h-4 w-1/3 bg-outline-variant rounded-full" />
                       <div className="grid grid-cols-2 gap-4">
                          <div className="h-24 bg-white rounded-2xl border border-outline-variant p-4">
                             <div className="h-2 w-1/2 bg-primary-container/20 rounded-full mb-4" />
                             <div className="h-8 w-3/4 bg-primary-container rounded-lg" />
                          </div>
                          <div className="h-24 bg-white rounded-2xl border border-outline-variant p-4">
                             <div className="h-2 w-1/2 bg-secondary-cyan/20 rounded-full mb-4" />
                             <div className="h-8 w-3/4 bg-secondary-cyan rounded-lg" />
                          </div>
                       </div>
                       <div className="h-32 bg-white rounded-2xl border border-outline-variant p-6 flex items-center justify-center">
                          <Brain className="w-12 h-12 text-primary-container/20" />
                       </div>
                    </div>
                 </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary-container/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary-cyan/20 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sinergy Ecosystem Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="mb-24 text-center">
            <h2 className="text-4xl md:text-6xl font-black text-secondary tracking-tighter mb-6 uppercase">Un solo motor, <span className="text-primary-container">tres dimensiones</span></h2>
            <p className="text-xl text-on-surface-variant font-medium opacity-60">Tecnología soberana entrenada para dominar el marco legal español en todos los niveles.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "IA Soberana", 
                desc: "Algoritmos entrenados exclusivamente en jurisprudencia y normativa española. Sin sesgos, solo rigor legal.",
                icon: <Cpu className="w-10 h-10" />,
                color: "bg-surface-lowest"
              },
              { 
                title: "Actualización Síncrona", 
                desc: "Si el BOE cambia, Munilex cambia. Tanto tu temario de estudio como tus borradores de informe se mantienen al día.",
                icon: <Activity className="w-10 h-10" />,
                color: "bg-surface-lowest"
              },
              { 
                title: "Seguridad ENS", 
                desc: "Cumplimiento estricto del Esquema Nacional de Seguridad. Tus datos y los de tu administración protegidos.",
                icon: <Shield className="w-10 h-10" />,
                color: "bg-surface-lowest"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`${item.color} p-12 rounded-[2.5rem] border border-outline-variant hover:shadow-premium transition-all group`}
              >
                <div className="w-16 h-16 bg-white rounded-2xl shadow-ambient flex items-center justify-center mb-8 group-hover:scale-110 transition-transform text-secondary">
                  {item.icon}
                </div>
                <h4 className="text-2xl font-black text-secondary mb-4 tracking-tight">{item.title}</h4>
                <p className="text-on-surface-variant leading-relaxed font-medium opacity-70">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Dual Showcase Section */}
      <section className="py-32 bg-secondary text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary-container blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary-cyan blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-10 leading-[0.9]">Inteligencia que <span className="text-primary-container">empodera</span> tu carrera</h2>
              <p className="text-xl text-white/50 mb-12 leading-relaxed">Nuestra interfaz se adapta a tu rol. Si eres funcionario, automatizas procesos; si eres opositor, aceleras el aprendizaje. El mismo rigor, diferentes herramientas.</p>
              
              <div className="space-y-6">
                {[
                  { t: "Para el Profesional", d: "Generación de pliegos, informes técnicos y decretos en segundos." },
                  { t: "Para el Aspirante", d: "Resolución de casos prácticos y tests con feedback jurídico real." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-5 p-6 bg-white/5 rounded-2xl border border-white/10">
                    <CheckCircle className="w-6 h-6 text-secondary-cyan flex-shrink-0" />
                    <div>
                    <h5 className="font-black text-lg mb-1">{item.t}</h5>
                    <p className="text-white/40 text-sm font-medium">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-[#1a1a1a] rounded-[3rem] border border-white/10 p-4 shadow-2xl relative z-10">
                <div className="bg-white rounded-[2.5rem] p-10 text-secondary">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center">
                      <Brain className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-widest opacity-40">Consultor Munilex</div>
                      <div className="font-black text-sm">Respuesta jurídica bajo 39/2015</div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="p-4 bg-surface-lowest rounded-2xl text-xs font-medium border border-outline-variant italic">
                      "Analiza la caducidad del procedimiento sancionador..."
                    </div>
                    <div className="p-5 bg-primary-container text-white rounded-2xl text-xs leading-relaxed font-bold shadow-lg">
                      De acuerdo con el Art. 21.1 de la Ley 39/2015, el plazo máximo para resolver y notificar...
                    </div>
                    <div className="flex gap-2">
                       <span className="px-3 py-1 bg-secondary text-white text-[9px] font-black rounded-full uppercase tracking-tighter">Art. 21 LPAC</span>
                       <span className="px-3 py-1 bg-secondary text-white text-[9px] font-black rounded-full uppercase tracking-tighter">Jurisprudencia TS</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-secondary-cyan/20 blur-[60px] rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Dual Success Stories (Carousel) */}
      <section className="py-32 bg-surface-low border-y border-outline-variant relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <div className="text-center mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-black text-secondary tracking-tighter mb-6 uppercase"
            >
              Vanguardia <span className="text-primary-container">compartida</span>
            </motion.h2>
            <p className="text-xl text-on-surface-variant font-medium opacity-60">Lo que dicen quienes ya están en el siguiente nivel con Munilex.</p>
          </div>

          <div className="relative h-[650px] md:h-[550px]">
            <motion.div 
              className="absolute inset-0 flex items-center justify-center px-4"
              initial={false}
            >
              <AnimatePresence mode="wait">
                <motion.div 
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 20, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -20, scale: 0.95 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className={`w-full max-w-4xl p-10 md:p-16 rounded-[4rem] shadow-premium relative overflow-hidden flex flex-col justify-center h-full border ${
                    testimonials[currentTestimonial].theme === 'dark' 
                    ? 'bg-[#131313] text-white border-[#d4af37]/20 shadow-[0_40px_80px_rgba(212,175,55,0.1)]' 
                    : testimonials[currentTestimonial].theme === 'corporate'
                    ? 'bg-secondary text-white border-white/10'
                    : 'bg-white text-secondary border-outline-variant shadow-ambient'
                  }`}
                >
                  {/* Decorative Background Icon */}
                  <div className="absolute -top-10 -right-10 opacity-5 scale-[3] pointer-events-none">
                    {testimonials[currentTestimonial].icon}
                  </div>

                  <p className="text-xl md:text-3xl italic font-medium mb-16 leading-tight md:leading-relaxed">
                    {testimonials[currentTestimonial].content}
                  </p>
                  
                  <div className="flex items-center gap-6">
                    <div className="text-left">
                      <div className="font-black text-2xl md:text-3xl mb-1">{testimonials[currentTestimonial].author}</div>
                      <div className={`text-sm md:text-base font-black uppercase tracking-[0.2em] ${
                        testimonials[currentTestimonial].theme === 'dark' ? 'text-[#d4af37]' : 'text-primary-container'
                      }`}>
                        {testimonials[currentTestimonial].role}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
          
          {/* Pagination Dots */}
          <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentTestimonial(i)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  currentTestimonial === i ? 'w-12 bg-primary-container' : 'w-2 bg-outline-variant hover:bg-outline'
                }`}
              />
            ))}
          </div>
        </div>
      </section>
      {/* Final Dual CTA Section (NEW) */}
      <section className="py-32 px-6 md:px-8 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-container/5 rounded-full blur-[160px]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="bg-secondary rounded-[4rem] p-12 md:p-24 text-center text-white overflow-hidden relative border border-white/5 shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-container/20 blur-[120px] -mr-48 -mt-48" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-cyan/10 blur-[120px] -ml-48 -mb-48" />

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-8xl font-black tracking-tighter mb-10 leading-[0.9] uppercase italic">
                ¿Preparado para el <span className="text-primary-container not-italic">siguiente nivel</span>?
              </h2>
              <p className="text-xl md:text-2xl text-white/50 mb-16 max-w-3xl mx-auto font-medium">
                Únete a la élite administrativa o asegura tu plaza con la tecnología que está redefiniendo el sector jurídico en España.
              </p>

              <div className="flex flex-col md:flex-row justify-center gap-8">
                <Link 
                  to="/funcionarios" 
                  className="group bg-white text-secondary px-12 py-6 rounded-2xl font-black text-sm uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl flex items-center justify-center gap-3"
                >
                  Munilex Professional
                  <ArrowUpRight className="w-6 h-6 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </Link>
                <Link 
                  to="/academy" 
                  className="group bg-gradient-to-br from-[#f2ca50] to-[#d4af37] text-[#241a00] px-12 py-6 rounded-2xl font-black text-sm uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl flex items-center justify-center gap-3"
                >
                  Munilex Academy
                  <ArrowUpRight className="w-6 h-6 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
