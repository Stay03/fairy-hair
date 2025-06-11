import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Sidebar = ({ isOpen, onClose }) => {
  // Lock body scroll when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const sidebarVariants = {
    closed: {
      x: '100%',
      transition: {
        type: 'tween',
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
    open: {
      x: 0,
      transition: {
        type: 'tween',
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
  };

  const backdropVariants = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  const menuItemVariants = {
    closed: {
      x: 50,
      opacity: 0,
    },
    open: {
      x: 0,
      opacity: 1,
    },
  };

  const staggerContainer = {
    open: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const navigationItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            variants={backdropVariants}
            initial="closed"
            animate="open"
            exit="closed"
            onClick={onClose}
          />

          {/* Sidebar */}
          <motion.div
            className="fixed top-0 right-0 h-full w-80 max-w-[85vw] z-50 bg-white shadow-2xl"
            variants={sidebarVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <h2 className="text-xl font-playfair font-semibold text-gray-800">
                  Menu
                </h2>
                <motion.button
                  className="p-2 hover:bg-gray-100 transition-colors"
                  onClick={onClose}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Close menu"
                >
                  <svg
                    className="w-6 h-6 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </motion.button>
              </div>

              {/* Navigation */}
              <motion.div
                className="flex-1 px-6 py-8"
                variants={staggerContainer}
                initial="closed"
                animate="open"
                exit="closed"
              >
                <nav className="space-y-6">
                  {navigationItems.map((item, index) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      className="block text-lg font-montserrat text-gray-700 hover:text-amber-600 transition-colors py-2"
                      variants={menuItemVariants}
                      whileHover={{ x: 10 }}
                      onClick={onClose}
                    >
                      {item.name}
                    </motion.a>
                  ))}
                </nav>

                {/* Enroll Now Button for Mobile */}
                <motion.div
                  className="mt-12"
                  variants={menuItemVariants}
                >
                  <motion.button
                    className="w-full py-3 px-6 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-montserrat font-medium hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      console.log('Enroll Now clicked');
                      onClose();
                    }}
                  >
                    Enroll Now
                  </motion.button>
                </motion.div>
              </motion.div>

              {/* Footer */}
              <motion.div
                className="p-6 border-t border-gray-200"
                variants={menuItemVariants}
              >
                <p className="text-sm text-gray-500 text-center font-montserrat">
                  25th Fairy Hair
                  <br />
                  Luxury Celebrity Hair Designer
                </p>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;