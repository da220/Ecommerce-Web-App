import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="text-center bg-gradient-to-b from-blue-500 to-indigo-500 text-white py-10"
        style={{ backgroundImage: `url(${assets.hero_img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <h1 className="text-4xl font-bold">Welcome to Forever</h1>
        <p className="text-lg mt-4">Your trusted partner in excellence and innovation.</p>
      </div>

      {/* Title Section */}
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      {/* Content Section */}
      <div className="my-10 flex flex-col md:flex-row gap-16 px-4 md:px-16">
        {/* About Image */}
        <img
          className="w-full md:max-w-[450px] rounded-lg shadow-lg"
          src={assets.about_img}
          alt="Team at work"
        />

        {/* Text Content */}
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Forever was born out of a passion to create exceptional experiences
            for our clients. From humble beginnings, we’ve grown into a trusted
            name in our industry, known for our commitment to quality and
            innovation.
          </p>
          <p>
            Since our inception, we've worked tirelessly to deliver top-notch
            services and products that resonate with our customers' needs and
            aspirations.
          </p>

          {/* Mission */}
          <div>
            <b className="text-gray-800 text-lg">Our Mission</b>
            <p>
              To empower individuals and businesses by delivering innovative
              solutions that inspire, transform, and make a difference in the
              world.
            </p>
          </div>

          {/* Vision */}
          <div>
            <b className="text-gray-800 text-lg">Our Vision</b>
            <p>
              To be a global leader recognized for our excellence in innovation,
              sustainability, and customer satisfaction.
            </p>
          </div>

          {/* Values */}
          <div>
            <b className="text-gray-800 text-lg">Our Core Values</b>
            <ul className="list-disc ml-5">
              <li>Integrity: We uphold the highest standards of honesty.</li>
              <li>Innovation: We embrace change and foster creativity.</li>
              <li>Customer First: Our customers are at the heart of everything we do.</li>
            </ul>
          </div>

          {/* Call-to-Action */}
          <div className="mt-6">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded shadow-md transition-all"
              onClick={() => alert('Navigate to Contact Us page')}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-gray-100 py-10 text-center">
        <p className="text-gray-700">
          Have any questions? <Link to='/contact'><span className="text-blue-500 underline cursor-pointer">Contact Us</span></Link> today!
        </p>
      </div>
    </div>
  );
};

export default About;
