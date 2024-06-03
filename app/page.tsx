import AboutMe from '@/components/AboutMe/AboutMe';
import Carrousel from '@/components/Carrousel/Carrousel';
import Complement from '@/components/Complement/Complement';
import ContactMe from '@/components/ContactMe/ContactMe';
import CvDowload from '@/components/CvDowload/CvDowload';
import Profile from '@/components/Profile/Profile';
import TechSkills from '@/components/TechSkills/TechSkills';

export default function Home() {
  return (
    <>
      <section
        className='w-[412px] m-10 mx-auto grid grid-cols-4 gap-5 grid-rows-8
      md:grid-cols-4 md:grid-rows-4 md:h-[768px] md:w-[900px]'
      >
        <div className='flex items-center justify-center col-span-4 md:col-span-2 md:col-start-2 rounded-xl '>
          <Profile />
        </div>

        <div className='flex items-center  justify-center col-span-4 transition shadow-xl md:h-auto h-72 md:col-span-3 md:row-start-1 bg-color-two-light dark:bg-color-one rounded-xl'>
          <AboutMe />
        </div>

        <div className="flex flex-wrap col-span-4 col-start-1 row-span-1  transition shadow-xl md:col-span-1 md:col-start-4 md:row-span-2 md:row-start-2 bg-color-one-light dark:bg-color-one justify-evenly rounded-xl">
          <TechSkills />
        </div>

        <div className='col-span-4 transition shadow-xl h-36 md:h-auto md:col-span-1 md:row-start-2 bg-color-three-light dark:bg-color-three rounded-xl'>
          <ContactMe />
        </div>

        <div className="grid h-40 grid-cols-2 col-span-2 row-start-1 col-start-3 grid-rows-2 gap-3 transition select-none md:h-auto md:col-span-1 md:row-start-1 md:col-start-4 rounded-xl">
          <Complement />
        </div>

        <div className='col-span-4 row-span-1 transition shadow-xl h-72 md:h-auto md:col-span-3 md:row-span-2 md:row-start-3 rounded-xl'>
          <Carrousel />
        </div>

        <div className='flex row-span-1 items-center justify-center h-40 col-span-2 row-start-1 transition bg-color-two-light dark:bg-color-three md:w-full md:h-full md:col-span-1 md:row-start-4 rounded-xl '>
          <CvDowload />
        </div>
      </section>
    </>
  );
}
