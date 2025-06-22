export interface CharacterCounts {
  [characterName: string]: number;
}

export interface Statistics {
  counts: CharacterCounts;
  totalProcessed: number;
  mode?: 'clean' | 'replace';
}

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'info';
  size?: 'sm' | 'md';
  className?: string;
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export interface CardHeaderProps {
  title: string;
  subtitle?: React.ReactNode;
  actions?: React.ReactNode;
}

export interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

export interface TextAreaProps {
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  readOnly?: boolean;
  className?: string;
}

export interface ControlPanelProps {
  realTimeMode: boolean;
  onRealTimeModeChange: (enabled: boolean) => void;
  onManualClean: () => void;
  showComparison: boolean;
  onShowComparisonChange: () => void;
  showStats: boolean;
  onShowStatsChange: () => void;
  processMode: 'clean' | 'replace';
  onProcessModeChange: (mode: 'clean' | 'replace') => void;
}

export interface TextInputPanelProps {
  inputText: string;
  onInputChange: (text: string) => void;
}

export interface TextOutputPanelProps {
  cleanedText: string;
  totalProcessed: number;
  onCopy: () => void;
  onReplace: () => void;
  copyStatus: string;
  processMode: 'clean' | 'replace';
}

export interface ComparisonPanelProps {
  inputText: string;
  cleanedText: string;
  processMode: 'clean' | 'replace';
}

export interface StatisticsPanelProps {
  stats: Statistics;
}