import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = ({ 
  slides = [
    {
      type: 'text',
      headerText: "25th Fairy Hair",
      primaryText: "25th Fairy Hair",
      subtext: "Extraordinary styles for extraordinary people",
      link: {
        text: "Book Consultation",
        url: "#contact",
        onClick: () => console.log('CTA clicked')
      }
    },
    {
      type: 'gallery',
      backgroundImage: null
    },
    {
      type: 'image',
      backgroundImage: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200'
    }
  ],
  autoPlayInterval = 15000 // 5 seconds
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [galleryImages, setGalleryImages] = useState([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadedImageUrls, setLoadedImageUrls] = useState(new Set());

  // Auto-play slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [slides.length, autoPlayInterval]);

  // Preload images function
  const preloadImage = useCallback((src) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(src);
      img.onerror = reject;
      img.src = src;
    });
  }, []);

  // Load and preload images from heroImages folder for gallery slides
  useEffect(() => {
    const loadGalleryImages = async () => {
      try {
        let images;
        try {
          // Use require.context to load all images from heroImages folder
          const context = require.context('../../assets/images/heroImages', false, /\.(png|jpe?g|svg)$/);
          images = context.keys().map(context);
        } catch (error) {
          console.warn('Could not load gallery images from folder, using fallback:', error);
          // Fallback to placeholder images if folder doesn't exist
          images = [
            'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1595475207225-428b62bda831?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=400&h=400&fit=crop'
          ];
        }

        setGalleryImages(images);

        // Preload all images
        const preloadPromises = images.map(async (src) => {
          try {
            await preloadImage(src);
            setLoadedImageUrls(prev => new Set([...prev, src]));
            return src;
          } catch (error) {
            console.warn('Failed to preload image:', src);
            return null;
          }
        });

        // Wait for at least 50% of images to load before showing
        const results = await Promise.allSettled(preloadPromises);
        const successfulLoads = results.filter(result => result.status === 'fulfilled' && result.value).length;
        
        if (successfulLoads >= Math.ceil(images.length * 0.5)) {
          setImagesLoaded(true);
        }

        // Continue loading remaining images in background
        Promise.allSettled(preloadPromises).then(() => {
          setImagesLoaded(true);
        });

      } catch (error) {
        console.error('Error setting up gallery images:', error);
        setImagesLoaded(true); // Show anyway to prevent infinite loading
      }
    };

    loadGalleryImages();
  }, [preloadImage]);

  // Animation variants for slide transitions
  const slideVariants = {
    enter: {
      opacity: 0,
      scale: 1.05
    },
    center: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.8,
        ease: "easeIn"
      }
    }
  };

  // Updated text animation variants with different directions
  const primaryTextVariants = {
    hidden: { opacity: 0, x: -100 }, // Slide in from left
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.2,
        duration: 0.8,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      x: -100, // Slide out to the left
      transition: {
        delay: 0, // Exit immediately
        duration: 0.6,
        ease: "easeIn"
      }
    }
  };

  const subtextVariants = {
    hidden: { opacity: 0, y: 50 }, // Slide in from bottom
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.6, // Delay after primary text
        duration: 0.8,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: 50, // Slide out downward
      transition: {
        delay: 0.2, // Subtext exits after primary text starts exiting
        duration: 0.6,
        ease: "easeIn"
      }
    }
  };

  // Optimized image animation - reduced complexity and better performance
  const imageAnimation = {
    hidden: { 
      opacity: 0, 
      scale: 0.95,
      // Use transform3d for better GPU acceleration
      transform: 'translate3d(0, 0, 0) scale(0.95)'
    },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transform: 'translate3d(0, 0, 0) scale(1)',
      transition: {
        delay: Math.min(i * 0.05, 0.4), // Cap maximum delay to prevent long waits
        duration: 0.4, // Reduced duration for snappier feel
        ease: [0.25, 0.46, 0.45, 0.94] // Custom easing for smoother animation
      }
    })
  };

  // Container animation for the entire gallery
  const galleryContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.03 // Reduced stagger for smoother effect
      }
    }
  };

  // Render different slide types
  const renderSlideContent = (slide) => {
    switch (slide.type) {
      case 'image':
        return (
          <motion.div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ 
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${slide.backgroundImage})` 
            }}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
          />
        );
      
      case 'gallery':
        return (
          <motion.div 
            className="absolute inset-0 overflow-hidden"
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
          >
            {/* Dark overlay for gallery */}
            <div className="absolute inset-0 bg-black/50 z-10" />
            {/* Loading state */}
            {!imagesLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
                <div className="text-center">
                  <motion.div
                    className="w-12 h-12 border-4 border-amber-400/30 border-t-amber-400 rounded-full mx-auto mb-4"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                  <p className="text-amber-400/80 text-sm">Loading gallery...</p>
                </div>
              </div>
            )}

            {/* Gallery Grid */}
            {imagesLoaded && (
              <motion.div 
                className="grid grid-cols-4 md:grid-cols-8 "
                variants={galleryContainerVariants}
                initial="hidden"
                animate="visible"
              >
                {galleryImages.map((image, index) => (
                  <motion.div
                    key={`gallery-image-${index}`}
                    custom={index}
                    variants={imageAnimation}
                    className="relative overflow-hidden  group aspect-square" // Added aspect-square for consistent sizing
                    style={{
                      // Ensure consistent container size to prevent layout shifts
                      minHeight: '80px',
                      backgroundColor: '#1f2937' // Fallback background
                    }}
                  >
                    {/* Image with optimized loading */}
                    <img
                      src={image}
                      alt={`Gallery ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-300 will-change-transform group-hover:scale-105"
                      loading="eager" // Since we're preloading, load immediately when visible
                      decoding="async"
                      style={{
                        // Prevent layout shifts during loading
                        display: loadedImageUrls.has(image) ? 'block' : 'none'
                      }}
                      onLoad={() => {
                        // Ensure image is marked as loaded
                        setLoadedImageUrls(prev => new Set([...prev, image]));
                      }}
                    />
                    
                    {/* Placeholder while loading */}
                    {!loadedImageUrls.has(image) && (
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 animate-pulse" />
                    )}
                    
                    {/* Overlay - simplified for better performance */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200" />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </motion.div>
        );
      
      default: // text
        return (
          <motion.div 
            className="absolute inset-0 bg-black" // Changed to solid black background
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
          >
            {/* Removed animated background elements for cleaner black background */}
            
            {/* Text Content Overlay */}
            <div className="absolute inset-0 flex items-center justify-center z-10 px-6">
              <div className="text-center max-w-4xl mx-auto">
                {/* Primary Text - slides in from left */}
                {slide.primaryText && (
                  <motion.p
                    variants={primaryTextVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="text-xl md:text-5xl text-blue-600 font-light mb-2 tracking-wide leading-relaxed"
                  >
                    {slide.primaryText}
                  </motion.p>
                )}

                {/* Subtext - slides in from bottom */}
                {slide.subtext && (
                  <motion.div
                    variants={subtextVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="mb-10"
                  >
                    <div className="">
                      <p className="text-lg md:text-3xl text-blue-300 leading-relaxed max-w-2xl mx-auto">
                        {slide.subtext}
                      </p>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        );
    }
  };

  return (
    <div className="relative h-[70vh] overflow-hidden">
      {/* Slide container */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className="absolute inset-0"
        >
          {renderSlideContent(slides[currentSlide])}
        </motion.div>
      </AnimatePresence>

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-amber-400 scale-110' 
                  : 'bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-black/20 z-20">
        <motion.div
          className="h-full bg-gradient-to-r from-amber-400 to-orange-500"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ 
            duration: autoPlayInterval / 1000,
            ease: "linear",
            repeat: Infinity
          }}
          key={currentSlide}
        />
      </div>

      {/* Navigation arrows */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default Hero;