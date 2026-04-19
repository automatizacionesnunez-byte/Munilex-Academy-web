import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import AcademyNavbar from './components/AcademyNavbar';
import Footer from './components/Footer';
import AcademyFooter from './components/AcademyFooter';
import Home from './pages/munilex/Home';
import Funcionarios from './pages/munilex/Funcionarios';
import PricingPage from './pages/munilex/Pricing';
import AcademyPricing from './pages/munilex-academy/AcademyPricing';
import AcademyAbout from './pages/munilex-academy/AcademyAbout';
import AcademyContact from './pages/munilex-academy/AcademyContact';
import AcademyAge from './pages/munilex-academy/AcademyAge';
import AcademyHabilitados from './pages/munilex-academy/AcademyHabilitados';
import AcademyIIPP from './pages/munilex-academy/AcademyIIPP';
import AcademyPolicia from './pages/munilex-academy/AcademyPolicia';
import AcademyGuardiaCivil from './pages/munilex-academy/AcademyGuardiaCivil';
import AcademyFP from './pages/munilex-academy/AcademyFP';
import Academy from './pages/munilex-academy/Academy';
import AvisoLegal from './pages/munilex/AvisoLegal';
import Privacidad from './pages/munilex/Privacidad';
import Terminos from './pages/munilex/Terminos';
import Contacto from './pages/munilex/Contacto';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useEffect } from 'react';

// Theme controller to switch themes based on route
const ThemeController = () => {
  const { pathname } = useLocation();
  const { setMode } = useTheme();

  useEffect(() => {
    if (pathname.startsWith('/academy')) {
      setMode('academy');
    } else {
      setMode('corporate');
    }
  }, [pathname, setMode]);

  return null;
};

// Scroll to top on navigation
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Site Layout Manager
const SiteLayout = ({ children, scaleX }: { children: React.ReactNode, scaleX: any }) => {
  const { pathname } = useLocation();
  const isAcademy = pathname.startsWith('/academy');

  return (
    <div className="min-h-screen bg-surface">
      <motion.div
        className={`fixed top-0 left-0 right-0 h-1 z-[60] origin-left ${isAcademy ? 'bg-[#d4af37]' : 'bg-primary-container'}`}
        style={{ scaleX }}
      />
      
      {isAcademy ? <AcademyNavbar /> : <Navbar />}
      
      <main>
        {children}
      </main>

      {isAcademy ? <AcademyFooter /> : <Footer />}
    </div>
  );
};

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <HelmetProvider>
      <Router>
        <ThemeProvider>
          <ThemeController />
          <ScrollToTop />
          <SiteLayout scaleX={scaleX}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/funcionarios" element={<Funcionarios />} />
              <Route path="/precios" element={<PricingPage />} />
              <Route path="/academy/precios" element={<AcademyPricing />} />
              <Route path="/academy/sobre-nosotros" element={<AcademyAbout />} />
              <Route path="/academy/contacto" element={<AcademyContact />} />
              <Route path="/academy/age" element={<AcademyAge />} />
              <Route path="/academy/habilitados" element={<AcademyHabilitados />} />
              <Route path="/academy/iipp" element={<AcademyIIPP />} />
              <Route path="/academy/policia" element={<AcademyPolicia />} />
              <Route path="/academy/guardiacivil" element={<AcademyGuardiaCivil />} />
              <Route path="/academy" element={<Academy />} />
              <Route path="/academy/corporate" element={<AcademyCorporate />} />
              <Route path="/academy/fp" element={<AcademyFP />} />
              <Route path="/aviso-legal" element={<AvisoLegal />} />
              <Route path="/privacidad" element={<Privacidad />} />
              <Route path="/terminos" element={<Terminos />} />
              <Route path="/contacto" element={<Contacto />} />
            </Routes>
          </SiteLayout>
        </ThemeProvider>
      </Router>
    </HelmetProvider>
  )
}

export default App
