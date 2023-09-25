'use client';

import { Transition } from '@headlessui/react';
import { useState } from 'react';
import Carrousel from './Carrousel';
import { inconsolata } from '@/app/font';

export default function ModalProjects() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Verifica si el clic se produjo en el área del overlay (fuera del modal)
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const handleContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Evita que el clic dentro del modal se propague al cierre del modal
    e.stopPropagation();
  };

  return (
    <div className='col-start-2 col-span-2 rounded-2xl' onClick={toggleModal}>
      <div className='relative w-full h-full bg-center bg-cover duration-500 cursor-pointer'>
        {/* Capa de opacidad */}
        <div className='absolute inset-0 bg-black opacity-50 rounded-xl'></div>
        {/* Contenido con fondo de imagen */}
        <div
          style={{
            backgroundImage: `url(https://media.giphy.com/media/gi84IkFRzwube/giphy.gif)`,
          }}
          className='w-full h-full rounded-xl bg-center bg-cover duration-500 flex items-center justify-center'
        >
          {/* Texto en el centro */}
          <div className={`text-white text-center ${inconsolata.className}`}>
            <h1 className='text-3xl font-bold'>Proyectos</h1>
            <span>conoce mis proyectos aqui</span>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter='transition-opacity duration-300'
        enterFrom='opacity-0'
        enterTo='opacity-100'
        leave='transition-opacity duration-300'
        leaveFrom='opacity-100'
        leaveTo='opacity-0'
      >
        {(ref) => (
          <div
            ref={ref}
            className='fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 overflow-hidden'
            onClick={handleOverlayClick}
          >
            <div
              className='w-9/12 z-40 h-4/6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
              onClick={handleContentClick}
            >
              <Carrousel />
            </div>
          </div>
        )}
      </Transition>
    </div>
  );
}
