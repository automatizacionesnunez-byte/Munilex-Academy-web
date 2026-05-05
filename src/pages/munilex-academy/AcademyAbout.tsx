import { motion } from 'framer-motion';
import { Brain, Scale, ShieldCheck, Mail, Link as LinkIcon, Globe, Code } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const AcademyAbout = () => {
  const founders = [
    {
      name: "José María Núñez Mejía",
      role: "Fundador / Technical LegalTech & IATECH Consultant",
      image: "/creator_photo.jpg",
      description: "Jurista especializado en la convergencia del Derecho y la Inteligencia Artificial. Tras formarse en el ecosistema de Racks Academy, fundó Munilex partiendo de una necesidad real en la administración local española. Su visión técnica lidera la creación de herramientas que devuelven la soberanía y la tranquilidad al profesional jurídico.",
      tags: ["Jurista URJC", "LegalTech Expert", "IATECH Consultant", "Fundador"],
      social: {
        linkedin: "https://www.linkedin.com/in/jose-maria-nu%C3%B1ez-mejia-73b06222b/",
        web: "https://wa.me/34605392912"
      }
    },
    {
      name: "Francisco de Paula Marín",
      role: "Socio / Director Académico",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Francisco&backgroundColor=ffdfbf",
      description: "Referente en el sector pedagógico con una capacidad magistral para explicar el Derecho mediante casos prácticos. Francisco se unió al proyecto tras conectar en LinkedIn, aportando su vasta experiencia docente para asegurar que la IA de Munilex no solo sea potente, sino que hable el lenguaje del opositor y las academias modernas.",
      tags: ["Director Académico", "Docencia Superior", "Casos Prácticos", "Estrategia Educativa"],
      social: {
        linkedin: "#",
        mail: "mailto:#"
      }
    }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#0E0E0E] text-white font-inter selection:bg-police-gold/20 selection:text-white">
      <Helmet>
        <title>Sobre Nosotros | Munilex Academy - Liderazgo Jurídico & IA</title>
        <meta name="description" content="Conoce al equipo detrás de Munilex Academy. Liderada por José María Núñez Mejía y Francisco de Paula Marín, fusionamos el derecho con la inteligencia artificial de vanguardia." />
      </Helmet>

      {/* Hero Section */}
      <div className="max-w-5xl mx-auto text-center mb-32 px-6 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-3 mb-8 px-6 py-2 rounded-full bg-police-gold/10 border border-police-gold/20 text-police-gold text-[10px] font-black tracking-[0.3em] uppercase backdrop-blur-xl font-manrope">
            <div className="w-2 h-2 rounded-full bg-police-gold animate-pulse" />
            Nuestra Misión
          </div>
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-black mb-12 uppercase tracking-tighter leading-[0.85] text-white font-manrope">
            Forjando el <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-police-gold via-yellow-200 to-white italic">
              Futuro
            </span> de la Oposición
          </h1>
          <p className="text-xl text-white/50 font-medium leading-relaxed max-w-3xl mx-auto font-inter">
            Munilex Academy no es solo una plataforma de estudio; es un laboratorio de innovación donde la precisión del Derecho se encuentra con la potencia de la Inteligencia Artificial.
          </p>
        </motion.div>
      </div>

      {/* Methodology Section */}
      <div className="max-w-7xl mx-auto mb-40 px-6 md:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              icon: <Scale className="w-8 h-8" />, 
              title: "Rigor Jurídico", 
              desc: "Todos nuestros algoritmos son supervisados por juristas en activo para garantizar la máxima fidelidad normativa." 
            },
            { 
              icon: <Code className="w-8 h-8" />, 
              title: "Innovación Tech", 
              desc: "Implementamos redes neuronales destinadas específicamente al análisis y síntesis de legislación española." 
            },
            { 
              icon: <ShieldCheck className="w-8 h-8" />, 
              title: "Compromiso A1", 
              desc: "Preparamos a los líderes del mañana en la administración pública con herramientas de hoy." 
            }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#1C1B1B] border border-white/5 p-12 rounded-[3.5rem] hover:border-police-gold/40 transition-all group shadow-2xl relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-police-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="text-police-gold mb-10 bg-black/40 w-16 h-16 flex items-center justify-center rounded-2xl group-hover:scale-110 transition-transform border border-white/5 shadow-inner relative z-10">{item.icon}</div>
              <h3 className="text-2xl font-black mb-4 text-white uppercase tracking-tight font-manrope relative z-10">{item.title}</h3>
              <p className="text-white/40 font-medium leading-relaxed font-inter relative z-10">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Founders Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="mb-24 text-center">
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase mb-6 leading-tight font-manrope">El Equipo <span className="text-police-gold italic underline decoration-police-gold/20 underline-offset-8">Fundador</span></h2>
          <p className="text-white/40 font-semibold text-xl font-inter">La convergencia entre la academia tradicional y la tecnología disruptiva.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {founders.map((founder, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-[#1C1B1B] rounded-[4rem] border border-white/5 overflow-hidden group shadow-2xl hover:shadow-[0_40px_100px_rgba(0,0,0,0.6)] transition-all"
            >
              <div className="p-10 md:p-16 h-full flex flex-col">
                <div className="flex flex-col md:flex-row gap-10 items-start mb-12">
                  <div className="w-24 h-24 md:w-44 md:h-44 rounded-[3rem] overflow-hidden bg-black border border-white/10 flex-shrink-0 shadow-2xl group-hover:scale-105 transition-transform duration-700">
                    <img src={founder.image} alt={founder.name} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="pt-2">
                    <h3 className="text-3xl md:text-4xl font-black text-white leading-tight mb-4 uppercase tracking-tighter font-manrope">{founder.name}</h3>
                    <p className="text-police-gold font-black text-[11px] uppercase tracking-[.3em] mb-8 font-manrope opacity-80">{founder.role}</p>
                    <div className="flex gap-4">
                      {founder.social.linkedin && <a href={founder.social.linkedin} className="w-12 h-12 border border-white/10 rounded-2xl flex items-center justify-center text-white/40 hover:text-white hover:bg-white/5 transition-all shadow-lg"><LinkIcon className="w-5 h-5" /></a>}
                      {founder.social.web && <a href={founder.social.web} className="w-12 h-12 border border-white/10 rounded-2xl flex items-center justify-center text-white/40 hover:text-white hover:bg-white/5 transition-all shadow-lg"><Globe className="w-5 h-5" /></a>}
                      {founder.social.mail && <a href={founder.social.mail} className="w-12 h-12 border border-white/10 rounded-2xl flex items-center justify-center text-white/40 hover:text-white hover:bg-white/5 transition-all shadow-lg"><Mail className="w-5 h-5" /></a>}
                    </div>
                  </div>
                </div>

                <p className="text-white/50 leading-relaxed font-medium mb-12 flex-grow text-lg font-inter">
                  {founder.description}
                </p>

                <div className="flex flex-wrap gap-3 mt-auto">
                  {founder.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="px-5 py-2 bg-black/40 border border-white/5 rounded-full text-[10px] uppercase font-black text-white/30 tracking-widest font-manrope">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-7xl mx-auto mt-48 px-6 md:px-8 text-center pb-32">
        <div className="bg-white text-black p-20 md:p-32 rounded-[5rem] relative overflow-hidden shadow-2xl group">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-police-gold/[0.05] -z-10 group-hover:scale-110 transition-transform duration-1000" />
          <h2 className="text-5xl md:text-[6rem] lg:text-[7rem] font-black text-black mb-10 uppercase tracking-tighter leading-[0.85] font-manrope italic">¿Listo para asegurar tu <span className="text-police-gold">plaza</span>?</h2>
          <p className="text-black/60 font-semibold text-xl mb-16 max-w-2xl mx-auto font-inter">Únete a la nueva generación de alumnos que han dejado atrás los métodos de estudio del siglo pasado.</p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <a href="/academy/precios" className="px-14 py-7 bg-black text-white font-black rounded-2xl text-[11px] uppercase tracking-[.3em] shadow-2xl hover:scale-105 transition-all font-manrope">Ver Planes</a>
            <a href="/academy/contacto" className="px-14 py-7 bg-white text-black font-black rounded-2xl text-[11px] border-2 border-black hover:bg-black hover:text-white transition-all uppercase tracking-[.3em] shadow-xl font-manrope">Contactar Equipo</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademyAbout;
