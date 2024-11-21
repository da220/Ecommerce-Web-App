/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = '$';
    const delivery_fee = 10;
    const [search,setSearch] = useState('');
    const [showSearch,setShowSearch] = useState(false);
    const [cartItems,setCartItems] = useState({});
    const navigate = useNavigate();


    const addToCart = async (itemId,size) => {

        if (!size){
            toast.error('Select Product Size');
            return;
        }

        let cartData = structuredClone(cartItems);

        if (cartData[itemId]) {
            if (cartData[itemId][size]){
                cartData[itemId][size] += 1;
            }
            else{
                cartData[itemId][size] = 1;
            }
        }
        else{
            cartData[itemId] ={};
            cartData[itemId][size] = 1;
        }
        setCartItems(cartData);
        toast.success("Product added to cart")
    }


    const getCartCount = () =>{
        let totalCount = 0;
        for(const items in cartItems){
            for(const item in cartItems[items]){
                try {
                    if(cartItems[items][item] > 0){
                        totalCount += cartItems[items][item];
                    }
                } catch (error) {
                    console.error("Error counting cart items:", error);
                }
            }
            return totalCount;
        }
    }

    const updateQuantity = async (itemId,size,quantity) => {

        let cartData = structuredClone(cartItems);

        cartData[itemId][size] = quantity;

        setCartItems(cartData);
        toast.success("Cart updated");
    }

    const getCartAmount = () => {
        let totalAmount = 0;
    
        for (const itemId in cartItems) {
            const itemInfo = products.find((product) => product._id === itemId);
    
            if (!itemInfo) {
                console.error(`Product with ID ${itemId} not found.`);
                continue; // Skip if the product is not found
            }
    
            for (const size in cartItems[itemId]) {
                try {
                    const quantity = cartItems[itemId][size];
                    if (quantity > 0) {
                        totalAmount += itemInfo.price * quantity;
                    }
                } catch (error) {
                    console.error("Error calculating cart amount:", error);
                }
            }
        }
    
        return totalAmount;
    };
    
    const value = {
        products, currency, delivery_fee,
        search,setSearch,showSearch,setShowSearch,
        cartItems,addToCart,
        getCartCount,updateQuantity,
        getCartAmount, navigate
    } 

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>     
    )
}

export default ShopContextProvider;