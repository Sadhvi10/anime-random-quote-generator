import confetti from "../images/confetti.png";

function Header() {
  return (
    <header className='sticky top-0 w-full flex justify-center text-gray-50 font-inter font-bold tracking-wide py-1 bg-gradient-to-r from-yellow-500 via-red-400  to-purple-600 '>
      <img className='h-5 w-5 mr-2' src={confetti} alt='confetti' />
      Anime Random Quote Generator
    </header>
  );
}

export default Header;
