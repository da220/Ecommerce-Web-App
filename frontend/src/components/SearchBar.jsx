// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {
    const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
    const [visible,setVisible] = useState(false)
    const location = useLocation();

    useEffect(()=>{
        if (location.pathname.includes('collection')) {
            setVisible(true);
        }
        else {
            setVisible(false);
        }
    },[location])

    return showSearch && visible ? (
        <div className='border-t border-b bg-gray-50 text-center py-5'>
            <div className='flex items-center justify-center border border-gray-300 bg-white shadow-md px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
                <input 
                    value={search} 
                    onChange={(e) => setSearch(e.target.value)} 
                    className='
                        flex-1 outline-none 
                        bg-gray-100 
                        text-gray-700 
                        text-sm px-4 py-2
                        rounded-full
                        focus:bg-white focus:border-blue-400 focus:shadow-md' 
                    type="text" 
                    placeholder='Search' 
                />
                <img className='w-4 ml-2' src={assets.search_icon} alt="Search Icon" />
                <img 
                    onClick={() => setShowSearch(false)} 
                    className='w-4 ml-3 cursor-pointer hover:opacity-75' 
                    src={assets.cross_icon} 
                    alt="Close Search" 
                />
            </div> 
        </div>
    ) : null;
}

export default SearchBar;
