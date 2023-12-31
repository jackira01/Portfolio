'use client';

import { useState, useEffect } from 'react';
import { inconsolata } from '@/app/font';

export default function LocalDate() {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const getCurrentTime = () => {
      const currentTime = new Date();
      const currentHour = currentTime.getHours();
      const currentMinutes = currentTime.getMinutes();
      const HourAndMinutes = `${currentHour}:${currentMinutes}`;
      setTime(HourAndMinutes);
    };

    // Actualiza la hora cada segundo
    const interval = setInterval(getCurrentTime, 1000);

    // Limpia el intervalo cuando el componente se desmonta
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <h1 className={`text-xl font-bold text-slate-900 ${inconsolata.className}`}>COL</h1>
      <p className={`text-slate-900 font-bold text-2xl ${inconsolata.className}`}>{time}</p>
    </>
  );
}
