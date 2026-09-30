import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function PhilosophySection() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo('.animate-philosophy', 
      { y: 30, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1, 
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        }
      }
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-24 md:py-40 bg-brand-dark text-brand-light relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center text-center md:text-left">
          
          <div className="md:col-span-8 md:col-start-3 flex flex-col items-center text-center">
            <span className="animate-philosophy uppercase tracking-[0.2em] font-bold text-[11px] text-brand-gold mb-8 block">Our Philosophy</span>
            <h2 className="animate-philosophy text-4xl md:text-5xl lg:text-6xl font-serif mb-10 leading-[1.15]">
              Wellness is more than changing how you look.
            </h2>
            <div className="animate-philosophy w-12 h-[1px] bg-brand-gold mb-10"></div>
            <p className="animate-philosophy text-brand-light/80 text-lg md:text-xl font-medium leading-relaxed max-w-3xl">
              It's about creating a sustainable lifestyle that supports better nutrition, physical fitness, energy, confidence, and long-term wellbeing.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}
