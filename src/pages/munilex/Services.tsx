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
  Activity,
  ArrowRight,
  Gavel,
  Lock,
  Workflow,
  LineChart
} from 'lucide-react';

const Services = () => {
  const funcionarioServices = [
    {
      title: "Redacción de Informes con Rigor Jurídico",
      desc: "Genere borradores de informes de secretaría, decretos y mociones. Nuestra IA aplica la normativa vigente (Ley 39/2015, Ley 40/2015, LCSP) con precisión técnica.",
      icon: <FileText className="w-8 h-8" />,
      benefit: "-15h/semana de redacción",
      color: "from-[#1a237e] to-[#0d47a1]",
      size: "large"
    },
    {
      title: "Asistente en Contratación Pública",
      desc: "Validación de pliegos, análisis de solvencia y supervisión de expedientes de licitación bajo la LCSP 9/2017.",
      icon: <Workflow className="w-8 h-8" />,
      benefit: "Cumplimiento 100%",
      color: "from-[#0d47a1] to-[#01579b]"
    },
    {
      title: "Buscador Semántico BOE/DOG",
      desc: "No busque por palabras, busque por conceptos jurídicos. Cruce instantáneo de normativa estatal, autonómica y local.",
      icon: <Search className="w-6 h-6" />,
      dark: true
    },
    {
      title: "Gestión de Subvenciones",
      desc: "Supervisión de bases reguladoras, control de hitos y justificaciones de fondos (incluyendo Next Generation).",
      icon: <LineChart className="w-6 h-6" />,
      dark: true
    },
    {
      title: "Auditoría Normativa Continua",
      desc: "Alertas proactivas cuando un cambio en la legislación estatal afecta a sus ordenanzas municipales vigentes.",
      icon: <Activity className="w-6 h-6" />,
      dark: true
    }
  ];

  const managementTools = [
    {
      title: "Soberanía de Datos",
      desc: "Infraestructura desplegada en servidores seguros bajo legislación española y cumplimiento estricto del RGPD.",
      icon: <Shield className="w-10 h-10" />,
    },
    {
      title: "Interoperabilidad",
      desc: "Diseñado para integrarse con sus flujos de trabajo actuales y sistemas de gestión electrónica local.",
      icon: <Database className="w-10 h-10" />,
    },
    {
      title: "Trazabilidad Total",
      desc: "Cada respuesta de la IA incluye referencias directas a boletines oficiales y artículos de ley específicos.",
      icon: <Gavel className="w-10 h-10" />,
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-surface">
      {/* Hero Section */}
      <section className="relative py-24 px-6 md:px-8 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-container/5 -skew-x-12 transform translate-x-1/4" />
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="z-10"
          >
            <div className="inline-flex items-center bg-secondary text-white px-4 py-2 rounded-full mb-8 border border-white/10 shadow-lg">
              <span className="w-2 h-2 bg-secondary-cyan rounded-full animate-pulse mr-2" />
              <span className="text-[12px] font-black uppercase tracking-widest">Solución Profesional para la Administración</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-secondary leading-[0.9] tracking-tighter mb-8 italic">
              Poder Judicial <span className="text-primary-container not-italic">Asistido</span> por IA
            </h1>
            <p className="text-xl md:text-2xl text-on-surface-variant max-w-xl mb-12 leading-relaxed font-medium">
              Munilex Professional es la herramienta definitiva para Secretarios, Interventores y Técnicos de Administración General. Eficiencia jurídica con garantía de cumplimiento.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <a href="https://wa.me/34605392912" className="bg-secondary text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-all text-center shadow-premium">
                Solicitar Implantación
              </a>
              <a href="#soluciones" className="bg-surface-lowest border border-outline-variant px-10 py-5 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-surface-low transition-all text-center">
                Ver Funcionalidades
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="p-2 bg-white rounded-[3rem] shadow-premium border-8 border-white/50">
              <div className="bg-[#131313] p-12 rounded-[2.5rem] text-white">
                <div className="flex items-center justify-between mb-12">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary-cyan/20 flex items-center justify-center">
                      <BarChart3 className="w-6 h-6 text-secondary-cyan" />
                    </div>
                    <span className="font-bold text-lg tracking-tight">Status Operativo</span>
                  </div>
                  <div className="px-4 py-1.5 rounded-full bg-secondary-cyan/10 text-secondary-cyan text-[10px] font-black uppercase tracking-widest">IA Activa</div>
                </div>
                
                <div className="space-y-10">
                  {[
                    { label: "Validación Jurídica", val: 98, color: "bg-secondary-cyan" },
                    { label: "Carga de Trabajo Reducida", val: 82, color: "bg-primary-container" },
                    { label: "Precisión en Pliegos", val: 95, color: "bg-white" }
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-3 text-sm font-bold opacity-60 uppercase tracking-widest">
                        <span>{item.label}</span>
                        <span>{item.val}%</span>
                      </div>
                      <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${item.val}%` }}
                          transition={{ duration: 1, delay: 0.5 + (i * 0.2) }}
                          className={`h-full ${item.color}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section id="soluciones" className="py-32 bg-surface-low border-y border-outline-variant">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="mb-24">
            <h2 className="text-4xl md:text-6xl font-black text-secondary tracking-tighter mb-6">Herramientas de Grado Profesional</h2>
            <div className="w-32 h-2 bg-secondary-cyan rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {funcionarioServices.map((service, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className={`${service.size === 'large' ? 'lg:col-span-2' : 'lg:col-span-1'} p-12 bg-white rounded-[2.5rem] border border-outline-variant shadow-sm hover:shadow-premium transition-all flex flex-col justify-between group ${service.dark ? 'bg-secondary text-white' : ''}`}
              >
                <div>
                  <div className={`w-16 h-16 rounded-2xl ${service.dark ? 'bg-white/10' : `bg-gradient-to-br ${service.color}`} flex items-center justify-center text-white mb-10 group-hover:scale-110 transition-transform shadow-lg`}>
                    {service.icon}
                  </div>
                  <h3 className={`text-3xl font-black mb-6 tracking-tight ${service.dark ? 'text-white' : 'text-secondary'}`}>{service.title}</h3>
                  <p className={`text-lg leading-relaxed ${service.dark ? 'text-white/60' : 'text-on-surface-variant opacity-70'}`}>{service.desc}</p>
                </div>
                {service.benefit && (
                  <div className="mt-12 pt-8 border-t border-outline-variant flex flex-col gap-4">
                    <span className="text-[11px] font-black uppercase tracking-[0.2em] opacity-40">Métrica de Eficiencia</span>
                    <div className="inline-flex items-center gap-2 text-secondary-cyan">
                      <Zap className="w-5 h-5 fill-current" />
                      <span className="text-xl font-black">{service.benefit}</span>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance & Trust */}
      <section className="py-32 bg-white overflow-hidden relative">
        <div className="absolute bottom-0 left-0 w-full h-[500px] bg-primary-container/5 rounded-[100%] translate-y-1/2" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black text-secondary tracking-tighter mb-6 uppercase">Infraestructura Crítica</h2>
            <p className="text-xl text-on-surface-variant opacity-60 font-medium tracking-tight">Seguridad y soberanía para los datos de la administración local.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {managementTools.map((tool, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className="w-24 h-24 bg-surface-low rounded-[2rem] flex items-center justify-center mb-8 border border-outline-variant group-hover:bg-secondary group-hover:text-white transition-all duration-500">
                  <div className="group-hover:scale-110 transition-transform">
                    {tool.icon}
                  </div>
                </div>
                <h4 className="text-2xl font-black text-secondary mb-4 tracking-tight">{tool.title}</h4>
                <p className="text-on-surface-variant opacity-60 leading-relaxed font-medium">{tool.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Professional CTA */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto bg-secondary rounded-[4rem] p-16 md:p-24 relative overflow-hidden text-center text-white">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container/20 blur-[100px] -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-cyan/10 blur-[100px] -ml-32 -mb-32" />
          
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-10 leading-[0.9]">Transforme su Secretaría hoy mismo</h2>
          <p className="text-xl md:text-2xl text-white/50 mb-16 max-w-2xl mx-auto font-medium">Únase a los ayuntamientos que ya están reduciendo su burocracia con inteligencia artificial soberana.</p>
          
          <a href="https://wa.me/34605392912" className="inline-flex items-center gap-4 bg-white text-secondary px-12 py-6 rounded-2xl font-black text-sm uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl">
            Agendar Demo para mi Centro
            <ArrowRight className="w-6 h-6" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;
