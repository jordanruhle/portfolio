import React from 'react'

const Technologies = ({ bgColor, textColor, text }) => {
  const bgColors = ['bg-slate-500', 'bg-orange-400', 'bg-neutral-800', 'bg-gray-200', 'bg-orange-600']
  const textColors = ['text-white', 'text-gray-800']

  const languages = ["JavaScript ES6+", "Python", "Java", "HTML5", "CSS", "SQL"];
const frontEnd = ["React", "React Native", "Bootstrap", "Material-UI", "Tailwind"];
const backend = ["Node.js", "Flask", "Jinja2", "Spring Boot", "Express", "Mongoose"];
const frameworks = ["jQuery", "React Native"];
const libraries = ["React", "Bootstrap", "Material-UI", "Tailwind"];
const databases = ["MySQL", "MongoDB"];
const tools = ["AJAX", "Spring Tool Suite", "REST API", "JSON", "Postman", "MySQL Workbench", "Git", "Github", "Certbot"];
const cloudServices = ["AWS EC2", "AWS S3", "AWS Route 53"];
const middleware = ["Multer"];


  const selectTextColor = (bgColorIndex) => {
    if (['bg-slate-500', 'bg-neutral-800', 'bg-orange-600'].includes(bgColors[bgColorIndex])) {
      return 'text-white';
    } else {
      return 'text-gray-800';
    }
  };

  return (
    <div id='technologies' className='md:col-span-2 mb-12 max-w-screen-xl mx-auto '>
      <h2 className="text-4xl font-bold mb-6">Technologies</h2>
      <div className='flex gap-2 flex-wrap'>

        {
          languages
            .concat(frontEnd, backend, frameworks, libraries, databases, tools, cloudServices, middleware)
            .map((tech, key) => {
              const bgColorIndex = key % bgColors.length;
              return (
                <div className={`${bgColors[bgColorIndex]} ${selectTextColor(bgColorIndex)} text-lg font-semibold p-2 rounded-md`}>{tech}</div>
              );
            })
        }
      </div>
    </div>
  )
}

export default Technologies