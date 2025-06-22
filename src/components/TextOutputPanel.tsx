
import React from 'react';
import { Copy } from 'lucide-react';
import { Button } from './ui/Button';
import { Card, CardHeader, CardContent } from './ui/Card';
import { TextArea } from './ui/TextArea';
import type { TextOutputPanelProps } from '../types';

export const TextOutputPanel: React.FC<TextOutputPanelProps> = ({ 
  cleanedText, 
  totalProcessed, 
  onCopy, 
  onReplace, 
  copyStatus,
  processMode
}) => (
  <Card>
    <CardHeader 
      title={processMode === 'replace' ? 'Processed Text' : 'Cleaned Text'}
      subtitle={
        <>
          Characters: {cleanedText.length}
          {totalProcessed > 0 && (
            <span className={processMode === 'replace' ? 'text-blue-600 ml-2' : 'text-red-600 ml-2'}>
              ({processMode === 'replace' ? `${totalProcessed} processed` : `-${totalProcessed} removed`})
            </span>
          )}
        </>
      }
      actions={
        <>
          <Button onClick={onCopy} variant="success" size="sm">
            <Copy size={14} />
            Copy
          </Button>
          <Button onClick={onReplace} variant="warning" size="sm">
            Replace
          </Button>
        </>
      }
    />
    <CardContent>
      <TextArea value={cleanedText} readOnly />
      {copyStatus && (
        <p className="text-green-600 text-sm mt-2">{copyStatus}</p>
      )}
    </CardContent>
  </Card>
);