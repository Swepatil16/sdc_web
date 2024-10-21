import { useState } from 'react';

const Navbar = () => {
  // State to toggle the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu open/close
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white text-cyan-950 font-bold p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="#" className="text-amber-600">STANDARD CARZ</a>
        </div>

        {/* Navigation Links - Hidden on mobile, visible on desktop */}
        <div className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-cyan-950">Buy Used Cars</a>
          <a href="#" className="hover:text-cyan-950">Sell Used Cars</a>
        </div>

        {/* Contact Info - Hidden on mobile, visible on desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <span>Call us at <a href="tel:999999999999" className="hover:text-cyan-950">999-999-9999</a></span>
          <a href="#" className="bg-white hover:bg-blue-600 text-cyan-950 py-2 px-4 rounded">Sign In</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <button className="text-blue-500 hover:text-gray-400" onClick={toggleMenu}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden">
          <a href="#" className="block py-2 px-4 text-cyan-950 hover:bg-gray-100">Buy Used Cars</a>
          <a href="#" className="block py-2 px-4 text-cyan-950 hover:bg-gray-100">Sell Used Cars</a>
          <span className="block py-2 px-4">Call us at <a href="tel:999999999999" className="hover:text-cyan-950">999-999-9999</a></span>
          <a href="#" className="block py-2 px-4 bg-white hover:bg-blue-600 text-cyan-950 rounded">Sign In</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
