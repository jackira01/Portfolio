import Image from 'next/image';
import { inconsolata, playfairdisplay } from './font';
import './styles.css';
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
  nextIcon,
  slackIcon,
  postgresqlIcon,
} from '@/components/imagesImports/ImageImport';
import ButtonDark from '@/components/ButtonDark/ButtonDark';
import ModalProject from '@/components/ModalProjects/ModalProjects';

export default function Home() {
  return (
    <>
      <section className='h-screen grid sm:mx-80 sm:mt-8 mx-5 grid-flow-col grid-rows-4 grid-cols-3 md:gap-6 gap-3 text-center'>
        <div className='flex items-center justify-center bg-color-five col-span-2 shadow-xl rounded-xl'>
          <div className='mr-10'>
            <Image src={profileIcon} width={110} height={110} alt='profile' />
          </div>
          <div>
            <h1
              className={`text-center text-indigo-950 text-4xl font-bold ${inconsolata.className}`}
            >
              jhoan Alvarez
            </h1>
            <span className={playfairdisplay.className}>
              Desarrollador Web JavaScript
            </span>
          </div>
        </div>

        <div className='col-start-3 grid grid-rows-2 grid-cols-2 gap-3'>
          <div className='bg-color-five rounded-xl flex justify-center items-center col-start-2'>
            <ButtonDark />
          </div>

          <div className='bg-color-five rounded-xl flex flex-col justify-center items-center col-start-2'>
            <span>anos</span>
            <h1
              className={`text-center text-white text-3xl font-bold ${inconsolata.className}`}
            >
              20
            </h1>
          </div>

          <div className='bg-color-five rounded-xl flex justify-center items-center row-start-1 flex-col'>
            <span>nivel de ingles</span>
            <h1
              className={`text-center text-white text-3xl font-bold ${inconsolata.className}`}
            >
              A2
            </h1>
          </div>
        </div>

        <div className='bg-color-five row-start-2 rounded-xl'>contact me</div>

        <div className='bg-color-five row-start-3 row-span-2 rounded-xl flex flex-wrap justify-evenly'>
          <Image
            className='m-3'
            width={40}
            src={javascriptIcon}
            alt='javascript-icon'
          />
          <Image className='m-3' width={40} src={reactIcon} alt='react-icon' />
          <Image className='m-3' width={40} src={nextIcon} alt='node-icon' />
          <Image
            className='m-3'
            width={40}
            src={tailwindcssIcon}
            alt='tailwind-icon'
          />
          <Image
            className='m-3'
            width={40}
            src={boostrapIcon}
            alt='boostrap-icon'
          />
          <Image className='m-3' width={40} src={nodeIcon} alt='node-icon' />
          <Image className='m-3' width={40} src={reduxIcon} alt='redux-icon' />
          <Image
            className='m-3'
            width={40}
            src={postgresqlIcon}
            alt='redux-icon'
          />
          <Image className='m-3' width={40} src={sqlIcon} alt='sql-icon' />
          <Image
            className='m-3'
            width={40}
            src={mongodbIcon}
            alt='mongodb-icon'
          />
          <Image
            className='m-3'
            width={40}
            src={githubIcon}
            alt='github-icon'
          />
          <Image className='m-3' width={40} src={slackIcon} alt='sql-icon' />
        </div>

        <ModalProject />

        <div className='bg-color-five col-start-2 rounded-xl'>Content</div>
      </section>
    </>
  );
}
