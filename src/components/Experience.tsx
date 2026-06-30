'use client';

import BlurText from './BlurText';
import LogoLoop from './LogoLoop';
import ScrambledText from './ScrambledText';
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
  SiAngular,
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
  { node: <SiAngular />, title: 'Angular', href: 'https://angular.dev' },
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
                <ScrambledText
                  className='font-light mb-4 leading-relaxed'
                  radius={60}
                  duration={1.2}
                  speed={0.5}
                  scrambleChars='.:'
                >
                  Consulting for a client in the e-mobility sector, delivering
                  front-end solutions focused on scalable, maintainable
                  interfaces aligned with modern electric vehicle industry needs.
                </ScrambledText>

                <div className='font-light mt-4 flex items-start gap-1'>
                  <ArrowDownRight className='min-w-6 text-gray-500 inline mt-0.5' />
                  <ScrambledText
                    radius={60}
                    duration={1.2}
                    speed={0.5}
                    scrambleChars='.:'
                  >
                    JavaScript, Angular, TypeScript, SCSS, Storybook,
                    Figma, Jira, Bitbucket
                  </ScrambledText>
                </div>
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
                <ScrambledText
                  className='font-light mb-4 leading-relaxed'
                  radius={60}
                  duration={1.2}
                  speed={0.5}
                  scrambleChars='.:'
                >
                  Front-end development for multiple high-end e-commerce
                  websites, delivering premium shopping experiences for luxury
                  brands:
                </ScrambledText>
                <div className='grid grid-cols-2 md:grid-cols-3 gap-2 text-sm font-light opacity-80'>
                  <ScrambledText radius={60} duration={1.2} speed={0.5} scrambleChars='.:'>Reebok</ScrambledText>
                  <ScrambledText radius={60} duration={1.2} speed={0.5} scrambleChars='.:'>Ferragamo</ScrambledText>
                  <ScrambledText radius={60} duration={1.2} speed={0.5} scrambleChars='.:'>Violet Grey</ScrambledText>
                  <ScrambledText radius={60} duration={1.2} speed={0.5} scrambleChars='.:'>JW Anderson</ScrambledText>
                  <ScrambledText radius={60} duration={1.2} speed={0.5} scrambleChars='.:'>Stadium Goods</ScrambledText>
                  <ScrambledText radius={60} duration={1.2} speed={0.5} scrambleChars='.:'>Mackintosh</ScrambledText>
                  <ScrambledText radius={60} duration={1.2} speed={0.5} scrambleChars='.:'>Browns</ScrambledText>
                  <ScrambledText radius={60} duration={1.2} speed={0.5} scrambleChars='.:'>N°21</ScrambledText>
                  <ScrambledText radius={60} duration={1.2} speed={0.5} scrambleChars='.:'>Thom Browne</ScrambledText>
                </div>
                <ScrambledText
                  className='font-light mt-4 leading-relaxed'
                  radius={60}
                  duration={1.2}
                  speed={0.5}
                  scrambleChars='.:'
                >
                  Front-end development of a specialized internal tool, designed
                  for in-store sales assistants across the YNAP Group, enhancing
                  retail workflows and customer service.
                </ScrambledText>

                <div className='font-light mt-4 flex items-start gap-1'>
                  <ArrowDownRight className='min-w-6 text-gray-500 inline mt-0.5' />
                  <ScrambledText
                    radius={60}
                    duration={1.2}
                    speed={0.5}
                    scrambleChars='.:'
                  >
                    JavaScript, React, TypeScript, Cypress, Jest, Testing Library,
                    Postman, Oracle Responsys (email integration), SEO
                    optimization, Storybook, Figma, GitLab, Jira, Jenkins
                  </ScrambledText>
                </div>
              </div>

              <div>
                <h4 className='text-sm font-normal opacity-60 mb-3 tracking-widest'>
                  Critical TechWorks (CTW)
                </h4>
                <ScrambledText
                  className='font-light leading-relaxed'
                  radius={60}
                  duration={1.2}
                  speed={0.5}
                  scrambleChars='.:'
                >
                  Front-end development for internal platforms focused on
                  improving employee workflows and operational efficiency.
                </ScrambledText>

                <div className='font-light mt-4 flex items-start gap-1'>
                  <ArrowDownRight className='min-w-6 text-gray-500 inline mt-0.5' />
                  <ScrambledText
                    radius={60}
                    duration={1.2}
                    speed={0.5}
                    scrambleChars='.:'
                  >
                    JavaScript, Angular, TypeScript, Jest, Figma, Jira, Azure
                    DevOps, Jenkins
                  </ScrambledText>
                </div>
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
