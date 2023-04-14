import React from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Technologies from './components/Technologies';
import SocialLinks from './components/Social';


function App() {


  return (
    <div id="background" className="text-gray-800">
      <div className='max-w-screen-xl mx-auto grid md:grid-cols-2 px-4' >
        <Header />
        <AboutMe />
        <div id='bgImageSpacer' className='col-start-1 row-start-2 md:col-start-2 '></div>
        <Technologies />
      </div>
      <Portfolio />
      <SocialLinks />
    </div>
  );
}

export default App;
