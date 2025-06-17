"use client"

interface WatermarkProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  position?: 'absolute' | 'relative';
}

export function YashWatermark({ 
  className = "", 
  size = 'md',
  position = 'absolute' 
}: WatermarkProps) {
  
  const sizeClasses = {
    sm: "text-xl md:text-2xl",
    md: "text-2xl md:text-3xl",
    lg: "text-3xl md:text-4xl"
  };
  
  const positionClasses = position === 'absolute' 
    ? "absolute inset-0 flex items-center justify-center pointer-events-none z-10" 
    : "relative flex items-center justify-center pointer-events-none";

  return (
    <div className={`${positionClasses} ${className}`}>
      <div className={`font-bold transform rotate-[-20deg] opacity-20 select-none ${sizeClasses[size]}`}>
        <span className="text-green-600">Yash</span>
        <span className="text-red-600">Trading</span>
      </div>
    </div>
  );
}
