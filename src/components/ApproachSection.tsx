import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function ApproachSection() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo('.approach-animate', 
      { y: 30, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1, 
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      }
    );
  }, { scope: sectionRef });

  return (
    <section id="approach" ref={sectionRef} className="py-24 md:py-32 bg-brand-light relative overflow-hidden text-center">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <span className="approach-animate uppercase tracking-[0.2em] font-bold text-[11px] text-brand-dark mb-8 block">Our Approach</span>
        
        <h2 className="approach-animate text-3xl md:text-5xl font-serif text-brand-dark mb-10 leading-tight">
          Personalised. Practical. Sustainable.
        </h2>
        
        <p className="approach-animate text-brand-gray text-lg font-medium leading-relaxed max-w-2xl mx-auto mb-16">
          We guide individuals according to their personal goals, lifestyle, requirements, and fitness journey.
        </p>

        <div className="approach-animate flex flex-wrap justify-center items-center gap-x-8 gap-y-6 uppercase tracking-[0.2em] text-[11px] font-bold text-brand-dark">
          <span>Personalised</span>
          <span className="text-brand-gold hidden sm:block">◆</span>
          <span>Practical</span>
          <span className="text-brand-gold hidden sm:block">◆</span>
          <span>Sustainable</span>
        </div>
      </div>
    </section>
  );
}
