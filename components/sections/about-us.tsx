'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Flame, Clock, Users, MapPin, Sparkles, ShoppingBag } from 'lucide-react';
import { aboutSections, getAboutSectionByIndex } from '@/data/about-sections';
import { RotatingCircle } from '../about/rotating-circle';
import { AboutModal } from '../about/about-modal';
import { FeatureCard } from '../about/feature-card';
import { fadeIn, slideInLeft, slideInRight } from '@/lib/animation-variants';

export const AboutUs: React.FC = () => {
  const [selectedSection, setSelectedSection] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSectionClick = (index: number) => {
    setSelectedSection(index);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedSection(null), 300);
  };

  const features = [
    {
      icon: Flame,
      title: 'Fresh Made Daily',
      description: 'Every meal prepared fresh with quality ingredients',
    },
    {
      icon: Clock,
      title: 'Quick Pickup',
      description: 'No long waits - grab your food and go',
    },
    {
      icon: Users,
      title: 'Student Friendly',
      description: 'Affordable prices perfect for students',
    },
    {
      icon: MapPin,
      title: 'Convenient Location',
      description: 'Behind Hostel C at UPSA campus',
    },
    {
      icon: Sparkles,
      title: 'Quality Ingredients',
      description: 'We never compromise on quality',
    },
    {
      icon: ShoppingBag,
      title: 'Pickup Only',
      description: 'Fast service at our UPSA location',
    },
  ];

  return (
    <section id="about" className="section bg-gradient-to-b from-cream to-white">
      <div className="container">
        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <RotatingCircle
              onSectionClick={handleSectionClick}
              isPaused={isModalOpen}
            />
          </motion.div>

          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <motion.p
                variants={fadeIn}
                className="text-primary font-semibold mb-2 flex items-center gap-2"
              >
                <span className="text-2xl">🔥</span>
                About Us
              </motion.p>
              <motion.h2
                variants={fadeIn}
                className="text-5xl font-extrabold text-heading mb-4 leading-tight"
              >
                We Are More Than
                <br />
                <span className="text-primary">Street Food</span>
              </motion.h2>
              <motion.p
                variants={fadeIn}
                className="text-lg text-text leading-relaxed"
              >
                Streetman Flames brings authentic, quality street food to UPSA students
                at prices you can afford. From sizzling jollof to loaded fries, every
                meal is crafted with passion and fresh ingredients. Click any section
                of the circle to explore our story!
              </motion.p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <FeatureCard
                  key={feature.title}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden space-y-8">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="text-primary font-semibold mb-2 flex items-center gap-2 text-sm">
              <span className="text-xl">🔥</span>
              About Us
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-heading mb-3 leading-tight">
              We Are More Than
              <br />
              <span className="text-primary">Street Food</span>
            </h2>
            <p className="text-base md:text-lg text-text leading-relaxed">
              Streetman Flames brings authentic, quality street food to UPSA students
              at prices you can afford. From sizzling jollof to loaded fries, every
              meal is crafted with passion and fresh ingredients. Click any section
              of the circle to explore our story!
            </p>
          </motion.div>

          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <RotatingCircle
              onSectionClick={handleSectionClick}
              isPaused={isModalOpen}
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </div>

      <AboutModal
        section={selectedSection !== null ? getAboutSectionByIndex(selectedSection) : null}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
};