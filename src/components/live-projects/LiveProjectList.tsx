import { type LiveProject } from '@/config/LiveProjects';
import { cn } from '@/lib/utils';
import { Link } from 'next-view-transitions';
import React from 'react';

import ArrowUpRight from '../svgs/ArrowUpRight';
import { Badge } from '../ui/badge';

interface LiveProjectListProps {
  projects: LiveProject[];
}

export function LiveProjectList({ projects }: LiveProjectListProps) {
  const uniqueProjects = projects.filter(
    (project, index, list) =>
      list.findIndex((item) => item.url === project.url) === index,
  );

  if (uniqueProjects.length === 0) {
    return (
      <div className="py-8 text-center">
        <p className="text-muted-foreground">No live projects found.</p>
      </div>
    );
  }

  return (
    <div className="grid gap-2 sm:grid-cols-2">
      {uniqueProjects.map((project) => (
        <Link
          key={project.url}
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            'group flex items-center justify-between gap-2 rounded-lg border bg-card px-3 py-2 shadow-sm transition-colors',
            'hover:border-primary/40 hover:bg-accent/40',
          )}
        >
          <div className="min-w-0 space-y-0.5">
            <p className="truncate text-sm font-medium group-hover:text-primary">
              {project.domain}
            </p>
            {project.type && (
              <Badge variant="secondary" className="text-[10px]">
                {project.type}
              </Badge>
            )}
          </div>
          <ArrowUpRight className="size-3.5 shrink-0 opacity-50 transition-opacity group-hover:opacity-100 dark:fill-white" />
        </Link>
      ))}
    </div>
  );
}
