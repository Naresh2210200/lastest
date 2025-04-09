
import { motion } from 'framer-motion';

interface ActivityCardProps {
  title: string;
  description: string;
  imageSrc: string;
  icon: React.ReactNode;
}

const ActivityCard = ({ title, description, imageSrc, icon }: ActivityCardProps) => {
  return (
    <motion.div 
      className="activity-card flex flex-col h-full"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative overflow-hidden rounded-t-2xl">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-3 left-3 bg-white/80 backdrop-blur-sm p-2 rounded-full">
          {icon}
        </div>
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{description}</p>
        <button className="text-primary font-semibold flex items-center group">
          Learn more 
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 ml-1 transition-transform duration-300 group-hover:translate-x-1" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </motion.div>
  );
};

export default ActivityCard;
