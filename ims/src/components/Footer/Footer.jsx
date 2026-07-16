import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaInstagram, FaFacebookF, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import { navLinks } from "../../data/dummyData";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white text-charcoal border-t border-gray-100">
      {/* Top Gold Line */}
      <div className="h-0.5 bg-gold" />

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3 mb-5">
            <img
              src="/logo.png"
              alt="IMS Limo"
              className="h-10 w-auto object-contain"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "flex";
              }}
            />
            {/* Fallback */}
            <div className="w-10 h-10 bg-gold items-center justify-center hidden">
              <span className="text-white font-serif font-bold text-base">IMS</span>
            </div>
            <div>
              <p className="text-charcoal font-serif font-bold text-lg leading-none">IMS Limo</p>
              <p className="text-gold text-xs tracking-[0.2em] uppercase">&amp; Chauffeur Service</p>
            </div>
          </div>
          <div className="flex gap-3">
            {[FaInstagram, FaFacebookF, FaXTwitter, FaLinkedinIn].map((Icon, i) => (
              <a
                key={i}
                href="https://imslimo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-charcoal/20 flex items-center justify-center hover:border-gold hover:text-gold transition-all duration-300"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xs font-semibold tracking-[0.3em] uppercase text-gold mb-6">
            Navigation
          </h4>
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="text-charcoal/60 hover:text-charcoal text-sm transition-colors duration-200 tracking-wide"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Served Areas */}
        <div>
          <h4 className="text-xs font-semibold tracking-[0.3em] uppercase text-gold mb-6">
            Served Areas
          </h4>
          <ul className="space-y-3">
            {[
              "George Bush Airport (IAH)",
              "Hobby Airport (HOU)",
              "Galveston Cruise Terminal",
              "Space Center Houston",
              "Kemah Boardwalk",
              "Golden Nugget Lake Charles",
              "Downtown Houston",
              "The Galleria & Uptown",
            ].map((area) => (
              <li key={area}>
                <Link
                  to="/served-area"
                  className="text-charcoal/60 hover:text-charcoal text-sm transition-colors duration-200 tracking-wide"
                >
                  {area}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-xs font-semibold tracking-[0.3em] uppercase text-gold mb-6">
            Contact
          </h4>
          <ul className="space-y-4">
            <li className="flex gap-3 items-start">
              <Phone size={14} className="text-gold mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-charcoal/40 text-xs tracking-widest uppercase mb-0.5">24/7 Reservations</p>
                <a href="tel:8327663140" className="text-charcoal/80 hover:text-charcoal text-sm transition-colors">
                  832 766 3140
                </a>
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <Mail size={14} className="text-gold mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-charcoal/40 text-xs tracking-widest uppercase mb-0.5">Email</p>
                <a href="mailto:info@imslimoandchaufferservice.com" className="text-charcoal/80 hover:text-charcoal text-sm transition-colors">
                  info@imslimoandchaufferservice.com
                </a>
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <MapPin size={14} className="text-gold mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-charcoal/40 text-xs tracking-widest uppercase mb-0.5">Headquarters</p>
                <p className="text-charcoal/80 text-sm">9406 Leein Lane, Sugar Land, TX 77498</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-charcoal/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-charcoal/40 text-xs tracking-wide">
            © {year} IMS Limo & Chauffeur Service. All rights reserved.
          </p>
          <div className="flex gap-5">
              <Link to="/legal/privacy-policy" className="text-charcoal/40 hover:text-charcoal text-xs transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/legal/terms-of-service" className="text-charcoal/40 hover:text-charcoal text-xs transition-colors duration-200">
                Terms of Service
              </Link>
              <Link to="/legal/cancellation-policy" className="text-charcoal/40 hover:text-charcoal text-xs transition-colors duration-200">
                Cancellation Policy
              </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
