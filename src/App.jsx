import { useState, useEffect, useRef } from 'react'

// Intersection Observer hook for scroll animations
function useInView(options = {}) {
  const ref = useRef(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true)
        observer.disconnect()
      }
    }, { threshold: 0.1, ...options })

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return [ref, isInView]
}

// Animated Section wrapper
function AnimatedSection({ children, className = '', delay = 0 }) {
  const [ref, isInView] = useInView()
  
  return (
    <div 
      ref={ref} 
      className={`animated-section ${isInView ? 'in-view' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

// Icons
const Icons = {
  Creative: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5z"/>
      <path d="M2 17l10 5 10-5"/>
      <path d="M2 12l10 5 10-5"/>
    </svg>
  ),
  Team: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
  Heart: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>
  ),
  Lightning: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>
  ),
  Patient: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
    </svg>
  ),
  Access: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <path d="M2 12h20"/>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  ),
  Support: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
      <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
    </svg>
  ),
  Check: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  ),
  X: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"/>
      <line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  ),
  ChevronDown: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9"/>
    </svg>
  ),
  Quote: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" opacity="0.15">
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
    </svg>
  ),
  Dollar: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="1" x2="12" y2="23"/>
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
    </svg>
  ),
  Gift: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 12 20 22 4 22 4 12"/>
      <rect x="2" y="7" width="20" height="5"/>
      <line x1="12" y1="22" x2="12" y2="7"/>
      <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/>
      <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/>
    </svg>
  ),
  Star: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  ),
  Instagram: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  ),
  TikTok: () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
    </svg>
  ),
  YouTube: () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  ),
  Facebook: () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  ),
  Mail: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  ),
  Send: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="22" y1="2" x2="11" y2="13"/>
      <polygon points="22 2 15 22 11 13 2 9 22 2"/>
    </svg>
  ),
  ArrowDown: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="5" x2="12" y2="19"/>
      <polyline points="19 12 12 19 5 12"/>
    </svg>
  ),
}

// Influencer data
const influencers = [
  { name: "Sarah M.", handle: "@sarahwellness", followers: "125K", niche: "Fitness" },
  { name: "Mike T.", handle: "@mikefit", followers: "89K", niche: "Men's Health" },
  { name: "Jessica L.", handle: "@jesslifestyle", followers: "210K", niche: "Lifestyle" },
  { name: "David R.", handle: "@davidruns", followers: "67K", niche: "Fitness" },
  { name: "Amanda K.", handle: "@amandawellness", followers: "156K", niche: "Women's Health" },
  { name: "Chris P.", handle: "@chrisperformance", followers: "94K", niche: "Performance" },
  { name: "Emily S.", handle: "@emilystrong", followers: "178K", niche: "Strength" },
  { name: "Ryan B.", handle: "@ryanbalanced", followers: "52K", niche: "Wellness" },
]

const testimonials = [
  {
    quote: "Working with Fountain Vitality was seamless. They gave me full creative control and the content performed incredibly well.",
    author: "@sarahwellness"
  },
  {
    quote: "I've worked with a lot of brands, but FV actually cares about their partners. Quick responses, fair pay, and a product I believe in.",
    author: "@mikefit"
  },
  {
    quote: "My audience loved the content. It felt authentic because it IS authentic—this brand genuinely helps people.",
    author: "@jesslifestyle"
  }
]

const faqs = [
  {
    question: "Do I need to be a Fountain Vitality patient?",
    answer: "No! While we love when partners have personal experience with hormone health, it's not required. We'll provide all the information you need to create informed, authentic content."
  },
  {
    question: "How much creative freedom do I have?",
    answer: "A lot. We provide key messages and guidelines, but you know your audience best. We want content that feels natural to your style—not scripted ads."
  },
  {
    question: "What platforms do you work with?",
    answer: "We partner with creators on Instagram, TikTok, YouTube, and Facebook. We're open to other platforms too—just let us know!"
  },
  {
    question: "How do I get paid?",
    answer: "We pay $100 per post via PayPal, Venmo, or direct deposit—your choice. Payment is sent within 7 days of your content going live."
  },
  {
    question: "Can I work with other brands in the health space?",
    answer: "Yes, we don't require exclusivity. We just ask that you don't promote direct competitors within 30 days of our campaign."
  },
  {
    question: "What if I have a smaller following?",
    answer: "We care more about engagement and authenticity than follower count. If your audience trusts you and engages with your content, we want to hear from you."
  },
  {
    question: "How long does the partnership last?",
    answer: "We start with individual campaigns, but we love building long-term relationships with creators who are a great fit. Many of our partners have been with us for 6+ months."
  },
  {
    question: "What kind of content performs best?",
    answer: "Educational content, personal stories, myth-busting, and 'day in my life' formats tend to resonate well. But we're open to your ideas!"
  }
]

// FAQ Item Component
function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`}>
      <button className="faq-question" onClick={() => setIsOpen(!isOpen)}>
        <span>{question}</span>
        <span className="faq-icon"><Icons.ChevronDown /></span>
      </button>
      <div className="faq-answer">
        <p>{answer}</p>
      </div>
    </div>
  )
}

// Main App Component
function App() {
  const [headerScrolled, setHeaderScrolled] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    instagram: '',
    followers: '',
    message: ''
  })

  useEffect(() => {
    const handleScroll = () => {
      setHeaderScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent('Partnership Inquiry')
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nInstagram: ${formData.instagram}\nFollowers: ${formData.followers}\n\nMessage:\n${formData.message}`
    )
    window.location.href = `mailto:partnerships@fountainvitality.com?subject=${subject}&body=${body}`
  }

  return (
    <div className="app">
      {/* Sticky Header */}
      <header className={`header ${headerScrolled ? 'scrolled' : ''}`}>
        <div className="header-container">
          <div className="logo">
            <span className="logo-icon">◈</span>
            <span className="logo-text">Fountain Vitality</span>
          </div>
          <nav className="nav">
            <button onClick={() => scrollToSection('benefits')}>Why Partner</button>
            <button onClick={() => scrollToSection('social-proof')}>Partners</button>
            <button onClick={() => scrollToSection('compensation')}>Compensation</button>
            <button onClick={() => scrollToSection('contact')} className="nav-cta">Get in Touch</button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-gradient"></div>
          <div className="hero-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
        </div>
        <div className="hero-content">
          <AnimatedSection>
            <span className="hero-badge">Influencer Partnership Program</span>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <h1 className="hero-title">Partner With a Brand<br />That Actually Cares</h1>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p className="hero-subtitle">
              Help your audience discover hormone health solutions that genuinely transform lives. 
              Create authentic content with a mission-driven brand that values you.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={300}>
            <div className="hero-cta">
              <button className="btn btn-primary" onClick={() => scrollToSection('contact')}>
                Become a Partner
                <Icons.ArrowDown />
              </button>
              <button className="btn btn-secondary" onClick={() => scrollToSection('benefits')}>
                Learn More
              </button>
            </div>
          </AnimatedSection>
        </div>
        <div className="hero-scroll-indicator" onClick={() => scrollToSection('benefits')}>
          <span>Scroll</span>
          <Icons.ArrowDown />
        </div>
      </section>

      {/* Why Partner Section */}
      <section id="benefits" className="section section-benefits">
        <div className="container">
          <AnimatedSection>
            <div className="section-header">
              <span className="section-label">Why Partner With Us</span>
              <h2 className="section-title">A Partnership Built on Trust</h2>
              <p className="section-description">
                We're not just another brand looking for posts. We're building meaningful relationships 
                with creators who share our passion for helping people.
              </p>
            </div>
          </AnimatedSection>
          
          <div className="benefits-grid">
            <AnimatedSection delay={100}>
              <div className="benefit-card">
                <div className="benefit-icon"><Icons.Creative /></div>
                <h3>Creative Freedom</h3>
                <p>We trust our partners. You know your audience—create content that feels authentic to you.</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="benefit-card">
                <div className="benefit-icon"><Icons.Team /></div>
                <h3>Dynamic Team</h3>
                <p>Work with a collaborative, responsive team that values your input and ideas.</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={300}>
              <div className="benefit-card">
                <div className="benefit-icon"><Icons.Heart /></div>
                <h3>Mission-Driven Brand</h3>
                <p>Promote something that genuinely helps people feel better and live fuller lives.</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={400}>
              <div className="benefit-card">
                <div className="benefit-icon"><Icons.Lightning /></div>
                <h3>Simple Process</h3>
                <p>Clear expectations, fast communication, and on-time payments. Always.</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Brand Values Section */}
      <section className="section section-values">
        <div className="container">
          <AnimatedSection>
            <div className="section-header">
              <span className="section-label">What We Stand For</span>
              <h2 className="section-title">Our Core Values</h2>
            </div>
          </AnimatedSection>
          
          <div className="values-grid">
            <AnimatedSection delay={100}>
              <div className="value-card">
                <div className="value-icon"><Icons.Patient /></div>
                <h3>Patient-First Care</h3>
                <p>
                  Everything we do starts with the patient. We're not here to sell—we're here 
                  to help people reclaim their energy, clarity, and quality of life.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="value-card">
                <div className="value-icon"><Icons.Access /></div>
                <h3>Accessibility</h3>
                <p>
                  Hormone health shouldn't be complicated or out of reach. We make it simple 
                  and affordable for everyone.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={300}>
              <div className="value-card">
                <div className="value-icon"><Icons.Support /></div>
                <h3>Support for Those in Need</h3>
                <p>
                  We believe everyone deserves to feel their best. Our mission is to remove 
                  barriers and provide real solutions.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section id="social-proof" className="section section-social-proof">
        <div className="container">
          <AnimatedSection>
            <div className="section-header">
              <span className="section-label">Our Partners</span>
              <h2 className="section-title">Creators We've Worked With</h2>
              <p className="section-description">
                We've partnered with amazing creators across health, wellness, and lifestyle spaces.
              </p>
            </div>
          </AnimatedSection>

          {/* Stats Bar */}
          <AnimatedSection delay={100}>
            <div className="stats-bar">
              <div className="stat">
                <span className="stat-number">50+</span>
                <span className="stat-label">Creator Partners</span>
              </div>
              <div className="stat">
                <span className="stat-number">2M+</span>
                <span className="stat-label">Total Reach</span>
              </div>
              <div className="stat">
                <span className="stat-number">500K+</span>
                <span className="stat-label">Engagements</span>
              </div>
            </div>
          </AnimatedSection>

          {/* Influencer Grid */}
          <div className="influencer-grid">
            {influencers.map((influencer, index) => (
              <AnimatedSection key={index} delay={150 + (index * 50)}>
                <div className="influencer-card">
                  <div className="influencer-avatar">
                    <span>{influencer.name.charAt(0)}</span>
                  </div>
                  <div className="influencer-info">
                    <h4>{influencer.name}</h4>
                    <span className="influencer-handle">{influencer.handle}</span>
                    <span className="influencer-followers">{influencer.followers} followers</span>
                  </div>
                  <span className="influencer-niche">{influencer.niche}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Testimonials */}
          <AnimatedSection delay={200}>
            <h3 className="testimonials-title">What Our Partners Say</h3>
          </AnimatedSection>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={index} delay={250 + (index * 100)}>
                <div className="testimonial-card">
                  <div className="testimonial-quote-icon"><Icons.Quote /></div>
                  <p className="testimonial-text">{testimonial.quote}</p>
                  <span className="testimonial-author">— {testimonial.author}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Compensation Section */}
      <section id="compensation" className="section section-compensation">
        <div className="container">
          <AnimatedSection>
            <div className="section-header">
              <span className="section-label">Compensation & Details</span>
              <h2 className="section-title">What You Get</h2>
            </div>
          </AnimatedSection>

          <div className="compensation-layout">
            <AnimatedSection delay={100}>
              <div className="compensation-card main-card">
                <div className="compensation-icon"><Icons.Dollar /></div>
                <div className="compensation-amount">$100</div>
                <div className="compensation-per">per post</div>
                <ul className="compensation-details">
                  <li><Icons.Check /> Paid within 7 days of content going live</li>
                  <li><Icons.Check /> Bonuses available for high-performing content</li>
                  <li><Icons.Check /> PayPal, Venmo, or direct deposit</li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="compensation-card perks-card">
                <div className="perks-header">
                  <Icons.Gift />
                  <h3>Partnership Perks</h3>
                </div>
                <ul className="perks-list">
                  <li>Complimentary consultation with our medical team</li>
                  <li>Early access to new offerings and campaigns</li>
                  <li>Feature opportunities on our brand channels</li>
                  <li>Long-term partnership opportunities for top performers</li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="compensation-card looking-card">
                <div className="looking-header">
                  <Icons.Star />
                  <h3>What We're Looking For</h3>
                </div>
                <ul className="looking-list">
                  <li>Creators in health, wellness, fitness, or lifestyle spaces</li>
                  <li>Authentic voices who connect with their audience</li>
                  <li>Minimum 5K followers (engagement matters more than size)</li>
                  <li>Passion for helping others feel their best</li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Content Guidelines Section */}
      <section className="section section-guidelines">
        <div className="container">
          <AnimatedSection>
            <div className="section-header">
              <span className="section-label">Creative Guidelines</span>
              <h2 className="section-title">Simple, Clear Expectations</h2>
              <p className="section-description">
                Beyond these basics, you have full creative freedom. We trust you to know what resonates with your audience.
              </p>
            </div>
          </AnimatedSection>

          <div className="guidelines-grid">
            <AnimatedSection delay={100}>
              <div className="guideline-card dos">
                <h3>The Do's</h3>
                <ul>
                  <li><span className="icon-check"><Icons.Check /></span> Be authentic—share your genuine perspective</li>
                  <li><span className="icon-check"><Icons.Check /></span> Educate your audience about hormone health</li>
                  <li><span className="icon-check"><Icons.Check /></span> Include FTC-required disclosure (#ad, #partner)</li>
                  <li><span className="icon-check"><Icons.Check /></span> Have fun and be creative!</li>
                </ul>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="guideline-card donts">
                <h3>The Don'ts</h3>
                <ul>
                  <li><span className="icon-x"><Icons.X /></span> No sexually explicit or suggestive content</li>
                  <li><span className="icon-x"><Icons.X /></span> No guarantees or unrealistic promises</li>
                  <li><span className="icon-x"><Icons.X /></span> No negative comparisons to competitors</li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section section-process">
        <div className="container">
          <AnimatedSection>
            <div className="section-header">
              <span className="section-label">How It Works</span>
              <h2 className="section-title">Four Simple Steps</h2>
            </div>
          </AnimatedSection>

          <div className="process-timeline">
            <AnimatedSection delay={100}>
              <div className="process-step">
                <div className="step-number">1</div>
                <h3>Apply</h3>
                <p>Fill out our quick partnership form</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="process-step">
                <div className="step-number">2</div>
                <h3>Connect</h3>
                <p>We'll reach out to chat about fit and ideas</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={300}>
              <div className="process-step">
                <div className="step-number">3</div>
                <h3>Create</h3>
                <p>Make awesome content with full creative control</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={400}>
              <div className="process-step">
                <div className="step-number">4</div>
                <h3>Get Paid</h3>
                <p>Receive payment within 7 days of posting</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section section-faq">
        <div className="container">
          <AnimatedSection>
            <div className="section-header">
              <span className="section-label">FAQ</span>
              <h2 className="section-title">Common Questions</h2>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="faq-container">
              {faqs.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section section-contact">
        <div className="container">
          <AnimatedSection>
            <div className="section-header">
              <span className="section-label">Get Started</span>
              <h2 className="section-title">Ready to Partner?</h2>
              <p className="section-description">
                We'd love to hear from you. Reach out and let's talk about working together.
              </p>
            </div>
          </AnimatedSection>

          <div className="contact-layout">
            <AnimatedSection delay={100}>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleFormChange}
                    placeholder="Your name"
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleFormChange}
                    placeholder="your@email.com"
                    required 
                  />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="instagram">Instagram Handle</label>
                    <input 
                      type="text" 
                      id="instagram" 
                      name="instagram" 
                      value={formData.instagram}
                      onChange={handleFormChange}
                      placeholder="@yourhandle"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="followers">Follower Count</label>
                    <input 
                      type="text" 
                      id="followers" 
                      name="followers" 
                      value={formData.followers}
                      onChange={handleFormChange}
                      placeholder="e.g. 50K"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message}
                    onChange={handleFormChange}
                    placeholder="Tell us about yourself and why you'd like to partner..."
                    rows="4"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-full">
                  <Icons.Send />
                  Send Message
                </button>
              </form>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="contact-info">
                <div className="contact-method">
                  <div className="contact-icon"><Icons.Mail /></div>
                  <div className="contact-details">
                    <h4>Email Us</h4>
                    <a href="mailto:partnerships@fountainvitality.com">partnerships@fountainvitality.com</a>
                  </div>
                </div>
                <div className="contact-method">
                  <div className="contact-icon"><Icons.Instagram /></div>
                  <div className="contact-details">
                    <h4>DM Us on Instagram</h4>
                    <a href="https://instagram.com/fountainvitality" target="_blank" rel="noopener noreferrer">@fountainvitality</a>
                  </div>
                </div>
                <div className="contact-note">
                  <p>We typically respond within 24-48 hours. Looking forward to connecting!</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="logo">
                <span className="logo-icon">◈</span>
                <span className="logo-text">Fountain Vitality</span>
              </div>
              <p>Helping people discover hormone health solutions and live their best lives.</p>
            </div>
            <div className="footer-links">
              <h4>Company</h4>
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms</a>
            </div>
            <div className="footer-social">
              <h4>Follow Us</h4>
              <div className="social-icons">
                <a href="#" aria-label="Instagram"><Icons.Instagram /></a>
                <a href="#" aria-label="TikTok"><Icons.TikTok /></a>
                <a href="#" aria-label="YouTube"><Icons.YouTube /></a>
                <a href="#" aria-label="Facebook"><Icons.Facebook /></a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2025 Fountain Vitality. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

