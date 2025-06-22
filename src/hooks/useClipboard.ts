import { useState, useCallback } from 'react';

interface UseClipboardReturn {
  copy: (text: string) => Promise<void>;
  status: string;
}

export const useClipboard = (): UseClipboardReturn => {
  const [status, setStatus] = useState<string>('');

  const copy = useCallback(async (text: string): Promise<void> => {
    try {
      await navigator.clipboard.writeText(text);
      setStatus('Copied!');
      setTimeout(() => setStatus(''), 2000);
    } catch (err) {
      setStatus('Copy failed');
      setTimeout(() => setStatus(''), 2000);
    }
  }, []);

  return { copy, status };
};