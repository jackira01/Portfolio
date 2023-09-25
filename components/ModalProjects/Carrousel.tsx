import { useState } from 'react';
import Image from 'next/image';
import { leftIcon, rightIcon } from '../imagesImports/ImageImport';
import DescriptionModal from './DescriptionModal';

export default function Carrousel() {
  const [currentIndex, setCurrentIndex] = useState(1);

  const slides = [
    {
      url: 'https://i.postimg.cc/8PHD9q3P/hbuy.png',
      title: 'proyecto 1',
      descrition: 'descripcion 1',
    },
    {
      url: 'https://i.postimg.cc/qqwYDd7P/tallersag.png',
      title: 'proyecto 2',
      descrition: 'descripcion 2',
    },
    {
      url: 'https://i.postimg.cc/RFQbqzwW/pokedex.png',
      title: 'proyecto 3',
      descrition: 'descripcion 3',
    },
    {
      url: 'https://i.postimg.cc/J0rYkdQP/yournotes.png',
      title: 'proyecto 4',
      descrition: 'descripcion 4',
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
    <div className='w-full h-full relative'>
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
          alt='left-icon'
          onClick={previewSlide}
        />
      </div>
      <div>
        <Image
          className='m-2 bg-gray-500/30 rounded-full absolute top-[45%] -translate-x1 translate-y-[%50] right-5 cursor-pointer'
          width={50}
          src={rightIcon}
          alt='right-icon'
          onClick={nextSlide}
        />
      </div>
      <DescriptionModal
        title={`${slides[currentIndex].title}`}
        description={`${slides[currentIndex].descrition}`}
      />
    </div>
  );
}
