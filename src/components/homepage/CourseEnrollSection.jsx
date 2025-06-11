import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

const CourseEnrollSection = () => {
  const sectionRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const isInView = useInView(sectionRef, { threshold: 0.3 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const yContent = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  useEffect(() => {
    setIsActive(isInView);
  }, [isInView]);

  const enrollmentSteps = [
    {
      step: "1",
      title: "Submit Application",
      description: "Fill out our enrollment form with your details and experience"
    },
    {
      step: "2", 
      title: "Interview & Portfolio",
      description: "Meet with our instructors and showcase any previous work"
    },
    {
      step: "3",
      title: "Secure Your Spot",
      description: "Complete payment and receive your welcome package"
    }
  ];

  const courseBenefits = [
    "Lifetime access to course materials",
    "Job placement assistance", 
    "Ongoing mentorship support",
    "Alumni network access",
    "Professional certification",
    "Equipment and starter kit included"
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-black"
    >
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: yBackground }}
      >
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-gradient-to-r from-pink-400/20 to-rose-600/20 rounded-full blur-3xl"></div>
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
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-600/20 backdrop-blur-sm border border-purple-400/30 rounded-full mb-8"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-purple-400 font-medium text-lg">Start Your Journey</span>
            </motion.div>

            {/* Main Title */}
            <motion.h2 
              className="text-6xl md:text-8xl font-luxury text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-rose-500 mb-6"
              initial={{ scale: 0.8 }}
              animate={isActive ? { scale: 1 } : { scale: 0.8 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Enroll
              <span className="block text-white">Today</span>
            </motion.h2>

            {/* Description */}
            <motion.p 
              className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Take the first step towards becoming a professional hair designer. 
              Limited spots available for our next cohort starting soon.
            </motion.p>
          </motion.div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Left: Enrollment Process */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h3 className="text-3xl font-luxury text-pink-400 mb-8">How to Enroll</h3>
              
              <div className="space-y-6">
                {enrollmentSteps.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-6 p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl border border-white/20"
                    whileHover={{ 
                      scale: 1.02,
                      backgroundColor: "rgba(255, 255, 255, 0.15)"
                    }}
                    transition={{ duration: 0.3 }}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                    transition={{ duration: 0.6, delay: 0.8 + (index * 0.2) }}
                  >
                    <motion.div 
                      className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
                      animate={isActive ? { 
                        scale: [1, 1.1, 1],
                        rotate: [0, 360]
                      } : { scale: 1, rotate: 0 }}
                      transition={{ duration: 1, delay: 0.8 + (index * 0.2) }}
                    >
                      {item.step}
                    </motion.div>
                    <div>
                      <h4 className="text-xl font-elegant font-semibold text-white mb-2">{item.title}</h4>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Course Investment */}
              <motion.div 
                className="mt-8 p-8 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-2xl border border-purple-400/30"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                whileHover={{ scale: 1.02 }}
              >
                <h4 className="text-2xl font-luxury text-pink-400 mb-4">Course Investment</h4>
                <div className="flex items-baseline space-x-2 mb-4">
                  <span className="text-4xl font-bold text-white">₦850,000</span>
                  <span className="text-gray-400 line-through">₦1,200,000</span>
                </div>
                <p className="text-gray-300 text-sm mb-4">Early bird pricing - Limited time offer</p>
                <div className="text-purple-300 text-sm">
                  • Payment plans available
                  <br />
                  • 30-day money-back guarantee
                </div>
              </motion.div>
            </motion.div>

            {/* Right: Benefits & Enrollment Form */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <h3 className="text-3xl font-luxury text-purple-400 mb-8">What's Included</h3>
              
              <div className="space-y-4 mb-8">
                {courseBenefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-4 p-4 bg-gradient-to-r from-white/5 to-purple-500/5 backdrop-blur-sm rounded-xl border border-white/10"
                    whileHover={{ 
                      backgroundColor: "rgba(168, 85, 247, 0.1)",
                      borderColor: "rgba(168, 85, 247, 0.3)",
                      x: 10
                    }}
                    transition={{ duration: 0.3 }}
                    initial={{ opacity: 0, x: 30 }}
                    animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                    transition={{ duration: 0.5, delay: 0.9 + (index * 0.1) }}
                  >
                    <motion.div 
                      className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"
                      animate={isActive ? { 
                        scale: [1, 1.5, 1],
                        boxShadow: ["0 0 0 0 rgba(168, 85, 247, 0.4)", "0 0 0 10px rgba(168, 85, 247, 0)", "0 0 0 0 rgba(168, 85, 247, 0)"]
                      } : { scale: 1 }}
                      transition={{ duration: 1.5, delay: 0.9 + (index * 0.1), repeat: Infinity, repeatDelay: 3 }}
                    />
                    <span className="text-gray-300 font-elegant text-lg">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              {/* Enrollment Form */}
              <motion.div 
                className="p-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl border border-white/20"
                initial={{ opacity: 0, y: 30 }}
                animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <h4 className="text-2xl font-luxury text-white mb-6">Reserve Your Spot</h4>
                
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
                    />
                  </div>
                  
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
                  />
                  
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
                  />
                  
                  <textarea
                    placeholder="Tell us about your hair styling experience (optional)"
                    rows="3"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors resize-none"
                  ></textarea>

                  <motion.button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 hover:from-purple-400 hover:via-pink-400 hover:to-rose-400 text-white font-elegant font-bold text-lg transition-all duration-300"
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 25px 50px -12px rgba(168, 85, 247, 0.4)"
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Submit Enrollment Application
                  </motion.button>
                </form>

                <p className="text-gray-400 text-sm mt-4 text-center">
                  * Applications are reviewed within 24-48 hours
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* Urgency Banner */}
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <motion.div 
              className="inline-block p-6 bg-gradient-to-r from-red-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl border border-red-400/30"
              animate={{ 
                scale: [1, 1.02, 1],
                boxShadow: ["0 0 0 0 rgba(239, 68, 68, 0.4)", "0 0 0 20px rgba(239, 68, 68, 0)", "0 0 0 0 rgba(239, 68, 68, 0)"]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <p className="text-red-300 font-bold text-lg">⚡ Only 8 spots remaining for March 2025 cohort!</p>
              <p className="text-gray-300 text-sm mt-2">Early bird pricing ends in 7 days</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default CourseEnrollSection;