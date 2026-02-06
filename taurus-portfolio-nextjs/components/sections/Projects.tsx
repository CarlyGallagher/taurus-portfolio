import Image from 'next/image';
import { projects } from '@/constants/data';

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-6 bg-[#080505]" aria-labelledby="projects-heading">
      <div className="container mx-auto">
        <h1 id="projects-heading" className="text-4xl md:text-5xl text-white mb-12 text-center">
          My Projects
        </h1>

        {/* Projects Grid */}
        <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-bronze-800 rounded-lg overflow-hidden hover:bg-black hover:-translate-y-2 transition-all duration-300 shadow-lg"
              aria-label={`View ${project.name} project`}
            >
              {/* Project Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h2 className="text-xl font-semibold text-bronze-300 group-hover:text-white mb-2 transition-colors duration-300">
                  {project.name}
                </h2>
                <p className="text-bronze-200 group-hover:text-gray-200 text-sm transition-colors duration-300">
                  {project.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
