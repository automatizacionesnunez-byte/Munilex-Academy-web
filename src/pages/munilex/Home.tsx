import Hero from '../../components/Hero';
import BentoPillars from '../../components/BentoPillars';
import CorporateSection from '../../components/CorporateSection';
import TestimonialsCarousel from '../../components/TestimonialsCarousel';
import { Landmark, Shield, Lock, Cpu, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  const academyBodies = [
    { 
      name: "Habilitados Nacionales", 
      path: "/academy/habilitados", 
      icon: <Landmark className="w-6 h-6" />,
      color: "bg-amber-500/10 text-amber-600",
      desc: "Secretaría e Intervención"
    },
    { 
      name: "Administrativos AGE", 
      path: "/academy/age", 
      icon: <Cpu className="w-6 h-6" />,
      color: "bg-cyan-500/10 text-cyan-600",
      desc: "Estado Administrativo"
    },
    { 
      name: "Policía Nacional", 
      path: "/academy/policia", 
      icon: <Shield className="w-6 h-6" />,
      color: "bg-blue-500/10 text-blue-600",
      desc: "Escala Básica y Ejecutiva"
    },
    { 
      name: "Guardia Civil", 
      path: "/academy/guardiacivil", 
      icon: <ShieldCheck className="w-6 h-6" />,
      color: "bg-green-500/10 text-green-600",
      desc: "Ingreso Benemérita"
    },
    { 
      name: "Prisiones IIPP", 
      path: "/academy/iipp", 
      icon: <Lock className="w-6 h-6" />,
      color: "bg-red-500/10 text-red-600",
      desc: "Ayudante de Instituciones"
    }
  ];

  return (
    <>
      <Hero />
      


      <BentoPillars />

      <CorporateSection />

      {/* 4. Training Ecosystem */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20 text-balance">
            <div className="max-w-2xl">
              <h2 className="text-secondary text-5xl leading-none mb-6 tracking-tight">
                La mayor cobertura <span className="text-primary-container italic">jurídica</span> de España
              </h2>
              <p className="text-base text-on-surface-variant font-medium max-w-lg">
                Sincronización en tiempo real con temarios oficiales y jurisprudencia local. El apoyo definitivo para cada cuerpo.
              </p>
            </div>
            <Link 
              to="/academy" 
              className="px-8 py-4 border-2 border-primary-container text-primary-container font-black uppercase tracking-widest text-[10px] rounded-xl hover:bg-primary-container hover:text-white transition-all flex items-center gap-2 group"
            >
              Ir a Munilex Academy <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {academyBodies.map((body, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link 
                  to={body.path}
                  className="p-8 bg-surface-lowest border border-outline-variant/30 rounded-[2rem] hover:border-primary-container hover:shadow-premium transition-all group h-full flex flex-col justify-between shadow-ambient"
                >
                  <div>
                    <div className={`w-14 h-14 ${body.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-sm`}>
                      {body.icon}
                    </div>
                    <div className="font-black text-secondary text-lg mb-2 tracking-tight leading-tight">{body.name}</div>
                    <div className="text-[9px] text-on-surface-variant opacity-60 font-black uppercase tracking-widest mb-4">{body.desc}</div>
                  </div>
                  <div className="pt-6 border-t border-outline-variant/20 flex items-center justify-between">
                    <span className="text-[9px] font-black uppercase tracking-widest text-primary-container opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Ver Academia</span>
                    <ArrowUpRight className="w-4 h-4 text-primary-container opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsCarousel />
      
      {/* 6. Final Conversion CTA - Aligned with Munilex Corporate Branding */}
      <section className="py-24 bg-white border-t border-slate-50 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-1/3 h-full bg-[#0066FF]/5 -skew-x-12 transform translate-x-1/2" />
        
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <h2 className="mb-12 text-[#002B5B] text-5xl md:text-6xl leading-tight tracking-tight">¿Está listo para formar parte de la <span className="text-[#0066FF] italic">Revolución</span>?</h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/academy" className="px-10 py-5 bg-[#002B5B] text-white font-black uppercase tracking-widest text-[11px] rounded-xl hover:scale-105 transition-all shadow-premium">
              ¿Eres opositor o academia? Accede a Munilex Academy
            </Link>
            <Link to="/funcionarios" className="px-10 py-5 border-2 border-[#002B5B]/10 text-[#002B5B] font-black uppercase tracking-widest text-[11px] rounded-xl hover:bg-[#002B5B]/5 transition-all">
              ¿Eres funcionario? Entra aquí, pruébalo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
