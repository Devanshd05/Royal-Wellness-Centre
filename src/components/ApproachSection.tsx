import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import StickerGraphic from './StickerGraphic';
import { Salad, Target } from 'lucide-react';

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
      {/* Subtle dotted grid pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #111111 1px, transparent 0)', backgroundSize: '32px 32px' }}
      ></div>
      
      {/* Playful Stickers */}
      <StickerGraphic Icon={Salad} className="top-10 left-4 sm:top-20 sm:left-20" bgColor="bg-[#2C4A3B]" iconColor="text-white" rotation="-rotate-12" />
      <StickerGraphic Icon={Target} className="bottom-10 right-4 sm:bottom-20 sm:right-20" bgColor="bg-[#C6A15B]" iconColor="text-white" rotation="rotate-[15deg]" />

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
          
          <p className="approach-animate text-brand-gray text-base sm:text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto mb-10 sm:mb-16">
            We guide individuals according to their personal goals, lifestyle, requirements, and fitness journey.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              { title: 'Personalised', desc: 'Tailored specifically to your unique body, lifestyle, and goals.', color: 'bg-[#EAF3EF] border-[#CDE4DB]' },
              { title: 'Practical', desc: 'Realistic steps that seamlessly integrate into your daily routine.', color: 'bg-[#F2F4EB] border-[#DCE2C6]' },
              { title: 'Sustainable', desc: 'Long-term habits designed to last, not just quick fixes.', color: 'bg-[#FCF9F2] border-[#F2E8D5]' }
            ].map((item, idx) => (
              <div 
                key={idx}
                className={`approach-animate group ${item.color} backdrop-blur-sm border p-8 rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col items-center text-center`}
              >
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-6 group-hover:bg-[#A8BA93] group-hover:scale-110 transition-all duration-500 shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
                  <span className="text-[#A8BA93] group-hover:text-white text-xl transition-colors duration-500">◆</span>
                </div>
                <h3 className="font-serif text-brand-dark text-2xl font-bold mb-4 group-hover:text-[#A8BA93] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-brand-gray/90 text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
