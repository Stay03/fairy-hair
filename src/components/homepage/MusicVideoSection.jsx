import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

const MusicVideoSection = () => {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const isInView = useInView(sectionRef, { threshold: 0.3 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Parallax transforms based on scroll
  const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const yContent = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  useEffect(() => {
    setIsActive(isInView);
    
    // Handle video autoplay based on view state
    if (videoRef.current) {
      if (isInView) {
        videoRef.current.play().catch(e => console.log('Video autoplay failed:', e));
      } else {
        videoRef.current.pause();
      }
    }
  }, [isInView]);

  const features = [
    "Creative Direction & Styling",
    "On-Set Hair Management", 
    "Character Development",
    "Continuity Maintenance",
    "Artist Collaboration"
  ];


  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-white"
    >
      {/* Subtle Background Elements */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: yBackground }}
      >
        {/* Minimal geometric shapes */}
        <div className="absolute top-1/4 right-1/4 w-px h-32 bg-gradient-to-b from-transparent via-pink-200 to-transparent"></div>
        <div className="absolute bottom-1/3 left-1/4 w-32 h-px bg-gradient-to-r from-transparent via-pink-200 to-transparent"></div>
        
        {/* Subtle dot pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-1 h-1 bg-pink-300 rounded-full"></div>
          <div className="absolute top-40 right-32 w-1 h-1 bg-rose-300 rounded-full"></div>
          <div className="absolute bottom-32 left-1/3 w-1 h-1 bg-pink-300 rounded-full"></div>
          <div className="absolute top-1/2 right-1/5 w-1 h-1 bg-rose-300 rounded-full"></div>
        </div>
      </motion.div>

      {/* Main Content */}
      <motion.div 
        className="relative z-10 flex items-center min-h-screen px-6 py-20"
        style={{ y: yContent, opacity }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -100 }}
            animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Service Badge */}
            <motion.div
              className="inline-flex items-center px-6 py-2 border border-pink-200 rounded-full bg-white/80 backdrop-blur-sm"
              whileHover={{ scale: 1.02, borderColor: "rgb(244 114 182)" }}
              transition={{ duration: 0.2 }}
            >
              <span className="text-gray-800 font-elegant text-sm tracking-wide uppercase">Music Video Styling</span>
            </motion.div>

            {/* Main Title */}
            <motion.h2 
              className="text-6xl md:text-8xl font-luxury text-gray-900 leading-tight"
              style={{ scale }}
            >
              Music Video
              <span className="block text-pink-500">Excellence</span>
            </motion.h2>

            {/* Description */}
            <motion.p 
              className="text-lg text-gray-600 leading-relaxed max-w-2xl font-elegant"
              initial={{ opacity: 0, y: 30 }}
              animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Transform your artistic vision into visual masterpieces with our specialized music video styling. 
              We craft looks that captivate audiences and enhance your creative narrative.
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
                  className="flex items-center space-x-4 py-4 border-b border-gray-100 last:border-b-0"
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div 
                    className="w-1.5 h-1.5 bg-pink-400 rounded-full"
                    animate={isActive ? { scale: [1, 1.3, 1] } : { scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }}
                  />
                  <span className="text-gray-700 font-elegant text-base">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.button
              className="px-8 py-4 bg-gray-900 hover:bg-pink-500 text-white font-elegant font-medium text-base border border-gray-900 hover:border-pink-500 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 30 }}
              animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              Book Music Video Styling
            </motion.button>
          </motion.div>

          {/* Right Content - YouTube Video */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 100 }}
            animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Video Container */}
            <motion.div 
              className="relative bg-gray-50 border border-gray-200 overflow-hidden"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
            >
              {/* Local Video */}
              <div className="relative aspect-video">
                <video
                  ref={videoRef}
                  src={require('../../assets/videos/blaq/blaq.mp4')}
                  title="Music Video Excellence"
                  className="w-full h-full object-cover"
                  muted
                  loop
                />
              </div>

              {/* Bottom accent */}
              <motion.div 
                className="absolute bottom-0 left-0 w-full h-1 bg-pink-400"
                initial={{ width: 0 }}
                animate={isActive ? { width: "100%" } : { width: 0 }}
                transition={{ duration: 1, delay: 1.2 }}
              />
            </motion.div>


            {/* Minimal accent elements */}
            <div className="absolute -bottom-4 -left-4 w-8 h-8 border-l-2 border-b-2 border-pink-300"></div>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-200 z-20"></div>
    </section>
  );
};

export default MusicVideoSection;