import React, { forwardRef } from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '../../utils/cn';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'whatsapp' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-zinc-900 hover:bg-zinc-800 text-white shadow-xs border border-zinc-900 focus-visible:ring-zinc-900',
  secondary:
    'bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 focus-visible:ring-slate-400',
  outline:
    'bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 hover:border-slate-400 focus-visible:ring-slate-400 shadow-xs',
  whatsapp:
    'bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold shadow-xs shadow-[#25D366]/20 border border-[#25D366]/40 focus-visible:ring-[#25D366]',
  ghost:
    'bg-transparent hover:bg-slate-100 text-slate-700 hover:text-slate-900 border border-transparent focus-visible:ring-slate-400',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-xs font-semibold rounded-lg gap-1.5',
  md: 'px-4.5 py-2.5 text-sm font-semibold rounded-xl gap-2',
  lg: 'px-6 py-3 text-sm sm:text-base font-semibold rounded-xl gap-2.5',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(
          'inline-flex items-center justify-center font-medium transition-all duration-150 cursor-pointer select-none',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white',
          'disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed active:scale-[0.98]',
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {isLoading ? (
          <Loader2 className="w-4 h-4 animate-spin shrink-0" />
        ) : (
          leftIcon && <span className="shrink-0">{leftIcon}</span>
        )}
        <span>{children}</span>
        {!isLoading && rightIcon && <span className="shrink-0">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';
