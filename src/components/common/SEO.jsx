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