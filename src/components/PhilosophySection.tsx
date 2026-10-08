import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function PhilosophySection() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    gsap.fromTo('.animate-philosophy', 
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
    <section ref={sectionRef} className="py-20 sm:py-28 lg:py-36 bg-[#16271D] text-brand-light relative overflow-hidden">
      <div className="relative z-10 px-5 mx-auto max-w-7xl sm:px-8 lg:px-16">
        {/* Vibrant green ambient glow */}
        <div className="absolute top-0 right-0 w-[120%] sm:w-96 h-[120%] sm:h-96 bg-[#A8BA93]/30 sm:bg-[#A8BA93]/10 rounded-full blur-[100px] pointer-events-none transform translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-80 sm:w-96 h-80 sm:h-96 bg-[#C6A15B]/20 sm:bg-[#A8BA93]/10 rounded-full blur-[100px] pointer-events-none transform -translate-x-1/2 translate-y-1/4"></div>

        <div className="max-w-4xl mx-auto flex flex-col items-center text-center p-6 sm:p-12 lg:p-20 relative bg-[#16271D]/40 backdrop-blur-md rounded-[2rem] sm:bg-transparent sm:backdrop-blur-none border border-white/5 sm:border-none">
          {/* Subtle decorative corners */}
          <div className="absolute top-0 left-0 w-6 h-6 border-t border-l sm:w-8 sm:h-8 border-brand-gold/60 sm:border-brand-gold/30"></div>
          <div className="absolute top-0 right-0 w-6 h-6 border-t border-r sm:w-8 sm:h-8 border-brand-gold/60 sm:border-brand-gold/30"></div>
          <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l sm:w-8 sm:h-8 border-brand-gold/60 sm:border-brand-gold/30"></div>
          <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r sm:w-8 sm:h-8 border-brand-gold/60 sm:border-brand-gold/30"></div>

          <span className="animate-philosophy uppercase tracking-[0.25em] font-bold text-[11px] text-brand-gold mb-6 sm:mb-8 block drop-shadow-md">
            Our Philosophy
          </span>
          <h2 
            className="animate-philosophy font-serif mb-8 sm:mb-10 leading-[1.15] text-white font-light drop-shadow-sm"
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
          >
            Wellness is more than changing how you look.
          </h2>
          <div className="animate-philosophy w-16 h-[1px] bg-brand-gold/50 mb-8 sm:mb-10"></div>
          <p className="max-w-2xl text-base font-medium leading-relaxed animate-philosophy text-brand-light/70 sm:text-lg md:text-xl">
            It's about creating a sustainable lifestyle that supports better nutrition, physical fitness, energy, confidence, and long-term wellbeing.
          </p>
        </div>
      </div>
    </section>
  );
}
