'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export type MenuCategory = 
  | 'All'
  | 'Rice Meals'
  | 'Fries & Chicken'
  | 'Cafe Bites'
  | 'Drinks'
  | 'Extras'
  | 'Specials';

interface CategoryTabsProps {
  activeCategory: MenuCategory;
  onCategoryChange: (category: MenuCategory) => void;
  itemCounts?: Record<MenuCategory, number>;
}

const categories: MenuCategory[] = [
  'All',
  'Rice Meals',
  'Fries & Chicken',
  'Cafe Bites',
  'Drinks',
  'Extras',
  'Specials',
];

export const CategoryTabs: React.FC<CategoryTabsProps> = ({
  activeCategory,
  onCategoryChange,
  itemCounts,
}) => {
  return (
    <div className="w-full overflow-hidden">
      {/* Scrollable container */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-3 md:gap-4 min-w-min px-4 md:px-0 py-2">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            const count = itemCounts?.[category];

            return (
              <motion.button
                key={category}
                onClick={() => onCategoryChange(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                  // Base styles
                  'relative px-5 py-2.5 md:px-6 md:py-3 rounded-full',
                  'text-sm md:text-base font-medium whitespace-nowrap',
                  'transition-all duration-300 ease-in-out',
                  'border-2',
                  // Active state
                  isActive
                    ? 'bg-primary text-white border-primary shadow-lg'
                    : 'bg-white text-text border-gray-200 hover:border-primary/30 hover:bg-primary/5',
                )}
              >
                {/* Category name */}
                <span className="relative z-10">
                  {category}
                  {/* Item count badge */}
                  {count !== undefined && (
                    <span
                      className={cn(
                        'ml-2 px-2 py-0.5 text-xs rounded-full',
                        isActive
                          ? 'bg-white/20 text-white'
                          : 'bg-gray-100 text-gray-600'
                      )}
                    >
                      {count}
                    </span>
                  )}
                </span>

                {/* Active indicator line */}
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-primary rounded-full -z-10"
                    transition={{
                      type: 'spring',
                      stiffness: 500,
                      damping: 30,
                    }}
                  />
                )}
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

CategoryTabs.displayName = 'CategoryTabs';