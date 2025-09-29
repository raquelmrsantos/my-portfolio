import DateComp from './DateComp';
import Section from './Section';
import AnimatedTitle from '@/components/AnimatedTitle';
import Image from 'next/image';

export default function Hero() {
  return (
    <Section>
      <div className='relative flex flex-col items-center space-y-8'>
        {/* Profile Image with Text Overlay */}
        <div className='relative'>
          <Image
            src='/profile-picture.webp'
            alt='Profile picture'
            width={430}
            height={490}
            className='w-[430px] h-[490px] object-cover grayscale'
            priority
          />

          {/* Text overlay positioned at the top center of the image */}
          <div className='absolute top-8 left-1/2 transform -translate-x-1/2 w-screen max-w-7xl px-4'>
            <div className='hero-title font-sofia-sans-condensed font-bold tracking-wider text-center'>
              <AnimatedTitle title='WEB DEVELOPER' />
            </div>
          </div>
        </div>

        <div className='text-lg md:text-xl font-light tracking-wide opacity-80 text-center'>
          Crafting elegant digital experiences
        </div>
        <DateComp />
      </div>
    </Section>
  );
}
