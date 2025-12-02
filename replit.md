# Lumin8 Digital Marketing Agency Website

## Overview

This is a faithful recreation of the Lumin8 digital marketing agency website, rebuilt from WordPress Elementor export files using React, TypeScript, and Express. The website preserves all original content, design, images, and branding from the original WordPress site.

**Brand Tagline:** "There's light at the end of the funnel"  
**Mission:** "Lumin8 is a people-first digital marketing agency that solves tough problems using the power of creativity"

## Brand Colors

- Primary Dark: #1D1D1D
- Teal Accent: #78C8BF
- Yellow: #FCDF65
- Pink: #F282B5
- Green: #4ADE80
- Purple: #8582D1

## Site Structure

### Pages
- **Home** (/) - Hero, Portfolio Collage, Services, Collective, Intuition, Portfolio Showcase, Testimonials, CTA sections
- **Services** (/services) - Detailed service offerings
- **Franchise** (/franchise) - Franchise development services
- **Franchise Marketing** (/franchise-marketing) - Franchise marketing expertise
- **Portfolio** (/portfolio) - Work showcase
- **Blog** (/blog) - Blog & Insights
- **About** (/about) - About Lumin8
- **Contact** (/contact) - Contact form with backend API
- **Privacy Policy** (/privacy-policy)
- **Terms & Conditions** (/terms-and-conditions)

### Services (6 Core Offerings)
1. Email Marketing
2. Search Engine Optimization (SEO)
3. Website Development
4. Branding & Design
5. Social Strategy
6. Digital Strategy

### Featured Testimonials
- Yazeed Yasin (Nanashake CEO)
- Alina Tacmelova (Designer)
- Vince Soda (Health Coach)

### Franchise Clients
- Aquatots
- Sportball
- Yogen Fruz

### Homepage Sections (Matches Original Elementor Design)
1. **Hero** - Dark background (#1D1D1D), curved teal arc, yellow circular "Book a Discovery Call" button
2. **Portfolio Collage** - Tilted creative layout with portfolio images
3. **Services** - 6 colorful cards: Digital Strategy (yellow), SEO (pink), Branding & Design (lime), Web Development (green), Email Marketing (purple), Social Strategy (teal)
4. **Collective** - "We are a collective" section with team photo grid
5. **Intuition** - "Intuition makes us shine" section with colorful shapes and photos
6. **Portfolio Showcase** - Creative layout with decorative shapes
7. **Testimonials** - Carousel with floating photos and navigation
8. **CTA** - Call-to-action section

## Assets

All original images are stored in `client/public/assets/images/`:
- Lumin8-Logo.png, Lumin8-Logo-Redesign-2024_White.png (logos)
- testimonials/ - Ellipse_75-1.jpeg, Ellipse_77-1.jpeg, Alina_047.jpg, 2021123_Vince_002.jpg (client photos)
- team/ - Rectangle_23-1.jpeg, Rectangle_24-1.jpeg, etc. (team member photos)
- portfolio/ - Work-002.jpeg, Spring-Academy-003.webp, Acronym-001.webp, Slider-002.jpeg, etc.
- shapes/ - Shapes-1-1.svg, Shapes-2-1.svg, Oval-background-003.svg (decorative shapes)
- icons/ - Icon-1.svg through Icon-6.svg (service icons)
- Aquatots-Logo.png, Sportball-Logo-1.png, Yogen-Fruz-Logo.png (franchise logos)
- Franchise-Landing-Page-Collages.png, etc. (content images)

## Technical Architecture

### Frontend
- **React 18** with TypeScript
- **Vite** for development and builds
- **Wouter** for client-side routing
- **React Query** for data fetching
- **shadcn/ui** component library
- **Tailwind CSS** for styling

### Backend
- **Express.js** server
- **Zod** for validation
- In-memory storage for contact submissions

### API Endpoints
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Retrieve submissions (admin)

## Development

The application runs on port 5000. Use `npm run dev` to start the development server.

### Key Files
- `client/src/components/` - Reusable UI components (Header, Footer, Hero, Services, etc.)
- `client/src/pages/` - Page components
- `server/routes.ts` - API route handlers
- `server/storage.ts` - Data storage interface

## User Preferences

Preferred communication style: Simple, everyday language.
