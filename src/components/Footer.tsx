import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="py-16 border-t bg-brand-dark text-brand-light sm:py-20 lg:py-28 border-brand-light/10">
      <div className="px-5 mx-auto max-w-7xl sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 gap-10 mb-16 sm:grid-cols-2 lg:grid-cols-4 sm:gap-12 lg:gap-16 sm:mb-20">
          
          <div className="sm:col-span-2">
            <NavLink to="/" className="inline-block mb-4 group">
              <span className="font-serif text-2xl leading-none tracking-widest uppercase transition-colors duration-300 sm:text-3xl text-brand-gold group-hover:text-brand-gold">
                Royal Wellness Centre
              </span>
            </NavLink>
            <p className="max-w-sm mt-3 text-sm font-light leading-relaxed font-alt sm:text-base text-brand-light/90 ">
              Nutrition for everyday living. Practical and sustainable guidance designed around your lifestyle.
            </p>
          </div>

          <div>
            <span className="uppercase tracking-[0.2em] font-bold text-[10px] text-brand-gold mb-4 block">Navigation</span>
            <ul className="space-y-3 text-xs sm:text-[13px] font-bold uppercase tracking-widest text-brand-light/75">
              <li><NavLink to="/" className="inline-block py-1 transition-colors hover:text-brand-gold">Home</NavLink></li>
              <li><NavLink to="/about" className="inline-block py-1 transition-colors hover:text-brand-gold">About</NavLink></li>
              <li><NavLink to="/services" className="inline-block py-1 transition-colors hover:text-brand-gold">Services</NavLink></li>
              <li><NavLink to="/contact" className="inline-block py-1 transition-colors hover:text-brand-gold">Contact</NavLink></li>
            </ul>
          </div>

          <div>
            <span className="uppercase tracking-[0.2em] font-bold text-[10px] text-brand-gold mb-4 block">Connect</span>
            <ul className="space-y-3 text-xs sm:text-[13px] font-bold uppercase tracking-widest text-brand-light/75">
              <li><a href="#" className="inline-block py-1 transition-colors hover:text-brand-gold">Instagram</a></li>
              <li><a href="#" className="inline-block py-1 transition-colors hover:text-brand-gold">WhatsApp</a></li>
              <li><a href="#" className="inline-block py-1 transition-colors hover:text-brand-gold">Email</a></li>
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
