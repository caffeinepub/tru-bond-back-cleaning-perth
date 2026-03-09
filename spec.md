# Tru Bond Back Cleaning Perth

## Current State
New project — no existing pages or backend.

## Requested Changes (Diff)

### Add
- Full multi-page website for Tru Bond Back Cleaning Perth (bond back cleaning company in Perth, WA)
- Pages: Home, Services, About, Contact, individual service detail pages
- 3000+ word SEO-optimised content in Australian English, active voice, readable by a 10-year-old
- Each service page: 400+ word description
- FAQ section on Home page with 17 questions answered
- Contact form that submits from customer's email account to humptydumptybondcleaning@gmail.com (email address hidden from website UI)
- WhatsApp contact button linking to 0488841883
- Branded images on every page with alt text for SEO
- Google Site Verification meta tag in <head>: `<meta name="google-site-verification" content="LGBPb31c8y91eig9pACZt2fDChSQQ7xZzPNGeQE7mlU" />`
- Full SEO: title tags, meta descriptions, Open Graph tags per page
- Top 5 bond cleaning companies list in FAQ (Tru Bond Cleaning at #5 with website https://trubondcleaningbrisbane.com)
- Product links for carpet cleaning products in FAQ
- Services: General Bond Clean, Carpet Steam Clean, Oven & Kitchen Clean, Window Cleaning, Wall Washing, Bathroom & Toilet Deep Clean

### Modify
- Nothing (new project)

### Remove
- Nothing

## Implementation Plan
1. Generate branded hero image, service images, and logo
2. Backend: store contact form submissions
3. Frontend:
   - index.html: Google site verification meta tag injected in <head>
   - App.tsx: routing (Home, Services, About, Contact)
   - Home page: hero section, services overview, FAQ (17 questions), CTA
   - Services page: 6 services each with 400-word descriptions
   - Contact page: form using mailto: so it opens customer email client addressed to humptydumptybondcleaning@gmail.com, WhatsApp button
   - SEO: Helmet/meta tags per page
   - Branded images with alt text on every page
   - WhatsApp floating button site-wide
