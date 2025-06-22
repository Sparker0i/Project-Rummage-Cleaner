import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Header } from './components/Header';
import { ControlPanel } from './components/ControlPanel';
import { TextInputPanel } from './components/TextInputPanel';
import { TextOutputPanel } from './components/TextOutputPanel';
import { ComparisonPanel } from './components/ComparisonPanel';
import { StatisticsPanel } from './components/StatisticsPanel';
import { useClipboard } from './hooks/useClipboard';
import { textCleaner } from './utils/textCleaner';

const App: React.FC = () => {
  const [inputText, setInputText] = useState<string>('');
  const [cleanedText, setCleanedText] = useState<string>('');
  const [realTimeMode, setRealTimeMode] = useState<boolean>(true);
  const [showComparison, setShowComparison] = useState<boolean>(true);
  const [showStats, setShowStats] = useState<boolean>(true);
  const [processMode, setProcessMode] = useState<'clean' | 'replace'>('replace');
  
  const { copy, status: copyStatus } = useClipboard();

  // Memoized statistics calculation
  const stats = useMemo(() => textCleaner.getStats(inputText, processMode), [inputText, processMode]);

  // Real-time processing effect
  useEffect(() => {
    if (realTimeMode) {
      setCleanedText(textCleaner.process(inputText, processMode));
    }
  }, [inputText, realTimeMode, processMode]);

  // Event handlers
  const handleManualClean = useCallback(() => {
    setCleanedText(textCleaner.process(inputText, processMode));
  }, [inputText, processMode]);

  const handleCopy = useCallback(() => {
    copy(cleanedText);
  }, [copy, cleanedText]);

  const handleReplace = useCallback(() => {
    setInputText(cleanedText);
  }, [cleanedText]);

  const toggleComparison = useCallback(() => {
    setShowComparison(prev => !prev);
  }, []);

  const toggleStats = useCallback(() => {
    setShowStats(prev => !prev);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6">
      <div className="max-w-6xl mx-auto">
        <Header />
        
        <ControlPanel
          realTimeMode={realTimeMode}
          onRealTimeModeChange={setRealTimeMode}
          onManualClean={handleManualClean}
          showComparison={showComparison}
          onShowComparisonChange={toggleComparison}
          showStats={showStats}
          onShowStatsChange={toggleStats}
          processMode={processMode}
          onProcessModeChange={setProcessMode}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <TextInputPanel 
            inputText={inputText} 
            onInputChange={setInputText} 
          />
          
          <TextOutputPanel
            cleanedText={cleanedText}
            totalProcessed={stats.totalProcessed}
            onCopy={handleCopy}
            onReplace={handleReplace}
            copyStatus={copyStatus}
            processMode={processMode}
          />
        </div>

        {showComparison && (
          <ComparisonPanel 
            inputText={inputText} 
            cleanedText={cleanedText}
            processMode={processMode}
          />
        )}

        {showStats && stats.totalProcessed > 0 && (
          <StatisticsPanel stats={stats} />
        )}
      </div>
    </div>
  );
};

export default App;