import { motion } from 'framer-motion';
import { ArrowRight, Landmark, GraduationCap, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-[95vh] flex items-center pt-20 overflow-hidden bg-surface">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -right-[5%] w-[40%] h-[60%] bg-primary-fixed/30 blur-[120px] rounded-full opacity-50" />
        <div className="absolute bottom-[5%] -left-[5%] w-[30%] h-[50%] bg-secondary-cyan/10 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 w-full relative z-10 py-20">
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass border border-primary-container/10 text-primary-container text-[12px] font-black tracking-[0.2em] uppercase mb-8"
          >
            MUNILEX v4.0 • EL ESTÁNDAR DE LA ADMINISTRACIÓN
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="text-5xl md:text-7xl lg:text-9xl font-black text-on-surface leading-[0.9] tracking-tighter mb-8"
          >
            La Potestad Pública.<br/>
            <span className="text-primary-container italic">La Inteligencia del Derecho.</span>
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Column 1: Función Pública */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="group relative"
          >
            <div className="h-full p-10 md:p-14 rounded-[3.5rem] bg-white border border-surface-variant/50 shadow-ambient hover:shadow-premium transition-all duration-500 flex flex-col items-start text-left">
              <div className="w-16 h-16 bg-primary-fixed/50 rounded-2xl flex items-center justify-center text-primary-container mb-10 group-hover:scale-110 transition-transform duration-500">
                <Landmark className="w-8 h-8" />
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-primary-container mb-6 tracking-tight uppercase">Munilex Función Pública</h2>
              <p className="text-lg text-on-surface-variant font-medium leading-relaxed mb-8">
                Especialización para secretarios e interventores en Ayuntamientos.
              </p>
              
              <ul className="space-y-4 mb-12 flex-grow">
                {[
                  "Análisis normativo ultrapreciso con IA",
                  "Redacción de informes técnicos en segundos",
                  "Sincronización diaria con BOE/Sedes Locales"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-on-surface-variant font-bold text-sm">
                    <CheckCircle2 className="w-5 h-5 text-secondary-cyan" />
                    {item}
                  </li>
                ))}
              </ul>

              <a 
                href="https://munilex.lovable.app/auth/login"
                className="w-full px-10 py-5 bg-on-surface text-white font-black rounded-2xl text-xs uppercase tracking-widest shadow-premium hover:shadow-2xl hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-4"
              >
                Accede a la revolución de los Ayuntamientos
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Column 2: Academy */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="group relative"
          >
            <div className="h-full p-10 md:p-14 rounded-[3.5rem] bg-secondary text-white border border-secondary/10 shadow-premium hover:translate-y-[-4px] transition-all duration-500 flex flex-col items-start text-left overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-container/10 rounded-full blur-3xl -translate-y-12 translate-x-12" />
              
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-[#d4af37] mb-10 group-hover:scale-110 transition-transform duration-500">
                <GraduationCap className="w-8 h-8" />
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-[#d4af37] mb-6 tracking-tight uppercase">Munilex Academy</h2>
              <p className="text-lg text-white/70 font-medium leading-relaxed mb-8">
                Tu zona para opositores y academias.
              </p>

              <ul className="space-y-4 mb-12 flex-grow">
                {[
                  "Preparación de élite asistida por IA",
                  "Plataforma inteligente para academias",
                  "Análisis avanzado de convocatorias"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/80 font-bold text-sm">
                    <CheckCircle2 className="w-5 h-5 text-[#d4af37]" />
                    {item}
                  </li>
                ))}
              </ul>

              <Link 
                to="/academy"
                className="w-full px-10 py-5 bg-[#d4af37] text-secondary font-black rounded-2xl text-xs uppercase tracking-widest shadow-[0_10px_30px_rgba(212,175,55,0.3)] hover:shadow-[0_15px_40px_rgba(212,175,55,0.4)] hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-4"
              >
                Accede a tu zona
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
