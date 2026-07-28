/*
 * EcomPilot Blog Data
 * ------------------------------------------------------------------
 * Blog content is kept separate from layout so it can be swapped for a
 * CMS / backend API later without redesigning the pages. To connect a
 * backend, replace `window.ECOMPILOT_BLOG.posts` with a fetch() result
 * that returns the same shape (id, slug, title, excerpt, content, date,
 * author, category, image, tags). The rendering code reads from
 * `window.ECOMPILOT_BLOG` only.
 */
window.ECOMPILOT_BLOG = {
  posts: [
    {
      id: 1,
      slug: "amazon-account-health-checklist",
      title: "The Amazon Account Health Checklist Every Seller Needs",
      excerpt: "A practical weekly routine to keep ODR, late shipment rate, and policy compliance in the green.",
      date: "2025-01-20",
      author: "EcomPilot Team",
      category: "Account Health",
      tags: ["account health", "metrics", "compliance"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=60",
      content: "<p>Your Account Health dashboard is the single most important screen in Seller Central. A small slip in Order Defect Rate or Late Shipment Rate can quietly put your selling privileges at risk.</p><h2>Review these every week</h2><p>Order Defect Rate (ODR), Late Shipment Rate, Valid Tracking Rate, and any new policy notifications. Treat every notification as time-sensitive.</p><h2>Build a repeatable rhythm</h2><p>Set a fixed day each week to audit metrics, clear buyer messages, and document actions taken. Consistency is what keeps accounts stable over the long term.</p>"
    },
    {
      id: 2,
      slug: "inventory-planning-for-q4",
      title: "Inventory Planning: Avoiding Stockouts in Peak Season",
      excerpt: "How to forecast demand, set reorder points, and prevent out-of-stock losses during high-traffic periods.",
      date: "2025-01-14",
      author: "EcomPilot Team",
      category: "Inventory",
      tags: ["inventory", "forecasting", "operations"],
      image: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1000&q=60",
      content: "<p>Running out of stock during peak demand does more than lose sales, it hurts your ranking and momentum. Smart planning starts weeks ahead.</p><h2>Forecast with real data</h2><p>Use your sales velocity and lead times to calculate reorder points. Add a safety buffer for shipping delays.</p><h2>Monitor daily</h2><p>Low-stock alerts and bulk inventory uploads keep your catalog accurate so demand never outpaces supply.</p>"
    },
    {
      id: 3,
      slug: "listing-optimization-basics",
      title: "Listing Optimization Basics That Actually Move Sales",
      excerpt: "Titles, bullets, backend search terms, and images, the fundamentals that improve discoverability.",
      date: "2025-01-08",
      author: "EcomPilot Team",
      category: "Listings",
      tags: ["listings", "seo", "conversion"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=60",
      content: "<p>A well-optimized listing is both discoverable and persuasive. Start with the fundamentals before chasing advanced tactics.</p><h2>Write for search and shoppers</h2><p>Front-load titles with the most relevant keywords, keep bullets benefit-driven, and fill backend search terms without repetition.</p><h2>Images do the selling</h2><p>Clear, high-resolution images with lifestyle context consistently lift conversion.</p>"
    },
    {
      id: 4,
      slug: "handling-a-to-z-claims",
      title: "Handling A-to-Z Claims and Chargebacks Professionally",
      excerpt: "A calm, evidence-based process for responding to claims while protecting your account metrics.",
      date: "2024-12-30",
      author: "EcomPilot Team",
      category: "Customer Support",
      tags: ["claims", "chargebacks", "support"],
      image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=1000&q=60",
      content: "<p>Claims are stressful, but a structured response protects both your customer relationship and your metrics.</p><h2>Respond with evidence</h2><p>Gather tracking, communication history, and proof of delivery before replying. Keep the tone professional and factual.</p><h2>Prevent repeat issues</h2><p>Patterns in claims often point to fixable operational gaps, address the root cause, not just the claim.</p>"
    },
    {
      id: 5,
      slug: "reading-your-mis-reports",
      title: "Reading Your MIS Reports: From Data to Decisions",
      excerpt: "Turn sales, profit, and order reports into a clear weekly view of what to prioritize next.",
      date: "2024-12-18",
      author: "EcomPilot Team",
      category: "Reporting",
      tags: ["reporting", "analytics", "profit"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=60",
      content: "<p>Reports only help if they change what you do next. The goal is a short, honest view of performance.</p><h2>Track the right numbers</h2><p>Sales trend, profit after fees, return rate, and inventory position tell most of the story week to week.</p><h2>Decide and document</h2><p>End every report with two or three actions. Momentum comes from small, consistent decisions.</p>"
    },
    {
      id: 6,
      slug: "when-to-hire-a-virtual-assistant",
      title: "When Should You Hire an Amazon Virtual Assistant?",
      excerpt: "Signs your operation has outgrown DIY management, and how to hand off work without losing control.",
      date: "2024-12-05",
      author: "EcomPilot Team",
      category: "Growth",
      tags: ["virtual assistant", "delegation", "growth"],
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1000&q=60",
      content: "<p>If daily operations are crowding out strategy, it may be time to delegate. The right support frees you to focus on growth.</p><h2>Watch for the signs</h2><p>Missed messages, reactive inventory decisions, and no time for listing improvements all signal overload.</p><h2>Hand off with structure</h2><p>Start with a clear scope, agreed reporting, and secure access. A reliable partner works as an extension of your team.</p>"
    }
  ]
};
