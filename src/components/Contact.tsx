'use client';

import AnimatedContactText from './AnimatedContactText';
import BlurText from './BlurText';
import ScrambledText from './ScrambledText';
import { DownloadIcon } from './ui/DownloadIcon';
import { GithubIcon } from './ui/GithubIcon';
import { LinkedInIcon } from './ui/LinkedinIcon';
import { MailIcon } from './ui/MailIcon';

export default function Contact() {
  return (
    <section
      className='bg-white py-12 md:py-16 uppercase'
      id='contact'
      aria-labelledby='contact-heading'
      data-testid='contact-section'
    >
      <div className='max-w-6xl mx-auto px-4 md:px-8 lg:px-16 font-spline-sans-mono'>
        <div className='grid md:grid-cols-2 gap-8 items-center'>
          <div>
            <h2 id='contact-heading' className='sr-only'>
              Contact Information
            </h2>
            <BlurText
              text="Let's Connect"
              delay={150}
              animateBy='words'
              direction='top'
              className='text-2xl font-light mb-4'
              aria-hidden='true'
              data-testid='contact-title'
            />
            <ScrambledText
              className='font-light opacity-80 leading-relaxed'
              radius={60}
              duration={1.2}
              speed={0.5}
              scrambleChars='.:'
              data-testid='contact-description'
            >
              Available for freelance projects and full-time opportunities.
            </ScrambledText>
          </div>
          <div className='space-y-4'>
            <div className='inline-flex flex-col space-y-2' aria-label='Contact links'>
              <a
                href='mailto:raquelmrsantos@gmail.com?subject=Hey%20Raquel%2C%20Let%E2%80%99s%20Build%20Something%20Awesome!%20%F0%9F%A4%9D'
                className='font-light flex items-center gap-2 p-2 hover:opacity-70 transition-opacity'
                aria-label='Send me an email'
                data-testid='email-link'
              >
                <MailIcon className='cursor-target' aria-hidden='true' />{' '}
                <AnimatedContactText text='[ Email ]' />
              </a>
              <a
                href='https://www.linkedin.com/in/raquelmrsantos'
                target='_blank'
                rel='noopener noreferrer'
                className='font-light flex items-center gap-2 p-2 hover:opacity-70 transition-opacity'
                aria-label='Visit my LinkedIn profile'
                data-testid='linkedin-link'
              >
                <LinkedInIcon className='cursor-target' aria-hidden='true' />{' '}
                <AnimatedContactText text='[ LinkedIn ]' />
              </a>
              <a
                href='https://github.com/raquelmrsantos'
                target='_blank'
                rel='noopener noreferrer'
                className='font-light flex items-center gap-2 p-2 hover:opacity-70 transition-opacity'
                aria-label='Visit my GitHub profile'
                data-testid='github-link'
              >
                <GithubIcon className='cursor-target' aria-hidden='true' />{' '}
                <AnimatedContactText text='[ GitHub ]' />
              </a>
              <a
                href='/CV_Raquel_Santos_dev.pdf'
                download
                className='font-light flex items-center gap-2 p-2 hover:opacity-70 transition-opacity'
                aria-label='Download my CV'
                data-testid='cv-link'
              >
                <DownloadIcon className='cursor-target' aria-hidden='true' />{' '}
                <AnimatedContactText text='[ Download CV ]' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
