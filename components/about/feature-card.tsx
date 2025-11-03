'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="flex items-start gap-3 p-3 md:p-4 rounded-lg hover:bg-gray-50 transition-colors group"
    >
      <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br from-primary to-primary-light flex items-center justify-center group-hover:scale-110 transition-transform">
        <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
      </div>
      <div>
        <h4 className="text-base md:text-lg font-bold text-heading mb-1">{title}</h4>
        <p className="text-xs md:text-sm text-text">{description}</p>
      </div>
    </motion.div>
  );
};