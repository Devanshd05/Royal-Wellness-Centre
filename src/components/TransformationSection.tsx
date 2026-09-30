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
      className="relative py-20 sm:py-24 lg:py-32 bg-brand-light overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-16">
        <div className="mb-12 sm:mb-16 md:mb-20">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {transformations.map((item, index) => (
            <div 
              key={item.id}
              ref={(el) => { imagesRef.current[index] = el; }}
              className="aspect-[3/4] w-full overflow-hidden bg-brand-sage"
            >
              <img 
                src={item.src} 
                alt={item.alt} 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
