import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DynamicPortfolio = () => {
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeItem, setActiveItem] = useState(null);
  const observerRef = useRef(null);

  // Function to convert folder names to display titles
  const formatTitle = useCallback((folderName) => {
    return folderName
      .split(/[-_\s]+/)
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  }, []);

  // Function to load portfolio images from folders
  const loadPortfolioItems = useCallback(async () => {
    try {
      setLoading(true);
      
      // Get all portfolio folders and their images
      let portfolioData = [];
      
      // Try to use require.context to scan the portfolio directory
      const portfolioContext = require.context('../../assets/images/portfolio', true, /\.(png|jpe?g|svg)$/);
      
      // Group images by folder
      const folderMap = new Map();
      
      portfolioContext.keys().forEach(imagePath => {
        // Extract folder name from path (e.g., "./ayra_starr/image1.jpg" -> "ayra_starr")
        const pathParts = imagePath.split('/');
        if (pathParts.length > 2) { // Ensure it's in a subfolder
          const folderName = pathParts[1];
          const imageUrl = portfolioContext(imagePath);
          
          if (!folderMap.has(folderName)) {
            folderMap.set(folderName, []);
          }
          folderMap.get(folderName).push(imageUrl);
        }
      });
      
      // Convert to array format
      portfolioData = Array.from(folderMap.entries()).map(([folderName, images]) => ({
        id: folderName,
        title: formatTitle(folderName),
        images: images.slice(0, 3), // Take only first 3 images
        hasMore: images.length > 3 // Track if there are more images
      }));
      
      setPortfolioItems(portfolioData);
      
    } catch (error) {
      console.error('Error loading portfolio items:', error);
      setPortfolioItems([]); // No fallback data
    } finally {
      setLoading(false);
    }
  }, [formatTitle]);

  // Load portfolio items on component mount
  useEffect(() => {
    loadPortfolioItems();
  }, [loadPortfolioItems]);

  // Intersection Observer for scroll-based animations
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Portfolio is in view - spread it out
            const portfolioId = entry.target.getAttribute('data-portfolio-id');
            setActiveItem(portfolioId);
          } else {
            // Portfolio is out of view - check if we need to clear active
            const portfolioId = entry.target.getAttribute('data-portfolio-id');
            setActiveItem(prev => prev === portfolioId ? null : prev);
          }
        });
      },
      {
        threshold: 0.6, // Trigger when 60% of the portfolio is in view
        rootMargin: '-10% 0px -10% 0px' // Add some margin for better triggering
      }
    );

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Observe portfolio items when they're rendered
  useEffect(() => {
    const portfolioElements = document.querySelectorAll('[data-portfolio-id]');
    portfolioElements.forEach((el) => {
      if (observerRef.current) {
        observerRef.current.observe(el);
      }
    });

    return () => {
      if (observerRef.current) {
        portfolioElements.forEach((el) => {
          observerRef.current.unobserve(el);
        });
      }
    };
  }, [portfolioItems]);

  // Animation variants for the portfolio cards
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95
    },
    visible: (index) => ({
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        delay: index * 0.1,
        duration: 0.6,
        ease: "easeOut"
      }
    }),
    hover: {
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  // Responsive spread image animations - different for mobile vs desktop
  const imageVariants = {
    stacked: (index) => ({
      x: 0,
      y: index * -6,
      z: index * -10,
      rotate: index === 1 ? -2 : index === 2 ? 2 : index === 3 ? -1 : 0,
      scale: 1 - (index * 0.04),
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    }),
    spreadDesktop: (index) => ({
      x: index * 220, // Horizontal spread for desktop - reduced spacing for 4 items
      y: 0,
      z: 0,
      rotate: 0,
      scale: 0.75,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
        delay: index * 0.05
      }
    }),
    spreadMobile: (index) => ({
      // Mobile: top moves up, sides spread, bottom moves down  
      x: index === 0 ? 0 : index === 1 ? -70 : index === 2 ? 70 : 0,
      y: index === 0 ? -150 : index === 1 ? 40 : index === 2 ? 40 : 180,
      z: 0,
      rotate: index === 1 ? -15 : index === 2 ? 15 : 0,
      scale: index === 0 ? 0.9 : index === 3 ? 0.8 : 0.85,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
        delay: index * 0.08
      }
    })
  };

  // Container animation for the entire section
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 py-20 px-6 flex items-center justify-center">
        <div className="text-center">
          <motion.div
            className="w-16 h-16 border-4 border-amber-400/30 border-t-amber-400 rounded-full mx-auto mb-6"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <p className="text-amber-400/80 text-lg">Loading Portfolio...</p>
        </div>
      </div>
    );
  }

  if (portfolioItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-900 py-20 px-6 flex items-center justify-center">
        <div className="text-center">
          <p className="text-amber-400/80 text-lg">No portfolio items found</p>
          <p className="text-gray-400 text-sm mt-2">Please check your portfolio directory structure</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 py-20 px-6">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          variants={cardVariants}
          custom={0}
        >
          <h2 className="text-4xl md:text-6xl font-light text-white mb-6">
              Portfolio
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Discover our exclusive collection of celebrity styling work, featuring collaborations 
            with Nigeria's top artists and international productions.
          </p>
        </motion.div>

        {/* Portfolio Rows - Responsive Layout */}
        <div className="space-y-32">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="group cursor-pointer w-full"
              variants={cardVariants}
              custom={index + 1}
              data-portfolio-id={item.id}
            >
              {/* Desktop Layout */}
              <div className="hidden md:block">
                <div className="relative w-full flex items-center min-h-[400px] overflow-hidden">
                  {/* Images Container - Desktop: Left-aligned, spreads horizontally */}
                  <div className="relative w-80 h-80 flex-shrink-0 overflow-visible">
                    {item.images.map((image, imageIndex) => (
                      <motion.div
                        key={`${item.id}-image-desktop-${imageIndex}`}
                        className="absolute top-0 left-0 w-72 h-72 rounded-2xl overflow-hidden shadow-2xl cursor-pointer"
                        custom={imageIndex}
                        variants={imageVariants}
                        animate={activeItem === item.id ? "spreadDesktop" : "stacked"}
                        whileHover={{
                          y: -8,
                          transition: {
                            duration: 0.2,
                            ease: "easeOut"
                          }
                        }}
                        style={{
                          zIndex: 4 - imageIndex,
                        }}
                      >
                        <img
                          src={image}
                          alt={`${item.title} - Image ${imageIndex + 1}`}
                          className="w-full h-full object-cover transition-transform duration-700"
                          loading="lazy"
                        />
                        
                        {/* Image Overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent transition-opacity duration-500 ${
                          activeItem === item.id ? 'opacity-100' : 'opacity-0'
                        }`} />
                        
                        {/* Shine Effect */}
                        <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transition-transform duration-1000 ${
                          activeItem === item.id ? 'translate-x-full' : '-translate-x-full'
                        }`} />
                      </motion.div>
                    ))}
                    
                    {/* More Card - Desktop */}
                    {item.hasMore && (
                      <motion.div
                        key={`${item.id}-more-desktop`}
                        className="absolute top-0 left-0 w-72 h-72 rounded-2xl overflow-hidden shadow-2xl bg-white/30 backdrop-blur-sm border border-gray-400/30 cursor-pointer hover:bg-white/40 transition-colors duration-300"
                        custom={3}
                        variants={imageVariants}
                        animate={activeItem === item.id ? "spreadDesktop" : "stacked"}
                        style={{
                          zIndex: 1,
                        }}
                        onClick={() => window.location.href = `/portfolio/${item.id}`}
                      >
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-4xl mb-2">+</div>
                            <div className="text-black font-medium text-lg">More</div>
                          </div>
                        </div>
                        
                        {/* Card Overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-t from-amber-500/10 via-transparent to-transparent transition-opacity duration-500 ${
                          activeItem === item.id ? 'opacity-100' : 'opacity-0'
                        }`} />
                        
                        {/* Shine Effect */}
                        <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/20 to-transparent -skew-x-12 transition-transform duration-1000 ${
                          activeItem === item.id ? 'translate-x-full' : '-translate-x-full'
                        }`} />
                      </motion.div>
                    )}
                  </div>

                  {/* Portfolio Info - Desktop */}
                  <motion.div 
                    className="ml-12 flex-1 min-w-0"
                    animate={{
                      x: activeItem === item.id ? 50 : 0,
                      opacity: activeItem === item.id ? 0.9 : 1
                    }}
                    transition={{ duration: 0.8 }}
                  >
                    <motion.h3 
                      className={`text-4xl md:text-5xl font-light mb-4 transition-colors duration-500 ${
                        activeItem === item.id ? 'text-amber-400' : 'text-white'
                      }`}
                    >
                      {item.title}
                    </motion.h3>
                    
                    <motion.div 
                      className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mb-4 transition-opacity duration-500"
                      animate={{
                        opacity: activeItem === item.id ? 1 : 0,
                        width: activeItem === item.id ? 96 : 0
                      }}
                      transition={{ duration: 0.6 }}
                    />
                    
                    <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
                      Exclusive styling and creative direction for {item.title.toLowerCase()}, 
                      showcasing our signature aesthetic and attention to detail.
                    </p>
                    
                    {/* Image Count Indicator */}
                    <div className="flex mt-6 space-x-2">
                      {item.images.map((_, i) => (
                        <motion.div
                          key={i}
                          className={`w-3 h-3 rounded-full transition-all duration-500 ${
                            activeItem === item.id 
                              ? 'bg-amber-400' 
                              : 'bg-gray-600'
                          }`}
                          animate={{
                            scale: activeItem === item.id ? 1.2 : 1
                          }}
                          transition={{ delay: i * 0.1 }}
                        />
                      ))}
                      {item.hasMore && (
                        <motion.div
                          className={`w-3 h-3 rounded-full transition-all duration-500 ${
                            activeItem === item.id 
                              ? 'bg-amber-400' 
                              : 'bg-gray-600'
                          }`}
                          animate={{
                            scale: activeItem === item.id ? 1.2 : 1
                          }}
                          transition={{ delay: item.images.length * 0.1 }}
                        />
                      )}
                    </div>
                  </motion.div>

                  {/* Glow Effect - Desktop */}
                  <motion.div 
                    className="absolute left-0 top-0 w-72 h-72 rounded-2xl bg-gradient-to-r from-amber-400/20 to-orange-500/20 blur-xl -z-10"
                    animate={{
                      opacity: activeItem === item.id ? 0.3 : 0
                    }}
                    transition={{ duration: 0.8 }}
                  />
                </div>
              </div>

              {/* Mobile Layout */}
              <div className="block md:hidden">
                <div className="relative w-full flex flex-col items-center min-h-[500px] px-6">
                  {/* Images Container - Mobile: Centered, spreads in triangle */}
                  <div className="relative w-64 h-64 flex-shrink-0 mb-8">
                    {item.images.map((image, imageIndex) => (
                      <motion.div
                        key={`${item.id}-image-mobile-${imageIndex}`}
                        className="absolute top-0 left-0 w-64 h-64 rounded-2xl overflow-hidden shadow-2xl cursor-pointer"
                        custom={imageIndex}
                        variants={imageVariants}
                        animate={activeItem === item.id ? "spreadMobile" : "stacked"}
                        whileHover={{
                          y: -8,
                          transition: {
                            duration: 0.2,
                            ease: "easeOut"
                          }
                        }}
                        style={{
                          zIndex: 4 - imageIndex,
                        }}
                      >
                        <img
                          src={image}
                          alt={`${item.title} - Image ${imageIndex + 1}`}
                          className="w-full h-full object-cover transition-transform duration-700"
                          loading="lazy"
                        />
                        
                        {/* Image Overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent transition-opacity duration-500 ${
                          activeItem === item.id ? 'opacity-100' : 'opacity-0'
                        }`} />
                        
                        {/* Shine Effect */}
                        <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transition-transform duration-1000 ${
                          activeItem === item.id ? 'translate-x-full' : '-translate-x-full'
                        }`} />
                      </motion.div>
                    ))}
                    
                    {/* More Card - Mobile */}
                    {item.hasMore && (
                      <motion.div
                        key={`${item.id}-more-mobile`}
                        className="absolute top-0 left-0 w-64 h-64 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 backdrop-blur-sm border border-amber-400/30 cursor-pointer hover:bg-gradient-to-br hover:from-amber-500/30 hover:to-orange-500/30 transition-colors duration-300"
                        custom={3}
                        variants={imageVariants}
                        animate={activeItem === item.id ? "spreadMobile" : "stacked"}
                        style={{
                          zIndex: 1,
                        }}
                        onClick={() => window.location.href = `/portfolio/${item.id}`}
                      >
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-4xl mb-2">+</div>
                            <div className="text-amber-400 font-medium text-lg">More</div>
                          </div>
                        </div>
                        
                        {/* Card Overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-t from-amber-500/10 via-transparent to-transparent transition-opacity duration-500 ${
                          activeItem === item.id ? 'opacity-100' : 'opacity-0'
                        }`} />
                        
                        {/* Shine Effect */}
                        <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/20 to-transparent -skew-x-12 transition-transform duration-1000 ${
                          activeItem === item.id ? 'translate-x-full' : '-translate-x-full'
                        }`} />
                      </motion.div>
                    )}
                  </div>

                  {/* Portfolio Info - Mobile */}
                  <motion.div 
                    className="text-center w-full"
                    animate={{
                      y: activeItem === item.id ? 20 : 0,
                      opacity: activeItem === item.id ? 0.9 : 1
                    }}
                    transition={{ duration: 0.8 }}
                  >
                    <motion.h3 
                      className={`text-3xl font-light mb-4 transition-colors duration-500 ${
                        activeItem === item.id ? 'text-amber-400' : 'text-white'
                      }`}
                    >
                      {item.title}
                    </motion.h3>
                    
                    <motion.div 
                      className="w-16 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mb-4"
                      animate={{
                        opacity: activeItem === item.id ? 1 : 0,
                        width: activeItem === item.id ? 64 : 0
                      }}
                      transition={{ duration: 0.6 }}
                    />
                    
                    <p className="text-gray-300 text-base leading-relaxed max-w-lg mx-auto">
                      Exclusive styling and creative direction for {item.title.toLowerCase()}, 
                      showcasing our signature aesthetic and attention to detail.
                    </p>
                    
                    {/* Image Count Indicator */}
                    <div className="flex justify-center mt-6 space-x-2">
                      {item.images.map((_, i) => (
                        <motion.div
                          key={i}
                          className={`w-3 h-3 rounded-full transition-all duration-500 ${
                            activeItem === item.id 
                              ? 'bg-amber-400' 
                              : 'bg-gray-600'
                          }`}
                          animate={{
                            scale: activeItem === item.id ? 1.2 : 1
                          }}
                          transition={{ delay: i * 0.1 }}
                        />
                      ))}
                      {item.hasMore && (
                        <motion.div
                          className={`w-3 h-3 rounded-full transition-all duration-500 ${
                            activeItem === item.id 
                              ? 'bg-amber-400' 
                              : 'bg-gray-600'
                          }`}
                          animate={{
                            scale: activeItem === item.id ? 1.2 : 1
                          }}
                          transition={{ delay: item.images.length * 0.1 }}
                        />
                      )}
                    </div>
                  </motion.div>

                  {/* Glow Effect - Mobile */}
                  <motion.div 
                    className="absolute top-8 left-1/2 transform -translate-x-1/2 w-64 h-64 rounded-2xl bg-gradient-to-r from-amber-400/20 to-orange-500/20 blur-xl -z-10"
                    animate={{
                      opacity: activeItem === item.id ? 0.3 : 0
                    }}
                    transition={{ duration: 0.8 }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          variants={cardVariants}
          custom={portfolioItems.length + 1}
        >
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-black font-medium rounded-full hover:shadow-2xl hover:shadow-amber-500/25 transition-all duration-300"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(245, 158, 11, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            View Full Portfolio
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl" />
      </div>
    </div>
  );
};

export default DynamicPortfolio;