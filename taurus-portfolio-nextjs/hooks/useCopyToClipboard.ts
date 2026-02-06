'use client';

import { useState } from 'react';

/**
 * Hook for copying text to clipboard with feedback
 * Returns [copiedText, copyFn]
 */
export function useCopyToClipboard() {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const copy = async (text: string) => {
    if (!navigator?.clipboard) {
      console.warn('Clipboard not supported');
      return false;
    }

    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);

      // Reset copied state after 900ms (matching original behavior)
      setTimeout(() => {
        setCopiedText(null);
      }, 900);

      return true;
    } catch (error) {
      console.error('Failed to copy text:', error);
      setCopiedText(null);
      return false;
    }
  };

  return [copiedText, copy] as const;
}
