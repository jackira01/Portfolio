import Image from 'next/image';
import { inconsolata, playfairdisplay } from './font';

import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  boostrapIcon,
  githubIcon,
  javascriptIcon,
  mongodbIcon,
  nodeIcon,
  profileIcon,
  reactIcon,
  reduxIcon,
  sqlIcon,
  tailwindcssIcon,
} from '@/components/imagesImports/ImageImport';
import ButtonDark from '@/components/ButtonDark';

export default function Home() {
  return (
    <section className='h-screen grid sm:mx-80 sm:mt-10 mx-5 grid-flow-col grid-rows-4 grid-cols-3 md:gap-10 gap-3 text-center'>
      <div className='flex items-center justify-center bg-color-five col-span-2 shadow-xl rounded-2xl'>
        <div className='mr-10'>
          <Image src={profileIcon} width={110} height={110} alt='profile' />
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

      <div className='bg-color-five col-start-3 rounded-2xl flex justify-center items-center'>
        <ButtonDark />
      </div>

      <div className='bg-color-five col-start-3 rounded-2xl'>contact me</div>

      <div className='bg-color-five row-start-2 row-span-2 rounded-2xl flex flex-wrap justify-evenly'>
        <Image
          className='m-2'
          width={50}
          src={javascriptIcon}
          alt='javascript-icon'
        />
        <Image className='m-2' width={50} src={reactIcon} alt='react-icon' />
        <Image
          className='m-2'
          width={50}
          src={tailwindcssIcon}
          alt='tailwind-icon'
        />
        <Image
          className='m-2'
          width={50}
          src={boostrapIcon}
          alt='boostrap-icon'
        />
        <Image className='m-2' width={50} src={nodeIcon} alt='node-icon' />
        <Image className='m-2' width={50} src={reduxIcon} alt='redux-icon' />
        <Image className='m-2' width={50} src={sqlIcon} alt='sql-icon' />
        <Image
          className='m-2'
          width={50}
          src={mongodbIcon}
          alt='mongodb-icon'
        />
        <Image className='m-2' width={50} src={githubIcon} alt='github-icon' />
      </div>

      <div className='bg-color-five col-start-2 col-span-2 rounded-2xl'>
        Projects
      </div>

      <div className='bg-color-five col-span-2 rounded-2xl'>Content</div>
    </section>
  );
}
