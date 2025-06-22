import React from 'react';
import type { TextAreaProps } from '../../types';

export const TextArea: React.FC<TextAreaProps> = ({ 
  value, 
  onChange, 
  placeholder, 
  readOnly = false, 
  className = '' 
}) => (
  <textarea
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    readOnly={readOnly}
    className={`w-full h-64 p-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${readOnly ? 'bg-gray-50' : ''} ${className}`}
  />
);