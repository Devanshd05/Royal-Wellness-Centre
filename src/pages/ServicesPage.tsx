import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import CtaSection from '../components/CtaSection';
import StickerGraphic from '../components/StickerGraphic';
import { Flame } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const coreFocus = [
  { id: '01', title: 'Personalised Nutrition & Diet Guidance', color: 'bg-[#EAF3EF] text-[#2C4A3B]' },
  { id: '02', title: 'Weight-Management Support', color: 'bg-[#F2F4EB] text-[#4A6B53]' },
  { id: '03', title: 'Fitness & Workout Guidance', color: 'bg-[#FCF9F2] text-[#C6A15B]' },
  { id: '04', title: 'Healthy Lifestyle Planning', color: 'bg-[#E2EAE5] text-[#2C4A3B]' },
  { id: '05', title: 'Body Transformation Support', color: 'bg-[#F2E8D5] text-[#C6A15B]' },
  { id: '06', title: 'Wellness Education', color: 'bg-[#EAF3EF] text-[#4A6B53]' },
  { id: '07', title: 'Motivation, Accountability & Consistency', color: 'bg-[#DCE2C6] text-[#2C4A3B]' }
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
      <section className="pt-24 sm:pt-32 pb-16 sm:pb-24 bg-gradient-to-bl from-[#CDE4DB] via-[#E2EAE5] to-brand-light relative overflow-hidden">
        {/* Massive Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[8rem] sm:text-[12rem] md:text-[16rem] font-serif font-bold text-brand-dark opacity-[0.03] pointer-events-none select-none tracking-tight whitespace-nowrap">
          SERVICES
        </div>

        {/* Stickers */}
        {/* <StickerGraphic Icon={Sparkles} className="top-[10%] left-[5%] sm:top-[20%] sm:left-[15%]" bgColor="bg-[#F2E8D5]" iconColor="text-[#C6A15B]" rotation="rotate-12" />
        <StickerGraphic Icon={Apple} className="bottom-[15%] right-[10%] sm:bottom-[20%] sm:right-[20%]" bgColor="bg-[#C6A15B]" iconColor="text-white" rotation="-rotate-[15deg]" /> */}

        <div className="relative z-10 px-5 mx-auto text-center max-w-7xl sm:px-8 lg:px-16 animate-hero">
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
      <section className="relative py-16 overflow-hidden sm:py-24 bg-brand-light">
        {/* Stickers */}
        {/* <StickerGraphic Icon={Activity} className="top-[30%] left-[5%] sm:left-[10%]" bgColor="bg-[#A8BA93]" iconColor="text-white" rotation="-rotate-6" /> */}
        
        <div className="relative z-10 max-w-5xl px-5 mx-auto sm:px-8 lg:px-16">
          <div className="mb-12 text-center sm:mb-16 animate-section">
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
              <div key={item.id} className={`animate-section p-6 rounded-[2rem] flex items-center group transition-transform duration-300 hover:-translate-y-1 ${item.color}`}>
                <span className="mr-4 font-mono text-xs transition-colors text-brand-dark/40 sm:text-sm sm:mr-6 group-hover:text-brand-dark/70">
                  {item.id}
                </span>
                <h3 className="font-serif text-lg font-bold leading-snug sm:text-xl">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personalisation */}
      <section className="py-16 sm:py-24 lg:py-32 bg-[#A8BA93] text-center border-y border-brand-border relative overflow-hidden">
        {/* Subtle pattern */}
        <div className="absolute inset-0 pointer-events-none opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
        
        <StickerGraphic Icon={Flame} className="top-10 right-10 sm:top-20 sm:right-1/4" bgColor="bg-white" iconColor="text-[#C6A15B]" rotation="rotate-[25deg]" />

        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-16 animate-section relative z-10 bg-white/20 backdrop-blur-md p-10 sm:p-16 rounded-[3rem] border border-white/40 shadow-xl">
          <span className="uppercase tracking-[0.25em] font-bold text-[11px] text-[#2C4A3B] mb-6 sm:mb-8 block">Personalised to your journey</span>
          <h2 
            className="font-serif text-[#16271D] leading-relaxed"
            style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)" }}
          >
            Whether your goal is weight management, healthy weight gain, fitness, nutrition, body transformation, or overall wellness, our approach focuses on practical and sustainable habits.
          </h2>
        </div>
      </section>

      {/* Online Guidance */}
      <section className="py-20 sm:py-28 lg:py-36 bg-[#16271D] text-center relative overflow-hidden border-b border-brand-border">
        {/* Colorful Glows */}
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#A8BA93]/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#C6A15B]/20 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

        <div className="relative z-10 max-w-4xl px-5 mx-auto sm:px-8 lg:px-16 animate-section">
          <h2 
            className="font-serif leading-relaxed text-white drop-shadow-sm"
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
