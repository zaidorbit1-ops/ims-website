import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, User, CheckCircle } from "lucide-react";

// ─── Contact info ──────────────────────────────────────────────────────────────
const contactInfo = [
  {
    icon: Phone,
    label: "Phone / WhatsApp",
    value: "832 766 3140",
    href: "tel:8327663140",
    sub: "Available 24/7",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@imslimoandchaufferservice.com",
    href: "mailto:info@imslimoandchaufferservice.com",
    sub: "We reply within 1 hour",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "9406 Leein Lane, Sugar Land, TX 77498",
    href: null,
    sub: "Serving Sugar Land & Houston",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "24 / 7 — Every Day",
    href: null,
    sub: "Including Holidays",
  },
];

// ─── Contact Page ──────────────────────────────────────────────────────────────
const Contact = () => {

  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
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
          name: form.name,
          email: form.email,
          message: form.message,
          subject: form.subject,
          phone: form.phone,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
        setForm({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        setError(data.error || "Failed to send message.");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    }
    setSending(false);
  };

  return (
    <main>

      {/* ── Hero ── */}
      <section className="relative h-[52vh] min-h-[340px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1600&q=80"
            alt="Contact IMS Limo"
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
            We're Here for You
          </motion.span>
          <motion.h1
            className="text-5xl md:text-6xl font-serif font-light text-white leading-tight mb-5"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Contact <span className="text-gold">Us</span>
          </motion.h1>
          <div className="w-16 h-0.5 bg-gold mx-auto mb-4" />
          <motion.p
            className="text-white/70 max-w-lg mx-auto text-sm leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Have a question, a custom request, or just want to say hello? We'd love to hear from you.
          </motion.p>
        </div>
      </section>

      {/* ── Contact Cards ── */}
      <section className="bg-charcoal py-12 px-4">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map(({ icon: Icon, label, value, href, sub }, i) => (
            <motion.div
              key={label}
              className="border border-white/10 p-6 group hover:border-gold/50 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="w-10 h-10 bg-gold/15 flex items-center justify-center mb-4 group-hover:bg-gold transition-colors duration-300">
                <Icon size={16} className="text-gold group-hover:text-white transition-colors duration-300" />
              </div>
              <p className="text-white/40 text-[10px] tracking-widest uppercase mb-1">{label}</p>
              {href ? (
                <a href={href} className="text-white text-sm font-medium hover:text-gold transition-colors block mb-1">
                  {value}
                </a>
              ) : (
                <p className="text-white text-sm font-medium mb-1">{value}</p>
              )}
              <p className="text-white/40 text-xs">{sub}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Form + Map ── */}
      <section className="section-padding bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-14 items-start">

            {/* ── Left: Form ── */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              {submitted ? (
                <div className="bg-white border border-gold/20 p-12 text-center">
                  <div className="w-16 h-16 bg-gold/10 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={28} className="text-gold" />
                  </div>
                  <h3 className="text-3xl font-serif font-light text-charcoal mb-3">
                    Message <span className="text-gold">Sent!</span>
                  </h3>
                  <div className="w-12 h-0.5 bg-gold mx-auto mb-5" />
                  <p className="text-gray-500 text-sm leading-relaxed max-w-sm mx-auto mb-8">
                    Thank you, <strong>{form.name}</strong>. We've received your message and our team will contact you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-semibold tracking-widest uppercase text-gold border border-gold px-6 py-3 hover:bg-gold hover:text-white transition-all duration-300"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <div className="bg-white border border-gold/20 p-8 md:p-10">
                  <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-gold mb-2 block">
                    Send a Message
                  </span>
                  <h2 className="text-3xl font-serif font-light text-charcoal mb-1">
                    Got a <span className="text-gold">Question?</span>
                  </h2>
                  <div className="w-10 h-0.5 bg-gold mt-3 mb-8" />

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {error && <div className="text-red-500 text-xs mb-2">{error}</div>}
                    {/* Name + Email */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-[10px] font-semibold tracking-[0.25em] uppercase text-gold mb-1.5">
                          Full Name
                        </label>
                        <div className="relative">
                          <User size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/50" />
                          <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="John Smith"
                            required
                            className="w-full bg-cream border border-gold/25 text-charcoal placeholder-gray-400 text-sm py-3.5 pl-11 pr-4 focus:outline-none focus:border-gold transition-colors duration-300"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-[10px] font-semibold tracking-[0.25em] uppercase text-gold mb-1.5">
                          Email Address
                        </label>
                        <div className="relative">
                          <Mail size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/50" />
                          <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="john@example.com"
                            required
                            className="w-full bg-cream border border-gold/25 text-charcoal placeholder-gray-400 text-sm py-3.5 pl-11 pr-4 focus:outline-none focus:border-gold transition-colors duration-300"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Phone + Subject */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-[10px] font-semibold tracking-[0.25em] uppercase text-gold mb-1.5">
                          Phone Number
                        </label>
                        <div className="relative">
                          <Phone size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/50" />
                          <input
                            type="tel"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="+1 (000) 000-0000"
                            className="w-full bg-cream border border-gold/25 text-charcoal placeholder-gray-400 text-sm py-3.5 pl-11 pr-4 focus:outline-none focus:border-gold transition-colors duration-300"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-[10px] font-semibold tracking-[0.25em] uppercase text-gold mb-1.5">
                          Subject
                        </label>
                        <input
                          type="text"
                          name="subject"
                          value={form.subject}
                          onChange={handleChange}
                          placeholder="e.g. Corporate Account Inquiry"
                          required
                          className="w-full bg-cream border border-gold/25 text-charcoal placeholder-gray-400 text-sm py-3.5 px-4 focus:outline-none focus:border-gold transition-colors duration-300"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-[10px] font-semibold tracking-[0.25em] uppercase text-gold mb-1.5">
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us how we can help you..."
                        required
                        rows={5}
                        className="w-full bg-cream border border-gold/25 text-charcoal placeholder-gray-400 text-sm py-3.5 px-4 focus:outline-none focus:border-gold transition-colors duration-300 resize-none"
                      />
                    </div>

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
                          Send Message <Send size={15} />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              )}
            </motion.div>

            {/* ── Right: Info + Map ── */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              {/* Info block */}
              <div className="bg-charcoal p-8">
                <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-gold mb-3 block">
                  About Us
                </span>
                <h3 className="text-2xl font-serif font-light text-white mb-2 leading-snug">
                  IMS Limo &<br />
                  <span className="text-gold">Houston's Premier Car Service</span>
                </h3>
                <div className="w-10 h-0.5 bg-gold mb-5" />
                <p className="text-white/55 text-sm leading-relaxed mb-6">
                  Whether you have a question about our fleet, need a custom quote for a corporate account, or want to arrange something special — our team is always available and always happy to help.
                </p>
                <div className="space-y-3">
                  {["Serving Houston & Greater Area", "Airport, Corporate & Event Transfers", "Licensed & Insured Chauffeurs", "Luxury Sedans, SUVs & Limousines"].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-1 h-1 bg-gold rounded-full flex-shrink-0" />
                      <span className="text-white/60 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Embedded Map */}
              {/* Google Map removed as requested */}
            </motion.div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Contact;

