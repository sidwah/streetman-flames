'use client';

import React from 'react';
import { NAV_LINKS } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

/**
 * Navigation Component (Desktop)
 * 
 * Desktop navigation menu with:
 * - Smooth scroll links
 * - Active section highlighting
 * - Primary CTA button
 * - Hover effects
 */
export function Navigation() {
  const [activeSection, setActiveSection] = React.useState('home');

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_LINKS.map((link) =>
        link.href.replace('#', '')
      );

      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className="flex items-center gap-8">
      {/* Navigation Links */}
      <ul className="flex items-center gap-6">
        {NAV_LINKS.map((link) => {
          const isActive =
            activeSection === link.href.replace('#', '');

          return (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive
                    ? 'text-primary'
                    : 'text-text'
                }`}
              >
                {link.label}
              </a>
            </li>
          );
        })}
      </ul>

      {/* CTA Button */}
      <Button
        variant="primary"
        size="md"
        leftIcon={<Phone className="h-4 w-4" />}
        onClick={() => (window.location.href = 'tel:0257743913')}
      >
        Order Now
      </Button>
    </nav>
  );
}