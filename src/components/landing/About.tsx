import { about, mySkills } from '@/config/About';
import Image from 'next/image';
import React from 'react';

import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

export default function About() {
  return (
    <Container className="mt-20">
      <SectionHeading subHeading="About" heading="Me" />

      <div className="mt-8 flex flex-col gap-4 md:flex-row">
        <Image
          src="/assets/logo.png"
          alt="About"
          width={100}
          height={100}
          className="border-secondary size-60 rounded-md border-2 bg-blue-300 dark:bg-yellow-300"
        />
        <div className="mt-4">
          <h3 className="text-2xl font-bold">{about.name}</h3>
          <p className="text-secondary mt-4">{about.description}</p>
        </div>
      </div>

      <div className="mt-8">
        <p className="text-secondary font-bold">Education</p>
        <div className="mt-2 rounded-lg border border-gray-200 p-4 dark:border-gray-700">
          <h4 className="text-lg font-semibold">{about.education.degree}</h4>
          <p className="text-secondary">{about.education.institution}</p>
          <div className="mt-2 flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span>{about.education.period}</span>
            <span>{about.education.location}</span>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <p className="text-secondary font-bold">Skills</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {mySkills.map((skill) => (
            <Tooltip key={skill.key}>
              <TooltipTrigger asChild>
                <div className="size-6 hover:cursor-pointer">{skill}</div>
              </TooltipTrigger>
              <TooltipContent>{skill.key}</TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>
    </Container>
  );
}
