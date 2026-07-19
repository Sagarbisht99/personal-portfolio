import Html from '@/components/technologies/Html';
import JavaScript from '@/components/technologies/JavaScript';
import JQuery from '@/components/technologies/JQuery';
import MongoDB from '@/components/technologies/MongoDB';
import MySQL from '@/components/technologies/MySQL';
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
    company: 'CSS Founder',
    position: 'Full Stack Developer',
    location: 'Noida (On-site)',
    image: '/company/cssfounder.png',
    website: 'https://www.cssfounder.com/',
    description: [
      'Architected a high-performance CRM infrastructure using Next.js and React Query, focusing on real-time data synchronization and complex state management.',
      'Implemented advanced data-fetching strategies with TanStack Query to handle large-scale MongoDB datasets, ensuring sub-second UI responsiveness.',
      'Developed modular, reusable UI systems designed to support dynamic, data-driven promotional campaign builders.',
      'Optimized frontend performance and Core Web Vitals, establishing the foundation for a scalable, enterprise-grade SaaS platform.',
    ],
    startDate: 'Jul 2026',
    endDate: 'Present',
    technologies: [
      { name: 'Next.js', href: 'https://nextjs.org/', icon: <NextJs /> },
      { name: 'TypeScript', href: 'https://typescriptlang.org/', icon: <TypeScript /> },
      { name: 'Tailwind CSS', href: 'https://tailwindcss.com/', icon: <TailwindCss /> },
      { name: 'JavaScript', href: 'https://www.javascript.com/', icon: <JavaScript /> },
    ],
    linkedin: 'https://www.linkedin.com/company/cssfounder.com/',
  } , 
  {
    isCurrent: false,
    company: 'Vidya Vridhi',
    position: 'Full Stack Developer',
    location: 'Noida (On-site)',
    image: '/company/vidyavriddhi.png',
    website: 'https://vidyavridhi.com',
    description: [
      'Architected a high-performance CRM infrastructure using Next.js and React Query, focusing on real-time data synchronization and complex state management.',
      'Implemented advanced data-fetching strategies with TanStack Query to handle large-scale MongoDB datasets, ensuring sub-second UI responsiveness.',
      'Developed modular, reusable UI systems designed to support dynamic, data-driven promotional campaign builders.',
      'Optimized frontend performance and Core Web Vitals, establishing the foundation for a scalable, enterprise-grade SaaS platform.',
    ],
    startDate: 'Nov 2025',
    endDate: 'Jul 2026',
    technologies: [
      { name: 'Next.js', href: 'https://nextjs.org/', icon: <NextJs /> },
      { name: 'TanStack Query', href: 'https://tanstack.com/query', icon: <TanStackQuery /> },
      { name: 'TypeScript', href: 'https://typescriptlang.org/', icon: <TypeScript /> },
      { name: 'MongoDB', href: 'https://www.mongodb.com/', icon: <MongoDB /> },
      { name: 'Tailwind CSS', href: 'https://tailwindcss.com/', icon: <TailwindCss /> },
    ],
    linkedin: 'https://in.linkedin.com/company/vidya-vriddhi',
  } , 
  {
    isCurrent: false,
    company: 'FreeLancer',
    position: 'Full Stack Developer',
    location: 'Remote',
    image: '/company/freelance.png',
    website: 'https://upwork.com',
    description: [
      'Implemented a robust content management system (CMS) for the Freelance website, enabling easy management of website content.',
      'Integrated a user-friendly dashboard for content editors to update and publish content on the website.',
      'Implemented a feature to track and analyze user engagement metrics, such as page views, click-through rates, and user behavior patterns.',
    ],
    startDate: 'Apr 2024',
    endDate: 'Nov 2024',
    technologies: [
      { name: 'WordPress', href: 'https://wordpress.com/', icon: <WordPress /> },
      { name: 'MySQL', href: 'https://www.mysql.com/', icon: <MySQL /> },
      { name: 'PHP', href: 'https://php.php.net/', icon: <PHP /> },
    ],
    linkedin: 'https://in.linkedin.com/company/upwork',
  } , 
{
    isCurrent: false,
    company: 'ThePrint',
    position: 'Frontend Developer',
    location: 'Delhi (On-site)',
    image: '/company/theprint.png',
    website: 'https://theprint.in',
    description: [
      'Implemented a robust content management system (CMS) for the ThePrint website, enabling easy management of website content.',
      'Integrated a user-friendly dashboard for content editors to update and publish content on the website.',
      'Implemented a feature to track and analyze user engagement metrics, such as page views, click-through rates, and user behavior patterns.',
    ],
    startDate: 'Jan 2024',
    endDate: 'Apr 2024',
    technologies: [
      { name: 'WordPress', href: 'https://wordpress.com/', icon: <WordPress /> },
      { name: 'MySQL', href: 'https://www.mysql.com/', icon: <MySQL /> },
      { name: 'PHP', href: 'https://php.php.net/', icon: <PHP /> },
    ],
    linkedin: 'https://in.linkedin.com/company/theprintmedia',
  } , 
];
