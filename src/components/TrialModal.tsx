import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

interface TrialModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubscribe: () => void;
}

const TrialModal = ({ isOpen, onClose, onSubscribe }: TrialModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-8">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-2xl bg-[#1C1B1B] border border-[#353534] rounded-[3.5rem] overflow-hidden shadow-[0_50px_100px_rgba(212,175,55,0.2)]"
          >
            {/* Header / Accent */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#f2ca50] via-[#d4af37] to-[#f2ca50]" />
            
            <button 
              onClick={onClose}
              className="absolute top-8 right-8 text-white/40 hover:text-white transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            <div className="p-12 md:p-16">
              <div className="inline-flex items-center bg-[#2A2A2A] px-5 py-2 rounded-full mb-10 border border-[#353534]">
                <Zap className="w-4 h-4 text-[#d4af37] mr-3" />
                <span className="text-[#d4af37] text-[11px] font-black uppercase tracking-[0.2em]">Periodo de Prueba Finalizado</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-black text-white leading-[1.1] tracking-tighter mb-8 uppercase">
                ¿Quieres disfrutar de todas las <span className="text-[#d4af37]">ventajas sin límites?</span>
              </h2>

              <p className="text-lg text-white/60 leading-relaxed font-medium mb-12 max-w-lg">
                Tu tiempo de prueba ha terminado, pero tu camino hacia la plaza solo acaba de empezar. Suscríbete ahora para mantener tu progreso y acceder al arsenal completo.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
                {[
                  { title: "Simulacros Infinitos", icon: <Sparkles className="w-5 h-5" /> },
                  { title: "IA Jurídica 24/7", icon: <Zap className="w-5 h-5" /> },
                  { title: "Temarios PDF Pro", icon: <ShieldCheck className="w-5 h-5" /> },
                  { title: "Soporte A1", icon: <ArrowRight className="w-5 h-5" /> },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 text-white/80 font-bold">
                    <div className="w-10 h-10 rounded-xl bg-[#2A2A2A] flex items-center justify-center text-[#d4af37]">
                      {item.icon}
                    </div>
                    <span className="text-sm">{item.title}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-6">
                <button 
                  onClick={onSubscribe}
                  className="flex-grow py-6 bg-[#d4af37] text-[#241a00] font-black rounded-2xl hover:opacity-90 transition-all text-center shadow-[0_10px_30px_rgba(212,175,55,0.3)] flex items-center justify-center gap-3 uppercase tracking-widest text-xs"
                >
                  Suscribirse Ahora <ArrowRight className="w-4 h-4" />
                </button>
                <button 
                  onClick={onClose}
                  className="px-10 py-6 bg-transparent border border-white/10 text-white/60 font-black rounded-2xl hover:bg-white/5 transition-all text-center uppercase tracking-widest text-xs"
                >
                  Más tarde
                </button>
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-[#d4af37]/5 rounded-full blur-[80px]" />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default TrialModal;
