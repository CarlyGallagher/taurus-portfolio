'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useIsMobile } from '@/hooks/useMediaQuery';
import { useEffect } from 'react';

interface MobileMenuProps {
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

export default function MobileMenu({ isOpen, onToggle, children }: MobileMenuProps) {
  const isMobile = useIsMobile();

  // Auto-close mobile menu when switching to desktop
  useEffect(() => {
    if (!isMobile && isOpen) {
      onToggle();
    }
  }, [isMobile, isOpen, onToggle]);

  return (
    <>
      {/* Hamburger icon - visible only on mobile */}
      <div
        className="hamburger md:hidden cursor-pointer z-50"
        onClick={onToggle}
        aria-label="Toggle mobile menu"
      >
        <FontAwesomeIcon icon={faBars} className="text-white text-2xl" />
      </div>

      {/* Mobile menu content */}
      <div
        className={`md:hidden fixed top-16 right-0 w-full bg-bronze-600 dark:bg-bronze-900 transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        {children}
      </div>
    </>
  );
}
