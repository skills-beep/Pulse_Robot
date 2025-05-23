
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HumanoidSection from "@/components/HumanoidSection";
import SpecsSection from "@/components/SpecsSection";
import DetailsSection from "@/components/DetailsSection";
import ImageShowcaseSection from "@/components/ImageShowcaseSection";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import MadeByHumans from "@/components/MadeByHumans";
import DeveloperSection from "@/components/DeveloperSection";
import Footer from "@/components/Footer";

const Index = () => {
  // Initialize intersection observer to detect when elements enter viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  useEffect(() => {
    // Dynamic background colors for body
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercentage = Math.min(scrollY / scrollHeight, 1);
      
      // Subtle background color change based on scroll position
      document.documentElement.style.setProperty(
        '--background-color', 
        `hsl(${48 + (scrollPercentage * 10)}, ${95 - (scrollPercentage * 15)}%, ${98 - (scrollPercentage * 5)}%)`
      );
    };
    
    window.addEventListener('scroll', handleScroll);
    // Initialize
    document.documentElement.style.setProperty('--background-color', 'hsl(48, 95%, 98%)');
    document.body.style.background = 'var(--background-color)';
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // This helps ensure smooth scrolling for the anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href')?.substring(1);
        if (!targetId) return;
        
        const targetElement = document.getElementById(targetId);
        if (!targetElement) return;
        
        // Increased offset to account for mobile nav
        const offset = window.innerWidth < 768 ? 100 : 80;
        
        window.scrollTo({
          top: targetElement.offsetTop - offset,
          behavior: 'smooth'
        });
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-white transition-colors duration-500" style={{ background: 'var(--background-color)' }}>
      <Navbar />
      <main className="space-y-4 sm:space-y-8"> {/* Reduced space on mobile */}
        <Hero />
        <HumanoidSection />
        <SpecsSection />
        <DetailsSection />
        <ImageShowcaseSection />
        <Features />
        <Testimonials />
        <Newsletter />
        <DeveloperSection />
        <MadeByHumans />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
