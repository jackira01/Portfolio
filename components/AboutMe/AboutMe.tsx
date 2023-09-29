import { inconsolata } from '@/app/font';

export default function AboutMe() {
  return (
    <div className={`text-left text-white px-7  ${inconsolata.className}`}>
      <h2 className='font-bold'>Acerca De mi.</h2>
      <p>
        Soy Jhoan Alvarez un Full Stack Web Developer, me encanta trabajar en equipo y me
        siento cómodo tanto en entornos ágiles como en proyectos más
        estructurados. 
      </p>
    </div>
  );
}
