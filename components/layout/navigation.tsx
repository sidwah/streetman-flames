'use client';

import React from 'react';
import { NAV_LINKS } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

/**
 * Desktop Navigation Component
 * 
 * Features:
 * - Clean navigation links (Home, About, Menu, Contact)
 * - Orange "Order Now" button
 * - Smooth scroll to sections
 * - Active link highlighting
 */
export function Navigation() {
  const [activeSection, setActiveSection] = React.useState('home');

  // Track active section on scroll
  React.useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_LINKS.map(link => link.href.substring(1));
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
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
    <>
      {/* Navigation Links */}
      <nav className="flex items-center gap-8">
        {NAV_LINKS.map((link) => {
          const sectionId = link.href.substring(1);
          const isActive = activeSection === sectionId;
          
          return (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className={`text-base font-medium transition-colors hover:text-primary ${
                isActive 
                  ? 'text-primary' 
                  : 'text-foreground'
              }`}
              style={{
                color: isActive ? 'var(--primary)' : 'var(--foreground)',
              }}
            >
              {link.label}
            </a>
          );
        })}
      </nav>

      {/* Order Now Button */}
      <Button
        variant="primary"
        size="md"
        leftIcon={<Phone className="h-5 w-5" />}
        onClick={() => {
          window.location.href = 'tel:0257743913';
        }}
      >
        Order Now
      </Button>
    </>
  );
}