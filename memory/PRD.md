# EcomPilot — Static Marketing Site (PRD)

## Overview
Static multi-page HTML/CSS/JS marketing site for EcomPilot (Amazon Seller Central management agency). No backend framework in use; pages are plain HTML served as static files. Shared `styles.css` and `script.js`.

## Pages
- index.html (Home), about.html, services.html, packages.html, contact.html, blog.html, blog-post.html, thank-you.html, 404.html
- Navigation order (all pages): Home, About Us, Services, Packages, Blog, Contact Us + Free Consultation button

## Work Log
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
