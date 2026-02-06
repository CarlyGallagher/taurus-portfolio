'use client';

import { useEffect, useState } from 'react';

interface UseTypewriterOptions {
  text: string;
  speed?: number;
  delay?: number;
}

/**
 * Hook to create a typewriter effect
 * @param text - The full text to type out
 * @param speed - Typing speed in milliseconds per character (default: 50)
 * @param delay - Delay before starting in milliseconds (default: 500)
 * @returns The currently displayed text
 */
export function useTypewriter({ text, speed = 50, delay = 500 }: UseTypewriterOptions): string {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    // Start typing after delay
    const startTimer = setTimeout(() => {
      setHasStarted(true);
    }, delay);

    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!hasStarted || currentIndex >= text.length) {
      return;
    }

    const timer = setTimeout(() => {
      setDisplayedText((prev) => prev + text[currentIndex]);
      setCurrentIndex((prev) => prev + 1);
    }, speed);

    return () => clearTimeout(timer);
  }, [currentIndex, hasStarted, text, speed]);

  return displayedText;
}
