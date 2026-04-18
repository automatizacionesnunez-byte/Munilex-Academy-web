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
    { name: 'Impulsa tu Academia', path: '/munilex-corporate' },
    { name: 'Precios', path: '/academy/precios' },
    { name: 'Sobre Nosotros', path: '/academy/sobre-nosotros' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/95 backdrop-blur-xl border-b border-outline-variant font-inter transition-all duration-500">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-5 flex items-center justify-between gap-8 h-20">
        <Link to="/academy" className="flex items-center gap-3 group shrink-0">
          <motion.div 
            whileHover={{ scale: 1.05, rotate: 2 }}
            className="w-10 h-10 bg-on-surface rounded-xl flex items-center justify-center shadow-premium group-hover:bg-police-gold transition-all duration-500"
          >
            <GraduationCap className="w-6 h-6 text-white group-hover:text-on-surface transition-colors" />
          </motion.div>
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-tighter leading-none text-on-surface lg:text-2xl uppercase">
              MUNILEx
            </span>
            <span className="text-[9px] font-black uppercase tracking-[0.35em] text-police-gold ml-0.5 mt-0.5">
              ACADEMY
            </span>
          </div>
        </Link>
        
        <div className="hidden lg:flex items-center gap-10 text-[10px] font-black uppercase tracking-[0.25em] flex-grow justify-center">
          {navItems.map((item) => (
            <div key={item.name} className="relative group">
              <NavLink 
                to={item.path} 
                className={({ isActive }) => 
                  `flex items-center gap-2 relative transition-all duration-300 hover:text-police-gold py-2 ${isActive ? 'text-on-surface' : 'text-on-surface-variant/70'}`
                }
              >
                {({ isActive }) => (
                  <>
                    <span className="whitespace-nowrap">{item.name}</span>
                    {item.subItems && <ChevronDown className="w-3.5 h-3.5 ml-0.5 group-hover:rotate-180 transition-transform duration-300" />}
                    {isActive && (
                      <motion.div 
                        layoutId="academy-nav-underline"
                        className="absolute -bottom-1 left-0 w-full h-[2px] bg-police-gold rounded-full shadow-sm"
                      />
                    )}
                  </>
                )}
              </NavLink>

              {item.subItems && (
                <div className="absolute top-full left-0 mt-0 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 transform translate-y-2 group-hover:translate-y-0 w-[18rem] z-50">
                  <div className="bg-white rounded-[2.5rem] shadow-premium border border-outline-variant py-8 px-4 flex flex-col gap-1 overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-police-gold/5 blur-2xl pointer-events-none" />
                    {item.subItems.map((subItem) => (
                      <Link 
                        key={subItem.name}
                        to={subItem.path}
                        className="px-5 py-4 text-[9px] font-black text-on-surface-variant/80 hover:text-on-surface hover:bg-surface-low rounded-xl transition-all block uppercase tracking-widest border border-transparent hover:border-outline-variant"
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
          <Link to="/academy/contacto" className="hidden xl:block text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant/60 hover:text-on-surface transition-colors px-4">
            Ayuda
          </Link>
          <a 
            href="https://munilex.lovable.app/auth/login" 
            className="hidden sm:block text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant/60 hover:text-on-surface transition-colors px-4"
          >
            Acceso
          </a>
          <a 
            href="https://munilex.lovable.app/auth/register"
            className="bg-on-surface text-white px-8 py-3.5 rounded-2xl font-black text-[11px] uppercase tracking-[0.25em] shadow-premium hover:bg-police-gold hover:text-on-surface transition-all text-center flex items-center gap-3 group"
          >
            Matrícula
            <ArrowUpRight className="w-4 h-4 text-police-gold group-hover:text-on-surface transition-colors" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default AcademyNavbar;
