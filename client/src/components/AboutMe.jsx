import React from 'react';
import PillButton from './PillButton';

const AboutMe = () => {

  return (
    <section id="aboutMe" className=" pr-4 flex items-center">
      <div className="mb-6">
        <h2 className="text-5xl leading-tight w-70 mb-6">Hello, My Name is <span className='font-bold'>Jordan Ruhle</span></h2>
        <p className='mb-6'>
          Hi, I'm Jordan Ruhle, a proficient full stack developer specializing in JavaScript and React. Building upon the solid foundation gained through my educational background, I am adept at crafting clean, efficient, and maintainable code for high-performance web applications. My strong problem-solving abilities, excellent communication skills, and commitment to continuous growth have made me a valuable asset in the software development field. As an active member of the development community, I consistently utilize my passion for JavaScript and React to enhance my expertise and contribute to meaningful projects. Let's collaborate and create outstanding web experiences together!
        </p>
        <a href="mailto:jordanruhle@gmail.com">
          <PillButton buttonText='Contact Me' buttonColor='bg-orange-600' hoverColor='bg-orange-400' textColor='text-white' />
        </a>
      </div>
    </section>
  );
};

export default AboutMe;