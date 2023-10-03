import ButtonDark from '../ButtonDark/ButtonDark';
import { inconsolata } from '@/app/font';
import LocalDate from '../LocalDate/LocalDate';
import Image from 'next/image';
import { linkIcon } from '../imagesImports/ImageImport';

export default function SoftSkills() {
  return (
    <>
      <div className='flex items-center justify-center col-start-2 transition bg-color-one-light dark:bg-color-three rounded-xl'>
        <ButtonDark />
      </div>

      <div className='flex flex-col items-center justify-center col-start-2 transition bg-color-two-light dark:bg-color-two rounded-xl'>
        <a href='https://github.com/jackira01/Portfolio' target='blank'>
          <Image
            className='w-8 m-3 duration-200 cursor-pointer hover:scale-125'
            src={linkIcon}
            alt='javascript-icon'
          />
        </a>
      </div>

      <div className='flex flex-col items-center justify-center row-start-2 transition bg-color-three-light dark:bg-color-two rounded-xl'>
        <span
          className={`text-xl font-bold text-white ${inconsolata.className}`}
        >
          Ingles
        </span>
        <h1
          className={`text-center text-white text-2xl font-bold ${inconsolata.className}`}
        >
          A2
        </h1>
      </div>

      <div className='flex flex-col items-center justify-center row-start-1 transition bg-color-four-light dark:bg-color-one rounded-xl'>
        <LocalDate />
      </div>
    </>
  );
}
