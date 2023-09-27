import { inconsolata } from '@/app/font';

export default function AboutMe() {
  return (
    <div className={`text-left text-white px-7 ${inconsolata.className}`}>
      <h2 className='font-bold'>Acerca De mi.</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
        asperiores nemo fugit. Dolores recusandae tempore odit obcaecati? Earum
        saepe est veritatis ab corrupti laudantium tempora! Repellendus
      </p>
    </div>
  );
}
