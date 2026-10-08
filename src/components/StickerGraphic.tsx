import type { LucideIcon } from 'lucide-react';

export default function StickerGraphic({
  Icon,
  className = "",
  bgColor = "bg-brand-gold",
  iconColor = "text-white",
  rotation = "rotate-12",
  size = 36
}: {
  Icon: LucideIcon;
  className?: string;
  bgColor?: string;
  iconColor?: string;
  rotation?: string;
  size?: number;
}) {
  return (
    <div className={`absolute z-30 ${className}`}>
      <div 
        className={`w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full ${bgColor} border-[3px] sm:border-[6px] border-white shadow-[0_8px_25px_rgba(0,0,0,0.15)] flex items-center justify-center transform ${rotation} hover:scale-125 hover:-translate-y-4 hover:rotate-0 transition-all duration-500 cursor-default`}
      >
        <Icon size={size} className={iconColor} strokeWidth={2.5} />
      </div>
    </div>
  );
}
