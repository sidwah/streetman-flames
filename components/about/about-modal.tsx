'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { AboutSection } from '@/data/about-sections';
import { ImageGallery } from './image-gallery';

interface AboutModalProps {
  section: AboutSection | null;
  isOpen: boolean;
  onClose: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({
  section,
  isOpen,
  onClose,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!section) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-50 overflow-y-auto"
            onClick={onClose}
          >
            <div className="min-h-screen px-4 py-8 flex items-start justify-center">
              <div
                className="relative w-full max-w-6xl bg-white rounded-2xl shadow-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/20 hover:bg-black/40 flex items-center justify-center text-white transition-colors backdrop-blur-sm"
                >
                  <X className="w-6 h-6" />
                </button>

                <div
                  className="relative h-64 md:h-80 flex items-center justify-center text-white overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${section.color}dd, ${section.color}88)`,
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center opacity-20">
                    <span className="text-[200px]">{section.icon}</span>
                  </div>
                  <div className="relative z-10 text-center px-4">
                    <motion.h2
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="text-4xl md:text-5xl font-extrabold mb-2"
                    >
                      {section.title}
                    </motion.h2>
                  </div>
                </div>

                <div className="p-6 md:p-8 lg:p-12 space-y-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl">
                      {section.description}
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <h3 className="text-2xl font-bold mb-6" style={{ color: section.color }}>
                      Gallery
                    </h3>
                    <ImageGallery 
                      images={section.images} 
                      title={section.title}
                      video={section.video}
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};