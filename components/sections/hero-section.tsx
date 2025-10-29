'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { heroPreset, fadeIn, slideInRight } from '@/lib/animation-variants';

// Hero carousel images
const heroImages = [
  { name: 'Dishes', emoji: '🍗', title: 'Signature Chicken', color: '#FF9F0D' },
  { name: 'Dessert', emoji: '🍰', title: 'Sweet Treats', color: '#8B0000' },
  { name: 'Drinks', emoji: '🥤', title: 'Cool Drinks', color: '#FF9F0D' },
  { name: 'Platter', emoji: '🍽️', title: 'Full Platter', color: '#8B0000' },
  { name: 'Snacks', emoji: '🍔', title: 'Quick Bites', color: '#FF9F0D' },
];

export const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-carousel every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleCategoryClick = (index: number) => {
    setActiveIndex(index);
  };
  
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden py-20 lg:py-0"
      style={{
        background: 'linear-gradient(135deg, #FFF8F0 0%, #FFEFD5 100%)',
      }}
    >
      {/* Decorative Elements - More Visible */}
      <div className="absolute top-10 right-20 z-0">
        <motion.div
          initial={{ opacity: 0, rotate: 0 }}
          animate={{ opacity: 0.6, rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          <span className="text-9xl">🌿</span>
        </motion.div>
      </div>

      <div className="absolute bottom-20 left-10 z-0">
        <motion.div
          initial={{ opacity: 0, rotate: 0 }}
          animate={{ opacity: 0.6, rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        >
          <span className="text-8xl">🍃</span>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center pb-32 lg:pb-0">
          {/* Left Content - Text (SECOND ON MOBILE, order-1 puts it after carousel) */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="space-y-8 lg:order-1"
          >
            {/* Headline */}
            <motion.h1
              variants={heroPreset.heading}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight"
              style={{ color: 'var(--foreground)' }}
            >
              Fresh Street Food{' '}
              <span style={{ color: 'var(--primary)' }}>You&apos;ll Love</span>{' '}
              <span className="inline-block">🔥</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={heroPreset.description}
              className="text-lg md:text-xl leading-relaxed max-w-xl"
              style={{ color: 'var(--text)' }}
            >
              Experience authentic street food at UPSA&apos;s favorite spot. From sizzling jollof rice to loaded fries and tender chicken, we serve fresh meals that keep you coming back for more.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={heroPreset.cta}
              className="flex flex-wrap gap-4"
            >
              <Button
                variant="primary"
                size="lg"
                onClick={() => {
                  document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-shadow"
              >
                Explore Menu
              </Button>

              <Button
                variant="outline"
                size="lg"
                leftIcon={<Search className="w-5 h-5" />}
                onClick={() => {
                  document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-6 text-lg font-semibold"
              >
                Search
              </Button>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              variants={heroPreset.stats}
              className="flex flex-wrap gap-8 pt-4"
            >
              <div className="space-y-1">
                <div className="text-3xl font-bold" style={{ color: 'var(--primary)' }}>
                  31+
                </div>
                <div className="text-sm" style={{ color: 'var(--text)' }}>
                  Menu Items
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold" style={{ color: 'var(--primary)' }}>
                  4.8★
                </div>
                <div className="text-sm" style={{ color: 'var(--text)' }}>
                  Rating
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold" style={{ color: 'var(--primary)' }}>
                  100%
                </div>
                <div className="text-sm" style={{ color: 'var(--text)' }}>
                  Fresh
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Image with Carousel (FIRST ON MOBILE, order-2 on desktop) */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            animate="visible"
            className="relative flex items-center justify-center lg:order-2"
          >
            {/* Main Hero Image - CIRCULAR PLATE WITH CAROUSEL */}
            <div className="relative w-full max-w-[600px] aspect-square">
              {/* Large circular food image with carousel */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
                  animate={{ scale: 1, opacity: 1, rotate: 0 }}
                  exit={{ scale: 0.8, opacity: 0, rotate: 10 }}
                  transition={{ duration: 0.6 }}
                  className="relative w-full h-full rounded-full overflow-hidden shadow-2xl"
                  style={{
                    background: `linear-gradient(135deg, ${heroImages[activeIndex].color}15 0%, ${heroImages[activeIndex].color}05 100%)`,
                  }}
                >
                  {/* REAL IMAGES - No more placeholders! */}
                  <Image
                    src={`/images/hero/${heroImages[activeIndex].name.toLowerCase()}.jpg`}
                    alt={heroImages[activeIndex].title}
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
              </AnimatePresence>

              {/* Glow effect behind main image */}
              <div
                className="absolute inset-0 rounded-full blur-3xl opacity-30 -z-10 transition-colors duration-500"
                style={{ background: heroImages[activeIndex].color }}
              />

              {/* Carousel Indicators */}
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-3">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleCategoryClick(index)}
                    className="group relative"
                    aria-label={`View ${heroImages[index].name}`}
                  >
                    <div
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        activeIndex === index ? 'w-8' : 'hover:scale-125'
                      }`}
                      style={{
                        background: activeIndex === index ? heroImages[index].color : '#D1D5DB',
                      }}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Floating Category Icons - Desktop: RIGHT SIDE, Mobile: Bottom */}
            {/* Desktop Version */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 space-y-6 hidden lg:block">
              {heroImages.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.1, x: -10 }}
                  className="group cursor-pointer"
                  onClick={() => handleCategoryClick(index)}
                >
                  <div
                    className={`flex items-center gap-3 rounded-full shadow-lg p-3 pr-5 transition-all duration-300 hover:shadow-xl ${
                      activeIndex === index ? 'ring-4' : ''
                    }`}
                    style={{
                      background: category.color,
                      borderLeft: `4px solid ${category.color === '#FF9F0D' ? '#8B0000' : '#FF9F0D'}`,
                      ...(activeIndex === index && {
                        boxShadow: `0 0 0 4px ${category.color}40`,
                      }),
                    }}
                  >
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{
                        background: 'rgba(255, 255, 255, 0.3)',
                        backdropFilter: 'blur(10px)',
                      }}
                    >
                      <span className="text-2xl filter drop-shadow-lg">{category.emoji}</span>
                    </div>
                    <span
                      className="font-semibold transition-all duration-300"
                      style={{ 
                        color: activeIndex === index ? '#FFFFFF' : '#6B7280'
                      }}
                    >
                      {category.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Mobile Version - Horizontal Scroll Below Image (Icons Only, No Labels) */}
            <div className="absolute -bottom-20 left-0 right-0 lg:hidden">
              <div className="flex gap-3 overflow-x-auto pb-2 px-4 scrollbar-hide justify-center">
                {heroImages.map((category, index) => (
                  <motion.button
                    key={category.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    onClick={() => handleCategoryClick(index)}
                    className={`flex-shrink-0 flex items-center justify-center p-4 rounded-full transition-all duration-300 ${
                      activeIndex === index ? 'scale-110' : ''
                    }`}
                    style={{
                      background: activeIndex === index ? category.color : 'rgba(255, 255, 255, 0.9)',
                      boxShadow: activeIndex === index 
                        ? `0 4px 12px ${category.color}60, 0 0 0 3px ${category.color}40`
                        : '0 2px 8px rgba(0,0,0,0.1)',
                      width: '64px',
                      height: '64px',
                    }}
                    aria-label={category.name}
                  >
                    <span className="text-3xl">{category.emoji}</span>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="flex flex-col items-center gap-2 cursor-pointer" onClick={() => {
          document.getElementById('popular')?.scrollIntoView({ behavior: 'smooth' });
        }}>
          <span className="text-sm font-medium" style={{ color: 'var(--text)' }}>
            Scroll Down
          </span>
          <div className="w-6 h-10 border-2 rounded-full flex items-start justify-center p-2" style={{ borderColor: 'var(--primary)' }}>
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: 'var(--primary)' }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};