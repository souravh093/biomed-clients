import React, { useRef } from "react";
import Container from "../../components/Shared/Container/Container";
import img1 from "../../assets/contact_us/contact_png.avif";
import img2 from "../../assets/contact_us/contact_banner.avif";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hgn2gkn",
        "template_rph9cik",
        form.current,
        "0NYSO9RzbhtXf6dad"
      )
      .then(
        (result) => {
          console.log(result);
          toast.success("Message send successfully");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="pt-20">
      <Container>
        {/* banner section */}
        <div
          className="bg-cover bg-center py-16 px-4 text-white text-center"
          style={{
            backgroundImage: `url(${img2})`,
          }}
        >
          <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
          <p className="text-xl">We would love to hear from you!</p>
        </div>

        {/* form section */}
        <div className="my-20 dark:bg-slate-800 bg-white py-9 px-5 rounded-lg shadow-md flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 flex-shrink-0">
            <img
              src={img1}
              alt="Contact Us"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 ml-0 md:ml-10 mt-4 md:mt-28">
            <h2 className="text-xl font-semibold mb-5">Get in Touch</h2>
            <form ref={form} onSubmit={sendEmail}>
              <div className="mb-4">
                <label htmlFor="name" className="block font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  className="w-full border  dark:bg-slate-700 rounded px-3 py-2"
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
                  name="user_email"
                  className="w-full border dark:bg-slate-700  rounded px-3 py-2"
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
    </div>
  );
};

export default Contact;
