import os

services_content = """import React, { useRef } from 'react';
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
    <section id="services" ref={sectionRef} className="py-24 md:py-32 bg-brand-light border-b border-brand-border">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 text-center">
        
        <div className="services-title mb-16">
          <span className="uppercase tracking-[0.2em] font-bold text-[11px] text-brand-dark mb-6 block">What We Focus On</span>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-dark">Our Services</h2>
        </div>

        <div className="services-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-20 text-left">
          {services.map((service, idx) => (
            <div key={idx} className="service-item bg-white border border-brand-border p-8 hover:border-brand-gold transition-colors duration-300 group">
              <span className="font-mono text-brand-gold text-sm block mb-4">0{idx + 1}</span>
              <h3 className="text-lg font-bold uppercase tracking-wider text-brand-dark group-hover:text-brand-gold transition-colors duration-300">
                {service}
              </h3>
            </div>
          ))}
        </div>

        <div className="services-title">
          <NavLink to="/services" className="inline-flex items-center text-brand-dark border border-brand-dark px-8 py-4 hover:bg-brand-dark hover:text-brand-light transition-all duration-300 font-semibold uppercase tracking-wider text-[13px] group">
            View All Services
            <ArrowRight className="w-4 h-4 ml-3 transition-transform duration-300 group-hover:translate-x-2" />
          </NavLink>
        </div>
        
      </div>
    </section>
  );
}
"""
with open('src/components/ServicesSection.tsx', 'w', encoding='utf-8') as f:
    f.write(services_content)
