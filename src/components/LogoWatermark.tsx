export default function LogoWatermark() {
  return (
    <div className="fixed inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden mix-blend-multiply">
      <img 
        src="/RWClogo.png" 
        alt="" 
        className="w-[80vw] md:w-[40vw] opacity-[0.03] object-contain" 
      />
    </div>
  );
}
