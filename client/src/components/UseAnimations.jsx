import React from 'react';
import { useState, useEffect } from 'react';

const UseAnimations = () => {


  const languages = ["JavaScript ES6+", "Python", "Java", "HTML5", "CSS", "SQL"];
  const frontEnd = ["jQuery", "React", "React Native", "Bootstrap", "Material-UI", "Tailwind"];
  const backend = ["Node.js", "Flask", "Jinja2", "Spring Boot", "Express", "Mongoose"];
  const frameworks = ["Spring Boot", "jQuery", "Express", "React Native", "Bootstrap", "Material-UI", "Tailwind"];
  const libraries = ["React", "Bootstrap", "Material-UI", "Tailwind"];
  const Databases = ["MySQL", "MongoDB"];
  const Tools = ["AJAX", "Spring Tool Suite", "REST API", "JSON", "Postman", "MySQL Workbench", "Git", "Github"];

  const combinedTechs = languages
    .concat(frontEnd, backend, frameworks, libraries, Databases, Tools);

  const [showText, setShowText] = useState(false);
  const [showTechnologies, setShowTechnologies] = useState(new Array(combinedTechs.length).fill(false));

  useEffect(() => {
    setTimeout(() => setShowText(true), 500);

    const reversedTechs = new Array(combinedTechs.length).fill(false).map((_, index) => ({
      index,
      show: false,
    })).reverse();

    reversedTechs.forEach((tech, idx) => {
      setTimeout(() => {
        setShowTechnologies((prev) => {
          const updated = [...prev];
          updated[tech.index] = true;
          return updated;
        });
      }, 1500 + idx * 100);
    });
  }, []);

  const onAnimationEnd = () => { };

  return { showText, showTechnologies, onAnimationEnd };
};

export default UseAnimations;
