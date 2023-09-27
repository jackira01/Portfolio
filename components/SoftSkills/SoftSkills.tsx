import ButtonDark from '../ButtonDark/ButtonDark';
import { inconsolata } from '@/app/font';
import LocalDate from '../LocalDate/LocalDate';

export default function SoftSkills() {
  return (
    <>
      <div className='flex items-center justify-center col-start-2 bg-color-purple rounded-xl'>
        <ButtonDark />
      </div>

      <div className='flex flex-col items-center justify-center col-start-2 bg-color-purple rounded-xl'>
        <span className={`text-xl font-bold text-gray-500 ${inconsolata.className}`}>
          Años
        </span>
        <h1
          className={`text-center text-white text-2xl font-bold ${inconsolata.className}`}
        >
          20
        </h1>
      </div>

      <div className='flex flex-col items-center justify-center row-start-2 bg-color-purple rounded-xl'>
        <span className={`text-xl font-bold text-gray-500 ${inconsolata.className}`}>
          Ingles
        </span>
        <h1
          className={`text-center text-white text-2xl font-bold ${inconsolata.className}`}
        >
          A2
        </h1>
      </div>

      <div className='flex flex-col items-center justify-center row-start-1 bg-color-purple rounded-xl'>
        <LocalDate />
      </div>
    </>
  );
}
