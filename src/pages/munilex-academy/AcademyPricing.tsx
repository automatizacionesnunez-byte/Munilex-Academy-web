import { motion } from 'framer-motion';
import { CheckCircle, ShieldCheck, TrendingUp, Sparkles, ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

import { useState } from 'react';

const AcademyPricing = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f2ca50] to-[#d4af37]">Tu Futura Plaza</span>
          </h1>
          <p className="text-xl text-[#E5E2E1]/60 max-w-2xl mx-auto leading-relaxed font-medium mb-12">
            Acceso ilimitado a la plataforma de preparación más avanzada de España. Sin permanencia, sin letra pequeña. Justo lo que necesitas para aprobar.
          </p>

          <div className="flex items-center justify-center gap-6 mb-12">
            <span className={`text-sm font-bold uppercase tracking-widest ${billingCycle === 'monthly' ? 'text-white' : 'text-white/40'}`}>Mensual</span>
            <button 
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
              className="w-16 h-8 bg-[#1C1B1B] border border-[#353534] rounded-full relative p-1 transition-colors hover:border-[#d4af37]/50"
            >
              <motion.div 
                animate={{ x: billingCycle === 'monthly' ? 0 : 32 }}
                className="w-6 h-6 bg-[#d4af37] rounded-full shadow-lg"
              />
            </button>
            <div className="flex items-center gap-3">
              <span className={`text-sm font-bold uppercase tracking-widest ${billingCycle === 'annual' ? 'text-white' : 'text-white/40'}`}>Anual</span>
              <span className="bg-[#d4af37]/10 text-[#d4af37] px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider border border-[#d4af37]/20">
                -20% AHORRO
              </span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-32 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-10 items-stretch">
            
            {/* Acceso 1 Oposición */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-[#1C1B1B] border border-[#353534] rounded-[3.5rem] p-10 flex flex-col hover:border-[#d4af37]/30 transition-all group"
            >
              <div className="mb-10">
                <div className="w-14 h-14 bg-[#2A2A2A] rounded-2xl flex items-center justify-center text-[#d4af37] mb-8 group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-tight">Acceso 1 Oposición</h3>
                <p className="text-[#E5E2E1]/40 font-bold uppercase tracking-widest text-[10px] mb-6">
                  {billingCycle === 'monthly' ? 'Pago mensual sin compromiso' : 'Paga 10 meses y llévate 12'}
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-black tracking-tighter text-white">
                    {billingCycle === 'monthly' ? '29€' : '290€'}
                  </span>
                  <span className="text-[#E5E2E1]/40 font-bold uppercase tracking-widest text-xs">
                    {billingCycle === 'monthly' ? '/ Mes' : '/ Año'}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-12 flex-grow">
                {[
                  "Acceso total a 1 cuerpo seleccionado",
                  "Consultas ilimitadas a la IA",
                  "Generador de simulacros tácticos",
                  "Análisis predictivo de fallos",
                  "Temario actualizado al segundo"
                ].map((feat, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <CheckCircle className="w-4 h-4 text-[#d4af37] mt-0.5 flex-shrink-0" />
                    <span className="font-medium text-white/80 text-sm">{feat}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href="https://munilex.lovable.app/auth/register"
                className="w-full py-5 bg-[#2A2A2A] text-white font-black rounded-2xl border border-[#353534] hover:bg-[#353534] transition-all text-center flex items-center justify-center gap-3 uppercase tracking-widest text-xs"
              >
                Empezar Ahora <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>

            {/* Acceso Multi-Oposición */}
            <motion.div 
              initial={{ opacity: 0, scale: 1.05 }}
              whileInView={{ opacity: 1, scale: 1.05 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#1C1B1B] to-[#131313] border-2 border-[#d4af37] rounded-[3.5rem] p-10 relative overflow-hidden group shadow-[0_30px_100px_rgba(212,175,55,0.15)] z-10"
            >
              <div className="absolute top-0 right-0 py-2 px-8 bg-[#d4af37] text-[#241a00] font-black text-[9px] uppercase tracking-[0.2em] -rotate-45 translate-x-10 translate-y-6">Recomendado</div>
              <div className="mb-10">
                <div className="w-14 h-14 bg-[#d4af37] rounded-2xl flex items-center justify-center text-[#241a00] mb-8 group-hover:rotate-6 transition-transform">
                  <Sparkles className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-tight">Multi-Oposición</h3>
                <p className="text-[#d4af37] font-bold uppercase tracking-widest text-[10px] mb-6">
                  {billingCycle === 'monthly' ? 'Dominando todos los cuerpos' : 'Ahorro de 100€ anuales'}
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-black tracking-tighter text-white">
                    {billingCycle === 'monthly' ? '49€' : '490€'}
                  </span>
                  <span className="text-[#d4af37] font-black uppercase tracking-widest text-xs">
                    {billingCycle === 'monthly' ? '/ Mes' : '/ Año'}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-12 flex-grow text-white/90">
                {[
                  "Acceso a TODO el catálogo",
                  "Multiperfil de preparación",
                  "Soporte prioritario 24/7",
                  "Revisiones con preparadores A1",
                  "Descarga de temarios en PDF Pro"
                ].map((feat, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <CheckCircle className="w-4 h-4 text-[#d4af37] mt-0.5 flex-shrink-0" />
                    <span className="font-bold text-sm">{feat}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href="https://munilex.lovable.app/auth/register"
                className="w-full py-5 bg-[#d4af37] text-[#241a00] font-black rounded-2xl hover:opacity-90 transition-all text-center shadow-[0_10px_30px_rgba(212,175,55,0.3)] flex items-center justify-center gap-3 uppercase tracking-widest text-xs"
              >
                Matricularse <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>

            {/* Corporate & FP */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-[#1C1B1B] border border-[#353534] rounded-[3.5rem] p-10 flex flex-col hover:border-blue-500/30 transition-all group"
            >
              <div className="mb-10">
                <div className="w-14 h-14 bg-[#2A2A2A] rounded-2xl flex items-center justify-center text-blue-500 mb-8 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-tight">Corporate & FP</h3>
                <p className="text-[#E5E2E1]/40 font-bold uppercase tracking-widest text-[10px] mb-6">Para Academias y Centros de FP</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-black tracking-tighter text-white uppercase">Consultar</span>
                </div>
              </div>

              <ul className="space-y-4 mb-12 flex-grow">
                {[
                  "Marca Blanca personalizada",
                  "Gestión de alumnos masiva",
                  "Analítica de centro completa",
                  "Planes adaptados a FP",
                  "Consultoría técnica dedicada"
                ].map((feat, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="font-medium text-white/80 text-sm">{feat}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href="/academy/contacto"
                className="w-full py-5 bg-transparent border-2 border-blue-500/20 text-white font-black rounded-2xl hover:bg-blue-500/10 transition-all text-center flex items-center justify-center gap-3 uppercase tracking-widest text-xs"
              >
                Solicitar Propuesta <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>

          </div>
          
          <div className="mt-24 p-10 border border-[#353534] rounded-[3rem] bg-[#1C1B1B]/40 backdrop-blur-sm text-center">
            <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-tight">¿Estudias varias oposiciones a la vez?</h4>
            <p className="text-[#E5E2E1]/50 mb-8 max-w-xl mx-auto">Selecciona el plan Multi-Oposición para no tener límites en tu preparación. Recuerda que al elegir el pago anual ahorras el equivalente a dos cuotas mensuales.</p>
            <a href="/academy/contacto" className="text-[#d4af37] font-bold uppercase tracking-widest text-xs hover:underline">Hablar con un asesor ahora</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AcademyPricing;
