import Html from '@/components/technologies/Html';
import JavaScript from '@/components/technologies/JavaScript';
import JQuery from '@/components/technologies/JQuery';
import MongoDB from '@/components/technologies/MongoDB';
import NextJs from '@/components/technologies/NextJs';
import PHP from '@/components/technologies/PHP';
import ReactIcon from '@/components/technologies/ReactIcon';
import TailwindCss from '@/components/technologies/TailwindCss';
import TanStackQuery from '@/components/technologies/TanStackQuery';
import TypeScript from '@/components/technologies/TypeScript';
import WordPress from '@/components/technologies/WordPress';

export interface Technology {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export interface Experience {
  company: string;
  position: string;
  location: string;
  image: string;
  description: string[];
  startDate: string;
  endDate: string;
  website?: string;
  x?: string;
  linkedin?: string;
  github?: string;
  technologies: Technology[];
  isCurrent: boolean;
  isBlur?: boolean;
}

export const experiences: Experience[] = [
  {
    isCurrent: true,
    company: 'RytClick',
    position: 'Frontend Engineer',
    location: 'Noida (On-site)',
    image: '/company/rytclick.png',
    description: [
      'Architected a high-performance CRM infrastructure using Next.js and React Query, focusing on real-time data synchronization and complex state management.',
      'Implemented advanced data-fetching strategies with TanStack Query to handle large-scale MongoDB datasets, ensuring sub-second UI responsiveness.',
      'Developed modular, reusable UI systems designed to support dynamic, data-driven promotional campaign builders.',
      'Optimized frontend performance and Core Web Vitals, establishing the foundation for a scalable, enterprise-grade SaaS platform.',
    ],
    startDate: 'November 2025',
    endDate: 'Present',
    technologies: [
      { name: 'Next.js', href: 'https://nextjs.org/', icon: <NextJs /> },
      { name: 'TanStack Query', href: 'https://tanstack.com/query', icon: <TanStackQuery /> },
      { name: 'TypeScript', href: 'https://typescriptlang.org/', icon: <TypeScript /> },
      { name: 'MongoDB', href: 'https://www.mongodb.com/', icon: <MongoDB /> },
      { name: 'Tailwind CSS', href: 'https://tailwindcss.com/', icon: <TailwindCss /> },
    ],
    linkedin: 'https://www.linkedin.com/company/rytclick/posts/?feedView=all',
  },
  {
    isCurrent: false,
    company: 'Freelance',
    position: 'Fullstack Developer',
    location: 'Remote',
    image: '/company/freelance.png',
    description: [
      'Engineered high-conversion landing pages and interactive web experiences using Next.js and PHP, prioritizing performance and SEO.',
      'Designed and integrated custom MongoDB schemas to support dynamic content delivery for various client-facing applications.',
      'Implemented responsive design patterns and modern UI/UX principles to improve user retention and interaction rates.',
      'Successfully delivered end-to-end frontend solutions, managing the full development lifecycle from initial design to Vercel deployment.',
    ],
    startDate: 'May 2025',
    endDate: 'October 2025',
    technologies: [
      { name: 'Next.js', href: 'https://nextjs.org/', icon: <NextJs /> },
      { name: 'PHP', href: 'https://www.php.net/', icon: <PHP /> },
      { name: 'MongoDB', href: 'https://www.mongodb.com/', icon: <MongoDB /> },
      { name: 'React', href: 'https://react.dev/', icon: <ReactIcon /> },
    ],
    website: '#',
    linkedin: 'https://www.linkedin.com/in/sagar-bisht-b13840316/',
  },
  {
    isCurrent: false,
    company: 'ThePrint',
    position: 'Frontend Engineer Intern',
    location: 'New Delhi, India (On-site)',
    image: '/company/theprint.png',
    description: [
      'Maintained and optimized a high-traffic media platform, ensuring stability and performance for millions of monthly active users.',
      'Developed custom WordPress themes and specialized jQuery modules to enhance editorial workflows and reader engagement.',
      'Modernized legacy HTML/CSS structures to improve site accessibility and cross-browser compatibility.',
      'Collaborated with design and editorial teams to implement rapid UI updates and feature enhancements in a fast-paced newsroom environment.',
    ],
    startDate: 'January 2025',
    endDate: 'April 2025',
    technologies: [
      { name: 'JavaScript', href: 'https://js.org/', icon: <JavaScript /> },
      { name: 'jQuery', href: 'https://jquery.com/', icon: <JQuery /> },
      { name: 'WordPress', href: 'https://wordpress.org/', icon: <WordPress /> },
      { name: 'HTML5/CSS3', href: '#', icon: <Html /> },
    ],
    website: 'https://theprint.in/',
    linkedin: 'https://www.linkedin.com/company/theprint/posts/?feedView=all',
  },
];
