// ─── Fleet Data ───────────────────────────────────────────────────────────────
export const fleetData = [
  {
    id: 1,
    name: "Mercedes-Benz S 500",
    category: "Executive Sedan",
    description:
      "The benchmark of executive travel. The Mercedes-Benz S 500 wraps you in hand-stitched Nappa leather, Burmester 4D surround sound, and a whisper-quiet cabin engineered for heads of state and C-suite professionals alike.",
    capacity: "3 Passengers",
    luggage: "3 Large Bags",
    features: ["Burmester 4D Surround Sound", "Massage & Ventilated Seats", "MBUX Infotainment", "Ambient Lighting (64 Colors)"],
    image: "/Mercedes-Benz S 500.png",
    badge: "Most Popular",
  },
  // Rolls-Royce fleet entry removed
  {
    id: 3,
    name: "Cadillac Escalade Limousine",
    category: "Stretch Limousine",
    description:
      "Make your arrival unforgettable. The Cadillac Escalade Stretch Limousine is the ultimate statement vehicle — commanding, spacious, and fitted with a full entertainment and bar setup for celebrations, events, and VIP occasions.",
    capacity: "8 Passengers",
    luggage: "4 Large Bags",
    features: ["Fiber Optic Mood Lighting", "Full Bar Setup", "Privacy Partition", "HD Entertainment System"],
    image: "/Cadillac Escalade Limousine.png",
    badge: "Events & Celebrations",
  },
  {
    id: 4,
    name: "Cadillac XTS",
    category: "Luxury Executive Sedan",
    description:
      "Refined, sophisticated, and built for business. The Cadillac XTS delivers a premium executive experience with a spacious rear cabin, Bose premium audio, and an elegantly understated presence perfect for corporate travel.",
    capacity: "3 Passengers",
    luggage: "3 Large Bags",
    features: ["Bose Premium Audio", "CUE Infotainment System", "Heated & Cooled Seats", "Quiet Tuned Cabin"],
    image: "/Cadillac XTS.png",
    badge: "Corporate",
  },
  {
    id: 5,
    name: "Chevrolet Suburban",
    category: "Full-Size Luxury SUV",
    description:
      "Power, space, and luxury in one commanding package. The Chevrolet Suburban offers a vast, comfortable cabin ideal for group airport transfers, family travel, and executive convoys across Houston.",
    capacity: "6 Passengers",
    luggage: "6 Large Bags",
    features: ["Bose Premium Audio", "Tri-Zone Climate Control", "Heated Rear Seats", "Power Liftgate"],
    image: "/Chevrolet Suburban.png",
    badge: "Group Travel",
  },
  {
    id: 6,
    name: "GMC Yukon",
    category: "Premium Full-Size SUV",
    description:
      "The GMC Yukon delivers a boldly confident ride with a refined interior built for comfort over long distances. Spacious, well-appointed, and loaded with technology — perfect for both leisure and business group travel in Houston.",
    capacity: "6 Passengers",
    luggage: "6 Large Bags",
    features: ["Bose Premium Audio", "Wi-Fi Hotspot", "Heated Rear Seats", "Power Running Boards"],
    image: "/GMC Yukon.png",
    badge: "Family & Group",
  },
];

// ─── Services Data ─────────────────────────────────────────────────────────────
export const servicesData = [
  {
    id: 1,
    icon: "Plane",
    title: "Airport Transfers",
    subtitle: "Seamless. Punctual. Effortless.",
    description:
      "Real-time flight tracking ensures your chauffeur is there, regardless of delays. Meet & greet, luggage assistance, and a pristine vehicle await you at every terminal.",
    features: ["Flight tracking included", "Meet & greet service", "All major airports", "24/7 availability"],
  },
  {
    id: 2,
    icon: "Briefcase",
    title: "Corporate & Executive Travel",
    subtitle: "Command Every Commute.",
    description:
      "Your boardroom on wheels. We serve Fortune 500 executives, diplomats, and C-suite professionals who require absolute discretion, punctuality, and an impeccable vehicle.",
    features: ["Dedicated account manager", "Monthly billing available", "NDA-compliant drivers", "Corporate fleet rates"],
  },
  {
    id: 3,
    icon: "Crown",
    title: "Private Chauffeur Service",
    subtitle: "Your Time. Your Terms.",
    description:
      "Retain an IMS chauffeur by the hour, half-day, or full-day. Exclusive availability, pre-planned routes, and complete privacy — the ultimate in personal transportation.",
    features: ["Hourly, half-day, or full-day", "Exclusive personal driver", "Concierge coordination", "Privacy guaranteed"],
  },
  {
    id: 4,
    icon: "Gem",
    title: "Weddings & Special Events",
    subtitle: "Arrive. Impress. Remember.",
    description:
      "Make your most important moments unforgettable. Red-carpet arrival, floral decorations, champagne on ice — every detail curated for the most discerning brides and grooms.",
    features: ["Floral & ribbon decoration", "Champagne on arrival", "Red carpet service", "Multiple-vehicle packages"],
  },
  {
    id: 5,
    icon: "Music",
    title: "Night Out & Prom Rides",
    subtitle: "Safety Meets Style.",
    description:
      "Celebrate in style without the worry. Our professional chauffeurs ensure a safe, luxurious evening from departure to return — ideal for prom, galas, and VIP nightlife.",
    features: ["Safe designated driver", "Custom music preferences", "Late-night availability", "Group packages available"],
  },
  {
    id: 6,
    icon: "Map",
    title: "City & Sightseeing Tours",
    subtitle: "Discover in Absolute Comfort.",
    description:
      "Explore the city's finest landmarks, dining, and cultural gems with a knowledgeable chauffeur acting as your personal guide — at your own unhurried pace.",
    features: ["Custom itineraries", "Multilingual drivers", "Restaurant reservations", "Flexible scheduling"],
  },
];

// ─── Why Choose Us Data ────────────────────────────────────────────────────────
export const whyUsData = [
  {
    icon: "Shield",
    title: "Fully Licensed & Insured",
    description: "Every IMS vehicle and driver is fully licensed, background-checked, and insured to the highest commercial standard.",
  },
  {
    icon: "Clock",
    title: "Punctuality Guaranteed",
    description: "We track your flight, monitor traffic in real time, and ensure your chauffeur arrives 15 minutes early — every single time.",
  },
  {
    icon: "Star",
    title: "VVIP-Grade Discretion",
    description: "Serving diplomats, celebrities, and executives with confidentiality agreements and professional etiquette that never wavers.",
  },
  {
    icon: "HeartHandshake",
    title: "White Glove Service",
    description: "From luggage handling to door-opening ceremony — every interaction is refined, warm, and exceptionally professional.",
  },
  {
    icon: "Globe",
    title: "Nationwide Coverage",
    description: "Operating across all major US cities and airports. One call connects you to our trusted network wherever your itinerary takes you.",
  },
  {
    icon: "Smartphone",
    title: "Instant Booking & Live Tracking",
    description: "Book in seconds via phone, app, or web. Live GPS tracking keeps you informed at every mile of the journey.",
  },
];

// ─── How It Works Data ─────────────────────────────────────────────────────────
export const howItWorksData = [
  {
    step: "01",
    title: "Reserve Your Ride",
    description:
      "Book online, via phone, or through our dedicated concierge line. Share your travel details, vehicle preference, and any special requirements.",
  },
  {
    step: "02",
    title: "Meet Your Chauffeur",
    description:
      "Your uniformed, vetted chauffeur arrives early, introduces themselves, handles your luggage, and opens your door — because details matter.",
  },
  {
    step: "03",
    title: "Arrive in Excellence",
    description:
      "Relax, work, or unwind in total privacy. IMS delivers you to your destination refreshed, on time, and in the style you deserve.",
  },
];

// ─── Testimonials Data ─────────────────────────────────────────────────────────
export const testimonialsData = [
  {
    id: 1,
    name: "Jonathan R. Whitfield",
    title: "CEO, Whitfield Capital Partners",
    content:
      "IMS has handled all my executive travel for three years. Their discretion, punctuality, and absolute professionalism are unmatched in the industry. A true VVIP experience every time.",
    rating: 5,
    avatar: "JW",
  },
  {
    id: 2,
    name: "Isabelle Fontaine",
    title: "Senior Attaché, French Consulate",
    content:
      "For diplomatic-level transport, I trust only IMS. The drivers understand protocol, maintain impeccable presentation, and the vehicles are simply immaculate. Highly recommended without reservation.",
    rating: 5,
    avatar: "IF",
  },
  {
    id: 3,
    name: "Marcus & Serena Blackwell",
    title: "Wedding Clients",
    content:
      "Our wedding day was perfected in large part by IMS. The experience was breathtaking, the champagne was chilled, and the chauffeur made us feel like royalty. We will treasure those memories forever.",
    rating: 5,
    avatar: "MB",
  },
  {
    id: 4,
    name: "Dr. Priya Mehta",
    title: "Chief Medical Officer, Meridian Health",
    content:
      "As someone who relies on precise scheduling, IMS has never once let me down. Their real-time flight tracking and professional meet-and-greet service make airport transfers completely stress-free.",
    rating: 5,
    avatar: "PM",
  },
  {
    id: 5,
    name: "Tyler Ashford",
    title: "Entertainment Industry Executive",
    content:
      "I've used luxury car services on four continents. IMS stands in an elite category. The attention to detail — the temperature, the music, the route — everything is curated to perfection.",
    rating: 5,
    avatar: "TA",
  },
];

// ─── FAQ Data ──────────────────────────────────────────────────────────────────
export const faqData = [
  {
    question: "How far in advance should I book?",
    answer:
      "We recommend booking at least 24 hours in advance for standard reservations. For weddings, special events, and large group travel, we suggest booking 2–4 weeks ahead to ensure vehicle and driver availability.",
  },
  {
    question: "Do you provide meet and greet service at the airport?",
    answer:
      "Yes. Your chauffeur will be waiting inside the terminal at baggage claim with a personalized name placard. They will assist with all luggage and escort you directly to your vehicle.",
  },
  {
    question: "What happens if my flight is delayed?",
    answer:
      "We monitor all flights in real time. Your chauffeur automatically adjusts their arrival time at no extra charge. You will never be left waiting due to a delay.",
  },
  {
    question: "Are your drivers background-checked?",
    answer:
      "All IMS chauffeurs undergo rigorous multi-level background checks, DMV record reviews, drug testing, and complete our proprietary VVIP service training program before a single client interaction.",
  },
  {
    question: "Can I request a specific vehicle?",
    answer:
      "Absolutely. You may select your preferred vehicle at the time of booking, subject to availability. We maintain a diverse fleet of sedans, SUVs, and Sprinter vans to accommodate every requirement.",
  },
  {
    question: "Do you offer corporate accounts?",
    answer:
      "Yes. We offer dedicated corporate accounts with consolidated monthly billing, priority booking, dedicated account management, and preferential fleet rates for high-volume clients.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit and debit cards, corporate checks, bank transfers, and digital payment platforms. Corporate clients may also arrange net-30 billing terms.",
  },
];

// ─── Partners Data ─────────────────────────────────────────────────────────────
export const partnersData = [
  { id: 1, name: "Four Seasons Hotels", abbr: "FS" },
  { id: 2, name: "The Ritz-Carlton", abbr: "RC" },
  { id: 3, name: "American Express", abbr: "AX" },
  { id: 4, name: "Forbes Travel Guide", abbr: "FT" },
  { id: 5, name: "Condé Nast Traveler", abbr: "CN" },
  { id: 6, name: "NetJets Private Aviation", abbr: "NJ" },
];

// ─── Navigation Data ───────────────────────────────────────────────────────────
export const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Served Area", path: "/served-area" },
  { label: "Fleet", path: "/fleet" },
  { label: "Booking", path: "/booking" },
  { label: "Contact", path: "/contact" },
];
