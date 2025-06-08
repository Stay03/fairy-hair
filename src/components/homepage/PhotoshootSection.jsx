import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

const PhotoshootSection = () => {
  const sectionRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const isInView = useInView(sectionRef, { threshold: 0.3 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Parallax transforms based on scroll
  const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const yContent = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [0, -5, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  useEffect(() => {
    setIsActive(isInView);
  }, [isInView]);

  const shootTypes = [
    { type: "Editorial", description: "High-fashion magazine styling", icon: "📸", color: "from-purple-500 to-pink-500" },
    { type: "Commercial", description: "Brand campaign perfection", icon: "🎯", color: "from-pink-500 to-rose-500" },
    { type: "Portrait", description: "Personal branding excellence", icon: "👤", color: "from-rose-500 to-red-500" },
    { type: "Fashion", description: "Runway-inspired creativity", icon: "✨", color: "from-red-500 to-pink-500" }
  ];

  const expertise = [
    "Concept Development",
    "Editorial Styling", 
    "Commercial Campaigns",
    "Portrait Sessions",
    "Fashion Photography",
    "Brand Collaborations"
  ];

  const stats = [
    { number: "500+", label: "Photoshoots Completed", icon: "📷" },
    { number: "50+", label: "Magazine Features", icon: "📰" },
    { number: "100+", label: "Brand Campaigns", icon: "🏢" },
    { number: "25+", label: "Fashion Shows", icon: "👗" }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-black"
    >
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: yBackground }}
      >
        

        {/* Camera Flash Effects */}
        <motion.div 
          className="absolute inset-0 bg-white/5"
          animate={{ opacity: [0, 0.1, 0] }}
          transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 4 }}
        />

      </motion.div>

      {/* Main Content */}
      <motion.div 
        className="relative z-10 flex items-center min-h-screen px-6 py-20"
        style={{ y: yContent, opacity, rotateY }}
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
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-600/20 backdrop-blur-sm border border-purple-400/30 rounded-full mb-8"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-purple-400 font-medium text-lg">Photography Excellence</span>
            </motion.div>

            {/* Main Title */}
            <motion.h2 
              className="text-6xl md:text-8xl font-luxury text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-rose-500 mb-6"
              initial={{ scale: 0.8 }}
              animate={isActive ? { scale: 1 } : { scale: 0.8 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Photoshoot
              <span className="block text-white">Perfection</span>
            </motion.h2>

            {/* Description */}
            <motion.p 
              className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Elevate your visual storytelling with our expert photoshoot styling. From editorial spreads 
              to commercial campaigns, we create looks that captivate and inspire.
            </motion.p>
          </motion.div>

          {/* Shoot Types Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {shootTypes.map((shoot, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, scale: 0.8, rotateY: 45 }}
                animate={isActive ? { opacity: 1, scale: 1, rotateY: 0 } : { opacity: 0, scale: 0.8, rotateY: 45 }}
                transition={{ duration: 0.6, delay: 0.8 + (index * 0.1) }}
              >
                <motion.div 
                  className="p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl border border-white/20 h-full"
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 5,
                    backgroundColor: "rgba(255, 255, 255, 0.15)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Icon with Gradient Background */}
                  <motion.div 
                    className={`w-16 h-16 bg-gradient-to-r ${shoot.color} rounded-2xl flex items-center justify-center text-white text-2xl mb-4 mx-auto`}
                    animate={isActive ? { 
                      rotate: [0, 360],
                      scale: [1, 1.1, 1]
                    } : { rotate: 0, scale: 1 }}
                    transition={{ duration: 2, delay: 1 + (index * 0.2), repeat: Infinity, repeatDelay: 4 }}
                  >
                    {shoot.icon}
                  </motion.div>

                  <h3 className="text-xl font-luxury font-bold text-white mb-3 text-center">{shoot.type}</h3>
                  <p className="text-gray-300 text-sm text-center leading-relaxed">{shoot.description}</p>

                  {/* Hover Effect */}
                  <motion.div 
                    className={`absolute inset-0 bg-gradient-to-r ${shoot.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}
                  />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Left: Expertise List */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <h3 className="text-3xl font-luxury text-pink-400 mb-8">Our Expertise</h3>
              
              {expertise.map((skill, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-4 p-4 bg-gradient-to-r from-white/5 to-purple-500/5 backdrop-blur-sm rounded-xl border border-white/10"
                  whileHover={{ 
                    backgroundColor: "rgba(168, 85, 247, 0.1)",
                    borderColor: "rgba(168, 85, 247, 0.3)",
                    x: 15
                  }}
                  transition={{ duration: 0.3 }}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.5, delay: 1.2 + (index * 0.1) }}
                >
                  <motion.div 
                    className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"
                    animate={isActive ? { 
                      scale: [1, 1.5, 1],
                      boxShadow: ["0 0 0 0 rgba(168, 85, 247, 0.4)", "0 0 0 10px rgba(168, 85, 247, 0)", "0 0 0 0 rgba(168, 85, 247, 0)"]
                    } : { scale: 1 }}
                    transition={{ duration: 1.5, delay: 1.2 + (index * 0.1), repeat: Infinity, repeatDelay: 3 }}
                  />
                  <span className="text-gray-300 font-elegant text-lg">{skill}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Right: Stats Grid */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <h3 className="text-3xl font-luxury text-purple-400 mb-8">By The Numbers</h3>
              
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl border border-white/20 text-center"
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: "rgba(255, 255, 255, 0.15)"
                    }}
                    transition={{ duration: 0.3 }}
                    initial={{ opacity: 0, scale: 0.8, rotateX: 30 }}
                    animate={isActive ? { opacity: 1, scale: 1, rotateX: 0 } : { opacity: 0, scale: 0.8, rotateX: 30 }}
                    transition={{ duration: 0.6, delay: 1.3 + (index * 0.15) }}
                  >
                    <motion.div 
                      className="text-3xl mb-2"
                      animate={{ rotateY: [0, 360] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: index }}
                    >
                      {stat.icon}
                    </motion.div>
                    <div className="text-2xl font-bold text-pink-400 mb-1">{stat.number}</div>
                    <div className="text-gray-300 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bottom CTA */}
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            <motion.button
              className="px-12 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 hover:from-purple-400 hover:via-pink-400 hover:to-rose-400 text-white font-elegant font-bold text-lg rounded-full transition-all duration-300"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 25px 50px -12px rgba(168, 85, 247, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Book Your Photoshoot Session
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

    </section>
  );
};

export default PhotoshootSection;