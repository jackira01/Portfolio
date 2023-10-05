'use client';

import Image from 'next/image';
import { profileIcon } from '../imagesImports/ImageImport';
import { inconsolata } from '@/app/font';
import Typewriter from 'typewriter-effect';

export default function Profile() {
  return (
    <div
      className={`duration-500 skew-x-6 group hover:-skew-x-0 hover:translate-x-2 select-none ${inconsolata.className}`}
    >
      <div className="group-hover:duration-400 relative rounded-2xl w-72 h-36 bg-zinc-800 text-gray-50 flex flex-col justify-center items-center gap-1 before:-skew-x-12  before:rounded-2xl  before:absolute before:content['']  before:bg-neutral-700 before:right-3 before:top-0 before:w-72 before:h-32 before:-z-10">
        <Image
          className='border-4 border-[#6b6a6a] rounded-full'
          width={100}
          src={profileIcon}
          alt='left-icon'
        />

        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .changeDelay(100)
              .typeString('Desarrollador Web Front-End.')
              .pauseFor(1500)
              .deleteChars(10)
              .typeString('Back-end.')
              .pauseFor(1500)
              .deleteChars(9)
              .typeString('JavaScript.')
              .start();
          }}
        />
      </div>
    </div>
  );
}
