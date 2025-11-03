'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Button } from '@/components/ui';
import { MenuItem } from '@/types';
import { formatPriceGHC } from '@/lib/utils';
import { cn } from '@/lib/utils';

interface MenuCardProps {
  item: MenuItem;
  className?: string;
}

export const MenuCard = React.forwardRef<HTMLDivElement, MenuCardProps>(
  ({ item, className }, ref) => {
    const fullStars = Math.floor(item.rating);
    const hasHalfStar = item.rating % 1 !== 0;

    const handleOrder = () => {
      const phone = '233257743913';
      const message = encodeURIComponent(
        `Hi! I'd like to order: ${item.name} (${formatPriceGHC(item.price)})`
      );
      const whatsappUrl = `https://wa.me/${phone}?text=${message}`;
      window.open(whatsappUrl, '_blank');
    };

    return (
      <motion.div
        ref={ref}
        className={cn(
          'flex flex-col bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300',
          'min-w-[260px] w-[260px] md:min-w-[280px] md:w-[280px] flex-shrink-0',
          'h-[360px] md:h-[420px] lg:h-[440px]',
          className
        )}
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative w-full h-[140px] md:h-[200px] bg-gradient-to-br from-cream to-background overflow-hidden">
          <Image
            src={item.image.startsWith('/') ? item.image : `/images/menu/${item.image}`}
            alt={item.name}
            fill
            className="object-cover"
            sizes="280px"
          />

          {item.isSpecial && (
            <div className="absolute top-2 right-2 md:top-4 md:right-4">
              <span className="bg-brand-red text-white text-[9px] md:text-xs font-bold px-2 py-0.5 md:px-3 md:py-1.5 rounded-full shadow-lg">
                SPECIAL
              </span>
            </div>
          )}
        </div>

        <div className="flex flex-col p-3 md:p-6 space-y-1.5 md:space-y-3 flex-grow">
          <h3 className="text-xs md:text-base lg:text-base font-bold text-heading line-clamp-2">{item.name}</h3>

          <div className="flex items-center gap-0.5 md:gap-1">
            {[...Array(fullStars)].map((_, i) => (
              <Star
                key={`full-${i}`}
                className="w-2.5 h-2.5 md:w-4 md:h-4 fill-secondary text-secondary"
              />
            ))}
            {hasHalfStar && (
              <Star className="w-2.5 h-2.5 md:w-4 md:h-4 fill-secondary text-secondary opacity-50" />
            )}
            {[...Array(5 - Math.ceil(item.rating))].map((_, i) => (
              <Star
                key={`empty-${i}`}
                className="w-2.5 h-2.5 md:w-4 md:h-4 text-gray-300"
              />
            ))}
            <span className="ml-0.5 md:ml-1 text-[10px] md:text-sm text-text font-medium">
              ({item.reviewCount || 0})
            </span>
          </div>

          <p className="text-[10px] md:text-sm text-text leading-relaxed line-clamp-2 flex-grow">
            {item.description}
          </p>

          <div className="flex items-center justify-between pt-1 md:pt-2 mt-auto">
            <span className="text-lg md:text-2xl font-bold text-heading">
              {formatPriceGHC(item.price)}
            </span>

            <Button
              variant="primary"
              size="sm"
              className="px-3 py-1.5 md:px-6 md:py-2.5 text-[10px] md:text-sm font-semibold rounded-full"
              onClick={handleOrder}
            >
              Order Now
            </Button>
          </div>
        </div>
      </motion.div>
    );
  }
);

MenuCard.displayName = 'MenuCard';