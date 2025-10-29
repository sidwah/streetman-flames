import { Variants } from 'framer-motion';

/**
 * Streetman Flames Animation Variants
 * Reusable Framer Motion animation presets for consistent UX
 */

// ===== FADE ANIMATIONS =====

/**
 * Simple fade in animation
 * Usage: <motion.div variants={fadeIn} initial="hidden" animate="visible">
 */
export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

/**
 * Fade in with slight scale
 * Usage: For images, cards that need subtle entrance
 */
export const fadeInScale: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

// ===== SLIDE ANIMATIONS =====

/**
 * Slide in from left
 * Usage: For text content, headings
 */
export const slideInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

/**
 * Slide in from right
 * Usage: For images, right-aligned content
 */
export const slideInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

/**
 * Slide in from bottom
 * Usage: For cards, menu items, CTAs
 */
export const slideInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

/**
 * Slide in from top
 * Usage: For headers, announcements
 */
export const slideInDown: Variants = {
  hidden: {
    opacity: 0,
    y: -50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

// ===== STAGGER ANIMATIONS =====

/**
 * Stagger container
 * Usage: Wrap around list items for staggered animation
 * <motion.div variants={staggerContainer} initial="hidden" animate="visible">
 *   <motion.div variants={staggerItem}>Item 1</motion.div>
 *   <motion.div variants={staggerItem}>Item 2</motion.div>
 * </motion.div>
 */
export const staggerContainer: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

/**
 * Stagger item (child element)
 * Usage: Use with staggerContainer for list items
 */
export const staggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

/**
 * Fast stagger for many items (menu items, etc.)
 */
export const fastStaggerContainer: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

// ===== SPECIAL ANIMATIONS =====

/**
 * Bounce in animation (for icons, badges)
 */
export const bounceIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 15,
    },
  },
};

/**
 * Rotate in animation (for floating icons, decorations)
 */
export const rotateIn: Variants = {
  hidden: {
    opacity: 0,
    rotate: -180,
    scale: 0,
  },
  visible: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

/**
 * Scale pulse animation (for CTAs, special badges)
 */
export const scalePulse: Variants = {
  hidden: {
    scale: 1,
  },
  visible: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

// ===== SCROLL ANIMATIONS =====

/**
 * Scroll reveal animation (for sections)
 * Usage: With react-intersection-observer
 */
export const scrollReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 75,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

/**
 * Scroll reveal with delay (for multiple sections)
 */
export const scrollRevealDelay = (delay: number = 0): Variants => ({
  hidden: {
    opacity: 0,
    y: 75,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      delay,
    },
  },
});

// ===== HOVER ANIMATIONS =====

/**
 * Card hover effect
 * Usage: whileHover="hover" on menu cards
 */
export const cardHover: Variants = {
  hover: {
    y: -8,
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
};

/**
 * Button hover effect
 * Usage: Already included in Button component
 */
export const buttonHover: Variants = {
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: 'easeInOut',
    },
  },
  tap: {
    scale: 0.95,
  },
};

/**
 * Image hover zoom
 * Usage: For menu item images
 */
export const imageZoom: Variants = {
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.4,
      ease: 'easeInOut',
    },
  },
};

// ===== PAGE TRANSITIONS =====

/**
 * Page transition (for section changes)
 */
export const pageTransition: Variants = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
  exit: {
    opacity: 0,
    x: 100,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
};

// ===== UTILITY FUNCTIONS =====

/**
 * Create custom delay for animations
 */
export const withDelay = (variants: Variants, delay: number): Variants => {
  return {
    ...variants,
    visible: {
      ...variants.visible,
      transition: {
        ...(typeof variants.visible === 'object' && 'transition' in variants.visible
          ? variants.visible.transition
          : {}),
        delay,
      },
    },
  };
};

/**
 * Create custom duration for animations
 */
export const withDuration = (variants: Variants, duration: number): Variants => {
  return {
    ...variants,
    visible: {
      ...variants.visible,
      transition: {
        ...(typeof variants.visible === 'object' && 'transition' in variants.visible
          ? variants.visible.transition
          : {}),
        duration,
      },
    },
  };
};

// ===== PRESET COMBINATIONS =====

/**
 * Hero section animation preset
 */
export const heroPreset = {
  container: staggerContainer,
  heading: slideInLeft,
  subheading: withDelay(slideInLeft, 0.2),
  cta: withDelay(slideInUp, 0.4),
  image: fadeInScale,
};

/**
 * Menu card animation preset
 */
export const menuCardPreset = {
  container: fastStaggerContainer,
  card: staggerItem,
  hover: cardHover,
  imageHover: imageZoom,
};

/**
 * Testimonial carousel preset
 */
export const testimonialPreset = {
  container: fadeIn,
  card: slideInUp,
};

/**
 * Order steps preset
 */
export const orderStepsPreset = {
  container: staggerContainer,
  step: staggerItem,
  icon: bounceIn,
};