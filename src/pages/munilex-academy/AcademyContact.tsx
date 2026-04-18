import { Send } from 'lucide-react';
import { motion } from 'framer-motion';

const AcademyContact = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-surface text-on-surface px-6 md:px-8 font-inter selection:bg-police-gold/20 selection:text-on-surface">
      <div className="max-w-4xl mx-auto text-center mb-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-5xl md:text-[6.5rem] font-black mb-8 uppercase tracking-tighter leading-[0.95] text-on-surface">
            Hablemos de <br/><span className="text-police-gold">tu Plaza</span>
          </h1>
          <p className="text-xl text-on-surface-variant font-semibold max-w-2xl mx-auto leading-relaxed">
            ¿Tienes dudas sobre el temario, la IA o qué oposición se adapta mejor a tu perfil? Escríbenos y un preparador contactará contigo.
          </p>
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto bg-white border border-outline-variant rounded-[3.5rem] p-10 md:p-16 shadow-premium relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-police-gold/[0.01] pointer-events-none" />
        <form className="space-y-10 relative z-10">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <label className="text-[10px] font-black text-on-surface uppercase tracking-[.25em] pl-1">Nombre Completo</label>
              <input 
                type="text" 
                className="w-full bg-surface-low border border-outline-variant rounded-2xl px-6 py-4 text-on-surface font-semibold focus:outline-none focus:border-police-gold focus:ring-1 focus:ring-police-gold/20 transition-all placeholder:text-on-surface-variant/40" 
                placeholder="Ej: Laura Gómez" 
              />
            </div>
            <div className="space-y-3">
              <label className="text-[10px] font-black text-on-surface uppercase tracking-[.25em] pl-1">Email</label>
              <input 
                type="email" 
                className="w-full bg-surface-low border border-outline-variant rounded-2xl px-6 py-4 text-on-surface font-semibold focus:outline-none focus:border-police-gold focus:ring-1 focus:ring-police-gold/20 transition-all placeholder:text-on-surface-variant/40" 
                placeholder="laura@ejemplo.com" 
              />
            </div>
          </div>
          <div className="space-y-3">
            <label className="text-[10px] font-black text-on-surface uppercase tracking-[.25em] pl-1">Oposición de Interés</label>
            <div className="relative">
              <select className="w-full bg-surface-low border border-outline-variant rounded-2xl px-6 py-4 text-on-surface font-semibold focus:outline-none focus:border-police-gold focus:ring-1 focus:ring-police-gold/20 transition-all appearance-none cursor-pointer">
                <option value="">Selecciona tu ruta...</option>
                <option value="habilitados">Habilitados Nacionales</option>
                <option value="age">Administración General del Estado</option>
                <option value="fuerzas">Policía Nacional / Guardia Civil</option>
                <option value="iipp">Instituciones Penitenciarias</option>
              </select>
            </div>
          </div>
          <div className="space-y-3">
            <label className="text-[10px] font-black text-on-surface uppercase tracking-[.25em] pl-1">Mensaje</label>
            <textarea 
              rows={4} 
              className="w-full bg-surface-low border border-outline-variant rounded-2xl px-6 py-4 text-on-surface font-semibold focus:outline-none focus:border-police-gold focus:ring-1 focus:ring-police-gold/20 transition-all placeholder:text-on-surface-variant/40 resize-none" 
              placeholder="¿En qué podemos ayudarte?"
            ></textarea>
          </div>
          <button 
            type="button" 
            className="w-full py-6 bg-on-surface text-white font-black rounded-2xl text-xs flex items-center justify-center gap-4 uppercase tracking-[.25em] shadow-premium hover:scale-[1.02] active:scale-95 transition-all"
          >
            <Send className="w-4 h-4 text-police-gold" />
            Enviar Mensaje a Preparadores
          </button>
        </form>
      </div>
      
      <div className="max-w-4xl mx-auto mt-16 text-center">
        <p className="text-on-surface-variant/60 font-semibold text-sm uppercase tracking-widest">Respuesta garantizada en menos de 24 horas laborables.</p>
      </div>
    </div>
  );
};

export default AcademyContact;
