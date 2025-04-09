
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simple animation on load
    const heading = headingRef.current;
    const subheading = subheadingRef.current;
    const button = buttonRef.current;

    if (heading && subheading && button) {
      heading.style.opacity = '0';
      subheading.style.opacity = '0';
      button.style.opacity = '0';

      setTimeout(() => {
        heading.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        heading.style.opacity = '1';
        heading.style.transform = 'translateY(0)';
      }, 300);

      setTimeout(() => {
        subheading.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        subheading.style.opacity = '1';
        subheading.style.transform = 'translateY(0)';
      }, 600);

      setTimeout(() => {
        button.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        button.style.opacity = '1';
        button.style.transform = 'translateY(0)';
      }, 900);
    }
  }, []);

  return (
    <div className="relative bg-gradient-to-b from-play-softPurple/30 to-play-softBlue/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 lg:py-32">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 md:space-y-8">
            <h1 
              ref={headingRef}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight"
              style={{ transform: 'translateY(20px)' }}
            >
              Engineering Possibilities, <span className="text-primary">One Curious Idea at a Time</span>
            </h1>
            <p 
              ref={subheadingRef}
              className="text-xl text-gray-700 max-w-lg"
              style={{ transform: 'translateY(20px)' }}
            >
              We're not just building machines — we're bringing imagination to life through robotics, automation, and IoT solutions.
            </p>
            <div 
              ref={buttonRef} 
              className="pt-4"
              style={{ transform: 'translateY(20px)' }}
            >
              <Button className="btn-bounce bg-primary hover:bg-primary/90 text-lg rounded-full px-8 py-6 font-semibold">
                Join the Revolution <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="relative z-10 bg-white p-6 rounded-3xl shadow-lg transform rotate-3 animate-float">
              <img 
                src="/lovable-uploads/e3ce86d4-f916-4307-b27e-ef77b013c86d.png" 
                alt="Innovation and technology" 
                className="rounded-2xl w-full h-auto"
                onError={(e) => {
                  // Fallback in case image fails to load
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = '/placeholder.svg';
                }}
              />
            </div>
            <div className="absolute top-10 -right-10 h-40 w-40 bg-play-yellow rounded-full opacity-60 blur-2xl"></div>
            <div className="absolute -bottom-10 -left-10 h-40 w-40 bg-play-softBlue rounded-full opacity-60 blur-2xl"></div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="hidden lg:block absolute top-20 right-10 h-16 w-16 bg-play-yellow rounded-full animate-pulse-soft"></div>
      <div className="hidden lg:block absolute bottom-20 left-10 h-12 w-12 bg-play-softPurple rounded-full animate-pulse-soft"></div>
    </div>
  );
};

export default HeroSection;
