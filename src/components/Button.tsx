import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) => {
  const variants = {
    primary: 'bg-brand-primary text-white hover:bg-opacity-90',
    secondary: 'bg-brand-secondary text-brand-primary hover:bg-opacity-90',
    outline: 'border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white',
    accent: 'bg-brand-accent text-white hover:bg-opacity-90',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 font-medium',
    lg: 'px-8 py-4 text-lg font-bold',
  };

  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        'rounded-full transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
};
