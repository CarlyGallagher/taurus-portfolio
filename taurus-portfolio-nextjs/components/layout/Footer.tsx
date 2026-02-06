'use client';

import { footerText } from '@/constants/data';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-bronze-800 dark:bg-black text-white py-8 text-center">
      <h4 className="text-xl mb-4 font-semibold">{footerText.brand}</h4>
      <button
        onClick={scrollToTop}
        className="px-6 py-2 rounded-lg bg-bronze-700 dark:bg-bronze-900 hover:bg-bronze-600 dark:hover:bg-bronze-800 transition-colors duration-300 mb-4 hover-underline"
      >
        {footerText.backToTop}
      </button>
      <h4 className="text-sm opacity-80">{footerText.copyright}</h4>
    </footer>
  );
}
