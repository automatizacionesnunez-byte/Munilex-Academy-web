import { motion } from 'framer-motion';
import { Check, Sparkles, MessageCircle, ArrowRight } from 'lucide-react';

const WHATSAPP_LINK = "https://wa.me/34605392912?text=Hola,%20me%20gustaría%20solicitar%20una%20demostración%20para%20mi%20Ayuntamiento.";

const plans = [
  {
    name: "Plan Mensual",
    price: "120€",
    period: "/mes + IVA",
    desc: "Para Secretarios e Interventores en activo",
    features: [
      "Chat jurídico profesional",
      "Redactor de documentos IA",
      "+90 modelos municipales",
      "Gestor de plazos inteligente",
      "Soporte técnico"
    ],
    button: "Suscribirse",
    popular: false,
    priceId: "price_1SbNkHCP1LDO0gSbF2c2c8yB"
  },
  {
    name: "Plan Anual",
    price: "1.200€",
    period: "/año + IVA",
    desc: "Ahorra 2 meses con la suscripción anual",
    features: [
      "Todo lo del Plan Mensual",
      "Ahorro directo de 2 cuotas",
      "Exportación Word institucional",
      "Preferente en nuevas funciones",
      "Acceso prioritario"
    ],
    button: "Suscribirse",
    popular: true,
    priceId: "price_1SbNkHCP1LDO0gSbF2c2c8yB_ANUAL"
  },
  {
    name: "Ayuntamientos",
    price: "Consultar",
    period: "",
    desc: "Plan personalizado para el consistorio",
    features: [
      "Acceso para todo el personal",
      "Roles administrativos y auditoría",
      "Formación presencial / online",
      "Soporte 24/7 prioritario",
      "Entorno privado (Cloud Soberano)"
    ],
    button: "Solicitar Demo",
    popular: false,
    link: WHATSAPP_LINK,
    external: true
  }
];

interface PricingProps {
  hideHeader?: boolean;
}

const Pricing = ({ hideHeader = false }: PricingProps) => {
  const handleCheckout = async (priceId?: string, isExternal?: boolean, link?: string) => {
    if (isExternal && link) {
      window.open(link, '_blank');
      return;
    }

    if (!priceId) {
      window.location.href = "https://munilex.lovable.app/auth/opositores/register";
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
      // Fallback to register if checkout fails
      window.location.href = "https://munilex.lovable.app/auth/opositores/register";
    }
  };

  return (
    <section id="precios" className={`py-24 bg-surface-low relative overflow-hidden ${hideHeader ? 'pt-0' : ''}`}>
      {/* Decorative Blur */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-container/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-cyan/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        {!hideHeader && (
          <div className="text-center mb-24 max-w-3xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary-container font-black uppercase tracking-[0.2em] text-[14px] mb-4"
            >
              Inversión en Excelencia
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-5xl md:text-8xl font-black mb-8 text-on-surface tracking-tighter"
            >
              Planes adaptados al <span className="text-primary-container">sector jurídico</span>
            </motion.h2>
            <p className="text-xl text-on-surface-variant font-medium">
              Todos los planes incluyen 15 consultas gratuitas al mes para que experimente la potencia de Munilex sin compromiso.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-12">
          {plans.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative flex flex-col p-12 rounded-[3.5rem] border transition-all duration-500 shadow-ambient hover:shadow-premium group ${
                p.popular 
                  ? 'bg-primary text-white border-primary-container scale-105 z-20 shadow-premium group-hover:scale-[1.08]' 
                  : 'bg-white text-secondary border-surface-variant/50'
              }`}
            >
              {p.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-secondary-fixed text-primary text-[13px] font-black uppercase tracking-[0.2em] px-6 py-2 rounded-full flex items-center gap-2 shadow-lg">
                  <Sparkles className="w-4 h-4 fill-current" /> Recomendado
                </div>
              )}
              
              <div className="mb-10">
                <h3 className={`text-2xl font-black mb-3 tracking-tight ${p.popular ? 'text-white' : 'text-secondary'}`}>{p.name}</h3>
                <p className={`text-sm font-bold opacity-70 ${p.popular ? 'text-primary-fixed' : 'text-on-surface-variant'}`}>{p.desc}</p>
              </div>
              
              <div className="mb-12 flex items-baseline gap-2">
                <span className="text-5xl font-black tracking-tight">{p.price}</span>
                <span className={`text-sm font-bold opacity-60`}>{p.period}</span>
              </div>
              
              <div className="w-full h-px bg-current opacity-10 mb-10" />
              
              <ul className="space-y-6 mb-16 flex-grow">
                {p.features.map((f, j) => (
                  <li key={j} className="flex gap-4 text-sm font-bold items-start group/item">
                    <Check className={`w-5 h-5 flex-shrink-0 transition-transform group-hover/item:scale-125 ${p.popular ? 'text-secondary-fixed' : 'text-primary-container'}`} />
                    <span className="opacity-80">{f}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                onClick={() => handleCheckout(p.priceId, p.external, p.link)}
                className={`w-full py-5 rounded-2xl font-black text-center transition-all flex items-center justify-center gap-3 shadow-lg hover:shadow-xl active:scale-95 ${
                  p.popular 
                    ? 'bg-white text-primary hover:bg-secondary-fixed shadow-primary/20' 
                    : 'bg-primary text-white hover:bg-primary-container'
                }`}
              >
                {p.external && <MessageCircle className="w-5 h-5" />}
                {p.button}
                {!p.external && <ArrowRight className="w-5 h-5" />}
              </button>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <p className="text-sm font-bold text-on-surface-variant opacity-60">
            ¿Necesita un presupuesto oficial para su Ayuntamiento? <a href={WHATSAPP_LINK} className="text-primary-container border-b-2 border-primary-container/20 hover:border-primary-container transition-all">Consúltenos directamente</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
