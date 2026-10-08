import { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import PhilosophySection from '../components/PhilosophySection';
import ServicesSection from '../components/ServicesSection';
import ApproachSection from '../components/ApproachSection';
import FoundersSection from '../components/FoundersSection';
import TransformationSection from '../components/TransformationSection';
import CtaSection from '../components/CtaSection';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function HomePage() {
  const heroRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.fromTo('.hero-anim',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: 'power3.out', delay: 0.2 }
    );
  }, { scope: heroRef });
  return (
    <main className="flex-grow pt-16 sm:pt-20">
      {/* Hero Section */}
      <section ref={heroRef} className="relative w-full min-h-[100svh] flex items-center bg-brand-light overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/newbanner.png" 
            alt="Royal Wellness Lifestyle" 
            className="w-full h-full object-cover object-[65%_center] sm:object-center"
          />
          {/* Vibrant colorful gradient for mobile, fading out for desktop */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#2C4A3B] via-[#4A6B53]/80 to-transparent sm:bg-gradient-to-r sm:from-[#A8BA93]/15 sm:via-brand-light/95 sm:to-transparent sm:w-[85%] lg:w-[70%] blend-multiply mix-blend-multiply sm:mix-blend-normal" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A2E24] via-[#1A2E24]/60 to-transparent sm:hidden" />
        </div>

        <div className="relative z-10 flex flex-col justify-center w-full px-5 py-20 mx-auto max-w-7xl sm:px-8 lg:px-16 sm:py-24">
          <div className="max-w-2xl text-brand-light sm:text-brand-dark">
            <span className="hero-anim uppercase tracking-[0.25em] font-bold text-[11px] sm:text-xs text-brand-gold mb-4 sm:mb-6 block">
              Royal Wellness Centre
            </span>
            <h1 
              className="hero-anim font-serif text-white sm:text-brand-dark leading-[1.05] tracking-tight mb-6 sm:mb-8"
              style={{ fontSize: "clamp(2.75rem, 8vw, 5.5rem)" }}
            >
              Nutrition for <br />
              <span className="italic font-light">everyday living.</span>
            </h1>
            
            <p className="max-w-lg mb-8 text-base font-medium leading-relaxed hero-anim text-white/90 sm:text-brand-gray sm:text-lg md:text-xl sm:mb-12">
              Personalised nutrition, fitness and lifestyle guidance to help you build healthier, sustainable habits.
            </p>
            
            <div className="flex flex-col w-full gap-4 sm:flex-row sm:gap-6 sm:w-auto">
              <NavLink 
                to="/services" 
                className="hero-anim group inline-flex items-center justify-center bg-brand-gold sm:bg-brand-dark text-brand-dark sm:text-brand-light px-8 py-4 min-h-[48px] hover:bg-brand-gold hover:text-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 font-bold uppercase tracking-widest text-xs sm:text-sm text-center"
              >
                Explore Services
                <ArrowRight className="w-4 h-4 ml-3 transition-transform duration-300 group-hover:translate-x-1" />
              </NavLink>
              <NavLink 
                to="/contact" 
                className="hero-anim group inline-flex items-center justify-center border border-white/30 sm:border-brand-border text-white sm:text-brand-dark px-8 py-4 min-h-[48px] hover:border-brand-dark hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 font-bold uppercase tracking-widest text-xs sm:text-sm bg-white/10 sm:bg-brand-light/80 backdrop-blur-sm text-center"
              >
                Get In Touch
              </NavLink>
            </div>
          </div>

          {/* Hero Stickers */}
          {/* <StickerGraphic 
            Icon={Leaf} 
            className="top-[15%] right-[5%] sm:top-[20%] sm:right-[15%]" 
            bgColor="bg-[#A8BA93]" 
            iconColor="text-white" 
            rotation="rotate-12"
          />
          <StickerGraphic 
            Icon={Apple} 
            className="bottom-[25%] right-[10%] sm:bottom-[30%] sm:right-[20%]" 
            bgColor="bg-[#C6A15B]" 
            iconColor="text-white" 
            rotation="-rotate-12"
          />
          <StickerGraphic 
            Icon={Flame} 
            className="top-[30%] left-[85%] sm:top-[40%] sm:left-[55%]" 
            bgColor="bg-white" 
            iconColor="text-[#2C4A3B]" 
            rotation="rotate-6"
            size={24}
          /> */}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute flex items-center gap-3 hero-anim bottom-8 left-5 sm:left-8 lg:left-16 text-brand-dark/50">
          <span className="uppercase tracking-[0.2em] text-[9px] font-bold">Scroll Down</span>
          <ChevronDown className="w-3 h-3 animate-bounce" />
        </div>
      </section>

      <PhilosophySection />
      <ServicesSection />
      <ApproachSection />
      <FoundersSection />
      <TransformationSection />
      <CtaSection 
        heading="Ready to take the next step?"
        body="Get in touch with Royal Wellness Centre."
        buttonText="Get In Touch"
      />
    </main>
  );
}
