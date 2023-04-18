import React from 'react';
import PillButton from './PillButton';

const Header = () => {
  return (
    <header className='py-4 md:col-span-2'>
      <div className='mx-auto flex justify-center md:justify-between items-center max-w-screen-xl'>
        <ul className='flex gap-8 items-center'>
          <li><a className='hover:font-semibold text-xl' href="#aboutMe">About Me</a></li>
          <li><a className='hover:font-semibold text-xl' href="#technologies">Technologies</a></li>
          <li><a className='hover:font-semibold text-xl' href="#portfolio">Portfolio</a></li>
        </ul>
        <a className='hidden md:block' href="mailto:jordanruhle@gmail.com">
          <PillButton buttonText='Contact Me' buttonColor='bg-gray-200' hoverColor='bg-gray-100' />
        </a>
      </div>
    </header>
  );
};

export default Header;