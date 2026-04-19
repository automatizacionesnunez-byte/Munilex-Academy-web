import { motion } from 'framer-motion';
import { Brain, Scale, ShieldCheck, Mail, Link as LinkIcon, Globe, Code } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import joseMariaImg from '../../assets/jose_maria.jpg';
import franciscoMarinImg from '../../assets/francisco_marin.jpg';

const AcademyAbout = () => {
  const founders = [
    {
      name: "José María Núñez Mejías",
      role: "Fundador / Consultor Técnico LegalTech & IA",
      image: joseMariaImg,
      description: "Jurista certificado por Racks Academy. Especializado en la convergencia del Derecho y la Inteligencia Artificial. Con una sólida trayectoria aplicando la IA al mundo académico en centros como Derecho Virtual y TECH UNIVERSITY, lidera la visión técnica de Munilex Academy.",
      tags: ["Jurista", "LegalTech", "IA Aplicada", "Racks Academy"],
      social: {
        linkedin: "https://www.linkedin.com/in/jose-maria-nu%C3%B1ez-mejia-73b06222b/",
        web: "https://wa.me/34605392912"
      }
    },
    {
      name: "Francisco de Paula Marín",
      role: "Fundador / Director Académico & Comercial",
      image: franciscoMarinImg,
      description: "Jurista de primer nivel volcado en la excelencia académica. Francisco es co-fundador y dirige la estructuración pedagógica de los temarios y lidera la expansión comercial de Munilex, asegurando que cada opositor reciba una formación con rigor jurídico y adaptada al mercado actual.",
      tags: ["Jurista", "Director Académico", "Estrategia Comercial", "Gestión de Temarios"],
      social: {
        linkedin: "#",
        mail: "mailto:#"
      }
    }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#131313] text-[#E5E2E1] font-inter selection:bg-[#d4af37]/30 selection:text-white">
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
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-[#1C1B1B] border border-[#353534] text-[#d4af37] text-xs font-bold tracking-widest uppercase">
            <Brain className="w-4 h-4" />
            Nuestra Misión
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-8 uppercase tracking-tighter leading-tight text-white">
            Forjando el <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f2ca50] to-[#d4af37]">Futuro</span> de la Oposición
          </h1>
          <p className="text-xl text-[#E5E2E1]/70 font-medium leading-relaxed max-w-3xl mx-auto">
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
              className="bg-[#1C1B1B] border border-[#353534]/50 p-10 rounded-[2.5rem] hover:border-[#d4af37]/30 transition-all group"
            >
              <div className="text-[#d4af37] mb-8 bg-[#2A2A2A] w-16 h-16 flex items-center justify-center rounded-2xl group-hover:scale-110 transition-transform">{item.icon}</div>
              <h3 className="text-2xl font-black mb-4 text-white uppercase tracking-tight">{item.title}</h3>
              <p className="text-[#E5E2E1]/60 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Founders Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase mb-4">El Equipo <span className="text-[#d4af37]">Fundador</span></h2>
          <p className="text-[#E5E2E1]/60 font-medium text-lg">La convergencia entre la academia tradicional y la tecnología disruptiva.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {founders.map((founder, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative p-1 bg-[#1C1B1B] rounded-[3rem] border border-[#353534]/50 overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#d4af37]/10 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="p-8 md:p-12 h-full flex flex-col">
                <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-[2rem] overflow-hidden bg-[#2A2A2A] border border-[#353534] flex-shrink-0">
                    <img src={founder.image} alt={founder.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-black text-white leading-tight mb-2">{founder.name}</h3>
                    <p className="text-[#d4af37] font-bold text-sm uppercase tracking-widest">{founder.role}</p>
                    <div className="flex gap-4 mt-6">
                      {founder.social.linkedin && (
                        <a 
                          href={founder.social.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="w-10 h-10 rounded-xl bg-[#2A2A2A] border border-[#353534] flex items-center justify-center text-[#E5E2E1]/40 hover:text-[#d4af37] hover:border-[#d4af37]/30 transition-all group/social"
                        >
                          <LinkIcon className="w-5 h-5 group-hover/social:scale-110 transition-transform" />
                        </a>
                      )}
                      {founder.social.web && (
                        <a 
                          href={founder.social.web} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="w-10 h-10 rounded-xl bg-[#2A2A2A] border border-[#353534] flex items-center justify-center text-[#E5E2E1]/40 hover:text-[#d4af37] hover:border-[#d4af37]/30 transition-all group/social"
                        >
                          <Globe className="w-5 h-5 group-hover/social:scale-110 transition-transform" />
                        </a>
                      )}
                      {founder.social.mail && (
                        <a 
                          href={founder.social.mail} 
                          className="w-10 h-10 rounded-xl bg-[#2A2A2A] border border-[#353534] flex items-center justify-center text-[#E5E2E1]/40 hover:text-[#d4af37] hover:border-[#d4af37]/30 transition-all group/social"
                        >
                          <Mail className="w-5 h-5 group-hover/social:scale-110 transition-transform" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <p className="text-[#E5E2E1]/70 leading-relaxed font-normal mb-8 flex-grow">
                  {founder.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {founder.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="px-3 py-1 bg-[#2A2A2A] border border-[#353534] rounded-full text-[10px] uppercase font-bold text-[#E5E2E1]/50 tracking-wider">
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
      <div className="max-w-7xl mx-auto mt-40 px-6 md:px-8 text-center">
        <div className="bg-gradient-to-br from-[#1C1B1B] to-[#131313] border border-[#353534] p-16 md:p-24 rounded-[4rem] relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-32 bg-[#d4af37]/5 blur-[120px]" />
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 uppercase tracking-tighter">¿Listo para asegurar tu <span className="text-[#d4af37]">plaza</span>?</h2>
          <p className="text-[#E5E2E1]/60 text-lg mb-12 max-w-2xl mx-auto">Únete a la nueva generación de alumnos que han dejado atrás los métodos de estudio del siglo pasado.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/academy/precios" className="px-10 py-5 bg-[#d4af37] text-[#241a00] font-black rounded-2xl text-lg hover:opacity-90 transition-opacity">Ver Planes</a>
            <a href="/academy/contacto" className="px-10 py-5 bg-[#2A2A2A] text-white font-black rounded-2xl text-lg border border-[#353534] hover:bg-[#353534] transition-colors">Contactar</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademyAbout;
