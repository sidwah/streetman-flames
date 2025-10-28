import React from 'react';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'special';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
}

/**
 * Button Component
 * 
 * Variants:
 * - primary: Orange background (main CTAs)
 * - secondary: White background with border
 * - outline: Transparent with border
 * - ghost: No background or border
 * - special: Brand red background (for special offers)
 * 
 * @example
 * <Button variant="primary" size="lg">Order Now</Button>
 * <Button variant="special" leftIcon={<Star />}>Special Deal</Button>
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      className,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none';

    const variants = {
      primary:
        'bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-light)] focus:ring-[var(--color-primary)] shadow-md hover:shadow-lg hover:scale-[1.02]',
      secondary:
        'bg-white text-[var(--color-heading)] border-2 border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white focus:ring-[var(--color-primary)]',
      outline:
        'bg-transparent text-[var(--color-heading)] border-2 border-[var(--color-text)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] focus:ring-[var(--color-primary)]',
      ghost:
        'bg-transparent text-[var(--color-heading)] hover:bg-[var(--color-cream)] focus:ring-[var(--color-primary)]',
      special:
        'bg-[var(--color-brand-red)] text-white hover:bg-[var(--color-brand-red-light)] focus:ring-[var(--color-brand-red)] shadow-md hover:shadow-lg hover:scale-[1.02]',
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            <span>Loading...</span>
          </>
        ) : (
          <>
            {leftIcon && <span className="inline-flex">{leftIcon}</span>}
            {children}
            {rightIcon && <span className="inline-flex">{rightIcon}</span>}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';