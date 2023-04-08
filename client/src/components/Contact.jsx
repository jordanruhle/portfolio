import React from 'react';
import PillButton from './PillButton';

const Contact = () => {
  return (
    <section id="contact" className="bg-white py-12">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">Contact</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">Name</label>
            <input type="text" id="name" className="border border-gray-300 p-2 w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">Email</label>
            <input type="email" id="email" className="border border-gray-300 p-2 w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-2">Message</label>
            <textarea id="message" rows="4" className="border border-gray-300 p-2 w-full"></textarea>
          </div>
          <PillButton buttonText='Send Message' buttonColor='bg-orange-600' hoverColor='bg-orange-400' textColor='text-white' />
        </form>
      </div>
    </section>
  );
};

export default Contact;
