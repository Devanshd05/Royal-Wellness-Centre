import os

contact_page_content = """import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import LogoWatermark from '../components/LogoWatermark';

gsap.registerPlugin(ScrollTrigger);

export default function ContactPage() {
  const pageRef = useRef(null);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  useGSAP(() => {
    gsap.fromTo('.animate-section', 
      { y: 40, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1, 
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: pageRef.current,
          start: "top top",
        }
      }
    );
  }, { scope: pageRef });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    const form = e.currentTarget;
    const data = new FormData(form);

    fetch('https://formspree.io/f/xyzyqvrp', {
      method: 'POST',
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        setFormStatus('success');
        form.reset();
      } else {
        setFormStatus('error');
      }
    }).catch(() => {
      setFormStatus('error');
    });
  };

  return (
    <main ref={pageRef} className="flex-grow pt-20">
      
      {/* Hero */}
      <section className="pt-32 pb-24 bg-brand-light relative overflow-hidden">
        <LogoWatermark />
        <div className="max-w-4xl mx-auto px-6 text-center animate-section relative z-10">
          <span className="uppercase tracking-[0.2em] text-brand-dark font-bold text-[11px] mb-8 block">Get In Touch</span>
          <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-serif text-brand-dark leading-[1.1] mb-8">
            Let's start your wellness journey.
          </h1>
          <div className="w-16 h-[1px] bg-brand-gold mx-auto"></div>
        </div>
      </section>

      {/* Form + Details */}
      <section className="py-24 bg-brand-light relative overflow-hidden border-b border-brand-border">
        <LogoWatermark />
        <div className="max-w-6xl mx-auto px-6 lg:px-12 animate-section relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* Form Column */}
            <div className="lg:col-span-7">
              {formStatus === 'success' ? (
                <div className="bg-brand-sage/20 border border-brand-sage p-8 md:p-12 text-center h-full flex flex-col justify-center items-center">
                  <h3 className="text-2xl font-serif text-brand-dark mb-4">Message Received</h3>
                  <p className="text-brand-gray">Thank you for reaching out. We will get back to you shortly.</p>
                  <button 
                    onClick={() => setFormStatus('idle')}
                    className="mt-8 uppercase tracking-[0.2em] font-bold text-[11px] text-brand-dark hover:text-brand-gold transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="name" className="block uppercase tracking-[0.2em] font-bold text-[10px] text-brand-dark mb-3">Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        required
                        className="w-full bg-transparent border-b border-brand-dark/20 py-3 text-brand-dark focus:outline-none focus:border-brand-gold transition-colors placeholder:text-brand-dark/30 rounded-none"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block uppercase tracking-[0.2em] font-bold text-[10px] text-brand-dark mb-3">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        required
                        className="w-full bg-transparent border-b border-brand-dark/20 py-3 text-brand-dark focus:outline-none focus:border-brand-gold transition-colors placeholder:text-brand-dark/30 rounded-none"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="phone" className="block uppercase tracking-[0.2em] font-bold text-[10px] text-brand-dark mb-3">Phone / WhatsApp</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone"
                        className="w-full bg-transparent border-b border-brand-dark/20 py-3 text-brand-dark focus:outline-none focus:border-brand-gold transition-colors placeholder:text-brand-dark/30 rounded-none"
                        placeholder="+91"
                      />
                    </div>
                    <div>
                      <label htmlFor="goal" className="block uppercase tracking-[0.2em] font-bold text-[10px] text-brand-dark mb-3">What can we help you with?</label>
                      <select 
                        id="goal" 
                        name="goal"
                        className="w-full bg-transparent border-b border-brand-dark/20 py-3 text-brand-dark focus:outline-none focus:border-brand-gold transition-colors rounded-none appearance-none cursor-pointer"
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Weight Management">Weight Management</option>
                        <option value="Nutrition Guidance">Nutrition Guidance</option>
                        <option value="Fitness & Workout">Fitness & Workout</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block uppercase tracking-[0.2em] font-bold text-[10px] text-brand-dark mb-3">Message</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      required
                      rows={4}
                      className="w-full bg-transparent border-b border-brand-dark/20 py-3 text-brand-dark focus:outline-none focus:border-brand-gold transition-colors placeholder:text-brand-dark/30 resize-none rounded-none"
                      placeholder="Tell us a little about your goals..."
                    ></textarea>
                  </div>

                  {formStatus === 'error' && (
                    <p className="text-red-500 text-sm font-medium">There was a problem sending your message. Please try again.</p>
                  )}

                  <button 
                    type="submit" 
                    disabled={formStatus === 'submitting'}
                    className="group inline-flex items-center justify-center bg-brand-dark text-brand-light px-10 py-5 hover:bg-brand-gold hover:text-brand-dark transition-all duration-300 font-bold uppercase tracking-[0.2em] text-[11px] w-full md:w-auto disabled:opacity-70"
                  >
                    {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
            
            {/* Details Column */}
            <div className="lg:col-span-5 flex flex-col justify-start pt-4 lg:pt-0">
              <div className="bg-brand-sage/10 border border-brand-border p-10 h-full">
                <h3 className="text-2xl font-serif text-brand-dark mb-10">Contact Details</h3>
                
                <div className="space-y-8">
                  <div>
                    <span className="uppercase tracking-[0.2em] font-bold text-[10px] text-brand-gold mb-2 block">Email</span>
                    <a href="#" className="text-brand-dark text-lg font-medium hover:text-brand-gold transition-colors">
                      [Client Email]
                    </a>
                  </div>
                  
                  <div>
                    <span className="uppercase tracking-[0.2em] font-bold text-[10px] text-brand-gold mb-2 block">Phone / WhatsApp</span>
                    <a href="#" className="text-brand-dark text-lg font-medium hover:text-brand-gold transition-colors">
                      [Client Phone]
                    </a>
                  </div>
                  
                  <div>
                    <span className="uppercase tracking-[0.2em] font-bold text-[10px] text-brand-gold mb-2 block">Instagram</span>
                    <a href="#" className="text-brand-dark text-lg font-medium hover:text-brand-gold transition-colors">
                      @royalwellnesscentre
                    </a>
                  </div>
                  
                  <div>
                    <span className="uppercase tracking-[0.2em] font-bold text-[10px] text-brand-gold mb-2 block">Location</span>
                    <p className="text-brand-gray text-lg font-medium leading-relaxed">
                      Online guidance available<br />
                      across India and worldwide.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
          
        </div>
      </section>

    </main>
  );
}
"""
with open('src/pages/ContactPage.tsx', 'w', encoding='utf-8') as f:
    f.write(contact_page_content)
