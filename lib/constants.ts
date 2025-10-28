/**
 * Site Configuration & Constants
 * Central location for all site-wide data
 */

export const SITE_CONFIG = {
  name: 'Streetman Flames',
  title: 'Streetman Flames - Fresh Street Food You Love',
  description: "UPSA's favorite street food spot. Rice, fries, chicken & more.",
  tagline: 'Fresh Street Food You Love',
  
  // Contact Information
  contact: {
    phone1: '0257 743 913',
    phone2: '0249 990 455',
    location: 'UPSA, Behind Hostel C',
    city: 'Accra, Ghana',
    email: 'info@streetmanflames.com', // Optional
  },
  
  // Social Media
  social: {
    tiktok: {
      handle: '@streetmanfoods',
      url: 'https://www.tiktok.com/@streetmanfoods',
    },
    instagram: {
      handle: '@streetmanfoods_gh',
      url: 'https://www.instagram.com/streetmanfoods_gh',
    },
  },
  
  // Payment Methods
  payment: 'MOMO PAY or Call to Place Order',
  
  // Business Info
  businessType: 'Street Food Restaurant (Pickup Only)',
  deliveryNote: 'PICKUP ONLY - NO DELIVERY',
};

/**
 * Navigation Links
 * Used in both desktop and mobile menus
 */
export const NAV_LINKS = [
  {
    label: 'Home',
    href: '#home',
  },
  {
    label: 'Popular Dishes',
    href: '#popular',
  },
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Menu',
    href: '#menu',
  },
  {
    label: 'How It Works',
    href: '#how-it-works',
  },
  {
    label: 'Testimonials',
    href: '#testimonials',
  },
];

/**
 * Footer Quick Links
 */
export const FOOTER_LINKS = {
  main: [
    { label: 'Home', href: '#home' },
    { label: 'Menu', href: '#menu' },
    { label: 'About Us', href: '#about' },
    { label: 'How to Order', href: '#how-it-works' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '#privacy' },
    { label: 'Terms of Service', href: '#terms' },
  ],
};

/**
 * Social Media Links with Icons
 */
export const SOCIAL_LINKS = [
  {
    name: 'TikTok',
    handle: SITE_CONFIG.social.tiktok.handle,
    url: SITE_CONFIG.social.tiktok.url,
    icon: 'tiktok',
  },
  {
    name: 'Instagram',
    handle: SITE_CONFIG.social.instagram.handle,
    url: SITE_CONFIG.social.instagram.url,
    icon: 'instagram',
  },
];

/**
 * Opening Hours (Optional - can be used in footer)
 */
export const OPENING_HOURS = {
  weekdays: '10:00 AM - 10:00 PM',
  weekends: '10:00 AM - 11:00 PM',
};