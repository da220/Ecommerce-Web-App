// eslint-disable-next-line no-unused-vars
import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        
        <div>
            <img src={assets.logo} className='mb-5 w-32' alt="Company Logo" />
            <p className='w-full md:w-2/3 text-gray-600'>
              Come shop with us and get the best services ever.
            </p>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#delivery">Delivery</a></li>
                <li><a href="#privacy">Privacy Policy</a></li>
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+2-345-564-333</li>
                <li><a href="mailto:contact@smartstep.com" className='text-gray-600 hover:underline'>contact@smartstep.com</a></li>
            </ul>
        </div>
      </div>

      <div>
        <hr /> 
        <p className='py-5 text-sm text-center'>Copyright 2024@ smartstep.com - All Rights Reserved</p>
      </div>

    </div>
  )
}

export default Footer
