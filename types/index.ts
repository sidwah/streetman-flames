/**
 * Menu item category types
 */
export type Category =
  | 'Rice Meals'
  | 'Fries & Loaded'
  | 'Cafe Bites'
  | 'Drinks'
  | 'Extras'
  | 'Specials';

/**
 * Menu item interface
 */
export interface MenuItem {
  id: string;
  name: string;
  category: Category;
  price: number;
  description?: string;
  image?: string;
  rating?: number;
  reviewCount?: number;
  isSpecial?: boolean;
  isPopular?: boolean;
}

/**
 * Customer testimonial interface
 */
export interface Testimonial {
  id: string;
  name: string;
  review: string;
  rating: number;
  date?: string;
  avatar?: string;
}

/**
 * Order flow step interface
 */
export interface OrderStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

/**
 * Service feature interface (for About section)
 */
export interface ServiceFeature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

/**
 * Social media link interface
 */
export interface SocialLink {
  platform: 'tiktok' | 'instagram' | 'facebook' | 'twitter';
  handle: string;
  url: string;
}

/**
 * Contact information interface
 */
export interface ContactInfo {
  phone1: string;
  phone2: string;
  location: string;
  email?: string;
}

/**
 * Navigation link interface
 */
export interface NavLink {
  label: string;
  href: string;
  isExternal?: boolean;
}