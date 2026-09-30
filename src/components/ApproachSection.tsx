import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function ApproachSection() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    gsap.fromTo('.approach-animate', 
      { y: 24, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.9, 
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      }
    );
  }, { scope: sectionRef });

  return (
    <section id="approach" ref={sectionRef} className="py-16 sm:py-24 lg:py-32 bg-brand-light relative overflow-hidden text-center">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16 relative z-10">
        <div className="max-w-3xl mx-auto">
          <span className="approach-animate uppercase tracking-[0.25em] font-bold text-[11px] text-brand-dark mb-4 sm:mb-6 block">
            Our Approach
          </span>
          
          <h2 
            className="approach-animate font-serif text-brand-dark mb-6 sm:mb-8 leading-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            Personalised. Practical. Sustainable.
          </h2>
          
          <p className="approach-animate text-brand-gray text-base sm:text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto mb-10 sm:mb-14">
            We guide individuals according to their personal goals, lifestyle, requirements, and fitness journey.
          </p>

          <div className="approach-animate flex flex-wrap justify-center items-center gap-x-6 sm:gap-x-8 gap-y-4 uppercase tracking-[0.2em] text-[11px] sm:text-xs font-bold text-brand-dark">
            <span className="px-3 py-1.5 bg-brand-border/30 sm:bg-transparent rounded-sm">Personalised</span>
            <span className="text-brand-gold hidden sm:inline-block">◆</span>
            <span className="px-3 py-1.5 bg-brand-border/30 sm:bg-transparent rounded-sm">Practical</span>
            <span className="text-brand-gold hidden sm:inline-block">◆</span>
            <span className="px-3 py-1.5 bg-brand-border/30 sm:bg-transparent rounded-sm">Sustainable</span>
          </div>
        </div>
      </div>
    </section>
  );
}
