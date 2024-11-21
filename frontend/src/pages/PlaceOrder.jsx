import React, { useContext, useState } from 'react';
import Title from '../components/Title';
import CartTotal from '../components/CartTotal';
import { assets } from '../assets/assets';
import { ShopContext } from '../context/ShopContext';

const PlaceOrder = () => {
  const [method, setMethod] = useState('cod');
  const { navigate } = useContext(ShopContext);

  const handlePlaceOrder = () => {
    // Example validation check
    const requiredFields = document.querySelectorAll('input[required]');
    const isFormValid = Array.from(requiredFields).every((input) => input.value.trim() !== '');

    if (!isFormValid) {
      alert('Please fill in all required fields.');
      return;
    }

    navigate('/orders');
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
      {/* Delivery Information Section */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1="DELIVERY" text2="INFORMATION" />
        </div>
        <div className="flex gap-3">
          <input
            className="border border-gray-300 rounded py-1.5 w-full"
            type="text"
            placeholder="First name"
            required
          />
          <input
            className="border border-gray-300 rounded py-1.5 w-full"
            type="text"
            placeholder="Last name"
            required
          />
        </div>
        <input
          className="border border-gray-300 rounded py-1.5 w-full"
          type="email"
          placeholder="Email address"
          required
        />
        <input
          className="border border-gray-300 rounded py-1.5 w-full"
          type="text"
          placeholder="Street"
          required
        />
        <div className="flex gap-3">
          <input
            className="border border-gray-300 rounded py-1.5 w-full"
            type="text"
            placeholder="City"
            required
          />
          <input
            className="border border-gray-300 rounded py-1.5 w-full"
            type="text"
            placeholder="State"
            required
          />
        </div>
        <div className="flex gap-3">
          <input
            className="border border-gray-300 rounded py-1.5 w-full"
            type="number"
            placeholder="Zipcode"
            required
          />
          <input
            className="border border-gray-300 rounded py-1.5 w-full"
            type="text"
            placeholder="Country"
            required
          />
        </div>
        <input
          className="border border-gray-300 rounded py-1.5 w-full"
          type="number"
          placeholder="Phone number"
          required
        />
      </div>

      {/* Payment Section */}
      <div className="mt-8">
        <CartTotal />

        <div className="mt-12">
          <Title text1="PAYMENT" text2="METHOD" />
          <div className="flex flex-col gap-3 mt-4">
            {/* Stripe */}
            <div
              onClick={() => setMethod('stripe')}
              className={`flex items-center gap-3 border p-2 px-3 cursor-pointer ${
                method === 'stripe' ? 'border-green-400' : 'border-gray-300'
              }`}
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === 'stripe' ? 'bg-green-400' : ''
                }`}
              ></p>
              <img className="h-5 mx-4" src={assets.stripe_logo} alt="Stripe" />
            </div>

            {/* Razorpay */}
            <div
              onClick={() => setMethod('razorpay')}
              className={`flex items-center gap-3 border p-2 px-3 cursor-pointer ${
                method === 'razorpay' ? 'border-green-400' : 'border-gray-300'
              }`}
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === 'razorpay' ? 'bg-green-400' : ''
                }`}
              ></p>
              <img
                className="h-5 mx-4"
                src={assets.razorpay_logo}
                alt="Razorpay"
              />
            </div>

            {/* Cash on Delivery */}
            <div
              onClick={() => setMethod('cod')}
              className={`flex items-center gap-3 border p-2 px-3 cursor-pointer ${
                method === 'cod' ? 'border-green-400' : 'border-gray-300'
              }`}
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === 'cod' ? 'bg-green-400' : ''
                }`}
              ></p>
              <p className="text-gray-500 text-sm font-medium mx-4">
                CASH ON DELIVERY
              </p>
            </div>
          </div>
        </div>

        {/* Place Order Button */}
        <div className="w-full text-end mt-8">
          <button
            onClick={handlePlaceOrder}
            className="bg-black text-white px-16 py-3 text-sm"
          >
            PLACE ORDER
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;