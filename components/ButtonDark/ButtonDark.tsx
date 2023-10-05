'use client';

import Image from 'next/image';
import { useState } from 'react';
import { moonIcon, sunIcon } from '../imagesImports/ImageImport';

export default function ButtonDark() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showIcon, setShowIcon] = useState(false);

  const getClassDark = () => {
    setIsDarkMode(!isDarkMode);
    setShowIcon(!showIcon);
    document.documentElement.classList.toggle('dark');
  };
  return (
    <div className='relative flex items-center justify-center'>
      {showIcon ? (
        <Image
          className='w-12 transition cursor-pointer animate-spin-moon'
          src={moonIcon}
          alt='moon-icon'
          onClick={getClassDark}
        />
      ) : (
        <Image
          className='w-12 transition duration-500 cursor-pointer animate-spin-sun'
          src={sunIcon}
          alt='sun-icon'
          onClick={getClassDark}
        />
      )}
    </div>
  );
}
