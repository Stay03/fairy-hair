# Codebase Documentation

{
  "Extraction Date": "2025-06-04 03:52:39",
  "Include Paths": [
    "src"
  ]
}

### src\App.css
```
.App {
  text-align: center;
}

.App-logo {
  height: 40vmin;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

```

### src\App.js
```
import React from 'react';
import Homepage from './pages/homepage/Homepage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Homepage />
    </div>
  );
}

export default App;
```

### src\App.test.js
```
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

```

### src\index.css
```
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Montserrat:wght@300;400;500;600;700&display=swap');
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
  }
  
  body {
    font-family: 'Montserrat', sans-serif;
  }
}

@layer components {
  .luxury-gradient {
    background: linear-gradient(135deg, #444342 0%, #d8d8d8 100%);
  }
  
  .glass-effect {
    backdrop-filter: blur(10px);
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }
}
```

### src\index.js
```
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

```

### src\logo.svg
```
```
[Binary file - content not extracted]
```

### src\reportWebVitals.js
```
const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;

```

### src\setupTests.js
```
// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

```

### src\assets\images\heroImages\259448245_971633653728121_2162754577698640538_n.jpg
```
```
[Binary file - content not extracted]
```

### src\assets\images\heroImages\266916803_887030831992440_2746374163781547718_n.jpg
```
```
[Binary file - content not extracted]
```

### src\assets\images\heroImages\272722367_1091902101598026_943207235246145758_n.jpg
```
```
[Binary file - content not extracted]
```

### src\assets\images\heroImages\273354945_3211811649142100_713598190385217202_n.jpg
```
```
[Binary file - content not extracted]
```

### src\assets\images\heroImages\273611386_624416435454509_798376927592926579_n.jpg
```
```
[Binary file - content not extracted]
```

### src\assets\images\heroImages\275151458_502012228035672_5328969448954632173_n.jpg
```
```
[Binary file - content not extracted]
```

### src\assets\images\heroImages\275660425_1189316365207471_4198991744735807839_n.jpg
```
```
[Binary file - content not extracted]
```

### src\assets\images\heroImages\277455941_999110214025566_1634516955120572954_n.jpg
```
```
[Binary file - content not extracted]
```

### src\assets\images\heroImages\277598019_155552263580823_2195399875616741354_n.jpg
```
```
[Binary file - content not extracted]
```

### src\assets\images\heroImages\284924963_686438632426003_4979052037864917407_n.jpg
```
```
[Binary file - content not extracted]
```

### src\assets\images\heroImages\289026861_1934577830074559_8790452428059456457_n.jpg
```
```
[Binary file - content not extracted]
```

### src\assets\images\heroImages\299769896_168313335771884_3134306897186286505_n.jpg
```
```
[Binary file - content not extracted]
```

### src\assets\images\heroImages\311220384_480606017453865_736414709784019479_n.jpg
```
```
[Binary file - content not extracted]
```

### src\assets\images\heroImages\315293622_526322279044133_8863437678532434880_n.jpg
```
```
[Binary file - content not extracted]
```

### src\assets\images\heroImages\315558847_1278853376237724_6707503463781724145_n.jpg
```
```
[Binary file - content not extracted]
```

### src\assets\images\heroImages\362779994_938646707238844_1858866838501152807_n.jpg
```
```
[Binary file - content not extracted]
```

### src\assets\images\heroImages\362920610_820463722997010_7523222800744407481_n.jpg
```
```
[Binary file - content not extracted]
```

### src\assets\images\heroImages\416017551_1057504918915324_4612698616950746935_n.jpg
```
```
[Binary file - content not extracted]
```

### src\assets\images\heroImages\419019531_1471272913452443_7915887358529503074_n.jpg
```
```
[Binary file - content not extracted]
```

### src\assets\images\heroImages\432170273_950131763157436_8259647751554337692_n.jpg
```
```
[Binary file - content not extracted]
```

### src\assets\images\heroImages\467330081_18168144856315140_6378453069855738389_n.jpg
```
```
[Binary file - content not extracted]
```

### src\assets\images\heroImages\468672763_18169554688315140_1492219230219169279_n.jpg
```
```
[Binary file - content not extracted]
```

### src\assets\images\heroImages\472199319_18173048107315140_6817221212109089466_n.jpg
```
```
[Binary file - content not extracted]
```

### src\assets\images\heroImages\481967123_18178887103315140_8681781894737574541_n.jpg
```
```
[Binary file - content not extracted]
```

### src\assets\images\heroImages\484583834_18180388585315140_2285429698237975164_n.jpg
```
```
[Binary file - content not extracted]
```

### src\assets\images\heroImages\485238429_18181057534315140_7542212435613119853_n.jpg
```
```
[Binary file - content not extracted]
```

### src\assets\images\heroImages\491417825_18184473886315140_2220522917072199648_n.jpg
```
```
[Binary file - content not extracted]
```

### src\assets\images\heroImages\495693451_18185312743315140_6240193831834444558_n.jpg
```
```
[Binary file - content not extracted]
```

### src\assets\images\heroImages\500026565_18186799300315140_2517945754813156972_n.jpg
```
```
[Binary file - content not extracted]
```

### src\assets\images\heroImages\download.jpg
```
```
[Binary file - content not extracted]
```

### src\assets\images\portfolio\arya_starr\362871592_308945678190825_5889129610806722332_n.jpg
```
```
[Binary file - content not extracted]
```

### src\assets\images\portfolio\arya_starr\362964593_3626605127572203_7403771175065506755_n.jpg
```
```
[Binary file - content not extracted]
```

### src\assets\images\portfolio\arya_starr\467326861_18168234334315140_6233077980067221503_n.jpg
```
```
[Binary file - content not extracted]
```

### src\assets\images\portfolio\arya_starr\467436540_18168234220315140_9143921385163373933_n.jpg
```
```
[Binary file - content not extracted]
```

### src\components\common\SEO.jsx
```
import { useEffect } from 'react';

const SEO = ({ 
  title = "25th Fairy Hair - Luxury Celebrity Hair Stylist in Lekki, Lagos",
  description = "Premier luxury hair designer in Lekki, Lagos. Styled celebrities like BNXN, Ayra Starr, Tems, Fireboy DML. Professional training academy available. Book your appointment today.",
  keywords = "celebrity hair stylist Lagos, luxury hair salon Lekki, hair designer Nigeria, celebrity hairstylist, music video hair styling, movie hair styling, hair training academy Lagos, Kehinde Are, 25th fairy hair",
  image = "/og-image.jpg",
  url = "https://25thfairyhair.com/",
  type = "website"
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update meta description
    updateMetaTag('name', 'description', description);
    updateMetaTag('name', 'keywords', keywords);
    
    // Update Open Graph tags
    updateMetaTag('property', 'og:title', title);
    updateMetaTag('property', 'og:description', description);
    updateMetaTag('property', 'og:image', image);
    updateMetaTag('property', 'og:url', url);
    updateMetaTag('property', 'og:type', type);
    
    // Update Twitter tags
    updateMetaTag('name', 'twitter:title', title);
    updateMetaTag('name', 'twitter:description', description);
    updateMetaTag('name', 'twitter:image', image);
    updateMetaTag('name', 'twitter:url', url);
    
    // Update canonical URL
    updateCanonicalUrl(url);
    
  }, [title, description, keywords, image, url, type]);

  return null;
};

// Helper function to update meta tags
const updateMetaTag = (attribute, attributeValue, content) => {
  let element = document.querySelector(`meta[${attribute}="${attributeValue}"]`);
  
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, attributeValue);
    document.head.appendChild(element);
  }
  
  element.setAttribute('content', content);
};

// Helper function to update canonical URL
const updateCanonicalUrl = (url) => {
  let canonical = document.querySelector('link[rel="canonical"]');
  
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }
  
  canonical.setAttribute('href', url);
};

// SEO configurations for different pages
export const seoConfigs = {
  home: {
    title: "25th Fairy Hair - Luxury Celebrity Hair Stylist in Lekki, Lagos",
    description: "Premier luxury hair designer in Lekki, Lagos. Styled celebrities like BNXN, Ayra Starr, Tems, Fireboy DML. Professional training academy available.",
    keywords: "celebrity hair stylist Lagos, luxury hair salon Lekki, hair designer Nigeria, 25th fairy hair, Kehinde Are",
    url: "https://25thfairyhair.com/"
  },
  
  about: {
    title: "About Kehinde Are - 25th Fairy Hair | Celebrity Hair Stylist",
    description: "Meet Kehinde Are, founder of 25th Fairy Hair. Renowned celebrity hair stylist who has worked with top Nigerian artists and international productions.",
    keywords: "Kehinde Are, celebrity hair stylist biography, 25th fairy hair founder, Lagos hair designer",
    url: "https://25thfairyhair.com/about"
  },
  
  services: {
    title: "Hair Styling Services - 25th Fairy Hair | Celebrity & Luxury Hair",
    description: "Professional hair styling services including celebrity styling, music video production, movie styling, and luxury hair treatments in Lekki, Lagos.",
    keywords: "hair styling services Lagos, celebrity hair styling, music video hair, movie hair styling, luxury hair treatments",
    url: "https://25thfairyhair.com/services"
  },
  
  portfolio: {
    title: "Celebrity Portfolio - 25th Fairy Hair | BNXN, Ayra Starr, Tems",
    description: "View our celebrity portfolio featuring hair styling work for BNXN, Ayra Starr, Tems, Fireboy DML and other top Nigerian artists.",
    keywords: "celebrity hair portfolio, BNXN hairstylist, Ayra Starr hair, Tems hairstylist, Fireboy DML hair, Nigerian celebrity stylist",
    url: "https://25thfairyhair.com/portfolio"
  },
  
  academy: {
    title: "Hair Styling Training Academy - 25th Fairy Hair | Professional Courses",
    description: "Join our professional hair styling training academy. Learn from celebrity hair stylist Kehinde Are. Online registration available for courses in Lagos.",
    keywords: "hair styling training Lagos, hair academy Nigeria, professional hair courses, celebrity hair training, hair styling certification",
    url: "https://25thfairyhair.com/academy"
  },
  
  gallery: {
    title: "Hair Gallery - 25th Fairy Hair | Celebrity & Luxury Hair Styles",
    description: "Browse our stunning gallery of celebrity hair styling work, luxury hair transformations, and creative hair designs by 25th Fairy Hair.",
    keywords: "hair gallery Lagos, celebrity hair styles, luxury hair designs, hair transformation gallery, Nigerian hair stylist work",
    url: "https://25thfairyhair.com/gallery"
  },
  
  contact: {
    title: "Contact & Booking - 25th Fairy Hair | Book Celebrity Hair Stylist",
    description: "Contact 25th Fairy Hair to book your appointment with celebrity hair stylist Kehinde Are. Located in Lekki, Lagos. Online booking available.",
    keywords: "book hair appointment Lagos, contact celebrity hair stylist, 25th fairy hair booking, Lekki hair salon contact",
    url: "https://25thfairyhair.com/contact"
  }
};

export default SEO;
```

### src\components\homepage\Hero.jsx
```
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = ({ 
  slides = [
    {
      type: 'text',
      headerText: "25th Fairy Hair",
      primaryText: "25th Fairy Hair",
      subtext: "Extraordinary styles for extraordinary people",
      link: {
        text: "Book Consultation",
        url: "#contact",
        onClick: () => console.log('CTA clicked')
      }
    },
    {
      type: 'gallery',
      backgroundImage: null
    },
    {
      type: 'image',
      backgroundImage: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200'
    }
  ],
  autoPlayInterval = 15000 // 5 seconds
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [galleryImages, setGalleryImages] = useState([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadedImageUrls, setLoadedImageUrls] = useState(new Set());

  // Auto-play slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [slides.length, autoPlayInterval]);

  // Preload images function
  const preloadImage = useCallback((src) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(src);
      img.onerror = reject;
      img.src = src;
    });
  }, []);

  // Load and preload images from heroImages folder for gallery slides
  useEffect(() => {
    const loadGalleryImages = async () => {
      try {
        let images;
        try {
          // Use require.context to load all images from heroImages folder
          const context = require.context('../../assets/images/heroImages', false, /\.(png|jpe?g|svg)$/);
          images = context.keys().map(context);
        } catch (error) {
          console.warn('Could not load gallery images from folder, using fallback:', error);
          // Fallback to placeholder images if folder doesn't exist
          images = [
            'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1595475207225-428b62bda831?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=400&h=400&fit=crop'
          ];
        }

        setGalleryImages(images);

        // Preload all images
        const preloadPromises = images.map(async (src) => {
          try {
            await preloadImage(src);
            setLoadedImageUrls(prev => new Set([...prev, src]));
            return src;
          } catch (error) {
            console.warn('Failed to preload image:', src);
            return null;
          }
        });

        // Wait for at least 50% of images to load before showing
        const results = await Promise.allSettled(preloadPromises);
        const successfulLoads = results.filter(result => result.status === 'fulfilled' && result.value).length;
        
        if (successfulLoads >= Math.ceil(images.length * 0.5)) {
          setImagesLoaded(true);
        }

        // Continue loading remaining images in background
        Promise.allSettled(preloadPromises).then(() => {
          setImagesLoaded(true);
        });

      } catch (error) {
        console.error('Error setting up gallery images:', error);
        setImagesLoaded(true); // Show anyway to prevent infinite loading
      }
    };

    loadGalleryImages();
  }, [preloadImage]);

  // Animation variants for slide transitions
  const slideVariants = {
    enter: {
      opacity: 0,
      scale: 1.05
    },
    center: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.8,
        ease: "easeIn"
      }
    }
  };

  // Updated text animation variants with different directions
  const primaryTextVariants = {
    hidden: { opacity: 0, x: -100 }, // Slide in from left
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.2,
        duration: 0.8,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      x: -100, // Slide out to the left
      transition: {
        delay: 0, // Exit immediately
        duration: 0.6,
        ease: "easeIn"
      }
    }
  };

  const subtextVariants = {
    hidden: { opacity: 0, y: 50 }, // Slide in from bottom
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.6, // Delay after primary text
        duration: 0.8,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: 50, // Slide out downward
      transition: {
        delay: 0.2, // Subtext exits after primary text starts exiting
        duration: 0.6,
        ease: "easeIn"
      }
    }
  };

  // Optimized image animation - reduced complexity and better performance
  const imageAnimation = {
    hidden: { 
      opacity: 0, 
      scale: 0.95,
      // Use transform3d for better GPU acceleration
      transform: 'translate3d(0, 0, 0) scale(0.95)'
    },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transform: 'translate3d(0, 0, 0) scale(1)',
      transition: {
        delay: Math.min(i * 0.05, 0.4), // Cap maximum delay to prevent long waits
        duration: 0.4, // Reduced duration for snappier feel
        ease: [0.25, 0.46, 0.45, 0.94] // Custom easing for smoother animation
      }
    })
  };

  // Container animation for the entire gallery
  const galleryContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.03 // Reduced stagger for smoother effect
      }
    }
  };

  // Render different slide types
  const renderSlideContent = (slide) => {
    switch (slide.type) {
      case 'image':
        return (
          <motion.div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ 
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${slide.backgroundImage})` 
            }}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
          />
        );
      
      case 'gallery':
        return (
          <motion.div 
            className="absolute inset-0 overflow-hidden"
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
          >
            {/* Loading state */}
            {!imagesLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
                <div className="text-center">
                  <motion.div
                    className="w-12 h-12 border-4 border-amber-400/30 border-t-amber-400 rounded-full mx-auto mb-4"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                  <p className="text-amber-400/80 text-sm">Loading gallery...</p>
                </div>
              </div>
            )}

            {/* Gallery Grid */}
            {imagesLoaded && (
              <motion.div 
                className="grid grid-cols-4 md:grid-cols-8 "
                variants={galleryContainerVariants}
                initial="hidden"
                animate="visible"
              >
                {galleryImages.map((image, index) => (
                  <motion.div
                    key={`gallery-image-${index}`}
                    custom={index}
                    variants={imageAnimation}
                    className="relative overflow-hidden  group aspect-square" // Added aspect-square for consistent sizing
                    style={{
                      // Ensure consistent container size to prevent layout shifts
                      minHeight: '80px',
                      backgroundColor: '#1f2937' // Fallback background
                    }}
                  >
                    {/* Image with optimized loading */}
                    <img
                      src={image}
                      alt={`Gallery ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-300 will-change-transform group-hover:scale-105"
                      loading="eager" // Since we're preloading, load immediately when visible
                      decoding="async"
                      style={{
                        // Prevent layout shifts during loading
                        display: loadedImageUrls.has(image) ? 'block' : 'none'
                      }}
                      onLoad={() => {
                        // Ensure image is marked as loaded
                        setLoadedImageUrls(prev => new Set([...prev, image]));
                      }}
                    />
                    
                    {/* Placeholder while loading */}
                    {!loadedImageUrls.has(image) && (
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 animate-pulse" />
                    )}
                    
                    {/* Overlay - simplified for better performance */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200" />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </motion.div>
        );
      
      default: // text
        return (
          <motion.div 
            className="absolute inset-0 bg-black" // Changed to solid black background
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
          >
            {/* Removed animated background elements for cleaner black background */}
            
            {/* Text Content Overlay */}
            <div className="absolute inset-0 flex items-center justify-center z-10 px-6">
              <div className="text-center max-w-4xl mx-auto">
                {/* Primary Text - slides in from left */}
                {slide.primaryText && (
                  <motion.p
                    variants={primaryTextVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="text-xl md:text-5xl text-blue-600 font-light mb-2 tracking-wide leading-relaxed"
                  >
                    {slide.primaryText}
                  </motion.p>
                )}

                {/* Subtext - slides in from bottom */}
                {slide.subtext && (
                  <motion.div
                    variants={subtextVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="mb-10"
                  >
                    <div className="">
                      <p className="text-lg md:text-3xl text-blue-300 leading-relaxed max-w-2xl mx-auto">
                        {slide.subtext}
                      </p>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        );
    }
  };

  return (
    <div className="relative h-[70vh] overflow-hidden">
      {/* Slide container */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className="absolute inset-0"
        >
          {renderSlideContent(slides[currentSlide])}
        </motion.div>
      </AnimatePresence>

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-amber-400 scale-110' 
                  : 'bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-black/20 z-20">
        <motion.div
          className="h-full bg-gradient-to-r from-amber-400 to-orange-500"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ 
            duration: autoPlayInterval / 1000,
            ease: "linear",
            repeat: Infinity
          }}
          key={currentSlide}
        />
      </div>

      {/* Navigation arrows */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default Hero;
```

### src\pages\homepage\Homepage.jsx
```
import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Hero from '../../components/homepage/Hero';
import SEO, { seoConfigs } from '../../components/common/SEO';

const Homepage = () => {
  const [scrollY, setScrollY] = useState(0);
  
  // Track scroll position
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  // Calculate transform values for parallax effect
  const aboutTransform = Math.max(0, Math.min(100, (scrollY / window.innerHeight) * 100));

  return (
    <>
      <SEO {...seoConfigs.home} />
      
      <div className="relative">
        {/* Fixed Hero Section - 70% of viewport */}
        <div className="fixed top-0 left-0 w-full h-[70vh] z-10">
          <Hero {...heroConfig} />
        </div>

        {/* Spacer to account for hero height */}
        <div className="h-[70vh]"></div>

        {/* About Section with Parallax Effect - starts at 70% */}
        <motion.div 
          className="relative z-20 bg-gray-200 text-black"
          style={{
            transform: `translateY(-${Math.min(scrollY * 0.5, window.innerHeight * 0.7)}px)`
          }}
        >
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

          {/* Portfolio Section */}
          <div className="min-h-screen bg-gray-700 py-16 px-6">
            <motion.div 
              className="max-w-6xl mx-auto"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              
              <motion.div variants={fadeInUp} className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl  text-white  mb-6">
                  Our Signature Services
                </h2>
                <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
                  From celebrity styling to luxury transformations, we offer premium hair services 
                  that define elegance and sophistication.
                </p>
              </motion.div>

            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Homepage;
```

