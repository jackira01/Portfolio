import './styles.css';
import Carrousel from '@/components/ModalProjects/Carrousel';
import Skills from '@/components/Skills/Skills';
import ContactMe from '@/components/ContactMe/ContactMe';
import SoftSkills from '@/components/SoftSkills/SoftSkills';
import Profile from '@/components/Profile/Profile';
import AboutMe from '@/components/AboutMe/AboutMe';
import CvDowload from '@/components/CvDowload/CvDowload';
import Filosofy from '@/components/Filosofy/Filosofy';

export default function Home() {
  return (
    <>
      <section className='grid grid-cols-4 gap-5 m-5 text-center grid-rows-8 sm:grid-cols-4 sm:grid-rows-4 sm:py-0 sm:mx-60 md:gap-7'>
        <div className='flex items-center justify-center col-span-4 row-start-2 sm:col-span-2 sm:col-start-2 rounded-xl '>
          <Profile />
        </div>

        <div className='col-span-4 col-start-1 row-start-7 transition shadow-2xl sm:col-span-1 sm:row-start-1 sm:col-start-3 bg-color-four-light dark:bg-color-two rounded-xl '>
          <Filosofy />
        </div>

        <div className='flex items-center justify-center col-span-4 row-start-6 transition shadow-2xl sm:h-auto h-52 sm:col-span-2 sm:row-start-1 bg-color-two-light dark:bg-color-one rounded-xl '>
          <AboutMe />
        </div>

        <div className='grid h-48 grid-cols-2 col-span-4 grid-rows-2 gap-3 transition select-none sm:h-auto sm:col-span-1 sm:col-start-4 rounded-xl'>
          <SoftSkills />
        </div>

        <div className='flex flex-col justify-center col-span-4 row-start-3 transition shadow-xl h-44 sm:h-auto sm:col-span-1 sm:row-start-2 bg-color-three-light dark:bg-color-three rounded-xl'>
          <ContactMe />
        </div>

        <div className='flex flex-wrap col-span-4 col-start-1 row-span-1 row-start-4 transition shadow-xl sm:col-span-1 sm:col-start-4 sm:row-span-2 sm:row-start-2 bg-color-one-light dark:bg-color-one justify-evenly rounded-xl'>
          <Skills />
        </div>

        <div className='h-56 col-span-4 row-span-1 row-start-5 transition shadow-xl sm:h-auto sm:col-span-3 sm:row-span-2 sm:row-start-3 bg-color-one-light dark:bg-color-two rounded-xl'>
          <Carrousel />
        </div>

        <div className='flex items-center justify-center h-40 col-span-4 transition bg-color-two-light dark:bg-color-three sm:w-full sm:h-full row-start-8 sm:col-span-1 sm:row-start-4 rounded-xl '>
          <CvDowload />
        </div>
      </section>
    </>
  );
}
