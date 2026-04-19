import { motion } from 'framer-motion';
import { ArrowRight, Landmark, GraduationCap, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-16 overflow-hidden bg-surface">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -right-[5%] w-[40%] h-[60%] bg-primary-fixed/30 blur-[120px] rounded-full opacity-50" />
        <div className="absolute bottom-[5%] -left-[5%] w-[30%] h-[50%] bg-primary-container/10 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 w-full relative z-10 py-6 md:py-10">
        <div className="text-center mb-10 md:mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-7xl font-black text-[#002B5B] leading-tight tracking-tighter mb-4"
          >
            La Revolución <span className="text-[#0066FF]">Jurídico-Académica.</span>
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {/* Column 1: Función Pública */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="group relative"
          >
            <div className="h-full p-8 md:p-10 rounded-[3rem] bg-white border border-slate-100 shadow-ambient hover:shadow-premium transition-all duration-500 flex flex-col items-start text-left">
              <div className="flex items-center gap-5 mb-6 group-hover:translate-x-2 transition-transform duration-500">
                <div className="w-14 h-14 bg-[#F0F7FF] rounded-2xl flex items-center justify-center text-[#0066FF] group-hover:scale-110 transition-transform duration-500">
                  <Landmark className="w-7 h-7" />
                </div>
                <h2 className="text-xl md:text-2xl font-black tracking-tight uppercase">
                  <span className="text-[#002B5B]">Munilex</span>{" "}
                  <span className="text-[#0066FF]">Función Pública</span>
                </h2>
              </div>
              
              <p className="text-base text-[#002B5B]/60 font-semibold leading-relaxed mb-6">
                Especialización para secretarios e interventores en Ayuntamientos.
              </p>
              
              <ul className="space-y-3 mb-8 flex-grow">
                {[
                  "Análisis normativo ultrapreciso con IA",
                  "Redacción de informes técnicos en segundos",
                  "Control de plazos y blindaje institucional"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#002B5B]/80 font-bold text-xs">
                    <CheckCircle2 className="w-4 h-4 text-primary-container" />
                    {item}
                  </li>
                ))}
              </ul>

              <Link 
                to="/funcionarios"
                className="w-full px-8 py-4 bg-[#002B5B] text-white font-black rounded-2xl text-[10px] uppercase tracking-widest shadow-premium hover:shadow-2xl hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-4"
              >
                Acceder a la REVOLUCIÓN
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* Column 2: Academy */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="group relative"
          >
            <div className="h-full p-8 md:p-10 rounded-[3.5rem] bg-[#002B5B] text-white border border-white/5 shadow-premium hover:translate-y-[-4px] transition-all duration-500 flex flex-col items-start text-left overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -translate-y-12 translate-x-12" />
              
              <div className="flex items-center gap-5 mb-6 group-hover:translate-x-2 transition-transform duration-500">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-[#d4af37] group-hover:scale-110 transition-transform duration-500">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <h2 className="text-xl md:text-2xl font-black tracking-tight uppercase">
                  <span className="text-white">Munilex</span>{" "}
                  <span className="text-[#d4af37]">Academy</span>
                </h2>
              </div>
              
              <p className="text-base text-white/70 font-semibold leading-relaxed mb-6 opacity-80">
                Tu zona para opositores, academias y centros de FP.
              </p>

              <ul className="space-y-3 mb-8 flex-grow">
                {[
                  "Munilex Corporate: desarrollo a medida para centros",
                  "Preparación de élite asistida por IA",
                  "Tecnología de vanguardia para centros de formación"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/80 font-bold text-xs">
                    <CheckCircle2 className="w-4 h-4 text-[#d4af37]" />
                    {item}
                  </li>
                ))}
              </ul>

              <Link 
                to="/academy"
                className="w-full px-8 py-4 bg-[#d4af37] text-[#002B5B] font-black rounded-2xl text-[10px] uppercase tracking-widest shadow-[0_10px_30px_rgba(212,175,55,0.3)] hover:shadow-[0_15px_40px_rgba(212,175,55,0.4)] hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-4"
              >
                Acceder a tu zona
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
