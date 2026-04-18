import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Sparkles, MessageCircle, ArrowRight } from 'lucide-react';

const WHATSAPP_LINK = "https://wa.me/34605392912?text=Hola,%20me%20gustaría%20solicitar%20una%20demostración%3A%20Plan%20Ayuntamiento.";

const Pricing = ({ hideHeader = false }: { hideHeader?: boolean }) => {
  const [isAnnual, setIsAnnual] = useState(false);

  const handleCheckout = async (priceId?: string, isExternal?: boolean, link?: string) => {
    if (isExternal && link) {
      window.open(link, '_blank');
      return;
    }

    if (!priceId) {
      window.location.href = "https://munilex.lovable.app/auth/register";
      return;
    }

    try {
      const response = await fetch("https://qclsoabgxbmtaolyzmfz.supabase.co/functions/v1/create-checkout", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priceId })
      });
      const data = await response.json();
      if (data.url) {
        window.location.href = data.url;
      }
    } catch (error) {
      console.error("Error creating checkout:", error);
      window.location.href = "https://munilex.lovable.app/auth/register";
    }
  };

  const PLANS = [
    {
      name: "Plan Profesional",
      price: isAnnual ? "99€" : "120€",
      period: isAnnual ? "/mes (anual)" : "/mes",
      desc: "Ideal para Secretarios e Interventores",
      features: [
        "Chat jurídico ilimitado",
        "Redactor de documentos IA",
        "Agenda de plazos (+Telegram)",
        "Modelos municipales oficiales",
        "Sincronización BOE real-time"
      ],
      button: "Comenzar ahora",
      popular: true,
      priceId: isAnnual ? "price_annual_placeholder" : "price_1SbNkHCP1LDO0gSbF2c2c8yB"
    },
    {
      name: "Ayuntamiento",
      price: "A medida",
      period: "",
      desc: "Solución integral para consistorios",
      features: [
        "Usuarios ilimitados",
        "Soberanía de datos exclusiva",
        "Formación para todo el equipo",
        "Soporte 24/7 preferente",
        "Gestión de roles y auditoría"
      ],
      button: "Presupuesto a medida",
      popular: false,
      external: true,
      link: WHATSAPP_LINK
    }
  ];

  return (
    <section id="precios" className={`py-24 bg-surface-low relative overflow-hidden ${hideHeader ? 'pt-0' : ''}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        {!hideHeader && (
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-black mb-8 text-on-surface tracking-tighter">
              Elija su <span className="text-primary-container">plan de impacto</span>
            </h2>
          </div>
        )}

        {/* Pricing Toggle */}
        <div className="flex justify-center items-center gap-4 mb-20">
          <span className={`text-sm font-bold ${!isAnnual ? 'text-primary' : 'text-on-surface-variant'}`}>Mensual</span>
          <button 
            onClick={() => setIsAnnual(!isAnnual)}
            className="w-16 h-8 bg-surface-container rounded-full relative p-1 transition-colors hover:bg-surface-high"
          >
            <motion.div 
              animate={{ x: isAnnual ? 32 : 0 }}
              className="w-6 h-6 bg-primary-container rounded-full shadow-md"
            />
          </button>
          <span className={`text-sm font-bold ${isAnnual ? 'text-primary' : 'text-on-surface-variant'} flex items-center gap-2`}>
            Anual
            <span className="bg-secondary-cyan/20 text-secondary-cyan px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-tighter">Ahorre 20%</span>
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          {PLANS.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`relative flex flex-col p-12 rounded-[3.5rem] border transition-all duration-500 hover:shadow-premium ${
                p.popular 
                  ? 'bg-secondary text-white border-white/10 scale-105 z-10' 
                  : 'bg-white text-secondary border-surface-variant/50'
              }`}
            >
              <div className="mb-10">
                <h3 className="text-2xl font-black mb-2 tracking-tight">{p.name}</h3>
                <p className="text-sm font-bold opacity-60">{p.desc}</p>
              </div>
              
              <div className="mb-12 flex items-baseline gap-2">
                <span className="text-6xl font-black tracking-tight">{p.price}</span>
                <span className="text-sm font-bold opacity-60">{p.period}</span>
              </div>
              
              <ul className="space-y-6 mb-16 flex-grow">
                {p.features.map((f, j) => (
                  <li key={j} className="flex gap-4 text-sm font-bold items-start group/item">
                    <Check className={`w-5 h-5 flex-shrink-0 ${p.popular ? 'text-secondary-cyan' : 'text-primary-container'}`} />
                    <span className="opacity-80">{f}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                onClick={() => handleCheckout(p.priceId, p.external, p.link)}
                className={`w-full py-6 rounded-2xl font-black text-center transition-all flex items-center justify-center gap-3 shadow-lg hover:scale-[1.02] active:scale-95 ${
                  p.popular 
                    ? 'bg-white text-secondary' 
                    : 'bg-secondary text-white'
                }`}
              >
                {p.external && <MessageCircle className="w-5 h-5" />}
                {p.button}
                {!p.external && <ArrowRight className="w-5 h-5" />}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
