import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

const MoviesSection = () => {
  const sectionRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const isInView = useInView(sectionRef, { threshold: 0.3 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Parallax transforms based on scroll
  const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const yContent = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [0, 5, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  useEffect(() => {
    setIsActive(isInView);
  }, [isInView]);

  const features = [
    "Character-Driven Styling",
    "Period Authentic Looks", 
    "Continuity Management",
    "Director Collaboration",
    "On-Location Flexibility"
  ];

  const movieTypes = [
    { type: "Nollywood Films", count: "50+", icon: "🎭" },
    { type: "International Productions", count: "25+", icon: "🌍" },
    { type: "Period Dramas", count: "30+", icon: "👑" },
    { type: "Contemporary Films", count: "40+", icon: "🎬" }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-black via-gray-900 to-rose-900"
    >
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: yBackground }}
      >
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-rose-500/20 to-red-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-gradient-to-r from-pink-400/20 to-rose-600/20 rounded-full blur-3xl"></div>
        

        {/* Film Strip Animation */}
        <motion.div 
          className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-rose-400/20 to-transparent"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>

      {/* Main Content */}
      <motion.div 
        className="relative z-10 flex items-center min-h-screen px-6 py-20"
        style={{ y: yContent, opacity, rotateX }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content (Video) */}
          <motion.div 
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -100 }}
            animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Video Container */}
            <motion.div 
              className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl border border-white/20 overflow-hidden"
              whileHover={{ rotateY: -5, rotateX: 5 }}
              transition={{ duration: 0.3 }}
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto rounded-2xl"
              >
                <source src={require('../../assets/videos/afcon/01.mp4')} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Video Overlay Effect */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-3xl"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>

            {/* Floating Awards */}
            <motion.div 
              className="absolute -bottom-6 -right-6 p-4 bg-gradient-to-r from-yellow-500/20 to-rose-500/20 backdrop-blur-sm rounded-2xl border border-yellow-400/30"
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, -5, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="text-center">
                <div className="text-3xl mb-2">🏆</div>
                <div className="text-yellow-400 font-bold text-lg">Award</div>
                <div className="text-gray-300 text-sm">Winning</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="space-y-8 order-1 lg:order-2"
            initial={{ opacity: 0, x: 100 }}
            animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Service Badge */}
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-rose-500/20 to-red-600/20 backdrop-blur-sm border border-rose-400/30 rounded-full"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-rose-400 font-medium">Film & Television</span>
            </motion.div>

            {/* Main Title */}
            <motion.h2 
              className="text-5xl md:text-7xl font-luxury text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-500 to-red-500"
              initial={{ scale: 0.8 }}
              animate={isActive ? { scale: 1 } : { scale: 0.8 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Movie
              <span className="block text-white">Production</span>
            </motion.h2>

            {/* Description */}
            <motion.p 
              className="text-xl text-gray-300 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Bring characters to life with authentic, period-accurate styling for Nollywood and international 
              productions. Our expertise spans every genre and era.
            </motion.p>

            {/* Features List */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-4 p-4 bg-gradient-to-r from-white/5 to-rose-500/5 backdrop-blur-sm rounded-lg border border-white/10"
                  whileHover={{ 
                    backgroundColor: "rgba(244, 63, 94, 0.1)",
                    borderColor: "rgba(244, 63, 94, 0.3)",
                    x: 10
                  }}
                  transition={{ duration: 0.3 }}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }}
                >
                  <motion.div 
                    className="w-3 h-3 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full"
                    animate={isActive ? { 
                      scale: [1, 1.5, 1],
                      boxShadow: ["0 0 0 0 rgba(244, 63, 94, 0.4)", "0 0 0 10px rgba(244, 63, 94, 0)", "0 0 0 0 rgba(244, 63, 94, 0)"]
                    } : { scale: 1 }}
                    transition={{ duration: 1, delay: 0.8 + (index * 0.1), repeat: Infinity, repeatDelay: 2 }}
                  />
                  <span className="text-gray-300 font-elegant text-lg">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-rose-500 via-pink-500 to-red-500 hover:from-rose-400 hover:via-pink-400 hover:to-red-400 text-white font-elegant font-bold text-lg rounded-full transition-all duration-300"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 25px 50px -12px rgba(244, 63, 94, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 30 }}
              animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              Book Movie Production Styling
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* Top Gradient Fade */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent z-20"></div>
    </section>
  );
};

export default MoviesSection;