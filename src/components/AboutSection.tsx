
import React from 'react';
import { Brain, Users, Rocket } from 'lucide-react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Lazy Idli Pvt. Ltd.</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At Lazy Idli, we're not just building machines — we're engineering possibilities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-lg text-gray-700 mb-6">
              Founded by innovators from IIT Kharagpur and ISB Hyderabad, Lazy Idli is a passionate startup 
              on a mission to merge curiosity, creativity, and commerce. Our roots may be grounded in robotics, 
              automation, IoT, and smart systems, but our branches spread across every idea that sparks from 
              imagination and leads to impact.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              From Bengaluru, our small yet fierce team of creators, engineers, and dreamers work at the intersection 
              of playful experimentation and serious innovation. This is our fourth startup, and with each iteration, 
              we're getting bolder, quirkier, and more focused on solving real-world problems with delightful simplicity.
            </p>
            <p className="text-lg text-gray-700">
              Whether it's automating a warehouse or building a robotic companion — if it's fun, thoughtful, 
              and futuristic, we're already on it.
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-3xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold mb-8 text-center">What makes us different?</h3>
            <div className="space-y-8">
              <HoverCard>
                <HoverCardTrigger asChild>
                  <div className="flex items-start space-x-4 cursor-pointer hover:bg-gray-100 p-4 rounded-xl transition-colors">
                    <Brain className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-xl font-semibold">We hire for brains and heart — not just degrees.</h4>
                    </div>
                  </div>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <p className="text-sm">We believe great ideas can come from anywhere. Our team consists of people with diverse backgrounds and experiences, not just academic credentials.</p>
                </HoverCardContent>
              </HoverCard>
              
              <HoverCard>
                <HoverCardTrigger asChild>
                  <div className="flex items-start space-x-4 cursor-pointer hover:bg-gray-100 p-4 rounded-xl transition-colors">
                    <Users className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-xl font-semibold">We believe in building with people, not just for them.</h4>
                    </div>
                  </div>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <p className="text-sm">Our collaborative approach means we work closely with our clients and end-users throughout the development process, ensuring solutions that truly meet their needs.</p>
                </HoverCardContent>
              </HoverCard>
              
              <HoverCard>
                <HoverCardTrigger asChild>
                  <div className="flex items-start space-x-4 cursor-pointer hover:bg-gray-100 p-4 rounded-xl transition-colors">
                    <Rocket className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-xl font-semibold">We fail fast, learn faster, and ship with love.</h4>
                    </div>
                  </div>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <p className="text-sm">Our development philosophy embraces experimentation and rapid iteration. We're not afraid to fail because we know it's the fastest path to innovation.</p>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
