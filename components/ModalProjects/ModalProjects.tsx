'use client';

import { Transition } from '@headlessui/react';
import { useState } from 'react';
import Carrousel from './Carrousel';

function App() {
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

  return (
    <div>
      <button onClick={toggleModal}>Abrir Modal</button>

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
            className='fixed inset-0 flex items-center justify-center z-50 bg-gray-300 bg-opacity-10'
            onClick={handleOverlayClick}
          >
            <div className='bg-white w-1/2  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
              <Carrousel />
            </div>
          </div>
        )}
      </Transition>
    </div>
  );
}

export default App;
