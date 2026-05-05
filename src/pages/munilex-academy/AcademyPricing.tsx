import { motion } from 'framer-motion';
import { CheckCircle, ShieldCheck, TrendingUp, Sparkles, ArrowRight, Gift, Zap } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const AcademyPricing = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  const PLANS = {
    single: {
      monthly: "https://buy.stripe.com/6oU9ATbvw0GJ32NezSgYU00",
      annual: "https://buy.stripe.com/3cI9AT7fgexz6eZezSgYU01"
    },
    multi: {
      monthly: "https://buy.stripe.com/14A4gz2Z0ahjavf63mgYU02",
      annual: "https://buy.stripe.com/14A4cv2Z0757cDn63mgYU03"
    }
  };

  const handleCheckout = (url: string) => {
    window.location.href = url;
  };

  return (
    <div className="min-h-screen bg-[#0E0E0E] text-white font-inter pt-32 selection:bg-police-gold selection:text-black">
      <Helmet>
        <title>Precios y Planes | Munilex Academy - Preparación de Élite</title>
        <meta name="description" content="Planes de estudio flexibles para opositores de élite. Accede a nuestra IA jurídica, simuladores infinitos y temarios actualizados desde 29€ al mes." />
      </Helmet>

      {/* Background Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-police-gold/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-police-gold/5 blur-[120px] rounded-full" />
      </div>

      {/* Hero Header */}
      <section className="pt-20 pb-24 px-6 md:px-8 text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center bg-white/5 backdrop-blur-md px-5 py-2 rounded-full mb-8 border border-white/10 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
            <Sparkles className="w-4 h-4 text-police-gold mr-3" />
            <span className="text-police-gold text-[10px] font-black uppercase tracking-[0.3em]">Planes de Alto Rendimiento</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-manrope font-black text-white leading-[0.9] tracking-tighter mb-10 uppercase italic">
            Domina <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-police-gold via-[#F7E0A3] to-police-gold animate-shimmer bg-[length:200%_auto]">Tu Oposición</span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed font-medium mb-12">
            Acceso ilimitado a la plataforma de preparación más avanzada de España. <br className="hidden md:block" />
            Sin permanencia. Diseñada para los que solo aceptan el aprobado.
          </p>

          <div className="flex items-center justify-center gap-8 mb-12">
            <span className={`text-xs font-black uppercase tracking-widest transition-colors ${billingCycle === 'monthly' ? 'text-white' : 'text-white/30'}`}>Mensual</span>
            <button 
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
              className="w-16 h-8 bg-white/5 border border-white/10 rounded-full relative p-1 transition-all hover:border-police-gold/50 shadow-inner group"
            >
              <motion.div 
                animate={{ x: billingCycle === 'monthly' ? 0 : 32 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="w-6 h-6 bg-police-gold rounded-full shadow-[0_0_15px_rgba(212,175,55,0.5)] group-hover:scale-110 transition-transform"
              />
            </button>
            <div className="flex items-center gap-3">
              <span className={`text-xs font-black uppercase tracking-widest transition-colors ${billingCycle === 'annual' ? 'text-white' : 'text-white/30'}`}>Anual</span>
              <span className="bg-police-gold text-black px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider shadow-[0_0_15px_rgba(212,175,55,0.3)]">
                -20% AHORRO
              </span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-32 px-6 md:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            
            {/* Plan Gratis */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#1C1B1B] border border-white/5 rounded-[2.5rem] p-10 flex flex-col hover:border-police-gold/20 transition-all group relative overflow-hidden"
            >
              <div className="mb-8">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-white/40 mb-6 group-hover:scale-110 group-hover:text-white transition-all border border-white/10">
                  <Gift className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-manrope font-black text-white mb-1 uppercase tracking-tight">Plan Gratis</h3>
                <p className="text-white/30 font-bold uppercase tracking-widest text-[9px] mb-4 italic">Explora la academia</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-manrope font-black tracking-tighter text-white">0€</span>
                  <span className="text-white/30 font-bold uppercase tracking-widest text-[10px]">/ SIEMPRE</span>
                </div>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {[
                  { text: "5 Consultas IA al día", highlight: true },
                  { text: "1 Caso Práctico al día", highlight: true },
                  { text: "2 Test rápidos al día", highlight: true },
                  { text: "1 Material Generado", sub: "(Infografía o Resumen)", highlight: false },
                  { text: "10 Flashcards de repaso", highlight: false }
                ].map((feat, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <CheckCircle className={`w-4 h-4 mt-0.5 flex-shrink-0 ${feat.highlight ? 'text-police-gold' : 'text-white/20'}`} />
                    <div className="flex flex-col">
                      <span className={`text-[12px] font-black uppercase tracking-tight ${feat.highlight ? 'text-white/90' : 'text-white/40'}`}>{feat.text}</span>
                      {feat.sub && <span className="text-[10px] text-white/20 font-bold uppercase">{feat.sub}</span>}
                    </div>
                  </li>
                ))}
              </ul>
              
              <Link 
                to="/auth/register"
                className="w-full py-5 bg-white/5 text-white/70 font-black rounded-2xl text-[11px] hover:bg-white/10 hover:text-white transition-all text-center flex items-center justify-center gap-3 uppercase tracking-[0.2em] border border-white/5 shadow-lg group-hover:border-police-gold/20"
              >
                PROBAR GRATIS <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            
            {/* Plan Single */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-[#1C1B1B] border border-white/5 rounded-[2.5rem] p-10 flex flex-col hover:border-police-gold/40 transition-all group relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            >
              <div className="mb-8">
                <div className="w-14 h-14 bg-police-gold/10 rounded-2xl border border-police-gold/20 flex items-center justify-center text-police-gold mb-6 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                  <Zap className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-manrope font-black text-white mb-1 uppercase tracking-tight">Opositor PRO</h3>
                <p className="text-white/30 font-bold uppercase tracking-widest text-[9px] mb-4 italic">
                  {billingCycle === 'monthly' ? 'Pago mensual flexible' : 'Paga 10 meses, ten 12'}
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-manrope font-black tracking-tighter text-white">
                    {billingCycle === 'monthly' ? '29€' : '290€'}
                  </span>
                  <span className="text-white/30 font-bold uppercase tracking-widest text-[10px]">
                    {billingCycle === 'monthly' ? '/ Mes' : '/ Año'}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {[
                  "Acceso total a 1 cuerpo",
                  "Consultas ilimitadas IA",
                  "Simulacros tácticos",
                  "Análisis de fallos",
                  "Temario actualizado"
                ].map((feat, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <CheckCircle className="w-4 h-4 text-police-gold/40 mt-0.5 flex-shrink-0" />
                    <span className="text-[13px] font-bold text-white/70 uppercase tracking-tight">{feat}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                onClick={() => handleCheckout(billingCycle === 'monthly' ? PLANS.single.monthly : PLANS.single.annual)}
                className="w-full py-5 bg-white text-black font-black rounded-2xl text-[11px] hover:bg-police-gold transition-all text-center flex items-center justify-center gap-3 uppercase tracking-[0.2em] shadow-xl hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
              >
                EMPEZAR AHORA <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>

            {/* Plan Multi (ELITE) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1.05 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-black border-2 border-police-gold rounded-[2.5rem] p-10 flex flex-col relative overflow-hidden group shadow-[0_0_60px_rgba(212,175,55,0.15)] z-20"
            >
              <div className="absolute top-0 right-0 py-2 px-12 bg-police-gold text-black font-black text-[10px] uppercase tracking-[0.3em] -rotate-45 translate-x-10 translate-y-8 shadow-2xl">Elite</div>
              <div className="mb-8">
                <div className="w-14 h-14 bg-police-gold rounded-2xl flex items-center justify-center text-black mb-6 group-hover:rotate-6 transition-transform shadow-[0_0_30px_rgba(212,175,55,0.4)]">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-manrope font-black text-white mb-1 uppercase tracking-tight">Academy ELITE</h3>
                <p className="text-police-gold font-black uppercase tracking-widest text-[9px] mb-4 italic">
                  {billingCycle === 'monthly' ? 'Todo incluido' : 'Ahorro Máximo'}
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-manrope font-black tracking-tighter text-white">
                    {billingCycle === 'monthly' ? '49€' : '490€'}
                  </span>
                  <span className="text-police-gold font-black uppercase tracking-widest text-[10px]">
                    {billingCycle === 'monthly' ? '/ Mes' : '/ Año'}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-10 flex-grow text-white">
                {[
                  "Acceso a todos los cuerpos",
                  "Soporte VIP 24/7",
                  "Revisiones preparadores",
                  "Dashboard de rendimiento",
                  "Descarga temarios PDF"
                ].map((feat, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <CheckCircle className="w-4 h-4 text-police-gold mt-0.5 flex-shrink-0" />
                    <span className="font-black text-[13px] uppercase tracking-tight text-white">{feat}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                onClick={() => handleCheckout(billingCycle === 'monthly' ? PLANS.multi.monthly : PLANS.multi.annual)}
                className="w-full py-6 bg-police-gold text-black font-black rounded-2xl text-[12px] hover:scale-[1.03] active:scale-95 transition-all text-center flex items-center justify-center gap-3 uppercase tracking-[0.3em] shadow-[0_0_40px_rgba(212,175,55,0.3)]"
              >
                MATRICULARSE <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>

            {/* Corporate Plan */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-[#1C1B1B] border border-white/5 rounded-[2.5rem] p-10 flex flex-col hover:border-police-gold/20 transition-all group relative overflow-hidden"
            >
              <div className="mb-8">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-white/40 mb-6 group-hover:scale-110 transition-all border border-white/10">
                  <TrendingUp className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-manrope font-black text-white mb-1 uppercase tracking-tight">Corporate</h3>
                <p className="text-white/30 font-bold uppercase tracking-widest text-[9px] mb-4 italic">Academias y Centros</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-manrope font-black tracking-tighter text-white uppercase italic">Consultar</span>
                </div>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {[
                  "Marca Blanca personalizada",
                  "Gestión de alumnos masiva",
                  "Analítica de centro",
                  "Planes adaptados a FP",
                  "Consultoría dedicada"
                ].map((feat, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <CheckCircle className="w-4 h-4 text-white/10 mt-0.5 flex-shrink-0" />
                    <span className="text-[13px] font-bold text-white/40 uppercase tracking-tight">{feat}</span>
                  </li>
                ))}
              </ul>
              
              <Link 
                to="/academy/contacto"
                className="w-full py-5 bg-transparent border border-white/10 text-white/60 font-black rounded-2xl text-[11px] hover:bg-white/5 hover:text-white transition-all text-center flex items-center justify-center gap-3 uppercase tracking-[0.2em]"
              >
                SOLICITAR <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-28 p-12 border border-white/5 rounded-[3rem] bg-gradient-to-br from-[#1C1B1B] to-black text-center relative overflow-hidden group shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-police-gold/5 blur-[100px] pointer-events-none group-hover:bg-police-gold/10 transition-all duration-1000" />
            <h4 className="text-3xl font-manrope font-black text-white mb-4 uppercase tracking-tighter italic">¿Buscas una preparación a medida?</h4>
            <p className="text-white/50 font-medium mb-10 max-w-xl mx-auto text-lg leading-relaxed">
              Nuestro equipo de soporte está disponible para asesorarte sobre qué modalidad se adapta mejor a tu proceso selectivo y objetivos.
            </p>
            <Link 
              to="/academy/contacto" 
              className="text-police-gold font-black uppercase tracking-[0.4em] text-[11px] hover:scale-105 inline-flex items-center gap-3 transition-transform pb-2 border-b-2 border-police-gold/30 hover:border-police-gold shadow-[0_5px_15px_rgba(212,175,55,0.1)]"
            >
              Contactar con Asesoría Academy <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AcademyPricing;
