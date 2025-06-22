import React from 'react';
import { Card, CardHeader, CardContent } from './ui/Card';
import { ALL_CHARS_TO_REMOVE, ALL_CHARS_TO_REPLACE, CHAR_REPLACEMENTS } from '../constants/characters';
import type { ComparisonPanelProps } from '../types';

export const ComparisonPanel: React.FC<ComparisonPanelProps> = ({ inputText, cleanedText, processMode }) => {
  const renderHighlightedText = (text: string): React.ReactNode[] => (
    text.split('').map((char, index) => {
      const isInvisible = Object.values(ALL_CHARS_TO_REMOVE).includes(char);
      const isReplaceable = Object.values(ALL_CHARS_TO_REPLACE).includes(char);
      const replacement = CHAR_REPLACEMENTS[char];
      
      let className = '';
      let title = '';
      let displayChar = char;
      
      if (processMode === 'replace') {
        if (isReplaceable) {
          className = 'bg-blue-200 border border-blue-400';
          title = `Replaceable: "${char}" → "${replacement}"`;
        } else if (isInvisible) {
          className = 'bg-red-200 border border-red-400';
          title = `Invisible character: ${char.charCodeAt(0)} (removed)`;
          displayChar = '◌';
        }
      } else {
        if (isInvisible || isReplaceable) {
          className = 'bg-red-200 border border-red-400';
          title = `Character: ${char.charCodeAt(0)} (removed)`;
          displayChar = isInvisible ? '◌' : char;
        }
      }
      
      return (
        <span
          key={index}
          className={className}
          title={title}
        >
          {displayChar}
        </span>
      );
    })
  );

  return (
    <Card className="mb-6">
      <CardHeader title="Character-by-Character Comparison" />
      <CardContent>
        <div className="mb-4 text-sm text-gray-600">
          {processMode === 'replace' ? (
            <>
              <span className="inline-block w-4 h-4 bg-blue-200 border border-blue-400 mr-2"></span>
              Replaceable characters
              <span className="inline-block w-4 h-4 bg-red-200 border border-red-400 mr-2 ml-4"></span>
              Invisible characters (removed)
            </>
          ) : (
            <>
              <span className="inline-block w-4 h-4 bg-red-200 border border-red-400 mr-2"></span>
              Characters to be removed
            </>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-medium text-gray-700 mb-2">Original (with highlighting)</h3>
            <div className="p-3 border rounded bg-gray-50 min-h-32 text-sm font-mono whitespace-pre-wrap">
              {renderHighlightedText(inputText)}
            </div>
          </div>
          <div>
            <h3 className="font-medium text-gray-700 mb-2">
              {processMode === 'replace' ? 'Processed' : 'Cleaned'}
            </h3>
            <div className="p-3 border rounded bg-green-50 min-h-32 text-sm font-mono whitespace-pre-wrap">
              {cleanedText}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};