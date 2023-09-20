import profile from '../public/profile.png';
import Image from 'next/image';
import { inconsolata, playfairdisplay } from './font';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <section className='h-screen grid sm:mx-80 sm:mt-10 mx-5 grid-flow-col grid-rows-4 grid-cols-3 md:gap-10 gap-3 text-center'>
      <div className='flex items-center justify-center bg-color-five col-span-2 shadow-xl rounded-2xl'>
        <div className='mr-10'>
          <Image src={profile} width={110} height={110} alt='profile' />
        </div>
        <div>
          <h1
            className={`text-center text-indigo-950 text-3xl font-bold ${inconsolata.className}`}
          >
            jhoan Beru Alvarez
          </h1>
          <span className={playfairdisplay.className}>
            Full Stack Web Developer
          </span>
        </div>
      </div>
      <div className='bg-color-two col-start-3 rounded-2xl'>
        <FontAwesomeIcon icon={faMoon} />
      </div>
      <div className='bg-color-two col-start-3 rounded-2xl'>contact me</div>
      <div className='bg-color-two row-start-3 rounded-2xl'>skills</div>
      <div className='bg-color-two col-start-2 col-span-2 rounded-2xl'>
        Projects
      </div>
      <div className='bg-color-two col-span-2 rounded-2xl'>Content</div>
    </section>
  );
}
