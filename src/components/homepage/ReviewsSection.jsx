import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

const ReviewsSection = () => {
  const sectionRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [currentReview, setCurrentReview] = useState(0);
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

  const reviews = [
    {
      name: "Ayra Starr",
      role: "Recording Artist",
      image: "AS",
      rating: 5,
      review: "25th Fairy Hair transformed my look for my latest music video. Kehinde's creativity and attention to detail is unmatched. The styling was perfect and really brought my artistic vision to life!",
      project: "Rush Music Video"
    },
    {
      name: "Tems",
      role: "Grammy Winner",
      image: "T",
      rating: 5,
      review: "Working with Kehinde has been incredible. The level of professionalism and artistry is outstanding. My hair looked flawless throughout the entire shoot, and the styles perfectly captured the mood of each scene.",
      project: "International Campaign"
    },
    {
      name: "BNXN",
      role: "Afrobeats Artist",
      image: "B",
      rating: 5,
      review: "Kehinde is a true artist! The hair styling for my music video was beyond my expectations. Every detail was perfect and the team made sure everything looked amazing on camera. Highly recommend!",
      project: "Finesse Music Video"
    },
    {
      name: "Adunni Ade",
      role: "Nollywood Actress",
      image: "AA",
      rating: 5,
      review: "For my movie roles, 25th Fairy Hair always delivers. Kehinde understands character development through hair and creates looks that truly bring characters to life. Professional and talented!",
      project: "Nollywood Production"
    },
    {
      name: "Sarah Johnson",
      role: "Bride",
      image: "SJ",
      rating: 5,
      review: "My wedding day was perfect thanks to Kehinde! The trial session helped us create the exact look I wanted, and on the day, my hair stayed beautiful from ceremony to reception. Thank you for making my day special!",
      project: "Wedding Day"
    },
    {
      name: "Maria Santos",
      role: "Fashion Model",
      image: "MS",
      rating: 5,
      review: "Every photoshoot with 25th Fairy Hair results in stunning imagery. Kehinde's editorial styling is innovative and always perfectly executed. The team is professional and understands fashion photography.",
      project: "Editorial Photoshoot"
    }
  ];

  // Auto-rotate reviews
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [reviews.length]);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

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
              <span className="text-purple-400 font-medium text-lg">Client Testimonials</span>
            </motion.div>

            {/* Main Title */}
            <motion.h2 
              className="text-6xl md:text-8xl font-luxury text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-rose-500 mb-6"
              initial={{ scale: 0.8 }}
              animate={isActive ? { scale: 1 } : { scale: 0.8 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              What Our
              <span className="block text-white">Clients Say</span>
            </motion.h2>

            {/* Description */}
            <motion.p 
              className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Don't just take our word for it. Here's what celebrities, brides, and clients say about their experience with 25th Fairy Hair.
            </motion.p>
          </motion.div>

          {/* Reviews Carousel */}
          <motion.div 
            className="relative max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {/* Main Review Card */}
            <motion.div 
              className="relative p-8 md:p-12 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl border border-white/20"
              key={currentReview}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(reviews[currentReview].rating)].map((_, i) => (
                  <motion.span
                    key={i}
                    className="text-yellow-400 text-2xl"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                  >
                    ⭐
                  </motion.span>
                ))}
              </div>

              {/* Review Text */}
              <motion.blockquote 
                className="text-xl md:text-2xl text-white text-center leading-relaxed mb-8 font-elegant"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                "{reviews[currentReview].review}"
              </motion.blockquote>

              {/* Client Info */}
              <motion.div 
                className="flex items-center justify-center space-x-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {reviews[currentReview].image}
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-white">{reviews[currentReview].name}</div>
                  <div className="text-purple-300">{reviews[currentReview].role}</div>
                  <div className="text-gray-400 text-sm">{reviews[currentReview].project}</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Navigation Arrows */}
            <button
              onClick={prevReview}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white hover:scale-110 transition-transform"
            >
              ←
            </button>
            <button
              onClick={nextReview}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white hover:scale-110 transition-transform"
            >
              →
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReview(index)}
                  className={`w-3 h-3 transition-all duration-300 ${
                    index === currentReview 
                      ? 'bg-pink-500 scale-125' 
                      : 'bg-gray-600 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};

export default ReviewsSection;