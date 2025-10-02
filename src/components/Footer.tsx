import AnimatedFooterTitle from '@/components/AnimatedFooterTitle';

export default function Footer() {
  return (
    <footer className='bg-white uppercase'>
      <AnimatedFooterTitle title='Raquel Santos' />

      <div className='flex flex-col md:flex-row justify-between items-center pb-8 gap-4 font-spline-sans-mono mx-3.5'>
        <div className='text-sm font-light opacity-60'>
          <p>Coimbra, Portugal</p>
          <p>
            (GMT+0){' '}
            {new Date().toLocaleTimeString('en-US', {
              timeZone: 'Europe/Lisbon',
              hour: '2-digit',
              minute: '2-digit',
              hour12: false,
            })}
          </p>
        </div>
        <div className='text-sm font-light opacity-60'>
          <p>© All rights reserved.</p>
          <p>2025 Raquel Santos.</p>
        </div>
      </div>
    </footer>
  );
}
