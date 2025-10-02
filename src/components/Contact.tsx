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
            <h3 className='text-2xl font-light mb-4'>Let&apos;s Connect</h3>
            <p className='font-light opacity-80 leading-relaxed'>
              Available for freelance projects and full-time opportunities.
            </p>
          </div>

          <div className='space-y-4'>
            <div className='flex flex-col space-y-2'>
              <a href='mailto:raquelmrsantos@gmail.com' className='font-light'>
                <MailIcon /> [ Email ]
              </a>
              <a
                href='https://www.linkedin.com/in/raquelmrsantos'
                className='font-light'
              >
                <LinkedInIcon /> [ LinkedIn ]
              </a>
              <a
                href='https://github.com/raquelmrsantos'
                className='font-light'
              >
                <GithubIcon /> [ GitHub ]
              </a>
              <a href='/raquel-santos-cv.pdf' download className='font-light'>
                <DownloadIcon /> [ Download CV ]
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}