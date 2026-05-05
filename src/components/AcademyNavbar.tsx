import { motion } from 'framer-motion';
import { Link, NavLink } from 'react-router-dom';
import { ChevronDown, GraduationCap, ArrowUpRight } from 'lucide-react';

const AcademyNavbar = () => {
  const navItems = [
    { name: 'Inicio', path: '/academy' },
    { 
      name: 'Oposiciones', 
      path: '/academy#rutas',
      subItems: [
        { name: 'Habilitados Nacionales', path: '/academy/habilitados' },
        { name: 'Administración General (AGE)', path: '/academy/age' },
        { name: 'Policía Nacional', path: '/academy/policia' },
        { name: 'Guardia Civil', path: '/academy/guardiacivil' },
        { name: 'Instituciones Penitenciarias', path: '/academy/iipp' },
      ]
    },
    { name: 'Empresas', path: '/munilex-corporate' },
    { name: 'Precios', path: '/academy/precios' },
    { name: 'Sobre Nosotros', path: '/academy/sobre-nosotros' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-2xl border-b border-white/5 font-inter transition-all duration-500">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-5 flex items-center justify-between gap-8 h-20">
        <Link to="/academy" className="flex items-center gap-3 group shrink-0">
          <motion.img 
            whileHover={{ scale: 1.05 }}
            src="/munilex_logo_new.png" 
            alt="Munilex Academy" 
            className="h-12 w-auto drop-shadow-[0_0_15px_rgba(212,175,55,0.2)]" 
          />
        </Link>
        
        <div className="hidden lg:flex items-center gap-10 text-[10px] font-black uppercase tracking-[0.3em] flex-grow justify-center">
          {navItems.map((item) => (
            <div key={item.name} className="relative group">
              <NavLink 
                to={item.path} 
                className={({ isActive }) => 
                  `flex items-center gap-2 relative transition-all duration-300 hover:text-police-gold py-2 ${isActive ? 'text-white' : 'text-white/40'}`
                }
              >
                {({ isActive }) => (
                  <>
                    <span className="whitespace-nowrap">{item.name}</span>
                    {item.subItems && <ChevronDown className="w-3.5 h-3.5 ml-0.5 group-hover:rotate-180 transition-transform duration-300 text-police-gold/50" />}
                    {isActive && (
                      <motion.div 
                        layoutId="academy-nav-underline"
                        className="absolute -bottom-1 left-0 w-full h-[1px] bg-police-gold shadow-[0_0_8px_rgba(212,175,55,0.5)]"
                      />
                    )}
                  </>
                )}
              </NavLink>

              {item.subItems && (
                <div className="absolute top-full left-0 mt-0 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 transform translate-y-2 group-hover:translate-y-0 w-[20rem] z-50">
                  <div className="bg-[#1C1B1B] rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-white/5 py-8 px-4 flex flex-col gap-1 overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-police-gold/5 blur-3xl pointer-events-none" />
                    {item.subItems.map((subItem) => (
                      <Link 
                        key={subItem.name}
                        to={subItem.path}
                        className="px-5 py-4 text-[9px] font-black text-white/40 hover:text-white hover:bg-white/5 rounded-xl transition-all block uppercase tracking-[0.2em] border border-transparent hover:border-white/5"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4 shrink-0">
          <Link 
            to="/auth/login" 
            className="hidden sm:block text-[10px] font-black uppercase tracking-[0.2em] text-white/30 hover:text-white transition-colors px-4"
          >
            Entrar
          </Link>
          <Link 
            to="/academy/precios"
            className="bg-police-gold text-black px-8 py-3.5 rounded-2xl font-black text-[11px] uppercase tracking-[0.25em] shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:scale-105 active:scale-95 transition-all text-center flex items-center gap-3 group"
          >
            Matrícula
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default AcademyNavbar;
