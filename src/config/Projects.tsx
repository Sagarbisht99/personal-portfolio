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
import CSS from '@/components/technologies/CSS';
import Html from '@/components/technologies/Html';
import JavaScript from '@/components/technologies/JavaScript';
import PHP from '@/components/technologies/PHP';

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
    title: 'SuperNova-AI',
    description:
      'AI Chat bot with health monitoring',
    image: '/project/supernova-ai.png',
    link: 'http://super-nova-ai-ruddy.vercel.app/',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Prisma', icon: <Prisma key="prisma" /> },
      { name: 'PostgreSQL', icon: <PostgreSQL key="postgresql" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
    ],
    github: 'https://github.com/sagarrytclick-a11y/SuperNova-AI',
    live: 'http://super-nova-ai-ruddy.vercel.app/',
    details: true,
    isWorking: true,
  },
  {
    title: 'VidyaVriddhi',
    description:
      'Education CRM Platform for students to find the best universities and courses abroad.',
    image: '/project/vidyavriddhi.png',
    link: 'https://vidya-vriddhi-three.vercel.app/',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Prisma', icon: <Prisma key="prisma" /> },
      { name: 'PostgreSQL', icon: <PostgreSQL key="postgresql" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
    ],
    github: 'https://github.com/sagarrytclick-a11y/vidya-vriddhi-replicated',
    live: 'https://vidya-vriddhi-three.vercel.app/',
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
  {
    title: 'Beer Lagunitas',
    description:
      'A platform for finding and reviewing Lagunitas beer',
    image: '/project/beer.png',
    link: 'https://beer-animation.vercel.app/',
    technologies: [
      { name: 'HTML', icon: <Html key="html" /> },
      { name: 'CSS', icon: <CSS key="css" /> },
      { name: 'JS', icon: <JavaScript key="js" /> },
    ],
    live: 'https://beer-lagunitas.vercel.app/',
    details: false,
    github: 'https://github.com/Sagarbisht99/beer-animation',
    isWorking: false, // Currently in development
  },
  {
    title: 'Future Mind Educare',
    description:
      'A Educational platform for finding and reviewing MBBS courses ',
    image: '/project/future-mind-educare.png',
    link: 'https://www.futuremindedu.in/',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
    ],
    live: 'https://www.futuremindedu.in/',
    details: true,
    github: 'https://github.com/sagarrytclick-a11y/FUTURE-MIND-EDUCARE',
    isWorking: true,
  },
   {
    title: 'Republic Exim',
    description:
      'A Client project for giving you get the Fresh Indian products at your doorstep',
    image: '/project/republic-exim.png',
    link: 'https://republicexim.com',
    technologies: [
      { name: 'php', icon: <PHP key="php" /> },],
    live: 'https://republicexim.com',
    details: true,
    github: 'https://github.com/sagarrytclick-a11y/REPUBLIC-EXIM',
    isWorking: true,
  },
  {
    title: 'Key2Global',
    description:
      'Get you get the best education consultants for your abroad education journey',
    image: '/project/key2global.png',
    link: 'https://www.key2education.com/',
    technologies: [
       { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'React', icon: <ReactIcon key="react" /> } , 
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      {name : 'Vercel', icon: <Vercel key="vercel" /> }
    ],
    live: 'https://key2education.com/',
    details: true,
    github: 'https://github.com/sagarrytclick-a11y/key2global',
    isWorking: true,
  },
  {
    title: 'Your Online MBA',
    description:
      'Your Online MBA is a platform for students to find the best online MBA programs and courses abroad.',
    image: '/project/your-online-mba.png',
    link: 'https://your-online-mba.vercel.app/',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'React', icon: <ReactIcon key="react" /> } , 
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      {name : 'Vercel', icon: <Vercel key="vercel" /> }
    ],
    live: 'https://your-online-mba.vercel.app/',
    details: true,
    github: 'https://github.com/sagarrytclick-a11y/your-online-mba',
    isWorking: true,
  },
  {
    title: 'JP Technology',
    description:
      'JP Technology is a Services for Website Development, Mobile App Development, Digital Marketing, and IT Solutions.',
    image: '/project/jp-technology.png',
    link: 'https://jp-tech.vercel.app/',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'React', icon: <ReactIcon key="react" /> } , 
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      {name : 'Vercel', icon: <Vercel key="vercel" /> } , 
    ],
    live: 'https://jp-tech.vercel.app/',
    details: true,
    github: 'https://github.com/sagarrytclick-a11y/JP-Tech',
    isWorking: true,
  },
  {
    title: 'Admission Campus',
    description:
      'Admission Campus is a platform for students to find and apply to the best universities and colleges abroad.',
    image: '/project/admission-campus.png',
    link: 'https://admissioncampus.in',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'React', icon: <ReactIcon key="react" /> } , 
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      {name : 'Vercel', icon: <Vercel key="vercel" /> } , 
    ],
    live: 'https://admissioncampus.in',
    details: true,
    github: 'https://github.com/sagarrytclick-a11y/admission-campus',
    isWorking: true,
  },
];