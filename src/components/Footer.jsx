
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import NewsletterSignup from './NewsletterSignup.jsx';

function Footer() {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Players', path: '/players' },
    { name: 'Fixtures', path: '/fixtures' },
    { name: 'Results', path: '/results' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'News', path: '/news' },
    { name: 'Contact', path: '/contact' },
  ];

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-[#0A0A0A] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-2xl font-bold text-[#0A0A0A]">GG</span>
              </div>
              <div>
                <div className="text-lg font-bold">Gujarat Gladiators</div>
                <div className="text-xs text-primary tracking-wider">ISCL TEAM</div>
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed mb-6">
              Forged in strength. Driven by glory. United for victory in the Indian Softball Cricket League.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-white/5 hover:bg-primary flex items-center justify-center transition-all duration-200 hover:scale-110"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/70 hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-primary mt-1 flex-shrink-0" />
                <a
                  href="mailto:info@gujaratgladiators.com"
                  className="text-sm text-white/70 hover:text-primary transition-colors duration-200"
                >
                  info@gujaratgladiators.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-primary mt-1 flex-shrink-0" />
                <a
                  href="tel:+919876543210"
                  className="text-sm text-white/70 hover:text-primary transition-colors duration-200"
                >
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary mt-1 flex-shrink-0" />
                <span className="text-sm text-white/70">
                  Ahmedabad, Gujarat, India
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Stay updated</h3>
            <p className="text-sm text-white/70 mb-4">
              Subscribe to our newsletter for latest updates and match alerts.
            </p>
            <NewsletterSignup />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/60">
              © 2026 Gujarat Gladiators. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="#" className="text-sm text-white/60 hover:text-primary transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="#" className="text-sm text-white/60 hover:text-primary transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
