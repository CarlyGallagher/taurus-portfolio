'use client';

import { useState } from 'react';
import Image from 'next/image';
import { skills, experience, education, projects } from '@/constants/data';

type TabType = 'skills' | 'experience' | 'education' | 'projects';

export default function TabSystem() {
  const [activeTab, setActiveTab] = useState<TabType>('projects');

  const tabs: { id: TabType; label: string }[] = [
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
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
                  width={64}
                  height={64}
                  className={`w-16 h-16 ${skill.name === 'GitHub' || skill.name === 'Next.js' ? 'invert' : ''}`}
                  style={{ width: 'auto', height: 'auto' }}
                />
                <span className="text-white text-sm text-center">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab Content - Experience */}
      {activeTab === 'experience' && (
        <div
          className="tab-contents"
          role="tabpanel"
          id="experience-panel"
          aria-labelledby="experience-tab"
        >
          <ul className="space-y-6">
            {experience.map((exp, index) => (
              <li key={index}>
                <span className="company-name text-bronze-300 font-semibold text-lg block mb-3">
                  {exp.company}
                </span>
                <a
                  href={exp.url}
                  className="experience block hover:scale-105 transition-transform duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={exp.image}
                    alt={exp.alt}
                    width={800}
                    height={400}
                    className="w-full md:w-3/5 rounded-lg shadow-lg"
                  />
                </a>
              </li>
            ))}
          </ul>
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

      {/* Tab Content - Projects */}
      {activeTab === 'projects' && (
        <div
          className="tab-contents"
          role="tabpanel"
          id="projects-panel"
          aria-labelledby="projects-tab"
        >
          <ul className="space-y-6">
            {projects.map((project, index) => (
              <li key={index}>
                <span className="text-bronze-300 font-semibold text-lg block mb-3">
                  {project.name}
                </span>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <Image
                    src={project.image}
                    alt={project.alt}
                    width={800}
                    height={400}
                    className="w-full md:w-3/5 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
