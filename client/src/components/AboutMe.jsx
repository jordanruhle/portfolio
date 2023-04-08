import React from 'react';
import PillButton from './PillButton';

const AboutMe = () => {

  return (
    <section id="aboutMe" className=" pr-4 flex items-center">
        <div className="mb-6">
          <h2 className="text-5xl leading-tight w-70 mb-6">Hello, My Name is <span className='font-bold'>Jordan</span></h2>
          <p className='mb-6'>
            Hi, I'm Jordan Ruhle, a dedicated full stack developer with expertise in JavaScript and React. As a Coding Dojo bootcamp graduate, I excel at crafting clean, efficient, and maintainable code for responsive web applications. I pride myself on strong problem-solving, communication, and a growth mindset. Eager to make a difference in web development, I'm looking forward to joining a team where I can utilize my passion for JavaScript and React while broadening my skill set. Let's create exceptional web experiences together!
          </p>
          <PillButton buttonText='Hire Me' buttonColor='bg-orange-600' hoverColor='bg-orange-400' textColor='text-white' />
        </div>
    </section>
  );
};

export default AboutMe;