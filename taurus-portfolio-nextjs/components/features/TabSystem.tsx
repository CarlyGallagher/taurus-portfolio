'use client';

import { useState } from 'react';
import Image from 'next/image';
import { skills, education } from '@/constants/data';

type TabType = 'skills' | 'education';

export default function TabSystem() {
  const [activeTab, setActiveTab] = useState<TabType>('skills');

  const tabs: { id: TabType; label: string }[] = [
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
  ];

  return (
    <div className="mt-8">
      {/* Tab Buttons */}
      <div
        className="tab-titles flex flex-col md:flex-row gap-4 md:gap-8 mb-6"
        role="tablist"
        aria-label="About section tabs"
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={activeTab === tab.id}
            aria-controls={`${tab.id}-panel`}
            id={`${tab.id}-tab`}
            onClick={() => setActiveTab(tab.id)}
            tabIndex={activeTab === tab.id ? 0 : -1}
            className={`tab-link text-xl md:text-2xl font-medium relative transition-colors duration-300 text-left md:text-center ${
              activeTab === tab.id
                ? 'text-bronze-300 hover-underline tab-underline-active'
                : 'text-white hover-underline'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content - Skills */}
      {activeTab === 'skills' && (
        <div
          className="tab-contents"
          role="tabpanel"
          id="skills-panel"
          aria-labelledby="skills-tab"
        >
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-bronze-800/30 transition-colors duration-300"
              >
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  width={34}
                  height={34}
                  className={`w-[34px] h-[34px] ${skill.name === 'GitHub' || skill.name === 'Next.js' || skill.name === 'Resend' ? 'invert' : ''}`}
                  style={{ width: '50%', height: 'auto' }}
                />
                <span className="text-white text-sm text-center">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab Content - Education */}
      {activeTab === 'education' && (
        <div
          className="tab-contents"
          role="tabpanel"
          id="education-panel"
          aria-labelledby="education-tab"
        >
          <ul className="space-y-4">
            {education.map((edu, index) => (
              <li key={index} className="text-white">
                <span className="text-bronze-300 font-semibold text-lg">
                  {edu.year}
                </span>
                <br />
                {edu.degree}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
