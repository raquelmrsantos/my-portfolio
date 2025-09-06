"use client";
import { useEffect, useState } from "react";

export default function DateComp() {
  const [day, setDay] = useState(1);
  const [monthIndex, setMonthIndex] = useState(0);

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

  const months = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
  ];

  return (
    <div className="flex flex-col items-start bg-black rounded-xl px-6 py-4 max-w-md shadow-lg">
      {/* Date pills and hover group */}
      <div className="flex items-end gap-4 group relative">
        {/* Day pill */}
        <div className="relative">
          <div className="bg-stone-100 rounded-full px-5 py-1 flex items-center justify-center min-w-[60px]">
            <span className="text-black text-[40px] leading-none tracking-tighter font-date">
              {String(day).padStart(2, "0")}
            </span>
          </div>
        </div>
        {/* Month and availability */}
        <div className="flex flex-col items-start">
          <span className="text-stone-100 text-[22px] font-bold leading-none mb-1">
            {months[monthIndex]}
          </span>
          <span className="text-stone-100 text-[18px] font-bold leading-tight">
            available
            <br />
            for work
          </span>
        </div>
        {/* Disclaimer: only visible on hover */}
        <div className="absolute left-0 top-full mt-2 text-stone-100 max-w-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <div className="flex items-start gap-2">
            <span className="text-lg">☹</span>
            <div className="text-sm leading-relaxed">
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
