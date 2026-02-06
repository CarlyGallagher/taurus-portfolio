'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { socialLinks } from '@/constants/data';

interface SocialsDropdownProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function SocialsDropdown({ isOpen, onToggle }: SocialsDropdownProps) {
  return (
    <li className="socials relative">
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          onToggle();
        }}
        className="hover-underline"
      >
        Socials
      </a>
      <div
        className={`sub-menu-wrap absolute right-0 mt-2 overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="sub-menu bg-bronze-700 dark:bg-bronze-900 rounded-lg shadow-lg min-w-[200px]">
          <div className="social-menu py-2">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="sub-menu-link flex items-center gap-3 px-4 py-3 hover:bg-bronze-600 dark:hover:bg-bronze-800 transition-colors duration-300"
              >
                <FontAwesomeIcon
                  icon={link.name === 'LinkedIn' ? faLinkedin : faSquareGithub}
                  className="text-white w-5"
                />
                <p className="text-white">{link.name}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </li>
  );
}
