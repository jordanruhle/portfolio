import React from 'react';
import PillButton from './PillButton';

const Header = () => {
  return (
    <header className='py-4'>
      <div className='mx-auto flex flex-wrap justify-between items-center max-w-screen-2xl'>
        <ul className='flex gap-8 items-center'>
          <li><a className='hover:font-semibold' href="#aboutMe">About Me</a></li>
          <li><a className='hover:font-semibold' href="#portfolio">Portfolio</a></li>
          <li><a className='hover:font-semibold' href="#moreInformation">More Information</a></li>
        </ul>
        <PillButton buttonText='Contact Me' buttonColor='bg-gray-200' hoverColor='bg-gray-100' />
      </div>
    </header>
  );
};

export default Header;