# EcomPilot — Static Marketing Site (PRD)

## Overview
Static multi-page HTML/CSS/JS marketing site for EcomPilot (Amazon Seller Central management agency). No backend framework in use; pages are plain HTML served as static files. Shared `styles.css` and `script.js`.

## Pages
- index.html (Home), about.html, services.html, packages.html, contact.html, blog.html, blog-post.html, thank-you.html, 404.html
- Navigation order (all pages): Home, About Us, Services, Packages, Blog, Contact Us + Free Consultation button

## Work Log
- 2025: Populated blog with the TWO uploaded client articles (replaced all sample posts):
  1. "How to Lower Your Amazon Order Defect Rate (ODR)" — slug how-to-lower-amazon-order-defect-rate (Account Health)
  2. "How to Reduce Amazon A-to-Z Guarantee Claims" — slug how-to-reduce-amazon-a-to-z-guarantee-claims (Customer Support)
  - Content professionally rewritten (grammar/flow/tone) from the .docx files without changing meaning. Added per-post seoTitle + metaDescription; H2/H3 headings, checkmark bullet lists, conclusion, FAQ. Post template now shows estimated reading time (auto-computed from word count). Fixed Load More visibility (was overridden by .button display).

- 2025: Updated pricing packages (Basic $100/7d, Standard $300/15d, Premium $750/30d) with new feature lists.
- Created about.html; removed homepage "About Us" and "Why Choose Us" sections; removed hero-ribbon specialist items.
- Added Blog:
  - `blog-data.js` — blog content separated from layout (`window.ECOMPILOT_BLOG.posts`), backend/CMS-ready (swap array for fetch()).
  - `blog.html` — hero + dynamic listing (cards: image, title, excerpt, date, Read More), search, category filter chips, Load More pagination (PAGE_SIZE=3).
  - `blog-post.html` — reusable template rendered by `?slug=`; featured image, title, author, date, content, related posts, Back to Blog. Sets dynamic SEO title + meta description; semantic article/section/header; h2 subheadings.
  - Appended scoped blog CSS to styles.css (new classes only, existing untouched). Responsive at 1020/760px.

## Notes
- Blog cards/posts render on DOMContentLoaded (after deferred blog-data.js).
- Placeholder featured images use Unsplash URLs.
- To make dynamic: replace ECOMPILOT_BLOG.posts with API response of same shape.

## Backlog / Next
- Optional: real backend (FastAPI+Mongo) blog CRUD + admin.
- Optional: add Blog link to footer "Explore" column.
- Optional: per-post static meta (SSR/prerender) for stronger SEO.
