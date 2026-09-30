import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import LogoWatermark from './components/LogoWatermark';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-brand-light flex flex-col font-sans">
      <ScrollToTop />
      <LogoWatermark />
      <Navbar />

      <div key={location.pathname} className="page-transition flex flex-col flex-grow">
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
