# Cursor AI Prompt: Improve Fountain Influencer Landing Page

Please update the Fountain influencer landing page with the following comprehensive improvements to typography, colors, discoverability, and UI patterns. Apply all changes to the existing App.jsx and styles.css files.

## Typography Improvements

### Font System
- Add a proper type scale with 10 levels (xs through 6xl)
- Implement 5 font weights: 400 (normal), 500 (medium), 600 (semibold), 700 (bold), 800 (extrabold)
- Add 5 line-height variants: tight (1.25), snug (1.375), normal (1.5), relaxed (1.625), loose (2)
- Apply -0.02em letter-spacing to all headings for a modern, tight look
- Use extrabold weight on hero title and section titles
- Improve body text line-height to 1.625 for better readability

### Visual Hierarchy
- Make hero title use a gradient text effect: `background: linear-gradient(135deg, var(--color-text-primary), var(--color-primary-light)); -webkit-background-clip: text; -webkit-text-fill-color: transparent;`
- Increase contrast between heading weights
- Ensure proper spacing between typography elements

## Color System Improvements

### Enhanced Color Palette
Add these CSS variables:
```css
--color-primary-glow: rgba(99, 102, 241, 0.4);
--color-accent-glow: rgba(20, 184, 166, 0.3);
--color-bg-card-hover: #1f1f2e;
--color-border-hover: rgba(148, 163, 184, 0.24);
```

### Visual Effects
- Change all primary buttons to use gradients: `background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark));`
- Add glow effects to buttons: `box-shadow: 0 0 20px var(--color-primary-glow);`
- Increase glow on hover: `box-shadow: 0 0 30px var(--color-primary-glow);`
- Add 7-level shadow system from sm to 2xl plus glow variant
- Apply hover glows to benefit cards and main compensation card

## Discoverability Enhancements

### FAQ Search
Add a search bar above the FAQ section:
- Create state: `const [faqSearch, setFaqSearch] = useState('')`
- Add search input with search icon
- Filter FAQs in real-time based on search query matching question or answer
- Show "No results found" message when no matches
- Style with rounded full border and focus glow effect

### Popular FAQ Badges
- Add `popular: true` property to top 3 FAQs in the faqs array (questions about being a patient, creative freedom, and content type)
- Display a "Popular" badge next to popular questions
- Style badge: small, pink background, uppercase, rounded corners

### Visual Hierarchy Numbers
- Add numbered badges to benefit cards: 01, 02, 03, 04
- Position in top-right corner
- Style: large, extrabold font, low opacity primary color
- Improves visual flow and progression

## Tabbed Guidelines Section

Replace the side-by-side Do's/Don'ts cards with a tabbed interface:

### Tab Structure
- Create state: `const [activeTab, setActiveTab] = useState('dos')`
- Two tabs: "What Works" (with Check icon) and "Please Avoid" (with X icon)
- Tab buttons in a container with background card and border
- Active tab gets gradient background with glow effect
- Content panel shows/hides based on active tab with fade-in animation

### Enhanced List Items
For each guideline list item:
- Icon (check or X) on the left
- Bold heading/title
- Gray descriptive text below
- Improved spacing and alignment
- Use flexbox for layout

### Styling
```css
.tabs-header {
  display: flex;
  gap: var(--space-md);
  background: var(--color-bg-card);
  border-radius: var(--radius-xl);
  padding: var(--space-sm);
}

.tab-button.active {
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark));
  box-shadow: 0 0 20px var(--color-primary-glow);
}
```

## Code Quality Improvements

### Intersection Observer
Update useInView hook:
```javascript
const defaultOptions = { 
  threshold: 0.1, 
  triggerOnce: true,  // Prevent re-triggering
  rootMargin: '50px', // Trigger earlier
  ...options 
}
```

### Logo Support
Add logo image support with fallback:
```jsx
<img src="/logo.svg" alt="Fountain" className="logo-image" onError={(e) => {
  e.target.style.display = 'none'
  e.target.nextSibling.style.display = 'flex'
}} />
<div className="logo-fallback" style={{display: 'none'}}>
  <span className="logo-icon">◈</span>
  <span className="logo-text">Fountain</span>
</div>
```

Add to both header and footer.

## UI Polish & Micro-interactions

### Card Hover Effects
- Apply `transform: translateY(-8px)` on benefit card hover
- Add `transform: scale(1.1) rotate(5deg)` to icons on card hover
- Include border color change and glow effect

### Button Enhancements
- Add icon animation: `transform: translateY(3px)` on primary button hover
- Increase shadow and glow on hover state
- Add transition timing: `transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1)`

### New Icons
Add these icon components if not present:
- `Search` - magnifying glass for FAQ search
- `Sparkles` - decorative icon for hero badge

### Additional Polish
- Add top border animation to benefit cards (scaleX transform on hover)
- Improve process step number badges with gradient backgrounds
- Add support icon to contact note section
- Enhance compensation card with "Performance bonuses available" in list

## Spacing Improvements

Increase spacing throughout:
- Section padding: 8rem (desktop), 4rem (mobile)
- Card gaps: 2rem minimum
- Between sections: more generous vertical rhythm
- Touch targets: minimum 40px for mobile

## Responsive Updates

- Stack tabs vertically on mobile
- Full-width buttons on mobile
- Reduce hero title size on mobile
- Ensure proper touch target sizes

## CSS Variable Structure

Organize all variables at the top of styles.css:
```css
:root {
  /* Colors */
  /* Typography */
  /* Spacing */
  /* Shadows */
  /* Transitions */
  /* Border Radius */
}
```

## Implementation Notes

- Maintain all existing functionality
- Ensure backward compatibility
- Add smooth transitions to all interactive elements
- Test FAQ search with various queries
- Verify tab switching works smoothly
- Check logo fallback behavior

Apply these improvements systematically, ensuring the design remains cohesive and professional. The goal is a more polished, discoverable, and visually engaging landing page with better typography hierarchy and modern UI patterns.
