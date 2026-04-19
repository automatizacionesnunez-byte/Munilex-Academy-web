import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ShieldCheck, Zap, Building2, Layers, Cpu, Globe, ArrowRight, CheckCircle, BarChart3, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

const AcademyCorporate = () => {
  const features = [
    {
      title: "Personalización White Label",
      desc: "Tu propia plataforma con tu logo, colores y branding. La IA de MuniLex integrada de forma invisible.",
      icon: <Layers className="w-6 h-6" />
    },
    {
      title: "Generación de Contenidos",
      desc: "Crea temarios, actividades y material didáctico en segundos utilizando nuestros algoritmos de IA.",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Ecosistemas de Aprendizaje",
      desc: "Conecta a tus alumnos, profesores y administradores en un entorno digital inteligente.",
      icon: <Building2 className="w-6 h-6" />
    },
    {
      title: "Agentes de IA 24/7",
      desc: "Tutores expertos disponibles en todo momento para resolver dudas de tus alumnos.",
      icon: <Cpu className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-[#131313] text-[#E5E2E1] font-inter selection:bg-[#d4af37]/30 selection:text-white">
      <Helmet>
        <title>Munilex Academy Corporate | Transformación Digital para Academias</title>
        <meta name="description" content="Lleva tu academia o centro educativo al siguiente nivel con la integración de Inteligencia Artificial de MuniLex." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 md:pt-60 md:pb-40 px-6 md:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#d4af37 0.5px, transparent 0.5px)', backgroundSize: '30px 30px' }} />
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-[#d4af37]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.85] tracking-tighter mb-10 uppercase">
              REDISEÑA TU <br/>
              <span className="italic text-[#d4af37]">ACADEMIA CON IA</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/50 max-w-3xl mx-auto leading-relaxed font-semibold">
              Ecosistemas educativos inteligentes para centros que buscan la excelencia operativa y tecnológica.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, i) => (
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

      {/* Corporate Pricing Plans */}
      <section className="py-24 bg-[#131313] relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter uppercase mb-6">
              PLANES DE <br/>
              <span className="italic text-[#d4af37]">ADAPTACIÓN</span>
            </h2>
            <p className="text-white/40 font-bold text-sm uppercase tracking-widest">Escalabilidad total para tu centro</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Iniciación",
                desc: "Integración del ecosistema Munilex básico sin personalización de marca.",
                features: ["IA Generativa", "Tutoría 24/7", "Syllabus Dinámico"],
                price: "Consultar"
              },
              {
                name: "Marca",
                desc: "Integración de logo corporativo y personalización básica del entorno.",
                features: ["Branding (Logo)", "Dashboard Personalizado", "Soporte Prioritario"],
                price: "Consultar",
                highlight: true
              },
              {
                name: "Identidad",
                desc: "Branding corporativo completo (colores, tipografía y logo) para una experiencia inmersiva.",
                features: ["Colores Corporativos", "Dominio Propio", "Analítica Avanzada"],
                price: "Consultar"
              },
              {
                name: "Ecosistema",
                desc: "Desarrollo de aplicación web personalizada e integración total bajo demanda.",
                features: ["App Web Propia", "Integración API Total", "Soporte 1:1 Dedicado"],
                price: "Consultar"
              }
            ].map((plan, i) => (
              <div 
                key={i} 
                className={`p-10 rounded-[2.5rem] flex flex-col justify-between transition-all border ${
                  plan.highlight 
                    ? 'bg-[#1C1B1B] border-[#d4af37]/40 shadow-2xl shadow-[#d4af37]/5 scale-105 relative z-10' 
                    : 'bg-[#0E0E0E] border-white/5 hover:border-white/10'
                }`}
              >
                <div>
                  <h4 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter">{plan.name}</h4>
                  <p className="text-white/40 text-xs font-bold leading-relaxed mb-8">{plan.desc}</p>
                  <ul className="space-y-4 mb-10">
                    {plan.features.map((f, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-[10px] font-black text-white/70 uppercase tracking-widest">
                        <CheckCircle className="w-3.5 h-3.5 text-[#d4af37]" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="text-lg font-black text-white mb-6">{plan.price}</div>
                  <Link 
                    to="/contacto" 
                    className={`w-full py-4 rounded-xl font-black uppercase tracking-widest text-[9px] flex items-center justify-center gap-2 transition-all ${
                      plan.highlight 
                        ? 'bg-[#d4af37] text-black shadow-xl' 
                        : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                    }`}
                  >
                    Elegir Plan
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Value Props */}
      <section className="py-40 bg-[#0E0E0E]">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter mb-8 uppercase">
                TU MARCA, NUESTRA <br/>
                 <span className="italic text-[#d4af37]">TECNOLOGÍA</span>
              </h2>
              <ul className="space-y-6">
                {[
                  "Planes adaptados al volumen de alumnos",
                  "Soporte técnico especializado 1:1",
                  "Integración vía API con tus sistemas actuales",
                  "Privacidad y seguridad de datos garantizada"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-white/70 font-bold">
                    <CheckCircle className="w-5 h-5 text-[#d4af37]" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/contacto" className="inline-flex items-center gap-3 px-10 py-5 bg-[#d4af37] text-black font-black uppercase tracking-widest text-[11px] rounded-xl mt-12 hover:scale-105 transition-all shadow-xl shadow-[#d4af37]/10">
                Solicitar Auditoría <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="bg-[#1C1B1B] rounded-[3.5rem] p-6 border border-white/5 shadow-2xl relative overflow-hidden group">
               <div className="absolute -inset-4 bg-[#d4af37]/5 blur-3xl rounded-[4rem] -z-10 group-hover:bg-[#d4af37]/10 transition-colors" />
               
               {/* Mockup de Dashboard Realista con CSS */}
               <div className="bg-[#131313] rounded-[2.5rem] p-8 aspect-video border border-white/10 flex flex-col gap-6 overflow-hidden relative">
                  {/* Navbar del mockup */}
                  <div className="flex justify-between items-center pb-4 border-b border-white/5">
                    <div className="flex gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/30" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/30" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/30" />
                    </div>
                    <div className="text-[8px] font-black text-white/20 uppercase tracking-widest">Dashboard de Academia</div>
                  </div>

                  <div className="grid grid-cols-12 gap-6 flex-grow">
                    <div className="col-span-3 space-y-3">
                      <div className="h-4 bg-white/5 rounded-lg w-full" />
                      <div className="h-4 bg-[#d4af37]/10 rounded-lg w-[80%]" />
                      <div className="h-4 bg-white/5 rounded-lg w-full" />
                      <div className="h-4 bg-white/5 rounded-lg w-[60%]" />
                    </div>
                    <div className="col-span-9 bg-white/[0.02] border border-white/5 rounded-3xl p-6 flex items-center justify-center">
                       <div className="text-center">
                          <BarChart3 className="w-10 h-10 text-[#d4af37] mb-4 opacity-50" />
                          <div className="h-2 bg-white/5 rounded-full w-32 mx-auto" />
                       </div>
                    </div>
                  </div>

                  <div className="absolute bottom-[-10px] left-0 right-0 h-20 bg-gradient-to-t from-[#131313] to-transparent" />
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AcademyCorporate;
