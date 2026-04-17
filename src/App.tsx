import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import AcademyNavbar from './components/AcademyNavbar';
import AcademyFooter from './components/AcademyFooter';
import AcademyPricing from './pages/munilex-academy/AcademyPricing';
import AcademyAbout from './pages/munilex-academy/AcademyAbout';
import AcademyContact from './pages/munilex-academy/AcademyContact';
import AcademyAge from './pages/munilex-academy/AcademyAge';
import AcademyHabilitados from './pages/munilex-academy/AcademyHabilitados';
import AcademyIIPP from './pages/munilex-academy/AcademyIIPP';
import AcademyPolicia from './pages/munilex-academy/AcademyPolicia';
import AcademyGuardiaCivil from './pages/munilex-academy/AcademyGuardiaCivil';
import Academy from './pages/munilex-academy/Academy';
import { AvisoLegal, Privacidad, Terminos } from './pages/munilex-academy/AcademyLegal';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useEffect } from 'react';

// Theme controller to ensure we are in academy mode
const ThemeController = () => {
  const { setMode } = useTheme();

  useEffect(() => {
    setMode('academy');
  }, [setMode]);

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
  return (
    <div className="min-h-screen bg-surface">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 z-[60] origin-left bg-secondary-cyan"
        style={{ scaleX }}
      />
      
      <AcademyNavbar />
      
      <main>
        {children}
      </main>

      <AcademyFooter />
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
              {/* Home redirect to academy or keeping the path structure if desired */}
              <Route path="/" element={<Academy />} />
              <Route path="/academy" element={<Navigate to="/" replace />} />
              
              <Route path="/precios" element={<AcademyPricing />} />
              <Route path="/sobre-nosotros" element={<AcademyAbout />} />
              <Route path="/contacto" element={<AcademyContact />} />
              <Route path="/age" element={<AcademyAge />} />
              <Route path="/habilitados" element={<AcademyHabilitados />} />
              <Route path="/iipp" element={<AcademyIIPP />} />
              <Route path="/policia" element={<AcademyPolicia />} />
              <Route path="/guardiacivil" element={<AcademyGuardiaCivil />} />
              
              <Route path="/aviso-legal" element={<AvisoLegal />} />
              <Route path="/privacidad" element={<Privacidad />} />
              <Route path="/terminos" element={<Terminos />} />
              
              {/* Fallback for old /academy paths if the user keeps them */}
              <Route path="/academy/precios" element={<AcademyPricing />} />
              <Route path="/academy/sobre-nosotros" element={<AcademyAbout />} />
              <Route path="/academy/contacto" element={<AcademyContact />} />
              <Route path="/academy/age" element={<AcademyAge />} />
              <Route path="/academy/habilitados" element={<AcademyHabilitados />} />
              <Route path="/academy/iipp" element={<AcademyIIPP />} />
              <Route path="/academy/policia" element={<AcademyPolicia />} />
              <Route path="/academy/guardiacivil" element={<AcademyGuardiaCivil />} />
            </Routes>
          </SiteLayout>
        </ThemeProvider>
      </Router>
    </HelmetProvider>
  )
}

export default App
