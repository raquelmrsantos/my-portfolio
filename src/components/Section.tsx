'use client';

import React, { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
}

export default function Section({ children, className = '' }: SectionProps) {
  return (
    <div
      className={`h-[calc(100vh-40px)] overflow-hidden rounded-[20px] bg-[#EDEDED] my-[20px] ${className}`}
    >
      {children}
    </div>
  );
}
