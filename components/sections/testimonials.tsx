'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '@/data/testimonials';
import { fadeIn } from '@/lib/animation-variants';

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotate every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const activeTesti = testimonials[activeIndex];

  return (
    <section
      id="testimonials"
      className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-br from-[#FFF8F0] to-[#FFEFD5] overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-brand-red/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
            What Our Customers Say 💬
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Don&apos;t just take our word for it - hear from UPSA students and regulars who love Streetman Flames!
          </p>
        </motion.div>

        {/* Main Testimonial Card */}
        <div className="max-w-4xl mx-auto mb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, scale: 0.9, rotateY: 10 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative"
            >
              {/* Quote icon */}
              <div className="absolute -top-6 left-8 md:left-12 w-12 h-12 md:w-16 md:h-16 bg-primary rounded-full flex items-center justify-center shadow-lg">
                <Quote className="w-6 h-6 md:w-8 md:h-8 text-white fill-white" />
              </div>

              {/* Star Rating */}
              <div className="flex items-center justify-center gap-1 mb-6 mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-6 h-6 md:w-7 md:h-7 ${
                      i < activeTesti.rating
                        ? 'text-secondary fill-secondary'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>

              {/* Quote Text */}
              <blockquote className="text-center mb-8">
                <p className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed italic">
                  &ldquo;{activeTesti.quote}&rdquo;
                </p>
              </blockquote>

              {/* Customer Info */}
              <div className="text-center">
                <h4 className="text-xl md:text-2xl font-bold text-foreground mb-1">
                  {activeTesti.name}
                </h4>
                <p className="text-sm md:text-base text-gray-500">
                  {activeTesti.role}
                </p>
              </div>

              {/* Navigation Arrows - Desktop */}
              <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-0 right-0 justify-between px-4 pointer-events-none">
                <button
                  onClick={handlePrevious}
                  className="pointer-events-auto -translate-x-16 w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={handleNext}
                  className="pointer-events-auto translate-x-16 w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows - Mobile */}
          <div className="flex md:hidden items-center justify-center gap-4 mt-8">
            <button
              onClick={handlePrevious}
              className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === activeIndex
                    ? 'w-8 h-3 bg-primary'
                    : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <p className="text-lg md:text-xl text-gray-700 mb-6">
            Join hundreds of satisfied customers! 🔥
          </p>
          <button
            onClick={() => {
              const phone = '233257743913';
              const message = encodeURIComponent(
                "Hi! I'd like to place an order from Streetman Flames."
              );
              window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
            }}
            className="bg-primary hover:bg-primary-light text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Order Now on WhatsApp 🚀
          </button>
        </motion.div>
      </div>
    </section>
  );
};