# FEFO 2025 Website

A dynamic, fully responsive website for FEFO 2025 that blends traditional Japanese aesthetics with modern interactivity.

## Overview

This website was created for the FEFO (Festival of Education and Future Opportunities) 2025 event. It features a Japanese-inspired design with modern interactive elements, fully responsive layout, and smooth animations.

## Features

- **Responsive Design**: Optimized for all screen sizes from mobile to desktop
- **Japanese Aesthetics**: Traditional elements like Mount Fuji, cherry blossoms, and brush strokes
- **Interactive Elements**: 
  - Animated countdown timer
  - Competition cards with hover effects
  - Gallery with lightbox functionality
  - Registration form with validation
  - Google Maps integration
- **Modern UI Components**:
  - Smooth scrolling navigation
  - Animated section transitions
  - Mobile-friendly navigation menu

## Pages

1. **Home Page (index.html)**
   - Hero section with countdown timer
   - About section
   - Competitions section
   - Gallery

2. **Event Information Page (info.html)**
   - Event details
   - Schedule
   - Location with Google Maps
   - Contact information

3. **Registration Page (registration.html)**
   - Registration form with validation
   - Success confirmation modal

## Customization

### Images

Replace the placeholder images in the `images` folder with your actual event images:

- `fefo-logo.png`: FEFO 9th logo
- `school-logo.png`: School logo
- `hero-bg.jpg`: Hero section background
- `about-image.jpg`: Image for the About section
- `gallery1.jpg` through `gallery8.jpg`: Gallery images
- `gallery1-thumb.jpg` through `gallery8-thumb.jpg`: Gallery thumbnails

### Google Maps

To enable the Google Maps functionality:
1. Get a Google Maps API key from the [Google Cloud Platform Console](https://console.cloud.google.com/)
2. Replace `YOUR_API_KEY` in the `info.html` file with your actual API key
3. Update the coordinates in the `initMap()` function to match your event location

### Colors and Styling

The color scheme and styling can be customized in the `css/styles.css` file:

- `--temple-red`: Main accent color
- `--wood-tone`: Secondary accent color
- `--gold`: Highlight color

## Browser Compatibility

This website is compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Getting Started

1. Clone or download this repository
2. Replace placeholder images with your actual event images
3. Update the content to match your event details
4. Update the Google Maps API key
5. Deploy to your web hosting service

## License

This project is available for use under the MIT License.
