import { OrderStep } from '@/types';
import {
  Search,
  Phone,
  ChefHat,
  ShoppingBag,
  type LucideIcon,
} from 'lucide-react';

/**
 * Streetman Flames Order Process Steps
 * PICKUP ONLY - NO DELIVERY SERVICE
 */

export const orderSteps: OrderStep[] = [
  {
    id: '1',
    step: 1,
    title: 'Browse & Select',
    description: 'Explore our delicious menu and pick your favorite meals',
    icon: 'Search' as const,
    details: [
      'Check out our full menu',
      'Choose your rice, fries, or cafe items',
      'See prices and meal descriptions',
      'Note your selections',
    ],
  },
  {
    id: '2',
    step: 2,
    title: 'Place Your Order',
    description: 'Call us or send MOMO payment with your order details',
    icon: 'Phone' as const,
    details: [
      'Call: 0257 743 913 or 0249 990 455',
      'Tell us your order',
      'Make MOMO payment',
      'Confirm your pickup time',
    ],
  },
  {
    id: '3',
    step: 3,
    title: 'We Prepare Fresh',
    description: 'Our chefs cook your meal with care and quality ingredients',
    icon: 'ChefHat' as const,
    details: [
      'Fresh ingredients used',
      'Cooked to perfection',
      'Quality assured',
      'Ready in 15-20 minutes',
    ],
  },
  {
    id: '4',
    step: 4,
    title: 'Pick Up Your Food',
    description: 'Come to UPSA Behind Hostel C and enjoy your hot meal!',
    icon: 'ShoppingBag' as const,
    details: [
      'Visit us at UPSA, Behind Hostel C',
      'Collect your hot, fresh meal',
      'Enjoy immediately or take away',
      'PICKUP ONLY - No delivery',
    ],
  },
];

/**
 * Icon mapping for order steps
 * Maps icon names to actual Lucide React icon components
 */
export const iconMap: Record<string, LucideIcon> = {
  Search,
  Phone,
  ChefHat,
  ShoppingBag,
};

/**
 * Get icon component by name
 */
export const getStepIcon = (iconName: string): LucideIcon => {
  return iconMap[iconName] || Search;
};

/**
 * Important notes about ordering
 */
export const orderingNotes = {
  paymentMethods: ['MOMO PAY', 'Call to Place Order'],
  pickupLocation: 'UPSA, Behind Hostel C',
  phones: ['0257 743 913', '0249 990 455'],
  preparationTime: '15-20 minutes',
  deliveryAvailable: false,
  deliveryNote: 'PICKUP ONLY - NO DELIVERY SERVICE',
};

/**
 * Social media links for additional contact
 */
export const socialLinks = {
  tiktok: {
    handle: '@streetmanfoods',
    url: 'https://www.tiktok.com/@streetmanfoods',
  },
  instagram: {
    handle: '@streetmanfoods_gh',
    url: 'https://www.instagram.com/streetmanfoods_gh',
  },
};