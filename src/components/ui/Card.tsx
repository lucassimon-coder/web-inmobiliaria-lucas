import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';

export type CardVariant = 'default' | 'elevated' | 'bordered';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  hoverEffect?: boolean;
}

const cardVariants: Record<CardVariant, string> = {
  default: 'bg-white border border-slate-200 shadow-xs',
  elevated: 'bg-white border border-slate-200 shadow-sm',
  bordered: 'bg-slate-50/60 border border-slate-200',
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', hoverEffect = false, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'rounded-2xl text-slate-900 overflow-hidden transition-all duration-200',
          cardVariants[variant],
          hoverEffect && 'hover:border-slate-300 hover:shadow-md hover:-translate-y-0.5',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Card.displayName = 'Card';

export const CardHeader = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('p-6 pb-4 flex flex-col space-y-1.5', className)} {...props}>
        {children}
      </div>
    );
  }
);
CardHeader.displayName = 'CardHeader';

export const CardTitle = forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <h3 ref={ref} className={cn('text-lg sm:text-xl font-bold tracking-tight text-slate-900', className)} {...props}>
        {children}
      </h3>
    );
  }
);
CardTitle.displayName = 'CardTitle';

export const CardDescription = forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <p ref={ref} className={cn('text-sm text-slate-600 leading-relaxed', className)} {...props}>
        {children}
      </p>
    );
  }
);
CardDescription.displayName = 'CardDescription';

export const CardContent = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('p-6 pt-0', className)} {...props}>
        {children}
      </div>
    );
  }
);
CardContent.displayName = 'CardContent';

export const CardFooter = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('p-6 pt-0 flex items-center', className)} {...props}>
        {children}
      </div>
    );
  }
);
CardFooter.displayName = 'CardFooter';
