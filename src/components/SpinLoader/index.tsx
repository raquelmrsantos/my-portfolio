'use client';

import { useState, useEffect } from 'react';
import Section from '../Section';

interface SpinLoaderProps {
  children: React.ReactNode;
}

export default function SpinLoader({ children }: SpinLoaderProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <Section>
        <div className='font-text text-center'>
          Amazing portfolio loading...
        </div>
      </Section>
    );
  }

  return <>{children}</>;
}
