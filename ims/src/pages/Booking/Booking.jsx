import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone, Mail, MapPin, Clock, CheckCircle, ArrowRight, User,
  Calendar, Users, Luggage, Navigation, Flag,
} from "lucide-react";
import Button from "../../components/Button/Button";

// ─── Vehicles from our real fleet ─────────────────────────────────────────────
const vehicles = [
  "Mercedes-Benz S 500",
  "Cadillac Escalade Limousine",
  "Cadillac XTS",
  "Chevrolet Suburban",
  "GMC Yukon",
];

const travelTypes = [
  "Airport Pickup",
  "Airport Dropoff",
  "Sight Seeing",
  "Night Out",
  "Wedding",
  "Party",
  "Corporate Transfer",
  "Cruise Terminal",
  "Point to Point",
  "Others",
];

// ─── Contact info items ────────────────────────────────────────────────────────
const contactItems = [
  {
    icon: Phone,
    label: "Call / WhatsApp",
    value: "832 766 3140",
    href: "tel:8327663140",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "info@imslimoandchaufferservice.com",
    href: "mailto:info@imslimoandchaufferservice.com",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "9406 Leein Lane, Sugar Land, TX 77498",
    href: null,
  },
  {
    icon: Clock,
    label: "Availability",
    value: "24 / 7 — Every Day of the Year",
    href: null,
  },
];

// ─── Input helper ──────────────────────────────────────────────────────────────
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
        className={`w-full bg-cream border border-gold/25 text-charcoal placeholder-gray-400 text-sm py-3.5 pr-4 focus:outline-none focus:border-gold transition-colors duration-300 ${Icon ? "pl-11" : "pl-4"}`}
      />
    </div>
  </div>
);

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
        className={`w-full bg-cream border border-gold/25 text-charcoal text-sm py-3.5 pr-10 focus:outline-none focus:border-gold transition-colors duration-300 appearance-none cursor-pointer ${Icon ? "pl-11" : "pl-4"} ${!value ? "text-gray-400" : "text-charcoal"}`}
      >
        <option value="">Select {label}</option>
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
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

// ─── Booking Page ──────────────────────────────────────────────────────────────
const Booking = () => {
  const [form, setForm] = useState({
    fullName: "", email: "", phone: "", travelType: "",
    pickup: "", destination: "", passengers: "", luggage: "",
    date: "", time: "", vehicle: "", plan: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError("");
    try {
      const res = await fetch("https://imslimoandchaufferservice.com/Backend/mail/send_mail.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.fullName,
          email: form.email,
          phone: form.phone,
          subject: `Booking: ${form.travelType}`,
          message: `Travel Type: ${form.travelType}\nPickup: ${form.pickup}\nDestination: ${form.destination}\nPassengers: ${form.passengers}\nLuggage: ${form.luggage}\nDate: ${form.date}\nTime: ${form.time}\nVehicle: ${form.vehicle}\nPlan: ${form.plan}`,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
        setForm({
          fullName: "", email: "", phone: "", travelType: "",
          pickup: "", destination: "", passengers: "", luggage: "",
          date: "", time: "", vehicle: "", plan: "",
        });
      } else {
        setError(data.error || "Failed to send booking.");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    }
    setSending(false);
  };

  return (
    <main>

      {/* ── Hero ── */}
      <section className="relative h-[52vh] min-h-[360px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600&q=80"
            alt="Book IMS Limo"
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
            Instant Online Quote
          </motion.span>
          <motion.h1
            className="text-5xl md:text-6xl font-serif font-light text-white leading-tight mb-5"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Book Your <span className="text-gold">Ride</span>
          </motion.h1>
          <div className="w-16 h-0.5 bg-gold mx-auto mb-4" />
          <motion.p
            className="text-white/70 max-w-xl mx-auto text-sm leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Fill in your details below and our team will confirm your reservation within minutes.
          </motion.p>
        </div>
      </section>

      {/* ── Main Section ── */}
      <section className="section-padding bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">

            {/* ── Left: Contact Info ── */}
            <motion.aside
              className="lg:col-span-1 space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              {/* Reach us card */}
              <div className="bg-charcoal p-8">
                <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-gold mb-3 block">
                  Reach Us
                </span>
                <h3 className="text-2xl font-serif font-light text-white mb-2 leading-snug">
                  Prefer to Book<br /><span className="text-gold">by Phone?</span>
                </h3>
                <div className="w-10 h-0.5 bg-gold mb-6" />
                <div className="space-y-5">
                  {contactItems.map(({ icon: Icon, label, value, href }) => (
                    <div key={label} className="flex items-start gap-4">
                      <div className="w-9 h-9 bg-gold/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon size={14} className="text-gold" />
                      </div>
                      <div>
                        <p className="text-white/40 text-[10px] tracking-widest uppercase mb-0.5">{label}</p>
                        {href ? (
                          <a href={href} className="text-white text-sm hover:text-gold transition-colors">
                            {value}
                          </a>
                        ) : (
                          <p className="text-white text-sm">{value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why book with us */}
              <div className="border border-gold/25 p-8 bg-white">
                <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-gold mb-4 block">
                  Why Book With Us
                </span>
                <ul className="space-y-3">
                  {[
                    "Instant confirmation via email & SMS",
                    "Free cancellation up to 2 hours before",
                    "Professional licensed chauffeurs",
                    "All 6 luxury vehicles available 24/7",
                    "Flight tracking for airport rides",
                    "No hidden fees — transparent pricing",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle size={14} className="text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-500">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.aside>

            {/* ── Right: Form ── */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              {submitted ? (
                <motion.div
                  className="bg-white border border-gold/25 p-14 text-center h-full flex flex-col items-center justify-center"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="w-16 h-16 bg-gold/10 flex items-center justify-center mb-6">
                    <CheckCircle size={30} className="text-gold" />
                  </div>
                  <h3 className="text-3xl font-serif font-light text-charcoal mb-3">
                    Booking <span className="text-gold">Received!</span>
                  </h3>
                  <div className="w-12 h-0.5 bg-gold mx-auto mb-5" />
                  <p className="text-gray-500 text-sm leading-relaxed max-w-md mb-8">
                    Thank you, <strong>{form.fullName}</strong>. We've received your reservation request and our team will contact you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-semibold tracking-widest uppercase text-gold border border-gold px-6 py-3 hover:bg-gold hover:text-white transition-all duration-300"
                  >
                    Make Another Booking
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white border border-gold/20 p-8 md:p-10">
                  {error && <div className="text-red-500 text-xs mb-2">{error}</div>}
                  {/* Header */}
                  <div className="mb-8">
                    <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-gold mb-2 block">
                      Step 1 of 1
                    </span>
                    <h2 className="text-3xl font-serif font-light text-charcoal mb-1">
                      Instant Online <span className="text-gold">Quote</span>
                    </h2>
                    <div className="w-10 h-0.5 bg-gold mt-3" />
                  </div>

                  {/* Row 1: Name + Email */}
                  <div className="grid md:grid-cols-2 gap-5 mb-5">
                    <Field label="Full Name" icon={User} name="fullName" value={form.fullName} onChange={handleChange} placeholder="John Smith" required />
                    <Field label="Your Email" icon={Mail} type="email" name="email" value={form.email} onChange={handleChange} placeholder="john@example.com" required />
                  </div>

                  {/* Row 2: Phone + Travel Type */}
                  <div className="grid md:grid-cols-2 gap-5 mb-5">
                    <Field label="Phone Number" icon={Phone} type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+1 (000) 000-0000" required />
                    <SelectField label="Select Travel" name="travelType" value={form.travelType} onChange={handleChange} options={travelTypes} required />
                  </div>

                  {/* Row 3: Pickup + Destination */}
                  <div className="grid md:grid-cols-2 gap-5 mb-5">
                    <Field label="Pick-up Location" icon={Navigation} name="pickup" value={form.pickup} onChange={handleChange} placeholder="Address or Airport" required />
                    <Field label="Destination Location" icon={Flag} name="destination" value={form.destination} onChange={handleChange} placeholder="Address or Hotel" required />
                  </div>

                  {/* Row 4: Passengers + Luggage */}
                  <div className="grid md:grid-cols-2 gap-5 mb-5">
                    <Field label="No of Passengers" icon={Users} type="number" name="passengers" value={form.passengers} onChange={handleChange} placeholder="e.g. 2" required />
                    <Field label="No of Luggages" icon={Luggage} type="number" name="luggage" value={form.luggage} onChange={handleChange} placeholder="e.g. 3" required />
                  </div>

                  {/* Row 5: Date + Time */}
                  <div className="grid md:grid-cols-2 gap-5 mb-5">
                    <Field label="Date" icon={Calendar} type="date" name="date" value={form.date} onChange={handleChange} required />
                    <Field label="Time" icon={Clock} type="time" name="time" value={form.time} onChange={handleChange} required />
                  </div>

                  {/* Row 6: Vehicle + Plan */}
                  <div className="grid md:grid-cols-2 gap-5 mb-8">
                    <SelectField label="Select Vehicle" name="vehicle" value={form.vehicle} onChange={handleChange} options={vehicles} required />
                    <SelectField
                      label="Select Plan"
                      name="plan"
                      value={form.plan}
                      onChange={handleChange}
                      options={["Airport Pickup", "Airport Dropoff", "Sight Seeing", "Night Out", "Wedding", "Party", "Corporate Transfer", "Others"]}
                      required
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full bg-gold text-white font-semibold tracking-widest uppercase text-sm py-4 hover:bg-gold-dark hover:shadow-[0_8px_30px_rgba(184,139,64,0.45)] transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-60"
                    disabled={sending}
                  >
                    {sending ? (
                      <>
                        <svg className="animate-spin mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path></svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Plan My Ride <ArrowRight size={16} />
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-gray-400 mt-4 tracking-wide">
                    We'll confirm within 15 minutes · No payment required now
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Booking;

