import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function FoundersSection() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo('.founder-animate', 
      { y: 40, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1, 
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        }
      }
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-brand-sage border-y border-brand-border">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16 founder-animate">
          <h2 className="text-3xl md:text-4xl font-serif text-brand-dark">Meet the People Behind Royal</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          <div className="founder-animate group flex flex-col items-center">
            <div className="w-full aspect-[4/5] rounded-sm overflow-hidden bg-brand-dark/10 mb-6">
              <img 
                src="/team/founder.jpeg" 
                alt="Founder" 
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out" 
              />
            </div>
            <h3 className="text-xl font-serif text-brand-dark uppercase tracking-widest text-[13px] font-bold">Founder</h3>
          </div>

          <div className="founder-animate group md:mt-16 flex flex-col items-center">
            <div className="w-full aspect-[4/5] rounded-sm overflow-hidden bg-brand-dark/10 mb-6">
              <img 
                src="/team/co-founder.jpeg" 
                alt="Co-Founder" 
                className="w-full h-full object-cover object-[center_top] group-hover:scale-105 transition-transform duration-700 ease-out" 
              />
            </div>
            <h3 className="text-xl font-serif text-brand-dark uppercase tracking-widest text-[13px] font-bold">Co-Founder</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
