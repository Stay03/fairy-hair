import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

const ContactSection = () => {
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

  const contactInfo = [
    {
      icon: "📱",
      title: "Phone",
      details: "+234 801 234 5678",
      subtitle: "Call us anytime"
    },
    {
      icon: "📧",
      title: "Email",
      details: "hello@25thfairyhair.com",
      subtitle: "We'll respond within 24hrs"
    },
    {
      icon: "📍",
      title: "Location",
      details: "Lekki Phase 1, Lagos",
      subtitle: "By appointment only"
    },
    {
      icon: "⏰",
      title: "Hours",
      details: "Mon - Sat: 9AM - 8PM",
      subtitle: "Sunday by appointment"
    }
  ];

  const socialLinks = [
    { platform: "Instagram", handle: "@25thfairyhair", icon: "📷" },
    { platform: "TikTok", handle: "@25thfairyhair", icon: "🎵" },
    { platform: "Twitter", handle: "@25thfairyhair", icon: "🐦" },
    { platform: "YouTube", handle: "25th Fairy Hair", icon: "📺" }
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
              <span className="text-rose-600 font-medium text-lg">Get In Touch</span>
            </motion.div>

            {/* Main Title */}
            <motion.h2 
              className="text-6xl md:text-8xl font-luxury text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-pink-600 to-purple-600 mb-6"
              initial={{ scale: 0.8 }}
              animate={isActive ? { scale: 1 } : { scale: 0.8 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Let's Create
              <span className="block text-gray-800">Something Beautiful</span>
            </motion.h2>

            {/* Description */}
            <motion.p 
              className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Ready to transform your vision into reality? Contact us today to discuss your project 
              and discover how we can bring your creative ideas to life.
            </motion.p>
          </motion.div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Left: Contact Form */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h3 className="text-3xl font-luxury text-rose-600 mb-8">Send Us a Message</h3>
              
              <motion.div 
                className="p-8 bg-white/80 backdrop-blur-sm rounded-2xl border border-rose-200/50 shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
                      placeholder="Enter your email address"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Service Needed</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all">
                      <option value="">Select a service</option>
                      <option value="music-video">Music Video Styling</option>
                      <option value="movie">Movie Production</option>
                      <option value="bridal">Bridal Services</option>
                      <option value="photoshoot">Photoshoot</option>
                      <option value="course">Hair Design Course</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea
                      rows="4"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all resize-none"
                      placeholder="Tell us about your project or inquiry..."
                    ></textarea>
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 hover:from-rose-400 hover:via-pink-400 hover:to-purple-400 text-white font-elegant font-bold text-lg rounded-lg transition-all duration-300"
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 25px 50px -12px rgba(244, 63, 94, 0.4)"
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message
                  </motion.button>
                </form>
              </motion.div>
            </motion.div>

            {/* Right: Contact Info & Social */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <h3 className="text-3xl font-luxury text-pink-600 mb-8">Contact Information</h3>
              
              {/* Contact Info Cards */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-pink-200/50 shadow-lg"
                    whileHover={{ 
                      scale: 1.02,
                      backgroundColor: "rgba(255, 255, 255, 0.9)",
                      borderColor: "rgba(236, 72, 153, 0.3)"
                    }}
                    transition={{ duration: 0.3 }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 0.9 + (index * 0.1) }}
                  >
                    <div className="flex items-start space-x-4">
                      <motion.div 
                        className="text-3xl"
                        animate={isActive ? { 
                          scale: [1, 1.1, 1],
                          rotate: [0, 5, 0]
                        } : { scale: 1, rotate: 0 }}
                        transition={{ duration: 0.6, delay: 0.9 + (index * 0.1) }}
                      >
                        {info.icon}
                      </motion.div>
                      <div>
                        <h4 className="text-lg font-elegant font-semibold text-gray-800 mb-1">{info.title}</h4>
                        <p className="text-gray-700 font-medium">{info.details}</p>
                        <p className="text-gray-500 text-sm">{info.subtitle}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Media */}
              <motion.div 
                className="mt-8"
                initial={{ opacity: 0, y: 30 }}
                animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 1.3 }}
              >
                <h4 className="text-xl font-luxury text-gray-800 mb-6">Follow Us</h4>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.div
                      key={index}
                      className="p-4 bg-gradient-to-r from-pink-100 to-rose-100 rounded-xl border border-pink-200 text-center cursor-pointer"
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: "rgba(244, 63, 94, 0.1)",
                        borderColor: "rgba(244, 63, 94, 0.3)"
                      }}
                      transition={{ duration: 0.3 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.6, delay: 1.5 + (index * 0.1) }}
                    >
                      <div className="text-2xl mb-2">{social.icon}</div>
                      <div className="text-sm font-medium text-gray-800">{social.platform}</div>
                      <div className="text-xs text-gray-600">{social.handle}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;