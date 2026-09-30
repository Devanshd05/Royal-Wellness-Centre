import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function FoundersSection() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    gsap.fromTo('.founder-animate', 
      { y: 30, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.9, 
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
    <section ref={sectionRef} className="py-16 sm:py-24 lg:py-32 bg-brand-sage border-y border-brand-border">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-16">
        <div className="text-center mb-12 sm:mb-16 founder-animate">
          <span className="uppercase tracking-[0.25em] font-bold text-[11px] text-brand-dark/70 mb-3 block">
            Leadership
          </span>
          <h2 
            className="font-serif text-brand-dark"
            style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)" }}
          >
            Meet the People Behind Royal
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 lg:gap-16">
          <div className="founder-animate group flex flex-col items-center">
            <div className="w-full max-w-[340px] sm:max-w-md aspect-[4/5] rounded-sm overflow-hidden bg-brand-dark/10 mb-4 sm:mb-6 shadow-sm">
              <img 
                src="/team/founder.jpeg" 
                alt="Founder" 
                loading="lazy"
                className="w-full h-full object-cover object-center lg:group-hover:scale-105 transition-transform duration-700 ease-out" 
              />
            </div>
            <h3 className="font-serif text-brand-dark uppercase tracking-widest text-xs sm:text-sm font-bold">
              Founder
            </h3>
          </div>

          <div className="founder-animate group md:mt-12 flex flex-col items-center">
            <div className="w-full max-w-[340px] sm:max-w-md aspect-[4/5] rounded-sm overflow-hidden bg-brand-dark/10 mb-4 sm:mb-6 shadow-sm">
              <img 
                src="/team/co-founder.jpeg" 
                alt="Co-Founder" 
                loading="lazy"
                className="w-full h-full object-cover object-[center_top] lg:group-hover:scale-105 transition-transform duration-700 ease-out" 
              />
            </div>
            <h3 className="font-serif text-brand-dark uppercase tracking-widest text-xs sm:text-sm font-bold">
              Co-Founder
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
