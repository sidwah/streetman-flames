'use client';

import React from 'react';
import { SITE_CONFIG } from '@/lib/constants';
import { Navigation } from './navigation';
import { MobileMenu } from './mobile-menu';

/**
 * Header Component
 * 
 * Main site header with:
 * - Logo/Brand name
 * - Desktop navigation (hidden on mobile)
 * - Mobile menu button (visible on mobile)
 * - Sticky positioning with backdrop blur
 * - Scroll-triggered styling
 */
export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Brand */}
          <a
            href="#home"
            className="flex items-center gap-2 text-2xl font-bold transition-colors hover:text-primary"
            style={{ color: isScrolled ? 'var(--foreground)' : 'var(--foreground)' }}
          >
            <span className="text-3xl">🔥</span>
            <span>{SITE_CONFIG.name}</span>
          </a>

          {/* Desktop Navigation - Hidden on mobile */}
          <div className="hidden md:flex items-center gap-8">
            <Navigation />
          </div>

          {/* Mobile Menu - Visible on mobile only */}
          <div className="md:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}