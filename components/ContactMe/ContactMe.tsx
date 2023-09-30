import Image from 'next/image';
import { inconsolata } from '@/app/font';
import { linkedinIcon } from '../imagesImports/ImageImport';
import Phone from './Phone';
import Gmail from './Gmail';

export default function ContactMe() {
  return (
    <div className='flex flex-col justify-center'>
      <div>
        <h1
          className={`select-none text-center text-xl text-cyan-50 font-bold pb-5 ${inconsolata.className}`}
        >
          Contactame
        </h1>
      </div>
      <div className='flex flex-row justify-evenly'>
        <Gmail />

        <a
          target='blank'
          href='https://www.linkedin.com/in/jhoan-nicolas-beru-alvarez-a30a61210/'
        >
          <Image
            className='w-12 duration-200 hover:scale-125'
            src={linkedinIcon}
            alt='linkedin'
          />
        </a>

        <Phone />
      </div>
    </div>
  );
}
