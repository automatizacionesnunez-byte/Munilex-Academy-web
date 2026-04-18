import { motion } from 'framer-motion';
import { Clock, Zap, ShieldCheck, CheckCircle, Smartphone, Cpu } from 'lucide-react';

const topFeatures = [
  {
    title: "Más tiempo para lo importante",
    description: "Automatice tareas rutinarias de investigación y redacción, permitiéndole centrarse en la toma de decisiones críticas.",
    icon: <Clock className="w-8 h-8" />,
    bg: "bg-primary-fixed",
    accent: "bg-primary"
  },
  {
    title: "Agilidad en tu día a día",
    description: "Acceso instantáneo a jurisprudencia y normativa local actualizada, sin navegar por bases de datos obsoletas.",
    icon: <Zap className="w-8 h-8" />,
    bg: "bg-secondary-fixed",
    accent: "bg-secondary"
  },
  {
    title: "Gestión más eficiente y segura",
    description: "Cumplimiento garantizado con la normativa española mediante algoritmos supervisados por expertos juristas.",
    icon: <ShieldCheck className="w-8 h-8" />,
    bg: "bg-surface-variant",
    accent: "bg-tertiary"
  }
];

const Features = () => {
  return (
    <section id="servicios" className="py-24 bg-surface-low">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center md:text-left mb-20 max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary-container font-black uppercase tracking-[0.2em] text-[14px] mb-4"
          >
            Eficiencia redefinida
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-6 text-on-surface"
          >
            Herramientas inteligentes para la <span className="text-primary-container">Administración Local</span>
          </motion.h2>
          <p className="text-xl text-on-surface-variant max-w-2xl font-medium">
            Transformamos el flujo de trabajo jurídico municipal con tecnología de vanguardia y rigor institucional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {topFeatures.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-10 rounded-[2rem] shadow-ambient hover:shadow-premium transition-all duration-500 group border border-surface-variant/50"
            >
              <div className={`w-16 h-16 ${f.bg} rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary transition-all duration-500 group-hover:text-white`}>
                {f.icon}
              </div>
              <h3 className="text-2xl font-black mb-4 text-on-surface tracking-tight">{f.title}</h3>
              <p className="text-on-surface-variant leading-relaxed font-medium">
                {f.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Showcase / CTA Block */}
        <div className="p-12 md:p-24 bg-primary text-white rounded-[3rem] relative overflow-hidden shadow-premium">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-container/20 -skew-x-12 transform translate-x-1/4" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="mb-10 text-white">
                Innovación y eficiencia legal para tu Ayuntamiento
              </h2>
              <div className="space-y-10">
                {[
                  { t: "IA entrenada en derecho público", d: "Modelos especializados en la Ley 39/2015, Ley 40/2015 y contratos del sector público." },
                  { t: "Seguridad de nivel gubernamental", d: "Encriptación de extremo a extremo y servidores alojados íntegramente en la UE." },
                  { t: "Soporte técnico 24/7", d: "Asistencia prioritaria para garantizar que su administración nunca se detenga." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="mt-1">
                      <CheckCircle className="w-8 h-8 text-secondary-fixed transition-transform group-hover:scale-110" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-black mb-2 tracking-tight">{item.t}</h4>
                      <p className="text-primary-fixed/80 text-lg font-medium">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="hidden lg:block relative">
              <div className="bg-white/10 backdrop-blur-3xl p-10 rounded-[2.5rem] border border-white/20 shadow-2xl relative overflow-hidden">
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-12 h-12 bg-secondary-fixed rounded-full flex items-center justify-center text-primary shadow-lg">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <div className="font-black text-lg tracking-tight uppercase">Munilex AI <span className="ml-3 text-[12px] bg-secondary-fixed text-primary px-3 py-1 rounded-full">Pro</span></div>
                  <div className="ml-auto flex gap-1">
                    <div className="w-1.5 h-1.5 bg-secondary-cyan rounded-full animate-pulse" />
                    <div className="w-1.5 h-1.5 bg-secondary-cyan/40 rounded-full" />
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="p-5 bg-white/5 rounded-2xl text-sm border border-white/10 font-medium">
                    ¿Puede resumir los plazos de licitación para este contrato de servicios?
                  </div>
                  <div className="p-5 bg-primary-container/40 rounded-2xl text-sm border border-white/20 leading-relaxed font-bold">
                    Basado en la LCSP, el plazo mínimo para un procedimiento abierto simplificado es de...
                  </div>
                  
                  <div className="pt-4 space-y-3">
                    <div className="flex justify-between text-[13px] uppercase font-black tracking-widest opacity-60">
                      <span>Procesando</span>
                      <span>85%</span>
                    </div>
                    <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: '85%' }}
                        transition={{ duration: 2.5, ease: "easeInOut" }}
                        className="h-full bg-secondary-fixed shadow-[0_0_20px_#57fcd1]" 
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Extra floating element */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-6 -right-6 bg-secondary-fixed text-primary p-4 rounded-2xl shadow-xl border border-white/50 z-20"
              >
                <Smartphone className="w-6 h-6" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
