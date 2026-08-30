import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';

export type BadgeVariant = 'default' | 'accent' | 'outline' | 'success';
export type BadgeSize = 'sm' | 'md';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
  icon?: React.ReactNode;
}

const badgeVariants: Record<BadgeVariant, string> = {
  default: 'bg-slate-800/80 text-slate-200 border-slate-700',
  accent: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30',
  outline: 'bg-transparent text-slate-300 border-slate-700/80',
  success: 'bg-emerald-600 text-white border-emerald-500 shadow-sm shadow-emerald-950',
};

const badgeSizes: Record<BadgeSize, string> = {
  sm: 'px-2.5 py-0.5 text-xs gap-1',
  md: 'px-3 py-1 text-xs sm:text-sm gap-1.5',
};

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', size = 'sm', icon, children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center font-medium rounded-full border transition-colors select-none',
          badgeVariants[variant],
          badgeSizes[size],
          className
        )}
        {...props}
      >
        {icon && <span className="shrink-0">{icon}</span>}
        <span>{children}</span>
      </span>
    );
  }
);

Badge.displayName = 'Badge';
