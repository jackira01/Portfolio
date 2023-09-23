'use client';
import { useState } from 'react';

import Image from 'next/image';
import { leftIcon, rightIcon } from '../imagesImports/ImageImport';

export default function Carrousel() {
  const [currentIndex, setCurrentIndex] = useState(1);

  const slides = [
    {
      url: 'https://i.postimg.cc/8PHD9q3P/hbuy.png',
    },
    {
      url: 'https://i.postimg.cc/qqwYDd7P/tallersag.png',
    },
    {
      url: 'https://i.postimg.cc/RFQbqzwW/pokedex.png',
    },
    {
      url: 'https://i.postimg.cc/J0rYkdQP/yournotes.png',
    },
  ];

  const previewSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className='w-full h-[24rem] relative'>
      <div
        style={{
          backgroundImage: `url(${slides[currentIndex].url})`,
        }}
        className='w-full h-full bg-center bg-cover duration-500'
      />
      <div>
        <Image
          className='m-2 bg-gray-500/30 rounded-full absolute top-[45%] -translate-x-0 translate-y-[%50] left-5 cursor-pointer'
          width={50}
          src={leftIcon}
          alt='javascript-icon'
          onClick={previewSlide}
        />
      </div>
      <div>
        <Image
          className='m-2 bg-gray-500/30 rounded-full absolute top-[45%] -translate-x1 translate-y-[%50] right-5 cursor-pointer'
          width={50}
          src={rightIcon}
          alt='javascript-icon'
          onClick={nextSlide}
        />
      </div>
    </div>
  );
}
