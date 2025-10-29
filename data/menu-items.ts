import { MenuItem } from '@/types';

/**
 * Streetman Flames Menu Items
 * Complete menu data with all categories, prices, and details
 * Based on actual menu images
 */

export const menuItems: MenuItem[] = [
  // ===== FRIED RICE CATEGORY =====
  {
    id: 'wan',
    name: 'Wan',
    description: 'Fried Rice with 2 Chicken',
    category: 'Rice Meals',
    subcategory: 'Fried Rice',
    price: 40,
    image: '/images/menu/fried-rice.jpg',
    rating: 4.5,
    reviewCount: 89,
    isPopular: true,
    isSpecial: false,
    badge: null,
  },
  {
    id: 'bad-man',
    name: 'Bad Man',
    description: 'Assorted Fried Rice',
    category: 'Rice Meals',
    subcategory: 'Fried Rice',
    price: 45,
    image: '/images/menu/assorted-fried-rice.jpg',
    rating: 4.6,
    reviewCount: 102,
    isPopular: false,
    isSpecial: false,
    badge: null,
  },
  {
    id: 'safety',
    name: 'Safety',
    description: 'Assorted Fried Rice with 2 Chicken',
    category: 'Rice Meals',
    subcategory: 'Fried Rice',
    price: 65,
    image: '/images/menu/safety.jpg',
    rating: 4.8,
    reviewCount: 156,
    isPopular: true,
    isSpecial: false,
    badge: 'Popular',
  },
  {
    id: 'small-time',
    name: 'Small Time',
    description: 'Egg Fried Rice',
    category: 'Rice Meals',
    subcategory: 'Fried Rice',
    price: 30,
    image: '/images/menu/egg-fried-rice.jpg',
    rating: 4.3,
    reviewCount: 67,
    isPopular: false,
    isSpecial: false,
    badge: null,
  },

  // ===== JOLLOF RICE CATEGORY =====
  {
    id: 'likkle-j',
    name: 'Likkle J',
    description: 'Jollof Rice with 2 Chicken',
    category: 'Rice Meals',
    subcategory: 'Jollof Rice',
    price: 45,
    image: '/images/menu/jollof-chicken.jpg',
    rating: 4.7,
    reviewCount: 134,
    isPopular: true,
    isSpecial: false,
    badge: null,
  },
  {
    id: 'together',
    name: 'Together',
    description: 'Assorted Jollof Rice',
    category: 'Rice Meals',
    subcategory: 'Jollof Rice',
    price: 50,
    image: '/images/menu/assorted-jollof.jpg',
    rating: 4.5,
    reviewCount: 98,
    isPopular: false,
    isSpecial: false,
    badge: null,
  },
  {
    id: 'active',
    name: 'Active',
    description: 'Assorted Jollof with 2 Chicken',
    category: 'Rice Meals',
    subcategory: 'Jollof Rice',
    price: 70,
    image: '/images/menu/active.jpg',
    rating: 4.9,
    reviewCount: 187,
    isPopular: true,
    isSpecial: false,
    badge: 'Popular',
  },
  {
    id: 'yah-man',
    name: 'Yah Man',
    description: 'Egg Jollof Rice',
    category: 'Rice Meals',
    subcategory: 'Jollof Rice',
    price: 40,
    image: '/images/menu/egg-jollof.jpg',
    rating: 4.4,
    reviewCount: 76,
    isPopular: false,
    isSpecial: false,
    badge: null,
  },

  // ===== FRIES & LOADED CATEGORY =====
  {
    id: 'wan-time',
    name: 'Wan Time',
    description: 'Fries Only',
    category: 'Fries & Loaded',
    subcategory: 'Fries',
    price: 20,
    image: '/images/menu/fries.jpg',
    rating: 4.2,
    reviewCount: 54,
    isPopular: false,
    isSpecial: false,
    badge: null,
  },
  {
    id: 'bun-um',
    name: 'Bun-Um',
    description: 'Fries with 2 Chicken',
    category: 'Fries & Loaded',
    subcategory: 'Fries',
    price: 35,
    image: '/images/menu/fries-chicken.jpg',
    rating: 4.6,
    reviewCount: 112,
    isPopular: false,
    isSpecial: false,
    badge: null,
  },
  {
    id: 'street-pack',
    name: 'Street Pack',
    description: 'Loaded Fries',
    category: 'Fries & Loaded',
    subcategory: 'Loaded',
    price: 80,
    image: '/images/menu/loaded-fries.jpg',
    rating: 4.9,
    reviewCount: 203,
    isPopular: true,
    isSpecial: false,
    badge: 'Popular',
  },
  {
    id: 'good-chicken',
    name: 'Good Chicken',
    description: '4pcs Chicken',
    category: 'Fries & Loaded',
    subcategory: 'Chicken',
    price: 45,
    image: '/images/menu/4pcs-chicken.jpg',
    rating: 4.7,
    reviewCount: 145,
    isPopular: true,
    isSpecial: false,
    badge: null,
  },

  // ===== SPECIALS CATEGORY =====
  {
    id: 'street-vibe',
    name: 'Street Vibe',
    description: 'Jollof/Fried Rice with 1 Chicken',
    category: 'Specials',
    subcategory: 'Special Deals',
    price: 25,
    image: '/images/menu/street-vibe.jpg',
    rating: 4.8,
    reviewCount: 267,
    isPopular: true,
    isSpecial: true,
    badge: 'Special Deal',
  },

  // ===== CAFE BITES CATEGORY =====
  {
    id: 'french-pie',
    name: 'French Pie',
    description: 'Delicious French-style meat pie',
    category: 'Cafe Bites',
    subcategory: 'Snacks',
    price: 20,
    image: '/images/menu/french-pie.jpg',
    rating: 4.4,
    reviewCount: 78,
    isPopular: false,
    isSpecial: false,
    badge: null,
  },
  {
    id: 'mini-pizza',
    name: 'Mini Pizza',
    description: 'Small personal pizza',
    category: 'Cafe Bites',
    subcategory: 'Snacks',
    price: 20,
    image: '/images/menu/mini-pizza.jpg',
    rating: 4.3,
    reviewCount: 65,
    isPopular: false,
    isSpecial: false,
    badge: null,
  },
  {
    id: 'burger',
    name: 'Burger',
    description: 'Classic beef burger',
    category: 'Cafe Bites',
    subcategory: 'Snacks',
    price: 20,
    image: '/images/menu/burger.jpg',
    rating: 4.5,
    reviewCount: 92,
    isPopular: true,
    isSpecial: false,
    badge: null,
  },

  // ===== EXTRAS CATEGORY =====
  {
    id: 'fried-plantain',
    name: 'Fried Plantain',
    description: 'Sweet fried plantain slices',
    category: 'Extras',
    subcategory: 'Sides',
    price: 5,
    image: '/images/menu/plantain.jpg',
    rating: 4.6,
    reviewCount: 143,
    isPopular: false,
    isSpecial: false,
    badge: null,
  },
  {
    id: 'egg',
    name: 'Egg',
    description: 'Add an extra egg to your meal',
    category: 'Extras',
    subcategory: 'Sides',
    price: 10,
    image: '/images/menu/egg.jpg',
    rating: 4.2,
    reviewCount: 56,
    isPopular: false,
    isSpecial: false,
    badge: null,
  },
  {
    id: 'coleslaw',
    name: 'Coleslaw',
    description: 'Fresh coleslaw salad',
    category: 'Extras',
    subcategory: 'Sides',
    price: 5,
    image: '/images/menu/coleslaw.jpg',
    rating: 4.4,
    reviewCount: 87,
    isPopular: false,
    isSpecial: false,
    badge: null,
  },

  // ===== DRINKS CATEGORY =====
  // Ice Cream
  {
    id: 'ice-cream-small',
    name: 'Ice Cream (Small Cone)',
    description: 'Small ice cream cone',
    category: 'Drinks',
    subcategory: 'Ice Cream',
    price: 7,
    image: '/images/menu/ice-cream-small.jpg',
    rating: 4.5,
    reviewCount: 123,
    isPopular: false,
    isSpecial: false,
    badge: null,
  },
  {
    id: 'ice-cream-medium',
    name: 'Ice Cream (Medium)',
    description: 'Medium ice cream',
    category: 'Drinks',
    subcategory: 'Ice Cream',
    price: 10,
    image: '/images/menu/ice-cream-medium.jpg',
    rating: 4.5,
    reviewCount: 134,
    isPopular: false,
    isSpecial: false,
    badge: null,
  },
  {
    id: 'ice-cream-cup',
    name: 'Ice Cream (Cone/Cup)',
    description: 'Large ice cream cone or cup',
    category: 'Drinks',
    subcategory: 'Ice Cream',
    price: 20,
    image: '/images/menu/ice-cream-cup.jpg',
    rating: 4.6,
    reviewCount: 156,
    isPopular: false,
    isSpecial: false,
    badge: null,
  },

  // Soft Drinks
  {
    id: 'coke',
    name: 'Coke',
    description: 'Coca-Cola soft drink',
    category: 'Drinks',
    subcategory: 'Soft Drinks',
    price: 8,
    image: '/images/menu/coke.jpg',
    rating: 4.7,
    reviewCount: 189,
    isPopular: true,
    isSpecial: false,
    badge: null,
  },
  {
    id: 'fanta',
    name: 'Fanta',
    description: 'Fanta orange soft drink',
    category: 'Drinks',
    subcategory: 'Soft Drinks',
    price: 8,
    image: '/images/menu/fanta.jpg',
    rating: 4.6,
    reviewCount: 167,
    isPopular: false,
    isSpecial: false,
    badge: null,
  },
  {
    id: 'sprite',
    name: 'Sprite',
    description: 'Sprite lemon-lime soft drink',
    category: 'Drinks',
    subcategory: 'Soft Drinks',
    price: 8,
    image: '/images/menu/sprite.jpg',
    rating: 4.6,
    reviewCount: 178,
    isPopular: false,
    isSpecial: false,
    badge: null,
  },

  // Boba Milkshakes
  {
    id: 'boba-small',
    name: 'Boba Milkshake (Small)',
    description: 'Strawberry, Chocolate, or Vanilla',
    category: 'Drinks',
    subcategory: 'Boba Milkshakes',
    price: 30,
    image: '/images/menu/boba-small.jpg',
    rating: 4.8,
    reviewCount: 212,
    isPopular: false,
    isSpecial: false,
    badge: null,
  },
  {
    id: 'boba-regular',
    name: 'Boba Milkshake (Regular)',
    description: 'Strawberry, Chocolate, or Vanilla',
    category: 'Drinks',
    subcategory: 'Boba Milkshakes',
    price: 45,
    image: '/images/menu/boba-regular.jpg',
    rating: 4.9,
    reviewCount: 245,
    isPopular: true,
    isSpecial: false,
    badge: 'Popular',
  },
  {
    id: 'boba-big',
    name: 'Boba Milkshake (Big)',
    description: 'Strawberry, Chocolate, or Vanilla',
    category: 'Drinks',
    subcategory: 'Boba Milkshakes',
    price: 55,
    image: '/images/menu/boba-big.jpg',
    rating: 4.9,
    reviewCount: 198,
    isPopular: false,
    isSpecial: false,
    badge: null,
  },
];

/**
 * Get all unique categories from menu items
 */
export const getCategories = (): string[] => {
  return Array.from(new Set(menuItems.map((item) => item.category)));
};

/**
 * Get popular dishes (for hero/featured section)
 */
export const getPopularDishes = (): MenuItem[] => {
  return menuItems.filter((item) => item.isPopular);
};

/**
 * Get special deals
 */
export const getSpecialDeals = (): MenuItem[] => {
  return menuItems.filter((item) => item.isSpecial);
};

/**
 * Get items by category
 */
export const getItemsByCategory = (category: string): MenuItem[] => {
  return menuItems.filter((item) => item.category === category);
};

/**
 * Get featured items for homepage (popular + special)
 */
export const getFeaturedItems = (): MenuItem[] => {
  return menuItems.filter((item) => item.isPopular || item.isSpecial).slice(0, 6);
};

/**
 * Category display order for menu tabs
 */
export const categoryOrder = [
  'Rice Meals',
  'Fries & Loaded',
  'Cafe Bites',
  'Drinks',
  'Extras',
  'Specials',
];