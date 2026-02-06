'use client';

import { useState } from 'react';
import MobileMenu from '@/components/features/MobileMenu';
import { resumePath } from '@/constants/data';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const NavLinks = () => (
    <ul className="flex flex-col md:flex-row items-center gap-6 p-4 md:p-0" role="list">
      <li>
        <a
          href={resumePath}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover-underline"
          aria-label="Download resume (opens in new tab)"
        >
          Resume
        </a>
      </li>

      <li>
        <a
          href="#about"
          className="text-white hover-underline"
          aria-label="Jump to skills section"
        >
          Skills
        </a>
      </li>

      <li>
        <a
          href="#projects"
          className="text-white hover-underline"
          aria-label="Jump to projects section"
        >
          Projects
        </a>
      </li>

      <li>
        <a
          href="#contact"
          className="text-white hover-underline"
          aria-label="Jump to contact section"
        >
          Contact
        </a>
      </li>

      <li>
        <a
          href="#contact"
          className="text-white hover-underline"
          aria-label="Jump to socials section"
        >
          Socials
        </a>
      </li>
    </ul>
  );

  return (
    <div className="hero relative">
      <nav
        className="navbar flex justify-between items-center py-4 px-6 bg-black/30 backdrop-blur-sm"
        aria-label="Main navigation"
        role="navigation"
      >
        {/* Logo/Name - visible on mobile */}
        <div className="nav-name text-white text-xl font-semibold md:hidden" aria-label="Carly Gallagher">
          Carly Gallagher
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 ml-auto">
          <NavLinks />
        </div>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center gap-4">
          <MobileMenu isOpen={mobileMenuOpen} onToggle={toggleMobileMenu}>
            <NavLinks />
          </MobileMenu>
        </div>
      </nav>
    </div>
  );
}
