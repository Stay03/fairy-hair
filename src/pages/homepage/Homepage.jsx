import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Hero from '../../components/homepage/Hero';
import SEO, { seoConfigs } from '../../components/common/SEO';
import DynamicPortfolio from '../../components/homepage/DynamicPortfolio';

const Homepage = () => {

  // Hero configuration - you can easily switch between types
  const heroConfig = {
    type: 'gallery', // Change to 'text', 'image', or 'gallery'
    title: "25th Fairy Hair",
    subtitle: "Luxury Celebrity Hair Designer",
    location: "Lekki, Lagos • Nigeria",
    description: "Welcome to the world of luxury hair artistry. We craft extraordinary styles for extraordinary people.",
    backgroundImage: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200", // Only used for 'image' type
    ctaText: "Book Consultation",
    onCtaClick: () => {
      // Handle CTA click - could scroll to contact section, open modal, etc.
      console.log('CTA clicked');
    },
    celebrities: ["BNXN", "Ayra Starr", "Tems", "Fireboy DML"]
  };

  // Animation variants for the content sections
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const stagger = {
    visible: {
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  return (
    <>
      <SEO {...seoConfigs.home} />
      
      <div className="relative">
        {/* Hero Section - normal flow */}
        <div className="w-full h-[70vh]">
          <Hero {...heroConfig} />
        </div>

        {/* About Section - normal flow */}
        <div className="relative bg-gray-200 text-black">
          {/* About Section */}
          <div className=" py-20 px-6">
            <motion.div 
              className="max-w-6xl mx-auto"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* About Header */}
              <motion.div variants={fadeInUp} className="text-center">
                
                <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mb-8"></div>
                <p className="text-xl max-w-4xl mx-auto leading-relaxed">
                  Founded by renowned hair stylist Kehinde Are, 25th Fairy Hair has become 
                  the premier destination for hair artistry in Nigeria. Specializing in 
                  music video styling, movie productions, and bridal elegance. We also empower the next 
                  generation through our comprehensive training academy where aspiring stylists learn 
                  professional techniques and industry secrets.
                </p>
              </motion.div>

              
            </motion.div>
          </div>

          <DynamicPortfolio />
        </div>
      </div>
    </>
  );
};

export default Homepage;