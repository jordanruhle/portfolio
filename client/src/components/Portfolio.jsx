import React from 'react';

const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-gray-100 py-12">
      <div className="max-w-screen-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Replace with your actual portfolio items */}
          <div className="bg-white p-4 shadow-md">
            <h3 className="text-lg font-semibold mb-2">Project 1</h3>
            <p>Description of Project 1</p>
          </div>
          <div className="bg-white p-4 shadow-md">
            <h3 className="text-lg font-semibold mb-2">Project 2</h3>
            <p>Description of Project 2</p>
          </div>
          <div className="bg-white p-4 shadow-md">
            <h3 className="text-lg font-semibold mb-2">Project 3</h3>
            <p>Description of Project 3</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
