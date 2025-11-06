'use client';

import React, { useState } from 'react';
import { CategoryTabs, MenuCategory } from '@/components/menu';

export default function CategoryTabsDemo() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('All');

  // Mock item counts
  const itemCounts: Record<MenuCategory, number> = {
    'All': 22,
    'Rice Meals': 8,
    'Fries & Chicken': 4,
    'Cafe Bites': 3,
    'Drinks': 3,
    'Extras': 3,
    'Specials': 1,
  };

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Category Tabs Demo
          </h1>
          <p className="text-lg text-text">
            Click the tabs to see the active state
          </p>
        </div>

        {/* Category Tabs */}
        <div className="mb-8">
          <CategoryTabs
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            itemCounts={itemCounts}
          />
        </div>

        {/* Selected Category Display */}
        <div className="bg-white rounded-lg p-8 shadow-lg text-center">
          <p className="text-text mb-2">Currently Selected:</p>
          <h2 className="text-3xl font-bold text-primary">
            {activeCategory}
          </h2>
          <p className="text-text mt-4">
            Showing {itemCounts[activeCategory]} items
          </p>
        </div>

        {/* Testing Info */}
        <div className="mt-12 bg-cream rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">✅ Features to Test:</h3>
          <ul className="space-y-2 text-text">
            <li>✓ Click each tab to change active state</li>
            <li>✓ Smooth transition animation</li>
            <li>✓ Orange background on active tab</li>
            <li>✓ Hover effect on inactive tabs</li>
            <li>✓ Item count badges</li>
            <li>✓ Horizontal scroll on mobile (resize window)</li>
            <li>✓ Responsive font sizes</li>
          </ul>
        </div>

        {/* Mobile Test Instructions */}
        <div className="mt-8 bg-white rounded-lg p-6 border-2 border-primary">
          <h3 className="text-xl font-bold mb-4 text-primary">
            📱 Mobile Test:
          </h3>
          <p className="text-text">
            Resize your browser window to &lt;768px to see the mobile layout.
            The tabs should scroll horizontally if they don&apos;t fit.
          </p>
        </div>
      </div>
    </div>
  );
}