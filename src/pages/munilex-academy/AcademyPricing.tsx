import { motion } from 'framer-motion';
import { CheckCircle, Zap, ShieldCheck, TrendingUp, Sparkles, ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const AcademyPricing = () => {
  return (
    <div className="pt-24 min-h-screen bg-surface text-on-surface font-inter selection:bg-police-gold/20 selection:text-on-surface">
      <Helmet>
        <title>Precios y Planes | Munilex Academy - Invierte en tu Plaza</title>
        <meta name="description" content="Planes de estudio flexibles para opositores de élite. Accede a nuestra IA jurídica, simuladores infinitos y temarios actualizados desde 29€ al mes." />
      </Helmet>

      {/* Hero Header */}
      <section className="py-24 px-6 md:px-8 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-police-gold/5 to-transparent blur-[120px] pointer-events-none" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto relative z-10"
        >
          <div className="inline-flex items-center bg-white px-5 py-2 rounded-full mb-8 border border-outline-variant shadow-ambient">
            <Sparkles className="w-4 h-4 text-police-gold mr-3" />
            <span className="text-police-gold text-[10px] font-black uppercase tracking-[0.25em]">Planes de Alto Rendimiento</span>
          </div>
          <h1 className="text-5xl md:text-[6.5rem] font-black text-on-surface leading-[0.95] tracking-tighter mb-10 uppercase">
            Invierte en <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-police-gold to-on-surface">Tu Futuro</span>
          </h1>
          <p className="text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed font-semibold">
            Acceso ilimitado a la plataforma de preparación más avanzada de España. Sin permanencia, sin letra pequeña. Justo lo que necesitas para aprobar.
          </p>
        </motion.div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-32 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-14 items-stretch">
            
            {/* Plan Opositor Pro */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-outline-variant rounded-[4rem] p-12 lg:p-16 flex flex-col hover:border-police-gold/30 transition-all group shadow-ambient relative"
            >
              <div className="mb-12">
                <div className="w-16 h-16 bg-surface-low rounded-[1.5rem] border border-outline-variant flex items-center justify-center text-police-gold mb-8 group-hover:scale-110 transition-transform shadow-sm">
                  <Zap className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-black text-on-surface mb-4 uppercase tracking-tighter">Opositor PRO</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-7xl font-black tracking-tighter text-on-surface">29€</span>
                  <span className="text-on-surface-variant font-black uppercase tracking-widest text-[10px]">/ Mes</span>
                </div>
              </div>

              <p className="text-on-surface-variant mb-12 font-medium text-lg leading-relaxed">
                Ideal para opositores que buscan flexibilidad total y acceso a todas las herramientas de IA.
              </p>
              
              <ul className="space-y-6 mb-16 flex-grow">
                {[
                  "Consultas ilimitadas a la IA",
                  "Generador de simulacros tácticos",
                  "Análisis predictivo de fallos",
                  "Temario actualizado al segundo",
                  "Acceso multiplataforma (Web/App)"
                ].map((feat, i) => (
                  <li key={i} className="flex gap-4 items-center">
                    <CheckCircle className="w-6 h-6 text-on-surface/20 flex-shrink-0" />
                    <span className="font-bold text-on-surface/80 text-base uppercase tracking-tight">{feat}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href="https://munilex.lovable.app/auth/register"
                className="w-full py-6 bg-surface-variant text-on-surface font-black rounded-2xl text-xs hover:bg-on-surface hover:text-white transition-all text-center flex items-center justify-center gap-4 uppercase tracking-[.25em] shadow-ambient"
              >
                Empezar Ahora
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>

            {/* Plan Elite */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-on-surface rounded-[4rem] p-12 lg:p-16 relative overflow-hidden group shadow-premium flex flex-col"
            >
              <div className="absolute top-0 right-0 py-2.5 px-12 bg-police-gold text-on-surface font-black text-[10px] uppercase tracking-[0.3em] -rotate-45 translate-x-12 translate-y-8 shadow-xl">
                Recomendado
              </div>
              
              <div className="mb-12">
                <div className="w-16 h-16 bg-police-gold rounded-[1.5rem] flex items-center justify-center text-on-surface mb-8 group-hover:rotate-6 transition-transform shadow-lg">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-black text-white mb-4 uppercase tracking-tighter">Academy ELITE</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-7xl font-black tracking-tighter text-white">249€</span>
                  <span className="text-police-gold font-black uppercase tracking-widest text-[10px]">/ Año</span>
                </div>
              </div>

              <p className="text-white/70 mb-12 font-bold leading-relaxed flex items-center gap-3 text-lg">
                <TrendingUp className="w-6 h-6 text-police-gold" />
                Ahorra 99€ y asegura tu plaza.
              </p>
              
              <ul className="space-y-6 mb-16 flex-grow text-white">
                {[
                  "Todo lo del Plan PRO",
                  "Soporte prioritario 24/7",
                  "Revisiones con preparadores A1",
                  "Dashboard de rendimiento avanzado",
                  "Descarga de temarios en PDF Pro"
                ].map((feat, i) => (
                  <li key={i} className="flex gap-4 items-center">
                    <CheckCircle className="w-6 h-6 text-police-gold flex-shrink-0" />
                    <span className="font-black text-base uppercase tracking-tight">{feat}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href="https://munilex.lovable.app/auth/register"
                className="w-full py-6 bg-police-gold text-on-surface font-black rounded-2xl text-xs hover:scale-[1.02] active:scale-95 transition-all text-center shadow-xl flex items-center justify-center gap-4 uppercase tracking-[.25em]"
              >
                Matricularse
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>

          </div>
          
          <div className="mt-28 p-12 border border-outline-variant rounded-[4rem] bg-white backdrop-blur-sm text-center shadow-ambient">
            <h4 className="text-2xl font-black text-on-surface mb-4 uppercase tracking-tighter">¿Tienes dudas sobre los planes?</h4>
            <p className="text-on-surface-variant font-semibold mb-10 max-w-xl mx-auto">Nuestro equipo de soporte está disponible para asesorarte sobre qué modalidad se adapta mejor a tu proceso selectivo.</p>
            <a href="/academy/contacto" className="text-police-gold font-black uppercase tracking-[.25em] text-[10px] hover:scale-105 inline-block transition-transform pb-1 border-b-2 border-outline-variant">Contactar con Asesoría Academy</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AcademyPricing;
