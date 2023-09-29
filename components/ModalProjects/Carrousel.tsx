'use client';

import { useState } from 'react';
import Image from 'next/image';
import { inconsolata } from '@/app/font';
import { leftIcon, rightIcon } from '../imagesImports/ImageImport';

export default function Carrousel() {
  const [currentIndex, setCurrentIndex] = useState(1);

  const slides = [
    {
      img: 'https://i.postimg.cc/8PHD9q3P/hbuy.png',
      title: 'H-Buy',
      description:
        'Esta es una web desarrollada con el objetivo de ofrecer una variedad de productos a los usuarios para que puedan ver sus detalles, poder comprarlos entre otras funciones. • Algunas de mis tareas fueron agregar la autenticación de usuario y el historial de productos.',
      url: 'https://h-buy.netlify.app/',
    },
    {
      img: 'https://i.postimg.cc/qqwYDd7P/tallersag.png',
      title: 'Taller SAG',
      description:
        'Desarrollé con mi grupo de trabajo una aplicación web para una empresa conocida en su sector con el objetivo de que los clientes tengan la posibilidad de contactar e interactuar con la empresa desde la comodidad de sus casas.',
      url: 'https://moonlit-fenglisu-651d57.netlify.app/',
    },
    {
      img: 'https://i.postimg.cc/RFQbqzwW/pokedex.png',
      title: 'Pokedex',
      description:
        'Desarrollé una aplicación que tenía como objetivo la creación de un Pokedex usando las tecnologías aprendidas en la cursada. • Desarrollo individual de un Pokedex manipulando el Front-End y Back-End. • Agregar funcionalidades y optimizaciones tales como CRUD, filtrados y cargado dinámico.',
      url: 'https://pi-pokedex.netlify.app/',
    },
    {
      img: 'https://i.postimg.cc/J0rYkdQP/yournotes.png',
      title: 'YourNotes App',
      description:
        'Esta aplicación se desarrolló para que el usuario tenga la posibilidad de crear, eliminar, editar y ver sus notas sin esfuerzo. Sus datos se almacenarán de forma segura y su contraseña se cifrará para garantizar la máxima seguridad del usuario.',
      url: 'https://node-js-app-lvba.onrender.com/',
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
    <div className='relative w-full h-full overflow-hidden duration-700 select-none group-hover:blur-sm group text-gray-50 rounded-2xl '>
      <div
        className='absolute inset-0 duration-500 bg-center bg-cover blur-0 group-hover:blur-sm'
        style={{
          backgroundImage: `url(${slides[currentIndex].img})`,
        }}
      />
      <div className='absolute flex flex-col w-full h-48 gap-1 p-3 duration-500 bg-black/60 sm:h-40 -bottom-20 group-hover:-bottom-0 group-hover:duration-600'>
        <div className='flex items-center justify-center'>
          <h1
            className={`text-2xl font-semibold text-white ${inconsolata.className}`}
          >
            {slides[currentIndex].title}
          </h1>
        </div>
        <p className={`text-white ${inconsolata.className}`}>
          {slides[currentIndex].description}
        </p>
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
