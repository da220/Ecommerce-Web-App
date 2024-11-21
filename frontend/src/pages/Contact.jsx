import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';

const Contact = () => {
  return (
    <div className="px-4 py-8 md:px-10 lg:px-16">
      {/* Title Section */}
      <div className="text-center text-3xl pt-10 border-b border-gray-300">
        <Title text1="CONTACT" text2="US" />
      </div>

      {/* Content Section */}
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 items-center">
        {/* Image */}
        <img
          className="w-full md:max-w-[480px] object-cover rounded-lg shadow-lg"
          src={assets.contact_img}
          alt="Contact illustration"
        />

        {/* Contact Information */}
        <div className="flex flex-col justify-center items-start gap-6 text-gray-600">
          <p className="font-semibold text-xl text-blue-600">Our Store</p>
          <p>
            Visit us at our main store located in the heart of the city. We’re open
            Monday through Saturday, 9:00 AM to 8:00 PM.
          </p>
          <p className="font-semibold">Address:</p>
          <p>1234 Main Street, Cityville, Country</p>
          <p className="font-semibold">Contact Us:</p>
          <p>Email: <a href="mailto:info@store.com" className="text-blue-500">info@store.com</a></p>
          <p>Phone: <a href="tel:+1234567890" className="text-blue-500">+1 234 567 890</a></p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
