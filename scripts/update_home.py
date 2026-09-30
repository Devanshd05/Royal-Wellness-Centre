import os

# 1. Update ApproachSection.tsx
approach_simplified = """import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import LogoWatermark from './LogoWatermark';

gsap.registerPlugin(ScrollTrigger);

export default function ApproachSection() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo('.approach-animate', 
      { y: 30, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1, 
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      }
    );
  }, { scope: sectionRef });

  return (
    <section id="approach" ref={sectionRef} className="py-24 md:py-32 bg-brand-light relative overflow-hidden text-center">
      <LogoWatermark />
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <span className="approach-animate uppercase tracking-[0.2em] font-bold text-[11px] text-brand-dark mb-8 block">Our Approach</span>
        
        <h2 className="approach-animate text-3xl md:text-5xl font-serif text-brand-dark mb-10 leading-tight">
          Personalised. Practical. Sustainable.
        </h2>
        
        <p className="approach-animate text-brand-gray text-lg font-medium leading-relaxed max-w-2xl mx-auto mb-16">
          We guide individuals according to their personal goals, lifestyle, requirements, and fitness journey.
        </p>

        <div className="approach-animate flex flex-wrap justify-center items-center gap-x-8 gap-y-6 uppercase tracking-[0.2em] text-[11px] font-bold text-brand-dark">
          <span>Personalised</span>
          <span className="text-brand-gold hidden sm:block">◆</span>
          <span>Practical</span>
          <span className="text-brand-gold hidden sm:block">◆</span>
          <span>Sustainable</span>
        </div>
      </div>
    </section>
  );
}
"""
with open('src/components/ApproachSection.tsx', 'w', encoding='utf-8') as f:
    f.write(approach_simplified)


# 2. Create FoundersSection.tsx
founders_content = """import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function FoundersSection() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo('.founder-animate', 
      { y: 40, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1, 
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        }
      }
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-brand-sage border-y border-brand-border">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16 founder-animate">
          <h2 className="text-3xl md:text-4xl font-serif text-brand-dark">Meet the People Behind Royal</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          <div className="founder-animate group">
            <div className="w-full aspect-[4/5] rounded-sm overflow-hidden bg-brand-dark/10">
              <img 
                src="/team/founder.jpeg" 
                alt="Founder" 
                className="w-full h-full object-cover object-[center_top] group-hover:scale-105 transition-transform duration-700 ease-out" 
              />
            </div>
          </div>

          <div className="founder-animate group md:mt-16">
            <div className="w-full aspect-[4/5] rounded-sm overflow-hidden bg-brand-dark/10">
              <img 
                src="/team/co-founder.jpeg" 
                alt="Co-Founder" 
                className="w-full h-full object-cover object-[center_top] group-hover:scale-105 transition-transform duration-700 ease-out" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
"""
with open('src/components/FoundersSection.tsx', 'w', encoding='utf-8') as f:
    f.write(founders_content)


# 3. Simplify HomePage.tsx
home_simplified = """import React from 'react';
import { NavLink } from 'react-router-dom';
import PhilosophySection from '../components/PhilosophySection';
import ServicesSection from '../components/ServicesSection';
import ApproachSection from '../components/ApproachSection';
import FoundersSection from '../components/FoundersSection';
import CtaSection from '../components/CtaSection';
import { ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="flex-grow pt-20">
      {/* Hero Section */}
      <section className="relative w-full h-[90vh] md:h-[85vh] lg:h-[90vh] flex items-center bg-brand-light">
        <div className="absolute inset-0 z-0">
          <img 
            src="/newbanner.png" 
            alt="Wellness Lifestyle" 
            className="w-full h-full object-cover object-[70%_30%] md:object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-light via-brand-light/90 md:via-brand-light/70 to-transparent w-full md:w-[85%] lg:w-[70%]" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 w-full flex flex-col justify-center h-full pt-16 md:pt-0">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-brand-dark leading-[1.1] tracking-tight mb-8">
              A Healthier You, <br />
              <span className="italic">Every Day.</span>
            </h1>
            
            <p className="text-brand-gray text-lg md:text-xl font-medium mb-12 max-w-lg leading-relaxed">
              Personalised nutrition, fitness and lifestyle guidance to help you build healthier, sustainable habits.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <NavLink to="/services" className="group inline-flex items-center justify-center bg-brand-dark text-brand-light px-8 py-4 hover:bg-brand-gold transition-colors duration-300 font-bold uppercase tracking-widest text-sm">
                Explore Services
                <ArrowRight className="w-4 h-4 ml-3 transition-transform duration-300 group-hover:translate-x-1" />
              </NavLink>
              <NavLink to="/contact" className="inline-flex items-center justify-center border border-brand-border text-brand-dark px-8 py-4 hover:border-brand-dark transition-colors duration-300 font-bold uppercase tracking-widest text-sm bg-brand-light/50 backdrop-blur-sm">
                Get In Touch
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      <PhilosophySection />
      <ServicesSection />
      <ApproachSection />
      <FoundersSection />
      <CtaSection 
        heading="Ready to take the next step?"
        body="Get in touch with Royal Wellness Centre."
        buttonText="Get In Touch"
      />
    </main>
  );
}
"""
with open('src/pages/HomePage.tsx', 'w', encoding='utf-8') as f:
    f.write(home_simplified)


# 4. PhilosophySection cleanup (We just need to make sure the text is as requested)
philosophy_text = """import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function PhilosophySection() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo('.animate-philosophy', 
      { y: 30, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1, 
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        }
      }
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-24 md:py-40 bg-brand-dark text-brand-light relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center text-center md:text-left">
          
          <div className="md:col-span-8 md:col-start-3 flex flex-col items-center text-center">
            <span className="animate-philosophy uppercase tracking-[0.2em] font-bold text-[11px] text-brand-gold mb-8 block">Our Philosophy</span>
            <h2 className="animate-philosophy text-4xl md:text-5xl lg:text-6xl font-serif mb-10 leading-[1.15]">
              Wellness is more than changing how you look.
            </h2>
            <div className="animate-philosophy w-12 h-[1px] bg-brand-gold mb-10"></div>
            <p className="animate-philosophy text-brand-light/80 text-lg md:text-xl font-medium leading-relaxed max-w-3xl">
              It's about creating a sustainable lifestyle that supports better nutrition, physical fitness, energy, confidence, and long-term wellbeing.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}
"""
with open('src/components/PhilosophySection.tsx', 'w', encoding='utf-8') as f:
    f.write(philosophy_text)


# 5. Delete unnecessary files
files_to_delete = [
    'src/components/TransformationSection.tsx',
    'src/components/GoalsSection.tsx',
    'src/components/EditorialSection.tsx',
    'src/components/AboutSection.tsx'
]
for file in files_to_delete:
    if os.path.exists(file):
        os.remove(file)

print('HomePage Updates completed.')
