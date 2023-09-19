import profile from '../public/profile.png';
import Image from 'next/image';

export default function Home() {
  return (
    <section className='h-screen grid sm:mx-80 sm:mt-10 mx-5 grid-flow-col grid-rows-4 grid-cols-3 md:gap-10 gap-3 text-center'>
      <div className='flex items-center justify-center bg-color-five col-span-2 shadow-xl rounded-2xl'>
        <div className='mr-10'>
          <Image src={profile} width={110} height={110} alt='profile' />
        </div>
        <div>
          <h1 className='text-center text-3xl'>jhoan Beru Alvarez</h1>
          <p>Full Stack Web Developer</p>
        </div>
      </div>
      <div className='bg-color-two col-start-3 rounded-2xl'>button dark</div>
      <div className='bg-color-two col-start-3 rounded-2xl'>contact me</div>
      <div className='bg-color-two row-start-3 rounded-2xl'>skills</div>
      <div className='bg-color-two col-start-2 col-span-2 rounded-2xl'>
        Projects
      </div>
      <div className='bg-color-two col-span-2 rounded-2xl'>Content</div>
    </section>
  );
}
