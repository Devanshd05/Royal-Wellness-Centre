import { useRef } from 'react';
import type { LucideIcon } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

interface FloatingGraphicProps {
  Icon: LucideIcon;
  className?: string;
  color?: string;
  delay?: number;
  duration?: number;
  size?: number;
  glassStyle?: string;
}

export default function FloatingGraphic({ 
  Icon, 
  className = '', 
  color = 'text-[#A8BA93]', 
  delay = 0, 
  duration = 4, 
  size = 36,
  glassStyle = 'bg-white/40 backdrop-blur-md border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.08)]'
}: FloatingGraphicProps) {
  const graphicRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // A subtle floating and rotating animation
    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    
    tl.to(graphicRef.current, {
      y: "-20px",
      rotation: "8deg",
      duration: duration,
      ease: "sine.inOut",
      delay: delay
    });

    // Make it interactive on hover
    const el = graphicRef.current;
    if (!el) return;

    const handleMouseEnter = () => {
      gsap.to(el, { scale: 1.15, rotation: "+=15", duration: 0.4, ease: "back.out(1.5)" });
    };
    
    const handleMouseLeave = () => {
      gsap.to(el, { scale: 1, duration: 0.6, ease: "power2.out" });
    };

    el.addEventListener('mouseenter', handleMouseEnter);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      el.removeEventListener('mouseenter', handleMouseEnter);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className={`absolute z-10 ${className}`}>
      <div 
        ref={graphicRef} 
        className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-[2rem] flex items-center justify-center transform -rotate-6 cursor-pointer pointer-events-auto ${glassStyle}`}
      >
        <Icon size={size} className={color} strokeWidth={1.5} />
      </div>
    </div>
  );
}
