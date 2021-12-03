function Header() {
  return (
    <header className='sticky top-0 w-full flex justify-center text-white font-inter font-bold tracking-wide py-1 bg-gradient-to-r from-yellow-500 via-red-400  to-purple-600 '>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        class='icon icon-tabler icon-tabler-confetti mr-2'
        width='20'
        height='20'
        viewBox='0 0 24 24'
        stroke-width='1.5'
        stroke='#1f2937'
        fill='none'
        stroke-linecap='round'
        stroke-linejoin='round'
      >
        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
        <path d='M4 5h2' />
        <path d='M5 4v2' />
        <path d='M11.5 4l-.5 2' />
        <path d='M18 5h2' />
        <path d='M19 4v2' />
        <path d='M15 9l-1 1' />
        <path d='M18 13l2 -.5' />
        <path d='M18 19h2' />
        <path d='M19 18v2' />
        <path d='M14 16.518l-6.518 -6.518l-4.39 9.58a1.003 1.003 0 0 0 1.329 1.329l9.579 -4.39z' />
      </svg>
      Anime Random Quote Generator
    </header>
  );
}

export default Header;
