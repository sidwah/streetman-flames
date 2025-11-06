'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { MenuCard } from './menu-card';
import { Button } from '@/components/ui';
import type { MenuItem } from '@/types';

interface MenuGridProps {
  items: MenuItem[];
  className?: string;
  currentPage?: number;
  onPageChange?: (page: number) => void;
}

export const MenuGrid: React.FC<MenuGridProps> = ({ 
  items, 
  className,
  currentPage: externalPage,
  onPageChange
}) => {
  const [internalPage, setInternalPage] = useState(1);
  const currentPage = externalPage ?? internalPage;
  const setCurrentPage = onPageChange ?? setInternalPage;
  
  // Items per page: 2 rows × columns
  // Mobile (2 cols): 4 items, Tablet (3 cols): 6 items, Desktop (4 cols): 8 items
  const getItemsPerPage = () => {
    if (typeof window === 'undefined') return 8;
    if (window.innerWidth < 768) return 4; // Mobile: 2×2
    if (window.innerWidth < 1024) return 6; // Tablet: 3×2
    return 8; // Desktop: 4×2
  };

  const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage());

  // Update items per page on resize
  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(getItemsPerPage());
      setCurrentPage(1);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [setCurrentPage]);

  // Calculate pagination
  const totalPages = Math.ceil(items.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = items.slice(startIndex, endIndex);

  // Scroll to menu section (not top of page)
  const scrollToMenu = () => {
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      const offset = 80; // Header height
      const elementPosition = menuSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      scrollToMenu();
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      scrollToMenu();
    }
  };

  const goToPage = (page: number) => {
    setCurrentPage(page);
    scrollToMenu();
  };

  return (
    <div className={className}>
      {/* Items count */}
      <div className="text-center mb-8">
        <p className="text-lg text-text">
          Showing <span className="font-bold text-primary">{startIndex + 1}-{Math.min(endIndex, items.length)}</span> of <span className="font-bold text-primary">{items.length}</span> items
        </p>
      </div>

      {/* Grid - 2 cols mobile, 3 cols tablet, 4 cols desktop */}
      <motion.div
        layout
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mb-12"
      >
        <AnimatePresence mode="popLayout">
          {currentItems.map((item, index) => (
            <motion.div
              key={`${item.id}-${currentPage}`}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{
                duration: 0.3,
                delay: index * 0.05,
              }}
            >
              <MenuCard item={item} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-4 mt-8">
          {/* Previous Button */}
          <Button
            variant="outline"
            size="md"
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            leftIcon={<ChevronLeft className="h-5 w-5" />}
          >
            Previous
          </Button>

          {/* Page Numbers */}
          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => goToPage(page)}
                className={`w-10 h-10 rounded-full font-medium transition-all ${
                  currentPage === page
                    ? 'bg-primary text-white scale-110'
                    : 'bg-white text-text hover:bg-primary/10 border-2 border-gray-200'
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          {/* Next Button */}
          <Button
            variant="outline"
            size="md"
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            rightIcon={<ChevronRight className="h-5 w-5" />}
          >
            Next
          </Button>
        </div>
      )}

      {/* Empty state */}
      {items.length === 0 && (
        <div className="text-center py-16">
          <p className="text-2xl text-text">No items found in this category</p>
        </div>
      )}
    </div>
  );
};

MenuGrid.displayName = 'MenuGrid';