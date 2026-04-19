import { motion } from 'framer-motion';
import { CheckCircle, Zap, ShieldCheck, TrendingUp, Sparkles, ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const AcademyPricing = () => {
  return (
    <div className="min-h-screen bg-[#131313] text-[#E5E2E1] font-inter">
      <Helmet>
        <title>Precios y Planes | Munilex Academy - Invierte en tu Plaza</title>
        <meta name="description" content="Planes de estudio flexibles para opositores de élite. Accede a nuestra IA jurídica, simuladores infinitos y temarios actualizados desde 29€ al mes." />
      </Helmet>

      {/* Hero Header */}
      <section className="pt-48 pb-24 px-6 md:px-8 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-[#d4af37]/5 to-transparent blur-[120px] pointer-events-none" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto relative z-10"
        >
          <div className="inline-flex items-center bg-[#1C1B1B] px-5 py-2 rounded-full mb-8 border border-[#353534]">
            <Sparkles className="w-4 h-4 text-[#d4af37] mr-3" />
            <span className="text-[#d4af37] text-[11px] font-black uppercase tracking-[0.2em]">Planes de Alto Rendimiento</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] tracking-tighter mb-10 uppercase">
            Invierte en <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f2ca50] to-[#d4af37]">Tu Futuro Administrativo</span>
          </h1>
          <p className="text-xl text-[#E5E2E1]/60 max-w-2xl mx-auto leading-relaxed font-medium">
            Acceso ilimitado a la plataforma de preparación más avanzada de España. Sin permanencia, sin letra pequeña. Justo lo que necesitas para aprobar.
          </p>
        </motion.div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-32 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            
            {/* Plan Opositor Pro */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#1C1B1B] border border-[#353534] rounded-[3.5rem] p-10 lg:p-14 flex flex-col hover:border-[#d4af37]/30 transition-all group"
            >
              <div className="mb-10">
                <div className="w-14 h-14 bg-[#2A2A2A] rounded-2xl flex items-center justify-center text-[#d4af37] mb-8 group-hover:scale-110 transition-transform">
                  <Zap className="w-7 h-7" />
                </div>
                <h3 className="text-3xl font-black text-white mb-4 uppercase tracking-tight">Opositor PRO</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-6xl font-black tracking-tighter text-white">29€</span>
                  <span className="text-[#E5E2E1]/40 font-bold uppercase tracking-widest text-xs">/ Mes</span>
                </div>
              </div>

              <p className="text-[#E5E2E1]/60 mb-10 font-medium leading-relaxed">
                Ideal para opositores que buscan flexibilidad total y acceso a todas las herramientas de IA.
              </p>
              
              <ul className="space-y-6 mb-12 flex-grow">
                {[
                  "Consultas ilimitadas a la IA",
                  "Generador de simulacros tácticos",
                  "Análisis predictivo de fallos",
                  "Temario actualizado al segundo",
                  "Acceso multiplataforma (Web/App)"
                ].map((feat, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <CheckCircle className="w-5 h-5 text-[#d4af37] mt-0.5 flex-shrink-0" />
                    <span className="font-medium text-white/80 text-[15px]">{feat}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href="https://munilex.lovable.app/auth/register"
                className="w-full py-5 bg-[#2A2A2A] text-white font-black rounded-2xl text-lg border border-[#353534] hover:bg-[#353534] transition-all text-center flex items-center justify-center gap-3 uppercase tracking-widest text-sm"
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
              className="bg-gradient-to-br from-[#1C1B1B] to-[#131313] border-2 border-[#d4af37] rounded-[3.5rem] p-10 lg:p-14 relative overflow-hidden group shadow-[0_30px_100px_rgba(212,175,55,0.15)]"
            >
              <div className="absolute top-0 right-0 py-2 px-8 bg-[#d4af37] text-[#241a00] font-black text-[10px] uppercase tracking-[0.25em] -rotate-45 translate-x-10 translate-y-6">
                Most Popular
              </div>
              
              <div className="mb-10">
                <div className="w-14 h-14 bg-[#d4af37] rounded-2xl flex items-center justify-center text-[#241a00] mb-8 group-hover:rotate-6 transition-transform">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <h3 className="text-3xl font-black text-white mb-4 uppercase tracking-tight">Academy ELITE</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-6xl font-black tracking-tighter text-white">249€</span>
                  <span className="text-[#d4af37] font-black uppercase tracking-widest text-xs">/ Año</span>
                </div>
              </div>

              <p className="text-white/80 mb-10 font-bold leading-relaxed flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-[#d4af37]" />
                Ahorra 99€ y asegura tu plaza.
              </p>
              
              <ul className="space-y-6 mb-12 flex-grow text-white/90">
                {[
                  "Todo lo del Plan PRO",
                  "Soporte prioritario 24/7",
                  "Revisiones con preparadores A1",
                  "Dashboard de rendimiento avanzado",
                  "Descarga de temarios en PDF Pro"
                ].map((feat, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <CheckCircle className="w-5 h-5 text-[#d4af37] mt-0.5 flex-shrink-0" />
                    <span className="font-bold text-[15px]">{feat}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href="https://munilex.lovable.app/auth/register"
                className="w-full py-5 bg-[#d4af37] text-[#241a00] font-black rounded-2xl text-lg hover:opacity-90 transition-all text-center shadow-[0_10px_30px_rgba(212,175,55,0.3)] flex items-center justify-center gap-3 uppercase tracking-widest text-sm"
              >
                Matricularse
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>

          </div>
          
          <div className="mt-24 p-10 border border-[#353534] rounded-[3rem] bg-[#1C1B1B]/40 backdrop-blur-sm text-center">
            <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-tight">¿Tienes dudas sobre los planes?</h4>
            <p className="text-[#E5E2E1]/50 mb-8 max-w-xl mx-auto">Nuestro equipo de soporte está disponible para asesorarte sobre qué modalidad se adapta mejor a tu proceso selectivo.</p>
            <a href="/academy/contacto" className="text-[#d4af37] font-bold uppercase tracking-widest text-xs hover:underline">Contactar con Asesoría Academy</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AcademyPricing;
