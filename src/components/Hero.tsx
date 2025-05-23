
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import LottieAnimation from "./LottieAnimation";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [lottieData, setLottieData] = useState<any>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    // Check if mobile on mount and when window resizes
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const fetchLottieData = async () => {
      try {
        const response = await fetch('/loop-header.lottie');
        if (!response.ok) throw new Error('Failed to load animation');
        const data = await response.json();
        setLottieData(data);
      } catch (error) {
        console.error("Error loading Lottie animation:", error);
        setIsImageLoaded(true); // Fall back to static image if lottie fails
      }
    };
    
    fetchLottieData();
  }, []);

  useEffect(() => {
    // Skip effect on mobile
    if (isMobile) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || !imageRef.current) return;
      
      const {
        left,
        top,
        width,
        height
      } = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;

      imageRef.current.style.transform = `perspective(1000px) rotateY(${x * 5}deg) rotateX(${-y * 5}deg) scale3d(1.05, 1.05, 1.05)`;
    };
    
    const handleMouseLeave = () => {
      if (!imageRef.current) return;
      imageRef.current.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)`;
    };
    
    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseleave", handleMouseLeave);
    }
    
    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [isMobile, isImageLoaded]);
  
  useEffect(() => {
    // Skip parallax on mobile
    if (isMobile) return;
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const elements = document.querySelectorAll('.parallax');
      elements.forEach(el => {
        const element = el as HTMLElement;
        const speed = parseFloat(element.dataset.speed || '0.1');
        const yPos = -scrollY * speed;
        element.style.setProperty('--parallax-y', `${yPos}px`);
      });
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);
  
  // Dynamic background effect
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    
    let hueRotation = 0;
    let gradientAngle = 0;
    
    const animateBackground = () => {
      hueRotation = (hueRotation + 0.1) % 30; // Subtle hue rotation
      gradientAngle = (gradientAngle + 0.2) % 360; // Rotating gradient
      
      section.style.backgroundImage = `
        linear-gradient(
          ${gradientAngle}deg, 
          hsl(40, 90%, 95%) 0%, 
          hsl(${48 + hueRotation}, 100%, 92%) 50%, 
          hsl(52, 95%, 90%) 100%
        ),
        url("/Header-background.webp")
      `;
      
      requestAnimationFrame(animateBackground);
    };
    
    const animation = requestAnimationFrame(animateBackground);
    return () => cancelAnimationFrame(animation);
  }, []);
  
  return (
    <section 
      className="overflow-hidden relative bg-cover" 
      id="hero" 
      ref={sectionRef}
      style={{
        backgroundPosition: 'center 30%', 
        padding: isMobile ? '100px 12px 40px' : '120px 20px 60px',
        backgroundBlendMode: 'overlay'
      }}
    >
      <div className="absolute -top-[10%] -right-[5%] w-1/2 h-[70%] bg-yellow-200 opacity-20 blur-3xl rounded-full"></div>
      
      <div className="container px-4 sm:px-6 lg:px-8" ref={containerRef}>
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-center">
          <div className="w-full lg:w-1/2">
            <div 
              className="druk-chip mb-3 sm:mb-6 opacity-0 animate-fade-in" 
              style={{ animationDelay: "0.1s" }}
            >
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-yellow-500 text-white mr-2">01</span>
              <span>Purpose</span>
            </div>
            
            <h1 
              className="section-title text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight opacity-0 animate-fade-in" 
              style={{ animationDelay: "0.3s" }}
            >
              Atlas: Where Code<br className="hidden sm:inline" />Meets Motion
            </h1>
            
            <p 
              style={{ animationDelay: "0.5s" }} 
              className="section-subtitle mt-3 sm:mt-6 mb-4 sm:mb-8 leading-relaxed opacity-0 animate-fade-in text-gray-950 font-normal text-base sm:text-lg text-left"
            >
              The humanoid companion that learns and adapts alongside you.
            </p>
            
            <div 
              className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in" 
              style={{ animationDelay: "0.7s" }}
            >
              <a 
                href="#get-access" 
                className="flex items-center justify-center group w-full sm:w-auto text-center" 
                style={{
                  backgroundColor: '#FE5C02',
                  borderRadius: '1440px',
                  boxSizing: 'border-box',
                  color: '#FFFFFF',
                  cursor: 'pointer',
                  fontSize: '14px',
                  lineHeight: '20px',
                  padding: '16px 24px',
                  border: '1px solid white',
                }}
              >
                Request Access
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 relative mt-6 lg:mt-0">
            {lottieData ? (
              <div className="relative z-10 animate-fade-in" style={{ animationDelay: "0.9s" }}>
                <LottieAnimation 
                  animationPath={lottieData} 
                  className="w-full h-auto max-w-lg mx-auto"
                  loop={true}
                  autoplay={true}
                />
              </div>
            ) : (
              <div className="relative perspective-1000 animate-fade-in" style={{ animationDelay: "0.9s" }}>
                <div className="absolute inset-0 bg-dark-900 rounded-2xl sm:rounded-3xl -z-10 shadow-xl"></div>
                <div className="relative transition-all duration-500 ease-out overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl">
                  <img 
                    ref={imageRef} 
                    src="/lovable-uploads/5663820f-6c97-4492-9210-9eaa1a8dc415.png" 
                    alt="Atlas Robot" 
                    className="w-full h-auto object-cover transition-transform duration-500 ease-out"
                    style={{ transformStyle: 'preserve-3d' }}
                    onLoad={() => setIsImageLoaded(true)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-yellow-500/20 to-orange-500/30 mix-blend-overlay"></div>
                  
                  {/* Dynamic highlight effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/0 via-white/30 to-orange-300/0 opacity-0 hover:opacity-100 transition-opacity duration-700"></div>
                </div>
                
                {/* Animated particles */}
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-float"></div>
                <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-orange-500 rounded-full animate-float" style={{animationDelay: "1s"}}></div>
                <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-yellow-500 rounded-full animate-float" style={{animationDelay: "2s"}}></div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="hidden lg:block absolute bottom-0 left-1/4 w-64 h-64 bg-yellow-100/30 rounded-full blur-3xl -z-10 parallax" data-speed="0.05"></div>
    </section>
  );
};

export default Hero;
