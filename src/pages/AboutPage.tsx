import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import CtaSection from '../components/CtaSection';
import StickerGraphic from '../components/StickerGraphic';
import { Target } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
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
      <section className="pt-24 sm:pt-32 pb-16 sm:pb-24 bg-gradient-to-tr from-[#2C4A3B] via-[#4A6B53]/80 to-[#A8BA93] sm:from-[#F2F4EB] sm:to-[#E2EAE5] relative overflow-hidden">
        {/* Massive Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[8rem] sm:text-[12rem] md:text-[16rem] font-serif font-bold text-brand-dark opacity-10 pointer-events-none select-none tracking-tight whitespace-nowrap">
          WELLNESS
        </div>

        {/* Stickers */}
        {/* <StickerGraphic Icon={Leaf} className="top-[10%] left-[5%] sm:top-[20%] sm:left-[15%]" bgColor="bg-[#A8BA93]" iconColor="text-white" rotation="-rotate-12" />
        <StickerGraphic Icon={Star} className="bottom-[15%] right-[10%] sm:bottom-[20%] sm:right-[20%]" bgColor="bg-[#C6A15B]" iconColor="text-white" rotation="rotate-[15deg]" /> */}

        <div className="relative z-10 px-5 mx-auto text-center text-white max-w-7xl sm:px-8 lg:px-16 animate-hero sm:text-brand-dark">
          <span className="uppercase tracking-[0.25em] font-bold text-[11px] text-brand-gold mb-4 sm:mb-6 block drop-shadow-sm">About Us</span>
          <h1 
            className="font-serif leading-[1.1] mb-6 sm:mb-8"
            style={{ fontSize: "clamp(2.2rem, 6vw, 4rem)" }}
          >
            Wellness begins with understanding yourself.
          </h1>
          <div className="w-16 h-[1px] bg-brand-gold mx-auto"></div>
        </div>
      </section>

      {/* About Royal */}
      <section className="relative py-16 overflow-hidden sm:py-24 bg-brand-light">
        <div className="relative z-10 max-w-4xl px-5 mx-auto text-center sm:px-8 lg:px-16 animate-section">
          <p className="text-lg font-medium leading-relaxed sm:text-xl md:text-2xl text-brand-dark/85">
            Royal Wellness Centre is a health, fitness, nutrition, and wellness-focused platform dedicated to helping people build healthier and more confident lifestyles.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="relative py-16 overflow-hidden bg-white sm:py-24 lg:py-32">
        {/* Subtle geometric pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #111111 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        
        <div className="relative z-10 px-5 mx-auto max-w-7xl sm:px-8 lg:px-16">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 sm:gap-8 lg:gap-12">
            <div className="border border-[#CDE4DB] bg-[#EAF3EF] p-8 sm:p-12 md:p-16 rounded-[2.5rem] shadow-sm animate-section flex flex-col items-start relative overflow-hidden">
              <StickerGraphic Icon={Target} className="scale-75 -top-6 -right-6 opacity-20 sm:opacity-100" bgColor="bg-[#A8BA93]" iconColor="text-white" rotation="-rotate-[10deg]" />
              <span className="uppercase tracking-[0.25em] font-bold text-[11px] text-[#A8BA93] mb-6 sm:mb-10 block">Mission</span>
              <p 
                className="font-serif leading-snug text-brand-dark"
                style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)" }}
              >
                To educate, guide, motivate, and empower people to make better choices for their health and lifestyle.
              </p>
            </div>
            <div className="border border-[#F2E8D5] bg-[#FCF9F2] p-8 sm:p-12 md:p-16 rounded-[2.5rem] shadow-sm animate-section flex flex-col items-start relative overflow-hidden">
              {/* <StickerGraphic Icon={Star} className="scale-75 -bottom-6 -right-6 opacity-20 sm:opacity-100" bgColor="bg-[#C6A15B]" iconColor="text-white" rotation="rotate-[25deg]" /> */}
              <span className="uppercase tracking-[0.25em] font-bold text-[11px] text-[#C6A15B] mb-6 sm:mb-10 block">Vision</span>
              <p 
                className="font-serif leading-snug text-brand-dark"
                style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)" }}
              >
                To build a global wellness community where people have the knowledge, guidance, and support they need to live healthier and more active lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Statement (Closing) */}
      <section className="py-20 sm:py-28 lg:py-36 bg-[#16271D] text-brand-light text-center flex flex-col items-center relative overflow-hidden">
        {/* Glows */}
        <div className="absolute top-0 right-0 w-[120%] sm:w-96 h-[120%] sm:h-96 bg-[#A8BA93]/30 sm:bg-[#A8BA93]/10 rounded-full blur-[100px] pointer-events-none transform translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-80 sm:w-96 h-80 sm:h-96 bg-[#C6A15B]/20 sm:bg-[#A8BA93]/10 rounded-full blur-[100px] pointer-events-none transform -translate-x-1/2 translate-y-1/4"></div>
        
        {/* Sticker */}
        {/* <StickerGraphic Icon={Heart} className="top-10 right-10 sm:top-20 sm:right-1/4" bgColor="bg-[#C6A15B]" iconColor="text-white" rotation="rotate-[12deg]" /> */}
        
        <div className="relative z-10 flex flex-col items-center max-w-4xl px-5 mx-auto sm:px-8 lg:px-16 animate-section">
          <img 
            src="/RWClogo.png" 
            alt="Royal Wellness Centre" 
            loading="lazy"
            className="w-auto h-20 mb-5 sm:h-20 md:h-24 sm:mb-12 opacity-90"
          />
          <h2 
            className="font-serif leading-[1.2] mb-6 sm:mb-8 text-white drop-shadow-sm"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            Nutrition for everyday living.
          </h2>
          <div className="w-16 h-[1px] bg-brand-gold mx-auto"></div>
        </div>
      </section>

      <CtaSection />
      
    </main>
  );
}
