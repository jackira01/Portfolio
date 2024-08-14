'use client';

import { inconsolata } from '@/app/font';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import {
  boostrapIcon,
  javascriptIcon,
  leftIcon,
  mongodbIcon,
  nodeIcon,
  postgresqlIcon,
  reactIcon,
  reduxIcon,
  rightIcon,
  tailwindcssIcon,
} from '../imagesImports/ImageImport';

export default function Carrousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      img: 'https://i.postimg.cc/8PHD9q3P/hbuy.png',
      title: 'H-Buy',
      description:
        'Esta es una web desarrollada con el objetivo de ofrecer una variedad de productos a los usuarios para que puedan ver sus detalles, comentarios, poder comprarlos, ver su historial de vistas, entre otras funciones.',
      url: 'https://h-buy.vercel.app/',
      technology: [
        javascriptIcon,
        reactIcon,
        reduxIcon,
        boostrapIcon,
        mongodbIcon,
        nodeIcon,
      ],
    },
    {
      img: 'https://i.postimg.cc/qqwYDd7P/tallersag.png',
      title: 'Taller SAG',
      description:
        'Desarrollé con mi grupo de trabajo una aplicación web para una empresa conocida en su sector con el objetivo de que los clientes tengan la posibilidad de contactar e interactuar con la empresa desde la comodidad de sus casas.',
      url: 'https://taller-sag.vercel.app/',
      technology: [
        javascriptIcon,
        reactIcon,
        reduxIcon,
        tailwindcssIcon,
        mongodbIcon,
        nodeIcon,
      ],
    },
    {
      img: 'https://i.postimg.cc/RFQbqzwW/pokedex.png',
      title: 'Pokedex',
      description:
        'Desarrollé una aplicación que tenía como objetivo la creación de un Pokedex usando las tecnologías aprendidas en la cursada. Podras Filtrar, buscar por nombre, ver las caracteristicas del pokemon, entre otras funciones. ',
      url: 'https://pi-pokewiki.vercel.app/',
      technology: [javascriptIcon, reactIcon, postgresqlIcon, nodeIcon],
    },
    {
      img: 'https://i.postimg.cc/J0rYkdQP/yournotes.png',
      title: 'YourNotes App',
      description:
        'Esta aplicación se desarrolló para que el usuario tenga la posibilidad de crear, eliminar, editar y ver sus notas sin esfuerzo. Sus datos se almacenarán de forma segura y su contraseña se cifrará para garantizar la máxima seguridad del usuario.',
      url: 'https://node-js-app-lvba.onrender.com/',
      technology: [javascriptIcon, mongodbIcon, nodeIcon],
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

  useEffect(() => {
    const slideInterval = setTimeout(nextSlide, 8000);

    return () => clearTimeout(slideInterval);
  }, [currentIndex]);

  const classImage = 'w-8 m-3 duration-200 hover:scale-125';

  return (
    <div className='relative w-full h-full overflow-hidden duration-700 select-none group-hover:blur-sm group text-gray-50 rounded-2xl '>
      <div
        className='absolute inset-0 duration-500 bg-center bg-cover blur-0 group-hover:blur-sm'
        style={{
          backgroundImage: `url(${slides[currentIndex].img})`,
        }}
      />
      <div className='absolute flex flex-col w-full h-64 gap-1 p-3 text-center duration-500 bg-black/60 sm:h-52 -bottom-52 lg:-bottom-40 group-hover:bottom-0 group-hover:duration-600'>
        <div className='flex items-center justify-center'>
          <h1
            className={`text-2xl font-semibold mr-4 text-white ${inconsolata.className}`}
          >
            {slides[currentIndex].title}
          </h1>
          <a
            target='black'
            href={slides[currentIndex].url}
            className='relative px-4 text-black text-base font-bold uppercase rounded-[50px] overflow-hidden bg-white transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-[50px] hover:before:left-0'
          >
            Link
          </a>
        </div>
        <p className={`text-white ${inconsolata.className}`}>
          {slides[currentIndex].description}
        </p>
        <div className='flex flex-row justify-center bottom'>
          {slides[currentIndex].technology.map((item, index) => {
            return (
              <Image key={index} className={classImage} src={item} alt='tailwind-icon' />
            );
          })}
        </div>
      </div>

      <div>
        <Image
          className='z-20 m-2  absolute top-[20%] -translate-x-0 translate-y-[%50] left-1 cursor-pointer'
          width={30}
          src={leftIcon}
          alt='left-icon'
          onClick={previewSlide}
        />
      </div>

      <div>
        <Image
          className='z-20 m-2 absolute top-[20%] -translate-x1 translate-y-[%50] right-1 cursor-pointer'
          width={30}
          src={rightIcon}
          alt='right-icon'
          onClick={nextSlide}
        />
      </div>
    </div>
  );
}
