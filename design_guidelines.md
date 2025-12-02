# Design Guidelines: Agency Website Rebuild

## Design Approach
**Reference-Based**: Drawing inspiration from modern agency leaders like Webflow, Active Theory, and Fantasy while preserving the original Elementor design language. This is an experience-focused, visually-rich site where design differentiation is critical.

## Core Design Elements

### Typography
- **Headings**: Bold, modern sans-serif (font-weight: 700-800)
  - H1: 48-72px desktop, 36-48px mobile
  - H2: 36-48px desktop, 28-36px mobile
  - H3: 24-32px desktop, 20-24px mobile
- **Body**: Clean sans-serif, 16-18px, line-height 1.6-1.8
- **Accents**: Use medium weight (500-600) for CTAs and labels

### Layout System
**Tailwind Spacing Units**: Consistent use of 4, 8, 12, 16, 20, 24, 32 for padding/margins
- Section padding: py-20 desktop, py-12 mobile
- Component spacing: gap-8 for grids, gap-4 for tight groups
- Container: max-w-7xl with px-6 horizontal padding

### Color Palette (from original Elementor)
- Primary: #1D1D1D (deep charcoal)
- Secondary: #FFFFFF 
- Accent: #78C8BF (teal/mint)
- Text: #616161 (medium gray)
- Supporting: #FCDF65 (yellow), #F282B5 (pink), #4ADE80 (green)

## Page-Specific Guidelines

### Homepage
**Hero Section**:
- Full viewport height (90-100vh) with large background image showcasing agency work/team
- Centered headline with bold typography (72px)
- Subheadline (20-24px) with agency value proposition
- Primary CTA button with blurred background (backdrop-filter: blur(12px), semi-transparent white/dark background)
- Secondary "View Work" button below
- Subtle scroll indicator at bottom

**Services Overview**:
- Three-column grid (grid-cols-3, stack to 1 on mobile)
- Icon + title + description cards with hover lift effect
- Links to detailed service pages (franchise, franchise-marketing, general services)

**Featured Work/Portfolio Teaser**:
- Two-column asymmetric layout (60/40 split)
- Large featured project image left, two smaller projects stacked right
- Project titles overlay on images with category tags
- "View All Work" CTA

**Client Testimonials**:
- Single-column centered layout with client photo (200px circular)
- Large quote text (24-28px) with quotation marks
- Client name, title, company below
- Subtle background differentiation (light gray or accent tint)

**Call-to-Action Section**:
- Full-width section with subtle gradient background
- Centered messaging with large headline
- Contact form inline OR prominent "Get Started" button
- Trust indicators (client logos, project count, years in business)

### Service Pages (Franchise, Franchise-Marketing, General)
**Hero**: 
- 70vh height with service-specific image
- Service name as large heading
- Brief value statement
- CTA button with blurred background

**Content Layout**:
- Alternating two-column sections (image left/right pattern)
- Process timeline/steps visualization
- Benefits grid (3 columns)
- Case study callout boxes with project metrics
- Pricing or package comparison table

### Portfolio Page
**Gallery Grid**:
- Masonry-style layout (3 columns desktop, 2 tablet, 1 mobile)
- Hover reveals project name, category, and "View Details" link
- Filter tabs at top (All, Branding, Digital, Marketing, etc.)
- Each project card includes preview image + overlay

**Individual Project Pages**:
- Large hero image (full-width)
- Project details sidebar (client, year, services, deliverables)
- Multiple showcase images in varied layouts (full-width, two-column, carousel)
- Results/metrics section with large numbers
- "Next Project" navigation

### About/Author Page
**Team Section**:
- Four-column grid of team members
- Circular photos (200-250px)
- Name, role, brief bio
- Social links for each member

**Company Story**:
- Timeline layout with milestones
- Mission/vision/values cards
- Office photos or culture images

### Blog
**Blog Listing**:
- Two-column card grid
- Featured image, title, excerpt, read time, date
- Category tags
- Sidebar with categories and recent posts

**Individual Post**:
- Single column, max-w-prose for readability
- Large featured image at top
- Author bio box at bottom
- Related posts carousel

### Contact Page
**Two-Column Layout**:
- Left: Contact form (name, email, phone, service interest dropdown, message)
- Right: Contact information, office hours, location map placeholder, social links
- Form fields with clear labels and helper text
- Large submit button

### Navigation
**Header** (sticky):
- Logo left (120-150px width)
- Horizontal menu center/right (Home, Services dropdown, Portfolio, About, Blog, Contact)
- "Get Started" CTA button in accent color
- Mobile: hamburger menu with full-screen overlay

**Footer**:
- Three-column layout
  - Column 1: Logo, tagline, social icons
  - Column 2: Quick links (Services, Portfolio, About, Blog, Contact)
  - Column 3: Newsletter signup with inline form
- Bottom bar: Copyright, Privacy Policy, Terms links

## Component Library

### Cards
- Elevated shadow on hover (shadow-lg transition)
- Rounded corners (rounded-lg, 8-12px)
- Padding: p-6 to p-8

### Buttons
- Primary: Accent color background, white text, rounded-full, px-8 py-3
- Secondary: Transparent with border, accent color text
- On images: Semi-transparent background (bg-white/20 or bg-black/30) with backdrop-blur-md

### Forms
- Input fields: border-2, rounded-lg, py-3 px-4
- Focus state: accent color border
- Label above field (font-medium, mb-2)

### Images
**Hero Images**:
- Homepage: Dynamic agency workspace or team collaboration (full viewport)
- Services pages: Service-specific visuals (franchise locations, marketing materials)
- Portfolio: High-quality project screenshots

**Supporting Images**:
- Team headshots (professional, consistent lighting)
- Project showcase imagery throughout
- Client logos (grayscale, hover to color)
- Office/culture photos in About section

### Animations
**Minimal, Purposeful**:
- Scroll-triggered fade-ins for section reveals
- Hover lift effect on cards (translateY -4px)
- Smooth transitions (0.3s ease) for interactive elements
- No heavy animations—keep it professional and performant

## Critical Requirements
- Multi-page navigation must be seamless and intuitive
- All Elementor sections preserved in spirit (layout, hierarchy, content)
- Mobile-first responsive design mandatory
- Fast loading with optimized images
- Accessible form labels and focus states
- Professional, polished execution matching agency credibility