import { useRef } from 'react';
import { 
  ArrowRight, 
  Utensils, 
  Scale, 
  Dumbbell, 
  Activity, 
  Leaf, 
  Sparkles, 
  BookOpen, 
  Target 
} from 'lucide-react';
import { NavLink } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const services = [
  { title: "Personalised Nutrition", icon: Utensils },
  { title: "Weight Management", icon: Scale },
  { title: "Healthy Weight Gain", icon: Dumbbell },
  { title: "Fitness & Workout Guidance", icon: Activity },
  { title: "Healthy Lifestyle Planning", icon: Leaf },
  { title: "Body Transformation", icon: Sparkles },
  { title: "Wellness Education", icon: BookOpen },
  { title: "Motivation & Accountability", icon: Target }
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
    
    // Parallax huge background element
    gsap.to('.service-bg-element', {
      y: -150,
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });
  }, { scope: sectionRef });

  return (
    <section id="services" ref={sectionRef} className="relative py-16 sm:py-24 lg:py-32 bg-[#A8BA93] border-b border-brand-border/40 overflow-hidden">
      
      {/* Massive Faint Background Icon */}
      <div className="service-bg-element absolute -bottom-32 -right-32 text-brand-dark/5 pointer-events-none z-0">
        <Leaf className="w-[500px] h-[500px] md:w-[800px] md:h-[800px] transform -rotate-45" strokeWidth={0.5} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-16 text-center">
        
        <div className="services-title mb-12 sm:mb-20">
          <span className="uppercase tracking-[0.25em] font-bold text-[11px] text-brand-dark/70 mb-4 block">What We Focus On</span>
          <h2 
            className="font-serif text-brand-dark"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            Our Services
          </h2>
        </div>

        <div className="services-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8 mb-16 sm:mb-24 text-left">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div 
                key={idx} 
                className="service-item relative bg-white/60 backdrop-blur-md rounded-2xl border border-white/40 p-6 sm:p-7 hover:bg-white hover:border-brand-gold/30 hover:shadow-[0_8px_30px_rgb(198,161,91,0.1)] hover:-translate-y-1 transition-all duration-500 group flex flex-col overflow-hidden"
              >
                <div className="mb-4">
                  <span className="font-mono text-brand-dark/30 text-sm font-medium">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                </div>
                
                <div className="flex items-center sm:items-start gap-4">
                  <div className="p-2 rounded-lg bg-[#A8BA93]/30 text-brand-gold group-hover:bg-brand-gold group-hover:text-white transition-colors duration-500 shrink-0">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-base font-bold uppercase tracking-wider text-brand-dark leading-snug group-hover:text-brand-gold transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>
                
                {/* Decorative subtle background element */}
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-[#A8BA93]/50 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              </div>
            );
          })}
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
