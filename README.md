# Lodhi Pain Clinic \u2014 Physio Rehab Center

A premium, modern, fully responsive React website for **Lodhi Pain Clinic**, built with Dr. Sardar Waris Lodhi's brand assets. Static site, no backend, ready to deploy on Netlify.

---

## Tech Stack

- React 18 + Vite
- Tailwind CSS
- Framer Motion (animations)
- React Router DOM
- React Icons
- React Scroll (smooth in-page navigation)
- React CountUp (animated stats)
- React Intersection Observer
- SwiperJS (gallery & testimonials carousels)
- React Helmet Async (SEO)

No Bootstrap, no Material UI, no Chakra, no Next.js, no backend \u2014 everything is static React.

---

## Project Structure

```
src/
  assets/images/     # Logo, doctor portrait, poster images
  components/        # Navbar, Hero, About, Services, OnlineConsultation,
                      # WhyChooseUs, Conditions, Therapies, Gallery,
                      # Testimonials, FAQ, CTA, Contact, Footer, FloatingButtons
  data/               # Central content: contact info, services, conditions,
                      # therapies, testimonials, FAQs
  hooks/              # useScrollPosition
  pages/              # Home.jsx, NotFound.jsx
  App.jsx
  main.jsx
  index.css
```

All clinic content (WhatsApp number, address, fees, timings) lives in **`src/data/contact.js`** \u2014 edit this one file to update details site-wide.

---

## Getting Started (Local Development)

**Requirements:** Node.js 18+ and npm.

```bash
# 1. Install dependencies
npm install

# 2. Start the local dev server
npm run dev
```

The site will be available at `http://localhost:5173`.

```bash
# 3. Build for production
npm run build

# 4. Preview the production build locally
npm run preview
```

The production build outputs to the `dist/` folder.

---

## Deploying to Netlify

### Option A \u2014 Drag & Drop
1. Run `npm run build` locally.
2. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
3. Drag the generated `dist/` folder into the browser.

### Option B \u2014 Git-based Deploy (recommended)
1. Push this project to a GitHub/GitLab/Bitbucket repository.
2. In Netlify, click **Add new site \u2192 Import an existing project**.
3. Connect your repository.
4. Build settings (already configured in `netlify.toml`):
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Click **Deploy site**.

The included `netlify.toml` also configures SPA redirects (so refreshing on any route works) and long-term caching for assets.

### Option C \u2014 Netlify CLI
```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

---

## Updating Content

| What | Where |
|---|---|
| Clinic name, phone, address, fees, timings, WhatsApp number | `src/data/contact.js` |
| Services list | `src/data/services.js` |
| Conditions treated | `src/data/conditions.js` |
| Therapies & images | `src/data/therapies.js` |
| Testimonials | `src/data/testimonials.js` |
| FAQ | `src/data/faqs.js` |
| Logo / doctor photo / posters | `src/assets/images/` |
| Favicon | `public/favicon.png` |

### Changing the WhatsApp Number
Update `WHATSAPP_NUMBER` at the top of `src/data/contact.js`. All "Book Appointment," "Online Consultation," and floating WhatsApp buttons across the site automatically use this number and their pre-filled messages.

### Adding Real Photos
Drop new images into `src/assets/images/` and import them wherever needed (e.g. `Gallery.jsx`, `Therapies.jsx`, `Hero.jsx`). Prefer `.jpg`/`.webp` for photos to keep load times fast.

---

## Performance Notes

- Images are pre-optimized (compressed JPEGs).
- Vite automatically code-splits vendor, animation, and carousel bundles (see `vite.config.js`).
- Lazy-loading is applied to below-the-fold images (`loading="lazy"`).
- Fonts are loaded with `preconnect` for faster first paint.

For best Lighthouse scores, run `npm run build && npm run preview` and audit the production build, not the dev server.

---

## Accessibility

- Semantic HTML landmarks (`header`, `main`, `footer`, `nav`).
- ARIA labels on icon-only buttons (menu toggle, gallery lightbox, floating buttons, social links).
- Keyboard-navigable interactive elements (accordion, menu, carousels).
- Sufficient color contrast against the primary blue / green palette.

---

## License

This project was built exclusively for Lodhi Pain Clinic. All clinic branding, photos, and content are property of Lodhi Pain Clinic / Dr. Sardar Waris Lodhi.
