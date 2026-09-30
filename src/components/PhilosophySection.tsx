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
    <section ref={sectionRef} className="py-20 sm:py-28 lg:py-36 bg-brand-dark text-brand-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16 relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <span className="animate-philosophy uppercase tracking-[0.25em] font-bold text-[11px] text-brand-gold mb-6 block">
            Our Philosophy
          </span>
          <h2 
            className="animate-philosophy font-serif mb-8 leading-[1.15]"
            style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)" }}
          >
            Wellness is more than changing how you look.
          </h2>
          <div className="animate-philosophy w-12 h-[1px] bg-brand-gold mb-8"></div>
          <p className="animate-philosophy text-brand-light/80 text-base sm:text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
            It's about creating a sustainable lifestyle that supports better nutrition, physical fitness, energy, confidence, and long-term wellbeing.
          </p>
        </div>
      </div>
    </section>
  );
}
