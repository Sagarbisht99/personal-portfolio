import Container from '@/components/common/Container';
import { LiveProjectList } from '@/components/live-projects/LiveProjectList';
import { liveProjects } from '@/config/LiveProjects';
import { generateMetadata as getMetadata } from '@/config/Meta';
import { Metadata } from 'next';
import { Robots } from 'next/dist/lib/metadata/types/metadata-types';

export const metadata: Metadata = {
  ...getMetadata('/live-projects'),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  } as Robots,
};

export default function LiveProjectsPage() {
  return (
    <Container className="py-16">
      <div className="space-y-6">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
            Live Projects
            {liveProjects.length > 0 && (
              <span className="text-muted-foreground ml-2 text-lg font-normal lg:text-xl">
                ({liveProjects.length}{' '}
                {liveProjects.length === 1 ? 'project' : 'projects'})
              </span>
            )}
          </h1>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Websites and landing pages currently live in production.
          </p>
        </div>

        <LiveProjectList projects={liveProjects} />
      </div>
    </Container>
  );
}
