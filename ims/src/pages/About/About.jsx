import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Shield,
  Clock,
  HeartHandshake,
  Smartphone,
  CheckCircle,
  ArrowRight,
  Star,
  Crown,
  MapPin,
  Car,
} from "lucide-react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Button from "../../components/Button/Button";

// ─── Data ──────────────────────────────────────────────────────────────────────
const statsData = [
  { value: "15+", label: "Years of Excellence" },
  { value: "5K+", label: "Happy Clients" },
  { value: "24/7", label: "Always Available" },
  { value: "100%", label: "Satisfaction Rate" },
];

const commitmentData = [
  {
    icon: Shield,
    title: "Luxury & Safety",
    desc: "The fleet vehicles embody our commitment to luxury, comfort, and safety. You can ride worry-free with regular checks, professional drivers, and top-notch safety measures around.",
  },
  {
    icon: Clock,
    title: "Punctuality & Reliability",
    desc: "We know that timing matters a lot. We will always guarantee on-time arrivals from early morning flights to evening luxury parties, so you can design your day without worry.",
  },
  {
    icon: HeartHandshake,
    title: "Personalized Service",
    desc: "Every trip is unique. At IMS Limo & Chauffeur Service, you set the schedule and our drivers take the lead — discreet, supportive, and dedicated to your every need.",
  },
  {
    icon: Smartphone,
    title: "Seamless Technology",
    desc: "Managing your rides is easy thanks to our user-friendly booking, tracking, and scheduling platform — bringing luxury and convenience together from reservation to drop-off.",
  },
];

const whyUsPoints = [
  "An exclusive driver familiar with Houston's routes, traffic, and hidden gems — ensuring the fastest and most pleasant journey.",
  "A luxury collection of high-end sedans and SUVs, perfectly maintained and ready to meet your every need.",
  "A tailored experience for business, leisure, or celebration — always professional, discreet, and attentive.",
  "Transparent pricing, 24/7 support, and a team dedicated to going beyond expectations at every mile.",
];

// ─── About Page ────────────────────────────────────────────────────────────────
const About = () => {
  return (
    <main>

      {/* ── Page Hero ── */}
      <section className="relative h-[65vh] min-h-[420px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600&q=80"
            alt="IMS Limo Houston"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/60 to-charcoal/80" />
        </div>

        {/* Decorative borders */}
        <div className="absolute top-8 left-8 w-20 h-20 border-t border-l border-gold/50" />
        <div className="absolute bottom-8 right-8 w-20 h-20 border-b border-r border-gold/50" />

        <div className="relative z-10 text-center px-4">
          <motion.span
            className="text-xs font-semibold tracking-[0.4em] uppercase text-gold mb-4 block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Houston, Texas
          </motion.span>
          <motion.h1
            className="text-5xl md:text-7xl font-serif font-light text-white leading-tight mb-5"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            About <span className="text-gold">IMS Limo</span> & Chauffeur Service
          </motion.h1>
          <div className="w-16 h-0.5 bg-gold mx-auto mb-5" />
          <motion.p
            className="text-white/70 text-base md:text-lg max-w-xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Best Car Service in Houston, TX — where every ride is an experience.
          </motion.p>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="bg-charcoal py-10 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {statsData.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <p className="text-4xl font-serif font-bold text-gold mb-1">{stat.value}</p>
              <p className="text-white/50 text-xs tracking-widest uppercase">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── About Intro ── */}
      <section className="section-padding bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 border-gold" />
              <div className="relative overflow-hidden">
                <img
                  src="https://www.infinity-luxe-chauffeur.com/wp-content/uploads/2023/07/chauffeur-prive-dans-le-monde-1024x683.jpg"
                  alt="IMS Limo luxury vehicle"
                  className="w-full h-[520px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 to-transparent" />
              </div>
              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-6 -right-6 bg-gold p-6 shadow-xl text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <Crown size={22} className="text-white mx-auto mb-1" />
                <p className="text-white font-serif font-bold text-3xl">15+</p>
                <p className="text-white/80 text-xs tracking-widest uppercase mt-1">
                  Years of Excellence
                </p>
              </motion.div>
            </motion.div>

            {/* Right: Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-xs font-semibold tracking-[0.3em] uppercase text-gold mb-3 block">
                About Us
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal leading-tight mb-4">
                Welcome to the World<br />
                <span className="text-gold">of Luxury</span>
              </h2>
              <div className="w-16 h-0.5 bg-gold mb-6" />
              <p className="text-gray-500 leading-relaxed mb-5">
                IMS Limo & Chauffeur Service welcomes you to the world of luxury! Located in Houston, every ride with us gets elevated and becomes an experience rather than just a transport.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8">
                We are your trustworthy partner for premium, tailor-made travel solutions — a car service in Houston that is luxurious, dependable, and treats every detail with utmost care. We aim to give you an experience that is seamless, sophisticated, and specifically crafted according to your wants, right from the moment you reserve with us until your last drop-off.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {["White Glove Service", "VVIP Discretion", "24/7 Availability", "Real-Time Coordination"].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle size={15} className="text-gold flex-shrink-0" />
                    <span className="text-sm text-charcoal font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/contact">
                <Button variant="primary" icon={<ArrowRight size={15} />}>
                  Contact Us
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Our Story ── */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-xs font-semibold tracking-[0.3em] uppercase text-gold mb-3 block">
                Our Story
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal leading-tight mb-4">
                Luxury Is the Journey,<br />
                <span className="text-gold">Not the Destination</span>
              </h2>
              <div className="w-16 h-0.5 bg-gold mb-6" />
              <p className="text-gray-500 leading-relaxed mb-5">
                IMS Limo & Chauffeur Service considers luxury to be the journey, not only the destination. Our excellent car service was the starting point of our vision to lift the standard, and now we are a full-service private car service provider in Houston where elite clients expect nothing less than perfection.
              </p>
              <p className="text-gray-500 leading-relaxed mb-5">
                The customer's diversity inspires our fleet, and the professionalism, comfort, and discretion embodied by our drivers reflects our passion for perfection. Our team will never let you down in your journey with us.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8">
                Over the years, we have gained a reputation amongst corporate professionals, celebrities, and travelers who want a Houston car service that turns their trip into an unforgettable experience. Our clients trust us to deliver peace of mind, elegance, and reliability — every single time.
              </p>
              <Link to="/contact">
                <Button variant="outline" icon={<ArrowRight size={15} />}>
                  Get in Touch
                </Button>
              </Link>
            </motion.div>

            {/* Right: Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-2 border-r-2 border-gold" />
              <div className="relative overflow-hidden">
                <img
                  src="https://lifestyle-cars.s3.us-east-1.amazonaws.com/2021/chevrolet/suburban.jpg"
                  alt="Luxury black sedan parked at night"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-charcoal/20" />
              </div>
              {/* Floating label */}
              <motion.div
                className="absolute top-6 -left-6 bg-white border-l-4 border-gold px-5 py-4 shadow-xl"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-gold" />
                  <p className="text-xs font-semibold tracking-widest uppercase text-charcoal">
                    Houston, TX
                  </p>
                </div>
                <p className="text-sm text-gray-500 mt-1">Premier Private Car Service</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── What We Do ── */}
      <section className="section-padding bg-charcoal relative overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: "repeating-linear-gradient(45deg, #b88b40 0, #b88b40 1px, transparent 0, transparent 50%)", backgroundSize: "20px 20px" }}
        />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 border-gold/60" />
              <div className="relative overflow-hidden">
                <img
                  src="https://i.pinimg.com/736x/38/26/08/38260875e4c4fd69cacedac4a0ab4c1d.jpg"
                  alt="Luxury car parked in city at night"
                  className="w-full h-[480px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 to-transparent" />
              </div>
            </motion.div>

            {/* Right: Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-xs font-semibold tracking-[0.3em] uppercase text-gold mb-3 block">
                What We Do
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-light text-white leading-tight mb-4">
                Executive Car Service<br />
                <span className="text-gold">Built for the Elite</span>
              </h2>
              <div className="w-16 h-0.5 bg-gold mb-6" />
              <p className="text-white/60 leading-relaxed mb-5">
                IMS Limo & Chauffeur Service, as the leading executive car service in Houston, provides the safest, most comfortable, and timely luxury transportation. We cater to corporate travelers, professionals, and VIPs who require absolute punctuality, complete discretion, and maximum efficiency.
              </p>
              <p className="text-white/60 leading-relaxed mb-5">
                Our Houston private car service offers upscale sedans and SUVs for those requiring comfort and exclusivity. Beyond airport transfers, we serve city tours, corporate meetings, special events, and custom schedules with drivers and cars that are second to none.
              </p>
              <p className="text-white/60 leading-relaxed mb-8">
                Our complete Houston car service guarantees every trip is treated with utmost care — whether booked on short notice or planned well in advance. Latest vehicles, skilled drivers, and real-time coordination to make your journey perfect.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Airport Transfers", "Corporate Travel", "City Tours", "Special Events", "Custom Schedules"].map((tag) => (
                  <span key={tag} className="text-xs tracking-widest uppercase border border-gold/40 text-gold/80 px-4 py-2">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Our Commitment ── */}
      <section className="section-padding bg-cream">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            label="Our Commitment"
            title="The Pillars of Our Promise"
            subtitle="Every detail matters. These are the standards we hold ourselves to — without exception, without compromise."
          />
          <div className="grid md:grid-cols-2 gap-8">
            {commitmentData.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  className="luxury-card p-10 group flex gap-6 items-start"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="w-14 h-14 bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold transition-colors duration-300">
                    <Icon size={22} className="text-gold group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold text-charcoal mb-3 group-hover:text-gold transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    <div className="h-px bg-gold mt-5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Why IMS Limo ── */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-xs font-semibold tracking-[0.3em] uppercase text-gold mb-3 block">
                Why Choose Us
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal leading-tight mb-4">
                Why <span className="text-gold">IMS Limo?</span>
              </h2>
              <div className="w-16 h-0.5 bg-gold mb-6" />
              <p className="text-gray-500 leading-relaxed mb-8">
                By IMS Limo, you are not merely reserving transportation — you are investing in an experience carefully and precisely designed for comfort, style, and efficiency.
              </p>
              <ul className="space-y-5 mb-10">
                {whyUsPoints.map((point, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="w-7 h-7 bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Star size={13} className="text-gold" />
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed">{point}</p>
                  </motion.li>
                ))}
              </ul>
              <Link to="/booking">
                <Button variant="primary" icon={<ArrowRight size={15} />}>
                  Book Your Limo Now
                </Button>
              </Link>
            </motion.div>

            {/* Right: Image collage */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img
                    src="https://i.ytimg.com/vi/g1wN-gfXEQs/maxresdefault.jpg"
                    alt="Modern luxury car interior"
                    className="w-full h-52 object-cover"
                  />
                                  <img
                                    src="https://avatars.mds.yandex.net/get-autoru-vos/1998116/92f5e87c517ea4f342db65280cb8c83c/1200x900"
                                    alt="Luxury car parked in city"
                                    className="w-full h-36 object-cover"
                                  />
                </div>
                <div className="space-y-4 mt-8">
                  <img
                    src="https://images.unsplash.com/photo-1563720223185-11003d516935?w=400&q=80"
                    alt="Night luxury car Houston"
                    className="w-full h-36 object-cover"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1502877338535-766e1452684a?w=400&q=80"
                    alt="Premium fleet vehicle"
                    className="w-full h-52 object-cover"
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 border-b-2 border-l-2 border-gold" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Vision & Mission ── */}
      <section className="section-padding bg-cream">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            label="Our Foundation"
            title="Vision & Mission"
            subtitle="Two guiding principles that shape every decision, every ride, and every relationship we build."
          />
          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision */}
            <motion.div
              className="relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="bg-charcoal p-10 h-full">
                <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                  <Crown size={128} className="text-gold" />
                </div>
                <span className="text-xs font-semibold tracking-[0.3em] uppercase text-gold mb-3 block">
                  Our Vision
                </span>
                <h3 className="text-3xl font-serif font-light text-white mb-4 leading-snug">
                  Houston's Most Trusted<br />Luxury Ground Transport
                </h3>
                <div className="w-12 h-0.5 bg-gold mb-6" />
                <p className="text-white/60 leading-relaxed text-sm">
                  We want to become Houston's most reliable luxury ground transportation provider — constantly updating ourselves and drawing new lines in the areas of comfort, sustainability, and client satisfaction. Our aim is not simply to grant our clients a ride, but to make them accustomed to a standard of excellence they can count on every time.
                </p>
              </div>
            </motion.div>

            {/* Mission */}
            <motion.div
              className="relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <div className="bg-gold p-10 h-full">
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                  <Car size={128} className="text-white" />
                </div>
                <span className="text-xs font-semibold tracking-[0.3em] uppercase text-white/70 mb-3 block">
                  Our Mission
                </span>
                <h3 className="text-3xl font-serif font-light text-white mb-4 leading-snug">
                  Every Ride, a Stylish<br />& Remarkable Experience
                </h3>
                <div className="w-12 h-0.5 bg-white/50 mb-6" />
                <p className="text-white/80 leading-relaxed text-sm">
                  Our mission is straightforward: to change every ride into a stylish and remarkable experience. Whether traveling around Houston, going to the airport, or attending a special occasion, IMS Limo & Chauffeur Service will make your ride chic, efficient, and personalized. We take care of the details, and you focus on what matters most.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-28 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1600&q=80"
            alt="Book luxury car service Houston"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/85" />
        </div>

        <div className="absolute top-8 left-8 w-16 h-16 border-t border-l border-gold/40" />
        <div className="absolute bottom-8 right-8 w-16 h-16 border-b border-r border-gold/40" />

        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <motion.span
            className="text-xs font-semibold tracking-[0.4em] uppercase text-gold mb-4 block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Join the Experience
          </motion.span>
          <motion.h2
            className="text-4xl md:text-6xl font-serif font-light text-white mb-5 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            It's More Than a Ride —<br />
            <span className="text-gold">It's a Statement</span>
          </motion.h2>
          <div className="w-16 h-0.5 bg-gold mx-auto mb-6" />
          <motion.p
            className="text-white/60 text-base leading-relaxed mb-10 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Contact IMS Limo & Chauffeur Service for your next ride and experience what luxury truly means. Every detail planned, every mile elegant, every ride an experience.
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

    </main>
  );
};

export default About;

