import Hero from '../../components/Hero';
import Features from '../../components/Features';
import Pricing from '../../components/Pricing';
import { Clock, ShieldCheck, Zap, Activity, Landmark, Shield, Lock, Cpu, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

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
    <div className="bg-surface">
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
            Munilex: La Inteligencia que <span className="text-primary-container not-italic">transforma</span> el Sector Público
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-2xl text-on-surface-variant max-w-3xl mx-auto mb-16 font-medium leading-relaxed opacity-80"
          >
            Desde la preparación de élite de futuros funcionarios hasta la gestión administrativa del día a día. Tu aliado estratégico en cada etapa de la carrera pública.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <Link to="/servicios" className="group bg-secondary text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-premium border border-white/10 flex items-center gap-3">
              Munilex para Funcionarios
              <ShieldCheck className="w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity" />
            </Link>
            <Link to="/academy" className="group bg-gradient-to-br from-[#241a00] to-black text-[#d4af37] px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-[0_20px_50px_rgba(212,175,55,0.1)] border border-[#d4af37]/30 flex items-center gap-3">
              Munilex Academy
              <Landmark className="w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Bento Dual Path Section */}
      <section className="py-24 px-6 md:px-8 border-y border-outline-variant bg-surface-low">
        <div className="max-w-7xl mx-auto">
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
                <div className="w-16 h-16 bg-primary-container/10 rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                  <Activity className="w-8 h-8 text-primary-container" />
                </div>
                <h3 className="text-4xl font-black text-secondary tracking-tight mb-6">Poder Público</h3>
                <p className="text-xl text-on-surface-variant font-medium mb-10 leading-relaxed opacity-70">
                  Herramientas de IA diseñadas para Secretarios, Interventores y Administrativos. Redacte informes, valide normativa y agilice expedientes en segundos.
                </p>
              </div>
              <Link 
                to="/servicios" 
                className="w-full py-5 bg-surface-lowest border border-outline-variant text-secondary font-black text-xs uppercase tracking-widest rounded-2xl text-center hover:bg-secondary hover:text-white transition-all shadow-sm"
              >
                Explorar Soluciones Profesionales
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
                  <Landmark className="w-8 h-8 text-[#d4af37]" />
                </div>
                <h3 className="text-4xl font-black text-white tracking-tight mb-6">Poder Formativo</h3>
                <p className="text-xl text-white/50 font-medium mb-10 leading-relaxed">
                  La academia que redefine la preparación de oposiciones. Metodología de élite asistida por IA para aspirantes que no permiten el fallo.
                </p>
              </div>
              <Link 
                to="/academy" 
                className="w-full py-5 bg-gradient-to-br from-[#f2ca50] to-[#d4af37] text-[#241a00] font-black text-xs uppercase tracking-widest rounded-2xl text-center hover:shadow-[0_10px_30px_#d4af3750] transition-all"
              >
                Acceder a la Academia de Élite
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <Features />
      
      <section className="py-32 bg-surface-low border-y border-surface-variant/30">
        <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
          <h2 className="mb-12 italic text-secondary">"Voz del Secretario"</h2>
          <p className="text-2xl text-primary/80 max-w-4xl mx-auto font-medium leading-relaxed">
            "Munilex no es solo una IA, es el respaldo que todo habilitado nacional necesita hoy en día. La precisión en la redacción de informes ha cambiado drásticamente mi jornada."
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="w-12 h-12 bg-primary-container rounded-full" />
            <div className="text-left font-manrope">
              <div className="font-bold">E. García</div>
              <div className="text-xs opacity-50 font-bold tracking-widest uppercase">Secretariado de Ayuntamiento</div>
            </div>
          </div>
        </div>
      </section>

      <Pricing />
    </>
  );
};

export default Home;
