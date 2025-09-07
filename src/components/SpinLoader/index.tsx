'use client';

import { useState, useEffect } from 'react';
import Section from '../Section';

interface SpinLoaderProps {
  children: React.ReactNode;
}

export default function SpinLoader({ children }: SpinLoaderProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const intervalTime = 20; // Update every 20ms
    const increment = 1; // Increment by 1%

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsLoading(false);
          return 100;
        }
        return prev + increment;
      });
    }, intervalTime);

    return () => {
      clearInterval(interval);
    };
  }, []);

  if (isLoading) {
    return (
      <Section>
        <div className='font-text text-center flex flex-col items-center justify-center h-full'>
          <div>Amazing portfolio loading...</div>
          <div className='mt-2'>{progress}%</div>
        </div>
      </Section>
    );
  }

  return <>{children}</>;
}
