import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa'; // FontAwesome icons

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    // Close the mobile menu when the route changes
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <nav className="bg-white px-2 py-1 flex items-center justify-between fixed top-0 left-0 w-full z-50 border-b-4 border-black">
      {/* Logo */}
      <div className="flex items-center pl-4">
        <img src={logo} alt="Springdale Public School Logo" className="h-12 md:h-16 pl-1 mr-2" />
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMobileMenu} className="text-black text-2xl">
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Navigation Links */}
      <ul className={`md:flex md:space-x-7 absolute md:relative top-[3.7rem] right-0 bg-white w-full md:w-auto transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:translate-x-0 md:top-auto md:pt-0 md:pb-0 pt-4 pl-8 pb-4`}>
        <li><Link to="/" className="block md:inline text-black font-bold text-[1.3rem] hover:text-blue-900 hover:underline py-1 md:py-0">Home</Link></li>
        <li><Link to="/about" className="block md:inline text-black font-bold text-[1.3rem] hover:text-blue-900 hover:underline py-1 md:py-0">About Us</Link></li>
        <li><Link to="/academic" className="block md:inline text-black font-bold text-[1.3rem] hover:text-blue-900 hover:underline py-1 md:py-0">Academics</Link></li>
        <li><Link to="/admission" className="block md:inline text-black font-bold text-[1.3rem] hover:text-blue-900 hover:underline py-1 md:py-0">Admissions</Link></li>
        <li><Link to="/faculty" className="block md:inline text-black font-bold text-[1.3rem] hover:text-blue-900 hover:underline py-1 md:py-0">Faculty</Link></li>
        <li><Link to="/student" className="block md:inline text-black font-bold text-[1.3rem] hover:text-blue-900 hover:underline py-1 md:py-0">Students</Link></li>
        <li><Link to="/gallery" className="block md:inline text-black font-bold text-[1.3rem] hover:text-blue-900 hover:underline py-1 md:py-0">Gallery</Link></li>
        <li><Link to="/contact" className="block md:inline text-black font-bold text-[1.3rem] hover:text-blue-900 hover:underline py-1 md:py-0">Contact Us</Link></li>
      </ul>

      {/* Apply Now Button */}
      <div className="hidden md:block">
        <Link to="/apply" className="bg-black text-white font-semibold px-4 py-1 rounded text-[1.1rem] hover:bg-blue-900 hover:underline">Apply Now</Link>
      </div>
    </nav>
  );
};

export default Header;
