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
  { name: "Sarah M.", handle: "@sarahwellness", followers: "125K", niche: "Women's Health" },
  { name: "Lisa T.", handle: "@lisathrives", followers: "89K", niche: "Menopause" },
  { name: "Jessica L.", handle: "@jesslifestyle", followers: "210K", niche: "Lifestyle" },
  { name: "Michelle R.", handle: "@michellerenewal", followers: "67K", niche: "Perimenopause" },
  { name: "Amanda K.", handle: "@amandawellness", followers: "156K", niche: "Women's Health" },
  { name: "Karen P.", handle: "@karenpower", followers: "94K", niche: "Wellness" },
  { name: "Emily S.", handle: "@emilystrong", followers: "178K", niche: "Hormones" },
  { name: "Rachel B.", handle: "@rachelbalanced", followers: "52K", niche: "Self-Care" },
]

const testimonials = [
  {
    quote: "Fountain trusted me to share my real menopause journey. No scripts, no awkward talking points—just honest content that resonated with my audience.",
    author: "@sarahwellness"
  },
  {
    quote: "As someone going through perimenopause, partnering with Fountain felt natural. They actually care about helping women feel better, not just selling.",
    author: "@lisathrives"
  },
  {
    quote: "The creative freedom was incredible. I shared my story my way, and my community responded because it felt real—because it IS real.",
    author: "@jesslifestyle"
  }
]

const faqs = [
  {
    question: "Do I need to be a Fountain patient?",
    answer: "No! While we love when partners have personal experience with hormone health, it's not required. If you're not personally going through the Fountain process, you may speak generally about Fountain as a solution. We'll guide you on appropriate phrasing."
  },
  {
    question: "How much creative freedom do I have?",
    answer: "A lot. We provide key messages and guidelines, but you know your audience best. We want content that feels human and approachable—not overly polished, not overly salesy. Simple, clear, and natural is best."
  },
  {
    question: "What platforms do you work with?",
    answer: "This collaboration runs on TikTok and/or Facebook. Fountain may repost your content on our own social channels and may tag you when doing so."
  },
  {
    question: "What type of content should I create?",
    answer: "Short-form vertical videos (9:16), ideally 1-2 minutes long. iPhone only, talking-to-camera style. Clip-on mic encouraged if available. Share your real menopause or perimenopause experience in an honest, relatable way."
  },
  {
    question: "What are the required talking points?",
    answer: "You'll mention your custom discount link on camera, highlight the $32 evaluation with a provider who listens, and mention that treatment may include progesterone, testosterone, and estrogen. We'll provide all the details!"
  },
  {
    question: "Do I need approval before filming?",
    answer: "Yes! Before filming, submit 3-4 content ideas with hook options. We'll review and give feedback on hooks and overall concept direction. Once approved, you're good to film. This avoids reshoots!"
  },
  {
    question: "How many revision rounds are there?",
    answer: "We may request up to 1-2 rounds of edits if needed for clarity, compliance, or alignment. Feedback will be specific and respectful of your voice. The goal is minimal revisions, not perfection."
  },
  {
    question: "What kind of content performs best?",
    answer: "Personal stories about your menopause/perimenopause journey, day-in-the-life reflections, 'things I wish I knew earlier,' tips based on your experience, and why most HRT clinics don't offer testosterone but Fountain does."
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
            <span className="logo-text">Fountain</span>
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
            <span className="hero-badge">Creator Collaboration Program</span>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <h1 className="hero-title">Share Your Story.<br />Help Women Thrive.</h1>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p className="hero-subtitle">
              Create honest, relatable content about menopause and perimenopause. 
              Partner with a brand that's helping women reclaim their energy, clarity, and quality of life.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={300}>
            <div className="hero-cta">
              <button className="btn btn-primary" onClick={() => scrollToSection('contact')}>
                Become a Creator Partner
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
              <span className="section-label">Why Create With Us</span>
              <h2 className="section-title">Real Stories. Real Impact.</h2>
              <p className="section-description">
                We're looking for creators who want to share authentic menopause and perimenopause experiences—
                not scripted ads. Your voice, your story, your way.
              </p>
            </div>
          </AnimatedSection>
          
          <div className="benefits-grid">
            <AnimatedSection delay={100}>
              <div className="benefit-card">
                <div className="benefit-icon"><Icons.Creative /></div>
                <h3>Full Creative Control</h3>
                <p>Submit your content ideas and hooks for approval, then create in your authentic style. We trust you to know what resonates with your audience.</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="benefit-card">
                <div className="benefit-icon"><Icons.Team /></div>
                <h3>Collaborative Process</h3>
                <p>We review concepts before filming to avoid reshoots. Light feedback, minimal revisions—the goal isn't perfection, it's authenticity.</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={300}>
              <div className="benefit-card">
                <div className="benefit-icon"><Icons.Heart /></div>
                <h3>Meaningful Content</h3>
                <p>Help women discover hormone health solutions that actually work. 99% of Fountain patients use testosterone—something most clinics don't offer.</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={400}>
              <div className="benefit-card">
                <div className="benefit-icon"><Icons.Lightning /></div>
                <h3>Simple & Supported</h3>
                <p>We provide all the info you need about Fountain's process, hormones, and key talking points. Ask questions early, share ideas freely.</p>
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
              <span className="section-label">What Makes Fountain Different</span>
              <h2 className="section-title">Why Women Choose Us</h2>
            </div>
          </AnimatedSection>
          
          <div className="values-grid">
            <AnimatedSection delay={100}>
              <div className="value-card">
                <div className="value-icon"><Icons.Patient /></div>
                <h3>Testosterone Included</h3>
                <p>
                  99% of our patients use testosterone—essential for sex drive, motivation, bone health, and muscle retention. 
                  Most HRT clinics don't offer it. We built our business specifically to provide it.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="value-card">
                <div className="value-icon"><Icons.Access /></div>
                <h3>The 12-Week Promise</h3>
                <p>
                  Biweekly check-ins with personalized hormone adjustments. Within 12 weeks, every patient 
                  reaches their ideal dose—one pill and one click per day.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={300}>
              <div className="value-card">
                <div className="value-icon"><Icons.Support /></div>
                <h3>Custom-Tailored Care</h3>
                <p>
                  Not one-size-fits-all. Treatments may include testosterone, estrogen, progesterone, 
                  and vaginal estrogen—adjusted specifically for perimenopausal or menopausal needs.
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
              <span className="section-label">Our Creator Community</span>
              <h2 className="section-title">Women Sharing Real Stories</h2>
              <p className="section-description">
                We partner with creators in women's health, wellness, and lifestyle who share authentic menopause and perimenopause experiences.
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
              <span className="section-label">Collaboration Details</span>
              <h2 className="section-title">What You Get</h2>
            </div>
          </AnimatedSection>

          <div className="compensation-layout">
            <AnimatedSection delay={100}>
              <div className="compensation-card main-card">
                <div className="compensation-icon"><Icons.Dollar /></div>
                <div className="compensation-amount">Paid</div>
                <div className="compensation-per">collaboration</div>
                <ul className="compensation-details">
                  <li><Icons.Check /> Your own custom discount link (fountain.net/yourname)</li>
                  <li><Icons.Check /> Content may be reposted on Fountain's channels</li>
                  <li><Icons.Check /> Long-term partnership opportunities</li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="compensation-card perks-card">
                <div className="perks-header">
                  <Icons.Gift />
                  <h3>Content Format</h3>
                </div>
                <ul className="perks-list">
                  <li>Short-form vertical video (9:16 ratio)</li>
                  <li>1-2 minutes ideal length</li>
                  <li>iPhone only, talking-to-camera style</li>
                  <li>Clip-on mic encouraged if available</li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="compensation-card looking-card">
                <div className="looking-header">
                  <Icons.Star />
                  <h3>Ideal Creators</h3>
                </div>
                <ul className="looking-list">
                  <li>Women in health, wellness, or lifestyle spaces</li>
                  <li>Authentic voices sharing real experiences</li>
                  <li>Personal connection to menopause or perimenopause topics</li>
                  <li>Conversational, honest, natural delivery style</li>
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
              <span className="section-label">Content Guidelines</span>
              <h2 className="section-title">Tone & Style</h2>
              <p className="section-description">
                Content should feel human and approachable—not overly polished, not overly salesy. 
                A real person sharing something helpful, not a scripted ad.
              </p>
            </div>
          </AnimatedSection>

          <div className="guidelines-grid">
            <AnimatedSection delay={100}>
              <div className="guideline-card dos">
                <h3>What Works</h3>
                <ul>
                  <li><span className="icon-check"><Icons.Check /></span> Share personal tips and what's helped you</li>
                  <li><span className="icon-check"><Icons.Check /></span> Frame things as "what worked for me"</li>
                  <li><span className="icon-check"><Icons.Check /></span> Speak from your own experience</li>
                  <li><span className="icon-check"><Icons.Check /></span> Conversational, honest, natural delivery</li>
                  <li><span className="icon-check"><Icons.Check /></span> Clear beginning, middle, and end</li>
                </ul>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="guideline-card donts">
                <h3>Please Avoid</h3>
                <ul>
                  <li><span className="icon-x"><Icons.X /></span> Medical advice or diagnoses</li>
                  <li><span className="icon-x"><Icons.X /></span> Weight-loss promises</li>
                  <li><span className="icon-x"><Icons.X /></span> Speaking as a medical expert</li>
                  <li><span className="icon-x"><Icons.X /></span> Broad statements like "every woman will experience this"</li>
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
              <span className="section-label">The Process</span>
              <h2 className="section-title">How Collaboration Works</h2>
            </div>
          </AnimatedSection>

          <div className="process-timeline">
            <AnimatedSection delay={100}>
              <div className="process-step">
                <div className="step-number">1</div>
                <h3>Submit Ideas</h3>
                <p>Send 3-4 content ideas with hook options for approval</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="process-step">
                <div className="step-number">2</div>
                <h3>Get Feedback</h3>
                <p>We review hooks and concept direction, then approve</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={300}>
              <div className="process-step">
                <div className="step-number">3</div>
                <h3>Create Content</h3>
                <p>Film your authentic video with full creative control</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={400}>
              <div className="process-step">
                <div className="step-number">4</div>
                <h3>Post & Share</h3>
                <p>Publish on TikTok/Facebook with your custom link</p>
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
              <h2 className="section-title">Ready to Create?</h2>
              <p className="section-description">
                Share your story. Help women discover hormone health solutions. Let's collaborate.
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
                <span className="logo-text">Fountain</span>
              </div>
              <p>Helping women reclaim their energy, clarity, and quality of life through personalized hormone therapy.</p>
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

