# Lumin8 Brand Design Sheet

**For External Designer Collaboration**

---

## Brand Overview

**Company:** Lumin8 Digital Marketing Agency  
**Tagline:** "There's light at the end of the funnel"  
**Mission:** "Lumin8 is a people-first digital marketing agency that solves tough problems using the power of creativity"

---

## Color Palette

### Primary Colors

| Color Name | Hex Code | RGB | Usage |
|------------|----------|-----|-------|
| **Charcoal Black** | `#1D1D1D` | rgb(29, 29, 29) | Primary backgrounds, text, dark sections |
| **Teal** | `#78C8BF` | rgb(120, 200, 191) | Primary accent, links, highlights, carousel indicators |
| **Sunshine Yellow** | `#FCDF65` | rgb(252, 223, 101) | CTAs, buttons, Digital Strategy cards |

### Secondary Colors

| Color Name | Hex Code | RGB | Usage |
|------------|----------|-----|-------|
| **Pink** | `#F282B5` | rgb(242, 130, 181) | SEO service card, decorative shapes |
| **Lime Green** | `#BEFF8C` | rgb(190, 255, 140) | Branding & Design card, decorative shapes |
| **Emerald Green** | `#4ADE80` | rgb(74, 222, 128) | Web Development card |
| **Purple** | `#8582D1` | rgb(133, 130, 209) | Email Marketing card |

### Neutral Colors

| Color Name | Hex Code | RGB | Usage |
|------------|----------|-----|-------|
| **White** | `#FFFFFF` | rgb(255, 255, 255) | Backgrounds, text on dark |
| **Light Gray** | `#616161` | rgb(97, 97, 97) | Secondary text, subtitles, labels |
| **Text Black** | `#1D1D1D` | rgb(29, 29, 29) | Primary text, headings |

### Color Usage Guidelines

- **Dark backgrounds** (`#1D1D1D`): Use for hero sections, headers, and high-impact areas
- **White backgrounds**: Use for content sections to maximize readability
- **Yellow CTAs** (`#FCDF65`): Reserved for primary call-to-action buttons only
- **Teal accents** (`#78C8BF`): Use for links, active states, and decorative elements

---

## Typography

### Font Families

| Font | Weight | Usage |
|------|--------|-------|
| **DM Sans** | Regular (400) | Body text, paragraphs |
| **DM Sans** | Medium (500) | Labels, navigation items |
| **DM Sans** | Bold (700) | Headings, buttons, emphasis |
| **Inter** | Regular/Medium | Fallback sans-serif |

### Type Scale

| Element | Size (Desktop) | Size (Mobile) | Weight | Line Height |
|---------|---------------|---------------|--------|-------------|
| Hero H1 | 72px (4.5rem) | 48px (3rem) | Bold | 1.1 |
| Section H2 | 48-60px | 36px | Bold | 1.1-1.2 |
| Card Title | 32px (2rem) | 24px (1.5rem) | Bold | 1.2 |
| Body Large | 18px (1.125rem) | 16px | Regular | 1.6 |
| Body Regular | 16px (1rem) | 14px | Regular | 1.5 |
| Label/Caption | 12-14px | 12px | Medium | 1.4 |
| Button Text | 14px | 12px | Bold | 1.2 |

### Typography Guidelines

- **Headings**: Always bold, tight line height (1.1-1.2)
- **Body text**: Regular weight, relaxed line height (1.5-1.6)
- **All caps**: Reserved for labels and category tags only
- **Letter spacing**: Slightly increased (0.05em) for uppercase text

---

## Spacing System

### Base Unit: 4px

| Size | Value | Usage |
|------|-------|-------|
| xs | 4px | Tight gaps between related elements |
| sm | 8px | Small padding, icon gaps |
| md | 16px | Standard padding, card internal spacing |
| lg | 24px | Section internal padding |
| xl | 32px | Large gaps between sections |
| 2xl | 48px | Section margins |
| 3xl | 64px | Major section separations |
| 4xl | 128px | Hero vertical padding |

### Section Padding

- **Desktop**: `py-32` (128px vertical padding)
- **Tablet**: `py-24` (96px vertical padding)
- **Mobile**: `py-20` (80px vertical padding)

---

## Border Radius

| Type | Value | Usage |
|------|-------|-------|
| Small | 8px (0.5rem) | Buttons, small cards |
| Medium | 12px (0.75rem) | Standard cards |
| Large | 16px (1rem) | Large cards, images |
| XL | 24px (1.5rem) | Featured elements, rounded rectangles |
| Full | 50% / 9999px | Circular buttons, profile photos |

---

## Shadows & Effects

### Box Shadows

| Type | Value | Usage |
|------|-------|-------|
| None | `none` | Most elements (flat design) |
| Subtle | `0 2px 4px rgba(0,0,0,0.05)` | Hover states |
| Medium | `0 4px 6px rgba(0,0,0,0.1)` | Floating photos |
| Large | `0 8px 10px rgba(0,0,0,0.1)` | Modal dialogs |

### Hover Effects

- **Buttons**: Scale to 1.05x on hover, 0.95x on press
- **Cards**: Scale to 1.02x on hover with 300ms transition
- **Links**: Color change to teal (`#78C8BF`)
- **Navigation items**: Underline or background color shift

### Transitions

- **Default duration**: 300ms
- **Fast (buttons)**: 200ms
- **Slow (page sections)**: 500-800ms
- **Easing**: `ease-in-out` for most, `ease-out` for entrances

---

## Animation Guidelines

### Page Load Animations

- **Hero content**: Fade up with 30px offset, 800ms duration
- **Service cards**: Staggered fade up, 100ms delay between each
- **Team photos**: Fade in with subtle Y-axis movement

### Scroll Animations

- **Trigger**: When element enters viewport
- **Effect**: Fade in with subtle Y-axis movement (20-30px)
- **Duration**: 500-600ms
- **Delay**: Stagger by 100-200ms for lists

### Carousel Animations

- **Slide transition**: Fade + vertical movement, 300ms
- **Auto-advance**: Not enabled (manual navigation only)
- **Floating elements**: Subtle Y-axis bounce, 3-4s loop

---

## Component Patterns

### Primary CTA Button (Circular)

```
Size: 128px x 128px (desktop), 112px x 112px (mobile)
Shape: Perfect circle
Background: #FCDF65
Text: #1D1D1D, bold, uppercase, 12-14px
Hover: Scale 1.05, background #f5d44a
Shadow: Large drop shadow
```

### Service Cards

```
Min Height: 280px
Border Radius: 16px (rounded-2xl)
Padding: 32px
Icon Size: 32px, stroke width 1.5px
Title: 32px bold, supports line breaks
Background: Service-specific color
Text: #1D1D1D with 80% opacity for descriptions
```

### Testimonial Section

```
Quote: 24px italic on desktop, 20px on mobile
Author name: 18px bold
Author title: 16px regular, #616161
Profile photo: 96px circle with white ring
Navigation arrows: Ghost style, 32px icons
Dots: 8px circles, active is 32px wide pill in teal
```

### Decorative Shapes

```
Rounded rectangles: 24px border radius, solid brand colors
Circles: Perfect circles, either solid color or photos
Gradient circles: Multi-stop gradients (#FF9A8B to #78C8BF)
Sizes: Small (64-80px), Medium (128-160px), Large (192-256px)
```

---

## Image Guidelines

### Photo Treatment

- **Team photos**: Natural lighting, casual professional style
- **Cropping**: 3:4 aspect ratio for portraits, 1:1 for circles
- **Filters**: None - use authentic, unfiltered photos
- **Overlays**: No color overlays on photos

### Decorative Photos

- **Shape**: Circles or rounded rectangles
- **Border**: Optional 4px white or teal ring
- **Shadow**: Medium drop shadow for floating effect
- **Animation**: Subtle float animation (Y-axis movement)

---

## Layout Principles

### Grid System

- **Max width**: 1280px (7xl)
- **Columns**: 12-column grid
- **Gutter**: 16-24px
- **Margins**: 24px (mobile), 48px (desktop)

### Section Layouts

1. **Hero**: Full-bleed dark background, 2-column on desktop
2. **Services**: 3-column grid on desktop, 2-column on tablet
3. **Testimonials**: Centered content with floating decorative photos
4. **Team sections**: 2-column split (text + photo grid)

### Responsive Breakpoints

| Breakpoint | Width | Adjustments |
|------------|-------|-------------|
| Mobile | < 768px | Single column, reduced type sizes |
| Tablet | 768-1024px | 2 columns, medium type sizes |
| Desktop | > 1024px | Full layout, maximum type sizes |

---

## Accessibility Notes

- **Color contrast**: All text meets WCAG AA minimum (4.5:1 for normal text)
- **Focus states**: Visible focus rings on all interactive elements
- **Touch targets**: Minimum 44px for mobile tap targets
- **Alt text**: Required for all meaningful images

---

## File Naming Conventions

### Images
- Team photos: `team/Rectangle_[number].jpeg`
- Testimonials: `testimonials/[name]_[number].jpg`
- Portfolio: `portfolio/[Project-Name]-[number].webp`
- Shapes: `shapes/Shapes-[number].svg`
- Icons: `icons/Icon-[number].svg`
- Logos: `Lumin8-Logo-Redesign-2024_White.png`

---

## Brand Voice (for copy reference)

- **Tone**: Confident, creative, approachable
- **Style**: Direct, action-oriented, benefit-focused
- **Personality**: Professional but not corporate, friendly but expert

---

*Last updated: December 2024*
