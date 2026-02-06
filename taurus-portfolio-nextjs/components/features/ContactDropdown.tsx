'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { contactInfo } from '@/constants/data';
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';

interface ContactDropdownProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function ContactDropdown({ isOpen, onToggle }: ContactDropdownProps) {
  const [copiedText, copy] = useCopyToClipboard();

  const handleCopy = (text: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    copy(text);
  };

  return (
    <li className="contact relative">
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          onToggle();
        }}
        className="hover-underline"
      >
        Contact
      </a>
      <div
        className={`sub-menu-wrap absolute right-0 mt-2 overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="sub-menu bg-bronze-700 dark:bg-bronze-900 rounded-lg shadow-lg min-w-[250px]">
          <div className="social-menu py-2">
            {contactInfo.map((contact) => (
              <button
                key={contact.type}
                onClick={(e) => handleCopy(contact.value, e)}
                className="sub-menu-link flex items-center gap-3 px-4 py-3 w-full hover:bg-bronze-600 dark:hover:bg-bronze-800 transition-colors duration-300 cursor-pointer text-left"
              >
                <FontAwesomeIcon
                  icon={contact.type === 'phone' ? faPhone : faEnvelope}
                  className="text-white w-5"
                />
                <p className="text-white">
                  {copiedText === contact.value ? 'Copied!' : contact.value}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </li>
  );
}
