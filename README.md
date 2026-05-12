# GSRAutotech Website — Complete Technical & Functional Documentation

**Project:** GSRAutotech.com — Automotive Cybersecurity Consultancy Website  
**Version:** 1.0  
**Date:** May 2025  
**Built by:** Sai Kumar Reddy  
**Live URL:** https://gsrautotech.netlify.app  
**GitHub:** https://github.com/saikumarreddy-vastramAI/gsrautotech  

---

## TABLE OF CONTENTS

1. Project Overview
2. Technology Stack
3. Project Structure
4. Reusable Architecture
5. Module-by-Module Documentation
   - Module 1: CSS Foundation
   - Module 2: Navbar + Hero
   - Module 3: Services + Standards
   - Module 4: Who We Help + Training
   - Module 5: Process + Contact + Footer
6. JavaScript Functionality
7. Third-Party Integrations
8. Deployment & Hosting
9. Future Enhancements
10. Maintenance Guide

---

## 1. PROJECT OVERVIEW

### Purpose
GSRAutotech is a professional single-page website for an automotive cybersecurity consultancy. The site targets OEMs, Tier 1 suppliers, Tier 2 suppliers, and startups in the automotive industry who need cybersecurity compliance consulting and training.

### Business Goals
- Generate leads via contact form
- Showcase services and expertise
- Establish credibility with standards coverage
- Provide training enquiry channel
- Act as digital presence before domain purchase

### Target Audience
- OEM automotive companies
- Tier 1 and Tier 2 automotive suppliers
- Automotive startups building connected products
- Individual engineers seeking training

### Key Features
- Fully responsive (mobile, tablet, desktop)
- Animated hero section with floating metrics
- 7 content sections covering all business areas
- Working contact form with email delivery
- Smooth scroll navigation
- Scroll reveal animations
- Mobile hamburger menu
- Free hosting on Netlify
- Code backed up on GitHub

---

## 2. TECHNOLOGY STACK

| Layer | Technology | Reason |
|-------|-----------|--------|
| Markup | HTML5 | Standard, no framework needed |
| Styling | CSS3 + Custom Variables | Full control, no dependencies |
| Interactivity | Vanilla JavaScript | Zero dependencies, fast load |
| Fonts | Google Fonts (Syne + DM Sans) | Free, premium look |
| Form Backend | Formspree | Free tier, easy setup |
| Version Control | Git + GitHub | Code backup + history |
| Hosting | Netlify | Free tier, auto-deploy from GitHub |
| Editor | VS Code + Live Server | Free, industry standard |

### Why No Framework?
- Zero build process required
- Loads instantly — no React/Vue bundle
- Easy to maintain and hand off
- Anyone can open and edit the files directly
- Perfect for a static consultancy website

---

## 3. PROJECT STRUCTURE

```
gsrautotech/
│
├── index.html              ← Complete single-page website
│
├── styles/
│   ├── theme.css           ← Brand colors, fonts, CSS variables
│   ├── base.css            ← Reset, typography, layout utilities
│   ├── components.css      ← Navbar, buttons, cards, badges, footer
│   └── sections.css        ← Page-specific section styles
│
├── scripts/
│   └── main.js             ← All JavaScript interactions
│
└── assets/
    └── icons/              ← (Reserved for future SVG icons)
```

### File Responsibilities

**index.html**
- Contains all HTML for all 7 sections
- Links to all CSS files and JS file
- Contains SEO meta tags
- Single file = single page website

**theme.css**
- All CSS custom properties (variables)
- Brand colors, fonts, spacing, shadows
- THE ONLY FILE that changes per client
- Swap this file to create a new brand

**base.css**
- CSS reset (removes browser defaults)
- Typography scale (h1-h4, p)
- Layout utilities (container, grid, flex)
- Reveal animation base classes
- Never changes between clients

**components.css**
- Navbar component styles
- Button variants (primary, outline, ghost)
- Card component styles
- Badge component styles
- Form input styles
- Footer styles
- Reused across any future client site

**sections.css**
- Hero section styles
- Services section styles
- Standards grid styles
- Who We Help card styles
- Training section styles
- Process timeline styles
- Contact glow panel styles

**main.js**
- Navbar scroll effect
- Mobile hamburger menu
- Scroll reveal animations
- Smooth anchor scrolling
- Contact form AJAX submission
- Process line animation

---

## 4. REUSABLE ARCHITECTURE

This project is built as a **template system**. To create a new client website:

### What to change per client:
| File | Change |
|------|--------|
| `theme.css` | Colors, fonts, brand name |
| `index.html` | All content, text, sections |
| `sections.css` | Layout adjustments if needed |

### What NEVER changes:
| File | Reason |
|------|--------|
| `base.css` | Universal reset + utilities |
| `components.css` | UI components are theme-driven |
| `main.js` | All logic is content-agnostic |

### CSS Variable System
All colors and design tokens are defined in `theme.css`:

```css
--color-bg          → Page background
--color-surface     → Card backgrounds
--color-accent      → Primary brand color (cyan)
--color-amber       → Secondary accent
--color-text        → Body text color
--color-text-muted  → Subdued text
--font-display      → Heading font (Syne)
--font-body         → Body font (DM Sans)
--radius-lg         → Card border radius
--transition        → Animation easing
```

To rebrand for another client — change only these values in `theme.css`.

---

## 5. MODULE-BY-MODULE DOCUMENTATION

---

### MODULE 1: CSS Foundation

**Purpose:** Establish the complete design system before any visible content is built.

**Files Created:**
- `styles/theme.css`
- `styles/base.css`
- `styles/components.css`
- `styles/sections.css`
- `scripts/main.js`

**Design Decisions:**

*Color Palette:*
- Deep navy `#070D1A` — background, conveys security/trust
- Electric cyan `#00C4FF` — primary accent, technology feel
- Amber `#F5A623` — secondary accent, warnings/highlights
- Success green `#00D68F` — positive states

*Typography:*
- Syne (display) — geometric, bold, modern for headings
- DM Sans (body) — clean, readable, professional for content

*Spacing System:*
- Uses CSS `clamp()` for fluid responsive sizing
- No fixed breakpoint jumps — smooth scaling

**Test Criteria:** ✅
- Dark navy background visible
- Cyan heading color visible
- Syne font loading from Google Fonts
- No console errors

---

### MODULE 2: Navbar + Hero

**Purpose:** First impression — brand identity, navigation, and core value proposition.

**HTML Sections:** `<nav class="navbar">`, `<section id="hero">`

**Navbar Features:**
- Fixed position — stays at top while scrolling
- Transparent on page load
- Frosted glass effect when scrolled (backdrop-filter blur)
- Logo with shield SVG icon
- Navigation links with underline hover animation
- "Book Free Consultation" CTA button
- Mobile hamburger menu (hidden on desktop)
- Animated hamburger → X icon on open
- All links smooth scroll to sections

**Hero Features:**
- Full viewport height (100vh)
- Dot grid background pattern
- Two ambient glow effects (cyan + amber)
- Left column: badge, headline, subtitle, CTA buttons, standards badges
- Right column: animated shield SVG, 3 floating metric cards
- Gradient headline (cyan → purple → green)
- Floating card animation (up/down loop)
- Shield floating animation
- Pulse ring animations around shield
- Responsive: right column hides on mobile

**Metrics Displayed:**
- 100+ Projects Guided
- 12 Standards Covered
- 100% Type Approval Rate

**Standards Badges Row:**
- ISO 21434, UN R155, UN R156, WP.29, ASPICE, ISO 26262

**CTA Buttons:**
- Primary: "Book Free Consultation" → scrolls to #contact
- Ghost: "Explore Services" → scrolls to #services

**Test Criteria:** ✅
- Navbar transparent on load, frosted on scroll
- Shield animates up/down
- Floating metric cards animate
- Hamburger appears on mobile (< 768px)
- Menu opens/closes with animation
- All nav links scroll to correct sections

---

### MODULE 3: Services + Standards

**Purpose:** Communicate what the consultancy does and which regulations it covers.

**HTML Sections:** `<section id="services">`, `<section id="standards">`

**Services Section:**
- Dark background (section--dark)
- Section header with label + h2 + description
- 3-column grid of 6 service cards
- First card is "featured" — has cyan top border glow
- Each card: icon box, heading, divider, description, arrow list

**6 Services:**
1. Compliance & Gap Analysis — ISO 21434, UN R155/R156
2. TARA & HARA Development — threat modeling, risk assessment
3. Type Approval Documentation — CSMS/SUMS, evidence packages
4. Product Security Hardening — secure boot, OTA security
5. CSMS & SUMS Implementation — policy design, architecture
6. Embedded Consulting — project-embedded security lead

**Card Hover Effect:**
- Lifts up 4px (translateY)
- Border color brightens to cyan
- Box shadow appears

**Standards Section:**
- Light background (default bg)
- Grid layout with 1.5px gap (creates divider lines between cells)
- Each cell: standard code (cyan), badge, h4 title, description

**6 Standards:**
1. ISO 21434 — Road Vehicles Cybersecurity Engineering (Core)
2. UN R155 — Cyber Security & CSMS (Regulation)
3. UN R156 — Software Update & SUMS (Regulation)
4. WP.29 — UNECE World Forum (Framework)
5. ASPICE — Automotive SPICE (Process)
6. ISO 26262 — Functional Safety (Safety)

**Test Criteria:** ✅
- 6 cards in 3-column grid on desktop
- Cards collapse to 2-column on tablet
- Cards collapse to 1-column on mobile
- Hover lift effect on each card
- Featured card has cyan top border
- Standards grid shows divider lines

---

### MODULE 4: Who We Help + Training

**Purpose:** Qualify visitors and showcase training offering as a revenue stream.

**HTML Sections:** `<section id="who-we-help">`, `<section id="training">`

**Who We Help Section:**
- Accent background (slightly lighter navy)
- 2-column grid of 4 client type cards
- Each card: large emoji icon, heading, description, tag badges
- Cards have horizontal layout (icon left, content right)
- Hover: lift + cyan border

**4 Client Types:**
1. OEMs — CSMS Setup, Type Approval, Supplier Oversight
2. Tier 1 Suppliers — TARA/HARA, ASPICE Prep, Customer Evidence
3. Tier 2 Suppliers — Component TARA, Secure Design, Requirement Flow-down
4. Startups & New Entrants — Security by Design, Regulatory Readiness

**Training Section:**
- Dark background
- 3-column grid layout
- Column 1: Individual courses card
- Column 2: Corporate training card (featured with cyan top line)
- Column 3: Why our training stands out highlights

**Individual Courses:**
- ISO 21434 Fundamentals (2 days)
- TARA Methodology Workshop (1 day)
- UN R155/R156 for Practitioners
- Secure Coding for Automotive
- Certificate of completion

**Corporate Training:**
- Tailored to product domain
- Hands-on workshops
- Management awareness sessions
- Multi-day bootcamps
- Post-training assessment

**Training Highlights:**
- Automotive-First Content
- Standards-Mapped Curriculum
- Practitioner-Led

**Test Criteria:** ✅
- 4 who we help cards in 2-column grid
- Training 3-column layout on desktop
- Corporate card has cyan top border
- All buttons scroll to contact form
- Collapses to 1-column on mobile

---

### MODULE 5: Process + Contact + Footer

**Purpose:** Show how to engage, capture leads, and provide complete site navigation.

**HTML Sections:** `<section id="process">`, `<section id="contact">`, `<footer>`

**Process Section:**
- White/default background
- 4-column horizontal layout
- Animated connecting line between steps
- Each step: icon circle with cyan number badge, title, description, badge

**4 Process Steps:**
1. Discovery Call — Free 30-minute session (📞)
2. Assessment & Scoping — Compliance roadmap (🔎)
3. Execution & Delivery — TARA, CSMS docs (⚡)
4. Review & Handover — Final package + transfer (🏁)

**Connecting Line Animation:**
- Gray base line always visible
- Cyan line animates from left to right
- Triggered when section enters viewport (IntersectionObserver)
- CSS transition: width 0% → 70% over 1.5 seconds

**Icon Circle Hover:**
- Border turns cyan
- Background fills with cyan-dim
- Glow shadow appears
- Lifts 4px

**Contact Section — Glow Panel Design:**

*Left Panel (Glow Panel):*
- Dark card with gradient background
- Cyan glow top border
- Ambient glow in top-right corner
- Animated shield SVG (same as hero)
- Pulse rings around shield
- GET IN TOUCH label + headline
- Stats bar: 24h Response / 100+ Projects / Free First Call
- Contact channels: email + location

*Right Panel (Form):*
- Dark card with border
- Form header: title + subtitle
- Fields: Name, Company (2-col), Email (full), Org Type + Interest (2-col), Message (full)
- Submit button: full width cyan
- Privacy note below button

**Form Submission Flow:**
1. User fills form and clicks Send
2. JavaScript intercepts submit event
3. Fetch POST request to Formspree endpoint
4. Button shows "Sending..." state
5. On success: button turns green "✓ Message Sent!", form resets
6. On error: button shows "Error — try again"
7. Formspree sends email to configured address

**Footer — 3 Part Structure:**

*Top CTA Bar:*
- Dark card background with glow
- Cyan top border line
- Left: "Ready to secure your automotive future?" headline
- Right: "Book Free Consultation →" button

*Main Grid:*
- 4-column grid: Brand (2fr) + Services + Training + Company
- Brand: logo, description, ISO/UN badges
- Services: 6 links
- Training: 5 links
- Company: 4 links
- Link hover: slides right with cyan dot indicator

*Bottom Bar:*
- Copyright notice
- Standards list (ISO 21434 · UN R155 · UN R156 · WP.29 · ASPICE)
- Location

**Test Criteria:** ✅
- Process line animates on scroll
- Icon circles glow on hover
- Contact form submits to Formspree
- Email received at configured address
- Footer links scroll to correct sections
- Footer responsive on mobile

---

## 6. JAVASCRIPT FUNCTIONALITY

**File:** `scripts/main.js`

### Feature 1: Navbar Scroll Effect
```
Trigger: window scroll event
Action: adds/removes 'scrolled' class at 20px scroll
Effect: navbar background changes from transparent to frosted glass
```

### Feature 2: Mobile Hamburger Menu
```
Trigger: hamburger button click
Action: toggles 'open' class on mobile nav panel
Effect: menu slides into view, icon animates to X
Also: clicking any link closes the menu
```

### Feature 3: Scroll Reveal Animations
```
Trigger: IntersectionObserver (elements entering viewport)
Threshold: 10% visible
Action: adds 'visible' class to .reveal elements
Effect: elements fade in and slide up from 28px below
Delays: reveal-delay-1 (0.1s), -2 (0.2s), -3 (0.3s)
```

### Feature 4: Smooth Scroll
```
Trigger: click on any a[href^="#"] link
Action: preventDefault, calculates target position
Offset: 80px (navbar height)
Effect: smooth scroll to section
```

### Feature 5: Contact Form AJAX
```
Trigger: form submit event
Method: Fetch API POST to Formspree endpoint
Headers: Accept: application/json
Body: FormData from form fields
Success: green button, form reset, 3s timeout
Failure: error message on button
```

### Feature 6: Process Line Animation
```
Trigger: IntersectionObserver on #processSteps
Threshold: 30% visible
Action: adds 'line-animate' class
Effect: CSS transition animates line width from 0 to 70%
Duration: 1.5 seconds
```

---

## 7. THIRD-PARTY INTEGRATIONS

### Google Fonts
- **URL:** fonts.googleapis.com
- **Fonts:** Syne (600,700,800) + DM Sans (300,400,500,600)
- **How:** @import in theme.css
- **Cost:** Free
- **Impact:** Loads on page open, may add ~100ms on first load

### Formspree
- **URL:** formspree.io
- **Form ID:** xpqbbqyv
- **Endpoint:** https://formspree.io/f/xpqbbqyv
- **Free Tier:** 50 submissions/month
- **Configured Email:** saikumarreddy1000@gmail.com
- **How it works:** Form POST → Formspree → Email notification
- **Upgrade needed when:** More than 50 enquiries/month

---

## 8. DEPLOYMENT & HOSTING

### Local Development
```
Editor:     VS Code
Extension:  Live Server (Ritwick Dey)
URL:        http://127.0.0.1:5500
Refresh:    Automatic on file save
```

### Version Control
```
Platform:   GitHub
Repo:       github.com/saikumarreddy-vastramAI/gsrautotech
Branch:     master
Push cmd:   git add . && git commit -m "message" && git push
```

### Production Hosting
```
Platform:   Netlify (free tier)
Site name:  gsrautotech
URL:        https://gsrautotech.netlify.app
Deploy:     Automatic on GitHub push
Build time: ~5 seconds
```

### Deploy Process
```
1. Make changes in VS Code
2. Save files (Ctrl+S)
3. git add .
4. git commit -m "description of change"
5. git push
6. Netlify auto-detects push
7. Deploys in ~30 seconds
8. Live at gsrautotech.netlify.app
```

### Adding Custom Domain (Future)
```
1. Buy gsrautotech.com on Namecheap (~₹900/yr)
2. In Netlify → Domain management → Add domain
3. Copy Netlify nameservers
4. In Namecheap → update nameservers
5. Wait 24-48 hours for DNS propagation
6. Site live at gsrautotech.com with free HTTPS
```

---

## 9. FUTURE ENHANCEMENTS

### Phase 2 — Content
- [ ] Blog/Resources section (automotive cybersecurity articles)
- [ ] Case studies section with project examples
- [ ] About/Team section with founder photo
- [ ] Testimonials section

### Phase 3 — Functionality  
- [ ] Calendly integration for booking discovery calls
- [ ] WhatsApp chat widget
- [ ] Google Analytics tracking
- [ ] Cookie consent banner

### Phase 4 — Technical
- [ ] SEO: sitemap.xml, robots.txt
- [ ] Performance: lazy loading images
- [ ] PWA: offline capability
- [ ] Multi-language support (English + German for EU market)

### Phase 5 — Business
- [ ] Custom domain gsrautotech.com
- [ ] Custom email info@gsrautotech.com (Zoho Mail free)
- [ ] Formspree upgrade for custom email template
- [ ] LinkedIn company page linked

---

## 10. MAINTENANCE GUIDE

### How to Update Content
1. Open VS Code
2. Open `index.html`
3. Find the section you want to change (use Ctrl+F to search)
4. Edit the text
5. Save (Ctrl+S) — Live Server shows change instantly
6. Push to GitHub → auto-deploys to Netlify

### How to Change Colors
1. Open `styles/theme.css`
2. Change the relevant CSS variable value
3. Change applies to entire site instantly
4. Push to deploy

### How to Add a New Service Card
1. Open `index.html`
2. Find `<section id="services">`
3. Copy an existing `<div class="card">` block
4. Paste it
5. Change the icon, heading, description, list items
6. Save and push

### How to Check Form Submissions
1. Login to formspree.io
2. Click GSRAutotech Contact form
3. Click Submissions tab
4. All submissions are stored here as backup

### How to Check Site Analytics
- Currently no analytics set up
- To add: create free account at plausible.io
- Add one line of script to index.html
- See visitor counts, pages, countries

### Emergency Contact
If site goes down:
1. Check Netlify status at netlify.com
2. Check GitHub repo is intact
3. Re-deploy from Netlify dashboard → Deploys → Trigger deploy

---

## APPENDIX — DESIGN SYSTEM REFERENCE

### Color Reference
| Variable | Hex | Usage |
|----------|-----|-------|
| --color-bg | #070D1A | Page background |
| --color-bg-alt | #0C1526 | Alternate sections |
| --color-surface | #101E35 | Cards, panels |
| --color-surface-2 | #162440 | Elevated cards |
| --color-accent | #00C4FF | Primary CTA, highlights |
| --color-amber | #F5A623 | Secondary, warnings |
| --color-success | #00D68F | Success states |
| --color-text | #E8F0FE | Primary text |
| --color-text-muted | #7A9BBF | Secondary text |
| --color-text-faint | #3A5070 | Placeholder, subtle |

### Typography Reference
| Element | Font | Size | Weight |
|---------|------|------|--------|
| h1 | Syne | clamp(2.4rem, 5vw, 4rem) | 800 |
| h2 | Syne | clamp(1.8rem, 3.5vw, 2.8rem) | 700 |
| h3 | Syne | clamp(1.2rem, 2vw, 1.5rem) | 600 |
| p | DM Sans | clamp(0.95rem, 1.5vw, 1.05rem) | 400 |
| label | DM Sans | 0.75rem | 700 |
| badge | DM Sans | 0.75rem | 600 |

### Breakpoints
| Breakpoint | Value | Effect |
|------------|-------|--------|
| Mobile | < 600px | Single column |
| Tablet | < 900px | 2-column grids |
| Desktop | > 900px | Full layout |
| Navbar mobile | < 768px | Hamburger menu |

---

*Document prepared by Sai Kumar Reddy*  
*GSRAutotech Website v1.0 — May 2025*
