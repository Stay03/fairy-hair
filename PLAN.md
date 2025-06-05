# Navbar Implementation Plan

## Overview
Add a responsive navbar component to the 25th Fairy Hair website with logo, "Enroll Now" button, and hamburger menu for mobile sidebar.

## Component Structure

### 1. Navbar Component (`src/components/common/Navbar.jsx`)
- **Location**: Logo on far left
- **Right side**: "Enroll Now" button + hamburger icon
- **Responsive behavior**: Hide "Enroll Now" on mobile, show hamburger
- **Styling**: Match existing Tailwind + Framer Motion patterns
- **Logo**: Use `src/assets/images/logo/logo-dark.png`

### 2. Sidebar Component (`src/components/common/Sidebar.jsx`)
- **Purpose**: Mobile menu overlay
- **Animation**: Slide in from right using Framer Motion
- **Content**: Navigation links, "Enroll Now" button
- **Background**: Backdrop blur effect (consistent with Hero styling)

## Technical Implementation Steps

### Step 1: Create Navbar Component
- Import React, Framer Motion, and logo asset
- Create responsive layout using Tailwind CSS flexbox
- Implement logo with proper sizing and alt text
- Add "Enroll Now" button with consistent styling (gold/rose theme)
- Add hamburger icon (3 lines) with hover animations
- Add state management for sidebar toggle

### Step 2: Create Sidebar Component
- Implement overlay with backdrop blur
- Add slide-in animation from right side
- Include navigation menu items
- Add close button (X icon)
- Handle click outside to close functionality
- Include "Enroll Now" button for mobile users

### Step 3: Style Components
- Follow existing color scheme (gold/rose palettes)
- Use Playfair Display for logo text (if needed)
- Use Montserrat for navigation items
- Apply consistent hover/active states
- Ensure proper z-index layering

### Step 4: Integration
- Import Navbar in Homepage component
- Place Navbar above Hero section
- Ensure proper positioning (likely fixed/sticky)
- Test responsive behavior across breakpoints

### Step 5: State Management
- Add useState for sidebar open/close state
- Pass toggle function between Navbar and Sidebar
- Handle body scroll lock when sidebar is open

## File Changes Required

### New Files
1. `src/components/common/Navbar.jsx`
2. `src/components/common/Sidebar.jsx`

### Modified Files
1. `src/pages/homepage/Homepage.jsx` - Import and add Navbar component

## Design Considerations

### Responsive Breakpoints
- Mobile (< 768px): Show hamburger, hide "Enroll Now"
- Desktop (≥ 768px): Show "Enroll Now", hide hamburger

### Animation Details
- Hamburger icon: Rotate to X when active
- Sidebar: Slide from right with backdrop fade-in
- Logo: Subtle hover scale effect
- Buttons: Consistent with existing CTA styling

### Accessibility
- Proper ARIA labels for hamburger button
- Keyboard navigation support
- Focus management for sidebar
- Semantic HTML structure

## Testing Checklist
- [ ] Logo displays correctly and links work
- [ ] "Enroll Now" button styling matches design
- [ ] Hamburger menu toggles sidebar properly
- [ ] Sidebar animates smoothly
- [ ] Responsive behavior works across devices
- [ ] Accessibility features function correctly
- [ ] No layout shifts or z-index conflicts