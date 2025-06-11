import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: "Music Video Styling", href: "#music-video" },
      { name: "Movie Production", href: "#movies" },
      { name: "Bridal Services", href: "#bridal" },
      { name: "Photoshoot Styling", href: "#photoshoot" },
      { name: "Hair Design Course", href: "#course" }
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Portfolio", href: "#portfolio" },
      { name: "Reviews", href: "#reviews" },
      { name: "Contact", href: "#contact" },
      { name: "Book Consultation", href: "#contact" }
    ],
    legal: [
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Terms of Service", href: "#terms" },
      { name: "Cookie Policy", href: "#cookies" },
      { name: "Refund Policy", href: "#refunds" }
    ]
  };

  const socialLinks = [
    { 
      name: "Instagram", 
      href: "https://instagram.com/25thfairyhair", 
      icon: "📷",
      handle: "@25thfairyhair"
    },
    { 
      name: "TikTok", 
      href: "https://tiktok.com/@25thfairyhair", 
      icon: "🎵",
      handle: "@25thfairyhair"
    },
    { 
      name: "Twitter", 
      href: "https://twitter.com/25thfairyhair", 
      icon: "🐦",
      handle: "@25thfairyhair"
    },
    { 
      name: "YouTube", 
      href: "https://youtube.com/25thfairyhair", 
      icon: "📺",
      handle: "25th Fairy Hair"
    }
  ];

  const contactInfo = {
    address: "Lekki Phase 1, Lagos, Nigeria",
    phone: "+234 801 234 5678",
    email: "hello@25thfairyhair.com",
    hours: "Mon - Sat: 9AM - 8PM"
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-rose-500/10 to-pink-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            
            {/* Brand Section */}
            <motion.div 
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6">
                <h2 className="text-3xl font-luxury text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-500 to-purple-500 mb-2">
                  25th Fairy Hair
                </h2>
                <p className="text-gray-400 leading-relaxed">
                  Nigeria's premier hair design studio, creating extraordinary styles for extraordinary people.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <span>📍</span>
                  <span>{contactInfo.address}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>📱</span>
                  <span>{contactInfo.phone}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>📧</span>
                  <span>{contactInfo.email}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>⏰</span>
                  <span>{contactInfo.hours}</span>
                </div>
              </div>
            </motion.div>

            {/* Services Links */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-lg font-elegant font-semibold text-white mb-6">Our Services</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-gray-400 hover:text-pink-400 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company Links */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-lg font-elegant font-semibold text-white mb-6">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-gray-400 hover:text-pink-400 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Social & Legal */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-lg font-elegant font-semibold text-white mb-6">Connect With Us</h3>
              
              {/* Social Links */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 p-3 bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm rounded-lg border border-white/10 hover:border-pink-400/30 transition-all duration-300 group"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-lg">{social.icon}</span>
                    <div>
                      <div className="text-white text-xs font-medium group-hover:text-pink-400 transition-colors">
                        {social.name}
                      </div>
                      <div className="text-gray-400 text-xs">{social.handle}</div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Legal Links */}
              <div>
                <h4 className="text-sm font-medium text-white mb-3">Legal</h4>
                <ul className="space-y-2">
                  {footerLinks.legal.map((link, index) => (
                    <li key={index}>
                      <a 
                        href={link.href}
                        className="text-gray-400 hover:text-pink-400 transition-colors duration-200 text-xs"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Newsletter Section */}
        <motion.div 
          className="border-t border-gray-800"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="text-center">
              <h3 className="text-xl font-luxury text-white mb-2">Stay Updated</h3>
              <p className="text-gray-400 mb-6">Subscribe to our newsletter for styling tips and exclusive offers</p>
              
              <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-pink-400 transition-colors"
                />
                <motion.button
                  className="px-6 py-3 bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-400 hover:to-pink-500 text-white font-medium transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          className="border-t border-gray-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                © {currentYear} 25th Fairy Hair. All rights reserved.
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <span>Made with ❤️ in Lagos, Nigeria</span>
                <div className="flex items-center space-x-2">
                  <span>🌟</span>
                  <span>Celebrity Hair Design Studio</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;