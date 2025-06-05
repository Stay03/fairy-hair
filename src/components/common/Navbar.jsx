import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Sidebar from './Sidebar';
import logoDark from '../../assets/images/logo/logo-dark.png';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <motion.nav 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled ? 'bg-black shadow-lg' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className={`max-w-7xl mx-auto transition-all duration-500 ${
          isScrolled ? 'px-6' : 'px-0 py-0'
        }`}>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div 
              className="flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <motion.img 
                src={logoDark} 
                alt="25th Fairy Hair" 
                className="w-auto transition-all duration-500 py-2"
                animate={{
                  height: isScrolled ? '4rem' : '10rem'
                }}
              />
            </motion.div>

            {/* Right side content */}
            <div className="flex items-center space-x-4">
              {/* Enroll Now Button - Hidden on mobile */}
              <motion.button
                className="hidden md:inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-montserrat font-medium hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => console.log('Enroll Now clicked')}
              >
                Enroll Now
              </motion.button>

              {/* Hamburger Menu - Visible on mobile */}
              <motion.button
                className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5"
                onClick={toggleSidebar}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Toggle menu"
              >
                <motion.span
                  className={`w-6 h-0.5 rounded-full transition-colors duration-500 ${
                    isScrolled ? 'bg-white' : 'bg-white'
                  }`}
                  animate={{
                    rotate: isSidebarOpen ? 45 : 0,
                    y: isSidebarOpen ? 8 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className={`w-6 h-0.5 rounded-full transition-colors duration-500 ${
                    isScrolled ? 'bg-white' : 'bg-white'
                  }`}
                  animate={{
                    opacity: isSidebarOpen ? 0 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className={`w-6 h-0.5 rounded-full transition-colors duration-500 ${
                    isScrolled ? 'bg-white' : 'bg-white'
                  }`}
                  animate={{
                    rotate: isSidebarOpen ? -45 : 0,
                    y: isSidebarOpen ? -8 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
    </>
  );
};

export default Navbar;