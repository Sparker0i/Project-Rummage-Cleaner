import { ALL_CHARS_TO_REMOVE, ALL_CHARS_TO_REPLACE, ALL_CHARS, CHAR_REPLACEMENTS } from '../constants/characters';
import type { Statistics } from '../types';

export const textCleaner = {
  clean: (text: string): string => {
    let cleaned = text;
    Object.values(ALL_CHARS_TO_REMOVE).forEach(char => {
      cleaned = cleaned.replace(new RegExp(char, 'g'), '');
    });
    return cleaned;
  },

  replace: (text: string): string => {
    let processed = text;
    
    // First, replace replaceable characters with their standard equivalents
    Object.entries(CHAR_REPLACEMENTS).forEach(([char, replacement]) => {
      processed = processed.replace(new RegExp(char, 'g'), replacement);
    });
    
    // Then remove invisible and control characters
    Object.values(ALL_CHARS_TO_REMOVE).forEach(char => {
      processed = processed.replace(new RegExp(char, 'g'), '');
    });
    
    return processed;
  },

  process: (text: string, mode: 'clean' | 'replace'): string => {
    return mode === 'replace' ? textCleaner.replace(text) : textCleaner.clean(text);
  },
  
  getStats: (text: string, mode: 'clean' | 'replace' = 'clean'): Statistics => {
    const counts: Record<string, number> = {};
    let totalProcessed = 0;

    if (mode === 'replace') {
      // Count replaceable characters
      Object.entries(ALL_CHARS_TO_REPLACE).forEach(([name, char]) => {
        const matches = (text.match(new RegExp(char, 'g')) || []).length;
        if (matches > 0) {
          counts[name] = matches;
          totalProcessed += matches;
        }
      });
      
      // Count characters that will be removed
      Object.entries(ALL_CHARS_TO_REMOVE).forEach(([name, char]) => {
        const matches = (text.match(new RegExp(char, 'g')) || []).length;
        if (matches > 0) {
          counts[name] = matches;
          totalProcessed += matches;
        }
      });
    } else {
      // Count all characters that will be removed
      Object.entries(ALL_CHARS).forEach(([name, char]) => {
        const matches = (text.match(new RegExp(char, 'g')) || []).length;
        if (matches > 0) {
          counts[name] = matches;
          totalProcessed += matches;
        }
      });
    }

    return { counts, totalProcessed, mode };
  }
};