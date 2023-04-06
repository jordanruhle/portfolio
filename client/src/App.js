import React from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {

  return (
    <div className="text-gray-800">
      <Header />
      <AboutMe />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
