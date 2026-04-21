import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, ArrowRight, MessageSquare, CheckCircle, RefreshCcw, AlertCircle } from 'lucide-react';

const Contacto = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Ayuntamientos (Plataforma Institucional)',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      // Configuración de Formspree - Enviando a administracion@munilex.es
      const response = await fetch('https://formspree.io/f/mqakvjge', { // Reutilizando el mismo para pruebas, el usuario puede cambiarlo
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          _subject: `Nuevo contacto MUNILEX: ${formData.subject}`,
          nombre: formData.name,
          email: formData.email,
          asunto: formData.subject,
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
      <div className="pt-32 pb-24 bg-white min-h-screen flex items-center justify-center px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-12 md:p-20 rounded-[4rem] shadow-premium border border-primary/5 text-center max-w-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary-container/10 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/2" />
          <CheckCircle className="w-24 h-24 text-primary-container mx-auto mb-10" />
          <h2 className="text-4xl md:text-5xl font-black text-secondary tracking-tighter mb-6 italic">¡Solicitud Enviada!</h2>
          <p className="text-xl text-on-surface-variant font-medium leading-relaxed mb-10">
            Gracias, <span className="text-primary-container font-black">{formData.name}</span>. Hemos recibido su mensaje. 
            Nuestro equipo le contactará en menos de 24h a <span className="font-bold text-secondary">{formData.email}</span>.
          </p>
          <button 
            onClick={() => setStatus('idle')}
            className="px-10 py-5 bg-secondary text-white font-black rounded-2xl hover:bg-primary transition-all flex items-center justify-center gap-3 mx-auto"
          >
            Volver al Formulario
            <RefreshCcw className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen font-inter">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-[13px] font-black uppercase tracking-[0.3em] text-primary-container mb-6">Estamos a su servicio</div>
            <h1 className="text-4xl md:text-7xl font-black text-secondary tracking-tighter mb-10 italic leading-[1]">
               Conectamos Rigor <span className="text-primary-container font-black">Humano</span> con <span className="text-primary-container font-black">IA.</span>
            </h1>
            <p className="text-xl text-on-surface-variant font-medium leading-relaxed mb-16 max-w-xl">
               ¿Tiene alguna duda sobre nuestra plataforma, cómo podemos adaptarla para su <span className="text-secondary font-bold">ayuntamiento</span>, <span className="text-secondary font-bold">academia</span>, <span className="text-secondary font-bold">oposiciones</span> o <span className="text-secondary font-bold">FP</span>? Nuestro equipo te atenderá en menos de 24h.
            </p>

            <div className="space-y-12">
               <div className="flex items-start gap-6 group">
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-lg border border-primary/5 flex items-center justify-center text-primary-container group-hover:scale-110 transition-transform">
                     <Mail className="w-8 h-8" />
                  </div>
                  <div>
                     <h4 className="font-black text-secondary text-xl tracking-tight mb-1">Email Directo</h4>
                     <p className="text-lg font-bold text-primary-container">administracion@munilex.es</p>
                     <p className="text-sm font-medium opacity-50 uppercase tracking-widest mt-1">Notificación Instantánea</p>
                  </div>
               </div>

               <div className="flex items-start gap-6 group">
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-lg border border-primary/5 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                     <MessageSquare className="w-8 h-8" />
                  </div>
                  <div>
                     <h4 className="font-black text-secondary text-xl tracking-tight mb-1">WhatsApp Directo</h4>
                     <a 
                        href="https://wa.me/34605392912" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-lg font-bold text-primary hover:underline flex items-center gap-2"
                     >
                        +34 605 39 29 12
                        <ArrowRight className="w-4 h-4" />
                     </a>
                     <p className="text-sm font-medium opacity-50 uppercase tracking-widest mt-1">Conexión encriptada</p>
                  </div>
               </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="bg-white p-12 md:p-16 rounded-[4rem] border border-surface-variant/30 shadow-premium relative overflow-hidden"
          >
             <div className="absolute top-0 right-0 w-32 h-32 bg-primary-container/10 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/2" />
             
             <form onSubmit={handleSubmit} className="relative z-10 space-y-10">
                <div className="grid md:grid-cols-2 gap-10">
                   <div className="space-y-4">
                      <label className="text-xs font-black uppercase tracking-widest opacity-40 px-2">Nombre Completo</label>
                      <input 
                        required
                        type="text" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="Jose Garcia" 
                        className="w-full bg-surface-low border border-surface-variant/50 rounded-2xl p-5 text-secondary font-bold placeholder:opacity-30 focus:outline-none focus:ring-4 focus:ring-primary-container/10 focus:border-primary-container transition-all"
                      />
                   </div>
                   <div className="space-y-4">
                      <label className="text-xs font-black uppercase tracking-widest opacity-40 px-2">Email Corporativo</label>
                      <input 
                        required
                        type="email" 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="intervencion@ayuntamiento.com" 
                        className="w-full bg-surface-low border border-surface-variant/50 rounded-2xl p-5 text-secondary font-bold placeholder:opacity-30 focus:outline-none focus:ring-4 focus:ring-primary-container/10 focus:border-primary-container transition-all"
                      />
                   </div>
                </div>

                <div className="space-y-4">
                   <label className="text-xs font-black uppercase tracking-widest opacity-40 px-2">Asunto de Consulta</label>
                   <select 
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className="w-full bg-surface-low border border-surface-variant/50 rounded-2xl p-5 text-secondary font-bold focus:outline-none focus:ring-4 focus:ring-primary-container/10 focus:border-primary-container transition-all appearance-none cursor-pointer"
                   >
                      <option>Ayuntamientos (Plataforma Institucional)</option>
                      <option>Academias (Planes Corporate)</option>
                      <option>Oposiciones (Soporte al Opositor)</option>
                      <option>Centros FP (Formación Profesional)</option>
                      <option>Otros Asuntos</option>
                   </select>
                </div>

                <div className="space-y-4">
                   <label className="text-xs font-black uppercase tracking-widest opacity-40 px-2">Su mensaje</label>
                   <textarea 
                     required
                     value={formData.message}
                     onChange={(e) => setFormData({...formData, message: e.target.value})}
                     rows={5} 
                     placeholder="Describa el desafío jurídico que desea resolver..." 
                     className="w-full bg-surface-low border border-surface-variant/50 rounded-2xl p-5 text-secondary font-bold placeholder:opacity-30 focus:outline-none focus:ring-4 focus:ring-primary-container/10 focus:border-primary-container transition-all resize-none"
                   />
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-3 text-red-500 font-bold bg-red-50 p-4 rounded-xl border border-red-100">
                    <AlertCircle className="w-5 h-5" />
                    Error al enviar. Inténtelo de nuevo.
                  </div>
                )}

                <button 
                  type="submit"
                  disabled={status === 'sending'}
                  className={`w-full py-6 text-white font-black rounded-[2rem] text-xl shadow-premium transition-all flex items-center justify-center gap-4 group ${status === 'sending' ? 'bg-surface-variant animate-pulse' : 'bg-primary hover:shadow-2xl hover:bg-primary-container'}`}
                >
                   {status === 'sending' ? 'Notificando equipo...' : 'Enviar Solicitud'}
                   <Send className={`w-6 h-6 ${status === 'sending' ? 'hidden' : 'group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform'}`} />
                </button>
             </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
