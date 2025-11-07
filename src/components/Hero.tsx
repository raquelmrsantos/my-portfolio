import DateComp from './DateComp';
import Section from './Section';
import AnimatedHeroTitle from '@/components/AnimatedHeroTitle';
import Image from 'next/image';

export default function Hero() {
  return (
    <Section>
      <div
        className='relative flex flex-col items-center space-y-8'
        role='banner'
      >
        {/* Profile Image with Text Overlay */}
        <div className='relative' data-testid='hero-image-container'>
          <Image
            src='/profile-picture.webp'
            alt='Raquel Santos, Web Developer'
            width={430}
            height={490}
            className='object-cover grayscale mt-40 sm:mt-65 md:mt-85 lg:mt-44'
            style={{
              width: 'clamp(200px, 40vw, 430px)',
              height: 'clamp(228px, 45.6vw, 490px)',
            }}
            priority
            data-testid='hero-image'
          />

          {/* Text overlay positioned at the top center of the image */}
          <div className='absolute -top-8 left-1/2 transform -translate-x-1/2 w-screen max-w-7xl px-4'>
            <h1 className='sr-only'>Raquel Santos - Web Developer</h1>
            <AnimatedHeroTitle
              title='WEB DEVELOPER'
              aria-hidden='true'
              data-testid='hero-title'
            />
          </div>
        </div>

        <div>
          <p
            className='font-spline-sans-mono text-center uppercase font-light'
            style={{
              fontSize: '15px',
              letterSpacing: '-2%',
              lineHeight: '99%',
            }}
            data-testid='hero-tagline'
          >
            Crafting elegant digital experiences
          </p>
        </div>

        <DateComp />
      </div>
    </Section>
  );
}
