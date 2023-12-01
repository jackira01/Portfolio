'use client';

import { inconsolata } from '@/app/font';
import Typewriter from 'typewriter-effect';

export default function AboutMe() {
  return (
    <div
      className={`text-center select-none text-black px-7 font-medium  ${inconsolata.className}`}
    >
      <h2 className='font-bold'>Acerca De mi.</h2>
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .changeDelay(50)
            .typeString(
              'Full Stack Developer con experiencia en Desarrollo web Freelancer en Front-End y Back-End. Experto en metodologías ágiles, GIT, bases de datos, algoritmos y Frameworks CSS. Destrezas en JavaScript, React, MongoDB, SQL, Bootstrap, etc. Colaborador en proyectos grupales, desarrollando habilidades blandas como Adaptabilidad, Trabajo en equipo y comunicación.'
            )
            .start();
        }}
      />
    </div>
  );
}
