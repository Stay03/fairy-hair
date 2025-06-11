import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

const CourseAboutSection = () => {
  const sectionRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const isInView = useInView(sectionRef, { threshold: 0.3 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const yContent = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  useEffect(() => {
    setIsActive(isInView);
  }, [isInView]);

  const courseHighlights = [
    {
      title: "Professional Techniques",
      description: "Master advanced styling methods used in the industry",
      icon: "✂️"
    },
    {
      title: "Hands-On Training",
      description: "Practice on real models with expert guidance",
      icon: "👥"
    },
    {
      title: "Industry Insights",
      description: "Learn business skills and client management",
      icon: "💼"
    },
    {
      title: "Certification",
      description: "Receive recognized credentials upon completion",
      icon: "🏆"
    }
  ];

  const courseModules = [
    "Hair Structure & Analysis",
    "Color Theory & Application", 
    "Cutting Techniques",
    "Styling & Finishing",
    "Client Consultation",
    "Business Fundamentals"
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-rose-50 via-white to-pink-50"
    >
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: yBackground }}
      >
        <div className="absolute top-1/4 right-1/3 w-80 h-80 bg-gradient-to-r from-rose-200/30 to-pink-300/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-gradient-to-r from-pink-200/30 to-purple-300/30 rounded-full blur-3xl"></div>
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
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-rose-500/20 to-pink-600/20 backdrop-blur-sm border border-rose-400/30 rounded-full mb-8"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-rose-600 font-medium text-lg">Education Excellence</span>
            </motion.div>

            {/* Main Title */}
            <motion.h2 
              className="text-6xl md:text-8xl font-luxury text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-pink-600 to-purple-600 mb-6"
              initial={{ scale: 0.8 }}
              animate={isActive ? { scale: 1 } : { scale: 0.8 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Hair Design
              <span className="block text-gray-800">Mastery Course</span>
            </motion.h2>

            {/* Description */}
            <motion.p 
              className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Transform your passion into profession with our comprehensive hair design course. 
              Learn from industry experts and master the skills that define exceptional hair artistry.
            </motion.p>
          </motion.div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
            
            {/* Left: Course Highlights */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h3 className="text-3xl font-luxury text-rose-600 mb-8">What You'll Gain</h3>
              
              <div className="grid grid-cols-1 gap-6">
                {courseHighlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    className="p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-rose-200/50 shadow-lg"
                    whileHover={{ 
                      scale: 1.02,
                      backgroundColor: "rgba(255, 255, 255, 0.9)",
                      borderColor: "rgba(244, 63, 94, 0.3)"
                    }}
                    transition={{ duration: 0.3 }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 0.8 + (index * 0.1) }}
                  >
                    <div className="flex items-start space-x-4">
                      <motion.div 
                        className="text-3xl"
                        animate={isActive ? { 
                          scale: [1, 1.2, 1],
                          rotate: [0, 5, 0]
                        } : { scale: 1, rotate: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 + (index * 0.1) }}
                      >
                        {highlight.icon}
                      </motion.div>
                      <div>
                        <h4 className="text-xl font-elegant font-semibold text-gray-800 mb-2">{highlight.title}</h4>
                        <p className="text-gray-600">{highlight.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right: Course Modules */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <h3 className="text-3xl font-luxury text-pink-600 mb-8">Course Curriculum</h3>
              
              <div className="space-y-4">
                {courseModules.map((module, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-4 p-4 bg-gradient-to-r from-white/60 to-pink-50/60 backdrop-blur-sm rounded-xl border border-pink-200/50"
                    whileHover={{ 
                      backgroundColor: "rgba(255, 255, 255, 0.8)",
                      borderColor: "rgba(236, 72, 153, 0.3)",
                      x: 10
                    }}
                    transition={{ duration: 0.3 }}
                    initial={{ opacity: 0, x: 30 }}
                    animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                    transition={{ duration: 0.5, delay: 0.9 + (index * 0.1) }}
                  >
                    <motion.div 
                      className="w-8 h-8 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full flex items-center justify-center text-white font-bold"
                      animate={isActive ? { 
                        scale: [1, 1.1, 1],
                        rotate: [0, 360]
                      } : { scale: 1, rotate: 0 }}
                      transition={{ duration: 0.8, delay: 0.9 + (index * 0.1) }}
                    >
                      {index + 1}
                    </motion.div>
                    <span className="text-gray-700 font-elegant text-lg">{module}</span>
                  </motion.div>
                ))}
              </div>

              {/* Course Duration & Format */}
              <motion.div 
                className="mt-8 p-6 bg-gradient-to-r from-rose-100 to-pink-100 rounded-2xl border border-rose-200"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <h4 className="text-xl font-luxury text-rose-700 mb-4">Course Details</h4>
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                  <div>
                    <span className="font-semibold">Duration:</span> 12 Weeks
                  </div>
                  <div>
                    <span className="font-semibold">Format:</span> Hands-on Training
                  </div>
                  <div>
                    <span className="font-semibold">Schedule:</span> Flexible
                  </div>
                  <div>
                    <span className="font-semibold">Group Size:</span> Max 8 Students
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </motion.div>
    </section>
  );
};

export default CourseAboutSection;