import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (targetPath?: string) => {
    if (!targetPath || location.pathname === targetPath) {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header 
        className={clsx(
          "fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out border-b",
          isScrolled 
            ? "h-[64px] bg-brand-dark border-brand-dark shadow-md" 
            : "h-[76px] sm:h-[84px] bg-brand-light border-brand-border"
        )}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16 h-full flex items-center justify-between relative w-full">
          
          {/* Logo */}
          <div className="flex-shrink-0 z-50">
            <NavLink to="/" className="flex items-center gap-2 sm:gap-3" onClick={() => handleNavClick('/')}>
              <img 
                src="/RWClogo.png" 
                alt="Royal Wellness Centre"
                className="h-8 sm:h-10 w-auto object-contain"
              />
              <div className="flex flex-col">
                <span className={clsx(
                  "font-serif text-xl sm:text-2xl tracking-wider uppercase leading-none transition-colors duration-500",
                  (isScrolled || isMobileMenuOpen) ? "text-brand-light" : "text-brand-dark"
                )}>
                  Royal
                </span>
                <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-brand-gold mt-1">
                  Wellness Centre
                </span>
              </div>
            </NavLink>
          </div>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-12 absolute left-1/2 -translate-x-1/2">
            {['Home', 'About', 'Services'].map((item) => {
              const target = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
              return (
                <NavLink
                  key={item}
                  to={target}
                  onClick={() => handleNavClick(target)}
                  className={({ isActive }) => clsx(
                    "relative text-sm font-semibold tracking-[0.15em] uppercase transition-colors duration-300 py-2 group",
                    isScrolled 
                      ? (isActive ? "text-brand-gold" : "text-brand-light/70 hover:text-brand-light")
                      : (isActive ? "text-brand-dark" : "text-brand-gray hover:text-brand-dark")
                  )}
                >
                  {({ isActive }) => (
                    <>
                      {item}
                      <span className={clsx(
                        "absolute -bottom-1 left-0 h-[2px] bg-brand-gold transition-all duration-300",
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      )}></span>
                    </>
                  )}
                </NavLink>
              );
            })}
          </nav>

          {/* Desktop Right Side */}
          <div className="hidden md:flex items-center z-50">
            <NavLink 
              to="/contact" 
              onClick={() => handleNavClick('/contact')}
              className={clsx(
                "px-6 py-2.5 min-h-[44px] flex items-center justify-center border transition-all duration-300 font-bold uppercase tracking-widest text-[11px]",
                isScrolled 
                  ? "border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-dark" 
                  : "border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-brand-light"
              )}
            >
              Get In Touch
            </NavLink>
          </div>

          {/* Mobile Menu Toggle (min 44px touch target) */}
          <button 
            type="button"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            className="md:hidden z-50 w-11 h-11 flex items-center justify-center -mr-2 rounded-sm"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-brand-light" />
            ) : (
              <Menu className={clsx("w-6 h-6", isScrolled ? "text-brand-light" : "text-brand-dark")} />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={clsx(
          "fixed inset-0 bg-[#111111] z-40 transition-all duration-500 ease-in-out md:hidden flex flex-col justify-between pt-28 pb-12 px-6 sm:px-10",
          isMobileMenuOpen ? "opacity-100 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none"
        )}
      >
        <nav className="flex flex-col space-y-6 sm:space-y-8 my-auto">
          {['Home', 'About', 'Services', 'Contact'].map((item) => {
            const target = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
            return (
              <NavLink
                key={item}
                to={target}
                onClick={() => handleNavClick(target)}
                className={({ isActive }) => clsx(
                  "text-3xl sm:text-4xl font-serif tracking-widest uppercase transition-colors duration-300 py-2 min-h-[44px] flex items-center",
                  isActive ? "text-brand-gold" : "text-brand-light hover:text-brand-gold/70"
                )}
              >
                {item}
              </NavLink>
            );
          })}
        </nav>

        {/* Brand Tagline at Bottom of Mobile Menu */}
        <div className="pt-8 border-t border-brand-light/10 text-center">
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-brand-gold mb-1">
            Royal Wellness Centre
          </p>
          <p className="font-serif italic text-sm text-brand-light/60">
            Nutrition for everyday living
          </p>
        </div>
      </div>
    </>
  );
}
