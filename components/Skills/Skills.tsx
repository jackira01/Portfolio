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

  const classImage = 'w-10 m-3 duration-200 hover:scale-125'
  return (
    <>
      <Image
        className={classImage}
        src={javascriptIcon}
        alt='javascript-icon'
      />
      <Image
        className={classImage}
        src={reactIcon}
        alt='react-icon'
      />
      <Image
        className={classImage}
        src={nextIcon}
        alt='node-icon'
      />
      <Image
        className={classImage}
        src={tailwindcssIcon}
        alt='tailwind-icon'
      />
      <Image
        className={classImage}
        src={boostrapIcon}
        alt='boostrap-icon'
      />
      <Image
        className={classImage}
        src={nodeIcon}
        alt='node-icon'
      />
      <Image
        className={classImage}
        src={reduxIcon}
        alt='redux-icon'
      />
      <Image
        className={classImage}
        src={sqlIcon}
        alt='sql-icon'
      />
      <Image
        className='w-10 pt-4 m-3 duration-200 hover:scale-125'
        src={postgresqlIcon}
        alt='postgresql-icon'
      />
      <Image
        className={classImage}
        src={mongodbIcon}
        alt='mongodb-icon'
      />
      <Image
        className={classImage}
        src={githubIcon}
        alt='github-icon'
      />
      <Image
        className={classImage}
        src={slackIcon}
        alt='slack-icon'
      />
    </>
  );
}
