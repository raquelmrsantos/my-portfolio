'use client';
import { useEffect, useState } from 'react';
import AnimatedFooterTitle from '@/components/AnimatedFooterTitle';

export default function Footer() {
  const [time, setTime] = useState('--:--');

  useEffect(() => {
    // Initial time set
    const updateTime = () => {
      setTime(
        new Date().toLocaleTimeString('en-US', {
          timeZone: 'Europe/Lisbon',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        }),
      );
    };

    updateTime(); // Set immediately
    const interval = setInterval(updateTime, 1000); // Update every second

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className='bg-white uppercase'>
      <AnimatedFooterTitle title='Raquel Santos' />

      <div className='flex flex-row justify-between items-start pb-8 gap-4 font-spline-sans-mono mx-3.5'>
        <div className='text-sm font-light opacity-60'>
          <p className='md:inline'>Coimbra, Portugal</p>
          <p className='md:inline md:before:content-["_•_"]'>(GMT+0) {time}</p>
        </div>
        <div className='text-sm font-light opacity-60 text-right'>
          <p className='md:inline'>© All rights reserved. </p>
          <p className='md:inline'>2026 Raquel Santos.</p>
        </div>
      </div>
    </footer>
  );
}
