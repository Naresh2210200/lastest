
import React from 'react';
import { motion } from 'framer-motion';
import { StarIcon } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Parent",
    content: "My kids absolutely loved the bubble party! The staff were amazing and the activities kept everyone engaged for hours. We'll definitely be back!",
    rating: 5
  },
  {
    name: "Michael Chang",
    role: "Photography Enthusiast",
    content: "The photography workshop exceeded my expectations. I learned so many new techniques in just one session, and the instructors were incredibly helpful.",
    rating: 5
  },
  {
    name: "Priya Patel",
    role: "Team Leader",
    content: "We booked a corporate event and our team had an amazing time. The activities were perfect for team building and everyone left with big smiles.",
    rating: 4
  }
];

const TestimonialSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-play-softPurple/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Happy Visitors Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from those who've experienced the joy firsthand
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl shadow-md"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon 
                    key={i} 
                    className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-200'}`} 
                    fill={i < testimonial.rating ? 'currentColor' : 'none'} 
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
