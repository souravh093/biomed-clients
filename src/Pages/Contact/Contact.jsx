import React, { useRef } from 'react';
import Container from '../../components/Shared/Container/Container';
import img2 from '../../assets/contact_us/contact_us.png';
import Cover from "../../components/Shared/Cover/Cover";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hgn2gkn', 'template_rph9cik', form.current, '0NYSO9RzbhtXf6dad')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };




  return (
    <Container className="min-h-screen   bg-gray-100 flex flex-col justify-center items-center">
      {/* banner section */}
      <Cover title={"Contact Us"} text={"We would love to hear from you!"} />

      {/* form section */}
      <div className="my-20 dark:bg-slate-800 bg-white py-10 px-5 rounded-lg shadow-md flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 flex-shrink-0">
          <img
            src={img2}
            alt="Contact Us"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="w-full md:w-1/2 ml-0 md:ml-10 mt-4 md:mt-0">
          <h2 className="text-xl font-semibold mb-5">Get in Touch</h2>
          <form onSubmit={sendEmail}>
            <div className="mb-4">
              <label htmlFor="name" className="block font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full border dark:bg-slate-700 rounded px-3 py-2"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border rounded px-3 dark:bg-slate-700 py-2"
                placeholder="example@example.com"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block font-medium mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full border dark:bg-slate-700 rounded px-3 py-2"
                placeholder="Your message here..."
                required
              />
            </div>
            <button
              type="submit"
              className="bg-green-500 text-white rounded-md py-2 px-8 hover:bg-green-600 transition duration-300"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
