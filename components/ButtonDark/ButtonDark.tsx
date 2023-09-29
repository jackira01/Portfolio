'use client';

import Image from 'next/image';
import { useState } from 'react';
import { moonIcon, sunIcon } from '../imagesImports/ImageImport';

export default function ButtonDark() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showIcon, setShowIcon] = useState(true);

  const getClassDark = () => {
    setIsDarkMode(!isDarkMode);
    setShowIcon(!showIcon);
    document.documentElement.classList.toggle('dark');
  };
  return (
    <div className='relative flex items-center justify-center'>
      {showIcon ? (
        <Image
          width={50}
          src={moonIcon}
          alt='moon-icon'
          onClick={getClassDark}
        />
      ) : (
        <Image width={40} src={sunIcon} alt='sun-icon' onClick={getClassDark} />
      )}
    </div>
  );
}
