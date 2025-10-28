import React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'special' | 'new' | 'popular' | 'success' | 'warning';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

/**
 * Badge Component
 * 
 * Small pill-shaped labels for highlighting information
 * 
 * Variants:
 * - default: Orange background (standard badges)
 * - special: Brand red background (for special offers)
 * - new: Green background (new items)
 * - popular: Gold background (popular items)
 * - success: Green (confirmations)
 * - warning: Yellow (alerts)
 * 
 * @example
 * <Badge variant="special">SPECIAL DEAL</Badge>
 * <Badge variant="popular" size="sm">Popular</Badge>
 */
export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant = 'default', size = 'md', className, children, ...props }, ref) => {
    const baseStyles =
      'inline-flex items-center justify-center rounded-full font-semibold whitespace-nowrap';

    const variants = {
      default:
        'bg-[var(--color-primary)] text-white',
      special:
        'bg-[var(--color-brand-red)] text-white shadow-sm',
      new: 'bg-green-500 text-white',
      popular:
        'bg-[var(--color-secondary)] text-[var(--color-heading)]',
      success: 'bg-green-100 text-green-800',
      warning: 'bg-yellow-100 text-yellow-800',
    };

    const sizes = {
      sm: 'px-2 py-0.5 text-xs',
      md: 'px-3 py-1 text-sm',
      lg: 'px-4 py-1.5 text-base',
    };

    return (
      <span
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';

/**
 * IconBadge Component
 * Badge with an icon (useful for counts, notifications)
 */
export interface IconBadgeProps extends BadgeProps {
  icon: React.ReactNode;
}

export const IconBadge = React.forwardRef<HTMLSpanElement, IconBadgeProps>(
  (
    { icon, variant = 'default', size = 'md', className, children, ...props },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center gap-1 rounded-full font-semibold whitespace-nowrap';

    const variants = {
      default:
        'bg-[var(--color-primary)] text-white',
      special:
        'bg-[var(--color-brand-red)] text-white shadow-sm',
      new: 'bg-green-500 text-white',
      popular:
        'bg-[var(--color-secondary)] text-[var(--color-heading)]',
      success: 'bg-green-100 text-green-800',
      warning: 'bg-yellow-100 text-yellow-800',
    };

    const sizes = {
      sm: 'px-2 py-0.5 text-xs',
      md: 'px-3 py-1 text-sm',
      lg: 'px-4 py-1.5 text-base',
    };

    return (
      <span
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        <span className="inline-flex">{icon}</span>
        {children}
      </span>
    );
  }
);

IconBadge.displayName = 'IconBadge';