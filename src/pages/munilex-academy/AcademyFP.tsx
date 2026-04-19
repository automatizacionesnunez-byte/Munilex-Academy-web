import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FileSearch, CheckSquare, Layers, ArrowRight, CheckCircle, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';

const AcademyFP = () => {
  const steps = [
    {
      title: "Generador de Exámenes",
      desc: "Crea exámenes tipo test y prácticos alineados con los módulos de FP de forma automática.",
      icon: <CheckSquare className="w-6 h-6" />
    },
    {
      title: "Revisión de Casos",
      desc: "Sistema inteligente para auditar y corregir supuestos prácticos con criterios oficiales.",
      icon: <FileSearch className="w-6 h-6" />
    },
    {
      title: "Material Didáctico IA",
      desc: "Transformamos tus contenidos en experiencias de aprendizaje dinámicas y optimizadas.",
      icon: <Layers className="w-6 h-6" />
    },
    {
      title: "Tutoría Especializada",
      desc: "IA entrenada específicamente en los módulos técnicos de la Formación Profesional.",
      icon: <Smartphone className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-[#131313] text-[#E5E2E1] font-inter selection:bg-[#d4af37]/30 selection:text-white">
      <Helmet>
        <title>Munilex Academy FP | Excelencia Técnica en Formación Profesional</title>
        <meta name="description" content="Digitalización avanzada y soporte de IA para centros de Formación Profesional. Revoluciona la forma de enseñar y evaluar." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 md:pt-60 md:pb-40 px-6 md:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#d4af37 0.5px, transparent 0.5px)', backgroundSize: '30px 30px' }} />
        <div className="absolute top-1/2 -left-40 w-[600px] h-[600px] bg-[#d4af37]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.85] tracking-tighter mb-10 uppercase">
               EL SIGUIENTE NIVEL <br/>
               <span className="italic text-[#d4af37]">DE LA FP CON IA</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/50 max-w-3xl mx-auto leading-relaxed font-semibold">
               Excelencia operativa y rigor técnico para centros de Formación Profesional especializados.
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

      {/* FP Specific Section */}
      <section className="py-24 bg-[#0E0E0E]">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="bg-[#1C1B1B] border border-white/5 p-16 rounded-[4rem] relative overflow-hidden">
             <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-[100px] -translate-y-20 translate-x-20" />
             
             <div className="relative z-10">
                <h2 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter mb-10 uppercase">
                   OPTIMIZACIÓN <br/>
                   <span className="italic text-[#d4af37]">ACADÉMICA</span>
                </h2>
                <div className="grid md:grid-cols-2 gap-12">
                   <div className="space-y-6">
                      {[
                        "Automatización de revisiones y calificaciones",
                        "Generación de supuestos prácticos técnicos",
                        "Adaptación al currículo oficial de cada módulo",
                        "Soporte para ciclos de Grado Medio y Superior"
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-4 text-white/70 font-bold">
                           <CheckCircle className="w-5 h-5 text-[#d4af37]" />
                           {item}
                        </div>
                      ))}
                   </div>
                   <div className="flex flex-col justify-end">
                      <Link to="/contacto" className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-black font-black uppercase tracking-widest text-[11px] rounded-xl hover:bg-slate-200 transition-all shadow-premium transition-transform hover:scale-105">
                         Solicitar Presupuesto Especializado <ArrowRight className="w-4 h-4" />
                      </Link>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AcademyFP;
