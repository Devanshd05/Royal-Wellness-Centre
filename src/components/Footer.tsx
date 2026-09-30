import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-brand-light py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          
          <div className="lg:col-span-2">
            <NavLink to="/" className="inline-flex flex-col mb-8">
              <span className="font-serif text-2xl tracking-wider uppercase leading-none">Royal</span>
              <span className="font-sans text-xs tracking-[0.2em] uppercase text-brand-gold mt-1">Wellness Centre</span>
            </NavLink>
          </div>

          <div>
            <ul className="space-y-4 text-[13px] font-bold uppercase tracking-widest text-brand-light/70">
              <li><NavLink to="/" className="hover:text-brand-gold transition-colors">Home</NavLink></li>
              <li><NavLink to="/about" className="hover:text-brand-gold transition-colors">About</NavLink></li>
              <li><NavLink to="/services" className="hover:text-brand-gold transition-colors">Services</NavLink></li>
              <li><NavLink to="/contact" className="hover:text-brand-gold transition-colors">Contact</NavLink></li>
            </ul>
          </div>

          <div>
            <ul className="space-y-4 text-[13px] font-bold uppercase tracking-widest text-brand-light/70">
              <li><a href="#" className="hover:text-brand-gold transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">WhatsApp</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Email</a></li>
            </ul>
          </div>

        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-brand-light/10 text-xs font-semibold tracking-widest uppercase text-brand-light/40">
          <p className="mb-4 md:mb-0">Nutrition for everyday living.</p>
          <p>&copy; {new Date().getFullYear()} Royal Wellness Centre</p>
        </div>
      </div>
    </footer>
  );
}
