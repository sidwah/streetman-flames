/**
 * Streetman Flames TypeScript Type Definitions
 * Complete type system for the application
 */

// ===== MENU TYPES =====

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
 * Menu item subcategory types
 */
export type MenuSubcategory =
  | 'Fried Rice'
  | 'Jollof Rice'
  | 'Fries'
  | 'Loaded'
  | 'Chicken'
  | 'Special Deals'
  | 'Snacks'
  | 'Sides'
  | 'Ice Cream'
  | 'Soft Drinks'
  | 'Boba Milkshakes';

/**
 * Menu item interface
 */
export interface MenuItem {
  id: string;
  name: string;
  category: Category;
  subcategory: MenuSubcategory;
  price: number;
  description: string;
  image: string;
  rating: number;
  reviewCount: number;
  isSpecial: boolean;
  isPopular: boolean;
  badge: string | null;
}

// ===== TESTIMONIAL TYPES =====

/**
 * Customer testimonial interface
 */
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  quote: string;
  date: string;
}

// ===== ORDER TYPES =====

/**
 * Order step icon names (Lucide React icons)
 */
export type OrderStepIcon = 'Search' | 'Phone' | 'ChefHat' | 'ShoppingBag';

/**
 * Order flow step interface
 */
export interface OrderStep {
  id: string;
  step: number;
  title: string;
  description: string;
  icon: string;
  details: string[];
}

// ===== SERVICE & FEATURES =====

/**
 * Service feature interface (for About section)
 */
export interface ServiceFeature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

// ===== CONTACT & SOCIAL =====

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

// ===== NAVIGATION =====

/**
 * Navigation link interface
 */
export interface NavLink {
  label: string;
  href: string;
  isExternal?: boolean;
}

// ===== UI COMPONENT TYPES =====

/**
 * Button variants
 */
export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'ghost'
  | 'danger';

/**
 * Button sizes
 */
export type ButtonSize = 'sm' | 'md' | 'lg';

/**
 * Card variants
 */
export type CardVariant = 'default' | 'elevated' | 'bordered' | 'ghost';

/**
 * Badge variants
 */
export type BadgeVariant =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger';

/**
 * Badge sizes
 */
export type BadgeSize = 'sm' | 'md' | 'lg';

/**
 * Input types
 */
export type InputType =
  | 'text'
  | 'email'
  | 'tel'
  | 'number'
  | 'password'
  | 'url'
  | 'search';

// ===== FORM TYPES =====

/**
 * Contact form data
 */
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

/**
 * Order form data
 */
export interface OrderFormData {
  customerName: string;
  phoneNumber: string;
  items: OrderItem[];
  specialInstructions?: string;
  paymentMethod: 'MOMO' | 'Cash';
  pickupTime?: string;
}

/**
 * Individual order item
 */
export interface OrderItem {
  menuItemId: string;
  quantity: number;
  specialRequests?: string;
}

/**
 * Order status
 */
export type OrderStatus =
  | 'pending'
  | 'confirmed'
  | 'preparing'
  | 'ready'
  | 'completed'
  | 'cancelled';

/**
 * Complete order interface
 */
export interface Order extends OrderFormData {
  id: string;
  status: OrderStatus;
  totalAmount: number;
  createdAt: string;
  updatedAt: string;
}

// ===== ANIMATION TYPES =====

/**
 * Animation preset names
 */
export type AnimationPreset =
  | 'fadeIn'
  | 'fadeInScale'
  | 'slideInLeft'
  | 'slideInRight'
  | 'slideInUp'
  | 'slideInDown'
  | 'bounceIn'
  | 'rotateIn'
  | 'scrollReveal';

/**
 * Scroll direction for animations
 */
export type ScrollDirection = 'up' | 'down';

// ===== UTILITY TYPES =====

/**
 * API response wrapper
 */
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

/**
 * Pagination info
 */
export interface PaginationInfo {
  page: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
}

/**
 * Paginated response
 */
export interface PaginatedResponse<T> {
  items: T[];
  pagination: PaginationInfo;
}

/**
 * Generic filter type
 */
export type Filter<T> = Partial<T>;

/**
 * Sort direction
 */
export type SortDirection = 'asc' | 'desc';

/**
 * Sort options
 */
export interface SortOptions<T> {
  field: keyof T;
  direction: SortDirection;
}

// ===== SITE CONFIGURATION TYPES =====

/**
 * Site metadata
 */
export interface SiteMetadata {
  title: string;
  description: string;
  keywords: string[];
  ogImage: string;
  twitterCard: 'summary' | 'summary_large_image';
}

/**
 * Site configuration
 */
export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  location: string;
  phone1: string;
  phone2: string;
  tiktok: string;
  instagram: string;
  metadata: SiteMetadata;
}

// ===== FORM VALIDATION TYPES =====

/**
 * Form field error
 */
export interface FieldError {
  field: string;
  message: string;
}

/**
 * Form validation result
 */
export interface ValidationResult {
  isValid: boolean;
  errors: FieldError[];
}

// ===== CART TYPES (for future implementation) =====

/**
 * Cart item interface
 */
export interface CartItem extends OrderItem {
  menuItem: MenuItem;
  subtotal: number;
}

/**
 * Shopping cart interface
 */
export interface Cart {
  items: CartItem[];
  totalItems: number;
  subtotal: number;
  tax: number;
  total: number;
}

// ===== TYPE GUARDS =====

/**
 * Check if value is a valid menu category
 */
export const isCategory = (value: string): value is Category => {
  return [
    'Rice Meals',
    'Fries & Loaded',
    'Cafe Bites',
    'Drinks',
    'Extras',
    'Specials',
  ].includes(value);
};

/**
 * Check if value is a MenuItem
 */
export const isMenuItem = (value: unknown): value is MenuItem => {
  return (
    typeof value === 'object' &&
    value !== null &&
    'id' in value &&
    'name' in value &&
    'price' in value &&
    'category' in value
  );
};

/**
 * Check if value is a Testimonial
 */
export const isTestimonial = (value: unknown): value is Testimonial => {
  return (
    typeof value === 'object' &&
    value !== null &&
    'id' in value &&
    'name' in value &&
    'rating' in value &&
    'quote' in value
  );
};