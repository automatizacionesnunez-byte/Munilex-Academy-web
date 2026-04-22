import { motion } from 'framer-motion';
import { Brain, Scale, ShieldCheck, Mail, Globe, Code, Users } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import joseMariaImg from '../../assets/jose_maria.jpg';
import franciscoMarinImg from '../../assets/francisco_marin.jpg';
import { Link } from 'react-router-dom';
import { getAcademyPath } from '../../config/domainConfig';

const LinkedInLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const AcademyAbout = () => {
  const founders = [
    {
      name: "José María Núñez Mejías",
      role: "Fundador / Consultor Técnico LegalTech & IA",
      image: joseMariaImg,
      description: "Jurista certificado por Racks Academy. Especializado en la convergencia del Derecho y la Inteligencia Artificial. Con una sólida trayectoria aplicando la IA al mundo académico en instituciones como TECH UNIVERSITY, lidera la visión técnica de Munilex Academy.",
      tags: ["Jurista", "LegalTech", "IA Aplicada", "Racks Academy"],
      social: {
        linkedin: "https://www.linkedin.com/in/jose-maria-nu%C3%B1ez-mejia-73b06222b/",
        web: "https://www.techtitute.com/es-es/docentes/nunez-mejias-jose-maria"
      }
    },
    {
      name: "Francisco de Paula Marín",
      role: "Fundador / Director Académico & Comercial",
      image: franciscoMarinImg,
      description: "Abogado y Docente con +10 años de experiencia en la preparación de opositores y alumnos de Derecho de toda España. Director de TFM en el Master de Abogacía en la UNIR y docente colaborador en las mejores academias privadas a nivel nacional. Experiencia en banca y emprendimiento.",
      tags: ["Jurista", "Director Académico", "Estrategia Comercial", "Gestión de Temarios"],
      social: {
        linkedin: "https://www.linkedin.com/in/franciscodepaulamarin",
        mail: "mailto:administracion@munilex.es"
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
          <h1 className="text-4xl md:text-6xl font-black mb-8 uppercase tracking-tighter leading-tight text-white">
            Forjando el <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f2ca50] to-[#d4af37]">Futuro</span> de la Educación
          </h1>
          <p className="text-xl text-[#E5E2E1]/70 font-medium leading-relaxed max-w-3xl mx-auto">
            Munilex Academy no es solo una plataforma de estudio; es un laboratorio de innovación donde la precisión del Derecho se encuentra con la potencia de la Inteligencia Artificial.
          </p>
        </motion.div>
      </div>

      {/* Methodology Section */}
      <div className="max-w-7xl mx-auto mb-40 px-6 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-xl md:text-2xl font-black text-[#d4af37] uppercase tracking-widest leading-tight">
            Nuestros valores a la hora de formar <br className="hidden md:block" />
            a los nuevos funcionarios
          </h2>
        </div>
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

      {/* Academy Mission Section */}
      <div className="max-w-7xl mx-auto mb-40 px-6 md:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter uppercase mb-4">Nuestra Misión <span className="text-[#d4af37]">para Academias</span></h2>
          <p className="text-[#E5E2E1]/60 font-medium text-lg italic">Redefiniendo el estándar de preparación institucional.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              icon: <Brain className="w-8 h-8" />, 
              title: "IA Siglo XXI", 
              desc: "Utilizamos la IA para adaptar las metodologías de estudio a los desafíos y la velocidad de aprendizaje del siglo XXI." 
            },
            { 
              icon: <Globe className="w-8 h-8" />, 
              title: "Transparencia", 
              desc: "Potenciamos la confianza mediante procesos claros y trazabilidad total en cada respuesta del temario." 
            },
            { 
              icon: <Users className="w-8 h-8" />, 
              title: "Enfoque Humano", 
              desc: "Entendemos que la tecnología es un medio; el fin es una personalización que respete la psicología del opositor." 
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
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter uppercase mb-4">El Equipo <span className="text-[#d4af37]">Fundador</span></h2>
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
                          <LinkedInLogo className="w-5 h-5 group-hover/social:scale-110 transition-transform" />
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
          <h2 className="text-3xl md:text-5xl font-black text-white mb-8 uppercase tracking-tighter">¿Listo para asegurar tu <span className="text-[#d4af37]">plaza</span>?</h2>
          <p className="text-[#E5E2E1]/60 text-lg mb-12 max-w-2xl mx-auto">Únete a la nueva generación de alumnos que han dejado atrás los métodos de estudio del siglo pasado.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={getAcademyPath('/precios')} className="px-10 py-5 bg-[#d4af37] text-[#241a00] font-black rounded-2xl text-lg hover:opacity-90 transition-opacity">Ver Planes</Link>
            <Link to={getAcademyPath('/contacto')} className="px-10 py-5 bg-[#2A2A2A] text-white font-black rounded-2xl text-lg border border-[#353534] hover:bg-[#353534] transition-colors">Contactar</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademyAbout;
