'use client';

import React from 'react';
import Image from 'next/image';
import { NAV_LINKS, SITE_CONFIG } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone } from 'lucide-react';

/**
 * Mobile Menu Component
 * 
 * Mobile navigation with:
 * - Hamburger icon toggle
 * - Slide-in overlay menu with SOLID WHITE background
 * - Bigger logo (60x60px)
 * - Clean navigation links (Home, About, Menu, Contact)
 * - Orange "Order Now" button (matches desktop!)
 * - Close button
 * - Body scroll lock when open
 */
export function MobileMenu() {
  const [isOpen, setIsOpen] = React.useState(false);

  // Lock body scroll when menu is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setIsOpen(false);

    // Smooth scroll after menu closes
    setTimeout(() => {
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
    }, 300);
  };

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg hover:bg-cream transition-colors"
        aria-label="Toggle menu"
      >
        <Menu className="h-6 w-6" style={{ color: 'var(--foreground)' }} />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu Panel - GUARANTEED SOLID WHITE */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-80 !bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ 
          backgroundColor: '#FFFFFF !important',
          background: '#FFFFFF',
        }}
      >
        {/* Menu Header - White background */}
        <div 
          className="flex items-center justify-between p-6 border-b border-gray-200"
          style={{ backgroundColor: '#FFFFFF' }}
        >
          <div className="flex items-center gap-3">
            {/* Logo Image - BIGGER (60x60) */}
            <Image
              src="/images/logo.png"
              alt={SITE_CONFIG.name}
              width={60}
              height={60}
              className="object-contain"
            />
            <span className="text-xl font-bold" style={{ color: 'var(--foreground)' }}>
              {SITE_CONFIG.name}
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-lg hover:bg-cream transition-colors"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" style={{ color: 'var(--foreground)' }} />
          </button>
        </div>

        {/* Navigation Links - White background */}
        <nav 
          className="p-6"
          style={{ backgroundColor: '#FFFFFF' }}
        >
          {/* Navigation Links */}
          <ul className="space-y-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="block px-4 py-3 rounded-lg text-base font-medium transition-colors hover:bg-cream hover:text-primary"
                  style={{ color: 'var(--text)' }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Order Now Button - ORANGE LIKE DESKTOP! */}
          <div className="mt-6">
            <Button
              variant="primary"
              size="lg"
              className="w-full"
              leftIcon={<Phone className="h-5 w-5" />}
              onClick={() => {
                setIsOpen(false);
                window.location.href = 'tel:0257743913';
              }}
            >
              Order Now
            </Button>
          </div>

          {/* Contact Info - White background */}
          <div 
            className="mt-8 pt-6 border-t border-gray-200"
            style={{ backgroundColor: '#FFFFFF' }}
          >
            <p className="text-sm font-semibold mb-2" style={{ color: 'var(--foreground)' }}>
              Contact Us
            </p>
            <div className="space-y-2 text-sm" style={{ color: 'var(--text)' }}>
              <a
                href={`tel:${SITE_CONFIG.contact.phone1.replace(/\s/g, '')}`}
                className="block hover:text-primary transition-colors"
              >
                📞 {SITE_CONFIG.contact.phone1}
              </a>
              <a
                href={`tel:${SITE_CONFIG.contact.phone2.replace(/\s/g, '')}`}
                className="block hover:text-primary transition-colors"
              >
                📞 {SITE_CONFIG.contact.phone2}
              </a>
              <p>📍 {SITE_CONFIG.contact.location}</p>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}