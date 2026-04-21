import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail, CheckCircle, AlertCircle, RefreshCcw } from 'lucide-react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const AcademyContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: 'oposiciones',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      // Configuración de Formspree - Enviando a administracion@munilex.es
      const response = await fetch('https://formspree.io/f/mqakvjge', { // Nota: El usuario debe crear un form en formspree y poner su ID aquí
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          _subject: `Nuevo contacto Academy: ${formData.interest}`,
          nombre: formData.name,
          email: formData.email,
          interes: formData.interest,
          mensaje: formData.message
        })
      });

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="pt-48 pb-24 min-h-screen bg-[#131313] flex items-center justify-center px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-[#1C1B1B] p-12 md:p-20 rounded-[4rem] border border-white/5 text-center max-w-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#d4af37]/10 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/2" />
          <CheckCircle className="w-24 h-24 text-[#d4af37] mx-auto mb-10" />
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-6 uppercase italic">¡ENVIADO!</h2>
          <p className="text-xl text-white/50 font-medium leading-relaxed mb-10">
            Gracias, <span className="text-[#d4af37] font-black">{formData.name}</span>. Hemos recibido tu mensaje. 
            Te contactaremos en menos de 24h a <span className="font-bold text-white">{formData.email}</span>.
          </p>
          <button 
            onClick={() => setStatus('idle')}
            className="px-10 py-5 bg-[#d4af37] text-black font-black rounded-2xl hover:scale-105 transition-all flex items-center justify-center gap-3 mx-auto uppercase tracking-widest text-xs"
          >
            Volver al Formulario
            <RefreshCcw className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    );
  }

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
              ¿Dudas del temario, la IA o qué plan se adapta mejor a tu centro académico? ¿Cómo adaptamos esto a tu FP? Nuestro equipo técnico y docente te atenderá en menos de 24h.
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
            
            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-[#d4af37] uppercase tracking-[0.25em]">Nombre Completo</label>
                  <input 
                    required
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-[#131313] border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#d4af37] transition-all placeholder:text-white/10 font-bold" 
                    placeholder="Tu nombre" 
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-[#d4af37] uppercase tracking-[0.25em]">Email de Contacto</label>
                  <input 
                    required
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-[#131313] border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#d4af37] transition-all placeholder:text-white/10 font-bold" 
                    placeholder="tu@email.com" 
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black text-[#d4af37] uppercase tracking-[0.25em]">Interés</label>
                <select 
                  value={formData.interest}
                  onChange={(e) => setFormData({...formData, interest: e.target.value})}
                  className="w-full bg-[#131313] border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#d4af37] transition-all font-bold appearance-none cursor-pointer"
                >
                  <option value="oposiciones">Oposiciones</option>
                  <option value="corporate">Plan Corporate (Academias)</option>
                  <option value="fp">Centros FP</option>
                  <option value="otro">Otros asuntos</option>
                </select>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black text-[#d4af37] uppercase tracking-[0.25em]">Mensaje</label>
                <textarea 
                  required
                  rows={4} 
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-[#131313] border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#d4af37] transition-all placeholder:text-white/10 font-bold resize-none" 
                  placeholder="¿Cómo podemos ayudarte?"
                ></textarea>
              </div>
              
              {status === 'error' && (
                <div className="flex items-center gap-3 text-red-500 font-bold bg-red-500/10 p-4 rounded-xl border border-red-500/20">
                  <AlertCircle className="w-5 h-5" />
                  Error al enviar. Inténtalo de nuevo.
                </div>
              )}

              <button 
                type="submit" 
                disabled={status === 'sending'}
                className={`w-full py-5 font-black rounded-2xl text-xs transition-all flex items-center justify-center gap-3 uppercase tracking-[0.2em] shadow-xl ${status === 'sending' ? 'bg-[#2A2A2A] text-white/20' : 'bg-[#d4af37] text-black hover:scale-[1.02] active:scale-95 shadow-[#d4af37]/10'}`}
              >
                {status === 'sending' ? 'Enviando...' : (
                  <>
                    <Send className="w-4 h-4" />
                    Enviar Mensaje
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AcademyContact;
