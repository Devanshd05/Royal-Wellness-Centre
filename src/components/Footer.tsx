import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-brand-light py-16 sm:py-20 lg:py-28 border-t border-brand-light/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 lg:gap-16 mb-16 sm:mb-20">
          
          <div className="sm:col-span-2">
            <NavLink to="/" className="inline-flex flex-col mb-4">
              <span className="font-serif text-2xl sm:text-3xl tracking-wider uppercase leading-none">Royal</span>
              <span className="font-sans text-[11px] tracking-[0.2em] uppercase text-brand-gold mt-1.5">Wellness Centre</span>
            </NavLink>
            <p className="font-serif italic text-sm text-brand-light/50 max-w-sm mt-3">
              Nutrition for everyday living. Practical and sustainable guidance designed around your lifestyle.
            </p>
          </div>

          <div>
            <span className="uppercase tracking-[0.2em] font-bold text-[10px] text-brand-gold mb-4 block">Navigation</span>
            <ul className="space-y-3 text-xs sm:text-[13px] font-bold uppercase tracking-widest text-brand-light/75">
              <li><NavLink to="/" className="hover:text-brand-gold transition-colors py-1 inline-block">Home</NavLink></li>
              <li><NavLink to="/about" className="hover:text-brand-gold transition-colors py-1 inline-block">About</NavLink></li>
              <li><NavLink to="/services" className="hover:text-brand-gold transition-colors py-1 inline-block">Services</NavLink></li>
              <li><NavLink to="/contact" className="hover:text-brand-gold transition-colors py-1 inline-block">Contact</NavLink></li>
            </ul>
          </div>

          <div>
            <span className="uppercase tracking-[0.2em] font-bold text-[10px] text-brand-gold mb-4 block">Connect</span>
            <ul className="space-y-3 text-xs sm:text-[13px] font-bold uppercase tracking-widest text-brand-light/75">
              <li><a href="#" className="hover:text-brand-gold transition-colors py-1 inline-block">Instagram</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors py-1 inline-block">WhatsApp</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors py-1 inline-block">Email</a></li>
            </ul>
          </div>

        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 sm:pt-10 border-t border-brand-light/10 text-[11px] font-semibold tracking-widest uppercase text-brand-light/40 text-center sm:text-left gap-4">
          <p>Nutrition for everyday living.</p>
          <p>&copy; {new Date().getFullYear()} Royal Wellness Centre. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
