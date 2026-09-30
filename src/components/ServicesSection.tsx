import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const services = [
  "Personalised Nutrition",
  "Weight Management",
  "Healthy Weight Gain",
  "Fitness & Workout Guidance",
  "Healthy Lifestyle Planning",
  "Body Transformation",
  "Wellness Education",
  "Motivation & Accountability"
];

export default function ServicesSection() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo('.services-title', 
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out", scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } }
    );
    gsap.fromTo('.service-item', 
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out", scrollTrigger: { trigger: '.services-grid', start: "top 85%" } }
    );
  }, { scope: sectionRef });

  return (
    <section id="services" ref={sectionRef} className="py-16 sm:py-24 lg:py-32 bg-brand-light border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16 text-center">
        
        <div className="services-title mb-10 sm:mb-16">
          <span className="uppercase tracking-[0.25em] font-bold text-[11px] text-brand-dark mb-4 block">What We Focus On</span>
          <h2 
            className="font-serif text-brand-dark"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            Our Services
          </h2>
        </div>

        <div className="services-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-20 text-left">
          {services.map((service, idx) => (
            <div key={idx} className="service-item bg-white border border-brand-border p-6 sm:p-8 hover:border-brand-gold transition-colors duration-300 group">
              <span className="font-mono text-brand-gold text-xs sm:text-sm block mb-3 sm:mb-4">0{idx + 1}</span>
              <h3 className="text-base sm:text-lg font-bold uppercase tracking-wider text-brand-dark group-hover:text-brand-gold transition-colors duration-300">
                {service}
              </h3>
            </div>
          ))}
        </div>

        <div className="services-title flex justify-center">
          <NavLink 
            to="/services" 
            className="inline-flex items-center justify-center text-brand-dark border border-brand-dark px-8 py-4 min-h-[48px] w-full sm:w-auto hover:bg-brand-dark hover:text-brand-light transition-all duration-300 font-bold uppercase tracking-widest text-xs sm:text-sm group text-center"
          >
            View All Services
            <ArrowRight className="w-4 h-4 ml-3 transition-transform duration-300 group-hover:translate-x-2" />
          </NavLink>
        </div>
        
      </div>
    </section>
  );
}
