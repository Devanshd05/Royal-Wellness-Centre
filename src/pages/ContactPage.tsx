import { useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import CtaSection from '../components/CtaSection';

gsap.registerPlugin(ScrollTrigger);

export default function ContactPage() {
  const pageRef = useRef(null);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    gsap.fromTo('.animate-hero', 
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" }
    );

    gsap.utils.toArray('.animate-section').forEach((section: any) => {
      gsap.fromTo(section, 
        { y: 30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.9, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
          }
        }
      );
    });
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
    <main ref={pageRef} className="flex-grow pt-16 sm:pt-20">
      
      {/* Hero */}
      <section className="pt-24 sm:pt-32 pb-16 sm:pb-24 bg-brand-light relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16 text-center animate-hero relative z-10">
          <span className="uppercase tracking-[0.25em] text-brand-dark font-bold text-[11px] mb-4 sm:mb-6 block">Get In Touch</span>
          <h1 
            className="font-serif text-brand-dark leading-[1.1] mb-6 sm:mb-8"
            style={{ fontSize: "clamp(2.2rem, 6vw, 4rem)" }}
          >
            Let's start your wellness journey.
          </h1>
          <div className="w-16 h-[1px] bg-brand-gold mx-auto"></div>
        </div>
      </section>

      {/* Form + Details */}
      <section className="py-16 sm:py-24 bg-brand-light relative overflow-hidden border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16 animate-section relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            
            {/* Form Column */}
            <div className="lg:col-span-7">
              {formStatus === 'success' ? (
                <div className="bg-brand-sage/20 border border-brand-sage p-8 sm:p-12 text-center h-full flex flex-col justify-center items-center rounded-sm">
                  <h3 className="text-2xl font-serif text-brand-dark mb-4">Message Received</h3>
                  <p className="text-brand-gray text-base leading-relaxed">Thank you for reaching out. We will get back to you shortly.</p>
                  <button 
                    onClick={() => setFormStatus('idle')}
                    className="mt-8 uppercase tracking-[0.2em] font-bold text-[11px] text-brand-dark hover:text-brand-gold transition-colors py-2 px-4 border border-brand-dark/20"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                    <div>
                      <label htmlFor="name" className="block uppercase tracking-[0.2em] font-bold text-[10px] text-brand-dark mb-2">Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        required
                        className="w-full bg-transparent border-b border-brand-dark/20 min-h-[44px] py-2.5 text-base text-brand-dark focus:outline-none focus:border-brand-gold transition-colors placeholder:text-brand-dark/30 rounded-none"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block uppercase tracking-[0.2em] font-bold text-[10px] text-brand-dark mb-2">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        required
                        className="w-full bg-transparent border-b border-brand-dark/20 min-h-[44px] py-2.5 text-base text-brand-dark focus:outline-none focus:border-brand-gold transition-colors placeholder:text-brand-dark/30 rounded-none"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                    <div>
                      <label htmlFor="phone" className="block uppercase tracking-[0.2em] font-bold text-[10px] text-brand-dark mb-2">Phone / WhatsApp</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone"
                        className="w-full bg-transparent border-b border-brand-dark/20 min-h-[44px] py-2.5 text-base text-brand-dark focus:outline-none focus:border-brand-gold transition-colors placeholder:text-brand-dark/30 rounded-none"
                        placeholder="+91"
                      />
                    </div>
                    <div>
                      <label htmlFor="goal" className="block uppercase tracking-[0.2em] font-bold text-[10px] text-brand-dark mb-2">What can we help you with?</label>
                      <select 
                        id="goal" 
                        name="goal"
                        className="w-full bg-transparent border-b border-brand-dark/20 min-h-[44px] py-2.5 text-base text-brand-dark focus:outline-none focus:border-brand-gold transition-colors rounded-none appearance-none cursor-pointer"
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Weight Management">Weight Management</option>
                        <option value="Nutrition Guidance">Nutrition Guidance</option>
                        <option value="Fitness & Workout">Fitness & Workout</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block uppercase tracking-[0.2em] font-bold text-[10px] text-brand-dark mb-2">Message</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      required
                      rows={4}
                      className="w-full bg-transparent border-b border-brand-dark/20 py-2.5 text-base text-brand-dark focus:outline-none focus:border-brand-gold transition-colors placeholder:text-brand-dark/30 resize-none rounded-none"
                      placeholder="Tell us a little about your goals..."
                    ></textarea>
                  </div>

                  {formStatus === 'error' && (
                    <p className="text-red-500 text-sm font-medium">There was a problem sending your message. Please try again.</p>
                  )}

                  <button 
                    type="submit" 
                    disabled={formStatus === 'submitting'}
                    className="group inline-flex items-center justify-center bg-brand-dark text-brand-light px-8 sm:px-10 py-4 min-h-[48px] hover:bg-brand-gold hover:text-brand-dark transition-all duration-300 font-bold uppercase tracking-[0.2em] text-xs sm:text-[11px] w-full sm:w-auto disabled:opacity-70 text-center"
                  >
                    {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
            
            {/* Details Column */}
            <div className="lg:col-span-5 flex flex-col justify-start">
              <div className="bg-brand-sage/15 border border-brand-border p-6 sm:p-10 h-full rounded-sm">
                <h3 className="text-xl sm:text-2xl font-serif text-brand-dark mb-6 sm:mb-8">Contact Details</h3>
                
                <div className="space-y-6 sm:space-y-8">
                  <div>
                    <span className="uppercase tracking-[0.2em] font-bold text-[10px] text-brand-gold mb-1.5 block">Email</span>
                    <a href="mailto:contact@royalwellnesscentre.com" className="text-brand-dark text-base sm:text-lg font-medium hover:text-brand-gold transition-colors">
                      contact@royalwellnesscentre.com
                    </a>
                  </div>
                  
                  <div>
                    <span className="uppercase tracking-[0.2em] font-bold text-[10px] text-brand-gold mb-1.5 block">Phone / WhatsApp</span>
                    <a href="tel:+919876543210" className="text-brand-dark text-base sm:text-lg font-medium hover:text-brand-gold transition-colors">
                      +91 98765 43210
                    </a>
                  </div>
                  
                  <div>
                    <span className="uppercase tracking-[0.2em] font-bold text-[10px] text-brand-gold mb-1.5 block">Instagram</span>
                    <a href="#" className="text-brand-dark text-base sm:text-lg font-medium hover:text-brand-gold transition-colors">
                      @royalwellnesscentre
                    </a>
                  </div>
                  
                  <div>
                    <span className="uppercase tracking-[0.2em] font-bold text-[10px] text-brand-gold mb-1.5 block">Location</span>
                    <p className="text-brand-gray text-base sm:text-lg font-medium leading-relaxed">
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

      <CtaSection />
    </main>
  );
}
