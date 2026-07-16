import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Plane, Briefcase, Crown, Gem, Music, Map,
  Shield, Clock, Star, HeartHandshake, Globe, Smartphone,
  ArrowRight, CheckCircle, Plus, Minus, ChevronRight, ChevronLeft, MapPin, Calendar, Flag,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Hero from "../../components/Hero/Hero";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";
import {
  fleetData,
  servicesData,
  whyUsData,
  howItWorksData,
  testimonialsData,
  faqData,
  partnersData,
} from "../../data/dummyData";

// ─── Icon Map ──────────────────────────────────────────────────────────────────
const iconMap = {
  Plane, Briefcase, Crown, Gem, Music, Map,
  Shield, Clock, Star, HeartHandshake, Globe, Smartphone,
};

// ─── FAQ Item ──────────────────────────────────────────────────────────────────
const FAQItem = ({ question, answer, index }) => {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      className="border-b border-gold-light/30"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07 }}
    >
      <button
        className="w-full flex justify-between items-center py-5 text-left group"
        onClick={() => setOpen(!open)}
      >
        <span className="font-serif font-semibold text-charcoal group-hover:text-gold transition-colors pr-4">
          {question}
        </span>
        <span className="text-gold flex-shrink-0">
          {open ? <Minus size={18} /> : <Plus size={18} />}
        </span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="text-gray-500 text-sm leading-relaxed pb-5">{answer}</p>
      </motion.div>
    </motion.div>
  );
};

// ─── Quote Form Helper Components ─────────────────────────────────────────────
const SelectField = ({ label, icon: Icon, name, value, onChange, options, required }) => (
  <div className="relative">
    <label className="block text-[10px] font-semibold tracking-[0.25em] uppercase text-gold mb-1.5">
      {label}
    </label>
    <div className="relative">
      {Icon && (
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/60 pointer-events-none">
          <Icon size={14} />
        </span>
      )}
      <select
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className={`w-full bg-white/10 border border-white/20 text-white text-sm py-3 pr-10 focus:outline-none focus:border-gold transition-colors duration-300 appearance-none cursor-pointer backdrop-blur-sm ${Icon ? "pl-11" : "pl-4"} ${!value ? "text-white/60" : "text-white"}`}
      >
        <option value="">Select {label}</option>
        {options.map((o) => (
          <option key={o} value={o} className="bg-charcoal text-white">{o}</option>
        ))}
      </select>
      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gold/60 pointer-events-none">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </div>
  </div>
);

const Field = ({ label, icon: Icon, type = "text", name, value, onChange, placeholder, required }) => (
  <div className="relative">
    <label className="block text-[10px] font-semibold tracking-[0.25em] uppercase text-gold mb-1.5">
      {label}
    </label>
    <div className="relative">
      {Icon && (
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/60">
          <Icon size={14} />
        </span>
      )}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={`w-full bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm py-3 pr-4 focus:outline-none focus:border-gold transition-colors duration-300 backdrop-blur-sm ${Icon ? "pl-11" : "pl-4"}`}
      />
    </div>
  </div>
);

// ─── Home Page ─────────────────────────────────────────────────────────────────
const Home = () => {
  const [quoteForm, setQuoteForm] = useState({
    pickup: "", destination: "", date: "", time: "", vehicle: "",
  });
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);
  const [quoteSending, setQuoteSending] = useState(false);
  const [quoteError, setQuoteError] = useState("");

  const handleQuoteChange = (e) => setQuoteForm({ ...quoteForm, [e.target.name]: e.target.value });

  const handleQuoteSubmit = async (e) => {
    e.preventDefault();
    setQuoteSending(true);
    setQuoteError("");
    try {
      const res = await fetch("https://imslimoandchaufferservice.com/Backend/mail/send_mail.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Instant Quote Request",
          email: "info@imslimoandchaufferservice.com",
          subject: "Instant Quote Request",
          message: `Instant Quote Request:\nPickup: ${quoteForm.pickup}\nDestination: ${quoteForm.destination}\nDate: ${quoteForm.date}\nTime: ${quoteForm.time}\nVehicle Class: ${quoteForm.vehicle}`,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setQuoteSubmitted(true);
        setQuoteForm({ pickup: "", destination: "", date: "", time: "", vehicle: "" });
        setTimeout(() => setQuoteSubmitted(false), 5000);
      } else {
        setQuoteError(data.error || "Failed to submit quote");
      }
    } catch (err) {
      setQuoteError("Network error. Please try again.");
    } finally {
      setQuoteSending(false);
    }
  };

  return (
    <main>
      {/* ── Hero ── */}
      <Hero />

      {/* ── About Intro ── */}
      <section className="section-padding bg-white">
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
              <div className="relative overflow-hidden">
                <img
                  src="https://providentglobal.com/wp-content/uploads/2024/02/second_img.jpg"
                  alt="IMS Chauffeur"
                  className="w-full h-[520px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 to-transparent" />
              </div>
              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-6 -right-6 bg-gold p-6 shadow-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <p className="text-white font-serif font-bold text-4xl">15+</p>
                <p className="text-white/80 text-xs tracking-widest uppercase mt-1">
                  Years of Excellence
                </p>
              </motion.div>
              {/* Decorative corner */}
              <div className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 border-gold" />
            </motion.div>

            {/* Right: Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-xs font-semibold tracking-[0.3em] uppercase text-gold mb-3 block">
                Who We Are
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal leading-tight mb-4">
                The Standard of<br />
                <span className="text-gold">Luxury Transport</span>
              </h2>
              <div className="w-16 h-0.5 bg-gold mb-6" />
              <p className="text-gray-500 leading-relaxed mb-4">
                Founded on a singular conviction — that ground transportation could be as refined as the finest hotel — IMS Limo & Chauffeur Service has served heads of state, Fortune 500 executives, and the world's most discerning travellers for over fifteen years.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8">
                Our fleet of immaculate luxury vehicles, our rigorously trained chauffeurs, and our unwavering commitment to discretion and punctuality have earned us an unmatched reputation in the industry.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {["White Glove Service", "VVIP Discretion", "24/7 Availability", "Real-Time Tracking"].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle size={15} className="text-gold flex-shrink-0" />
                    <span className="text-sm text-charcoal font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/about">
                <Button variant="outline" icon={<ArrowRight size={15} />}>
                  Our Story
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="section-padding bg-cream">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            label="What We Offer"
            title="Premium Chauffeur Services"
            subtitle="From airport transfers to bespoke private hire — IMS delivers an uncompromising standard of luxury across every service we provide."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.map((service, i) => {
              const Icon = iconMap[service.icon];
              return (
                <motion.div
                  key={service.id}
                  className="luxury-card p-8 group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <div className="w-12 h-12 bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold transition-colors duration-300">
                    {Icon && (
                      <Icon
                        size={20}
                        className="text-gold group-hover:text-white transition-colors duration-300"
                      />
                    )}
                  </div>
                  <p className="text-xs text-gold font-semibold tracking-widest uppercase mb-2">
                    {service.subtitle}
                  </p>
                  <h3 className="text-xl font-serif font-bold text-charcoal mb-3 group-hover:text-gold transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-1.5">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-gray-500">
                        <div className="w-1 h-1 bg-gold rounded-full" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="h-px bg-gold mt-6 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </motion.div>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <Link to="/services">
              <Button variant="primary" icon={<ArrowRight size={15} />}>
                Explore All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Fleet ── */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Header row with nav buttons */}
          <div className="flex items-end justify-between mb-14">
            <SectionTitle
              label="Our Fleet"
              title="An Extraordinary Collection"
              subtitle="Every vehicle is meticulously maintained, professionally presented, and selected for an unrivalled passenger experience."
              align="left"
              className="mb-0"
            />
            <div className="hidden md:flex items-center gap-3 flex-shrink-0 ml-8">
              <button className="fleet-prev w-12 h-12 border border-gold/40 flex items-center justify-center text-gold hover:bg-gold hover:text-white hover:border-gold transition-all duration-300">
                <ChevronLeft size={20} />
              </button>
              <button className="fleet-next w-12 h-12 border border-gold/40 flex items-center justify-center text-gold hover:bg-gold hover:text-white hover:border-gold transition-all duration-300">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{ prevEl: ".fleet-prev", nextEl: ".fleet-next" }}
            pagination={{ clickable: true, el: ".fleet-pagination" }}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {fleetData.map((car, i) => (
              <SwiperSlide key={car.id}>
                <Card
                  image={car.image}
                  badge={car.badge}
                  title={car.name}
                  subtitle={car.category}
                  description={car.description}
                  features={[car.capacity, car.luggage, ...car.features.slice(0, 2)]}
                  delay={0}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Mobile dot nav + CTA */}
          <div className="fleet-pagination flex justify-center gap-2 mt-8 md:hidden" />

          <div className="text-center mt-10">
            <Link to="/fleet">
              <Button variant="outline" icon={<ArrowRight size={15} />}>
                View Full Fleet
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Airport Transfer Highlight ── */}
      <section className="relative py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&q=80)",
          }}
        />
        <div className="absolute inset-0 bg-charcoal/85" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionTitle
                label="Airport Transfers"
                title="Never Miss a Flight. Never Wait on Arrival."
                subtitle="IMS tracks your flight in real time, adjusts for delays automatically, and has your chauffeur waiting — whether you land early or late."
                align="left"
                light
              />
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Plane, text: "Real-Time Flight Tracking" },
                  { icon: CheckCircle, text: "Meet & Greet at Gate" },
                  { icon: Shield, text: "Luggage Assistance" },
                  { icon: Clock, text: "No Wait. Ever." },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gold/20 border border-gold/30 flex items-center justify-center flex-shrink-0">
                      <Icon size={14} className="text-gold" />
                    </div>
                    <span className="text-white/80 text-sm">{text}</span>
                  </div>
                ))}
              </div>
              <Link to="/booking">
                <Button variant="primary" icon={<ArrowRight size={15} />}>
                  Book Airport Transfer
                </Button>
              </Link>
            </div>
            <motion.div
              className="hidden lg:block"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="glass-card p-8 space-y-5">
                <p className="text-gold text-xs tracking-widest uppercase font-semibold">
                  Instant Quote
                </p>
                <h3 className="text-white font-serif text-2xl">
                  Reserve Your Airport Transfer
                </h3>
                
                {quoteSubmitted ? (
                  <div className="bg-green-500/10 border border-green-500/30 rounded p-4 text-white text-sm text-center">
                    ✓ Quote request sent! We'll contact you shortly.
                  </div>
                ) : (
                  <form onSubmit={handleQuoteSubmit} className="space-y-4">
                    <SelectField
                      label="Pickup Location"
                      icon={MapPin}
                      name="pickup"
                      value={quoteForm.pickup}
                      onChange={handleQuoteChange}
                      options={["Houston Downtown", "Houston Uptown", "Sugar Land", "IAH Airport", "Hobby Airport", "Port of Houston", "Other"]}
                      required
                    />
                    <SelectField
                      label="Destination"
                      icon={Flag}
                      name="destination"
                      value={quoteForm.destination}
                      onChange={handleQuoteChange}
                      options={["Houston Downtown", "Houston Uptown", "Sugar Land", "IAH Airport", "Hobby Airport", "Port of Houston", "Other"]}
                      required
                    />
                    <Field
                      label="Date"
                      icon={Calendar}
                      type="date"
                      name="date"
                      value={quoteForm.date}
                      onChange={handleQuoteChange}
                      required
                    />
                    <Field
                      label="Time"
                      icon={Clock}
                      type="time"
                      name="time"
                      value={quoteForm.time}
                      onChange={handleQuoteChange}
                      required
                    />
                    <SelectField
                      label="Vehicle Class"
                      name="vehicle"
                      value={quoteForm.vehicle}
                      onChange={handleQuoteChange}
                      options={["Mercedes-Benz S 500", "Cadillac Escalade Limousine", "Cadillac XTS", "Chevrolet Suburban", "GMC Yukon"]}
                      required
                    />
                    {quoteError && <div className="text-red-400 text-sm">{quoteError}</div>}
                    <button
                      type="submit"
                      disabled={quoteSending}
                      className="btn-primary w-full text-center block mt-4 bg-gold hover:bg-gold/90 text-charcoal font-bold py-3 rounded transition-all disabled:opacity-50"
                    >
                      {quoteSending ? "Sending..." : "Get Instant Quote"}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Why Choose IMS ── */}
      <section className="section-padding bg-cream">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            label="Why IMS"
            title="The IMS Difference"
            subtitle="In a market saturated with mediocrity, IMS has earned its place among the world's finest chauffeur services through an unrelenting pursuit of excellence."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUsData.map((item, i) => {
              const Icon = iconMap[item.icon];
              return (
                <motion.div
                  key={i}
                  className="bg-white p-7 border border-gold-light/20 hover:border-gold/40 hover:shadow-[0_10px_40px_rgba(184,139,64,0.12)] transition-all duration-400 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <div className="w-11 h-11 bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold transition-colors duration-300">
                    {Icon && (
                      <Icon
                        size={18}
                        className="text-gold group-hover:text-white transition-colors duration-300"
                      />
                    )}
                  </div>
                  <h3 className="font-serif font-bold text-charcoal text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="section-padding bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-64 h-64 border border-gold rounded-full" />
          <div className="absolute bottom-10 left-10 w-96 h-96 border border-gold rounded-full" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <SectionTitle
            label="The Process"
            title="Three Steps to Perfection"
            subtitle="Booking an IMS chauffeur is as effortless as the journey itself."
            light
          />
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-10 left-1/3 right-1/3 h-px bg-gold/30" />
            {howItWorksData.map((step, i) => (
              <motion.div
                key={i}
                className="text-center relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <div className="w-20 h-20 border-2 border-gold flex items-center justify-center mx-auto mb-6 relative">
                  <span className="text-gold font-serif font-bold text-2xl">{step.step}</span>
                  {i < 2 && (
                    <ChevronRight
                      size={20}
                      className="text-gold/40 absolute -right-10 top-1/2 -translate-y-1/2 hidden md:block"
                    />
                  )}
                </div>
                <h3 className="text-white font-serif font-bold text-xl mb-3">{step.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-14">
            <Link to="/booking">
              <Button variant="primary" size="lg" icon={<ArrowRight size={16} />}>
                Book Your Ride
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            label="Client Testimonials"
            title="Words from Our Distinguished Clients"
            subtitle="Over 50,000 satisfied passengers have experienced the IMS standard. Here is what a few of them had to say."
          />
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {testimonialsData.map((t) => (
              <SwiperSlide key={t.id}>
                <div className="luxury-card p-8 h-full flex flex-col">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={14} fill="#b88b40" className="text-gold" />
                    ))}
                  </div>
                  {/* Quote */}
                  <p className="text-gray-500 text-sm leading-relaxed flex-1 italic mb-6">
                    "{t.content}"
                  </p>
                  {/* Author */}
                  <div className="flex items-center gap-4 border-t border-gold-light/30 pt-4">
                    <div className="w-11 h-11 bg-gold flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-xs">{t.avatar}</span>
                    </div>
                    <div>
                      <p className="text-charcoal font-semibold text-sm">{t.name}</p>
                      <p className="text-gold text-xs tracking-wide">{t.title}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* ── Partners ── */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <p className="text-center text-xs font-semibold tracking-[0.4em] uppercase text-gold mb-10">
            Trusted Partners & Affiliations
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
            {partnersData.map((p) => (
              <motion.div
                key={p.id}
                className="flex items-center gap-2 opacity-40 hover:opacity-80 transition-opacity duration-300 cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-8 h-8 bg-charcoal flex items-center justify-center">
                  <span className="text-white text-xs font-bold">{p.abbr}</span>
                </div>
                <span className="text-charcoal font-semibold text-sm tracking-wide">
                  {p.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionTitle
            label="FAQ"
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about booking and travelling with IMS."
          />
          <div className="divide-y divide-gold-light/30 border-t border-gold-light/30">
            {faqData.map((item, i) => (
              <FAQItem
                key={i}
                question={item.question}
                answer={item.answer}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="relative bg-charcoal overflow-hidden">
        {/* Subtle diagonal gold lines */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "repeating-linear-gradient(45deg, #b88b40 0, #b88b40 1px, transparent 0, transparent 50%)",
            backgroundSize: "40px 40px",
          }}
        />
        {/* Gold top border */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gold text-xs tracking-[0.4em] uppercase mb-5">
              Ready to Experience IMS?
            </p>
            <h2 className="text-4xl md:text-6xl font-serif font-light text-white mb-5 leading-tight">
              Your Next Journey<br />
              <span className="text-gold">Begins Here</span>
            </h2>
            <div className="w-16 h-px bg-gold mx-auto mb-7" />
            <p className="text-white/50 leading-relaxed mb-10 max-w-xl mx-auto text-sm md:text-base">
              Reserve your IMS chauffeur today and discover what it truly means to travel in luxury.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/booking">
                <Button variant="primary" size="lg" icon={<ArrowRight size={16} />}>
                  Reserve Now
                </Button>
              </Link>
              <a href="tel:8327663140">
                <Button variant="ghost" size="lg">
                  Call 832 766 3140
                </Button>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Gold bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
      </section>
    </main>
  );
};

export default Home;
