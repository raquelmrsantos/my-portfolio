'use client';

import BlurText from './BlurText';
import LogoLoop from './LogoLoop';
import Section from './Section';
import { ArrowDownRight } from 'lucide-react';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiGithub,
  SiGitlab,
  SiCypress,
} from 'react-icons/si';

const techLogos = [
  { node: <SiReact />, title: 'React', href: 'https://react.dev' },
  { node: <SiNextdotjs />, title: 'Next.js', href: 'https://nextjs.org' },
  {
    node: <SiTypescript />,
    title: 'TypeScript',
    href: 'https://www.typescriptlang.org',
  },
  {
    node: <SiTailwindcss />,
    title: 'Tailwind CSS',
    href: 'https://tailwindcss.com',
  },
  { node: <SiCypress />, title: 'Cypress', href: 'https://www.cypress.io' },
  { node: <SiGithub />, title: 'GitHub', href: 'https://github.com' },
  { node: <SiGitlab />, title: 'GitLab', href: 'https://gitlab.com' },
];

export default function Experience() {
  return (
    <Section className='py-20 md:py-28'>
      <div className='space-y-12'>
        <div>
          <BlurText
            text='Experience'
            delay={150}
            animateBy='words'
            direction='top'
            className='mb-8 uppercase text-7xl md:text-9xl font-bold font-sofia-sans-condensed'
          />
        </div>
        <div className='space-y-12 font-spline-sans-mono uppercase'>
          <div>
            <h3 className='text-2xl font-normal mb-1'>Amaris Consulting</h3>
            <p className='text-base font-light opacity-80 mb-1'>Frontend Developer</p>
            <p className='text-sm font-light opacity-70 mb-6 uppercase tracking-widest'>
              2026 - Present
            </p>

            <div className='space-y-6'>
              <div>
                <p className='font-light mb-4 leading-relaxed'>
                  Consulting for a client in the e-mobility sector, delivering
                  front-end solutions focused on scalable, maintainable
                  interfaces aligned with modern electric vehicle industry needs.
                </p>

                <p className='font-light mt-4'>
                  <ArrowDownRight className='inline text-gray-500' />{' '}
                  JavaScript, Angular, TypeScript, SCSS, Storybook,
                  Figma, Jira, Bitbucket
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className='text-2xl font-normal mb-1'>Present Technologies</h3>
            <p className='text-base font-light opacity-80 mb-1'>Junior Software Engineer</p>
            <p className='text-sm font-light opacity-70 mb-6 uppercase tracking-widest'>
              2023 - 2025
            </p>

            <div className='space-y-8'>
              {/* Client: FPS */}
              <div>
                <h4 className='text-sm font-normal opacity-60 mb-3 tracking-widest'>
                  Farfetch Platform Solutions (FPS)
                </h4>
                <p className='font-light mb-4 leading-relaxed'>
                  Front-end development for multiple high-end e-commerce
                  websites, delivering premium shopping experiences for luxury
                  brands:
                </p>
                <div className='grid grid-cols-2 md:grid-cols-3 gap-2 text-sm font-light opacity-80'>
                  <span>Reebok</span>
                  <span>Ferragamo</span>
                  <span>Violet Grey</span>
                  <span>JW Anderson</span>
                  <span>Stadium Goods</span>
                  <span>Mackintosh</span>
                  <span>Browns</span>
                  <span>N°21</span>
                  <span>Thom Browne</span>
                </div>
                <p className='font-light mt-4 leading-relaxed'>
                  Front-end development of a specialized internal tool, designed
                  for in-store sales assistants across the YNAP Group, enhancing
                  retail workflows and customer service.
                </p>

                <p className='font-light mt-4'>
                  <ArrowDownRight className='inline text-gray-500' />{' '}
                  JavaScript, React, TypeScript, Cypress, Jest, Testing Library,
                  Postman, Oracle Responsys (email integration), SEO
                  optimization, Storybook, Figma, GitLab, Jira, Jenkins
                </p>
              </div>

              <div>
                <h4 className='text-sm font-normal opacity-60 mb-3 tracking-widest'>
                  Critical TechWorks (CTW)
                </h4>
                <p className='font-light leading-relaxed'>
                  Front-end development for internal platforms focused on
                  improving employee workflows and operational efficiency.
                </p>

                <p className='font-light mt-4'>
                  <ArrowDownRight className='inline text-gray-500' />{' '}
                  JavaScript, Angular, TypeScript, Jest, Figma, Jira, Azure
                  DevOps, Jenkins
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ height: '200px', position: 'relative', overflow: 'hidden' }}
        >
          <LogoLoop
            logos={techLogos}
            speed={120}
            direction='left'
            logoHeight={48}
            gap={40}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor='#ffffff'
            ariaLabel='Tech skills'
          />
        </div>
      </div>
    </Section>
  );
}
