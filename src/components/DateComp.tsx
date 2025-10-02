'use client';
import { useEffect, useState, useRef } from 'react';
import { UserPenIcon, UserPenHandle } from './ui/UserPenIcon';

export default function DateComp() {
  const [day, setDay] = useState(0);
  const [monthIndex, setMonthIndex] = useState(0);
  const iconRef = useRef<UserPenHandle>(null);

  useEffect(() => {
    const today = new Date();
    const targetDay = today.getDate();
    const targetMonth = today.getMonth();

    let currentDay = 1;
    const dayInterval = setInterval(() => {
      if (currentDay < targetDay) {
        currentDay++;
        setDay(currentDay);
      } else {
        clearInterval(dayInterval);
      }
    }, 50);

    let currentMonth = 0;
    const monthInterval = setInterval(() => {
      if (currentMonth < targetMonth) {
        currentMonth++;
        setMonthIndex(currentMonth);
      } else {
        clearInterval(monthInterval);
      }
    }, 150);

    return () => {
      clearInterval(dayInterval);
      clearInterval(monthInterval);
    };
  }, []);

  const handleMouseEnter = () => {
    iconRef.current?.startAnimation();
  };

  const handleMouseLeave = () => {
    iconRef.current?.stopAnimation();
  };

  const months = [
    'jan',
    'feb',
    'mar',
    'apr',
    'may',
    'jun',
    'jul',
    'aug',
    'sep',
    'oct',
    'nov',
    'dec',
  ];

  return (
    <div className='flex justify-end md:p-12'>
      {/* Date pills and hover group */}
      <div
        className='flex items-center group relative cursor-pointer'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Day pill */}
        <div className='relative'>
          <div className='rounded-full px-5 py-1 flex items-center justify-center min-w-[60px]'>
            <span className='text-[10vh] leading-none font-date'>
              {String(day).padStart(2, '0')}
            </span>
          </div>
        </div>
        {/* Month and availability */}
        <div className='flex flex-col items-start'>
          <span className='text-[22px] font-bold font-text leading-none mb-1'>
            {months[monthIndex]}
          </span>
          <span className='text-[18px] font-bold font-text leading-tight'>
            available
            <br />
            for work
          </span>
        </div>
        {/* Disclaimer: only visible on hover */}
        <div className='absolute left-0 top-full mt-2 max-w-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200  pointer-events-none'>
          <div className='flex items-start gap-2'>
            <span className='text-lg'>
              <UserPenIcon ref={iconRef} />
            </span>
            <div className='text-sm leading-relaxed font-text'>
              <strong>Availability shifts with projects.</strong>
              <br />
              Reach out to see where
              <br />I stand today.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
