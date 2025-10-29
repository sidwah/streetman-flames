'use client';

import React from 'react';
import Image from 'next/image';
import { SITE_CONFIG, FOOTER_LINKS } from '@/lib/constants';
import { Phone, MapPin, Instagram } from 'lucide-react';

/**
 * Footer Component
 * 
 * Site footer with:
 * - Bigger logo image (70x70px)
 * - Brand name
 * - Quick links
 * - Contact information
 * - Social media links
 * - Payment methods
 * - Copyright
 * - Brand red background (10% usage)
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <footer
      className="text-white"
      style={{ background: 'var(--brand-red)' }}
    >
      <div className="container">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              {/* Logo Image - BIGGER (70x70) */}
              <Image
                src="/images/logo.png"
                alt={`${SITE_CONFIG.name} Logo`}
                width={70}
                height={70}
                className="object-contain"
              />
              <span className="text-2xl font-bold">{SITE_CONFIG.name}</span>
            </div>
            <p className="text-white/80 mb-4">
              {SITE_CONFIG.description}
            </p>
            <p className="text-sm text-white/60">
              {SITE_CONFIG.businessType}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.main.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${SITE_CONFIG.contact.phone1.replace(/\s/g, '')}`}
                  className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  {SITE_CONFIG.contact.phone1}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${SITE_CONFIG.contact.phone2.replace(/\s/g, '')}`}
                  className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  {SITE_CONFIG.contact.phone2}
                </a>
              </li>
              <li className="flex items-start gap-2 text-white/80">
                <MapPin className="h-4 w-4 mt-1 shrink-0" />
                <span>
                  {SITE_CONFIG.contact.location}
                  <br />
                  {SITE_CONFIG.contact.city}
                </span>
              </li>
            </ul>
          </div>

          {/* Social & Payment */}
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="space-y-3 mb-6">
              <a
                href={SITE_CONFIG.social.tiktok.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
              >
                <span className="text-xl">🎵</span>
                {SITE_CONFIG.social.tiktok.handle}
              </a>
              <a
                href={SITE_CONFIG.social.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
                {SITE_CONFIG.social.instagram.handle}
              </a>
            </div>

            <div className="pt-4 border-t border-white/20">
              <p className="text-sm font-semibold mb-2">Payment Method</p>
              <p className="text-white/80 text-sm">{SITE_CONFIG.payment}</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/60 text-sm">
              © {currentYear} {SITE_CONFIG.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              {FOOTER_LINKS.legal.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white/60 hover:text-white text-sm transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <p className="text-center md:text-left text-white/40 text-xs mt-4">
            {SITE_CONFIG.deliveryNote}
          </p>
        </div>
      </div>
    </footer>
  );
}