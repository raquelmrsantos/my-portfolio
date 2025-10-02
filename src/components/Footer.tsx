import AnimatedFooterTitle from '@/components/AnimatedFooterTitle';

export default function Footer() {
  return (
    <footer className='bg-white uppercase'>
      <AnimatedFooterTitle title='Raquel Santos' />
      
      <div className='max-w-6xl mx-auto px-4 md:px-8 lg:px-16 font-spline-sans-mono'>
        <div className='section-divider my-8' />

        <div className='text-center pb-8'>
          <p className='text-sm font-light opacity-60'>
            © 2025 Raquel Santos. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}