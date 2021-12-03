import heart from "../images/heart.png";

function Footer() {
  return (
    <footer className=' absolute bottom-0 w-full  text-gray-50 font-bold font-inter tracking-wide py-1 bg-gradient-to-r from-yellow-500 via-red-400  to-purple-600'>
      <div className='flex justify-center items-center'>
        Created
        <img
          className='h-5 w-5 text-center ml-2 mr-2'
          src={heart}
          alt='heart'
        />{" "}
        by{" "}
        <a
          className='border-b border-gray-700 ml-2 mr-2'
          href='https://github.com/Sadhvi10'
        >
          Sadhvi
        </a>
        <span className='mr-2 text-[#1f2937]'> &copy;</span> 2021
      </div>
    </footer>
  );
}

export default Footer;
