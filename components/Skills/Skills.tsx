import Image from 'next/image';
import {
  boostrapIcon,
  githubIcon,
  javascriptIcon,
  mongodbIcon,
  nextIcon,
  nodeIcon,
  postgresqlIcon,
  reactIcon,
  reduxIcon,
  slackIcon,
  sqlIcon,
  tailwindcssIcon,
} from '../imagesImports/ImageImport';

export default function SkillsComponent() {
  return (
    <>
      <Image
        className='w-8 m-3 duration-200 hover:scale-125'
        src={javascriptIcon}
        alt='javascript-icon'
      />
      <Image
        className='w-8 m-3 duration-200 hover:scale-125'
        src={reactIcon}
        alt='react-icon'
      />
      <Image
        className='w-8 m-3 duration-200 hover:scale-125'
        src={nextIcon}
        alt='node-icon'
      />
      <Image
        className='w-8 m-3 duration-200 hover:scale-125'
        src={tailwindcssIcon}
        alt='tailwind-icon'
      />
      <Image
        className='w-8 m-3 duration-200 hover:scale-125'
        src={boostrapIcon}
        alt='boostrap-icon'
      />
      <Image
        className='w-8 m-3 duration-200 hover:scale-125'
        src={nodeIcon}
        alt='node-icon'
      />
      <Image
        className='w-8 m-3 duration-200 hover:scale-125'
        src={reduxIcon}
        alt='redux-icon'
      />
      <Image
        className='w-8 m-3 duration-200 hover:scale-125'
        src={sqlIcon}
        alt='sql-icon'
      />
      <Image
        className='w-8 m-3 duration-200 pt-7 hover:scale-125'
        src={postgresqlIcon}
        alt='postgresql-icon'
      />
      <Image
        className='w-8 m-3 duration-200 hover:scale-125'
        src={mongodbIcon}
        alt='mongodb-icon'
      />
      <Image
        className='w-8 m-3 duration-200 hover:scale-125'
        src={githubIcon}
        alt='github-icon'
      />
      <Image
        className='w-8 m-3 duration-200 hover:scale-125'
        src={slackIcon}
        alt='slack-icon'
      />
    </>
  );
}
