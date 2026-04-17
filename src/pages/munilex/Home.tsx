import { motion } from 'framer-motion';
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
  Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Pricing from '../../components/Pricing';

const Home = () => {
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
            La Inteligencia que <span className="text-primary-container not-italic">revoluciona</span> tu presente y potencia tu futuro profesional
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
            <Link to="/servicios" className="group bg-secondary text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-premium border border-white/10 flex items-center gap-3">
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
                <div className="w-16 h-16 bg-primary-container/10 rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform text-primary-container font-black text-xl">
                  v3
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
                to="/servicios" 
                className="w-full py-5 bg-secondary text-white font-black text-xs uppercase tracking-widest rounded-2xl text-center hover:scale-[1.02] transition-all shadow-lg active:scale-95"
              >
                Potenciar mi Carrer Profesional
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
                   <Sparkles className="w-8 h-8 text-[#d4af37]" />
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

      {/* Sinergy Ecosystem Section (Replaces Features) */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="mb-24 text-center">
            <h2 className="text-4xl md:text-6xl font-black text-secondary tracking-tighter mb-6 uppercase">Un solo motor, <span className="text-primary-container">dos revoluciones</span></h2>
            <p className="text-xl text-on-surface-variant font-medium opacity-60">Tecnología soberana entrenada para dominar el marco legal español.</p>
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

      {/* Dual Success Stories */}
      <section className="py-32 bg-surface-low border-y border-outline-variant">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black text-secondary tracking-tighter mb-6 uppercase">Vanguardia <span className="text-primary-container">compartida</span></h2>
            <p className="text-xl text-on-surface-variant font-medium opacity-60">Lo que dicen quienes ya están en el siguiente nivel.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Success Card 1 */}
            <motion.div
              whileHover={{ y: -10 }}
              className="p-12 bg-white rounded-[3rem] shadow-ambient border border-outline-variant flex flex-col justify-between"
            >
              <p className="text-2xl text-secondary italic font-medium mb-12 leading-relaxed">
                "Como Secretaria de Ayuntamiento, Munilex ha sido un antes y un después. La precisión en la redacción de informes técnicos ha reducido mis tiempos de gestión a la mitad."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-primary-container rounded-full flex items-center justify-center text-white">
                  <UserCheck className="w-7 h-7" />
                </div>
                <div className="font-manrope text-left">
                  <div className="font-black text-secondary">E. García</div>
                  <div className="text-xs font-black uppercase tracking-widest text-primary-container">Habilitada Nacional</div>
                </div>
              </div>
            </motion.div>

            {/* Success Card 2 */}
            <motion.div
              whileHover={{ y: -10 }}
              className="p-12 bg-[#131313] rounded-[3rem] shadow-premium border border-[#d4af37]/20 flex flex-col justify-between text-white"
            >
              <p className="text-2xl text-white italic font-medium mb-12 leading-relaxed">
                "Conseguí mi plaza en Policía Nacional en tiempo récord. El sistema de simulacros adaptativos de la Academia Munilex es, sencillamente, imbatible."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-[#f2ca50] to-[#d4af37] rounded-full flex items-center justify-center text-[#241a00]">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <div className="font-manrope text-left">
                  <div className="font-black text-white">Carlos M.</div>
                  <div className="text-xs font-black uppercase tracking-widest text-[#d4af37]">Policía Nacional (Plaza 2024)</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Pricing />
    </div>
  );
};

export default Home;
