'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faSquareGithub, faInstagram, IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { socialLinks } from '@/constants/data';

// Map icon names to FontAwesome icon objects
const iconMap: Record<string, IconDefinition> = {
  'fa-linkedin': faLinkedin,
  'fa-square-github': faSquareGithub,
  'fa-instagram': faInstagram,
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        const data = await response.json();
        setStatus('error');
        setErrorMessage(data.error || 'Failed to send message');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Failed to send message. Please try again.');
      console.error('Contact form error:', error);
    }
  };

  return (
    <section id="contact" className="py-16 px-6 bg-[#000000]" aria-labelledby="contact-heading">
      <div className="container mx-auto max-w-6xl">
        <h1 id="contact-heading" className="text-4xl md:text-5xl text-white mb-12 text-center">
          Get In Touch
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-black border-5 border-bronze-800 rounded-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black text-white border border-bronze-400 rounded-lg focus:outline-none focus:border-bronze-300 transition-colors duration-300"
                  placeholder="Your Name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black text-white border border-bronze-400 rounded-lg focus:outline-none focus:border-bronze-300 transition-colors duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-black text-white border border-bronze-400 rounded-lg focus:outline-none focus:border-bronze-300 transition-colors duration-300 resize-none"
                  placeholder="Your message..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-bronze-400 hover:bg-bronze-300 text-black font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>

              {/* Status Messages */}
              {status === 'success' && (
                <p className="text-bronze-300 text-center font-medium">
                  Message sent successfully! I'll get back to you soon.
                </p>
              )}
              {status === 'error' && (
                <p className="text-red-400 text-center font-medium">
                  {errorMessage}
                </p>
              )}
            </form>
          </div>

          {/* Social Links */}
          <div className="flex flex-col justify-start items-center lg:items-start">
            <div className="flex flex-col gap-6 w-full max-w-sm">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-bronze-800 hover:bg-black text-white px-6 py-4 rounded-lg transition-all duration-300 hover:-translate-y-1 group border border-transparent hover:border-bronze-800"
                  aria-label={`Visit my ${social.name} profile`}
                >
                  <FontAwesomeIcon
                    icon={iconMap[social.icon]}
                    className="text-3xl text-white group-hover:text-bronze-400 transition-colors duration-300"
                  />
                  <span className="text-lg font-medium group-hover:text-bronze-300 transition-colors duration-300">
                    {social.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
