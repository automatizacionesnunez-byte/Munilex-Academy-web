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
    { 
      name: 'Institucional', 
      path: '/academy/corporate',
      subItems: [
        { name: 'Corporate (Academias)', path: '/academy/corporate' },
        { name: 'Centros FP', path: '/academy/fp' },
      ]
    },
    { name: 'Precios', path: '/academy/precios' },
    { name: 'Sobre Nosotros', path: '/academy/sobre-nosotros' },
    { name: 'Contacto', path: '/academy/contacto' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#131313]/90 backdrop-blur-xl border-b border-[#353534] font-inter">
      <div className="max-w-[100rem] mx-auto px-4 md:px-8 py-5 flex justify-between items-center text-[#E5E2E1]">
        <Link to="/academy" className="flex items-center gap-3 group mr-4 xl:mr-10">
          {/* Versión Móvil: Logo con icono */}
          <div className="flex items-center gap-3 md:hidden">
            <motion.div 
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="w-10 h-10 bg-[#d4af37] rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.2)] group-hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all"
            >
              <GraduationCap className="w-6 h-6 text-[#241a00]" />
            </motion.div>
            <div className="flex flex-col text-left">
              <span className="text-xl font-bold tracking-tighter leading-none text-white lg:text-2xl">
                MUNILEx
              </span>
              <span className="text-[9px] font-black uppercase tracking-[0.35em] text-[#d4af37] ml-0.5 mt-0.5">
                ACADEMY
              </span>
            </div>
          </div>
          
          {/* Versión Ordenador: Solo texto basado en su diseño */}
          <div className="hidden md:flex items-center tracking-tighter leading-none relative group transition-transform hover:-translate-y-0.5">
            <span className="text-xl lg:text-[24px] font-black text-white uppercase italic pr-0.5">
              MUNILEX
            </span>
            <span className="text-xl lg:text-[24px] font-black text-[#d4af37] uppercase italic">
              ACADEMY
            </span>
          </div>
        </Link>
        
        <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-[11px] font-black uppercase tracking-[0.2em]">
          {navItems.map((item) => (
            <div key={item.name} className="relative group">
              <NavLink 
                to={item.path} 
                className={({ isActive }) => 
                  `flex items-center gap-1.5 relative transition-all duration-300 hover:text-[#d4af37] py-4 ${isActive ? 'text-[#d4af37]' : 'text-[#d4af37]'}`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.name}
                    {item.subItems && <ChevronDown className="w-3.5 h-3.5 ml-0.5 group-hover:rotate-180 transition-transform duration-300" />}
                    {isActive && (
                      <motion.div 
                        layoutId="academy-nav-underline"
                        className="absolute bottom-3 left-0 w-full h-[2px] bg-[#d4af37] rounded-full shadow-[0_0_10px_rgba(212,175,55,0.4)]"
                      />
                    )}
                  </>
                )}
              </NavLink>

              {item.subItems && (
                <div className="absolute top-full left-0 mt-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 w-72 z-50">
                  <div className="bg-[#1C1B1B] rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.6)] border border-[#353534] py-6 px-3 flex flex-col gap-1 overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-[#d4af37]/5 blur-2xl pointer-events-none" />
                    {item.subItems.map((subItem) => (
                      <Link 
                        key={subItem.name}
                        to={subItem.path}
                        className="px-5 py-3 text-[10px] font-bold text-[#E5E2E1]/70 hover:text-white hover:bg-[#2A2A2A] rounded-xl transition-all block uppercase tracking-wider"
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

        <div className="flex items-center gap-4">
          <a 
            href="https://munilex.lovable.app/auth/login" 
            className="hidden sm:block text-[11px] font-black uppercase tracking-widest text-[#d4af37] hover:brightness-110 transition-all px-4"
          >
            CAMPUS
          </a>
          <a 
            href="https://munilex.lovable.app/auth/register"
            className="bg-[#d4af37] text-[#241a00] px-7 py-3 rounded-xl font-bold text-[12px] uppercase tracking-widest shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-2xl hover:scale-105 active:scale-95 transition-all text-center flex items-center gap-2"
          >
            Prueba <span className="hidden sm:inline">Gratis</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default AcademyNavbar;
