import React from 'react';
import { Card, CardHeader, CardContent } from './ui/Card';
import { ALL_CHARS_TO_REPLACE } from '../constants/characters';
import type { StatisticsPanelProps } from '../types';

export const StatisticsPanel: React.FC<StatisticsPanelProps> = ({ stats }) => {
  const isReplaceMode = stats.mode === 'replace';
  const title = isReplaceMode ? 'Processing Statistics' : 'Removal Statistics';
  const subtitle = isReplaceMode 
    ? `Total characters processed: ${stats.totalProcessed}` 
    : `Total characters removed: ${stats.totalProcessed}`;

  return (
    <Card>
      <CardHeader title={title} subtitle={subtitle} />
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(stats.counts).map(([name, count]) => {
            const isReplaceable = ALL_CHARS_TO_REPLACE[name];
            const colorClass = isReplaceMode && isReplaceable 
              ? 'text-blue-600' 
              : 'text-red-600';
            const actionText = isReplaceMode && isReplaceable ? 'replaced' : 'removed';
            
            return (
              <div key={name} className="bg-gray-50 p-3 rounded-lg">
                <div className="font-medium text-gray-800 text-sm">{name}</div>
                <div className={`text-lg font-bold ${colorClass}`}>{count}</div>
                {isReplaceMode && (
                  <div className="text-xs text-gray-600">{actionText}</div>
                )}
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};