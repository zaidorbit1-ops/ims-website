import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight, Car, Clock, CheckCircle } from "lucide-react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Button from "../../components/Button/Button";

// ─── Served Areas Data ─────────────────────────────────────────────────────────
const areasData = [
  {
    id: 1,
    name: "Space Center Houston",
    tag: "Attraction",
    distance: "25 miles from Downtown",
    time: "~35 min",
    description:
      "Travel to NASA's premier visitor destination in style. Whether you're heading to Space Center Houston for a corporate event, a family visit, or a special occasion, our chauffeur will ensure a seamless, punctual, and luxurious journey.",
    highlights: ["Meet & Greet Service", "Flexible Waiting", "Flight Crew Transfers", "Group Booking Available"],
    image: "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?w=800&q=80",
  },
  {
    id: 2,
    name: "Galveston Cruise Terminal",
    tag: "Cruise Port",
    distance: "50 miles from Houston",
    time: "~55 min",
    description:
      "Start your cruise vacation the right way. We provide comfortable, punctual transfers to all Galveston cruise terminals — whether you're boarding a Royal Caribbean, Carnival, or Norwegian sailing. We handle your luggage so you travel hands-free.",
    highlights: ["All Terminals Covered", "Luggage Assistance", "Early Morning Pickups", "Return Transfers"],
    image: "https://images.unsplash.com/photo-1578894381163-e72c17f2d45f?w=800&q=80",
  },
  {
    id: 3,
    name: "Kemah Boardwalk",
    tag: "Entertainment",
    distance: "30 miles from Downtown",
    time: "~40 min",
    description:
      "Head to the Kemah Boardwalk in luxury without the hassle of parking or traffic. Perfect for date nights, family outings, and corporate entertainment, our chauffeurs ensure you arrive relaxed and ready to enjoy every moment.",
    highlights: ["Evening & Weekend Runs", "Round-Trip Available", "Group SUVs", "No Parking Headaches"],
    image: "https://images.unsplash.com/photo-1575037614876-c38a4d44f5b8?w=800&q=80",
  },
  {
    id: 4,
    name: "Golden Nugget Lake Charles",
    tag: "Casino & Resort",
    distance: "~140 miles from Houston",
    time: "~2 hrs",
    description:
      "Make the drive to Golden Nugget Lake Charles part of the experience. Settle into our premium cabin, relax, and arrive at the resort refreshed. We'll be waiting whenever you're ready to head back — on your schedule, not ours.",
    highlights: ["Long-Distance Luxury", "Scheduled Return Pickup", "In-Car Refreshments", "Discreet Service"],
    image: "https://images.unsplash.com/photo-1506220926022-cc5c12acdb35?w=800&q=80",
  },
  {
    id: 5,
    name: "George Bush Intercontinental Airport (IAH)",
    tag: "Airport",
    distance: "23 miles from Downtown",
    time: "~30 min",
    description:
      "Houston's busiest international airport — served flawlessly. We track your flight in real time, adjust for delays, and have your chauffeur ready at arrivals. For departures, we ensure you're there with time to spare.",
    highlights: ["Real-Time Flight Tracking", "Curbside Pickup", "All Terminals", "24/7 Availability"],
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80",
  },
  {
    id: 6,
    name: "William P. Hobby Airport (HOU)",
    tag: "Airport",
    distance: "9 miles from Downtown",
    time: "~20 min",
    description:
      "Quick, convenient, and always on time. Hobby Airport transfers are handled with the same meticulous care as every IMS Limo & Chauffeur Service ride — professional meet & greet, luggage handling, and a spotless vehicle waiting just for you.",
    highlights: ["Meet & Greet at Arrivals", "Luggage Assistance", "All Airlines Covered", "Early Morning Flights"],
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80",
  },
  {
    id: 7,
    name: "Downtown Houston",
    tag: "Business District",
    distance: "City Center",
    time: "On demand",
    description:
      "From Minute Maid Park to the Theater District, from Discovery Green to the Houston Center — we know every block of Downtown Houston. Corporate meetings, dinners, events, or late-night entertainment — IMS Limo is always close.",
    highlights: ["Corporate Account Service", "Hourly Charter", "Event Transportation", "Hotel Transfers"],
    image: "https://images.unsplash.com/photo-1569982175971-d92b01cf8694?w=800&q=80",
  },
  {
    id: 8,
    name: "The Galleria & Uptown",
    tag: "Shopping & Luxury",
    distance: "6 miles from Downtown",
    time: "~15 min",
    description:
      "Houston's premier shopping destination deserves a premier arrival. Shop at Neiman Marcus, dine at the finest restaurants, and attend events at the Westin Galleria — all without worrying about valet or parking.",
    highlights: ["Shopping Drop-off", "Hotel Transfers", "Dinner Reservations", "Personal Shopping Runs"],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
  },
  {
    id: 9,
    name: "Texas Medical Center",
    tag: "Medical",
    distance: "3 miles from Downtown",
    time: "~10 min",
    description:
      "The world's largest medical complex — reached with comfort and care. We provide discreet, punctual, and comfortable transportation for patients, families, and medical professionals visiting MD Anderson, Methodist, or any TMC institution.",
    highlights: ["Patient-Friendly Service", "Wheelchair Accessible Options", "Discreet & Quiet Cabin", "Scheduled Appointments"],
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80",
  },
  {
    id: 10,
    name: "NRG Stadium & Toyota Center",
    tag: "Sports & Events",
    distance: "3–5 miles from Downtown",
    time: "~12 min",
    description:
      "Texans games, Rockets nights, concerts, and the Houston Rodeo — arrive before the traffic builds and leave without the chaos. Our event transportation service keeps you ahead of the crowd, every time.",
    highlights: ["Pre & Post-Event Pickup", "Group SUVs & Sprinters", "VIP Drop-off Zones", "No Waiting in Traffic"],
    image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&q=80",
  },
];

// ─── Filter Tags ───────────────────────────────────────────────────────────────
const filters = ["All", "Airport", "Cruise Port", "Attraction", "Entertainment", "Casino & Resort", "Business District", "Medical", "Sports & Events", "Shopping & Luxury"];

// ─── Area Card ─────────────────────────────────────────────────────────────────
const AreaCard = ({ area, index, onClick }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.95 }}
    transition={{ duration: 0.4, delay: index * 0.06 }}
    className="luxury-card overflow-hidden group cursor-pointer"
    onClick={() => onClick(area)}
  >
    {/* Image */}
    <div className="relative h-52 overflow-hidden">
      <img
        src={area.image}
        alt={area.name}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 to-transparent" />
      <span className="absolute top-4 left-4 bg-gold text-white text-[10px] font-semibold tracking-widest uppercase px-3 py-1.5">
        {area.tag}
      </span>
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center">
        <span className="bg-white text-charcoal text-xs font-semibold tracking-widest uppercase px-5 py-2.5 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          Learn More
        </span>
      </div>
    </div>

    {/* Content */}
    <div className="p-7">
      <h3 className="text-xl font-serif font-bold text-charcoal mb-2 group-hover:text-gold transition-colors duration-300">
        {area.name}
      </h3>
      <div className="flex items-center gap-4 mb-4">
        <div className="flex items-center gap-1.5">
          <MapPin size={13} className="text-gold" />
          <span className="text-xs text-gray-400">{area.distance}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Clock size={13} className="text-gold" />
          <span className="text-xs text-gray-400">{area.time}</span>
        </div>
      </div>
      <p className="text-gray-500 text-sm leading-relaxed mb-5 line-clamp-2">
        {area.description}
      </p>
      <div className="flex items-center justify-between pt-4 border-t border-gold/15">
        <span className="text-xs font-semibold tracking-widest uppercase text-gold group-hover:underline underline-offset-4">
          View Details
        </span>
        <Link
          to="/booking"
          onClick={(e) => e.stopPropagation()}
          className="text-xs font-semibold tracking-widest uppercase border border-gold text-gold px-4 py-2 hover:bg-gold hover:text-white transition-all duration-300"
        >
          Book Now
        </Link>
      </div>
    </div>
  </motion.div>
);

// ─── Detail Modal ──────────────────────────────────────────────────────────────
const AreaModal = ({ area, onClose }) => {
  if (!area) return null;
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="absolute inset-0 bg-charcoal/90 backdrop-blur-sm" onClick={onClose} />
        <motion.div
          className="relative z-10 bg-white w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl"
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 30 }}
          transition={{ duration: 0.35 }}
        >
          {/* Image */}
          <div className="relative h-64 md:h-80 overflow-hidden">
            <img src={area.image} alt={area.name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent" />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 bg-charcoal/70 text-white flex items-center justify-center hover:bg-gold transition-colors"
            >
              ✕
            </button>
            <div className="absolute bottom-6 left-8">
              <span className="text-xs font-semibold tracking-[0.3em] uppercase text-gold block mb-1">{area.tag}</span>
              <h2 className="text-3xl font-serif font-light text-white">{area.name}</h2>
            </div>
          </div>

          {/* Body */}
          <div className="p-8 md:p-10">
            {/* Distance + time */}
            <div className="flex items-center gap-6 mb-6">
              <div className="flex items-center gap-2 border border-gold/30 px-4 py-2">
                <MapPin size={14} className="text-gold" />
                <span className="text-xs font-medium text-charcoal">{area.distance}</span>
              </div>
              <div className="flex items-center gap-2 border border-gold/30 px-4 py-2">
                <Clock size={14} className="text-gold" />
                <span className="text-xs font-medium text-charcoal">{area.time}</span>
              </div>
            </div>

            <p className="text-gray-500 leading-relaxed mb-8">{area.description}</p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Highlights */}
              <div>
                <p className="text-xs font-semibold tracking-[0.3em] uppercase text-gold mb-4">
                  Service Highlights
                </p>
                <ul className="space-y-3">
                  {area.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-3">
                      <CheckCircle size={14} className="text-gold flex-shrink-0" />
                      <span className="text-sm text-gray-600">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Why us */}
              <div>
                <p className="text-xs font-semibold tracking-[0.3em] uppercase text-gold mb-4">
                  Why IMS Limo & Chauffeur Service?
                </p>
                <ul className="space-y-3">
                  {["Professional licensed chauffeurs", "Luxury sedans & SUVs", "24/7 availability", "Real-time tracking & updates"].map((i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Car size={14} className="text-gold flex-shrink-0" />
                      <span className="text-sm text-gray-600">{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Link to="/booking">
              <Button variant="primary" icon={<ArrowRight size={15} />}>
                Book This Route
              </Button>
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// ─── Served Area Page ──────────────────────────────────────────────────────────
const ServedArea = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedArea, setSelectedArea] = useState(null);

  const filtered = activeFilter === "All"
    ? areasData
    : areasData.filter((a) => a.tag === activeFilter);

  return (
    <main>

      {/* ── Hero ── */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1600&q=80"
            alt="Served Areas Houston"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/85 via-charcoal/65 to-charcoal/85" />
        </div>
        <div className="absolute top-8 left-8 w-20 h-20 border-t border-l border-gold/50" />
        <div className="absolute bottom-8 right-8 w-20 h-20 border-b border-r border-gold/40" />
        <div className="relative z-10 text-center px-4">
          <motion.span
            className="text-xs font-semibold tracking-[0.4em] uppercase text-gold mb-4 block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Houston, Texas & Beyond
          </motion.span>
          <motion.h1
            className="text-5xl md:text-7xl font-serif font-light text-white leading-tight mb-5"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Areas We <span className="text-gold">Serve</span>
          </motion.h1>
          <div className="w-16 h-0.5 bg-gold mx-auto mb-5" />
          <motion.p
            className="text-white/70 max-w-2xl mx-auto text-base leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            From Houston's international airports to Galveston's cruise ports, from Space Center to the Golden Nugget —
            IMS Limo & Chauffeur Service covers every mile with luxury and precision.
          </motion.p>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="bg-charcoal py-8 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "10+", label: "Served Locations" },
            { value: "150mi", label: "Service Radius" },
            { value: "24/7", label: "Always Available" },
            { value: "100%", label: "On-Time Guarantee" },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <p className="text-3xl font-serif font-bold text-gold mb-1">{s.value}</p>
              <p className="text-white/50 text-xs tracking-widest uppercase">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Filter Tabs ── */}
      <section className="bg-cream border-b border-gold/20 px-4 py-5">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 flex-wrap">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-5 py-2 text-[10px] font-semibold tracking-widest uppercase transition-all duration-300 ${
                activeFilter === f
                  ? "bg-gold text-white"
                  : "border border-gold/40 text-gold hover:bg-gold hover:text-white"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      {/* ── Areas Grid ── */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filtered.map((area, i) => (
                <AreaCard
                  key={area.id}
                  area={area}
                  index={i}
                  onClick={setSelectedArea}
                />
              ))}
            </AnimatePresence>
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <MapPin size={40} className="text-gold/40 mx-auto mb-4" />
              <p className="text-gray-400 text-sm tracking-widest uppercase">No areas in this category</p>
            </div>
          )}
        </div>
      </section>

      {/* ── Custom Route Banner ── */}
      <section className="section-padding bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="border border-gold/30 p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <span className="text-xs font-semibold tracking-[0.3em] uppercase text-gold mb-2 block">
                Don't See Your Location?
              </span>
              <h3 className="text-3xl md:text-4xl font-serif font-light text-charcoal mb-3">
                We Go <span className="text-gold">Anywhere You Need</span>
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xl">
                Our service radius extends well beyond Houston. Whether it's a cross-city run, a statewide trip, or a custom route — contact us and we'll arrange a tailor-made journey just for you.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
              <Link to="/booking">
                <Button variant="primary" icon={<ArrowRight size={15} />}>
                  Book Now
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600&q=80"
            alt="Luxury car service Houston"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/88" />
        </div>
        <div className="absolute top-8 left-8 w-16 h-16 border-t border-l border-gold/40" />
        <div className="absolute bottom-8 right-8 w-16 h-16 border-b border-r border-gold/40" />
        <div className="relative z-10 text-center max-w-2xl mx-auto px-4">
          <motion.span
            className="text-xs font-semibold tracking-[0.4em] uppercase text-gold mb-4 block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Available 24 / 7
          </motion.span>
          <motion.h2
            className="text-4xl md:text-5xl font-serif font-light text-white mb-5 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Your Destination,<br />
            <span className="text-gold">Our Expertise</span>
          </motion.h2>
          <div className="w-16 h-0.5 bg-gold mx-auto mb-6" />
          <motion.p
            className="text-white/60 leading-relaxed mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Book your IMS Limo & Chauffeur Service ride today. Luxury, punctuality, and discretion — guaranteed at every mile.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link to="/booking">
              <Button variant="primary" size="lg" icon={<ArrowRight size={16} />}>
                Reserve Your Ride
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="ghost" size="lg">
                Contact Us
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Detail Modal ── */}
      {selectedArea && (
        <AreaModal area={selectedArea} onClose={() => setSelectedArea(null)} />
      )}

    </main>
  );
};

export default ServedArea;
