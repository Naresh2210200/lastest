
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const products = [
  {
    title: 'Smart Conveyor Systems',
    description: 'Intelligent conveyor systems with built-in sorting capabilities and real-time monitoring.',
    image: '/lovable-uploads/ed8665af-be23-47e7-ba18-1651158e7f9b.png',
    color: 'bg-play-softBlue',
  },
  {
    title: 'IoT-Enabled Robotics Arms',
    description: 'Precision robotics with remote monitoring and control through our IoT platform.',
    image: '/lovable-uploads/9e2e002f-c658-4cac-9889-c03e38c3c5cb.png',
    color: 'bg-play-softGreen',
  },
  {
    title: 'Custom Automation Tools',
    description: 'Bespoke automation solutions designed specifically for warehouse operations.',
    image: '/lovable-uploads/f50bd4d6-d488-4d3b-a9d6-bf23ac240c47.png',
    color: 'bg-play-softPurple',
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Products</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We build innovative solutions that transform industries and improve lives.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={index} 
              className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <Card className="h-full border-none">
                <div className={`h-52 ${product.color} relative overflow-hidden`}>
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      // Fallback in case image fails to load
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = '/placeholder.svg';
                    }}
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">{product.title}</CardTitle>
                  <CardDescription className="text-base">{product.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button variant="ghost" className="text-primary hover:text-primary/90 group">
                    Learn more <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
