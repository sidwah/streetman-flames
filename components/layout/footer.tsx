'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const SITE_CONFIG = {
  name: 'Streetman Flames',
  tagline: 'Fresh Street Food You Love',
  description: "UPSA's favorite street food spot serving delicious rice meals, fries, chicken, and more.",
  currentYear: new Date().getFullYear(),
};

const QUICK_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Popular Dishes', href: '#popular' },
  { label: 'About Us', href: '#about' },
  { label: 'Full Menu', href: '#menu' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#8B0000] to-[#6B0000] text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="relative w-16 h-16">
                <Image
                  src="/images/logo.png"
                  alt="Streetman Flames Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold">{SITE_CONFIG.name}</h3>
                <p className="text-sm text-white/80">{SITE_CONFIG.tagline}</p>
              </div>
            </div>
            <p className="text-white/90 text-sm leading-relaxed">
              {SITE_CONFIG.description}
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-bold border-b border-white/30 pb-2">
              Quick Links
            </h4>
            <nav className="grid grid-cols-2 gap-2">
              {QUICK_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/80 hover:text-[#FFD700] transition-colors hover:translate-x-1 transform duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-bold border-b border-white/30 pb-2">
              Ready to Order?
            </h4>
            <p className="text-white/90 text-sm leading-relaxed">
              Visit us at UPSA Behind Hostel C or call us to place your order today!
            </p>
            <div className="space-y-2">
              <a
                href="#contact"
                className="block w-full px-6 py-3 bg-[#FFD700] hover:bg-[#FFC554] text-[#0D0D0D] rounded-lg font-bold text-center transition-colors"
              >
                Get in Touch
              </a>
              <a
                href="#menu"
                className="block w-full px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg font-semibold text-center transition-colors border border-white/30"
              >
                View Menu
              </a>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/70">
            <p>
              © {SITE_CONFIG.currentYear} {SITE_CONFIG.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              <span>Made with</span>
              <span className="text-[#FFD700] text-lg">🔥</span>
              <span>in Accra, Ghana</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}