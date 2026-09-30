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
    <section id="contact" ref={sectionRef} className="py-40 md:py-56 bg-brand-dark relative overflow-hidden flex flex-col items-center justify-center text-center">
      
      {/* Oversized RWC Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
        <span className="text-[12rem] md:text-[25rem] lg:text-[35rem] font-serif text-brand-light opacity-[0.03] tracking-tighter leading-none">
          RWC
        </span>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 flex flex-col items-center">
        
        <span className="cta-eyebrow opacity-0 uppercase tracking-[0.2em] text-brand-gold text-xs font-bold mb-8 block">
          {eyebrow}
        </span>
        
        <h2 className="cta-heading opacity-0 translate-y-10 text-4xl md:text-6xl lg:text-[4.5rem] font-serif text-brand-light leading-[1.1] mb-8">
          {heading}
        </h2>
        
        {body && (
          <p className="cta-body opacity-0 text-[#AFAFA9] text-lg md:text-xl font-medium max-w-xl mx-auto mb-14 leading-relaxed">
            {body}
          </p>
        )}
        
        <div className="cta-button opacity-0 translate-y-6 mb-24">
          <NavLink to="/contact" className="group inline-flex items-center text-brand-light border border-brand-light px-10 py-5 hover:bg-brand-light hover:text-brand-dark transition-all duration-300 font-bold uppercase tracking-[0.15em] text-[13px]">
            {buttonText}
            <ArrowRight className="w-4 h-4 ml-4 transition-transform duration-300 group-hover:translate-x-2" />
          </NavLink>
        </div>
        
        {/* Tagline block */}
        <div className="flex flex-col items-center">
          <div className="cta-line w-16 md:w-24 h-[1px] bg-brand-gold mb-8"></div>
          <span className="cta-tagline opacity-0 uppercase tracking-widest text-brand-light/60 text-[11px] font-semibold">
            Nutrition for everyday living
          </span>
        </div>
        
      </div>
    </section>
  );
}
