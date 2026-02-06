'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@/hooks/useTheme';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="theme-toggle">
      <input
        type="checkbox"
        id="theme-switch"
        checked={theme === 'light'}
        onChange={toggleTheme}
        className="hidden"
      />
      <label
        htmlFor="theme-switch"
        className="cursor-pointer flex items-center justify-center w-10 h-10 rounded-full hover:bg-bronze-600/20 dark:hover:bg-bronze-300/10 transition-colors duration-300"
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? (
          <FontAwesomeIcon
            icon={faSun}
            className="text-bronze-300 text-xl transition-all duration-900"
          />
        ) : (
          <FontAwesomeIcon
            icon={faMoon}
            className="text-white text-xl transition-all duration-900"
          />
        )}
      </label>
    </div>
  );
}
