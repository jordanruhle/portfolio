import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="bg-white py-12">
      <div className="max-w-screen-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Contact</h2>
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
          <button type="submit" className="bg-blue-500 text-white px-4 py-2">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
