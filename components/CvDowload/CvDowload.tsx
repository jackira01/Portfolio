export default function CvDowload() {
  return (
    <div className='flex flex-col items-center justify-center align-middle '>
      <div>
        <a
          href='http://www.w3.org/2000/svg'
          download
          className=' group-hover:bg-opacity-50 items-center cursor-pointer group relative flex flex-col gap-1.5  bg-black bg-opacity-80 text-[#f1f1f1] rounded-3xl hover:bg-opacity-70 transition font-semibold shadow-md'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            height='24px'
            width='24px'
          >
            <g strokeWidth='0' id='SVGRepo_bgCarrier'></g>
            <g
              strokeLinejoin='round'
              strokeLinecap='round'
              id='SVGRepo_tracerCarrier'
            ></g>
            <g id='SVGRepo_iconCarrier'>
              {' '}
              <g id='Interface / Download'>
                {' '}
                <path
                  strokeLinejoin='round'
                  strokeLinecap='round'
                  strokeWidth='2'
                  stroke='#f1f1f1'
                  d='M6 21H18M12 3V17M12 17L17 12M12 17L7 12'
                  id='Vector'
                ></path>{' '}
              </g>{' '}
            </g>
          </svg>
          Descarga Mi CV
          <div className='absolute px-2 py-2 transition-opacity -translate-x-1/2 bg-black rounded-md shadow-lg opacity-0 -bottom-16 bg-opacity-70 left-1/2 group-hover:opacity-100'>
            Descargar
          </div>
        </a>
        <a></a>
      </div>
    </div>
  );
}
