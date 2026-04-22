import { motion } from 'framer-motion';
import { Link, NavLink } from 'react-router-dom';
import { ChevronDown, ArrowUpRight } from 'lucide-react';

import { getAcademyPath } from '../config/domainConfig';

const AcademyNavbar = () => {
  const navItems = [
    { name: 'Inicio', path: getAcademyPath('/') },
    { 
      name: 'Oposiciones', 
      path: getAcademyPath('/oposiciones'),
      subItems: [
        { name: 'Habilitados Nacionales', path: getAcademyPath('/habilitados') },
        { name: 'Administración General (AGE)', path: getAcademyPath('/age') },
        { name: 'Policía Nacional', path: getAcademyPath('/policia') },
        { name: 'Guardia Civil', path: getAcademyPath('/guardiacivil') },
        { name: 'Instituciones Penitenciarias', path: getAcademyPath('/iipp') },
      ]
    },
    { 
      name: 'Institucional', 
      path: getAcademyPath('/corporate'),
      subItems: [
        { name: 'Corporate (Academias)', path: getAcademyPath('/corporate') },
        { name: 'Centros FP', path: getAcademyPath('/fp') },
      ]
    },
    { name: 'Precios', path: getAcademyPath('/precios') },
    { name: 'Sobre Nosotros', path: getAcademyPath('/sobre-nosotros') },
    { name: 'Contacto', path: getAcademyPath('/contacto') },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#131313]/90 backdrop-blur-xl border-b border-[#353534] font-inter">
      <div className="max-w-full mx-auto px-6 md:px-12 py-5 flex justify-between items-center text-[#E5E2E1]">
        <Link to={getAcademyPath('/')} className="flex items-center gap-3 group mr-4 xl:mr-10">
          <div className="flex flex-col text-left transition-transform hover:-translate-y-0.5 group">
            <span className="text-2xl lg:text-[28px] font-black tracking-tighter leading-none text-white uppercase italic">
              MUNILEx
            </span>
            <span className="text-2xl lg:text-[28px] font-black uppercase tracking-tighter text-[#d4af37] leading-none">
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

        <div className="flex items-center gap-3">
          <a 
            href="https://munilex.lovable.app/auth/opositores/login"
            className="bg-[#d4af37] text-black px-6 py-2.5 rounded-xl font-black text-[10px] uppercase tracking-widest shadow-[0_0_20px_rgba(212,175,55,0.15)] hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] hover:scale-105 active:scale-95 transition-all text-center flex items-center gap-2"
          >
            CAMPUS
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
          <a 
            href="https://munilex.lovable.app/auth/opositores/register"
            className="bg-[#d4af37] text-black px-6 py-2.5 rounded-xl font-black text-[10px] uppercase tracking-widest shadow-[0_0_20px_rgba(212,175,55,0.15)] hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] hover:scale-105 active:scale-95 transition-all text-center flex items-center gap-2"
          >
            PRUEBA GRATIS
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default AcademyNavbar;
