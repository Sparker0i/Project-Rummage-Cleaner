import React from 'react';
import { Card, CardHeader, CardContent } from './ui/Card';
import { TextArea } from './ui/TextArea';
import type { TextInputPanelProps } from '../types';

export const TextInputPanel: React.FC<TextInputPanelProps> = ({ inputText, onInputChange }) => (
  <Card>
    <CardHeader 
      title="Original Text" 
      subtitle={`Characters: ${inputText.length}`}
    />
    <CardContent>
      <TextArea
        value={inputText}
        onChange={(e) => onInputChange(e.target.value)}
        placeholder="Paste your text here to remove invisible characters..."
      />
    </CardContent>
  </Card>
);