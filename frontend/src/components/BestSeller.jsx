// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const BestSeller = () => {
    const { products } = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);

    useEffect(() => {
        if (products && products.length > 0) {
            const bestProduct = products.filter((item) => item.bestSeller);
            setBestSeller(bestProduct.slice(0, 5));
        }
    }, [products]);

    return (
        <div className='my~-10'>
            <div className='text-center text-3xl py-8'>
                <Title text1={'BEST'} text2={'SELLERS'} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                    Discover our top-selling products that customers love!
                </p>
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 gap-y-6'>
                {bestSeller.length > 0 ? (
                    bestSeller.map((item) => (
                        <ProductItem 
                            key={item._id} 
                            id={item._id} 
                            name={item.name}
                            image={item.image} 
                            price={item.price} 
                        />
                    ))
                ) : (
                    <p className='text-center col-span-5'>No best-selling products available at the moment.</p>
                )}
            </div>
        </div>
    );
};

export default BestSeller;