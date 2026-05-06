/**
 * Portfolio content data
 * All text content, links, and configuration for the portfolio
 */

export interface Skill {
  name: string;
  icon: string;
}

export interface Experience {
  company: string;
  url: string;
  image: string;
  alt: string;
}

export interface Education {
  year: string;
  degree: string;
}

export interface Project {
  name: string;
  url: string;
  description: string;
  image: string;
  alt: string;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface ContactInfo {
  type: 'phone' | 'email';
  value: string;
  icon: string;
}

// Skills data for the About section tabs
export const skills: Skill[] = [
  {
    name: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
  },
  {
    name: 'React',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
  },
  {
    name: 'Next.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
  },
  {
    name: 'CSS3',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
  },
  {
    name: 'HTML5',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
  },
  {
    name: 'Node.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
  },
  {
    name: 'TypeScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
  },
  {
    name: 'Bootstrap',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg',
  },
  {
    name: 'Git',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
  },
  {
    name: 'GitHub',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
  },
  {
    name: 'PostgreSQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
  },
  {
    name: 'MySQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
  },
  {
    name: 'MongoDB',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
  },
  {
    name: 'Supabase',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg',
  },
  {
    name: 'Heroku',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/heroku/heroku-plain-wordmark.svg',
  },
  {
    name: 'Netlify',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original.svg',
  },
  {
    name: 'Vercel',
    icon: '/images/vercel.svg',
  },
  {
    name: 'npm',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original.svg',
  },
  {
    name: 'Insomnia',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/insomnia/insomnia-original.svg',
  },
  {
    name: 'Resend',
    icon: '/images/resend.svg',
  },
];

// Experience data for the About section tabs
export const experience: Experience[] = [
  {
    company: 'Maganda Management',
    url: 'https://www.magandamanagement.com/',
    image: '/images/Maganda.png',
    alt: 'Maganda landing page',
  },
];

// Education data for the About section tabs
export const education: Education[] = [
  {
    year: '2016',
    degree: 'Communications AA from Solano Community College',
  },
  {
    year: '2023',
    degree: 'Full Stack Web Development Certificate from UC Riverside',
  },
];

// Projects data for the About section tabs
export const projects: Project[] = [
  {
    name: 'Saint Misty',
    url: 'https://www.saintmisty.com/',
    description: 'A creative portfolio website showcasing artistic work',
    image: '/images/saint-misty.png',
    alt: 'Saint Misty website screenshot',
  },
  {
    name: 'Favorite Movies App',
    url: 'https://favoritemoviesreact.netlify.app/',
    description: 'A React application for browsing and managing favorite movies',
    image: '/images/favorite-movies.png',
    alt: 'Favorite Movies React app screenshot',
  },
  {
    name: 'Raspberry Management Tour App',
    url: 'https://www.tour.raspberrymanagement.com/',
    description: 'A tour management and booking application',
    image: '/images/tour-app.png',
    alt: 'Tour App screenshot',
  },
];

// Services data for the Services section
export const services: Service[] = [
  {
    icon: 'fa-computer',
    title: 'API Development and Integration',
    description: 'Designing RESTful APIs and integrating third-party services (Stripe, Google Maps, etc.)',
  },
  {
    icon: 'fa-database',
    title: 'Database Design and Management',
    description: 'Setting up and managing SQL (MySQL) and NoSQL (MongoDB) databases.',
  },
  {
    icon: 'fa-users',
    title: 'UI/UX Design',
    description:
      'Create interactive UIs with frameworks like React and Vue while using server-side logic like Node.js, Express, Python, etc.',
  },
];

// Social links for the Socials dropdown
export const socialLinks: SocialLink[] = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/Carly-gallagher-software-engineer/',
    icon: 'fa-linkedin',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/CarlyGallagher',
    icon: 'fa-square-github',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/carlyjgallagher/',
    icon: 'fa-instagram',
  },
];

// Contact information for the Contact dropdown
export const contactInfo: ContactInfo[] = [
  {
    type: 'phone',
    value: '(707)-880-9471',
    icon: 'fa-phone',
  },
  {
    type: 'email',
    value: 'carlygallagher22@gmail.com',
    icon: 'fa-envelope',
  },
];

// About section bio text
export const aboutBio = `I'm a full stack web developer creating dynamic and responsive web applications.
I have a strong foundation in both front-end and back-end development while pursuing knowledge on other technologies.

My goal is to create user-friendly and visually appealing websites that provide a seamless experience for users.

Outside of work you can catch me walking my dog, discussing film, and being a below average gym rat.`;

// Resume PDF path
export const resumePath = '/images/Resume.pdf';

// Metadata for SEO
export const siteMetadata = {
  title: 'Carly Gallagher - Full Stack Developer',
  description:
    'Full stack web developer creating dynamic and responsive web applications. Skilled in React, JavaScript, Node.js, and more.',
  author: 'Carly Gallagher',
  keywords: ['Full Stack Developer', 'React', 'JavaScript', 'Web Developer', 'Portfolio'],
};

// Header section text
export const headerText = {
  title: 'Carly Gallagher',
  subtitle: 'Full Stack Developer',
};

// Footer text
export const footerText = {
  brand: 'A Taurus Project',
  copyright: 'copyright 2025',
  backToTop: 'Back to the top ∆',
};
