import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      id: 1,
      title: "Music Video",
      description: "Cutting-edge styles that capture attention and enhance your artistic vision on screen",
      icon: "🎵",
      features: ["Creative Styling", "On-Set Support", "Camera-Ready Looks"],
      gradient: "from-purple-600 via-purple-700 to-indigo-800"
    },
    {
      id: 2,
      title: "Movies",
      description: "Professional character-driven hair design for film and television productions",
      icon: "🎬",
      features: ["Character Development", "Period Styling", "Continuity Care"],
      gradient: "from-amber-500 via-orange-600 to-red-700"
    },
    {
      id: 3,
      title: "Bridal",
      description: "Exquisite bridal styling that makes your special day unforgettable and timeless",
      icon: "💍",
      features: ["Custom Styling", "Trial Sessions", "Wedding Day Service"],
      gradient: "from-rose-400 via-pink-500 to-purple-600"
    },
    {
      id: 4,
      title: "Photoshoot",
      description: "Editorial and commercial hair styling that brings creative concepts to life",
      icon: "📸",
      features: ["Editorial Looks", "Commercial Styling", "Concept Creation"],
      gradient: "from-emerald-500 via-teal-600 to-cyan-700"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const hoverVariants = {
    hover: {
      scale: 1.05,
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative py-20 px-6 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-pink-400/20 to-rose-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-rose-400/20 to-purple-600/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="inline-block"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-5xl md:text-6xl font-luxury text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-500 to-purple-500 mb-4">
              Our Services
            </h2>
          </motion.div>
          
          <motion.div 
            className="w-32 h-1 bg-gradient-to-r from-pink-400 to-rose-600 mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          ></motion.div>
          
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto font-elegant leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            From the silver screen to your special day, we bring artistry and excellence to every service
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover="hover"
              onHoverStart={() => setHoveredService(service.id)}
              onHoverEnd={() => setHoveredService(null)}
              className="group relative"
            >
              <motion.div 
                variants={hoverVariants}
                className="relative h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden"
              >
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                
                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

                <div className="relative p-8 h-full flex flex-col">
                  {/* Icon */}
                  <motion.div 
                    className="text-6xl mb-6 filter drop-shadow-lg"
                    animate={hoveredService === service.id ? { 
                      scale: [1, 1.2, 1],
                      rotate: [0, 5, -5, 0]
                    } : { scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    {service.icon}
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl font-luxury font-bold text-white mb-4 group-hover:text-pink-300 transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 font-elegant leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <motion.div 
                        key={idx}
                        className="flex items-center text-sm text-gray-400"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.8 + (idx * 0.1) }}
                      >
                        <motion.div 
                          className="w-2 h-2 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full mr-3"
                          animate={hoveredService === service.id ? { scale: [1, 1.5, 1] } : { scale: 1 }}
                          transition={{ duration: 0.3, delay: idx * 0.1 }}
                        ></motion.div>
                        {feature}
                      </motion.div>
                    ))}
                  </div>

                  {/* Call to Action */}
                  <motion.button 
                    className="mt-6 w-full py-3 bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-400 hover:to-rose-500 text-white font-elegant font-semibold transition-all duration-300 transform hover:shadow-lg hover:shadow-pink-500/25"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Learn More
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.button 
            className="px-12 py-4 bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 hover:from-pink-400 hover:via-rose-400 hover:to-purple-400 text-white font-elegant font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/30"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 25px 50px -12px rgba(236, 72, 153, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Book Your Session Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;