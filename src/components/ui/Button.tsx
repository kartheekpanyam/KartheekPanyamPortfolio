'use client';

import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { MagneticCursor } from '../effects/MagneticCursor';

export type ButtonVariant = 'primary' | 'secondary' | 'outlined' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  iconAnimation?: 'rotate' | 'translate' | 'scale' | 'none';
  magnetic?: boolean;
  magneticStrength?: number;
  magneticRadius?: number;
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      icon: Icon,
      iconPosition = 'left',
      iconAnimation = 'none',
      magnetic = true,
      magneticStrength = 0.3,
      magneticRadius = 100,
      className,
      children,
      ...props
    },
    ref
  ) => {
    // Size variants - compact modern design
    const sizeClasses = {
      sm: 'px-3 py-1.5 text-xs',
      md: 'px-4 py-2 text-sm',
      lg: 'px-5 py-2.5 text-base',
    };

    // Variant styles
    const variantClasses = {
      primary:
        'bg-gradient-to-r from-primary via-cyan-500 to-primary bg-[length:200%_100%] hover:bg-[position:100%_0] text-white shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/50',
      secondary:
        'bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 backdrop-blur-sm shadow-lg hover:shadow-xl',
      outlined:
        'bg-transparent border border-primary/50 hover:border-primary hover:bg-primary/10 shadow-md hover:shadow-lg hover:shadow-primary/20',
      ghost:
        'bg-transparent hover:bg-white/10 border border-transparent hover:border-white/20',
    };

    // Icon animation classes
    const iconAnimationClasses = {
      rotate: 'group-hover:rotate-12',
      translate: iconPosition === 'left' ? 'group-hover:-translate-x-0.5' : 'group-hover:translate-x-0.5',
      scale: 'group-hover:scale-110',
      none: '',
    };

    // Icon size based on button size
    const iconSizes = {
      sm: 'w-3.5 h-3.5',
      md: 'w-4 h-4',
      lg: 'w-5 h-5',
    };

    const buttonContent = (
      <button
        ref={ref}
        className={cn(
          'group relative inline-flex items-center justify-center gap-2',
          'rounded-full font-medium',
          'transition-all duration-300 ease-out',
          'hover:scale-[1.02] active:scale-[0.98]',
          'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50',
          sizeClasses[size],
          variantClasses[variant],
          className
        )}
        {...props}
      >
        {Icon && iconPosition === 'left' && (
          <Icon
            className={cn(
              iconSizes[size],
              iconAnimationClasses[iconAnimation],
              'transition-transform duration-300'
            )}
          />
        )}
        <span className="relative z-10">{children}</span>
        {Icon && iconPosition === 'right' && (
          <Icon
            className={cn(
              iconSizes[size],
              iconAnimationClasses[iconAnimation],
              'transition-transform duration-300'
            )}
          />
        )}
      </button>
    );

    // Wrap with MagneticCursor if enabled
    if (magnetic) {
      return (
        <MagneticCursor strength={magneticStrength} radius={magneticRadius}>
          {buttonContent}
        </MagneticCursor>
      );
    }

    return buttonContent;
  }
);

Button.displayName = 'Button';

export default Button;
