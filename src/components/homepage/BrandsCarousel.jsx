import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

const BrandsCarousel = () => {
  const sectionRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const isInView = useInView(sectionRef, { threshold: 0.3 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const yContent = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  useEffect(() => {
    setIsActive(isInView);
  }, [isInView]);

  // Brand logos/names - you can replace these with actual brand names/logos
  const brands = [
    { name: "Netflix", category: "Entertainment" },
    { name: "MTV Base", category: "Music TV" },
    { name: "BET", category: "Entertainment" },
    { name: "Amazon Prime", category: "Streaming" },
    { name: "Chocolate City", category: "Music Label" },
    { name: "YBNL", category: "Music Label" },
    { name: "Mavin Records", category: "Music Label" },
    { name: "Spaceship Records", category: "Music Label" },
    { name: "DMW", category: "Music Label" },
    { name: "Starboy Entertainment", category: "Music Label" },
    { name: "Universal Music", category: "Music Label" },
    { name: "Sony Music", category: "Music Label" },
    { name: "Warner Music", category: "Music Label" },
    { name: "Empire", category: "Music Label" },
    { name: "Apple Music", category: "Streaming" },
    { name: "Spotify", category: "Streaming" }
  ];

  // Split brands into two rows for infinite scroll effect
  const row1 = brands.slice(0, Math.ceil(brands.length / 2));
  const row2 = brands.slice(Math.ceil(brands.length / 2));


  return (
    <section 
      ref={sectionRef}
      className="relative py-20 overflow-hidden bg-white"
    >
      {/* Subtle Background Elements */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: yBackground }}
      >
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-pink-50 to-rose-100 rounded-full blur-3xl opacity-50"></div>
      </motion.div>

      {/* Main Content */}
      <motion.div 
        className="relative z-10 px-6"
        style={{ y: yContent, opacity }}
      >
        <div className="max-w-7xl mx-auto">
          
          {/* Header Section */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Service Badge */}
            <motion.div
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-gray-100 to-gray-200 border border-gray-300 rounded-full mb-8"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-gray-700 font-medium text-lg">Trusted Partners</span>
            </motion.div>

            {/* Main Title */}
            <motion.h2 
              className="text-5xl md:text-7xl font-luxury text-gray-900 mb-6"
              initial={{ scale: 0.8 }}
              animate={isActive ? { scale: 1 } : { scale: 0.8 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Brands We've
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-pink-600 to-purple-600">Collaborated With</span>
            </motion.h2>

            {/* Description */}
            <motion.p 
              className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              From global streaming platforms to renowned record labels, 
              we've had the privilege of working with industry leaders worldwide.
            </motion.p>
          </motion.div>

          {/* Brands Carousel */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {/* First Row - Moving Right */}
            <div className="relative mb-8 overflow-hidden">
              <motion.div 
                className="flex space-x-12 whitespace-nowrap"
                animate={{ x: [0, -1920] }}
                transition={{ 
                  duration: 30, 
                  repeat: Infinity, 
                  ease: "linear",
                  repeatType: "loop"
                }}
              >
                {/* First set of brands */}
                {row1.concat(row1).map((brand, index) => (
                  <motion.div
                    key={`row1-${index}`}
                    className="flex-shrink-0 group"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-48 h-24 bg-white border border-gray-200 rounded-xl shadow-sm flex flex-col items-center justify-center hover:shadow-lg hover:border-pink-300 transition-all duration-300 group-hover:bg-pink-50">
                      <div className="text-lg font-bold text-gray-800 group-hover:text-pink-600 transition-colors">
                        {brand.name}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        {brand.category}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Second Row - Moving Left */}
            <div className="relative overflow-hidden">
              <motion.div 
                className="flex space-x-12 whitespace-nowrap"
                animate={{ x: [-1920, 0] }}
                transition={{ 
                  duration: 25, 
                  repeat: Infinity, 
                  ease: "linear",
                  repeatType: "loop"
                }}
              >
                {/* Second set of brands */}
                {row2.concat(row2).map((brand, index) => (
                  <motion.div
                    key={`row2-${index}`}
                    className="flex-shrink-0 group"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-48 h-24 bg-white border border-gray-200 rounded-xl shadow-sm flex flex-col items-center justify-center hover:shadow-lg hover:border-purple-300 transition-all duration-300 group-hover:bg-purple-50">
                      <div className="text-lg font-bold text-gray-800 group-hover:text-purple-600 transition-colors">
                        {brand.name}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        {brand.category}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>


          {/* Call to Action */}
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.button
              className="px-12 py-4 bg-gradient-to-r from-gray-900 via-gray-800 to-black hover:from-gray-800 hover:via-gray-700 hover:to-gray-900 text-white font-elegant font-bold text-lg rounded-full transition-all duration-300"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Partner With Us
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default BrandsCarousel;