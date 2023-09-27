import Image from 'next/image';
import { inconsolata } from '@/app/font';
import {
  gmailIcon,
  linkedinIcon,
  phoneIcon,
} from '../imagesImports/ImageImport';

export default function ContactMe() {
  return (
    <>
      <div>
        <h1
          className={`text-xl text-cyan-50 font-bold pb-5 ${inconsolata.className}`}
        >
          Contactame
        </h1>
      </div>
      <div className='flex flex-row justify-evenly'>
        <Image className='duration-200 hover:scale-125' src={gmailIcon} alt='gmail' width={40} />
        <Image className='duration-200 hover:scale-125' src={linkedinIcon} alt='linkedin' width={40} />
        <Image className='duration-200 hover:scale-125' src={phoneIcon} alt='phone' width={40} />
      </div>
    </>
  );
}
