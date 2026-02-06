'use client';

import TabSystem from '@/components/features/TabSystem';
import { aboutBio } from '@/constants/data';
import { useTypewriter } from '@/hooks/useTypewriter';

export default function About() {
  const typedText = useTypewriter({
    text: aboutBio,
    speed: 30,
    delay: 300,
  });

  return (
    <section id="about" className="py-16 px-6 bg-[#040303]" aria-labelledby="about-heading">
      <div className="container mx-auto max-w-4xl">
        <h1 id="about-heading" className="text-4xl md:text-5xl text-white mb-6">What Am I About?</h1>
        <p className="text-white text-base md:text-lg leading-relaxed whitespace-pre-line mb-8">
          {typedText}
          <span className="animate-pulse">|</span>
        </p>

        {/* Tab System for Skills/Experience/Education */}
        <TabSystem />
      </div>
    </section>
  );
}
