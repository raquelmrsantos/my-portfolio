import DateComp from './DateComp';
import Section from './Section';
import AnimatedHeroTitle from '@/components/AnimatedHeroTitle';
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
            className='w-[430px] h-[490px] object-cover grayscale mt-42
            '
            priority
          />

          {/* Text overlay positioned at the top center of the image */}
          <div className='absolute -top-8 left-1/2 transform -translate-x-1/2 w-screen max-w-7xl px-4'>
            <AnimatedHeroTitle title='WEB DEVELOPER' />
          </div>
        </div>

        <div className=''>
          <p
            className='font-spline-sans-mono text-center uppercase font-light'
            style={{
              fontSize: '15px',
              //fontWeight: 300,
              letterSpacing: '-2%',
              // margin: '45rem auto 20rem',
              //width: '450rem',
              lineHeight: '99%',
            }}
          >
            Crafting elegant digital experiences
          </p>
        </div>

        <DateComp />
      </div>
    </Section>
  );
}
