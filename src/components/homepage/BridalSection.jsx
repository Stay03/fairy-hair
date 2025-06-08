import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

const BridalSection = () => {
  const sectionRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const isInView = useInView(sectionRef, { threshold: 0.3 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Parallax transforms based on scroll
  const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const yContent = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  useEffect(() => {
    setIsActive(isInView);
  }, [isInView]);

  const services = [
    "Bridal Hair Design",
    "Trial Sessions", 
    "Wedding Day Service",
    "Touch-Up Support",
    "Bridal Party Styling",
    "Traditional & Modern Looks"
  ];


  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50 to-white"
    >
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: yBackground }}
      >
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-gradient-to-r from-pink-200/40 to-rose-300/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-gradient-to-r from-rose-200/40 to-purple-300/40 rounded-full blur-3xl"></div>
        
      </motion.div>

      {/* Main Content */}
      <motion.div 
        className="relative z-10 flex items-center min-h-screen px-6 py-20"
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
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-500/20 to-rose-600/20 backdrop-blur-sm border border-pink-400/30 rounded-full mb-8"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-rose-600 font-medium text-lg">Bridal Excellence</span>
            </motion.div>

            {/* Main Title */}
            <motion.h2 
              className="text-6xl md:text-8xl font-luxury text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-pink-600 to-purple-600 mb-6"
              style={{ scale }}
            >
              Your Perfect
              <span className="block text-gray-800">Wedding Day</span>
            </motion.h2>

            {/* Description */}
            <motion.p 
              className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Make your special day unforgettable with our bespoke bridal styling services. 
              From traditional elegance to contemporary sophistication, we create looks that capture your unique beauty.
            </motion.p>
          </motion.div>

          {/* Services Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-pink-200/50 shadow-lg"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  borderColor: "rgba(236, 72, 153, 0.3)"
                }}
                transition={{ duration: 0.3 }}
                initial={{ opacity: 0, scale: 0.8, rotateY: 45 }}
                animate={isActive ? { opacity: 1, scale: 1, rotateY: 0 } : { opacity: 0, scale: 0.8, rotateY: 45 }}
                transition={{ duration: 0.6, delay: 0.8 + (index * 0.1) }}
              >
                <motion.div 
                  className="w-4 h-4 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full mb-4"
                  animate={isActive ? { 
                    scale: [1, 1.5, 1],
                    boxShadow: ["0 0 0 0 rgba(236, 72, 153, 0.4)", "0 0 0 15px rgba(236, 72, 153, 0)", "0 0 0 0 rgba(236, 72, 153, 0)"]
                  } : { scale: 1 }}
                  transition={{ duration: 1.5, delay: 1 + (index * 0.1), repeat: Infinity, repeatDelay: 3 }}
                />
                <h3 className="text-lg font-elegant font-semibold text-gray-800 mb-2">{service}</h3>
                <p className="text-gray-600 text-sm">Professional service tailored to your unique vision and style preferences.</p>
              </motion.div>
            ))}
          </motion.div>


          {/* Bottom CTA */}
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.button
              className="px-12 py-4 bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 hover:from-rose-400 hover:via-pink-400 hover:to-purple-400 text-white font-elegant font-bold text-lg rounded-full transition-all duration-300"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 25px 50px -12px rgba(244, 63, 94, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule Your Bridal Consultation
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

    </section>
  );
};

export default BridalSection;