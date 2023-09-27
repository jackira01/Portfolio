import './styles.css';
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
      <section className='grid h-screen grid-cols-4 grid-rows-4 gap-3 mx-5 text-center sm:py-5 sm:mx-60 md:gap-7'>
        <div className='flex items-center justify-center col-span-2 col-start-2 row-start-2 rounded-xl bg-opacity-30 '>
          <Profile/>
        </div>

        <div className='flex items-center justify-center col-span-2 row-start-1 shadow-2xl bg-color-purple rounded-xl bg-opacity-30'>
          <AboutMe />
        </div>

        <div className='grid grid-cols-2 col-start-4 grid-rows-2 gap-3 rounded-xl'>
          <SoftSkills />
        </div>

        <div className='flex flex-col justify-center row-start-2 shadow-xl bg-color-purple bg-opacity-30 rounded-xl'>
          <ContactMe />
        </div>

        <div className='flex flex-wrap col-start-4 row-span-2 row-start-2 shadow-xl bg-color-purple justify-evenly bg-opacity-30 rounded-xl'>
          <Skills />
        </div>

        <div className='col-span-3 row-span-2 row-start-3 shadow-xl bg-color-purple bg-opacity-30 rounded-xl'>
          <Carrousel/>
        </div>

        <div className='flex items-center justify-center w-full h-full row-start-4 transition bg-black rounded-xl '>
          <CvDowload />
        </div>
      </section>
    </>
  );
}
