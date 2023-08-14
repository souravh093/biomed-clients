import React from 'react';
import Container from '../../components/Shared/Container/Container';

const Contact = () => {
    return (
        <Container className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
            {/* banner section */}
            <div
                className="bg-cover bg-center py-12 px-4 text-white text-center"
                style={{
                    backgroundImage: 'url("https://img.freepik.com/premium-photo/businessman-drawing-increases-graph-virtual-screen_9083-2285.jpg")'
                }}
            >
                <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
                <p className="text-xl">We would love to hear from you!</p>
            </div>

            {/* form section */}
            <div className="my-8 bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 flex-shrink-0">
                    <img
                        src="https://img.freepik.com/premium-vector/creative-chat-editable-illustration-design_203633-11703.jpg?w=2000"
                        alt="Contact Us"
                        className="w-full h-auto object-cover"
                    />
                </div>
                <div className="w-full md:w-1/2 ml-0 md:ml-10 mt-4 md:mt-24">
                    <h2 className="text-xl font-semibold mb-5">Get in Touch</h2>
                    <form>
                        <div className="mb-4">
                            <label htmlFor="name" className="block font-medium mb-1">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full border rounded px-3 py-2"
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
                                className="w-full border rounded px-3 py-2"
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
                                className="w-full border rounded px-3 py-2"
                                placeholder="Your message here..."
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-green-500 text-white py-2 px-8 hover:bg-green-600 transition duration-300"
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