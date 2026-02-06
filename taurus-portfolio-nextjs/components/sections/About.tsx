import Image from 'next/image';
import TabSystem from '@/components/features/TabSystem';
import { aboutBio } from '@/constants/data';

export default function About() {
  return (
    <section id="about" className="py-16 px-6 bg-[#040303]" aria-labelledby="about-heading">
      <div className="container mx-auto">
        <div className="row flex flex-col lg:flex-row gap-12 items-start">
          {/* Profile Image Column */}
          <div className="aboutMe-col-1 w-full lg:w-1/2">
            <Image
              src="/images/software-developer.png"
              alt="Carly Gallagher"
              width={800}
              height={800}
              className="w-full h-auto rounded-lg shadow-xl"
              priority
            />
          </div>

          {/* About Text Column */}
          <div className="aboutMe-col-2 w-full lg:w-1/2">
            <h1 id="about-heading" className="text-4xl md:text-5xl text-white mb-6">What Am I About?</h1>
            <p className="text-white text-base md:text-lg leading-relaxed whitespace-pre-line mb-8">
              {aboutBio}
            </p>

            {/* Tab System for Skills/Experience/Education */}
            <TabSystem />
          </div>
        </div>
      </div>
    </section>
  );
}
