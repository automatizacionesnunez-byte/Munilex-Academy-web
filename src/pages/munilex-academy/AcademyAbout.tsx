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
    <div className="pt-32 pb-24 min-h-screen bg-surface text-on-surface font-inter selection:bg-police-gold/20 selection:text-on-surface">
      <Helmet>
        <title>Sobre Nosotros | Munilex Academy - Liderazgo Jurídico & IA</title>
        <meta name="description" content="Conoce al equipo detrás de Munilex Academy. Liderada por José María Núñez Mejía y Francisco de Paula Marín, fusionamos el derecho con la inteligencia artificial de vanguardia." />
      </Helmet>

      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-24 px-6 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full bg-white border border-outline-variant text-police-gold text-[10px] font-black tracking-widest uppercase shadow-ambient">
            <Brain className="w-4 h-4" />
            Nuestra Misión
          </div>
          <h1 className="text-5xl md:text-[6.5rem] font-black mb-10 uppercase tracking-tighter leading-[0.95] text-on-surface">
            Forjando el <span className="text-transparent bg-clip-text bg-gradient-to-r from-police-gold to-on-surface">Futuro</span> de la Oposición
          </h1>
          <p className="text-xl text-on-surface-variant font-semibold leading-relaxed max-w-3xl mx-auto">
            Munilex Academy no es solo una plataforma de estudio; es un laboratorio de innovación donde la precisión del Derecho se encuentra con la potencia de la Inteligencia Artificial.
          </p>
        </motion.div>
      </div>

      {/* Methodology Section */}
      <div className="max-w-7xl mx-auto mb-32 px-6 md:px-8">
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
              className="bg-white border border-outline-variant p-12 rounded-[3rem] hover:border-police-gold/30 transition-all group shadow-ambient"
            >
              <div className="text-police-gold mb-10 bg-surface-low w-16 h-16 flex items-center justify-center rounded-[1.25rem] group-hover:scale-110 transition-transform border border-outline-variant shadow-sm">{item.icon}</div>
              <h3 className="text-2xl font-black mb-4 text-on-surface uppercase tracking-tight">/ {item.title}</h3>
              <p className="text-on-surface-variant font-medium leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Founders Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-on-surface tracking-tighter uppercase mb-6 leading-tight">El Equipo <span className="text-police-gold underline decoration-outline-variant underline-offset-8">Fundador</span></h2>
          <p className="text-on-surface-variant font-semibold text-xl">La convergencia entre la academia tradicional y la tecnología disruptiva.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {founders.map((founder, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white rounded-[3.5rem] border border-outline-variant overflow-hidden group shadow-ambient hover:shadow-premium transition-all"
            >
              <div className="p-10 md:p-14 h-full flex flex-col">
                <div className="flex flex-col md:flex-row gap-8 items-start mb-10">
                  <div className="w-24 h-24 md:w-40 md:h-40 rounded-[2.5rem] overflow-hidden bg-surface-low border border-outline-variant flex-shrink-0 shadow-ambient">
                    <img src={founder.image} alt={founder.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="pt-2">
                    <h3 className="text-3xl font-black text-on-surface leading-tight mb-3 uppercase tracking-tighter">{founder.name}</h3>
                    <p className="text-police-gold font-black text-[10px] uppercase tracking-[.25em] mb-6">{founder.role}</p>
                    <div className="flex gap-4">
                      {founder.social.linkedin && <a href={founder.social.linkedin} className="w-10 h-10 border border-outline-variant rounded-xl flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-variant transition-all"><LinkIcon className="w-4 h-4" /></a>}
                      {founder.social.web && <a href={founder.social.web} className="w-10 h-10 border border-outline-variant rounded-xl flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-variant transition-all"><Globe className="w-4 h-4" /></a>}
                      {founder.social.mail && <a href={founder.social.mail} className="w-10 h-10 border border-outline-variant rounded-xl flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-variant transition-all"><Mail className="w-4 h-4" /></a>}
                    </div>
                  </div>
                </div>

                <p className="text-on-surface-variant leading-relaxed font-medium mb-10 flex-grow text-lg">
                  {founder.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {founder.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="px-4 py-1.5 bg-surface-low border border-outline-variant rounded-full text-[10px] uppercase font-black text-on-surface/60 tracking-wider">
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
      <div className="max-w-7xl mx-auto mt-40 px-6 md:px-8 text-center pb-24">
        <div className="bg-white border border-outline-variant p-16 md:p-32 rounded-[5rem] relative overflow-hidden shadow-premium">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-police-gold/[0.02] -z-10" />
          <h2 className="text-4xl md:text-[5rem] font-black text-on-surface mb-10 uppercase tracking-tighter leading-[0.9]">¿Listo para asegurar tu <span className="text-police-gold">plaza</span>?</h2>
          <p className="text-on-surface-variant font-semibold text-xl mb-14 max-w-2xl mx-auto">Únete a la nueva generación de alumnos que han dejado atrás los métodos de estudio del siglo pasado.</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="/academy/precios" className="px-12 py-6 bg-on-surface text-white font-black rounded-2xl text-xs uppercase tracking-[.2em] shadow-premium hover:scale-[1.02] transition-all">Ver Planes</a>
            <a href="/academy/contacto" className="px-12 py-6 bg-white text-on-surface font-black rounded-2xl text-xs border border-outline-variant hover:bg-surface-variant transition-all uppercase tracking-[.2em] shadow-ambient">Contactar Equipo</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademyAbout;
