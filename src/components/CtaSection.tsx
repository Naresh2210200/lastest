
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CalendarIcon, PhoneIcon } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-play-peach/20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-4">Ready for Your Next Adventure?</h2>
                <p className="text-gray-600 mb-6">
                  Book your spot today and create unforgettable memories with friends and family. 
                  Special weekend rates available!
                </p>
                <div className="space-y-4">
                  <Button className="w-full sm:w-auto bg-primary hover:bg-primary/90 rounded-full">
                    <CalendarIcon className="mr-2 h-5 w-5" /> Book Now
                  </Button>
                  <Button variant="outline" className="w-full sm:w-auto ml-0 sm:ml-4 mt-3 sm:mt-0 rounded-full">
                    <PhoneIcon className="mr-2 h-5 w-5" /> Contact Us
                  </Button>
                </div>
              </motion.div>
            </div>
            <div className="relative hidden md:block">
              <img 
                src="/lovable-uploads/15fd22aa-179f-4f0d-9abf-ec590400ce58.png" 
                alt="Happy people enjoying activities" 
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
