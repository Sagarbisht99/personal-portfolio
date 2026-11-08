import { heroConfig, skillComponents, socialLinks } from '@/config/Hero';
import { liveProjects } from '@/config/LiveProjects';
import { parseTemplate } from '@/lib/hero';
import { Link } from 'next-view-transitions';
import Image from 'next/image';
import React from 'react';

import Container from '../common/Container';
import Skill from '../common/Skill';
import Mail from '../svgs/Mail';
import Phone from '../svgs/Phone';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

export default function Hero() {
  const { name, title, avatar, skills, description } = heroConfig;
  const liveProjectCount = liveProjects.length;

  const renderDescription = () => {
    const parts = parseTemplate(description.template, skills);

    return parts.map((part) => {
      if (part.type === 'skill' && 'skill' in part && part.skill) {
        const SkillComponent =
          skillComponents[part.skill.component as keyof typeof skillComponents];
        return (
          <Skill key={part.key} name={part.skill.name} href={part.skill.href}>
            <SkillComponent />
          </Skill>
        );
      } else if (part.type === 'bold' && 'text' in part) {
        if (part.text.toLowerCase().includes('projects')) {
          return (
            <Link
              key={part.key}
              href="/live-projects"
              className="text-primary whitespace-pre-wrap font-bold underline-offset-4 hover:underline"
            >
              {`done ${liveProjectCount}+ projects`}
            </Link>
          );
        }
        return (
          <b key={part.key} className="text-primary whitespace-pre-wrap">
            {part.text}
          </b>
        );
      } else if (part.type === 'text' && 'text' in part) {
        return (
          <span key={part.key} className="whitespace-pre-wrap">
            {part.text}
          </span>
        );
      }
      return null;
    });
  };

  return (
    <Container className="mx-auto max-w-5xl">
      {/* Image */}
      <Image
        src={avatar}
        alt="hero"
        width={100}
        height={100}
        className="size-24 rounded-full bg-blue-300 dark:bg-yellow-300"
      />

      {/* Text Area */}
      <div className="mt-8 flex flex-col gap-2">
        <h1 className="text-4xl font-bold">
          Hi, I&apos;m {name} — <span className="text-secondary">{title}</span>
        </h1>

        <div className="mt-4 flex flex-wrap items-center gap-x-1.5 gap-y-2 text-base whitespace-pre-wrap text-neutral-500 md:text-lg">
          {renderDescription()}
        </div>
      </div>

      {/* Social Links */}
      <div className=" flex gap-2">
        {socialLinks.map((link) => {
          const className = 'text-secondary flex items-center gap-2';
          const icon = <span className="size-6">{link.icon}</span>;

          return (
            <Tooltip key={link.name} delayDuration={0}>
              <TooltipTrigger asChild>
                {link.href.startsWith('tel:') ||
                link.href.startsWith('mailto:') ? (
                  <a href={link.href} className={className}>
                    {icon}
                  </a>
                ) : (
                  <Link href={link.href} className={className}>
                    {icon}
                  </Link>
                )}
              </TooltipTrigger>
              <TooltipContent>
                <p>{link.name}</p>
              </TooltipContent>
            </Tooltip>
          );
        })}
      </div>

      {/* Contact Details */}
      <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-neutral-500 md:text-base">
        <a
          href="tel:+918287325773"
          className="hover:text-primary flex items-center gap-2 transition-colors"
        >
          <Phone className="size-4" />
          +91 82873 25773
        </a>
        <a
          href="mailto:sagarbishtz589@gmail.com"
          className="hover:text-primary flex items-center gap-2 transition-colors"
        >
          <Mail className="size-4" />
          sagarbishtz589@gmail.com
        </a>
      </div>
    </Container>
  );
}
