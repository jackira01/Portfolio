'use client';

import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';

import { inconsolata, playfairdisplay } from '@/app/font';
import Image from 'next/image';

interface Props {
  title: string;
  description: string;
}

export default function DescriptionModal({
  title,
  description,
}: Props): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2'>
        <button
          className='m-2 bg-gray-500/30 cursor-pointer rounded-xl'
          onClick={openModal}
        >
          <h1 className='font-bold'>Conocer mas</h1>
        </button>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='fixed inset-0' onClose={closeModal}>
          <div className='00 px-4 text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Dialog.Overlay className='absolute inset-0' />
            </Transition.Child>

            {/* Contenedor de la descripción */}
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-500 transform'
              enterFrom='bottom-0'
              enterTo='translate-y-0'
              leave='ease-in transform'
              leaveFrom='translate-y-full'
              leaveTo='translate-y-0'
            >
              <div className=' w-9/12 h-2/4 absolute top-64 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black opacity-80'>
                <h1 className={`text-white font-bold ${inconsolata.className}`}>
                  {title}
                </h1>
                <span>{description}</span>
                <br />
                <button onClick={closeModal} className='text-white'>
                  Cerrar Modal
                </button>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
