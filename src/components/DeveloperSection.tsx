
import React, { useRef, useEffect } from "react";

const DeveloperSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Dynamic color effect
    const section = sectionRef.current;
    if (!section) return;
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const scrollPosition = scrollY - sectionTop + window.innerHeight;
      const scrollPercentage = Math.min(Math.max(scrollPosition / (sectionHeight + window.innerHeight), 0), 1);
      
      // Create dynamic color based on scroll position
      const hue = 48 + (scrollPercentage * 20); // Yellow to orange-ish
      const saturation = 90 + (scrollPercentage * 10);
      const lightness = 90 - (scrollPercentage * 20);
      
      section.style.background = `linear-gradient(135deg, 
        hsl(${hue}, ${saturation}%, ${lightness}%), 
        hsl(${hue + 10}, ${saturation - 10}%, ${lightness - 10}%)
      )`;
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section 
      className="w-full py-16 transition-all duration-500" 
      id="developer" 
      ref={sectionRef}
    >
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="druk-chip">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-yellow-500 text-black mr-2">06</span>
            <span>Developer</span>
          </div>
          <div className="flex-1 h-[1px] bg-gray-300 dark:bg-gray-700"></div>
        </div>
        
        <div className="backdrop-blur-sm bg-white/40 rounded-2xl p-8 shadow-elegant max-w-3xl mx-auto transform transition-all hover:shadow-elegant-hover hover:scale-[1.02]">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-36 h-36 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-5xl font-bold shadow-lg relative overflow-hidden group">
              <span className="relative z-10 text-white">BS</span>
              <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500 via-white/30 to-yellow-300 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              {/* Interactive particles */}
              <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-float"></div>
              <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-white/70 rounded-full animate-float" style={{animationDelay: "1s"}}></div>
              <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-white/50 rounded-full animate-float" style={{animationDelay: "2s"}}></div>
            </div>
            
            <div className="text-left space-y-4">
              <h2 className="text-3xl font-display font-bold text-gray-900">Bishal Sharma</h2>
              <p className="text-lg text-gray-600">
                Lead Developer
              </p>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-700">bishalsharma153@gmail.com</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                  </svg>
                  <span className="text-gray-700">Bhutan</span>
                </div>
                
                <div className="flex items-center gap-2 mt-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  <span className="text-gray-700">Full Stack Developer</span>
                </div>
              </div>
              
              <p className="text-gray-600 mt-4">
                Leading the innovation of humanoid robotics technology with a focus on Bhutanese cultural integration and sustainable design principles.
              </p>
              
              <div className="flex gap-2 mt-4">
                <div className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">React</div>
                <div className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">UI/UX</div>
                <div className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">Robotics</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperSection;
