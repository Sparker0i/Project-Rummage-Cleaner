import React from 'react';
import type { CardProps, CardHeaderProps, CardContentProps } from '../../types';

export const Card: React.FC<CardProps> = ({ children, className = '' }) => (
  <div className={`bg-white rounded-lg shadow-sm border ${className}`}>
    {children}
  </div>
);

export const CardHeader: React.FC<CardHeaderProps> = ({ title, subtitle, actions }) => (
  <div className="p-4 border-b bg-gray-50 rounded-t-lg flex justify-between items-center">
    <div>
      <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
      {subtitle && <div className="text-sm text-gray-600">{subtitle}</div>}
    </div>
    {actions && <div className="flex gap-2">{actions}</div>}
  </div>
);

export const CardContent: React.FC<CardContentProps> = ({ children, className = '' }) => (
  <div className={`p-4 ${className}`}>{children}</div>
);