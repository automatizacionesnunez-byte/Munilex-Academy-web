import Hero from '../../components/Hero';
import Features from '../../components/Features';
import Pricing from '../../components/Pricing';
import { Clock, ShieldCheck, Zap, Activity, Landmark, Shield, Lock, Cpu, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

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
      path: "/academy/guardia-civil", 
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
      
      <section className="py-24 bg-white border-y border-surface-variant/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/4 h-full bg-primary-fixed/20 -skew-x-12 transform translate-x-1/2 opacity-20" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <p className="text-center text-[14px] font-black tracking-[0.3em] text-primary-container uppercase mb-20">
            Impacto Real Munilex v3
          </p>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-20 mb-32">
            {[
              { 
                label: "Ahorro de Tiempo", 
                value: "-85%", 
                desc: "En redacción de informes", 
                icon: <Clock className="w-10 h-10 text-primary-container" />,
                accent: "bg-primary-container/10"
              },
              { 
                label: "Seguridad Proactiva", 
                value: "100%", 
                desc: "Cumplimiento ENS/RGPD", 
                icon: <ShieldCheck className="w-10 h-10 text-secondary-cyan" />,
                accent: "bg-secondary-cyan/10"
              },
              { 
                label: "Eficiencia Jurídica", 
                value: "+70%", 
                desc: "Precisión normativa", 
                icon: <Zap className="w-10 h-10 text-secondary" />,
                accent: "bg-secondary/10"
              },
              { 
                label: "Sincronización BOE", 
                value: "< 24h", 
                desc: "Actualización diaria", 
                icon: <Activity className="w-10 h-10 text-primary" />,
                accent: "bg-primary/10"
              }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center group cursor-default">
                <div className={`w-20 h-20 ${stat.accent} rounded-3xl flex items-center justify-center mb-10 transition-all duration-500 group-hover:scale-110 shadow-sm shadow-black/5`}>
                  {stat.icon}
                </div>
                <div className="text-5xl font-black text-secondary tracking-tighter mb-4 group-hover:text-primary-container transition-colors">
                  {stat.value}
                </div>
                <div className="text-xs font-black uppercase tracking-widest text-secondary opacity-60 mb-2">
                  {stat.label}
                </div>
                <div className="text-sm font-medium text-on-surface-variant opacity-70">
                  {stat.desc}
                </div>
              </div>
            ))}
          </div>

          {/* Differentiated Academy Section */}
          <div className="pt-20 border-t border-surface-variant/30">
            <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
              <div className="max-w-xl">
                <h3 className="text-3xl font-black text-secondary tracking-tight mb-4 uppercase italic">Ecosistema de Formación</h3>
                <p className="text-on-surface-variant font-medium">
                  Preparación de élite asistida por IA para los cuerpos más exigentes de la Administración.
                </p>
              </div>
              <Link to="/academy" className="text-primary-container font-black uppercase tracking-widest text-xs flex items-center gap-2 group border-b-2 border-transparent hover:border-primary-container pb-1 transition-all">
                Ir a la Academia <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
              {academyBodies.map((body, i) => (
                <Link 
                  key={i} 
                  to={body.path}
                  className="p-6 bg-surface-lowest border border-surface-variant/30 rounded-2xl hover:border-primary-container hover:shadow-premium transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className={`w-12 h-12 ${body.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      {body.icon}
                    </div>
                    <div className="font-black text-secondary text-sm mb-1">{body.name}</div>
                    <div className="text-[11px] text-on-surface-variant opacity-60 font-medium uppercase tracking-wider">{body.desc}</div>
                  </div>
                  <div className="mt-8 flex justify-end">
                    <div className="text-[10px] font-black uppercase tracking-widest text-primary-container opacity-0 group-hover:opacity-100 transition-opacity">
                      Explorar Academia
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Features />
      
      <section className="py-32 bg-surface-low border-y border-surface-variant/30">
        <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
          <h2 className="mb-12 italic text-secondary">"Voz del Secretario"</h2>
          <p className="text-2xl text-primary/80 max-w-4xl mx-auto font-medium leading-relaxed">
            "Munilex no es solo una IA, es el respaldo que todo habilitado nacional necesita hoy en día. La precisión en la redacción de informes ha cambiado drásticamente mi jornada."
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="w-12 h-12 bg-primary-container rounded-full" />
            <div className="text-left font-manrope">
              <div className="font-bold">E. García</div>
              <div className="text-xs opacity-50 font-bold tracking-widest uppercase">Secretariado de Ayuntamiento</div>
            </div>
          </div>
        </div>
      </section>

      <Pricing />
    </>
  );
};

export default Home;
