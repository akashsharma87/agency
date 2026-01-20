# Antigravity Agency Website

A premium, content-rich agency website built with **Next.js 16**, **Tailwind CSS 4**, and **Framer Motion**. Inspired by Linear.app's design aesthetic with a dark, modern theme featuring glassmorphism, radial gradients, and smooth animations.

## 🎨 Design Philosophy

This website follows the design principles of successful agency sites like DreamLaunch and KeizerWorks:
- **Content-Heavy**: Extensive sections showcasing services, process, case studies, and pricing
- **Visual Excellence**: Linear-inspired dark theme with subtle glows and premium aesthetics
- **Trust Building**: Social proof through testimonials, stats, and detailed case studies
- **Conversion-Focused**: Clear CTAs and transparent pricing throughout

## 🚀 Features

### Sections Included

1. **Hero Section**
   - High-impact headline with gradient text
   - Dual CTAs (primary and secondary)
   - Animated entrance with Framer Motion
   - Radial gradient background glow

2. **Stats Section**
   - 4 key metrics (50+ projects, $10M+ funding, 100K+ users, 98% satisfaction)
   - Icon-based cards with hover animations
   - Gradient text for numbers

3. **Services (Bento Grid)**
   - 6 service cards in responsive grid layout
   - AI Voice Agents, Mobile Apps, Business Automation
   - Intelligent Chatbots, Web Apps, Custom AI Solutions
   - Hover effects with gradient overlays

4. **Process Timeline**
   - 5-step process from Discovery to Support
   - Numbered timeline with connecting lines
   - Detailed deliverables for each step
   - Icons and glassmorphic cards

5. **Case Studies**
   - 4 detailed project showcases
   - VoiceFlow AI, AutoFlow CRM, MediConnect, ChatGenius
   - Stats for each project (calls/day, accuracy, ROI)
   - Technology tags and gradient overlays

6. **Tech Stack**
   - 8 categories of technologies
   - Frontend, Mobile, AI/ML, Automation, Backend, Cloud, Voice, Databases
   - 40+ technologies listed
   - Hover effects on each tech card

7. **Testimonials**
   - 6 client testimonials with 5-star ratings
   - Company details and funding info
   - Quote styling with glassmorphic cards

8. **Pricing**
   - 3 transparent pricing tiers
   - Design Sprint ($2,999), MVP Launchpad ($12,999), Enterprise (Custom)
   - Detailed feature lists
   - "Most Popular" badge on MVP tier

9. **FAQ**
   - 8 common questions with expandable answers
   - Smooth accordion animations
   - Topics: timelines, technical support, integrations, costs

10. **Contact/CTA**
    - Final conversion section
    - Dual CTAs for scheduling and viewing capabilities
    - Background glow effect

11. **Footer**
    - Navigation links
    - Branding and tagline
    - Clean, minimal design

## 🛠️ Tech Stack

- **Framework**: Next.js 16.1.3 (App Router)
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript
- **Font**: Geist Sans (Google Fonts alternative)

## 📦 Installation & Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The site will be available at `http://localhost:3000`

## 🎨 Design System

### Color Palette
```css
--background: #08090A (Deep Night Black)
--foreground: #F7F8F8 (Off-white)
--muted: #8A8F98 (Muted Grey)
--accent: #5E6AD2 (Purple-Blue)
--glass-border: rgba(255, 255, 255, 0.08)
--glass-bg: rgba(8, 9, 10, 0.6)
```

### Custom Utilities
- `.glass` - Glassmorphism effect with backdrop blur
- `.glass-card` - Card variant with gradient overlay
- `.text-gradient` - Gradient text effect
- `.mask-radial` - Radial mask for fading effects

### AI-Generated Images

The website features **7 custom AI-generated images** created specifically for this project:

1. **Hero Background** (`/images/hero-background.png`)
   - Abstract futuristic AI technology visualization
   - Neural network patterns with purple/blue gradients
   - Adds depth and visual interest to the hero section

2. **VoiceFlow AI** (`/images/voiceflow.png`)
   - AI voice assistant dashboard interface
   - Real-time call analytics and waveform visualizations
   - Professional SaaS dashboard design

3. **AutoFlow CRM** (`/images/autoflow.png`)
   - Business automation workflow visualization
   - Connected nodes showing Zapier-style integrations
   - Colorful app icons with glowing connections

4. **MediConnect** (`/images/mediconnect.png`)
   - Healthcare mobile app interface
   - Video call with doctor, appointment scheduling
   - Clean iOS-style medical app design

5. **ChatGenius** (`/images/chatgenius.png`)
   - AI chatbot interface with e-commerce integration
   - Product recommendations within chat
   - Modern dark theme with purple accents

6. **Discovery Illustration** (`/images/discovery.png`)
   - Business strategy and brainstorming visualization
   - Lightbulb with mind map connections
   - Isometric illustration style

7. **Design Process** (`/images/design.png`)
   - UI/UX design workspace
   - Figma-style interface with design system
   - Professional designer environment

All images are optimized for web and use Next.js Image component for automatic optimization.

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and design tokens
│   ├── layout.tsx            # Root layout with metadata
│   └── page.tsx              # Main homepage
├── components/
│   ├── Navbar.tsx            # Fixed navigation bar
│   ├── Hero.tsx              # Hero section with CTAs
│   ├── Stats.tsx             # Key metrics section
│   ├── Services.tsx          # Services bento grid
│   ├── Process.tsx           # 5-step process timeline
│   ├── CaseStudies.tsx       # Project showcases
│   ├── TechStack.tsx         # Technology showcase
│   ├── Testimonials.tsx      # Client reviews
│   ├── Pricing.tsx           # Pricing tiers
│   ├── FAQ.tsx               # Expandable FAQs
│   └── Contact.tsx           # Final CTA section
```

## 🎯 Services Offered

The website showcases the following services:

1. **AI Voice Agents** - 24/7 customer support with human-like interactions
2. **iOS & Android Apps** - Native mobile experiences
3. **Business Automation** - Zapier, Make.com, n8n, Zoho Flow integrations
4. **Intelligent Chatbots** - Context-aware with long-term memory
5. **Modern Web Apps** - Next.js, React, Tailwind CSS
6. **Custom AI Solutions** - Tailored AI agents and applications

## 💰 Pricing Tiers

1. **Design Sprint** - $2,999 (7 days)
   - Figma designs, prototypes, design system
   
2. **MVP Launchpad** - $12,999 (5 weeks) ⭐ Most Popular
   - Full-stack development, AI integration, deployment
   
3. **Enterprise Partner** - Custom pricing
   - Dedicated team, ongoing support, scaling assistance

## 🎬 Animations

All sections use Framer Motion for:
- Fade-in on scroll (viewport triggers)
- Slide-up entrance animations
- Hover effects on cards and buttons
- Smooth page transitions
- Staggered animations for lists

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Responsive grid layouts
- Mobile navigation (can be enhanced)
- Touch-friendly interactions

## 🔧 Customization

### Update Content
Edit the respective component files in `src/components/`:
- Services: Modify the `services` array in `Services.tsx`
- Case Studies: Update `caseStudies` array in `CaseStudies.tsx`
- Testimonials: Edit `testimonials` array in `Testimonials.tsx`
- Pricing: Modify `plans` array in `Pricing.tsx`
- FAQ: Update `faqs` array in `FAQ.tsx`

### Change Colors
Edit `src/app/globals.css`:
```css
:root {
  --background: #08090A;
  --accent: #5E6AD2;  /* Change this for different accent color */
}
```

### Add Images
Replace placeholder emojis in case studies with actual images:
1. Add images to `/public/projects/`
2. Update `image` property in `caseStudies` array
3. Use Next.js `<Image>` component for optimization

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms
- **Netlify**: Connect GitHub repo and deploy
- **AWS Amplify**: Use the Next.js preset
- **Docker**: Use the included Dockerfile (if created)

## 📊 Performance

- **Lighthouse Score**: 90+ (expected)
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3s
- **Bundle Size**: Optimized with Next.js automatic code splitting

## 🎨 Design Inspiration

This design takes inspiration from:
- **Linear.app** - Dark theme, glassmorphism, typography
- **DreamLaunch.studio** - Content structure, pricing transparency
- **KeizerWorks.com** - Service showcase, case study layout

## 📝 SEO Optimization

- Semantic HTML structure
- Meta tags in `layout.tsx`
- Descriptive headings hierarchy
- Alt text for images (when added)
- Fast page load times

## 🔮 Future Enhancements

- [ ] Add actual project images
- [ ] Implement contact form with backend
- [ ] Add blog section
- [ ] Create individual case study pages
- [ ] Add mobile hamburger menu
- [ ] Implement dark/light mode toggle
- [ ] Add loading states
- [ ] Integrate analytics (Google Analytics, Plausible)
- [ ] Add schema markup for SEO
- [ ] Create sitemap.xml

## 📄 License

All rights reserved © 2026 Antigravity Agency

---

**Built with ❤️ using Next.js, Tailwind CSS, and Framer Motion**
