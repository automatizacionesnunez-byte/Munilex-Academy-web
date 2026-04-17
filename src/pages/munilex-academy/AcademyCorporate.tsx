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
    className={`p-8 rounded-[2.5rem] border ${
      highlight 
        ? 'bg-gradient-to-br from-[#241a00] to-black border-[#d4af37]/30 shadow-[0_20px_50px_rgba(212,175,55,0.1)]' 
        : 'bg-[#131313] border-[#353534] hover:border-white/20'
    } transition-all duration-500 flex flex-col h-full`}
  >
    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 ${
      highlight ? 'bg-[#d4af37] text-black' : 'bg-white/5 text-[#d4af37]'
    }`}>
      <Icon className="w-8 h-8" />
    </div>
    
    <h3 className="text-2xl font-black mb-4 tracking-tight">{title}</h3>
    <p className="text-white/50 mb-8 leading-relaxed font-medium">
      {description}
    </p>
    
    <div className="space-y-4 mb-10 flex-grow">
      {features.map((feature, i) => (
        <div key={i} className="flex items-start gap-3">
          <CheckCircle2 className={`w-5 h-5 mt-0.5 shrink-0 ${highlight ? 'text-[#d4af37]' : 'text-white/20'}`} />
          <span className="text-sm text-white/70 font-semibold leading-tight">{feature}</span>
        </div>
      ))}
    </div>
    
    <button className={`w-full py-4 rounded-xl font-bold text-sm uppercase tracking-widest transition-all ${
      highlight 
        ? 'bg-[#d4af37] text-black hover:bg-[#f2ca50] shadow-lg shadow-[#d4af37]/20' 
        : 'bg-white/5 text-white hover:bg-white/10'
    }`}>
      Solicitar Información
    </button>
  </motion.div>
);

const AcademyCorporate = () => {
  const tiers = [
    {
      title: "Solución Estándar",
      description: "Acceso puro a la plataforma Munilex Academy sin personalización externa.",
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
      description: "Integra la identidad de tu centro en el corazón de la plataforma.",
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
      description: "Una experiencia inmersiva alineada con los colores y estilo de tu academia.",
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
      description: "Desarrollo de funcionalidades exclusivas y flujos de trabajo únicos para tu centro.",
      icon: Settings,
      features: [
        "Consultoría estratégica de IA",
        "Integración con tu CRM/LMS actual",
        "Funcionalidades de tutoría ad-hoc",
        "Soporte prioritario y personalizado"
      ]
    }
  ];

  return (
    <div className="bg-black text-[#E5E2E1] font-inter overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary-cyan/10 rounded-full blur-[120px] -mr-64 -mt-32" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#d4af37]/10 rounded-full blur-[120px] -ml-64 -mb-32" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 border border-white/10 text-secondary-cyan text-[10px] font-black uppercase tracking-[0.3em] mb-8"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Empower your Education Center
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9] max-w-5xl mx-auto"
          >
            Transforma tu academia con <span className="text-[#d4af37]">IA de Élite</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-2xl text-white/50 max-w-2xl mx-auto mb-12 font-medium leading-relaxed"
          >
            No solo somos una plataforma; somos el motor de innovación que tu centro necesita para ofrecer una preparación imbatible.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <Link to="/academy/contacto" className="bg-white text-black px-10 py-5 rounded-2xl font-bold text-sm uppercase tracking-widest hover:scale-105 active:scale-95 transition-all">
              Consultar Soluciones
            </Link>
            <a href="#tiers" className="bg-white/5 border border-white/10 px-10 py-5 rounded-2xl font-bold text-sm uppercase tracking-widest hover:bg-white/10 transition-all">
              Ver Niveles
            </a>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-6 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                title: "Diferenciación Real", 
                desc: "Ofrece a tus alumnos herramientas de vanguardia que ninguna otra academia posee.",
                icon: Target 
              },
              { 
                title: "Eficiencia Operativa", 
                desc: "Automatiza la generación de materiales y guías de estudio, ahorrando horas a tus tutores.",
                icon: Zap 
              },
              { 
                title: "Control Total", 
                desc: "Gestiona el progreso de tus alumnos con analíticas detalladas impulsadas por IA.",
                icon: Settings 
              }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#d4af37]/20 transition-all duration-500">
                  <item.icon className="w-7 h-7 text-[#d4af37]" />
                </div>
                <h4 className="text-xl font-bold mb-4">{item.title}</h4>
                <p className="text-white/40 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tiers Section */}
      <section id="tiers" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">Niveles de Personalización</h2>
            <p className="text-white/40 max-w-2xl mx-auto text-lg font-medium">
              Elegir el nivel de integración que mejor se adapte a la identidad y necesidades de tu centro educativo.
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
      <section className="py-32 px-6 relative">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#131313] to-black border border-[#d4af37]/20 rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#d4af37]/10 blur-3xl rounded-full -mr-32 -mt-32" />
          
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-8 leading-none">¿Listo para llevar tu academia al <span className="text-[#d4af37]">siguiente nivel</span>?</h2>
          <p className="text-white/50 text-xl font-medium mb-12 max-w-2xl mx-auto">
            Únete a la red de centros que ya están transformando la preparación de oposiciones con Munilex Corporate.
          </p>
          
          <Link to="/academy/contacto" className="inline-flex items-center gap-3 bg-[#d4af37] text-black px-12 py-6 rounded-2xl font-black text-sm uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl shadow-[#d4af37]/20">
            Solicitar Demo Gratuita
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AcademyCorporate;
