import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  ArrowRight,
  FileCheck,
  ExternalLink,
  Layers,
  FileSearch,
  CircleUser,
  CheckSquare,
  Landmark
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Funcionarios = () => {
  const comparisonData = {
    prompt: "¿Cómo proceder si un informe técnico es desfavorable por interpretación en una licencia de obra mayor?",
    chatgpt: {
      title: "ChatGPT",
      status: "Respuesta Genérica",
      content: [
        "El informe técnico es preceptivo pero no vinculante (salvo norma).",
        "La licencia es un acto reglado: si cumple el plan, se debe otorgar.",
        "El Ayuntamiento puede motivar su propia interpretación normativa.",
        "Solicitar informes jurídicos refuerza la seguridad de la decisión.",
        "Advertencia: Denegar sin base sólida conlleva riesgo de anulación."
      ]
    },
    munilex: {
      title: "MuniLex",
      status: "Estrategia Jurídica Blindada",
      steps: [
        {
          title: "1. Extracción e Interrogación",
          desc: "Identificación de plazos LOTUS/LPAC, informes sectoriales existentes y punto exacto de discrepancia técnica.",
          icon: <FileSearch className="w-5 h-5" />
        },
        {
          title: "2. Lógica Legislativa",
          desc: "Análisis de jerarquía (arts. 80-88 LPAC y LOTUS) y verificación de efectos del silencio administrativo regional.",
          icon: <Layers className="w-5 h-5" />
        },
        {
          title: "3. Redacción Técnica",
          desc: "Generación de la motivación jurídica sistemática basada en la literalidad del plan y la naturaleza reglada del acto.",
          icon: <CheckSquare className="w-5 h-5" />
        },
        {
          title: "4. Generación de Documentos",
          desc: "Emisión de informe jurídico de interpretación y propuesta de resolución motivada lista para firma.",
          icon: <FileCheck className="w-5 h-5" />
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-white font-inter selection:bg-blue-100 selection:text-blue-900">
      <Helmet>
        <title>MuniLex Función Pública | IA Jurídica Corporativa</title>
        <meta name="description" content="IA con rigor institucional para la Administración Local. Redacción automatizada y cumplimiento normativo." />
      </Helmet>

      {/* Hero Section - Balanced Typography */}
      <section className="relative pt-60 pb-40 px-6 md:px-8 overflow-hidden bg-white">
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#002B5B 0.5px, transparent 0.5px)', backgroundSize: '20px 20px' }} />
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
           <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#002B5B] font-black uppercase tracking-[0.4em] text-[9px] mb-8 block opacity-40"
          >
            MuniLex Función Pública
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-7xl md:text-8xl lg:text-9xl font-black text-[#002B5B] leading-[0.85] tracking-tighter mb-14 uppercase"
          >
            Soluciones <br/>
            <span className="italic text-[#0066FF]">a Medida</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-[#002B5B]/50 max-w-2xl mx-auto leading-relaxed font-semibold mb-20"
          >
            Automatización técnica y rigor institucional para secretarios e interventores.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <a href="https://munilex.lovable.app/auth/register" className="bg-[#002B5B] text-white py-6 px-16 rounded-2xl font-black uppercase tracking-widest text-xs shadow-2xl hover:bg-[#001D3D] transition-all">
              Probar herramienta
            </a>
            <Link to="/contacto" className="bg-white border-2 border-[#002B5B] text-[#002B5B] py-6 px-16 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-[#001D3D] hover:text-white hover:border-[#001D3D] transition-all flex items-center justify-center">
              Solicitar Presupuesto y Demo
            </Link>
          </motion.div>
        </div>
      </section>

      {/* The AI Flow Duel Section - Excellence vs Generalism */}
      <section className="py-40 px-6 md:px-8 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
             <h3 className="text-[#002B5B] font-black uppercase tracking-[0.4em] text-[10px] mb-6 block opacity-40">
              Generalismo vs Excelencia
            </h3>
            <h2 className="text-4xl md:text-7xl font-black text-[#002B5B] uppercase tracking-tighter leading-[0.9]">
              El Flujo <span className="text-[#0066FF] italic">Institucional</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-stretch">
            {/* ChatGPT Side */}
            <div className="bg-white border border-slate-100 rounded-[3.5rem] p-12 shadow-sm flex flex-col">
              <div className="flex items-center gap-4 mb-14">
                <div className="w-12 h-12 rounded-2xl overflow-hidden shadow-sm">
                  <img src="/assets/chatgpt-logo.webp" alt="ChatGPT Logo" className="w-full h-full object-cover" />
                </div>
                <h4 className="font-black text-xs uppercase tracking-widest text-black">ChatGPT</h4>
              </div>
              
              <div className="space-y-8 flex-grow">
                <div className="bg-slate-50 border border-slate-100 p-8 rounded-3xl text-slate-400 italic text-sm font-semibold">
                  "{comparisonData.prompt}"
                </div>
                <div className="space-y-6 px-4">
                  {comparisonData.chatgpt.content.map((item, i) => (
                    <div key={i} className="flex gap-5 items-start opacity-40">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2.5 flex-shrink-0" />
                      <p className="text-slate-500 font-bold text-sm leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Munilex Side */}
            <div className="bg-white border-2 border-[#002B5B]/5 rounded-[3.5rem] p-12 shadow-[0_40px_100px_rgba(0,43,91,0.05)] relative overflow-hidden">
               <div className="flex items-center gap-4 mb-14">
                <div className="w-12 h-12 rounded-2xl overflow-hidden shadow-sm">
                  <img src="/assets/munilex-logo.png" alt="MuniLex Logo" className="w-full h-full object-cover" />
                </div>
                <h4 className="font-black text-xs uppercase tracking-widest text-[#002B5B]">MuniLex</h4>
              </div>

              <div className="space-y-10">
                <div className="bg-[#002B5B] p-8 rounded-3xl text-white text-sm font-black shadow-xl">
                  "{comparisonData.prompt}"
                </div>
                
                <div className="space-y-10 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-[2px] before:bg-slate-100">
                  {comparisonData.munilex.steps.map((step, i) => (
                    <div key={i} className="flex gap-8 items-start relative z-10">
                      <div className="w-6 h-6 rounded-lg bg-[#002B5B] text-white flex items-center justify-center flex-shrink-0 shadow-lg group">
                        {step.icon}
                      </div>
                      <div>
                        <h5 className="text-[10px] font-black uppercase tracking-widest text-[#0066FF] mb-1.5">{step.title}</h5>
                        <p className="text-[#002B5B] font-bold text-sm leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-14 pt-10 border-t border-slate-100 flex justify-between items-center text-emerald-600">
                <div className="flex items-center gap-3">
                   <div className="w-5 h-5 bg-emerald-50 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em]">Paso 4 Completado</span>
                </div>
                <div className="text-[10px] font-black text-[#002B5B] opacity-20 tracking-widest uppercase">
                  Excelencia Técnica
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pilares de Mando - Versión Técnica en Castellano */}
      <section className="py-60 px-6 md:px-8 bg-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-32">
             <h2 className="text-6xl md:text-8xl font-black text-[#002B5B] uppercase tracking-tighter leading-[0.85]">
              Descubre los pilares <br/>
              <span className="italic text-[#0066FF]">de nuestro funcionamiento</span>
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 h-[700px] lg:h-[600px] group/container">
            {[
              { 
                num: "01", 
                title: "Motor Administrativo", 
                tag: "GESTIÓN INTEGRAL", 
                desc: "Análisis de expedientes en cualquier rama: Contratación, Urbanismo, Fiscal y Tributario.",
                stats: ["Análisis de Expedientes", "Gestión de Opciones", "Contratación y Urbanismo"],
                log: ["> Analizando expediente local...", "> Identificando rama del derecho...", "> Generando opciones de resolución."]
              },
              { 
                num: "02", 
                title: "Notificaciones", 
                tag: "ALERTAS TÉCNICAS", 
                desc: "Gestión inteligente de plazos y silencio administrativo en tiempo real.",
                stats: ["Integración Telegram", "Notificaciones App", "Plantillas de Email"],
                log: ["> Monitorizando plazos...", "> Aviso enviado vía Telegram...", "> Alerta en App MuniLex."]
              },
              { 
                num: "03", 
                title: "Inteligencia Legal", 
                tag: "SOPORTE NORMATIVO", 
                desc: "Entrenada en normativa Estatal y Autonómica para un blindaje jurídico sólido.",
                stats: ["Normativa Estatal", "Legislación Autonómica", "Rigor Administrativo"],
                log: ["> Aplicando legislación vigente...", "> Verificando marco normativo...", "> Blindaje jurídico completado."]
              },
              { 
                num: "04", 
                title: "Derecho Local", 
                tag: "ÁMBITO MUNICIPAL", 
                desc: "Soporte técnico-juridico especializado en todas las áreas de la Administración Local.",
                stats: ["Laboral y Civil", "Asesoramiento Local", "Resolución de Consultas"],
                log: ["> Procesando consulta...", "> Revisando precedente local...", "> Respuesta técnica lista."]
              }
            ].map((pillar, i) => (
              <motion.div 
                key={i}
                whileHover={{ flex: 2.5 }}
                className="flex-1 bg-white border border-slate-100 rounded-[3rem] p-10 flex flex-col justify-between relative overflow-hidden transition-all duration-700 hover:shadow-2xl hover:border-[#d4af37]/30 group"
              >
                {/* Fondo Digital */}
                <div className="absolute -right-10 -bottom-10 text-[18rem] font-black text-[#002B5B]/[0.02] leading-none pointer-events-none group-hover:text-[#0066FF]/[0.05] transition-colors">
                  {pillar.num}
                </div>

                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-12">
                     <span className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-xl font-black text-[#002B5B] group-hover:bg-[#002B5B] group-hover:text-white transition-all">
                      {pillar.num}
                    </span>
                    <span className="text-[10px] font-black text-[#d4af37] uppercase tracking-[0.3em]">{pillar.tag}</span>
                  </div>

                  <h4 className="text-4xl font-black text-[#002B5B] uppercase tracking-tighter mb-6 transition-all group-hover:text-[#0066FF]">
                    {pillar.title}
                  </h4>
                  <p className="text-[#002B5B]/50 font-bold text-sm leading-relaxed max-w-[250px] opacity-0 group-hover:opacity-100 transition-opacity delay-200">
                    {pillar.desc}
                  </p>
                </div>

                {/* Contenido Técnico al hacer Hover */}
                <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-700 delay-300 overflow-hidden">
                  <div className="grid grid-cols-1 gap-6 mt-8 border-t border-slate-50 pt-8">
                     <div className="space-y-3">
                      {pillar.stats.map((s, idx) => (
                        <div key={idx} className="flex justify-between items-center py-2">
                          <span className="text-[9px] font-black text-[#0066FF] uppercase tracking-widest">• {s}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="p-6 bg-slate-50 rounded-2xl font-mono text-[9px] text-[#002B5B]/60 space-y-1 border border-slate-100">
                      {pillar.log.map((line, idx) => (
                        <div key={idx}>{line}</div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-12 flex items-center gap-4 text-[10px] font-black text-[#002B5B] uppercase tracking-widest opacity-20 group-hover:opacity-100 transition-all">
                  <div className="w-8 h-[2px] bg-[#d4af37]" />
                  Módulo Operativo
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparativa: Antes vs Después de MuniLex */}
      <section className="py-40 px-6 md:px-8 bg-white border-t border-slate-50 overflow-hidden relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-32">
            <h2 className="text-5xl md:text-8xl font-black uppercase leading-[0.85] tracking-tighter text-[#002B5B]">
              La Transformación <br/>
              <span className="text-[#0066FF] italic">del Funcionario</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            {/* Antes de MuniLex */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-12 rounded-[3.5rem] bg-slate-50/50 border border-slate-100 flex flex-col"
            >
              <div className="flex items-center gap-4 mb-12">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">EL PASADO</span>
                <div className="h-[1px] flex-grow bg-slate-100" />
              </div>
              <h3 className="text-3xl font-black text-slate-400 mb-10 tracking-tighter uppercase">Sin MuniLex</h3>
              
              <div className="space-y-10 flex-grow">
                 {[
                  { t: "Búsqueda Manual Exhaustiva", d: "Horas navegando en el BOE, bases de datos como EsPúblico y documentos PDF dispersos." },
                  { t: "Riesgo de Error de Forma", d: "Redacción manual desde cero con la presión de cumplir plazos y el riesgo de omitir jurisprudencia reciente." },
                  { t: "Investigación Fragmentada", d: "Dificultad para conectar normativas estatales, autonómicas y locales de forma coherente y rápida." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 opacity-60">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-black text-slate-400 mb-2 tracking-tight uppercase">{item.t}</h4>
                      <p className="text-slate-400 font-bold text-sm leading-relaxed">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Con MuniLex */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-12 rounded-[3.5rem] bg-[#002B5B] text-white shadow-3xl flex flex-col relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#0066FF]/10 rounded-full blur-[100px] -translate-y-32 translate-x-32" />
              
              <div className="flex items-center gap-4 mb-12 relative z-10">
                <span className="text-[10px] font-black text-[#0066FF] uppercase tracking-[0.4em]">EL PRESENTE</span>
                <div className="h-[1px] flex-grow bg-white/5" />
              </div>
              <h3 className="text-3xl font-black text-white mb-10 tracking-tighter uppercase relative z-10">Con MuniLex</h3>

              <div className="space-y-10 flex-grow relative z-10">
                {[
                  { t: "IA Legislativa Conectada", d: "Conexión directa y en tiempo real con toda la base normativa vigente para una precisión absoluta." },
                  { t: "Blindaje Institucional", d: "Aplica tu criterio experto de funcionario potenciado por una IA que audita cada resolución." },
                  { t: "Eficiencia Radical", d: "Preparación de informes técnicos y propuestas de resolución en minutos, no en horas." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="mt-1">
                      <CheckCircle className="w-6 h-6 text-[#0066FF] transition-transform group-hover:scale-110" />
                    </div>
                    <div>
                      <h4 className="text-lg font-black text-white mb-2 tracking-tight uppercase transition-colors group-hover:text-[#0066FF]">{item.t}</h4>
                      <p className="text-white/60 font-bold text-sm leading-relaxed">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-14 pt-10 border-t border-white/5 flex justify-between items-center relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#0066FF]">Soporte Activo</span>
                </div>
                <div className="text-[10px] font-black text-white opacity-20 tracking-widest uppercase">
                  MuniLex Función Pública
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Final - Rediseñado como recuadros premium */}
      <section className="py-60 px-6 bg-white border-t border-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            whileInView={{ opacity: [0, 1], y: [20, 0] }}
            className="text-6xl md:text-9xl font-black text-[#002B5B] uppercase tracking-tighter mb-24 text-center leading-[0.9]"
          >
            Tu municipio, blindado <br/>
            <span className="italic text-[#0066FF]">a un solo clic.</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Box 1: Funcionarios */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-slate-100 p-12 rounded-[3.5rem] shadow-ambient hover:shadow-premium transition-all group flex flex-col items-start text-left"
            >
              <div className="w-16 h-16 bg-[#F0F7FF] rounded-2xl flex items-center justify-center text-[#0066FF] mb-10 group-hover:scale-110 transition-transform">
                <CircleUser className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-black text-[#002B5B] mb-6 tracking-tighter uppercase">
                ¿Eres <span className="text-[#0066FF]">funcionario?</span>
              </h3>
              <p className="text-[#002B5B]/50 font-bold text-base leading-relaxed mb-10">
                Prueba la herramienta que está revolucionando la gestión administrativa local. Acceso instantáneo.
              </p>
              <a 
                href="https://munilex.lovable.app/auth/register" 
                className="w-full bg-[#002B5B] text-white py-6 px-8 rounded-2xl font-black uppercase tracking-widest text-[11px] shadow-2xl hover:bg-[#001D3D] transition-all flex items-center justify-center gap-4"
              >
                Probar herramienta
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>

            {/* Box 2: Ayuntamientos */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#002B5B] border border-white/5 p-12 rounded-[3.5rem] shadow-premium hover:shadow-2xl transition-all group flex flex-col items-start text-left relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -translate-y-12 translate-x-12" />
              
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-white mb-10 group-hover:scale-110 transition-transform relative z-10">
                <Landmark className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-black text-white mb-6 tracking-tighter uppercase relative z-10">
                Instala MuniLex en <span className="text-[#0066FF]">tu ayuntamiento</span>
              </h3>
              <p className="text-white/50 font-bold text-base leading-relaxed mb-10 relative z-10">
                Lleva la eficiencia y el blindaje normativo a toda tu administración local. Solicita información corporativa.
              </p>
              <Link to="/contacto" className="w-full bg-white text-[#002B5B] py-6 px-8 rounded-2xl font-black uppercase tracking-widest text-[11px] shadow-2xl hover:bg-slate-50 transition-all flex items-center justify-center gap-4 relative z-10">
                Solicitar presupuesto y demo
                <ExternalLink className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Funcionarios;
