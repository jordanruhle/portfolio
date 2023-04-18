import React, { useState } from 'react';
import ecommerceThumbnail from '../assets/images/ecommerce-thumb.PNG'
import ProjectDetails from './ProjectDetails';
import pnwAirlinesThumbnail from '../assets/images/pnwAirlines.PNG'
import dietAppThumbnail from '../assets/images/DietApp.PNG'

const Portfolio = () => {
  const [projectOneHide, setProjectOneHide] = useState(true)

  return (
    <section id="portfolio" className="bg-gray-100 py-12 px-4">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Replace with your actual portfolio items */}

          <div className="row-span-6 row-start-1 p-12">
            <a className='relative' target='_blank' href="https://www.mountainbikes.store">
              <img src={ecommerceThumbnail} alt='Mountain Bikes Ecommerce Store' className='w-full bg-white shadow-md rounded-lg transform hover:scale-105 hover:drop-shadow-md transition duration-200 aspect-square' />
              <p className='absolute bottom-[-8%] right-[-8%] z-10 inline-block bg-neutral-800 font-medium text-white text-4xl rounded-lg aspect-square p-4'>01</p>
            </a>
            <h3 className="py-8 text-lg font-semibold mb-2">Mountain Bikes Ecommerce Store</h3>
            <ProjectDetails hide={projectOneHide} sethide={setProjectOneHide} />
          </div>

          <div className="row-span-6 md:row-start-2 p-12">
            <a className='relative' target='_blank' href="https://www.pnwairlines.flights">
              <img src={pnwAirlinesThumbnail} alt='PNW Airlines Flight Reservation System' className='bg-white shadow-md rounded-lg transform hover:scale-105 hover:drop-shadow-md transition duration-200 aspect-square' />
              <p className='absolute bottom-[-8%] right-[-8%] z-10 inline-block bg-neutral-800 font-medium text-white text-4xl rounded-lg aspect-square p-4'>02</p>
            </a>
            <h3 className="py-8 text-lg font-semibold mb-2">PNW Airlines Flight Reservation System</h3>
          </div>

          <div className="row-span-6 lg:row-start-3 p-12 ">
            <div className='relative rounded-lg' >
              <div className='dietApp  shadow-md rounded-lg transform hover:scale-105 hover:drop-shadow-md transition duration-200 aspect-square'>
                <div className='h-full w-full text-center backdrop-blur-sm flex justify-center items-center'>
                  <p className='text-lg bg-white p-2 rounded-lg bg-gradient-to-r via-transparent opacity-80 inline-block'>Coming Soon</p>
                </div>
                
              </div>
              <p className='absolute bottom-[-8%] right-[-8%] z-10 inline-block bg-neutral-800 font-medium text-white text-4xl rounded-lg aspect-square p-4'>03</p>
            </div>
            <h3 className="py-8 text-lg font-semibold mb-2">Diet App</h3>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Portfolio;
