import React, { useState, useContext, useEffect } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [cartItems, setCartItems] = useState([]);
	const [showCheckOut, setShowCheckOut] = useState(false);
	const [showMessage, setShowMessage] = useState(false);
	const [message, setMessage] = useState("");
	const [totalPrice, setTotalPrice] = useState(0);

	function calculateTotalPrice() {
		let totalPrice = 0;
		cartItems.forEach((item) => (totalPrice += item.price));
		setTotalPrice(totalPrice);
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
