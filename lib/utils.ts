import { clsx, type ClassValue } from 'clsx';

/**
 * Merge class names using clsx
 * Useful for combining Tailwind classes with conditional logic
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

/**
 * Format price in Ghana Cedis
 * @param price - Price as number
 * @returns Formatted string like "GH₵ 65"
 */
export function formatPriceGHC(price: number): string {
  return `GH₵ ${price}`;
}

/**
 * Format Ghana phone number
 * @param phone - Phone number string
 * @returns Formatted phone number
 */
export function formatPhoneNumber(phone: string): string {
  // Remove any non-digit characters
  const cleaned = phone.replace(/\D/g, '');
  
  // Format as: 0257 743 913
  if (cleaned.length === 10) {
    return `${cleaned.slice(0, 4)} ${cleaned.slice(4, 7)} ${cleaned.slice(7)}`;
  }
  
  return phone;
}

/**
 * Smooth scroll to a section
 * @param elementId - ID of the element to scroll to
 */
export function scrollToSection(elementId: string): void {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
}

/**
 * Generate star rating array
 * @param rating - Rating value (0-5)
 * @returns Array of booleans representing filled stars
 */
export function generateStarRating(rating: number): boolean[] {
  return Array.from({ length: 5 }, (_, index) => index < Math.floor(rating));
}