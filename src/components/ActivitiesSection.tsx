
import React from 'react';
import ActivityCard from './ActivityCard';
import { Camera, Palette, Users, PartyPopper } from 'lucide-react';

const ActivitiesSection = () => {
  const activities = [
    {
      title: "Photography Workshop",
      description: "Capture perfect moments with our expert-led photography sessions for all skill levels.",
      imageSrc: "/lovable-uploads/dde48fe7-342d-4d5b-bdc3-0ba9d622939a.png",
      icon: <Camera className="h-5 w-5 text-primary" />
    },
    {
      title: "Creative Gardening",
      description: "Get your hands dirty with our fun gardening activities where nature meets creativity.",
      imageSrc: "/lovable-uploads/73802e9a-a4de-446b-a0a5-51ff39bb7978.png",
      icon: <Palette className="h-5 w-5 text-primary" />
    },
    {
      title: "Bubble Party Fun",
      description: "Dive into a world of colorful bubbles and laughter with our special bubble activities.",
      imageSrc: "/lovable-uploads/5674d712-d1b3-4595-89ec-cb82ad445d86.png",
      icon: <PartyPopper className="h-5 w-5 text-primary" />
    },
    {
      title: "Group Adventures",
      description: "Join team-building experiences and make new friends while enjoying exciting challenges.",
      imageSrc: "/lovable-uploads/dde48fe7-342d-4d5b-bdc3-0ba9d622939a.png",
      icon: <Users className="h-5 w-5 text-primary" />
    }
  ];

  return (
    <div className="bg-play-softGreen/30 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Discover Our Playful Activities</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From creative workshops to exhilarating adventures, we have something special for everyone to enjoy
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {activities.map((activity, index) => (
            <ActivityCard 
              key={index}
              title={activity.title}
              description={activity.description}
              imageSrc={activity.imageSrc}
              icon={activity.icon}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-white hover:bg-gray-50 text-primary font-bold py-3 px-8 rounded-full shadow-md transition-all hover:-translate-y-1 hover:shadow-lg">
            View All Activities
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActivitiesSection;
