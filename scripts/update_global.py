import os

with open('src/App.tsx', 'r', encoding='utf-8') as f:
    app_content = f.read()
app_content = app_content.replace("import ApproachPage from './pages/ApproachPage';\n", '')
app_content = app_content.replace('        <Route path="/approach" element={<ApproachPage />} />\n', '')
with open('src/App.tsx', 'w', encoding='utf-8') as f:
    f.write(app_content)

with open('src/components/Navbar.tsx', 'r', encoding='utf-8') as f:
    nav_content = f.read()
nav_content = nav_content.replace("['Home', 'About', 'Services', 'Approach']", "['Home', 'About', 'Services']")
with open('src/components/Navbar.tsx', 'w', encoding='utf-8') as f:
    f.write(nav_content)

with open('src/components/Footer.tsx', 'r', encoding='utf-8') as f:
    footer_content = f.read()
footer_content = footer_content.replace('<li><NavLink to="/approach" className="hover:text-brand-gold transition-colors">Approach</NavLink></li>\n', '')
# Let's simplify Footer completely as the user requested:
footer_simplified = """import React from 'react';
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
"""
with open('src/components/Footer.tsx', 'w', encoding='utf-8') as f:
    f.write(footer_simplified)

if os.path.exists('src/pages/ApproachPage.tsx'):
    os.remove('src/pages/ApproachPage.tsx')

print('Global Structure Updates completed.')
