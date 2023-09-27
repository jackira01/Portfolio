'use client';

import { useState } from 'react';
import Image from 'next/image';
import { leftIcon, rightIcon } from '../imagesImports/ImageImport';

export default function Carrousel() {
  const [currentIndex, setCurrentIndex] = useState(1);

  const slides = [
    {
      img: 'https://i.postimg.cc/8PHD9q3P/hbuy.png',
      title: 'proyecto 1',
      descrition: 'descripcion 1',
      url: '',
    },
    {
      img: 'https://i.postimg.cc/qqwYDd7P/tallersag.png',
      title: 'proyecto 2',
      descrition: 'descripcion 2',
      url: '',
    },
    {
      img: 'https://i.postimg.cc/RFQbqzwW/pokedex.png',
      title: 'proyecto 3',
      descrition: 'descripcion 3',
      url: '',
    },
    {
      img: 'https://i.postimg.cc/J0rYkdQP/yournotes.png',
      title: 'proyecto 4',
      descrition: 'descripcion 4',
      url: '',
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
    <div className='relative flex flex-col-reverse items-center w-full h-full overflow-hidden text-center group-hover:hover:blur-0 group rounded-2xl'>
      {/* Capa con la imagen de fondo */}
      <div
        className='absolute inset-0 duration-500 bg-center bg-cover blur-sm group-hover:blur-0'
        style={{
          backgroundImage: `url(${slides[currentIndex].img})`,
        }}
      />

      <div className='group-hover:blur-0 relative z-10 transition-opacity duration-300 bg-black bg-opacity-90 opacity-100 group-hover:opacity-0 h-[15rem] w-full'>
        <h1 className='text-2xl font-semibold text-white'>
          {slides[currentIndex].title}
        </h1>
        <p className='text-white'>{slides[currentIndex].descrition}</p>
      </div>

      <div>
        <Image
          className='z-20 m-2 bg-gray-200/30 rounded-full absolute top-[40%] -translate-x-0 translate-y-[%50] left-1 cursor-pointer'
          width={50}
          src={leftIcon}
          alt='left-icon'
          onClick={previewSlide}
        />
      </div>

      <div>
        <Image
          className='z-20 m-2 bg-gray-200/30 rounded-full absolute top-[40%] -translate-x1 translate-y-[%50] right-1 cursor-pointer'
          width={50}
          src={rightIcon}
          alt='right-icon'
          onClick={nextSlide}
        />
      </div>
    </div>
  );
}
