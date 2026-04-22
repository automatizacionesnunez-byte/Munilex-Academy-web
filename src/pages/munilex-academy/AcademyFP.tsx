import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  CheckSquare, 
  Layers, 
  ArrowRight, 
  CheckCircle, 
  Smartphone,
  Users,
  MessageSquare,
  Zap,
  GraduationCap
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { getAcademyPath } from '../../config/domainConfig';

const AcademyFP = () => {
  const steps = [
    {
      title: "Módulos Oficiales",
      desc: "Integración total con el currículo oficial de FP Básica, Grado Medio y Superior.",
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      title: "Generación de Exámenes",
      desc: "Crea exámenes tipo test y prácticos alineados con los objetivos de cada módulo.",
      icon: <CheckSquare className="w-6 h-6" />
    },
    {
      title: "Material Didáctico IA",
      desc: "Soporte avanzado en la creación de textos didácticos y actividades dinámicas.",
      icon: <Layers className="w-6 h-6" />
    },
    {
      title: "IA Especializada",
      desc: "Algoritmos entrenados específicamente en los módulos técnicos de cada familia.",
      icon: <Smartphone className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-[#131313] text-[#E5E2E1] font-inter selection:bg-[#d4af37]/30 selection:text-white">
      <Helmet>
        <title>Formación Profesional | Soluciones IA para Centros FP | Munilex Academy</title>
        <meta name="description" content="Digitalización avanzada para módulos de FP Básica, Grado Medio y Superior. Roleplay interactivo, tutorización activa y creación de material con IA." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 md:pt-60 md:pb-40 px-6 md:px-8 overflow-hidden bg-[#0E0E0E]">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#d4af37 0.5px, transparent 0.5px)', backgroundSize: '30px 30px' }} />
        <div className="absolute top-1/2 -left-40 w-[600px] h-[600px] bg-[#d4af37]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <div className="text-[#d4af37] font-black uppercase tracking-[0.4em] text-[10px] mb-8 block">Innovación en FP</div>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-[0.85] tracking-tighter mb-10 uppercase">
               LA FP DEL <br/>
               <span className="italic text-[#d4af37]">FUTURO CON IA</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/50 max-w-3xl mx-auto leading-relaxed font-semibold">
               Excelencia operativa y rigor técnico para centros de Formación Profesional especializados en todos los niveles.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#1C1B1B] border border-white/5 p-8 rounded-[2rem] hover:border-[#d4af37]/30 transition-all group"
              >
                <div className="w-12 h-12 bg-[#2A2A2A] rounded-xl flex items-center justify-center text-[#d4af37] mb-6 group-hover:bg-[#d4af37] group-hover:text-black transition-all">
                  {f.icon}
                </div>
                <h3 className="text-xl font-black text-white mb-4 uppercase tracking-tighter">{f.title}</h3>
                <p className="text-white/40 text-sm font-medium leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Features - Side by side layout */}
      <section className="py-40 bg-[#131313]">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="space-y-40">
            
            {/* Feature 1: Tutorización Activa */}
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <div className="w-16 h-16 bg-[#d4af37]/10 rounded-2xl flex items-center justify-center text-[#d4af37] mb-8">
                  <Zap className="w-8 h-8" />
                </div>
                <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-tight mb-8">
                   Tutorización <br/>
                   <span className="italic text-[#d4af37]">Activa 24/7</span>
                </h2>
                <p className="text-white/50 text-xl font-medium leading-relaxed mb-10">
                  Nuestra IA no solo responde dudas; guía proactivamente al alumno a través de los módulos de Grado Medio y Superior, identificando áreas de mejora y personalizando el material didáctico en tiempo real.
                </p>
                <Link to={getAcademyPath('/contacto')} className="inline-flex items-center gap-3 text-[#d4af37] font-black uppercase tracking-widest text-[11px] group">
                  Saber más <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
              <div className="bg-[#1C1B1B] rounded-[3.5rem] p-12 border border-white/5 relative overflow-hidden h-[400px] flex items-center justify-center">
                 <div className="absolute top-0 right-0 w-64 h-64 bg-[#d4af37]/5 blur-3xl rounded-full" />
                 <MessageSquare className="w-40 h-40 text-[#d4af37] opacity-10" />
                 <div className="absolute inset-0 flex flex-col justify-center px-12 gap-4">
                    <div className="bg-white/5 p-4 rounded-2xl border border-white/10 max-w-[80%] self-start">
                       <p className="text-xs text-white/40 italic font-medium">"¿Cómo aplico la normativa de riesgos laborales en el módulo de montaje?"</p>
                    </div>
                    <div className="bg-[#d4af37]/10 p-4 rounded-2xl border border-[#d4af37]/20 max-w-[80%] self-end">
                       <p className="text-xs text-[#d4af37] font-bold">"Según el currículo oficial, debes considerar los siguientes puntos clave..."</p>
                    </div>
                 </div>
              </div>
            </div>

            {/* Feature 2: Roleplay Profesional */}
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="order-2 lg:order-1 bg-[#1C1B1B] rounded-[3.5rem] p-12 border border-white/5 relative overflow-hidden h-[400px] flex items-center justify-center">
                 <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#d4af37]/5 blur-3xl rounded-full" />
                 <Users className="w-40 h-40 text-[#d4af37] opacity-10" />
                 <div className="relative z-10 text-center">
                    <div className="text-[#d4af37] font-black text-4xl mb-2">SCENARIO ACTIVO</div>
                    <div className="text-white/20 font-black text-[10px] tracking-[0.5em] uppercase text-center">SIMULACIÓN LABORAL</div>
                 </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="w-16 h-16 bg-[#d4af37]/10 rounded-2xl flex items-center justify-center text-[#d4af37] mb-8">
                  <Users className="w-8 h-8" />
                </div>
                <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-tight mb-8">
                   Roleplay <br/>
                   <span className="italic text-[#d4af37]">Interactiva</span>
                </h2>
                <p className="text-white/50 text-xl font-medium leading-relaxed mb-10">
                  Simula entornos laborales reales. La IA actúa como cliente, jefe o colega, permitiendo a los alumnos de FP Básica y Grados practicar habilidades blandas y técnicas en un entorno seguro y evaluable.
                </p>
                <Link to={getAcademyPath('/contacto')} className="inline-flex items-center gap-3 text-[#d4af37] font-black uppercase tracking-widest text-[11px] group">
                  Solicitar demo <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 bg-[#0E0E0E]">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="bg-[#1C1B1B] border border-white/5 p-16 rounded-[4rem] relative overflow-hidden">
             <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-[100px] -translate-y-20 translate-x-20" />
             
             <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-black text-white leading-tight tracking-tighter mb-10 uppercase text-center">
                   TU CENTRO, <br/>
                   <span className="italic text-[#d4af37]">EVALUADO AL DETALLE</span>
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
                   {[
                     "Soporte en creación de textos didácticos adaptados.",
                     "Automatización de revisiones y calificaciones.",
                     "Generación de supuestos prácticos técnicos.",
                     "Adaptación al currículo oficial de cada módulo.",
                     "Seguimiento analítico del progreso grupal.",
                     "Entorno seguro y privado para el centro."
                   ].map((item, i) => (
                     <div key={i} className="flex items-center gap-4 bg-white/5 p-6 rounded-2xl border border-white/5 hover:border-[#d4af37]/30 transition-all">
                        <CheckCircle className="w-5 h-5 text-[#d4af37] flex-shrink-0" />
                        <span className="text-xs font-bold text-white/70 uppercase tracking-tight">{item}</span>
                     </div>
                   ))}
                </div>
                <div className="text-center mt-20">
                   <Link to={getAcademyPath('/contacto')} className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#d4af37] text-black font-black uppercase tracking-widest text-[11px] rounded-xl hover:scale-105 transition-all shadow-xl shadow-[#d4af37]/20">
                      Digitalizar mi Centro FP <ArrowRight className="w-4 h-4" />
                   </Link>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AcademyFP;
