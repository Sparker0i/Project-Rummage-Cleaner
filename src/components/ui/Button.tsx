import React from 'react';
import type { ButtonProps } from '../../types';

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  disabled, 
  variant = 'primary', 
  size = 'md', 
  className = '' 
}) => {
  const baseClasses = 'flex items-center gap-2 rounded-lg transition-colors font-medium';
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2'
  };
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700',
    success: 'bg-green-600 text-white hover:bg-green-700',
    warning: 'bg-orange-600 text-white hover:bg-orange-700',
    info: 'bg-purple-600 text-white hover:bg-purple-700'
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  );
};