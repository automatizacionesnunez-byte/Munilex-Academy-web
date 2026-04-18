import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Settings, 
  Palette, 
  Cpu, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Zap,
  Target
} from 'lucide-react';
import { Link } from 'react-router-dom';

const TierCard = ({ 
  title, 
  description, 
  features, 
  icon: Icon, 
  highlight = false 
}: { 
  title: string; 
  description: string; 
  features: string[]; 
  icon: any; 
  highlight?: boolean;
}) => (
  <motion.div
    whileHover={{ y: -10 }}
    className={`p-10 rounded-[3rem] border ${
      highlight 
        ? 'bg-on-surface border-transparent shadow-premium' 
        : 'bg-white border-outline-variant hover:border-police-gold/30 shadow-ambient'
    } transition-all duration-500 flex flex-col h-full group`}
  >
    <div className={`w-16 h-16 rounded-[1.25rem] flex items-center justify-center mb-10 transition-transform group-hover:scale-110 ${
      highlight ? 'bg-police-gold text-on-surface' : 'bg-surface-low text-police-gold border border-outline-variant'
    }`}>
      <Icon className="w-8 h-8" />
    </div>
    
    <h3 className={`text-2xl font-black mb-4 uppercase tracking-tighter ${highlight ? 'text-white' : 'text-on-surface'}`}>{title}</h3>
    <p className={`mb-10 leading-relaxed font-semibold ${highlight ? 'text-white/60' : 'text-on-surface-variant'}`}>
      {description}
    </p>
    
    <div className="space-y-5 mb-12 flex-grow">
      {features.map((feature, i) => (
        <div key={i} className="flex gap-4 items-center">
          <CheckCircle2 className={`w-5 h-5 shrink-0 ${highlight ? 'text-police-gold' : 'text-on-surface/20'}`} />
          <span className={`text-[13px] font-black uppercase tracking-tight ${highlight ? 'text-white/80' : 'text-on-surface/70'}`}>{feature}</span>
        </div>
      ))}
    </div>
    
    <button className={`w-full py-5 rounded-2xl font-black text-[11px] uppercase tracking-[.2em] transition-all ${
      highlight 
        ? 'bg-police-gold text-on-surface shadow-lg hover:scale-[1.02]' 
        : 'bg-on-surface text-white hover:opacity-90'
    }`}>
      Solicitar Información
    </button>
  </motion.div>
);

const AcademyCorporate = () => {
  const tiers = [
    {
      title: "Solución Estándar",
      description: "Acceso puro a la plataforma Munilex Academy sin personalización externa. Ideal para centros que quieren empezar hoy.",
      icon: Cpu,
      features: [
        "Todas las herramientas de IA activas",
        "Soporte técnico 24/7",
        "Actualizaciones de contenido automáticas",
        "Gestión de alumnos básica"
      ]
    },
    {
      title: "Tu Propio Logo",
      description: "Integra la identidad de tu centro en el corazón de la plataforma. Refuerza tu marca frente al alumno.",
      icon: Building2,
      features: [
        "Inclusión de tu logotipo oficial",
        "Personalización de cabeceras en PDFs",
        "Acceso directo para tus alumnos",
        "Dashboard con tu marca"
      ]
    },
    {
      title: "Tu Branding Total",
      description: "Una experiencia inmersiva alineada con los colores y estilo de tu academia. Sensación de pertenencia total.",
      icon: Palette,
      highlight: true,
      features: [
        "Paleta de colores corporativa",
        "Tipografías personalizadas",
        "Logotipo y variantes de marca",
        "Certificados con tu diseño propio"
      ]
    },
    {
      title: "Solución a Medida",
      description: "Desarrollo de funcionalidades exclusivas y flujos de trabajo únicos. Tu visión, nuestra IA.",
      icon: Settings,
      features: [
        "Consultoría estratégica de IA",
        "Integración con tu CRM/LMS actual",
        "Funcionalidades de tutoría ad-hoc",
        "Soporte prioritario y personalizado"
      ]
    }
  ];

  const businessBenefits = [
    {
      title: "Optimización Docente",
      desc: "La IA resuelve las dudas recurrentes y mecánicas, permitiendo que tus docentes se centren en casos complejos y mentoría de alto nivel.",
      icon: Zap
    },
    {
      title: "Reducción de Soporte",
      desc: "El tutor inteligente 24/7 absorbe hasta el 85% de las dudas habituales de los alumnos, liberando tu soporte administrativo.",
      icon: Target
    },
    {
      title: "Engagement Superior",
      desc: "Al tener una herramienta disponible en cualquier momento, el alumno estudia más horas y aumenta su sensación de valor recibido.",
      icon: Sparkles
    }
  ];

  return (
    <div className="bg-surface text-on-surface font-inter overflow-hidden selection:bg-police-gold/20 selection:text-on-surface">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-police-gold/5 rounded-full blur-[120px] -mr-64 -mt-32" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-on-surface/5 rounded-full blur-[120px] -ml-64 -mb-32" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white border border-outline-variant text-on-surface text-[10px] font-black uppercase tracking-[0.3em] mb-12 shadow-ambient"
          >
            <Sparkles className="w-3.5 h-3.5 text-police-gold" />
            Lleva tu academia al siguiente nivel
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-[7rem] font-black tracking-tighter mb-12 leading-[0.9] max-w-5xl mx-auto uppercase"
          >
            La IA que hace a tu academia <span className="text-police-gold underline decoration-outline-variant underline-offset-8">invencible</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-3xl text-on-surface-variant max-w-3xl mx-auto mb-16 font-semibold leading-relaxed"
          >
            Digitaliza tu academia con el ecosistema de IA líder. Digitaliza tu centro con tecnología de vanguardia y escala tu éxito hacia el <strong>Next Level</strong>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <Link to="/academy/contacto" className="bg-on-surface text-white px-12 py-6 rounded-2xl font-black text-xs uppercase tracking-[.25em] shadow-premium hover:scale-[1.02] transition-all">
              Consultar Soluciones
            </Link>
            <a href="#tiers" className="bg-white border border-outline-variant px-12 py-6 rounded-2xl font-black text-xs uppercase tracking-[.25em] hover:bg-surface-low transition-all shadow-ambient">
              Ver Niveles
            </a>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-6 border-y border-outline-variant bg-white shadow-ambient relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {businessBenefits.map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className="w-20 h-20 bg-surface-low border border-outline-variant rounded-[1.5rem] flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-police-gold transition-all duration-500 shadow-sm">
                  <item.icon className="w-8 h-8 text-police-gold group-hover:text-on-surface transition-colors" />
                </div>
                <h4 className="text-xl font-black uppercase tracking-tight mb-4 text-on-surface">{item.title}</h4>
                <p className="text-on-surface-variant font-semibold leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Level Value Proposition */}
      <section className="py-40 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-24 relative z-10">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[10px] font-black uppercase tracking-[0.4em] text-police-gold mb-8"
            >
              MUNILEX CORPORATE ECOSYSTEM
            </motion.div>
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-10 leading-[0.95] uppercase">
              Llevando tu academia al <span className="text-on-surface/20">Siguiente Nivel</span>
            </h2>
            <div className="space-y-8">
              {[
                { title: "Escalabilidad Exponencial", text: "Multiplica tu capacidad de alumnos sin aumentar tus costes de personal. Nuestra IA absorbe la carga operativa mecánica." },
                { title: "Prestigio Tecnológico", text: "Posiciónate como el centro más avanzado de tu sector. Ofrece herramientas de estudio que la competencia no puede replicar." },
                { title: "Analítica Predictiva", text: "Adelántate a los resultados de tus alumnos. Detecta debilidades antes de los exámenes oficiales." }
              ].map((point, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="w-2 h-2 bg-police-gold rounded-full mt-3 shrink-0 group-hover:scale-150 transition-transform" />
                  <div>
                    <h4 className="text-2xl font-black uppercase tracking-tight mb-2 group-hover:text-police-gold transition-colors">{point.title}</h4>
                    <p className="text-on-surface-variant font-semibold leading-loose">{point.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16"
            >
              <Link 
                to="/academy/contacto" 
                className="inline-flex items-center gap-4 px-10 py-5 bg-on-surface text-white font-black rounded-2xl hover:opacity-90 transition-all group uppercase tracking-[.2em] text-[10px] shadow-premium"
              >
                Solicitar Consultoría
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
          <div className="flex-1 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative p-3 bg-white border border-outline-variant shadow-premium rounded-[4rem] overflow-hidden group"
            >
              <img 
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1000" 
                alt="High-tech classroom" 
                className="rounded-[3.5rem] grayscale hover:grayscale-0 transition-all duration-1000 hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 p-12 bg-gradient-to-t from-on-surface via-on-surface/80 to-transparent">
                <div className="text-police-gold font-black text-4xl mb-3 tracking-tighter uppercase">EFICIENCIA +90%</div>
                <p className="text-[11px] text-white/60 font-black uppercase tracking-widest">Automatización de contenidos y tutoría proactiva.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tiers Section */}
      <section id="tiers" className="py-40 px-6 bg-surface-low border-y border-outline-variant shadow-inner">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-28">
            <h2 className="text-4xl md:text-[5rem] font-black tracking-tighter mb-8 uppercase leading-[0.9]">Niveles de <span className="text-police-gold">Integración</span></h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto text-xl font-semibold leading-relaxed">
              Elige el nivel de personalización que mejor se adapte a la identidad y necesidades de tu centro educativo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {tiers.map((tier, i) => (
              <TierCard key={i} {...tier} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-40 px-6 relative">
        <div className="max-w-6xl mx-auto bg-on-surface rounded-[5rem] p-16 md:p-32 text-center relative overflow-hidden shadow-premium">
          <div className="absolute top-0 right-0 w-full h-full bg-police-gold/[0.03] pointer-events-none" />
          
          <h2 className="text-4xl md:text-[5.5rem] font-black tracking-tighter mb-10 text-white leading-[0.9] uppercase">¿Listo para ser <span className="text-police-gold">invencible</span>?</h2>
          <p className="text-white/60 text-xl font-semibold mb-16 max-w-2xl mx-auto leading-relaxed">
            Únete a la red de centros que ya están transformando la preparación de oposiciones con Munilex Corporate.
          </p>
          
          <Link to="/academy/contacto" className="inline-flex items-center gap-4 bg-police-gold text-on-surface px-12 py-6 rounded-2xl font-black text-xs uppercase tracking-[.25em] hover:scale-[1.02] shadow-xl transition-all">
            Solicitar Demo Gratuita
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AcademyCorporate;
