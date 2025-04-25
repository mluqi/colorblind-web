"use client";

interface BackgroundProps {
  opacity?: number;
  children: React.ReactNode;
}
const Background = ({ opacity = 20, children }: BackgroundProps) => {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden">
      {/* Base Background */}
      <div className="absolute inset-0 bg-black">
        {/* Gradient Overlays */}
        <div 
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-900/30 to-transparent"
          style={{ opacity: `${opacity}%` }}
        ></div>
        <div 
          className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-red-900/30 to-transparent"
          style={{ opacity: `${opacity}%` }}
        ></div>
        
        {/* Additional Effects */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-red-600 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/3 w-80 h-80 rounded-full bg-purple-600 blur-3xl opacity-70 animate-pulse delay-300"></div>
        </div>
      </div>
      
      {/* Children Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default Background;