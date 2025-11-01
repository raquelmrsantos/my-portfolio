'use client';

import AnimatedContactText from './AnimatedContactText';
import BlurText from './BlurText';
import { DownloadIcon } from './ui/DownloadIcon';
import { GithubIcon } from './ui/GithubIcon';
import { LinkedInIcon } from './ui/LinkedinIcon';
import { MailIcon } from './ui/MailIcon';

export default function Contact() {
  return (
    <section className='bg-white py-12 md:py-16 uppercase'>
      <div className='max-w-6xl mx-auto px-4 md:px-8 lg:px-16 font-spline-sans-mono'>
        <div className='grid md:grid-cols-2 gap-8 items-center'>
          <div>
            <BlurText
              text="Let's Connect"
              delay={150}
              animateBy='words'
              direction='top'
              className='text-2xl font-light mb-4'
            />
            <p className='font-light opacity-80 leading-relaxed'>
              Available for freelance projects and full-time opportunities.
            </p>
          </div>
          <div className='space-y-4'>
            <div className='flex flex-col space-y-2 cursor pointer'>
              <a
                href='mailto:raquelmrsantos@gmail.com?subject=Hey%20Raquel%2C%20Let%E2%80%99s%20Build%20Something%20Awesome!%20%F0%9F%A4%9D'
                className='font-light flex items-center gap-2'
              >
                <MailIcon className='cursor-target' />{' '}
                <AnimatedContactText text='[ Email ]' />
              </a>
              <a
                href='https://www.linkedin.com/in/raquelmrsantos'
                target='_blank'
                rel='noopener noreferrer'
                className='font-light flex items-center gap-2'
              >
                <LinkedInIcon className='cursor-target' />{' '}
                <AnimatedContactText text='[ LinkedIn ]' />
              </a>
              <a
                href='https://github.com/raquelmrsantos'
                target='_blank'
                rel='noopener noreferrer'
                className='font-light flex items-center gap-2'
              >
                <GithubIcon className='cursor-target' />{' '}
                <AnimatedContactText text='[ GitHub ]' />
              </a>
              <a
                href='/raquel-santos-cv.pdf'
                download
                className='font-light flex items-center gap-2'
              >
                <DownloadIcon className='cursor-target' />{' '}
                <AnimatedContactText text='[ Download CV ]' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
