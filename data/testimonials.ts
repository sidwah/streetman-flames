import { Testimonial } from '@/types';

/**
 * Streetman Flames Customer Testimonials
 * Real customer reviews and feedback
 */

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Kwame Mensah',
    role: 'UPSA Student',
    avatar: '/images/testimonials/kwame.jpg',
    rating: 5,
    quote:
      'Best street food at UPSA! The Street Vibe special is unbeatable value for money. Always fresh and the loaded fries are amazing!',
    date: '2024-09-15',
  },
  {
    id: '2',
    name: 'Ama Asante',
    role: 'Regular Customer',
    avatar: '/images/testimonials/ama.jpg',
    rating: 5,
    quote:
      "I order from Streetman Flames at least 3 times a week. Their jollof rice is the best I've had, and the portions are generous. Worth every cedi!",
    date: '2024-09-20',
  },
  {
    id: '3',
    name: 'Kofi Addo',
    role: 'Campus Regular',
    avatar: '/images/testimonials/kofi.jpg',
    rating: 4.5,
    quote:
      'Great food at student-friendly prices! The chicken is always well-seasoned and cooked perfectly. My go-to spot behind Hostel C.',
    date: '2024-09-28',
  },
  {
    id: '4',
    name: 'Abena Owusu',
    role: 'Food Lover',
    avatar: '/images/testimonials/abena.jpg',
    rating: 5,
    quote:
      'The Safety meal (assorted fried rice with 2 chicken) is my absolute favorite! Quality ingredients and consistent taste every time.',
    date: '2024-10-02',
  },
  {
    id: '5',
    name: 'Yaw Boateng',
    role: 'UPSA Student',
    avatar: '/images/testimonials/yaw.jpg',
    rating: 4.5,
    quote:
      'Quick service and delicious food! I love that they offer MOMO payment. The loaded fries are a must-try - so filling and tasty!',
    date: '2024-10-08',
  },
  {
    id: '6',
    name: 'Efua Darko',
    role: 'Hostel C Resident',
    avatar: '/images/testimonials/efua.jpg',
    rating: 5,
    quote:
      "Being right behind Hostel C makes it so convenient! Their boba milkshakes are incredible - perfect after a long day of classes. Highly recommend!",
    date: '2024-10-12',
  },
];

/**
 * Get testimonials with a specific rating or higher
 */
export const getTopRatedTestimonials = (minRating: number = 4.5): Testimonial[] => {
  return testimonials.filter((t) => t.rating >= minRating);
};

/**
 * Get most recent testimonials
 */
export const getRecentTestimonials = (count: number = 3): Testimonial[] => {
  return testimonials
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
};

/**
 * Get random testimonials for carousel
 */
export const getRandomTestimonials = (count: number = 3): Testimonial[] => {
  const shuffled = [...testimonials].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};