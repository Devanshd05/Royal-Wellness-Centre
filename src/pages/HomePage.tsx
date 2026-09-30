import { NavLink } from 'react-router-dom';
import PhilosophySection from '../components/PhilosophySection';
import ServicesSection from '../components/ServicesSection';
import ApproachSection from '../components/ApproachSection';
import FoundersSection from '../components/FoundersSection';
import CtaSection from '../components/CtaSection';
import { ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="flex-grow pt-16 sm:pt-20">
      {/* Hero Section */}
      <section className="relative w-full min-h-[100svh] flex items-center bg-brand-light overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/newbanner.png" 
            alt="Royal Wellness Lifestyle" 
            className="w-full h-full object-cover object-[65%_center] sm:object-center"
          />
          {/* Mobile vertical gradient + desktop horizontal gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-light via-brand-light/90 to-brand-light/40 sm:bg-gradient-to-r sm:from-brand-light sm:via-brand-light/95 sm:to-transparent sm:w-[85%] lg:w-[70%]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-16 w-full flex flex-col justify-center py-20 sm:py-24">
          <div className="max-w-2xl">
            <span className="uppercase tracking-[0.25em] font-bold text-[11px] sm:text-xs text-brand-gold mb-4 sm:mb-6 block">
              Royal Wellness Centre
            </span>
            <h1 
              className="font-serif text-brand-dark leading-[1.05] tracking-tight mb-6 sm:mb-8"
              style={{ fontSize: "clamp(2.75rem, 8vw, 5.5rem)" }}
            >
              Nutrition for <br />
              <span className="italic">everyday living.</span>
            </h1>
            
            <p className="text-brand-gray text-base sm:text-lg md:text-xl font-medium mb-8 sm:mb-12 max-w-lg leading-relaxed">
              Personalised nutrition, fitness and lifestyle guidance to help you build healthier, sustainable habits.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">
              <NavLink 
                to="/services" 
                className="group inline-flex items-center justify-center bg-brand-dark text-brand-light px-8 py-4 min-h-[48px] hover:bg-brand-gold hover:text-brand-dark transition-colors duration-300 font-bold uppercase tracking-widest text-xs sm:text-sm text-center"
              >
                Explore Services
                <ArrowRight className="w-4 h-4 ml-3 transition-transform duration-300 group-hover:translate-x-1" />
              </NavLink>
              <NavLink 
                to="/contact" 
                className="inline-flex items-center justify-center border border-brand-border text-brand-dark px-8 py-4 min-h-[48px] hover:border-brand-dark transition-colors duration-300 font-bold uppercase tracking-widest text-xs sm:text-sm bg-brand-light/80 backdrop-blur-sm text-center"
              >
                Get In Touch
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      <PhilosophySection />
      <ServicesSection />
      <ApproachSection />
      <FoundersSection />
      <CtaSection 
        heading="Ready to take the next step?"
        body="Get in touch with Royal Wellness Centre."
        buttonText="Get In Touch"
      />
    </main>
  );
}
