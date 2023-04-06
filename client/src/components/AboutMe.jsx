import React from 'react';
import PillButton from './PillButton';
import Technologies from './Technologies';

const AboutMe = () => {

  const bgColors = ['bg-slate-500', 'bg-orange-400', 'bg-neutral-800', 'bg-gray-200', 'bg-orange-600']
  const textColors = ['text-white', 'text-gray-800']

  const languages = [ "JavaScript ES6+", "Python", "Java", "HTML5", "CSS", "SQL"]
  const frontEnd = ["jQuery", "React", "React Native", "Bootstrap", "Material-UI", "Tailwind"]
  const backend = ["Node.js", "Flask", "Jinja2", "Spring Boot", "Express", "Mongoose"]
  const frameworks = ["Spring Boot", "jQuery", "Express", "React Native", "Bootstrap", "Material-UI", "Tailwind"]
  const libraries = ["React", "Bootstrap", "Material-UI", "Tailwind"]
  const Databases = ["MySQL", "MongoDB"]
  const Tools = ["AJAX", "Spring Tool Suite", "REST API", "JSON", "Postman", "MySQL Workbench", "Git", "Github"]

  const selectTextColor = (bgColorIndex) => {
    if (['bg-slate-500', 'bg-neutral-800', 'bg-orange-600'].includes(bgColors[bgColorIndex])) {
      return 'text-white';
    } else {
      return 'text-gray-800';
    }
  };

  return (
    <section id="aboutMe" className="max-w-screen-2xl mx-auto bg-white py-12">
      <div className='w-1/3'>
      <div className="mb-20">
        <h2 className="text-5xl leading-tight w-60 mb-6">My Name is <span className='font-bold'>Jordan</span></h2>
        <p>
          Hi, my name is Jordan, and I'm a software developer with 1 year of experience in coding. I'm passionate about creating innovative solutions using modern web technologies. My primary focus is on frontend development, but I'm also familiar with backend technologies and databases. I'm continuously learning and expanding my skillset to stay up-to-date with the latest trends in the industry.
        </p>
        <PillButton buttonText='Hire Me' buttonColor='bg-orange-500' hoverColor='bg-orange-400' textColor='text-white' />
      </div>
      <div className='flex gap-2 flex-wrap'>
        {
          languages
          .concat(frontEnd, backend, frameworks, libraries, Databases, Tools)
          .map((tech, key) => {
            const bgColorIndex = key % bgColors.length;
            return (
              <Technologies
              text={tech}
              bgColor={bgColors[bgColorIndex]}
              textColor={selectTextColor(bgColorIndex)}
              />
              );
            })
          }
      </div>
          </div>
    </section>
  );
};

export default AboutMe;