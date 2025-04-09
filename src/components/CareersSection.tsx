
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CareersSection = () => {
  return (
    <section id="careers" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-gradient-to-r from-play-peach/40 to-play-softPurple/40 rounded-3xl overflow-hidden shadow-md">
          <div className="grid md:grid-cols-2 gap-10 p-10 md:p-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Work with Curious People</h2>
              <p className="text-lg text-gray-700 mb-8">
                Join our team of creators, engineers, and dreamers who are building the future of robotics and automation. 
                We're always looking for passionate people who share our curiosity and drive to make a difference.
              </p>
              <div className="space-y-4">
                <p className="text-gray-700">
                  <span className="text-primary font-semibold">•</span> Flexible work environment
                </p>
                <p className="text-gray-700">
                  <span className="text-primary font-semibold">•</span> Competitive compensation
                </p>
                <p className="text-gray-700">
                  <span className="text-primary font-semibold">•</span> Opportunity to work on cutting-edge technology
                </p>
                <p className="text-gray-700">
                  <span className="text-primary font-semibold">•</span> Professional growth and development
                </p>
              </div>
              <div className="mt-10">
                <Button className="bg-primary hover:bg-primary/90 rounded-full px-8 py-6 text-lg font-semibold">
                  View Openings <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="relative hidden md:block">
              <div className="relative bg-white p-5 rounded-2xl shadow-lg transform -rotate-3">
                <img 
                  src="/lovable-uploads/acd6793c-ee4c-47cf-a3f7-a83b43021546.png" 
                  alt="Team collaboration" 
                  className="rounded-xl w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 h-32 w-32 bg-play-yellow rounded-full opacity-40 blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersSection;
