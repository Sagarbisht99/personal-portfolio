export type LiveProjectType = 'Landing Page' | 'CRM' | 'AI Website';

export interface LiveProject {
  domain: string;
  url: string;
  type?: LiveProjectType;
}

export const liveProjects: LiveProject[] = [
  { domain: 'alphaworldeducation.com', url: 'https://alphaworldeducation.com' },
  {
    domain: 'educationtimesabroad.com',
    url: 'https://educationtimesabroad.com',
  },
  { domain: 'admissioncampus.in', url: 'https://admissioncampus.in' },
  { domain: 'mymbaadmission.com', url: 'https://mymbaadmission.com' },
  { domain: 'aspireedification.com', url: 'https://aspireedification.com' },
  {
    domain: 'coraledu.in/mba',
    url: 'https://coraledu.in/mba',
    type: 'Landing Page',
  },
  { domain: 'vidyavriddhi.com', url: 'https://vidyavriddhi.com' },
  {
    domain: 'btechinbangalore.in',
    url: 'https://btechinbangalore.in',
    type: 'Landing Page',
  },
  {
    domain: 'diamondmatrimonialservices.com',
    url: 'https://diamondmatrimonialservices.com',
    type: 'CRM',
  },
  { domain: 'zabin.in', url: 'https://zabin.in' },
  {
    domain: 'mbaenroll.com/iibs-admission',
    url: 'https://mbaenroll.com/iibs-admission',
    type: 'Landing Page',
  },
  {
    domain: 'fizzi-animinated-project.vercel.app',
    url: 'https://fizzi-animinated-project.vercel.app',
  },
  {
    domain: 'mbaenroll.com/ibi',
    url: 'https://mbaenroll.com/ibi/',
    type: 'Landing Page',
  },
  {
    domain: 'beer-animation.vercel.app',
    url: 'https://beer-animation.vercel.app',
  },
  {
    domain: 'ai-landing-page-seven-theta.vercel.app',
    url: 'https://ai-landing-page-seven-theta.vercel.app',
  },
  {
    domain: 'mbaenroll.com/study-abroad',
    url: 'https://mbaenroll.com/study-abroad',
    type: 'Landing Page',
  },
  {
    domain: 'mbaenroll.com/mbbs-abroad',
    url: 'https://mbaenroll.com/mbbs-abroad',
    type: 'Landing Page',
  },
  {
    domain: 'mbaenroll.com/mba',
    url: 'https://mbaenroll.com/mba',
    type: 'Landing Page',
  },
  {
    domain: 'mbaenroll.com/firebird',
    url: 'https://mbaenroll.com/firebird',
    type: 'Landing Page',
  },
  { domain: 'key2education.com', url: 'https://www.key2education.com' },
  { domain: 'futuremindedu.in', url: 'https://www.futuremindedu.in/' },
  { domain: 'jp-tech.vercel.app', url: 'https://jp-tech.vercel.app' },
  { domain: 'theprint.in', url: 'https://theprint.in' },
  {
    domain: 'super-nova-ai-ruddy.vercel.app',
    url: 'https://super-nova-ai-ruddy.vercel.app',
    type: 'AI Website',
  },
  {
    domain: 'abroadstudy4u.com/mbbs-in-russia',
    url: 'https://abroadstudy4u.com/mbbs-in-russia/',
    type: 'Landing Page',
  },
  {
    domain: 'abroadstudy4u.com/mbbs-in-india',
    url: 'https://abroadstudy4u.com/mbbs-in-india/',
    type: 'Landing Page',
  },
  {
    domain: 'abroadstudy4u.com/mbbs-in-georgia',
    url: 'https://abroadstudy4u.com/mbbs-in-georgia',
    type: 'Landing Page',
  },
  {
    domain: 'abroadstudy4u.com/mbbs-in-kyrgyzstan',
    url: 'https://abroadstudy4u.com/mbbs-in-kyrgyzstan',
    type: 'Landing Page',
  },
  {
    domain: 'mbbsindianeet.com',
    url: 'https://mbbsindianeet.com/',
    type: 'Landing Page',
  },
  { domain: 'youronlinemba.in', url: 'https://youronlinemba.in' },
  { domain: 'summitglobal.co.in', url: 'https://www.summitglobal.co.in' },
  {
    domain: 'summitfoundationglobal.com',
    url: 'https://www.summitfoundationglobal.com/',
  },
  {
    domain: 'https://coffee-on-bilingual-website.vercel.app/',
    url: 'https://coffee-on-bilingual-website.vercel.app/',
  }
];
