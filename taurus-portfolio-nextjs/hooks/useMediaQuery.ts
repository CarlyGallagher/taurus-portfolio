'use client';

import { useEffect, useState } from 'react';

/**
 * Hook to detect media query matches
 * Returns true if the media query matches
 */
export function useMediaQuery(query: string): boolean {
  // Lazy initializer to set initial state on mount
  const [matches, setMatches] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches;
    }
    return false;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);

    const handler = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    // Modern browsers
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handler);
      return () => mediaQuery.removeEventListener('change', handler);
    }
    // Fallback for older browsers
    else {
      mediaQuery.addListener(handler);
      return () => mediaQuery.removeListener(handler);
    }
  }, [query]);

  return matches;
}

/**
 * Convenience hook for mobile breakpoint (900px)
 */
export function useIsMobile() {
  return useMediaQuery('(max-width: 900px)');
}
