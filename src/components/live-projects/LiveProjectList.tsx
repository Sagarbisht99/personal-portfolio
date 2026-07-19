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
    <div className="grid gap-3 sm:grid-cols-2">
      {uniqueProjects.map((project) => (
        <Link
          key={project.url}
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            'group flex items-center justify-between gap-3 rounded-xl border bg-card px-4 py-3 shadow-sm transition-colors',
            'hover:border-primary/40 hover:bg-accent/40',
          )}
        >
          <div className="min-w-0 space-y-1">
            <p className="truncate font-medium group-hover:text-primary">
              {project.domain}
            </p>
            {project.type && (
              <Badge variant="secondary" className="text-[11px]">
                {project.type}
              </Badge>
            )}
          </div>
          <ArrowUpRight className="size-4 shrink-0 opacity-50 transition-opacity group-hover:opacity-100 dark:fill-white" />
        </Link>
      ))}
    </div>
  );
}
