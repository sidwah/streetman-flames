'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Search, Phone, ChefHat, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui';
import { fadeIn, staggerContainer } from '@/lib/animation-variants';

interface OrderStep {
  id: number;
  icon: 'Search' | 'Phone' | 'ChefHat' | 'ShoppingBag';
  title: string;
  description: string;
  color: string;
  position: 'top' | 'bottom';
}

const orderSteps: OrderStep[] = [
  {
    id: 1,
    icon: 'Search',
    title: 'Browse & Select',
    description: 'Explore our menu and pick your favorites from rice meals, fries, chicken, and more.',
    color: '#FF9F0D',
    position: 'top',
  },
  {
    id: 2,
    icon: 'Phone',
    title: 'Call or MOMO Pay',
    description: 'Call us at 0257 743 913 or send MOMO payment with your order details.',
    color: '#8B0000',
    position: 'bottom',
  },
  {
    id: 3,
    icon: 'ChefHat',
    title: 'We Prepare Fresh',
    description: 'Our chefs cook your meal with care, quality, and love - made fresh just for you.',
    color: '#FF9F0D',
    position: 'top',
  },
  {
    id: 4,
    icon: 'ShoppingBag',
    title: 'Pick Up Your Food',
    description: 'Come to UPSA Behind Hostel C and enjoy your delicious meal!',
    color: '#8B0000',
    position: 'bottom',
  },
];

const iconComponents = {
  Search: Search,
  Phone: Phone,
  ChefHat: ChefHat,
  ShoppingBag: ShoppingBag,
};

export const OrderFlow = () => {
  const handleCallNow = () => {
    window.location.href = 'tel:0257743913';
  };

  const handleWhatsApp = () => {
    const phone = '233257743913';
    const message = encodeURIComponent(
      "Hi! I'd like to place an order from Streetman Flames."
    );
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  return (
    <section
      id="how-it-works"
      className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white to-cream overflow-hidden"
    >
      <div className="container">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-12 md:mb-16 lg:mb-20"
        >
          <motion.h2
            variants={fadeIn}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading mb-4"
          >
            How It Works 🔥
          </motion.h2>
          <motion.p
            variants={fadeIn}
            className="text-base md:text-lg text-text max-w-2xl mx-auto"
          >
            Getting your favorite street food is easy! Just follow these simple steps.
          </motion.p>
        </motion.div>

        {/* Zigzag Steps Layout */}
        <div className="relative max-w-7xl mx-auto mb-16">
          {/* Steps Container - 2 cols mobile, 4 cols desktop */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 relative">
            {orderSteps.map((step, index) => {
              const IconComponent = iconComponents[step.icon];
              const isTop = step.position === 'top';
              
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: isTop ? -50 : 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative"
                >
                  {/* Connector Arrow - Desktop (horizontal between columns) */}
                  {index < orderSteps.length - 1 && (
                    <div
                      className={`hidden md:block absolute ${
                        isTop ? 'bottom-[40%]' : 'top-[40%]'
                      } -right-2 transform z-0`}
                      style={{ color: step.color }}
                    >
                      <svg width="40" height="60" viewBox="0 0 40 60" fill="none">
                        <path
                          d="M5 30 L30 30 M30 30 L24 24 M30 30 L24 36"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  )}

                  {/* Connector Arrow - Mobile */}
                  {/* Arrow 1→2 (horizontal right) */}
                  {index === 0 && (
                    <div
                      className="md:hidden absolute top-1/2 -right-3 transform -translate-y-1/2 z-0"
                      style={{ color: step.color }}
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M5 12 L19 12 M19 12 L15 8 M19 12 L15 16"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  )}

                  {/* Arrow 2→3 (diagonal down-left) */}
                  {index === 1 && (
                    <div
                      className="md:hidden absolute -bottom-3 left-1/2 transform -translate-x-1/2 z-0"
                      style={{ color: step.color }}
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M12 5 L12 19 M12 19 L8 15 M12 19 L16 15"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  )}

                  {/* Arrow 3→4 (horizontal right) */}
                  {index === 2 && (
                    <div
                      className="md:hidden absolute top-1/2 -right-3 transform -translate-y-1/2 z-0"
                      style={{ color: step.color }}
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M5 12 L19 12 M19 12 L15 8 M19 12 L15 16"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  )}

                  <div className="flex flex-col items-center">
                    {/* TOP POSITION: Text → Line → Circle */}
                    {isTop && (
                      <>
                        {/* Text Content - ABOVE */}
                        <div className="text-center w-full mb-4 md:mb-6">
                          <h3
                            className="text-base md:text-xl font-bold mb-2"
                            style={{ color: step.color }}
                          >
                            {step.title}
                          </h3>
                          <p className="text-xs md:text-base text-text leading-relaxed px-2">
                            {step.description}
                          </p>
                        </div>

                        {/* Connecting Line - MIDDLE */}
                        <div
                          className="hidden md:block w-0.5 h-16"
                          style={{ backgroundColor: step.color }}
                        />

                        {/* Circle with Icon - BOTTOM */}
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className="relative"
                        >
                          {/* Step Number Badge */}
                          <div
                            className="absolute -top-2 -right-2 w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center text-white font-bold text-xs md:text-sm shadow-lg z-10"
                            style={{ backgroundColor: step.color }}
                          >
                            {step.id}
                          </div>

                          {/* Main Circle */}
                          <div
                            className="w-24 h-24 md:w-36 md:h-36 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 hover:shadow-2xl border-[3px] md:border-4"
                            style={{
                              backgroundColor: 'white',
                              borderColor: step.color,
                            }}
                          >
                            <IconComponent
                              className="w-10 h-10 md:w-16 md:h-16"
                              style={{ color: step.color }}
                            />
                          </div>
                        </motion.div>
                      </>
                    )}

                    {/* BOTTOM POSITION: Circle → Line → Text */}
                    {!isTop && (
                      <>
                        {/* Circle with Icon - TOP */}
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className="relative"
                        >
                          {/* Step Number Badge */}
                          <div
                            className="absolute -top-2 -right-2 w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center text-white font-bold text-xs md:text-sm shadow-lg z-10"
                            style={{ backgroundColor: step.color }}
                          >
                            {step.id}
                          </div>

                          {/* Main Circle */}
                          <div
                            className="w-24 h-24 md:w-36 md:h-36 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 hover:shadow-2xl border-[3px] md:border-4"
                            style={{
                              backgroundColor: 'white',
                              borderColor: step.color,
                            }}
                          >
                            <IconComponent
                              className="w-10 h-10 md:w-16 md:h-16"
                              style={{ color: step.color }}
                            />
                          </div>
                        </motion.div>

                        {/* Connecting Line - MIDDLE */}
                        <div
                          className="hidden md:block w-0.5 h-16"
                          style={{ backgroundColor: step.color }}
                        />

                        {/* Text Content - BELOW */}
                        <div className="text-center w-full mt-4 md:mt-6">
                          <h3
                            className="text-base md:text-xl font-bold mb-2"
                            style={{ color: step.color }}
                          >
                            {step.title}
                          </h3>
                          <p className="text-xs md:text-base text-text leading-relaxed px-2">
                            {step.description}
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Important Notice */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="bg-brand-red text-white rounded-2xl p-6 md:p-8 mb-8 text-center max-w-3xl mx-auto"
        >
          <h3 className="text-xl md:text-2xl font-bold mb-2">
            🚫 Important Notice
          </h3>
          <p className="text-base md:text-lg">
            <strong>PICKUP ONLY - NO DELIVERY SERVICE</strong>
          </p>
          <p className="text-sm md:text-base mt-2 opacity-90">
            Please come to our location at UPSA, Behind Hostel C to collect your order.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            variant="primary"
            size="lg"
            onClick={handleCallNow}
            leftIcon={<Phone className="w-5 h-5" />}
            className="w-full sm:w-auto"
          >
            Call Now to Order
          </Button>
          <Button
            variant="secondary"
            size="lg"
            onClick={handleWhatsApp}
            className="w-full sm:w-auto"
          >
            Order on WhatsApp
          </Button>
        </motion.div>
      </div>
    </section>
  );
};