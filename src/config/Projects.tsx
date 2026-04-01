import MongoDB from '@/components/technologies/MongoDB';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Prisma from '@/components/technologies/Prisma';
import ReactIcon from '@/components/technologies/ReactIcon';
import Shadcn from '@/components/technologies/Shadcn';
import SocketIo from '@/components/technologies/SocketIo';
import TailwindCss from '@/components/technologies/TailwindCss';
import TypeScript from '@/components/technologies/TypeScript';
import Vercel from '@/components/technologies/Vercel';
import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    title: 'Education Times Abroad',
    description:
      'This is a platform for students to find the best universities and courses abroad.',
    image: '/project/education-times-abroad.png',
    link: 'https://www.educationtimesabroad.com/',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> }, 
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Vercel', icon: <Vercel key="vercel" /> },
      { name: 'MongoDB', icon: <MongoDB key="mongodb" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'shadcn/ui', icon: <Shadcn key="shadcn" /> },
    ],
    github: 'https://github.com/laravelrytclick-gif/times-abroad',
    live: 'https://www.educationtimesabroad.com/',
    details: true,
    isWorking: true,
  },
  {
    title: 'fizzi',
    description:
      'a Energy drink brand website which showcases their products and services',
    image: '/project/fizzi.png',
    link: 'https://fizzi-animinated-project.vercel.app/',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Vercel', icon: <Vercel key="vercel" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
    ],
    github: 'https://github.com/Sagarbisht99/fizzi-animinated-project',
    live: 'https://fizzi-animinated-project.vercel.app/',
    details: true,
    isWorking: true,
  },
  {
    title: 'My Mba admission',
    description:
      'A platform for students to find the best MBA programs and courses abroad.',
    image: '/project/mymbaadmission.png',
    link: 'https://www.mymbaadmission.com/',
    technologies: [
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
      { name: 'MongoDB', icon: <MongoDB key="mongodb" /> },
      { name: 'Vercel', icon: <Vercel key="vercel" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'shadcn/ui', icon: <Shadcn key="shadcn" /> },
      { name: 'Socket.io', icon: <SocketIo key="socketio" /> },
    ],
    github: 'https://github.com/sagarrytclick-a11y/my-mba-admission',
    live: 'https://www.mymbaadmission.com/',
    details: true,
    isWorking: true,
  },
  {
    title: 'Encrypto Hub',
    description:
      'All in one platform for managing our passwords , notes and docs alternative to google Drive',
    image: '/project/encryptohub.png',
    link: 'https://encrypto-hub.vercel.app/',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Prisma', icon: <Prisma key="prisma" /> },
      { name: 'PostgreSQL', icon: <PostgreSQL key="postgresql" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'Socket.io', icon: <SocketIo key="socketio" /> },
    ],
    live: 'https://encrypto-hub.vercel.app/',
    details: true,
    github: 'https://github.com/Sagarbisht99/EncryptoHub',
    isWorking: true, // Currently in development
  },
  {
    title: 'AI Landing Page',
    description:  
      'AI Landing Page for a company',
    image: '/project/ai-landing-page.png',
    link: 'https://ai-landing-page-seven-theta.vercel.app/',
    technologies: [
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'Vercel', icon: <Vercel key="vercel" /> },
    ],
    live: 'https://ai-landing-page-seven-theta.vercel.app/',
    details: false,
    github: 'https://github.com/Sagarbisht99/AI-Landing-Page',
    isWorking: false, // Currently in development
  },
];
