import { courgette } from '@/app/font';

export default function Filosofy() {
  return (
    <div className='flex flex-col justify-center m-4 text-left text-white select-none'>
      <p className={` ${courgette.className}`}>
        En el corazón exhausto por las penas, renacerá la esperanza con la leve
        ebriedad que trae la paz.
      </p>
      <p className=''>~ anonimo</p>
    </div>
  );
}
