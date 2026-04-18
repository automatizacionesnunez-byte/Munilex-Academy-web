import { motion } from 'framer-motion';
import { ShieldCheck, ArrowRight, Play, Gavel } from 'lucide-react';

const Hero = () => {
  const DEMO_LINK = "https://wa.me/34605392912?text=Hola,%20me%20gustaría%20solicitar%20una%20demostración%20para%20mi%20Ayuntamiento.";

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="z-10 text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-container/20 text-on-secondary-container text-[14px] font-black tracking-widest uppercase mb-8 border border-secondary-container/30">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-cyan opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-secondary-cyan"></span>
            </span>
            El Jurista Digital
          </div>
          
          <h1 className="font-manrope font-extrabold text-5xl md:text-6xl lg:text-7xl text-on-surface leading-[1.05] tracking-tighter mb-10">
            El primer asistente jurídico con <span className="text-primary-container">IA</span> para Ayuntamientos
          </h1>
          
          <p className="text-xl md:text-2xl text-on-surface-variant mb-12 max-w-2xl leading-relaxed font-inter font-medium opacity-90">
            Potencie la eficiencia de su administración con inteligencia artificial diseñada específicamente para el marco legal de los ayuntamientos españoles.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <a 
              href="https://munilex.lovable.app/auth/register"
              className="w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-primary-container to-primary text-white font-black rounded-xl text-lg shadow-premium hover:shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3"
            >
              Pruébalo Gratis
              <ArrowRight className="w-6 h-6" />
            </a>
            <a 
              href={DEMO_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-10 py-5 border border-outline-variant bg-surface-lowest text-primary font-bold rounded-xl text-lg hover:bg-surface-low transition-all flex items-center justify-center gap-3"
            >
              <Play className="w-5 h-5 fill-current" />
              Ver Demostración
            </a>
          </div>
          
          <p className="mt-8 text-sm text-on-surface-variant font-bold flex items-center justify-center lg:justify-start gap-2 opacity-60">
            <ShieldCheck className="w-4 h-4" />
            Sin tarjeta de crédito • 15 consultas mensuales sin compromiso
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative mt-20 lg:mt-0"
        >
          {/* Decorative Blur */}
          <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-primary-container/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-secondary-cyan/15 rounded-full blur-[120px]" />
          
          <div className="relative z-10 rounded-[3.5rem] overflow-hidden shadow-premium group border-8 border-white/50 bg-white/20 backdrop-blur-sm p-4">
            <img 
              src="/hero_secretary.png" 
              alt="Secretario de Ayuntamiento con Munilex AI" 
              className="w-full aspect-[4/5] md:aspect-square object-cover rounded-[2.5rem] transition-transform duration-1000 group-hover:scale-105 shadow-inner"
            />
            
            {/* Floating Premium Card */}
            <motion.div 
              initial={{ x: 60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="absolute bottom-10 left-10 right-10 bg-white/95 backdrop-blur-2xl p-10 rounded-[2.5rem] border border-white/40 shadow-2xl flex flex-col gap-6"
            >
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-container rounded-2xl flex items-center justify-center text-white shadow-lg animate-pulse-slow">
                  <Gavel className="w-8 h-8" />
                </div>
                <div>
                  <div className="text-xl font-black text-secondary tracking-tight">Análisis Jurídico IA</div>
                  <div className="text-[13px] font-black uppercase tracking-[0.2em] text-primary-container">Secretaría-Intervención v4.0</div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="h-2 bg-surface-variant rounded-full w-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "95%" }}
                    transition={{ delay: 2, duration: 1.5 }}
                    className="h-full bg-secondary-cyan shadow-[0_0_15px_rgba(6,211,170,0.5)]" 
                  />
                </div>
                <div className="text-xs font-bold text-on-surface-variant opacity-60">Procesando Ley 9/2017 de Contratos del Sector Público... 95%</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
