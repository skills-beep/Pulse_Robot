
import React, { useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  backgroundImage?: string;
}

const testimonials: TestimonialProps[] = [{
  content: "Tashi transformed our production line, handling repetitive tasks while our team focuses on innovation. 30% increase in output within three months.",
  author: "Tshering Dorji",
  role: "VP of Operations, Thimphu Manufacturing",
  backgroundImage: "/background-section1.png"
}, {
  content: "Implementing Tashi in our fulfillment centers reduced workplace injuries by 40% while improving order accuracy. The learning capabilities are remarkable.",
  author: "Sonam Wangchuk",
  role: "Director of Logistics, Bhutan Express",
  backgroundImage: "/background-section2.png"
}, {
  content: "Tashi adapted to our lab protocols faster than any system we've used. It's like having another researcher who never gets tired and maintains perfect precision.",
  author: "Dr. Pema Yangzom",
  role: "Lead Scientist, Bhutan Research Institute",
  backgroundImage: "/background-section3.png"
}, {
  content: "As a mid-size business, we never thought advanced robotics would be accessible to us. Tashi changed that equation entirely with its versatility and ease of deployment.",
  author: "Karma Tenzin",
  role: "CEO, Innovations Inc.",
  backgroundImage: "/background-section1.png"
}];

const TestimonialCard = ({
  content,
  author,
  role,
  backgroundImage = "/background-section1.png"
}: TestimonialProps) => {
  return (
    <Card className="h-full overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div 
        className="h-full flex flex-col justify-between bg-cover bg-center p-6 text-white relative group" 
        style={{
          backgroundImage: `url('${backgroundImage}')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-transparent z-0 group-hover:opacity-90 transition-opacity"></div>
        
        <div className="relative z-10">
          <svg className="w-8 h-8 mb-4 text-yellow-400 transform transition-transform group-hover:rotate-12" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </svg>
          <p className="relative mb-6 text-base font-medium leading-relaxed">
            {content}
          </p>
        </div>
        
        <div className="relative z-10 transform transition-transform group-hover:translate-y-[-5px]">
          <p className="font-bold text-lg">{author}</p>
          <p className="text-sm text-white/80">{role}</p>
        </div>
      </div>
    </Card>
  );
};

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Dynamic color effect
    const section = sectionRef.current;
    if (!section) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = section.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;
      
      // Create dynamic gradient based on mouse position
      section.style.background = `
        radial-gradient(
          circle at ${x * 100}% ${y * 100}%,
          rgba(255, 255, 204, 0.2),
          rgba(255, 255, 255, 0) 50%
        ),
        linear-gradient(
          ${x * 360}deg,
          rgba(255, 255, 204, 0.1), 
          rgba(255, 240, 150, 0.1)
        ),
        white
      `;
    };
    
    section.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      section.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section 
      className="py-12 bg-white dark:bg-gray-900 relative overflow-hidden transition-all duration-500" 
      id="testimonials" 
      ref={sectionRef}
    >
      <div className="section-container opacity-0 animate-on-scroll">
        <div className="flex items-center gap-4 mb-6">
          <div className="druk-chip">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-yellow-500 text-black mr-2">04</span>
            <span>Testimonials</span>
          </div>
        </div>
        
        <h2 className="text-5xl font-display font-bold mb-12 text-left dark:text-white">What others say</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index} 
              content={testimonial.content} 
              author={testimonial.author} 
              role={testimonial.role}
              backgroundImage={testimonial.backgroundImage}
            />
          ))}
        </div>
      </div>
      
      {/* Dynamic background decorations */}
      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-yellow-100/20 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-yellow-100/10 rounded-full blur-3xl -z-10 animate-pulse-slow" style={{animationDelay: "1.5s"}}></div>
    </section>
  );
};

export default Testimonials;
