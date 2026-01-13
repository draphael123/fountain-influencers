# Fountain Vitality - Influencer Partnership Landing Page

A beautiful, responsive React landing page designed to attract influencers to partner with Fountain Vitality.

## Features

- 🎨 Modern, clean design with custom color palette
- ✨ Smooth scroll animations using Intersection Observer
- 📱 Fully responsive (mobile, tablet, desktop)
- 🎯 10 complete sections as specified
- 💫 Hover effects and micro-interactions
- 📝 Functional contact form (mailto: integration)
- 🔽 Expandable FAQ accordion
- 🎪 Sticky header with scroll state

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **CSS3** - Custom styling with CSS variables
- **Google Fonts** - Fraunces (serif) + DM Sans (sans-serif)

## Project Structure

```
├── index.html          # Entry HTML with font imports
├── package.json        # Dependencies and scripts
├── vite.config.js      # Vite configuration
├── src/
│   ├── main.jsx        # React entry point
│   ├── App.jsx         # Main application component
│   └── index.css       # All styles
└── README.md           # This file
```

## Sections

1. **Hero** - Compelling headline with CTA
2. **Why Partner With Us** - 4 key benefits
3. **Brand Values** - 3 core values
4. **Social Proof** - Influencer grid + testimonials + stats
5. **Compensation** - $100/post details + perks
6. **Content Guidelines** - Do's and Don'ts
7. **How It Works** - 4-step process
8. **FAQ** - 8 common questions (accordion)
9. **Contact** - Form + contact info
10. **Footer** - Links + social icons

## Customization

### Colors

Edit CSS variables in `src/index.css`:

```css
:root {
  --color-primary: #2d8a7b;
  --color-accent: #e8956a;
  --color-background: #faf9f7;
  /* ... */
}
```

### Content

Update content arrays in `src/App.jsx`:
- `influencers` - Partner grid data
- `testimonials` - Quote cards
- `faqs` - FAQ questions and answers

## License

© 2025 Fountain Vitality. All rights reserved.

