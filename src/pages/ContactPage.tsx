import { useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import CtaSection from '../components/CtaSection';
import StickerGraphic from '../components/StickerGraphic';
import { MessageCircle, MapPin } from 'lucide-react';

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
      <section className="pt-24 sm:pt-32 pb-16 sm:pb-24 bg-gradient-to-tr from-[#FCF9F2] via-[#F2E8D5] to-[#E2EAE5] relative overflow-hidden">
        {/* Massive Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[8rem] sm:text-[12rem] md:text-[16rem] font-serif font-bold text-brand-dark opacity-5 pointer-events-none select-none tracking-tight whitespace-nowrap">
          CONTACT
        </div>

        {/* Stickers */}
        {/* <StickerGraphic Icon={MessageCircle} className="top-[10%] left-[5%] sm:top-[20%] sm:left-[15%]" bgColor="bg-[#C6A15B]" iconColor="text-white" rotation="-rotate-6" />
        <StickerGraphic Icon={MapPin} className="bottom-[15%] right-[10%] sm:bottom-[20%] sm:right-[20%]" bgColor="bg-[#2C4A3B]" iconColor="text-white" rotation="rotate-[15deg]" /> */}

        <div className="relative z-10 px-5 mx-auto text-center max-w-7xl sm:px-8 lg:px-16 animate-hero">
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
      <section className="relative py-16 overflow-hidden border-b sm:py-24 bg-[#A8BA93] border-brand-border">
        <div className="relative z-10 px-5 mx-auto max-w-7xl sm:px-8 lg:px-16 animate-section">
          
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20">
            
            {/* Form Column */}
            <div className="lg:col-span-7">
              {formStatus === 'success' ? (
                <div className="bg-[#EAF3EF] border border-[#CDE4DB] p-8 sm:p-12 text-center h-full flex flex-col justify-center items-center rounded-3xl">
                  <h3 className="text-2xl font-serif text-[#2C4A3B] mb-4">Message Received</h3>
                  <p className="text-base leading-relaxed text-brand-dark/70">Thank you for reaching out. We will get back to you shortly.</p>
                  <button 
                    onClick={() => setFormStatus('idle')}
                    className="mt-8 uppercase tracking-[0.2em] font-bold text-[11px] text-[#2C4A3B] hover:text-brand-gold transition-colors py-2 px-4 border border-[#2C4A3B]/20 rounded-full"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-8 space-y-6 bg-white border shadow-sm sm:space-y-8 sm:p-10 rounded-3xl border-brand-dark/5">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 sm:gap-8">
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

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 sm:gap-8">
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
                    <p className="text-sm font-medium text-red-500">There was a problem sending your message. Please try again.</p>
                  )}

                  <button 
                    type="submit" 
                    disabled={formStatus === 'submitting'}
                    className="group inline-flex items-center justify-center bg-[#C6A15B] text-white px-8 sm:px-10 py-4 min-h-[48px] hover:bg-brand-dark hover:text-white transition-all duration-300 font-bold uppercase tracking-[0.2em] text-xs sm:text-[11px] w-full sm:w-auto disabled:opacity-70 text-center shadow-lg hover:shadow-xl rounded-full"
                  >
                    {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
            
            {/* Details Column */}
            <div className="flex flex-col justify-start lg:col-span-5">
              <div className="bg-[#16271D] text-white p-8 sm:p-12 h-full rounded-3xl shadow-xl relative overflow-hidden">
                {/* Glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#A8BA93]/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>

                <h3 className="relative z-10 mb-8 font-serif text-2xl sm:text-3xl sm:mb-12">Contact Details</h3>
                
                <div className="relative z-10 space-y-8 sm:space-y-10">
                  <div>
                    <span className="uppercase tracking-[0.2em] font-bold text-[10px] text-brand-gold mb-2 block">Email</span>
                    <a href="mailto:contact@royalwellnesscentre.com" className="text-lg font-medium transition-colors text-white/90 sm:text-xl hover:text-brand-gold">
                      contact@royalwellnesscentre.com
                    </a>
                  </div>
                  
                  <div>
                    <span className="uppercase tracking-[0.2em] font-bold text-[10px] text-brand-gold mb-2 block">Phone / WhatsApp</span>
                    <a href="tel:+919876543210" className="text-lg font-medium transition-colors text-white/90 sm:text-xl hover:text-brand-gold">
                      +91 98765 43210
                    </a>
                  </div>
                  
                  <div>
                    <span className="uppercase tracking-[0.2em] font-bold text-[10px] text-brand-gold mb-2 block">Instagram</span>
                    <a href="#" className="text-lg font-medium transition-colors text-white/90 sm:text-xl hover:text-brand-gold">
                      @royalwellnesscentre
                    </a>
                  </div>
                  
                  <div>
                    <span className="uppercase tracking-[0.2em] font-bold text-[10px] text-brand-gold mb-2 block">Location</span>
                    <p className="text-lg font-medium leading-relaxed text-white/70 sm:text-xl">
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
