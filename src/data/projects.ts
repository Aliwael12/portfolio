export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  blurb: string;
  stack: string[];
  links: ProjectLink[];
  image?: string;
  /** portrait phone screenshots instead of a single wide shot */
  phones?: string[];
};

export const featured: Project[] = [
  {
    slug: "kavo",
    title: "Kavo Studio",
    category: "Brand Site",
    year: "2026",
    blurb:
      "A cinematic single-page site for a maker of marble furniture. Scroll-driven storytelling with GSAP ScrollTrigger pinning, parallax and a horizontal materials gallery, over smooth Lenis inertia scrolling.",
    stack: ["Next.js 16", "TypeScript", "Tailwind v4", "GSAP", "Framer Motion", "Lenis"],
    links: [{ label: "GitHub", href: "https://github.com/Aliwael12/kavo" }],
    image: "/shots/kavo.jpg",
  },
  {
    slug: "galini",
    title: "Galini",
    category: "E-Commerce",
    year: "2026",
    blurb:
      "A stationery storefront built as a literal notebook — the site loads as a closed, spiral-bound book on a warm desk; every store section is a paper spread, and navigation turns the page with a 3D paper-curl. Full browse → cart → checkout flow.",
    stack: ["Next.js 14", "TypeScript", "Tailwind", "CSS 3D"],
    links: [
      { label: "Live", href: "https://galini-website.vercel.app" },
      { label: "GitHub", href: "https://github.com/Aliwael12/galini-website" },
    ],
    image: "/shots/galini.jpg",
  },
  {
    slug: "bamboho",
    title: "BamBoho",
    category: "E-Commerce",
    year: "2026",
    blurb:
      "A slow, editorial storefront for a bohemian home-decor brand — earthy palette, serif display type, scroll reveals, page transitions and parallax sliders inspired by the material-first web.",
    stack: ["Next.js 15", "TypeScript", "Tailwind", "Framer Motion", "Lenis"],
    links: [{ label: "GitHub", href: "https://github.com/Aliwael12/bamboho" }],
    image: "/shots/bamboho.jpg",
  },
  {
    slug: "couponengine",
    title: "CouponEngine",
    category: "Full-Stack Platform",
    year: "2026",
    blurb:
      "A multi-tenant, plug-and-play enterprise couponing engine. Django REST backend with voucher lifecycle, batch generation, QR redemption and campaign management; Next.js frontend with role-based dashboards for customers, merchant staff and platform admins.",
    stack: ["Django 5", "Python", "Next.js", "TypeScript", "Material UI", "TanStack Query", "JWT"],
    links: [
      { label: "Backend", href: "https://github.com/Aliwael12/couponengine-backend" },
      { label: "Frontend", href: "https://github.com/Aliwael12/couponengine-frontend" },
    ],
    image: "/shots/couponengine.jpg",
  },
  {
    slug: "nova",
    title: "Nova",
    category: "Clinical Intelligence Platform",
    year: "2026",
    blurb:
      "A clinical intelligence platform: Express + Prisma backend on Supabase with GPT-4 Vision lab-photo analysis, Whisper transcription, WhatsApp intake via Twilio, and BullMQ background jobs — paired with a Next.js dashboard.",
    stack: ["Node.js", "Express", "Prisma", "Supabase", "OpenAI", "Twilio", "BullMQ", "Next.js"],
    links: [
      { label: "Backend", href: "https://github.com/Aliwael12/nova-backend" },
      { label: "Frontend", href: "https://github.com/Aliwael12/nova-frontend" },
    ],
    image: "/shots/nova.jpg",
  },
  {
    slug: "cue",
    title: "Cue — TV & Movie Tracker",
    category: "iOS App",
    year: "2026",
    blurb:
      "A personal, offline-first TV & movie tracker for iOS — a lightweight TV Time clone. No accounts, no social; all data lives on-device in SQLite, with TheTVDB powering search and metadata. Monochrome, poster-forward design.",
    stack: ["Expo", "React Native", "TypeScript", "Expo Router", "Drizzle ORM", "SQLite", "TheTVDB API"],
    links: [{ label: "GitHub", href: "https://github.com/Aliwael12/tv-show-tracker" }],
    phones: ["/shots/tv-up-next.png", "/shots/tv-library.png", "/shots/tv-detail.png"],
  },
  {
    slug: "compound",
    title: "Compound",
    category: "Multi-Tenant SaaS",
    year: "2026",
    blurb:
      "A white-label resident & community platform for real-estate compounds. One Expo resident app and a super-admin console serve any number of compounds — per-tenant branding, feature toggles and EN/AR with RTL, all driven by config with no rebuilds. Announcements, QR visitor passes, service requests and amenity booking.",
    stack: ["Expo", "React Native", "React", "Vite", "TypeScript", "Firebase"],
    links: [],
    image: "/shots/compound-dash.jpg",
    phones: [
      "/shots/compound-home.png",
      "/shots/compound-visitor.png",
      "/shots/compound-services.png",
    ],
  },
  {
    slug: "cove",
    title: "Cove — El Gouna Marketplace",
    category: "Marketplace App",
    year: "2026",
    blurb:
      "The whole town of El Gouna in one app — browse and order from every vendor, from restaurants to pharmacies to boat trips, with one shared points wallet earned and redeemed anywhere. One-vendor-per-order cart with live points preview, wrapped in a sunlit editorial design with sleek Reanimated motion.",
    stack: ["Expo", "React Native", "TypeScript", "Expo Router", "Reanimated"],
    links: [],
    phones: ["/shots/cove-home.png", "/shots/cove-vendor.png", "/shots/cove-wallet.png"],
  },
];

export const archive: Project[] = [
  {
    slug: "kreateandco",
    title: "Kreate&Co",
    category: "Agency Site",
    year: "2026",
    blurb:
      "Site for a creator-marketing agency bridging brands and content creators — UGC production, influencer campaigns and creator sourcing.",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    links: [
      { label: "Live", href: "https://kreateandco.com" },
      { label: "GitHub", href: "https://github.com/Aliwael12/kreateandcowebsite" },
    ],
    image: "/shots/kreateandco.jpg",
  },
  {
    slug: "abandoned-alley",
    title: "Abandoned Alley",
    category: "Fashion E-Commerce",
    year: "2026",
    blurb:
      "Storefront for a Cairo streetwear brand — “DON'T DIE WONDERING.” Drop-based releases, editorial product pages, global shipping.",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    links: [
      { label: "Live", href: "https://abandonedalley.com" },
      { label: "GitHub", href: "https://github.com/Aliwael12/abandoned-alley" },
    ],
    image: "/shots/abandoned-alley.jpg",
  },
  {
    slug: "baby-tracker",
    title: "Baby Tracker",
    category: "Web App + Mobile",
    year: "2026",
    blurb:
      "A mobile-first tracker for new parents — feeds, pumps, sleep, diapers and growth charts — with a companion mobile app.",
    stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind v4"],
    links: [
      { label: "Web GitHub", href: "https://github.com/Aliwael12/baby-tracker-website" },
      { label: "App GitHub", href: "https://github.com/Aliwael12/baby-tracker-app" },
    ],
    image: "/shots/baby-tracker.jpg",
    phones: ["/shots/baby-tracker-app.png"],
  },
  {
    slug: "silverarrow-crm",
    title: "Silver Arrow CRM",
    category: "Internal Tool",
    year: "2026",
    blurb:
      "A sales CRM for Silver Arrow — pipeline management, lead tracking and reporting on a Supabase backend.",
    stack: ["React", "Vite", "TypeScript", "Supabase"],
    links: [{ label: "GitHub", href: "https://github.com/Aliwael12/silverarrow-crm" }],
    image: "/shots/silverarrow-crm.jpg",
  },
  {
    slug: "kreateandco-crm",
    title: "Kreate&Co Sales CRM",
    category: "Internal Tool",
    year: "2026",
    blurb:
      "Internal sales CRM for Kreate&Co — deal pipeline, activity tracking and analytics, backed by Supabase with row-level security.",
    stack: ["React", "Vite", "TypeScript", "Supabase", "PLpgSQL"],
    links: [
      { label: "Live", href: "https://kreateandco-sales-crm.vercel.app" },
      { label: "GitHub", href: "https://github.com/Aliwael12/kreateandco-sales-crm" },
    ],
    image: "/shots/kreateandco-crm.jpg",
  },
  {
    slug: "spotify-clone",
    title: "Spotify Clone",
    category: "Full-Stack App",
    year: "2024",
    blurb:
      "A full-stack Spotify replica with real music playback through Spotify's Web API and Web Playback SDK — search, playlists and library.",
    stack: ["React", "Node.js", "Express", "Spotify Web API"],
    links: [{ label: "GitHub", href: "https://github.com/Aliwael12/spotify-clone" }],
    image: "/shots/spotify-home.svg",
  },
  {
    slug: "saree3an",
    title: "Saree3an",
    category: "Healthcare Platform",
    year: "2025",
    blurb:
      "An emergency healthcare platform (سريعاً): ambulance requests, doctor home visits, at-home lab tests and medical history — Flutter app plus a multilingual React web platform.",
    stack: ["Flutter", "Firebase", "React", "Material UI", "Tailwind"],
    links: [
      { label: "App GitHub", href: "https://github.com/Aliwael12/saree3an-medicalservices-app" },
      { label: "Web GitHub", href: "https://github.com/Aliwael12/saree3an-medicalservices-website" },
    ],
    image: "/shots/saree3an-web.jpg",
    phones: [
      "/shots/saree3an-home.svg",
      "/shots/saree3an-ambulance.svg",
      "/shots/saree3an-doctor.svg",
    ],
  },
  {
    slug: "kheir",
    title: "Kheir",
    category: "Charity Platform",
    year: "2025",
    blurb:
      "A charity management platform — donation boxes, urgent cases, critical alerts and donor messaging — as a Flutter app with a React + Firebase admin dashboard.",
    stack: ["Flutter", "Firebase", "React"],
    links: [
      { label: "App GitHub", href: "https://github.com/Aliwael12/Kheir-charity-app" },
      { label: "Web GitHub", href: "https://github.com/Aliwael12/Kheir-charity-website" },
    ],
    image: "/shots/kheir.jpg",
  },
  {
    slug: "leather-defect",
    title: "Leather Defect Detection",
    category: "Computer Vision",
    year: "2025",
    blurb:
      "AI-assisted quality control for leather goods — a YOLOv5 detection pipeline behind a FastAPI service, with a React dashboard and a Flutter app for capture on the factory floor.",
    stack: ["YOLOv5", "FastAPI", "Python", "React", "Flutter"],
    links: [
      { label: "Web GitHub", href: "https://github.com/Aliwael12/Leatherdefectdetectionwebsite" },
      { label: "App GitHub", href: "https://github.com/Aliwael12/Leatherdefectdetectionapp" },
    ],
    image: "/shots/leather-web.jpg",
  },
  {
    slug: "impact",
    title: "Impact",
    category: "Marketing Site",
    year: "2026",
    blurb:
      "Marketing site for Impact, taken through two design iterations to land the right visual direction.",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    links: [
      { label: "GitHub (v2)", href: "https://github.com/Aliwael12/impact-website2" },
      { label: "GitHub (v1)", href: "https://github.com/Aliwael12/impact-website" },
    ],
    image: "/shots/impact2.jpg",
  },
  {
    slug: "nextgen",
    title: "NextGen",
    category: "Site + Mobile App",
    year: "2026",
    blurb:
      "A web presence and companion Flutter app for NextGen — built as a matching pair.",
    stack: ["React", "Vite", "Flutter"],
    links: [
      { label: "Web GitHub", href: "https://github.com/Aliwael12/nextgen_website" },
      { label: "App GitHub", href: "https://github.com/Aliwael12/nextgen_app" },
    ],
    image: "/shots/nextgen.jpg",
  },
  {
    slug: "yoga",
    title: "InHouse Yoga",
    category: "Studio Site",
    year: "2026",
    blurb: "A calm, minimal site for a yoga studio — classes, schedule and booking.",
    stack: ["React", "Vite", "TypeScript"],
    links: [{ label: "GitHub", href: "https://github.com/Aliwael12/yoga-center-website" }],
    image: "/shots/yoga-center.jpg",
  },
  {
    slug: "swirkies",
    title: "Swirkies",
    category: "Brand Site",
    year: "2026",
    blurb: "A playful static one-pager for the Swirkies brand.",
    stack: ["HTML", "CSS", "JavaScript"],
    links: [{ label: "GitHub", href: "https://github.com/Aliwael12/swirkies" }],
    image: "/shots/swirkies.jpg",
  },
  {
    slug: "prayer-times",
    title: "Prayer Times",
    category: "Mobile App",
    year: "2026",
    blurb: "A prayer-times mobile app with location-based timings and notifications.",
    stack: ["Expo", "React Native", "TypeScript"],
    links: [{ label: "GitHub", href: "https://github.com/Aliwael12/prayer-times-app" }],
    phones: ["/shots/prayer-times.png"],
  },
  {
    slug: "argenti",
    title: "Argenti",
    category: "E-Commerce",
    year: "2024",
    blurb: "An e-commerce website for a jewellery brand — catalogue, cart and checkout.",
    stack: ["PHP", "JavaScript", "CSS"],
    links: [{ label: "GitHub", href: "https://github.com/Aliwael12/argenti-jewellerywebsite" }],
    image: "/shots/argenti.jpg",
  },
];

export const allProjects = [...featured, ...archive];
