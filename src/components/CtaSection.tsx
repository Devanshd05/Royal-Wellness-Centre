import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

interface CtaSectionProps {
  eyebrow?: string;
  heading?: string;
  body?: string;
  buttonText?: string;
}

export default function CtaSection({
  eyebrow = "Start Your Journey",
  heading = "Your wellness journey starts with one step.",
  body = "Personalised guidance to help you build healthier habits and create a lifestyle that lasts.",
  buttonText = "Get In Touch"
}: CtaSectionProps) {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      }
    });

    tl.fromTo(".cta-line", 
      { scaleX: 0 },
      { scaleX: 1, duration: 1.5, ease: "power3.inOut", transformOrigin: "center" }
    )
    .to(".cta-eyebrow", {
      opacity: 1,
      duration: 0.8,
      ease: "power2.out"
    }, "-=1.0")
    .to(".cta-heading", {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out"
    }, "-=0.6")
    .to(".cta-body", {
      opacity: 1,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.6")
    .to(".cta-button", {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.6")
    .to(".cta-tagline", {
      opacity: 1,
      duration: 1,
      ease: "power2.out"
    }, "-=0.4");
  }, { scope: sectionRef });

  return (
    <section id="contact" ref={sectionRef} className="py-20 sm:py-28 lg:py-40 bg-brand-dark relative overflow-hidden flex flex-col items-center justify-center text-center">
      
      {/* Oversized RWC Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
        <span className="text-[8rem] sm:text-[16rem] md:text-[22rem] lg:text-[28rem] font-serif text-brand-light opacity-[0.03] tracking-tighter leading-none select-none">
          RWC
        </span>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8 lg:px-16 flex flex-col items-center w-full">
        
        <span className="cta-eyebrow opacity-0 uppercase tracking-[0.25em] text-brand-gold text-[11px] sm:text-xs font-bold mb-6 sm:mb-8 block">
          {eyebrow}
        </span>
        
        <h2 
          className="cta-heading opacity-0 translate-y-8 font-serif text-brand-light leading-[1.1] mb-6 sm:mb-8"
          style={{ fontSize: "clamp(2.1rem, 6vw, 4rem)" }}
        >
          {heading}
        </h2>
        
        {body && (
          <p className="cta-body opacity-0 text-[#AFAFA9] text-base sm:text-lg md:text-xl font-medium max-w-xl mx-auto mb-10 sm:mb-14 leading-relaxed">
            {body}
          </p>
        )}
        
        <div className="cta-button opacity-0 translate-y-6 mb-16 sm:mb-20 w-full sm:w-auto flex justify-center">
          <NavLink 
            to="/contact" 
            className="group inline-flex items-center justify-center w-full sm:w-auto min-h-[48px] text-brand-light border border-brand-light px-8 sm:px-10 py-4 hover:bg-brand-light hover:text-brand-dark transition-all duration-300 font-bold uppercase tracking-[0.15em] text-xs sm:text-[13px] text-center"
          >
            {buttonText}
            <ArrowRight className="w-4 h-4 ml-3 sm:ml-4 transition-transform duration-300 group-hover:translate-x-2" />
          </NavLink>
        </div>
        
        {/* Tagline block */}
        <div className="flex flex-col items-center">
          <div className="cta-line w-16 md:w-24 h-[1px] bg-brand-gold mb-6 sm:mb-8"></div>
          <span className="cta-tagline opacity-0 uppercase tracking-widest text-brand-light/60 text-[10px] sm:text-[11px] font-semibold">
            Nutrition for everyday living
          </span>
        </div>
        
      </div>
    </section>
  );
}
