import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import CtaSection from '../components/CtaSection';

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const pageRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo('.animate-hero', 
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );

    gsap.utils.toArray('.animate-hero').forEach((section: any) => {
      gsap.fromTo(section, 
        { y: 40, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1, 
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
    <main ref={pageRef} className="flex-grow pt-20">
      
      {/* Hero */}
      <section className="pt-32 pb-24 bg-brand-light relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center animate-section relative z-10">
          <span className="uppercase tracking-[0.2em] text-brand-dark font-bold text-[11px] mb-8 block">About Us</span>
          <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-serif text-brand-dark leading-[1.1] mb-8">
            Wellness begins with understanding yourself.
          </h1>
          <div className="w-16 h-[1px] bg-brand-gold mx-auto"></div>
        </div>
      </section>

      {/* About Royal */}
      <section className="py-24 bg-brand-light relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center animate-section relative z-10">
          <p className="text-xl md:text-2xl text-brand-dark/80 leading-relaxed font-medium">
            Royal Wellness Centre is a health, fitness, nutrition, and wellness-focused platform dedicated to helping people build healthier and more confident lifestyles.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 md:py-32 bg-brand-sage relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <div className="border border-brand-dark/20 p-12 md:p-16 animate-section bg-white/40 backdrop-blur-sm">
              <h3 className="uppercase tracking-[0.2em] font-bold text-[11px] text-brand-dark mb-12">Mission</h3>
              <p className="text-2xl md:text-3xl font-serif text-brand-dark leading-snug">
                To educate, guide, motivate, and empower people to make better choices for their health and lifestyle.
              </p>
            </div>
            <div className="border border-brand-dark/20 p-12 md:p-16 animate-section bg-white/40 backdrop-blur-sm">
              <h3 className="uppercase tracking-[0.2em] font-bold text-[11px] text-brand-dark mb-12">Vision</h3>
              <p className="text-2xl md:text-3xl font-serif text-brand-dark leading-snug">
                To build a global wellness community where people have the knowledge, guidance, and support they need to live healthier and more active lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Statement (Closing) */}
      <section className="py-40 bg-brand-light text-center border-b border-brand-border flex flex-col items-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 animate-section flex flex-col items-center relative z-10">
          <img 
            src="/RWClogo.png" 
            alt="Royal Wellness Centre" 
            className="h-20 md:h-24 w-auto mb-12 opacity-90"
          />
          <h2 className="text-3xl md:text-5xl font-serif text-brand-dark leading-[1.2] mb-10">
            Nutrition for everyday living.
          </h2>
          <div className="w-16 h-[1px] bg-brand-gold mx-auto"></div>
        </div>
      </section>

      <CtaSection />
      
    </main>
  );
}
