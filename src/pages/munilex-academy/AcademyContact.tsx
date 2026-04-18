import { Send } from 'lucide-react';
import { motion } from 'framer-motion';

const AcademyContact = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#001529] text-white px-6 md:px-8">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter">
            Hablemos de <span className="text-secondary-cyan">tu Plaza</span>
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            ¿Tienes dudas sobre el temario, la IA o qué oposición se adapta mejor a tu perfil? Escríbenos y un preparador contactará contigo.
          </p>
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-xl">
        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-secondary-cyan uppercase tracking-wider">Nombre Completo</label>
              <input type="text" className="w-full bg-black/50 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-secondary-cyan transition-colors" placeholder="Ej: Laura Gómez" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-secondary-cyan uppercase tracking-wider">Email</label>
              <input type="email" className="w-full bg-black/50 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-secondary-cyan transition-colors" placeholder="laura@ejemplo.com" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-secondary-cyan uppercase tracking-wider">Oposición de Interés</label>
            <select className="w-full bg-black/50 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-secondary-cyan transition-colors">
              <option value="">Selecciona tu ruta...</option>
              <option value="habilitados">Habilitados Nacionales</option>
              <option value="age">Administración General del Estado</option>
              <option value="fuerzas">Policía Nacional / Guardia Civil</option>
              <option value="iipp">Instituciones Penitenciarias</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-secondary-cyan uppercase tracking-wider">Mensaje</label>
            <textarea rows={4} className="w-full bg-black/50 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-secondary-cyan transition-colors" placeholder="¿En qué podemos ayudarte?"></textarea>
          </div>
          <button type="button" className="w-full py-4 bg-gradient-to-r from-secondary-cyan to-primary-container text-white font-black rounded-xl text-lg hover:scale-[1.02] active:scale-95 transition-transform flex items-center justify-center gap-2 uppercase tracking-tight shadow-[0_0_20px_rgba(6,211,170,0.3)]">
            <Send className="w-5 h-5" />
            Enviar Mensaje a Preparadores
          </button>
        </form>
      </div>
    </div>
  );
};

export default AcademyContact;
