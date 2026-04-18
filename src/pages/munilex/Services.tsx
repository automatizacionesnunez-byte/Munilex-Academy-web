import { motion } from 'framer-motion';
import { 
  Shield, 
  Zap, 
  Search, 
  FileText, 
  CheckCircle, 
  BarChart3, 
  Database, 
  Bell, 
  GraduationCap, 
  ClipboardList, 
  BookOpen, 
  MessageCircle,
  ArrowRight
} from 'lucide-react';

const Services = () => {
  const funcionarioServices = [
    {
      title: "Redacción Automatizada",
      desc: "Genere informes de secretaría, decretos y resoluciones con rigor jurídico absoluto en segundos.",
      icon: <FileText className="w-8 h-8" />,
      benefit: "-12 horas/semana",
      color: "from-primary-container to-secondary-cyan",
      size: "large"
    },
    {
      title: "Buscador Inteligente",
      desc: "IA semántica que entiende la intención jurídica. Encuentre jurisprudencia vinculante al instante.",
      icon: <Search className="w-8 h-8" />,
      benefit: "Precisión 99.8%",
      color: "from-secondary-cyan to-primary-container"
    },
    {
      title: "Auditoría Flash",
      desc: "Escaneo instantáneo de normativas locales frente a cambios legislativos estatales o europeos.",
      icon: <CheckCircle className="w-6 h-6" />,
      dark: true
    },
    {
      title: "Notificación de Plazos",
      desc: "Control automático de calendarios administrativos y alertas proactivas para evitar caducidades.",
      icon: <Bell className="w-6 h-6" />,
      dark: true
    },
    {
      title: "Base de Datos Viva",
      desc: "Acceso centralizado a toda la normativa del ayuntamiento con indexación semántica.",
      icon: <Database className="w-6 h-6" />,
      dark: true
    }
  ];

  const opositorServices = [
    {
      title: "Preparación Elite Multivía",
      desc: "Plataforma integral para Habilitados Nacionales, AGE, Fuerzas de Seguridad e Instituciones Penitenciarias.",
      icon: <GraduationCap className="w-10 h-10" />,
      color: "from-primary to-primary-container",
      size: "large"
    },
    {
      title: "Tests & Materiales AI",
      desc: "Generación instantánea de tests tipo test y esquemas estructurados de cualquier norma del temario.",
      icon: <ClipboardList className="w-6 h-6" />,
      dark: false
    },
    {
      title: "Resolución de Casos",
      desc: "Entrene supuestos prácticos con correcciones basadas en criterios reales de tribunales.",
      icon: <BookOpen className="w-6 h-6" />,
      dark: false
    },
    {
      title: "Tutoría 24/7",
      desc: "Chat especializado para resolver dudas doctrinales en cualquier momento del día o la noche.",
      icon: <MessageCircle className="w-6 h-6" />,
      dark: false
    }
  ];

  return (
    <div className="pt-24 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 px-6 md:px-8 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="z-10"
          >
            <div className="inline-flex items-center bg-secondary-cyan/10 px-4 py-2 rounded-full mb-6 border border-secondary-cyan/20">
              <span className="w-2 h-2 bg-secondary-cyan rounded-full animate-pulse mr-2" />
              <span className="text-secondary-cyan text-[13px] font-bold uppercase tracking-widest">Inteligencia Jurídica Certificada</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-primary leading-tight tracking-tighter mb-8 italic">
              IA que entiende el <span className="text-primary-container not-italic">marco legal</span> municipal
            </h1>
            <p className="text-xl text-primary/60 max-w-xl mb-10 leading-relaxed font-inter">
              Transformamos la burocracia en eficiencia operativa. Nuestra tecnología procesa el derecho administrativo con la precisión de un magistrado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary py-4 px-10">Solicitar Demo</button>
              <button className="btn-secondary py-4 px-10">Ver Flujo de Trabajo</button>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="card-glass p-4 rounded-3xl !border-0 bg-surface-low overflow-hidden">
               <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-primary/5">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <BarChart3 className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-bold text-sm text-primary">Monitor de Impacto MuniLex</span>
                  </div>
                  <span className="text-secondary-cyan font-black text-sm">+240h Ahorradas</span>
                </div>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-xs font-bold text-primary opacity-60">Reducción de Errores</span>
                      <span className="text-xs font-bold text-primary">85%</span>
                    </div>
                    <div className="w-full h-2 bg-surface-lowest rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "85%" }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full bg-primary" 
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-xs font-bold text-primary opacity-60">Velocidad Operativa</span>
                      <span className="text-xs font-bold text-primary">92%</span>
                    </div>
                    <div className="w-full h-2 bg-surface-lowest rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "92%" }}
                        transition={{ duration: 1, delay: 0.7 }}
                        className="h-full bg-secondary-cyan" 
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Pillars Sections */}
      <section className="py-32 bg-surface-low">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="mb-32 text-center">
            <h2 className="text-5xl md:text-7xl font-black text-primary tracking-tighter mb-4">Nuestros Pilares Tecnológicos</h2>
            <div className="w-24 h-2 bg-secondary-cyan mx-auto rounded-full" />
          </div>

          {/* Section: Funcionarios */}
          <div className="mb-40">
            <div className="flex items-center gap-4 mb-16">
              <div className="h-[2px] flex-grow bg-primary/5" />
              <h3 className="text-2xl font-black text-primary/40 uppercase tracking-[0.3em]">Para Funcionarios Habilitados</h3>
              <div className="h-[2px] flex-grow bg-primary/5" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {funcionarioServices.map((service, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -5 }}
                  className={`${service.size === 'large' ? 'lg:col-span-2' : 'lg:col-span-1'} card-glass p-10 flex flex-col justify-between ${service.dark ? 'bg-primary text-white !border-primary/20' : ''}`}
                >
                  <div>
                    <div className={`w-16 h-16 rounded-2xl ${service.dark ? 'bg-white/10' : `bg-gradient-to-br ${service.color}`} flex items-center justify-center ${service.dark ? 'text-white' : 'text-white'} mb-8 shadow-lg`}>
                      {service.icon}
                    </div>
                    <h3 className={`text-3xl font-black mb-4 ${service.dark ? 'text-white' : 'text-primary'}`}>{service.title}</h3>
                    <p className={`${service.dark ? 'text-white/70' : 'text-primary/60'} text-lg leading-relaxed font-inter`}>{service.desc}</p>
                  </div>
                  {service.benefit && (
                    <div className="mt-12 pt-6 border-t border-white/10 flex items-center gap-4">
                      <span className={`text-[13px] font-black uppercase tracking-widest ${service.dark ? 'text-white/40' : 'text-primary/40'}`}>Impacto Directo:</span>
                      <span className="bg-secondary-cyan/10 px-3 py-1 rounded-full text-xs font-black text-secondary-cyan">{service.benefit}</span>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Section: Opositores */}
          <div>
            <div className="flex items-center gap-4 mb-16">
              <div className="h-[2px] flex-grow bg-primary/5" />
              <h3 className="text-2xl font-black text-primary/40 uppercase tracking-[0.3em]">Preparación Integral de Oposiciones</h3>
              <div className="h-[2px] flex-grow bg-primary/5" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {opositorServices.map((service, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -5 }}
                  className={`${service.size === 'large' ? 'lg:col-span-2' : 'lg:col-span-1'} card-glass p-10 flex flex-col justify-between ${service.dark ? 'bg-primary text-white !border-primary/20' : ''}`}
                >
                  <div>
                    <div className={`w-16 h-16 rounded-2xl ${service.color ? `bg-gradient-to-br ${service.color} text-white` : 'bg-primary/5 text-primary'} flex items-center justify-center mb-8 shadow-md`}>
                      {service.icon}
                    </div>
                    <h3 className="text-3xl font-black mb-4 text-primary">{service.title}</h3>
                    <p className="text-primary/60 text-lg leading-relaxed font-inter">{service.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex justify-center mt-20">
              <button className="group btn-primary py-6 px-12 flex items-center gap-3 text-lg">
                Explorar Campus de Oposiciones
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center gap-20">
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-black text-primary mb-12 tracking-tight">Retorno de Inversión Instantáneo</h2>
            <div className="space-y-12">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-secondary-cyan/10 flex items-center justify-center text-secondary-cyan">
                  <Zap className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-xl font-black text-primary mb-2">Reducción de Costes Operativos</h4>
                  <p className="text-primary/60 text-lg leading-relaxed font-inter">Disminución del 40% en gastos de consultoría externa gracias a la autonomía que proporciona MuniLex.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-primary-container/10 flex items-center justify-center text-primary-container">
                  <Shield className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-xl font-black text-primary mb-2">Seguridad ENS Nivel Alto</h4>
                  <p className="text-primary/60 text-lg leading-relaxed font-inter">Cumplimiento total con el Esquema Nacional de Seguridad y el RGPD. Sus datos están protegidos bajo soberanía española.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 grid grid-cols-2 gap-6">
            {[
              { val: "4x", label: "Productividad" },
              { val: "0%", label: "Errores de Forma" },
              { val: "24/7", label: "Asistencia IA" },
              { val: "100%", label: "Cumplimiento" }
            ].map((stat, idx) => (
              <div key={idx} className="card-glass py-12 text-center bg-surface-low">
                <div className="text-4xl font-black text-primary mb-2 tracking-tighter">{stat.val}</div>
                <div className="text-[13px] font-black uppercase tracking-[0.2em] text-primary/40">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
