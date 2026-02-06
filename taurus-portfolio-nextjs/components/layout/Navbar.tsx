'use client';

import { useState } from 'react';
import ContactDropdown from '@/components/features/ContactDropdown';
import SocialsDropdown from '@/components/features/SocialsDropdown';
import MobileMenu from '@/components/features/MobileMenu';
import { resumePath } from '@/constants/data';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [socialsOpen, setSocialsOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  // Mutual exclusivity for dropdowns
  const toggleContact = () => {
    setContactOpen(!contactOpen);
    if (!contactOpen) setSocialsOpen(false);
  };

  const toggleSocials = () => {
    setSocialsOpen(!socialsOpen);
    if (!socialsOpen) setContactOpen(false);
  };

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

      <ContactDropdown isOpen={contactOpen} onToggle={toggleContact} />
      <SocialsDropdown isOpen={socialsOpen} onToggle={toggleSocials} />
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
