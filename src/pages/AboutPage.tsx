import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import CtaSection from '../components/CtaSection';

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
      <section className="pt-24 sm:pt-32 pb-16 sm:pb-24 bg-brand-light relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16 text-center animate-hero relative z-10">
          <span className="uppercase tracking-[0.25em] text-brand-dark font-bold text-[11px] mb-4 sm:mb-6 block">About Us</span>
          <h1 
            className="font-serif text-brand-dark leading-[1.1] mb-6 sm:mb-8"
            style={{ fontSize: "clamp(2.2rem, 6vw, 4rem)" }}
          >
            Wellness begins with understanding yourself.
          </h1>
          <div className="w-16 h-[1px] bg-brand-gold mx-auto"></div>
        </div>
      </section>

      {/* About Royal */}
      <section className="py-16 sm:py-24 bg-brand-light relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-16 text-center animate-section relative z-10">
          <p className="text-lg sm:text-xl md:text-2xl text-brand-dark/85 leading-relaxed font-medium">
            Royal Wellness Centre is a health, fitness, nutrition, and wellness-focused platform dedicated to helping people build healthier and more confident lifestyles.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 sm:py-24 lg:py-32 bg-brand-sage relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            <div className="border border-brand-dark/20 p-8 sm:p-12 md:p-16 animate-section bg-white/40 backdrop-blur-sm">
              <span className="uppercase tracking-[0.25em] font-bold text-[11px] text-brand-dark mb-6 sm:mb-10 block">Mission</span>
              <p 
                className="font-serif text-brand-dark leading-snug"
                style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)" }}
              >
                To educate, guide, motivate, and empower people to make better choices for their health and lifestyle.
              </p>
            </div>
            <div className="border border-brand-dark/20 p-8 sm:p-12 md:p-16 animate-section bg-white/40 backdrop-blur-sm">
              <span className="uppercase tracking-[0.25em] font-bold text-[11px] text-brand-dark mb-6 sm:mb-10 block">Vision</span>
              <p 
                className="font-serif text-brand-dark leading-snug"
                style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)" }}
              >
                To build a global wellness community where people have the knowledge, guidance, and support they need to live healthier and more active lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Statement (Closing) */}
      <section className="py-20 sm:py-28 lg:py-36 bg-brand-light text-center border-b border-brand-border flex flex-col items-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-16 animate-section flex flex-col items-center relative z-10">
          <img 
            src="/RWClogo.png" 
            alt="Royal Wellness Centre" 
            loading="lazy"
            className="h-16 sm:h-20 md:h-24 w-auto mb-8 sm:mb-12 opacity-90"
          />
          <h2 
            className="font-serif text-brand-dark leading-[1.2] mb-6 sm:mb-8"
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
