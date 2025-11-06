'use client';

import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { CategoryTabs, MenuGrid, MenuCategory } from '@/components/menu';
import { menuItems } from '@/data/menu-items';
import { fadeIn } from '@/lib/animation-variants';

export const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('All');

  // Calculate item counts per category
  const itemCounts = useMemo(() => {
    const counts: Record<MenuCategory, number> = {
      'All': menuItems.length,
      'Rice Meals': 0,
      'Fries & Chicken': 0,
      'Cafe Bites': 0,
      'Drinks': 0,
      'Extras': 0,
      'Specials': 0,
    };

    menuItems.forEach((item) => {
      if (item.category === 'Rice Meals') counts['Rice Meals']++;
      else if (item.category === 'Fries & Loaded') counts['Fries & Chicken']++;
      else if (item.category === 'Cafe Bites') counts['Cafe Bites']++;
      else if (item.category === 'Drinks') counts['Drinks']++;
      else if (item.category === 'Extras') counts['Extras']++;
      else if (item.category === 'Specials') counts['Specials']++;
    });

    return counts;
  }, []);

  // Filter items based on active category
  const filteredItems = useMemo(() => {
    if (activeCategory === 'All') return menuItems;

    return menuItems.filter((item) => {
      if (activeCategory === 'Rice Meals') return item.category === 'Rice Meals';
      if (activeCategory === 'Fries & Chicken') return item.category === 'Fries & Loaded';
      if (activeCategory === 'Cafe Bites') return item.category === 'Cafe Bites';
      if (activeCategory === 'Drinks') return item.category === 'Drinks';
      if (activeCategory === 'Extras') return item.category === 'Extras';
      if (activeCategory === 'Specials') return item.category === 'Specials';
      return false;
    });
  }, [activeCategory]);

  return (
    <section id="menu" className="py-16 md:py-24 bg-background">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeIn}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Regular Menu Pack
          </h2>
          <p className="text-lg md:text-xl text-text max-w-2xl mx-auto">
            Fresh meals made daily at UPSA
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="mb-12 md:mb-16">
          <CategoryTabs
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            itemCounts={itemCounts}
          />
        </div>

        {/* Menu Grid */}
        <MenuGrid items={filteredItems} />
      </div>
    </section>
  );
};

MenuSection.displayName = 'MenuSection';