# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm start` - Run development server at http://localhost:3000
- `npm test` - Run tests in interactive watch mode
- `npm run build` - Build for production

## Architecture Overview

This is a React-based hair salon website for "25th Fairy Hair" built with Create React App and styled with Tailwind CSS. The application uses Framer Motion for animations throughout.

### Key Technical Stack
- React 19.1.0 with functional components and hooks
- Tailwind CSS for styling with custom color schemes (gold, rose palettes)
- Framer Motion for complex animations and transitions
- Custom font families: 'Playfair Display' (luxury) and 'Montserrat' (elegant)

### Component Architecture
The app follows a page-component structure:
- `src/App.js` - Simple root component that renders Homepage
- `src/pages/homepage/Homepage.jsx` - Main page component with hero configuration and content sections
- `src/components/homepage/Hero.jsx` - Complex carousel component supporting multiple slide types (text, image, gallery)
- `src/components/homepage/DynamicPortfolio.jsx` - Portfolio display component
- `src/components/common/SEO.jsx` - SEO management component

### Hero Component Details
The Hero component is the centerpiece, supporting three slide types:
- `'text'` - Text content with animated background
- `'image'` - Single background image with overlay
- `'gallery'` - Grid of images from `src/assets/images/heroImages/` with automatic fallback to placeholder URLs

The hero automatically cycles through slides and includes:
- Image preloading system for performance
- Responsive grid layout (4 cols mobile, 8 cols desktop)
- Progress bar, navigation arrows, and slide indicators
- Configurable via props in Homepage component

### Asset Management
Images are organized in `src/assets/images/`:
- `heroImages/` - Used by gallery slide type in Hero component
- `portfolio/` - Organized by artist (arya_starr, tems) for portfolio sections

### Styling Approach
- Tailwind CSS with custom color extensions and animations
- Responsive design patterns (md: breakpoints)
- Custom keyframes for fade-in, slide-up, float, and shimmer effects
- Consistent use of gradients and backdrop-blur effects