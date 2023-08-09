import React from 'react';
import './Footer.css'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaApple ,FaAndroid } from 'react-icons/fa'
const Footer = () => {
    return (
        <div className='bg-[#222222] text-white'>
            <div className='md:container md:mx-auto ms-5'>
            <div className='md:flex md:justify-between mx-auto md:pt-9 pt-5'>
                <div className='flex gap-5'>
                    <p>Terms of Service</p>
                    <p>Privacy Policy</p>
                    <p>Site Map</p>
                </div>
                <div className='flex gap-5 mt-5 md:mt-0 items-center'>
                    <p>Follow Us</p>
                    <p><FaFacebookF /></p>
                    <p><FaTwitter /></p>
                    <p><FaInstagram /></p>
                    <p><FaLinkedinIn /></p>
                </div>
            </div>
            <hr className="h-px md:my-7 my-4 w-11/12 md:w-full border-0 bg-gray-600"></hr>
            <div className='md:flex md:justify-between md:mt-16 mt-9'>
                <div>
                    <p>About</p>
                    <div>
                        <p>About Us</p>
                        <p>Become Seller</p>
                        <p>Jobs on Freeio</p>
                        <p>Pricing</p>
                        <p>Services Freeio</p>
                        <p>Terms of Service</p>
                    </div>
                </div>
                <div>
                    <p>Categories</p>
                    <div>
                        <p>Design & Creative</p>
                        <p>Development & IT</p>
                        <p>Music & Audio</p>
                        <p>Programming & Tech</p>
                        <p>Digital Marketing</p>
                        <p>Finance & Accounting</p>
                        <p>Writing & Translation</p>
                        <p>Trending</p>
                        <p>Lifestyle</p>
                    </div>
                </div>
                <div>
                    Support
                    <div>
                        <p>Help & Support</p>
                        <p>FAQ Freeio</p>
                        <p>Contact Us</p>
                        <p>Services</p>
                        <p>Terms of Service</p>
                    </div>
                </div>
                <div>
                    <p>Subscribe</p>
                    <div className='md:p-4 p-3 w-72 md:w-full border-2 md:rounded-xl rounded flex gap-3 md:gap-5 custom-bg'>
                        <input className='bg-transparent' type="email" placeholder='Your email address'/>
                        <button className='hover:text-green-600 duration-700'>Send</button>
                    </div>
                    <p>Apps</p>
                    <div className='flex items-center'>
                        <FaApple/>
                        <p>iOS App</p>
                    </div>
                    <div className='flex items-center'>
                        <FaAndroid/>
                        <p>Android App</p>
                    </div>
                </div>
            </div>
            <hr className="h-px md:mt-20 border-0 bg-gray-600"></hr>
            <p className='md:mt-4'>© Xyzio. 2022 CreativeLayers. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;