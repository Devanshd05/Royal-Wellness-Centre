import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import CtaSection from '../components/CtaSection';

gsap.registerPlugin(ScrollTrigger);

const coreFocus = [
  { id: '01', title: 'Personalised Nutrition & Diet Guidance' },
  { id: '02', title: 'Weight-Management Support' },
  { id: '03', title: 'Fitness & Workout Guidance' },
  { id: '04', title: 'Healthy Lifestyle Planning' },
  { id: '05', title: 'Body Transformation Support' },
  { id: '06', title: 'Wellness Education' },
  { id: '07', title: 'Motivation, Accountability & Consistency' }
];

export default function ServicesPage() {
  const pageRef = useRef(null);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    gsap.fromTo('.animate-hero', 
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" }
    );

    gsap.utils.toArray('.animate-section').forEach((section: any) => {
      gsap.fromTo(section, 
        { y: 30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.9, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
          }
        }
      );
    });
  }, { scope: pageRef });

  return (
    <main ref={pageRef} className="flex-grow pt-16 sm:pt-20">
      
      {/* Hero */}
      <section className="pt-24 sm:pt-32 pb-16 sm:pb-24 bg-brand-light relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16 text-center animate-hero relative z-10">
          <span className="uppercase tracking-[0.25em] text-brand-dark font-bold text-[11px] mb-4 sm:mb-6 block">Our Services</span>
          <h1 
            className="font-serif text-brand-dark leading-[1.1] mb-6 sm:mb-8"
            style={{ fontSize: "clamp(2.2rem, 6vw, 4rem)" }}
          >
            Guidance designed around you.
          </h1>
          <div className="w-16 h-[1px] bg-brand-gold mx-auto"></div>
        </div>
      </section>

      {/* Core Focus List */}
      <section className="py-16 sm:py-24 bg-brand-light relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-16 relative z-10">
          <div className="text-center mb-12 sm:mb-16 animate-section">
            <span className="uppercase tracking-[0.25em] font-bold text-[11px] text-brand-gold mb-3 block">Specialisations</span>
            <h2 
              className="font-serif text-brand-dark"
              style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
            >
              Core Focus
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 sm:gap-y-8">
            {coreFocus.map((item) => (
              <div key={item.id} className="animate-section border-b border-brand-dark/10 pb-5 sm:pb-6 flex items-start group">
                <span className="font-mono text-brand-gold text-xs sm:text-sm mr-4 sm:mr-6 mt-1 group-hover:text-brand-dark transition-colors duration-300">
                  {item.id}
                </span>
                <h3 className="text-lg sm:text-xl md:text-2xl font-serif text-brand-dark leading-snug">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personalisation */}
      <section className="py-16 sm:py-24 lg:py-32 bg-brand-sage text-center border-y border-brand-border">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-16 animate-section">
          <span className="uppercase tracking-[0.25em] font-bold text-[11px] text-brand-dark mb-6 sm:mb-8 block">Personalised to your journey</span>
          <h2 
            className="font-serif text-brand-dark leading-relaxed"
            style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)" }}
          >
            Whether your goal is weight management, healthy weight gain, fitness, nutrition, body transformation, or overall wellness, our approach focuses on practical and sustainable habits.
          </h2>
        </div>
      </section>

      {/* Online Guidance */}
      <section className="py-20 sm:py-28 lg:py-36 bg-brand-light text-center relative overflow-hidden border-b border-brand-border">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-16 animate-section relative z-10">
          <h2 
            className="font-serif text-brand-dark leading-relaxed"
            style={{ fontSize: "clamp(1.85rem, 5vw, 3.25rem)" }}
          >
            Online guidance available across <span className="text-brand-gold">India</span> and <span className="text-brand-gold">worldwide</span>.
          </h2>
        </div>
      </section>

      <CtaSection />
      
    </main>
  );
}
