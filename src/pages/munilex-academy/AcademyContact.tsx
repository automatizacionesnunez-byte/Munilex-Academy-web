import { Send, MapPin, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const AcademyContact = () => {
  return (
    <div className="pt-48 pb-24 min-h-screen bg-[#131313] text-[#E5E2E1] px-6 md:px-8 font-inter selection:bg-[#d4af37]/30 selection:text-white">
      <Helmet>
        <title>Contacto | Munilex Academy</title>
        <meta name="description" content="Contacta con Munilex Academy para resolver tus dudas sobre oposiciones, formación profesional o planes corporativos." />
      </Helmet>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <h1 className="text-6xl md:text-8xl font-black mb-10 uppercase tracking-tighter leading-[0.85] text-white">
              Hablemos de <br/>
              <span className="italic text-[#d4af37]">tu futuro</span>
            </h1>
            <p className="text-xl text-white/50 max-w-xl mb-12 font-semibold">
              ¿Dudas sobre el temario, la IA o qué plan se adapta mejor a tu centro? Nuestro equipo técnico y docente te atenderá en menos de 24h.
            </p>

            <div className="space-y-8">
              {[
                { icon: <Mail className="w-6 h-6" />, label: "Email", value: "administracion@munilex.es" },
                { icon: <Phone className="w-6 h-6" />, label: "WhatsApp", value: "+34 605 39 29 12" },
                { icon: <MapPin className="w-6 h-6" />, label: "Ubicación", value: "Madrid, España" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 group">
                  <div className="w-12 h-12 bg-[#1C1B1B] border border-white/5 rounded-2xl flex items-center justify-center text-[#d4af37] group-hover:bg-[#d4af37] group-hover:text-black transition-all">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-[#d4af37] mb-1">{item.label}</div>
                    <div className="text-lg font-bold text-white">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }} 
            animate={{ opacity: 1, x: 0 }}
            className="bg-[#1C1B1B] border border-white/5 rounded-[3rem] p-10 md:p-14 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#d4af37]/5 rounded-full blur-[100px] pointer-events-none" />
            
            <form className="space-y-8 relative z-10">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-[#d4af37] uppercase tracking-[0.25em]">Nombre Completo</label>
                  <input type="text" className="w-full bg-[#131313] border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#d4af37] transition-all placeholder:text-white/10 font-bold" placeholder="Tu nombre" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-[#d4af37] uppercase tracking-[0.25em]">Email de Contacto</label>
                  <input type="email" className="w-full bg-[#131313] border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#d4af37] transition-all placeholder:text-white/10 font-bold" placeholder="tu@email.com" />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black text-[#d4af37] uppercase tracking-[0.25em]">Interés</label>
                <select className="w-full bg-[#131313] border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#d4af37] transition-all font-bold appearance-none">
                  <option value="oposiciones">Oposiciones</option>
                  <option value="corporate">Plan Corporate (Academias)</option>
                  <option value="fp">Centros FP</option>
                  <option value="otro">Otros asuntos</option>
                </select>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black text-[#d4af37] uppercase tracking-[0.25em]">Mensaje</label>
                <textarea rows={4} className="w-full bg-[#131313] border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#d4af37] transition-all placeholder:text-white/10 font-bold resize-none" placeholder="¿Cómo podemos ayudarte?"></textarea>
              </div>
              <button type="button" className="w-full py-5 bg-[#d4af37] text-black font-black rounded-2xl text-xs hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 uppercase tracking-[0.2em] shadow-xl shadow-[#d4af37]/10">
                <Send className="w-4 h-4" />
                Enviar Mensaje
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AcademyContact;
