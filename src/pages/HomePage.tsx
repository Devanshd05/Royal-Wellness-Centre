import { NavLink } from 'react-router-dom';
import PhilosophySection from '../components/PhilosophySection';
import ServicesSection from '../components/ServicesSection';
import ApproachSection from '../components/ApproachSection';
import FoundersSection from '../components/FoundersSection';
import CtaSection from '../components/CtaSection';
import { ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="flex-grow pt-20">
      {/* Hero Section */}
      <section className="relative w-full h-[90vh] md:h-[85vh] lg:h-[90vh] flex items-center bg-brand-light">
        <div className="absolute inset-0 z-0">
          <img 
            src="/newbanner.png" 
            alt="Wellness Lifestyle" 
            className="w-full h-full object-cover object-[70%_30%] md:object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-light via-brand-light/90 md:via-brand-light/70 to-transparent w-full md:w-[85%] lg:w-[70%]" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 w-full flex flex-col justify-center h-full pt-16 md:pt-0">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-brand-dark leading-[1.1] tracking-tight mb-8">
              Nutrition for <br />
              <span className="italic">everyday living.</span>
            </h1>
            
            <p className="text-brand-gray text-lg md:text-xl font-medium mb-12 max-w-lg leading-relaxed">
              Personalised nutrition, fitness and lifestyle guidance to help you build healthier, sustainable habits.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <NavLink to="/services" className="group inline-flex items-center justify-center bg-brand-dark text-brand-light px-8 py-4 hover:bg-brand-gold transition-colors duration-300 font-bold uppercase tracking-widest text-sm">
                Explore Services
                <ArrowRight className="w-4 h-4 ml-3 transition-transform duration-300 group-hover:translate-x-1" />
              </NavLink>
              <NavLink to="/contact" className="inline-flex items-center justify-center border border-brand-border text-brand-dark px-8 py-4 hover:border-brand-dark transition-colors duration-300 font-bold uppercase tracking-widest text-sm bg-brand-light/50 backdrop-blur-sm">
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
