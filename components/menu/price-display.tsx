import React from 'react';
import { formatPriceGHC } from '@/lib/utils';
import { cn } from '@/lib/utils';

interface PriceDisplayProps {
  price: number;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const PriceDisplay: React.FC<PriceDisplayProps> = ({
  price,
  className,
  size = 'md',
}) => {
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
  };

  return (
    <p
      className={cn(
        'font-bold text-primary',
        sizeClasses[size],
        className
      )}
    >
      {formatPriceGHC(price)}
    </p>
  );
};

PriceDisplay.displayName = 'PriceDisplay';