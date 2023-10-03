import Carrousel from '@/components/ModalProjects/Carrousel';
import Skills from '@/components/Skills/Skills';
import ContactMe from '@/components/ContactMe/ContactMe';
import SoftSkills from '@/components/SoftSkills/SoftSkills';
import Profile from '@/components/Profile/Profile';
import AboutMe from '@/components/AboutMe/AboutMe';
import CvDowload from '@/components/CvDowload/CvDowload';

export default function Home() {
  return (
    <>
      <section
        className='w-[500px] h-[668px] m-auto grid grid-cols-4 gap-5 grid-rows-8
      lg:grid-cols-4 lg:grid-rows-4 lg:h-[700px] lg:w-[900px] '
      >
        <div className='flex items-center justify-center col-span-4 row-start-2 lg:col-span-2 lg:col-start-2 rounded-xl '>
          <Profile />
        </div>

        <div className='flex items-center justify-center col-span-4 row-start-6 transition shadow-xl lg:h-auto h-52 lg:col-span-3 lg:row-start-1 bg-color-two-light dark:bg-color-one rounded-xl '>
          <AboutMe />
        </div>

        <div className='grid h-56 grid-cols-2 col-span-4 grid-rows-2 gap-3 transition select-none lg:h-auto lg:col-span-1 lg:col-start-4 rounded-xl'>
          <SoftSkills />
        </div>

        <div className='col-span-4 row-start-3 transition shadow-xl h-44 lg:h-auto lg:col-span-1 lg:row-start-2 bg-color-three-light dark:bg-color-three rounded-xl'>
          <ContactMe />
        </div>

        <div className='flex flex-wrap col-span-4 col-start-1 row-span-1 row-start-4 transition shadow-xl lg:col-span-1 lg:col-start-4 lg:row-span-2 lg:row-start-2 bg-color-one-light dark:bg-color-one justify-evenly rounded-xl'>
          <Skills />
        </div>

        <div className='h-56 col-span-4 row-span-1 row-start-5 transition shadow-xl lg:h-auto lg:col-span-3 lg:row-span-2 lg:row-start-3 rounded-xl'>
          <Carrousel />
        </div>

        <div className='flex items-center justify-center h-40 col-span-4 transition row-start-8 bg-color-two-light dark:bg-color-three lg:w-full lg:h-full lg:col-span-1 lg:row-start-4 rounded-xl '>
          <CvDowload />
        </div>
      </section>
    </>
  );
}
