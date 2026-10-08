import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Quote } from 'lucide-react';

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
    <section ref={sectionRef} className="py-16 sm:py-24 lg:py-32 bg-brand-sea border-y border-brand-border relative overflow-hidden">
      
      {/* Decorative Oversized Quote */}
      <div className="absolute -top-10 -left-10 md:-top-20 md:left-20 text-brand-dark opacity-[0.04] pointer-events-none z-0">
        <Quote className="w-64 h-64 md:w-96 md:h-96" fill="currentColor" />
      </div>

      <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-16 relative z-10">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 lg:gap-20">
          <div className="founder-animate group flex flex-col items-center">
            <div className="relative w-full max-w-[340px] sm:max-w-md aspect-[4/5] rounded-[2rem] p-3 sm:p-4 bg-white/30 backdrop-blur-sm border border-white/50 shadow-lg hover:shadow-2xl hover:bg-white/50 transition-all duration-500 hover:-translate-y-2 mb-6 sm:mb-8 cursor-pointer">
              <div className="w-full h-full rounded-2xl overflow-hidden relative">
                <img 
                  src="/team/founder.jpeg" 
                  alt="Founder" 
                  loading="lazy"
                  className="w-full h-full object-cover object-[25%_center] group-hover:scale-110 transition-transform duration-700 ease-out" 
                />
                <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/10 transition-colors duration-500 flex items-center justify-center">
                   <span className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 bg-white/90 text-brand-dark px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-md shadow-sm">
                     Meet the Founder
                   </span>
                </div>
              </div>
            </div>
            <h3 className="font-serif text-brand-dark uppercase tracking-widest text-sm sm:text-base font-bold transition-colors duration-300 group-hover:text-brand-gold">
              Founder
            </h3>
          </div>

          <div className="founder-animate group md:mt-16 flex flex-col items-center">
            <div className="relative w-full max-w-[340px] sm:max-w-md aspect-[4/5] rounded-[2rem] p-3 sm:p-4 bg-white/30 backdrop-blur-sm border border-white/50 shadow-lg hover:shadow-2xl hover:bg-white/50 transition-all duration-500 hover:-translate-y-2 mb-6 sm:mb-8 cursor-pointer">
              <div className="w-full h-full rounded-2xl overflow-hidden relative">
                <img 
                  src="/team/co-founder.jpeg" 
                  alt="Co-Founder" 
                  loading="lazy"
                  className="w-full h-full object-cover object-[center_15%] group-hover:scale-110 transition-transform duration-700 ease-out" 
                />
                <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/10 transition-colors duration-500 flex items-center justify-center">
                   <span className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 bg-white/90 text-brand-dark px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-md shadow-sm">
                     Meet the Co-Founder
                   </span>
                </div>
              </div>
            </div>
            <h3 className="font-serif text-brand-dark uppercase tracking-widest text-sm sm:text-base font-bold transition-colors duration-300 group-hover:text-brand-gold">
              Co-Founder
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
