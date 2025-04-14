import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll event to add shadow to header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Close mobile menu when clicking a nav link
  const handleNavLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`sticky top-0 z-50 bg-[#0B3D91] ${scrolled ? 'shadow-md' : ''}`}>
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center py-4">
          <div>
            <h1 className="text-white text-xl md:text-2xl font-bold">Nambi Narayanan</h1>
            <p className="text-[#FF9933] text-xs md:text-sm">A Tribute to an ISRO Legend</p>
          </div>
          
          <div className="hidden md:block">
            <ul className="flex space-x-6 text-white">
              <li><a href="#home" className="hover:text-[#FF9933] transition-colors">Home</a></li>
              <li><a href="#biography" className="hover:text-[#FF9933] transition-colors">Biography</a></li>
              <li><a href="#career" className="hover:text-[#FF9933] transition-colors">Career</a></li>
              <li><a href="#case" className="hover:text-[#FF9933] transition-colors">Espionage Case</a></li>
              <li><a href="#gallery" className="hover:text-[#FF9933] transition-colors">Gallery</a></li>
              <li><a href="#resources" className="hover:text-[#FF9933] transition-colors">Resources</a></li>
            </ul>
          </div>
          
          <div className="md:hidden">
            <button 
              className="text-white hover:text-[#FF9933]" 
              onClick={handleMobileMenuToggle}
              aria-label="Toggle mobile menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </nav>
      </div>
      
      <div 
        className={`bg-[#072a66] md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}
      >
        <ul className="py-2 px-4 space-y-2 text-white">
          <li><a href="#home" className="block py-2 hover:text-[#FF9933] transition-colors" onClick={handleNavLinkClick}>Home</a></li>
          <li><a href="#biography" className="block py-2 hover:text-[#FF9933] transition-colors" onClick={handleNavLinkClick}>Biography</a></li>
          <li><a href="#career" className="block py-2 hover:text-[#FF9933] transition-colors" onClick={handleNavLinkClick}>Career</a></li>
          <li><a href="#case" className="block py-2 hover:text-[#FF9933] transition-colors" onClick={handleNavLinkClick}>Espionage Case</a></li>
          <li><a href="#gallery" className="block py-2 hover:text-[#FF9933] transition-colors" onClick={handleNavLinkClick}>Gallery</a></li>
          <li><a href="#resources" className="block py-2 hover:text-[#FF9933] transition-colors" onClick={handleNavLinkClick}>Resources</a></li>
        </ul>
      </div>
    </header>
  );
}
