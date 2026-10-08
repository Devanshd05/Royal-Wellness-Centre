import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const transformations = [
  { id: 1, src: '/transformation/t1.jpeg', alt: 'Client transformation 1' },
  { id: 2, src: '/transformation/t2.jpeg', alt: 'Client transformation 2' },
  { id: 3, src: '/transformation/t3.jpeg', alt: 'Client transformation 3' },
  { id: 4, src: '/transformation/t4.jpeg', alt: 'Client transformation 4' },
  { id: 5, src: '/transformation/t5.jpeg', alt: 'Client transformation 5' },
];

export default function TransformationSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imagesRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    imagesRef.current.forEach((image) => {
      if (!image) return;
      gsap.fromTo(
        image,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: image,
            start: 'top 85%',
          },
        }
      );
    });
  }, { scope: sectionRef });

  return (
    <section 
      ref={sectionRef} 
      className="relative py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-[#E2EAE5] via-[#CDE4DB] to-[#A8BA93]/40 overflow-hidden"
    >
      {/* Decorative vertical text watermark */}
      <div className="absolute top-1/4 left-0 -translate-x-1/2 -rotate-90 text-[8rem] sm:text-[10rem] md:text-[14rem] font-serif font-bold text-brand-dark opacity-10 pointer-events-none select-none tracking-tight whitespace-nowrap">
        RESULTS
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-16">
        <div className="mb-12 sm:mb-16 md:mb-20 relative">
          
          {/* Decorative Sparkles */}
          <div className="absolute -top-4 right-2 sm:right-1/4 text-brand-gold animate-pulse opacity-100">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="drop-shadow-lg"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
          </div>
          
          <span className="uppercase tracking-[0.25em] font-bold text-xs text-brand-gold mb-6 block text-center">
            Client Success
          </span>
          <h2 
            className="font-serif text-brand-dark leading-[1.05] text-center"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
          >
            Real Results.
          </h2>
          <p className="mt-6 text-brand-gray text-base sm:text-lg max-w-2xl mx-auto text-center font-medium leading-relaxed">
            See the transformative journeys of our clients who have committed to personalized nutrition and fitness plans.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          {transformations.map((item, index) => (
            <div 
              key={item.id}
              ref={(el) => { imagesRef.current[index] = el; }}
              className="relative aspect-[3/4] w-full rounded-[2rem] p-3 sm:p-4 bg-white/40 backdrop-blur-md border border-white/60 shadow-lg hover:shadow-2xl hover:bg-white/60 transition-all duration-500 hover:-translate-y-2 group cursor-pointer"
            >
              <div className="w-full h-full rounded-2xl overflow-hidden relative">
                <img 
                  src={item.src} 
                  alt={item.alt} 
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Interactive overlay */}
                <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/15 transition-colors duration-500 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 bg-white/95 text-brand-dark px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-md shadow-sm">
                    View Progress
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
