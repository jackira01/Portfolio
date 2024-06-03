import { inconsolata } from '@/app/font';
import Image from 'next/image';
import ButtonDark from '../ButtonDark/ButtonDark';
import LocalDate from '../LocalDate/LocalDate';
import { linkIcon } from '../imagesImports/ImageImport';

export default function Complement() {
  return (
    <>
      <div className='flex items-center justify-center row-start-1 transition bg-color-one-light dark:bg-color-three rounded-xl'>
        <ButtonDark />
      </div>

      <div className='flex flex-col items-center justify-center row-start-1 col-start-2 transition bg-color-two-light dark:bg-color-two rounded-xl'>
        <a
          href='https://github.com/jackira01/Portfolio'
          target='blank'
          className='cursor-pointer group'
        >
          <Image
            className='w-8 m-3 duration-200 group-hover:scale-125'
            src={linkIcon}
            alt='javascript-icon'
          />
        </a>
      </div>

      <div className='flex flex-col items-center justify-center row-start-2 transition bg-color-three-light dark:bg-color-two rounded-xl'>
        <span
          className={`text-xl font-bold  text-slate-900 ${inconsolata.className}`}
        >
          Ingles
        </span>
        <h1
          className={`text-center text-slate-900 text-2xl font-bold ${inconsolata.className}`}
        >
          B1
        </h1>
      </div>

      <div className='flex flex-col items-center justify-center row-start-2 transition bg-color-four-light dark:bg-color-one rounded-xl'>
        <LocalDate />
      </div>
    </>
  );
}
