'use client';

import { useEffect, useState } from 'react';

/**
 * Hook to detect media query matches
 * Returns true if the media query matches
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const mediaQuery = window.matchMedia(query);
    setMatches(mediaQuery.matches);

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

  // Return false during SSR to prevent hydration mismatch
  if (!mounted) {
    return false;
  }

  return matches;
}

/**
 * Convenience hook for mobile breakpoint (900px)
 */
export function useIsMobile() {
  return useMediaQuery('(max-width: 900px)');
}

/**
 * Convenience hook for tablet breakpoint (1024px)
 */
export function useIsTablet() {
  return useMediaQuery('(max-width: 1024px)');
}
