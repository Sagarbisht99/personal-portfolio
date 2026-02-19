/*
 * CUSTOMIZATION EXAMPLE
 *
 * Want to customize this portfolio for yourself? Here's how easy it is:
 *
 * 1. Update your personal info:
 *    name: "Your Name"
 *    title: "Your Professional Title"
 *    avatar: "/path/to/your/image.jpg"
 *
 * 2. Add your skills:
 *    skills: [
 *      { name: "Python", href: "https://python.org", component: "Python" }, // Note: You'd need to create Python component
 *      { name: "React", href: "https://react.dev", component: "ReactIcon" },
 *      { name: "Node.js", href: "https://nodejs.org", component: "NodeJs" },
 *    ]
 *
 * 3. Write your description using the template:
 *    template: "I'm a **passionate developer** who loves building apps with {skills:0} and {skills:1}. I specialize in **web development** and enjoy working with {skills:2}."
 *
 * 4. Update your social links:
 *    Just change the href values to your own social media profiles
 *
 * That's it! Your portfolio will automatically update with your information.
 */
import Github from '@/components/svgs/Github';
import LinkedIn from '@/components/svgs/LinkedIn';
import Mail from '@/components/svgs/Mail';
import Bun from '@/components/technologies/Bun';
import JavaScript from '@/components/technologies/JavaScript';
import MongoDB from '@/components/technologies/MongoDB';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Prisma from '@/components/technologies/Prisma';
import ReactIcon from '@/components/technologies/ReactIcon';
// Technology Components
import TailwindCss from '@/components/technologies/TailwindCss';
import TypeScript from '@/components/technologies/TypeScript';

// Component mapping for skills
export const skillComponents = {
  TypeScript: TypeScript,
  ReactIcon: ReactIcon,
  NextJs: NextJs,
  Bun: Bun,
  PostgreSQL: PostgreSQL,
  NodeJs: NodeJs,
  MongoDB: MongoDB,
  Prisma: Prisma,
  JavaScript: JavaScript,
  TailwindCss: TailwindCss,
};

export const heroConfig = {
  // Personal Information
  name: 'Sagar',
  title: 'Gen AI Frontend Engineer.', // A more powerful, modern title
  avatar: '/assets/logo.png',

  // Skills Configuration
  skills: [
    {
      name: 'Next.js 16',
      href: 'https://nextjs.org/',
      component: 'NextJs',
    },
    {
      name: 'React',
      href: 'https://react.dev/',
      component: 'ReactIcon',
    },
    {
      name: 'Tailwind CSS',
      href: 'https://tailwindcss.com/',
      component: 'TailwindCss',
    },
    {
      name: 'TypeScript', // Represents Cursor, v0, etc.
      href: 'https://cursor.com',
      component: 'TypeScript', 
    },
  ],

  // Description Configuration
  description: {
    template:
      "I build production-ready frontends **3x faster** than the average dev. By orchestrating {skills:0}, {skills:1}, {skills:2} and {skills:3} through an **AI-first workflow** , I bridge the gap between complex design and rapid deployment. While others are still boilerplate-coding, I'm already shipping.",
  },

  // Buttons Configuration
  
};

// Social Links Configuration
export const socialLinks = [

  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sagar-bisht-b13840316/',
    icon: <LinkedIn />,
  },
  {
    name: 'Github',
    href: 'https://github.com/sagarrytclick-a11y',
    icon: <Github />,
  },
  {
    name: 'Email',
    href: 'sagarbishtz589@gmail.com',
    icon: <Mail />,
  },
];