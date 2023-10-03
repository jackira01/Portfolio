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
  const classImage = 'w-10 m-3 duration-200 hover:scale-125';
  const classDiv = 'relative group flex justify-center';
  const classSpan =
    'absolute -top-5 left-[50%] -translate-x-[50%] z-20 origin-bottom scale-0 px-2 py-1 rounded-lg border border-gray-300 bg-white text-sm font-boldshadow-md transition-all duration-300 ease-in-out group-hover:scale-100';
  return (
    <>
      <div className={classDiv}>
        <Image
          className={classImage}
          src={javascriptIcon}
          alt='javascript-icon'
        />
        <span className={classSpan}>JavaScript</span>
      </div>

      <div className={classDiv}>
        <Image className={classImage} src={reactIcon} alt='react-icon' />
        <span className={classSpan}>React</span>
      </div>

      <div className={classDiv}>
        <Image className={classImage} src={nextIcon} alt='next-icon' />
        <span className={classSpan}>Next13</span>
      </div>

      <div className={classDiv}>
        <Image
          className={classImage}
          src={tailwindcssIcon}
          alt='tailwind-icon'
        />
        <span className={classSpan}>TailwindCSS</span>
      </div>

      <div className={classDiv}>
        <Image className={classImage} src={boostrapIcon} alt='boostrap-icon' />
        <span className={classSpan}>Bootstrap</span>
      </div>

      <div className={classDiv}>
        <Image className={classImage} src={nodeIcon} alt='node-icon' />
        <span className={classSpan}>Node.js</span>
      </div>

      <div className={classDiv}>
        <Image className={classImage} src={reduxIcon} alt='redux-icon' />
        <span className={classSpan}>Redux</span>
      </div>

      <div className={classDiv}>
        <Image className={classImage} src={sqlIcon} alt='sql-icon' />
        <span className={classSpan}>SQL</span>
      </div>

      <div className={classDiv}>
        <Image
          className='w-10 pt-4 m-3 duration-200 hover:scale-125'
          src={postgresqlIcon}
          alt='postgresql-icon'
        />
        <span className={classSpan}>PostgreSQL</span>
      </div>

      <div className={classDiv}>
        <Image className={classImage} src={mongodbIcon} alt='mongodb-icon' />
        <span className={classSpan}>MongoDB</span>
      </div>

      <div className={classDiv}>
        <Image className={classImage} src={githubIcon} alt='github-icon' />
        <span className={classSpan}>GitHub</span>
      </div>

      <div className={classDiv}>
        <Image className={classImage} src={slackIcon} alt='slack-icon' />
        <span className={classSpan}>Slack</span>
      </div>
    </>
  );
}
