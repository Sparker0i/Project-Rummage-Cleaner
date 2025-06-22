import React from 'react';
import { Trash2, Eye, EyeOff, BarChart3, RefreshCw } from 'lucide-react';
import { Button } from './ui/Button';
import { Card, CardContent } from './ui/Card';
import type { ControlPanelProps } from '../types';

export const ControlPanel: React.FC<ControlPanelProps> = ({
  realTimeMode,
  onRealTimeModeChange,
  onManualClean,
  showComparison,
  onShowComparisonChange,
  showStats,
  onShowStatsChange,
  processMode,
  onProcessModeChange
}) => (
  <Card className="mb-6">
    <CardContent>
      <div className="flex flex-wrap gap-4 items-center">
        <div className="flex gap-2">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="processMode"
              checked={processMode === 'replace'}
              onChange={() => onProcessModeChange('replace')}
              className="rounded border-gray-300"
            />
            <span className="text-sm font-medium">Replace Characters</span>
          </label>
          
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="processMode"
              checked={processMode === 'clean'}
              onChange={() => onProcessModeChange('clean')}
              className="rounded border-gray-300"
            />
            <span className="text-sm font-medium">Remove All</span>
          </label>
        </div>
        
        <div className="w-px h-6 bg-gray-300"></div>
        
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={realTimeMode}
            onChange={(e) => onRealTimeModeChange(e.target.checked)}
            className="rounded border-gray-300"
          />
          <span className="text-sm font-medium">Real-time processing</span>
        </label>
        
        <Button onClick={onManualClean} disabled={realTimeMode}>
          {processMode === 'replace' ? <RefreshCw size={16} /> : <Trash2 size={16} />}
          {processMode === 'replace' ? 'Process Text' : 'Clean Text'}
        </Button>

        <Button onClick={onShowComparisonChange} variant="secondary">
          {showComparison ? <EyeOff size={16} /> : <Eye size={16} />}
          {showComparison ? 'Hide' : 'Show'} Comparison
        </Button>

        <Button onClick={onShowStatsChange} variant="info">
          <BarChart3 size={16} />
          {showStats ? 'Hide' : 'Show'} Stats
        </Button>
      </div>
    </CardContent>
  </Card>
);