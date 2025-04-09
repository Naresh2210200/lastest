
import React from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="py-4 px-6 md:px-10 bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <span className="text-2xl font-extrabold text-black">
              LAZY<span className="text-primary">IDLI</span>
            </span>
          </a>
        </div>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#about" className="nav-link">About</a>
          <a href="#products" className="nav-link">Products</a>
          <a href="#careers" className="nav-link">Careers</a>
          <a href="#contact" className="nav-link">Contact</a>
          <Button className="bg-primary hover:bg-primary/90 ml-2 rounded-full font-medium">
            Join the Revolution
          </Button>
        </div>

        {/* Mobile menu button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu />
        </Button>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 py-4 px-4 bg-white rounded-lg shadow-lg">
          <div className="flex flex-col space-y-3">
            <a href="#about" className="nav-link">About</a>
            <a href="#products" className="nav-link">Products</a>
            <a href="#careers" className="nav-link">Careers</a>
            <a href="#contact" className="nav-link">Contact</a>
            <Button className="bg-primary hover:bg-primary/90 w-full mt-2 rounded-full font-medium">
              Join the Revolution
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
