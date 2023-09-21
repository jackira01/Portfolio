'use client';

import { useState } from 'react';

import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

export default function ButtonDark() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showIcon, setShowIcon] = useState(true);

  const getClassDark = () => {
    setIsDarkMode(!isDarkMode);
    setShowIcon(!showIcon);
    document.documentElement.classList.toggle('dark');
  };
  return (
    <div className='relative flex justify-center items-center'>
      {showIcon ? (
        <FontAwesomeIcon
          icon={faSun}
          className='relative duration-500 ease-in-out'
          size='4x'
          onClick={getClassDark}
        />
      ) : (
        <FontAwesomeIcon
          icon={faMoon}
          className='relative duration-500 ease-in-out'
          size='4x'
          onClick={getClassDark}
        />
      )}
    </div>
  );
}
