'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { MenuCard } from '@/components/menu/menu-card';
import { getFeaturedItems } from '@/data/menu-items';
import { staggerContainer, fadeIn, slideInUp } from '@/lib/animation-variants';

export const PopularDishes = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const featuredItems = getFeaturedItems();
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = useCallback((index: number) => {
    if (scrollContainerRef.current) {
      const cardWidth = 280 + 24;
      scrollContainerRef.current.scrollTo({
        left: cardWidth * index,
        behavior: 'smooth',
      });
      setActiveIndex(index);
    }
  }, []);

  const scrollToNext = useCallback(() => {
    const newIndex = activeIndex < featuredItems.length - 1 ? activeIndex + 1 : 0;
    scrollToIndex(newIndex);
  }, [activeIndex, featuredItems.length, scrollToIndex]);

  const scrollLeft = useCallback(() => {
    const newIndex = activeIndex > 0 ? activeIndex - 1 : featuredItems.length - 1;
    scrollToIndex(newIndex);
  }, [activeIndex, featuredItems.length, scrollToIndex]);

  const scrollRight = useCallback(() => {
    scrollToNext();
  }, [scrollToNext]);

  useEffect(() => {
    const interval = setInterval(() => {
      scrollToNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [scrollToNext]);

  return (
    <section
      id="popular"
      className="relative py-12 md:py-16 lg:py-24 bg-gradient-to-b from-white to-cream overflow-hidden"
    >
      <div className="absolute top-10 right-10 w-20 h-20 opacity-5">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="text-8xl"
        >
          🍽️
        </motion.div>
      </div>

      <div className="container">
        <motion.div
          className="flex items-center justify-between mb-8 md:mb-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div variants={fadeIn}>
            <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold text-heading">
              Popular Dishes
            </h2>
            <p className="text-xs md:text-base lg:text-lg text-text mt-1 md:mt-2">
              Customer favorites and top picks
            </p>
          </motion.div>

          <motion.div
            className="hidden md:flex items-center gap-3"
            variants={fadeIn}
          >
            <button
              onClick={scrollLeft}
              className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white border-2 border-gray-200 hover:border-primary hover:bg-primary hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            <button
              onClick={scrollRight}
              className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-primary text-white hover:bg-primary-light transition-all duration-300 shadow-md hover:shadow-lg"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative"
          variants={slideInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <div
            ref={scrollContainerRef}
            className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {featuredItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="snap-start"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <MenuCard item={item} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="flex justify-center gap-2 mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          {[0, 1, 2].map((dotIndex) => {
            const isActive = Math.floor((activeIndex / featuredItems.length) * 3) === dotIndex;
            return (
              <button
                key={dotIndex}
                onClick={() => {
                  const targetIndex = Math.floor((dotIndex / 3) * featuredItems.length);
                  scrollToIndex(targetIndex);
                }}
                className={`h-1.5 md:h-2 rounded-full transition-all duration-300 ${
                  isActive
                    ? 'w-6 md:w-8 bg-primary'
                    : 'w-1.5 md:w-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to section ${dotIndex + 1}`}
              />
            );
          })}
        </motion.div>

        <motion.div
          className="md:hidden text-center mt-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-xs md:text-sm text-text">
            ← Swipe to see more dishes →
          </p>
        </motion.div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};