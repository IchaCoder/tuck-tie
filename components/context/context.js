import React, { useState, useContext, useEffect } from "react";
import fabrics from "../products/data";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [showCheckOut, setShowCheckOut] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const [message, setMessage] = useState("");
    const [totalPrice, setTotalPrice] = useState(0);

    function calculateTotalPrice() {
        let totalPrice = 0;
        cartItems.forEach((item) => (totalPrice += item.price * item.qty));
        setTotalPrice(totalPrice);
    }

    function handleAddToCart(id) {
        let isItemFound;
        for (let i = 0; i < cartItems.length; i++) {
            if (cartItems[i].id === id) {
                isItemFound = true;
            } else {
                isItemFound = false;
            }
        }

        if (cartItems.length <= 0 || !isItemFound) {
            const selectedItem = fabrics.find((item) => item.id === id);
            setCartItems([...cartItems, { ...selectedItem, qty: 1 }]);
            setMessage("Added to Cart");
            setShowMessage(true);
            setTimeout(() => {
                setShowMessage(false);
            }, 2000);
        } else if (isItemFound) {
            setShowMessage(true);
            setTimeout(() => {
                setShowMessage(false);
            }, 2000);
            setMessage("Item already exists in cart");
            setCartItems(cartItems);
        }
    }

    useEffect(() => {
        calculateTotalPrice();
    }, [cartItems]);

    return (
        <AppContext.Provider
            value={{
                cartItems,
                setCartItems,
                showCheckOut,
                setShowCheckOut,
                showMessage,
                setShowMessage,
                message,
                setMessage,
                totalPrice,
                setTotalPrice,
                calculateTotalPrice,
                handleAddToCart,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppProvider, AppContext };
